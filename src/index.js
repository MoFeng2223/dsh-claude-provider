import z from '@deepseek-ai/schemastery'
import { settingsNamespace } from '@deepseek-ai/dsh-settings'

export const name = 'claude-provider'
export const inject = ['llm', 'settings']

export const CLAUDE_PROVIDER_TYPE = 'claude-adaptive'
export const CLAUDE_PROVIDER_SETTINGS_NS = settingsNamespace('dsh-claude-provider')
export const CLAUDE_PROVIDER_DIRECTORY_SENTINEL = 'dsh-claude-provider-type'

const ProviderTypeSettings = z.object({
  providerTypes: z.dict(z.const(CLAUDE_PROVIDER_TYPE)).default({}),
})

export const CLAUDE_DISCOVERY_API = 'mofeng-anthropic-models'

const PI_AI_SETTINGS_NS = 'llm-pi-ai'
const MAX_DISCOVERY_RESPONSE_BYTES = 4 * 1024 * 1024
const MAX_DISCOVERY_PAGES = 100

function requireNonEmptyString(value, field) {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`claude-provider: ${field} must be a non-empty string`)
  }
  return value
}

function positiveInteger(...values) {
  for (const value of values) {
    if (typeof value === 'number' && Number.isSafeInteger(value) && value > 0) return value
  }
  return undefined
}

function nonEmptyString(...values) {
  for (const value of values) {
    if (typeof value === 'string' && value.length > 0) return value
  }
  return undefined
}

/** Build the Anthropic Models API endpoint from the same base used by Messages. */
export function anthropicModelsUrl(baseURL) {
  const raw = requireNonEmptyString(baseURL, 'baseURL').trim()
  let url
  try {
    url = new URL(raw)
  } catch (error) {
    throw new Error('Claude 模型目录：API 地址不是有效 URL', { cause: error })
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('Claude 模型目录：API 地址只能使用 http 或 https')
  }
  const path = url.pathname.replace(/\/+$/, '')
  url.pathname = /\/v1$/i.test(path) ? `${path}/models` : `${path}/v1/models`
  url.search = ''
  url.hash = ''
  return url
}

async function readBoundedResponse(response, url) {
  const declared = Number(response.headers.get('content-length') ?? Number.NaN)
  if (Number.isFinite(declared) && declared > MAX_DISCOVERY_RESPONSE_BYTES) {
    await response.body?.cancel()
    throw new Error(`Claude 模型目录：${url} 返回内容超过 4 MiB`)
  }
  if (response.body === null) return ''
  const reader = response.body.getReader()
  const chunks = []
  let total = 0
  try {
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      total += value.byteLength
      if (total > MAX_DISCOVERY_RESPONSE_BYTES) {
        throw new Error(`Claude 模型目录：${url} 返回内容超过 4 MiB`)
      }
      chunks.push(value)
    }
  } finally {
    await reader.cancel().catch(() => {})
  }
  const body = new Uint8Array(total)
  let offset = 0
  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }
  return new TextDecoder().decode(body)
}

/** Parse one Anthropic `/v1/models` page into DSH discovery rows. */
export function readAnthropicModelPage(body) {
  const data = body?.data
  if (!Array.isArray(data)) {
    throw new Error('Claude 模型目录：接口返回中没有 data 数组')
  }
  const models = []
  for (const raw of data) {
    if (raw === null || typeof raw !== 'object' || Array.isArray(raw)) continue
    const id = nonEmptyString(raw.id)
    if (id === undefined) continue
    const name = nonEmptyString(raw.display_name, raw.name)
    const contextWindow = positiveInteger(raw.max_input_tokens, raw.context_window, raw.context_length)
    const maxTokens = positiveInteger(raw.max_tokens, raw.max_output_tokens)
    models.push({
      id,
      ...name === undefined ? {} : { name },
      ...contextWindow === undefined ? {} : { contextWindow },
      ...maxTokens === undefined ? {} : { maxTokens },
    })
  }
  return {
    models,
    hasMore: body?.has_more === true,
    lastId: nonEmptyString(body?.last_id),
  }
}

function discoveryHeaders(apiKey) {
  const value = requireNonEmptyString(apiKey, 'apiKey').trim()
  if (value.length === 0) throw new Error('Claude 模型目录：请先填写 API 密钥')
  try {
    return new Headers({
      accept: 'application/json',
      'anthropic-version': '2023-06-01',
      'x-api-key': value,
    })
  } catch (error) {
    throw new Error('Claude 模型目录：API 密钥包含无法用于 HTTP 请求头的字符', { cause: error })
  }
}

function responseErrorMessage(body) {
  const message = body?.error?.message
  return typeof message === 'string' && message.length > 0 ? message.slice(0, 500) : undefined
}

/** Query only the native Anthropic Models API, including cursor pagination. */
export async function discoverAnthropicModels({ baseURL, apiKey, signal, fetchImpl = globalThis.fetch }) {
  if (typeof fetchImpl !== 'function') throw new Error('Claude 模型目录：当前运行环境没有 fetch')
  const endpoint = anthropicModelsUrl(baseURL)
  const headers = discoveryHeaders(apiKey)
  const models = []
  const seen = new Set()
  let afterId
  for (let page = 0; page < MAX_DISCOVERY_PAGES; page += 1) {
    if (signal?.aborted) throw new Error('Claude 模型目录：获取已取消')
    const url = new URL(endpoint)
    if (afterId !== undefined) url.searchParams.set('after_id', afterId)
    let response
    try {
      response = await fetchImpl(url, { method: 'GET', headers, signal })
    } catch (error) {
      if (signal?.aborted) throw new Error('Claude 模型目录：获取已取消', { cause: error })
      throw new Error(`Claude 模型目录：无法连接 ${url.origin}`, { cause: error })
    }
    const text = await readBoundedResponse(response, url.href)
    let body
    try {
      body = JSON.parse(text)
    } catch (error) {
      throw new Error(`Claude 模型目录：${url.href} 未返回 JSON`, { cause: error })
    }
    if (!response.ok) {
      const detail = responseErrorMessage(body)
      throw new Error(
        `Claude 模型目录：${url.href} 返回 ${response.status}`
        + `${response.status === 401 || response.status === 403 ? '，请检查 API 密钥' : ''}`
        + `${detail === undefined ? '' : `：${detail}`}`,
      )
    }
    const parsed = readAnthropicModelPage(body)
    for (const model of parsed.models) {
      if (seen.has(model.id)) continue
      seen.add(model.id)
      models.push(model)
    }
    if (!parsed.hasMore) return models
    if (parsed.lastId === undefined || parsed.lastId === afterId) {
      throw new Error('Claude 模型目录：分页响应缺少有效的 last_id')
    }
    afterId = parsed.lastId
  }
  throw new Error(`Claude 模型目录：分页超过 ${MAX_DISCOVERY_PAGES} 页`)
}

function configuredCredentialRef(ctx, provider) {
  if (typeof provider !== 'string' || provider.length === 0) return undefined
  const section = ctx.get('settings')?.get(PI_AI_SETTINGS_NS)
  const profile = section?.providers?.[provider]
  const ref = profile?.apiKeyEnv
  return typeof ref === 'string' && ref.length > 0 ? ref : undefined
}

async function discoveryApiKey(ctx, request) {
  if (typeof request.apiKey === 'string' && request.apiKey.trim().length > 0) return request.apiKey
  const ref = configuredCredentialRef(ctx, request.provider)
  if (ref === undefined) throw new Error('Claude 模型目录：请先填写 API 密钥')
  const value = (await ctx.get('credentials')?.resolve(ref))?.value ?? process.env[ref]
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Claude 模型目录：未找到已保存的凭据 ${ref}`)
  }
  return value
}

function installClaudeModelDiscovery(ctx) {
  const llm = ctx.llm
  const upstream = llm.discoverModels
  const wrapped = async function (settingsNs, request) {
    if (settingsNs !== PI_AI_SETTINGS_NS || request.api !== CLAUDE_DISCOVERY_API) {
      return upstream.call(this, settingsNs, request)
    }
    // The built-in Anthropic route already has pi-ai's catalog and should keep
    // using it. The plugin extension is only for hand-declared Claude routes.
    if (request.provider === 'anthropic') {
      return upstream.call(this, settingsNs, { ...request, api: 'anthropic-messages' })
    }
    if (typeof request.baseURL !== 'string' || request.baseURL.length === 0) {
      throw new Error('Claude 模型目录：请先填写 API 地址')
    }
    const apiKey = await discoveryApiKey(ctx, request)
    return discoverAnthropicModels({
      baseURL: request.baseURL,
      apiKey,
      signal: request.signal,
    })
  }
  llm.discoverModels = wrapped
  ctx.effect(() => () => {
    if (llm.discoverModels === wrapped) llm.discoverModels = upstream
  })
}

/** Whether an explicitly registered provider belongs to this plugin's Claude type. */
export function isClaudeProviderType(settings, provider) {
  if (typeof provider !== 'string' || provider.length === 0) return false
  return settings?.providerTypes?.[provider] === CLAUDE_PROVIDER_TYPE
}

export function apply(ctx) {
  ctx.settings.register(
    CLAUDE_PROVIDER_SETTINGS_NS,
    ProviderTypeSettings,
    { base: { providerTypes: {} } },
  )
  ctx.llm.registerConfigurableProviders([{
    provider: CLAUDE_PROVIDER_DIRECTORY_SENTINEL,
    displayName: 'Claude Provider Type',
    settingsNs: CLAUDE_PROVIDER_SETTINGS_NS,
    settingsPath: ['providerTypes'],
  }])
  installClaudeModelDiscovery(ctx)
}
