import { AsyncLocalStorage } from 'node:async_hooks'
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

const DEFAULT_EFFORT_MAP = Object.freeze({
  minimal: 'low',
  low: 'low',
  medium: 'medium',
  high: 'high',
  xhigh: 'xhigh',
  max: 'max',
})

const INTERLEAVED_THINKING_BETA = 'interleaved-thinking-2025-05-14'
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

function resolveConfig(config = {}) {
  const effortMap = { ...DEFAULT_EFFORT_MAP, ...config.effortMap }
  for (const [level, effort] of Object.entries(effortMap)) {
    requireNonEmptyString(level, 'effortMap key')
    requireNonEmptyString(effort, `effortMap.${level}`)
  }

  return { effortMap, debug: config.debug === true }
}

/** Whether an explicitly registered provider belongs to this plugin's Claude type. */
export function isClaudeProviderType(settings, provider) {
  if (typeof provider !== 'string' || provider.length === 0) return false
  return settings?.providerTypes?.[provider] === CLAUDE_PROVIDER_TYPE
}

/** Give typed Claude routes a concrete default and readable labels for toggle-only models. */
export function withClaudeProviderReasoningDefaults(modelInfo) {
  const reasoning = modelInfo?.reasoning
  if (reasoning === undefined || !Array.isArray(reasoning.efforts)) return modelInfo
  const ids = new Set(reasoning.efforts.map(effort => String(effort.id)))
  const toggleOnly = ids.size === 2 && ids.has('off') && ids.has('high')
  return {
    ...modelInfo,
    reasoning: {
      ...reasoning,
      defaultEffort: 'high',
      efforts: toggleOnly
        ? reasoning.efforts.map(effort => ({
            ...effort,
            name: effort.id === 'off' ? 'Off' : effort.id === 'high' ? 'On' : effort.name,
          }))
        : reasoning.efforts,
    },
  }
}

function installClaudeModelInfoDefaults(ctx, providerTypes) {
  const llm = ctx.llm
  const upstream = llm.resolveModelInfo
  const wrapped = async function (provider, model, signal) {
    const info = await upstream.call(this, provider, model, signal)
    return isClaudeProviderType(providerTypes.get(), provider)
      ? withClaudeProviderReasoningDefaults(info)
      : info
  }
  llm.resolveModelInfo = wrapped
  ctx.effect(() => () => {
    if (llm.resolveModelInfo === wrapped) llm.resolveModelInfo = upstream
  })
}

/** Four- and five-level model profiles are adaptive; the two-level toggle is legacy budget thinking. */
export function shouldUseAdaptiveThinking(modelInfo) {
  const efforts = modelInfo?.reasoning?.efforts
  if (!Array.isArray(efforts)) return false
  const ids = new Set(efforts.map(effort => String(effort.id)))
  return ids.has('low') && ids.has('medium') && ids.has('high') && ids.has('max')
}

function hasAdaptiveEffortMap(map) {
  if (map === null || typeof map !== 'object' || Array.isArray(map)) return false
  return ['low', 'medium', 'high', 'max'].every(level => typeof map[level] === 'string' && map[level].length > 0)
}

/** Whether a pi-ai catalog model should be serialized with adaptive thinking. */
export function piModelHasAdaptiveEfforts(model) {
  return hasAdaptiveEffortMap(model?.thinkingLevelMap)
}

/**
 * Stamp `compat.forceAdaptiveThinking` onto a pi-ai model so the Anthropic
 * adapter builds `thinking.type: adaptive` before `@anthropic-ai/sdk` sees the
 * payload. That is what removes the SDK deprecation warning for Opus 4.6.
 */
export function withForcedAdaptiveThinking(model, provider, settings) {
  if (!isClaudeProviderType(settings, provider)) return model
  if (model === null || typeof model !== 'object' || Array.isArray(model)) return model
  if (model.compat?.forceAdaptiveThinking === true) return model
  if (!piModelHasAdaptiveEfforts(model)) return model
  return {
    ...model,
    compat: { ...model.compat, forceAdaptiveThinking: true },
  }
}

function installForceAdaptiveThinking(ctx, providerTypes) {
  const llm = ctx.llm
  if (typeof llm.listProviders !== 'function' || typeof llm.registration !== 'function') return

  const patched = new WeakSet()
  const wrap = () => {
    for (const provider of llm.listProviders()) {
      const id = provider?.id
      if (typeof id !== 'string' || id.length === 0) continue
      let adapter
      try {
        adapter = llm.registration(id).adapter
      } catch {
        continue
      }
      if (adapter === null || typeof adapter !== 'object' || typeof adapter.modelOf !== 'function') continue
      if (patched.has(adapter)) continue
      const original = adapter.modelOf.bind(adapter)
      adapter.modelOf = (snapshot, providerId, modelId) => (
        withForcedAdaptiveThinking(original(snapshot, providerId, modelId), providerId, providerTypes.get())
      )
      patched.add(adapter)
    }
  }

  wrap()
  ctx.effect(() => ctx.on('llm/adapters-updated', wrap), 'claude-provider: force adaptive thinking')
}

function effortFromBudget(budget) {
  if (typeof budget !== 'number' || !Number.isFinite(budget)) return 'high'
  if (budget <= 2048) return 'low'
  if (budget <= 8192) return 'medium'
  return 'high'
}

function selectedEffort(state, thinking) {
  if (state.level !== undefined && state.level !== 'off') {
    return state.effortMap[state.level] ?? state.level
  }
  return effortFromBudget(thinking.budget_tokens)
}

/**
 * Convert one matching Anthropic Messages body from legacy extended thinking
 * to adaptive thinking. The input object is never mutated.
 */
export function rewriteAnthropicPayload(payload, state) {
  if (payload === null || typeof payload !== 'object' || Array.isArray(payload)) return payload
  if (payload.model !== state.model) return payload
  const thinking = payload.thinking
  if (thinking === null || typeof thinking !== 'object' || Array.isArray(thinking)) return payload

  if (thinking.type === 'disabled') {
    const rewritten = { ...payload }
    delete rewritten.thinking
    delete rewritten.output_config
    return rewritten
  }

  if (thinking.type !== 'enabled') return payload
  const { budget_tokens: _budgetTokens, ...preservedThinking } = thinking
  return {
    ...payload,
    thinking: { ...preservedThinking, type: 'adaptive' },
    output_config: {
      ...(payload.output_config ?? {}),
      effort: selectedEffort(state, thinking),
    },
  }
}

function withoutLegacyThinkingBeta(headers) {
  if (headers === undefined) return undefined
  const rewritten = new Headers(headers)
  const value = rewritten.get('anthropic-beta')
  if (value === null) return rewritten
  const features = value.split(',').map(feature => feature.trim()).filter(Boolean)
  const kept = features.filter(feature => feature !== INTERLEAVED_THINKING_BETA)
  if (kept.length === features.length) return rewritten
  if (kept.length === 0) rewritten.delete('anthropic-beta')
  else rewritten.set('anthropic-beta', kept.join(','))
  return rewritten
}

function decodeBody(body) {
  if (typeof body === 'string') return body
  if (body instanceof Uint8Array) return new TextDecoder().decode(body)
  if (body instanceof ArrayBuffer) return new TextDecoder().decode(new Uint8Array(body))
  if (ArrayBuffer.isView(body)) {
    return new TextDecoder().decode(new Uint8Array(body.buffer, body.byteOffset, body.byteLength))
  }
  return undefined
}

function rewriteJsonBody(body, state) {
  const text = decodeBody(body)
  if (text === undefined) return undefined
  let parsed
  try {
    parsed = JSON.parse(text)
  } catch {
    return undefined
  }
  const rewritten = rewriteAnthropicPayload(parsed, state)
  return rewritten === parsed ? undefined : JSON.stringify(rewritten)
}

async function rewriteFetchArguments(input, init, state) {
  if (init?.body !== undefined && init.body !== null) {
    const body = rewriteJsonBody(init.body, state)
    if (body === undefined) return undefined
    return [input, { ...init, body, headers: withoutLegacyThinkingBeta(init.headers) }]
  }

  if (typeof Request !== 'undefined' && input instanceof Request && input.body !== null) {
    const text = await input.clone().text()
    const body = rewriteJsonBody(text, state)
    if (body === undefined) return undefined
    const requestInit = {
      body,
      headers: withoutLegacyThinkingBeta(input.headers),
    }
    if (input.method !== 'GET' && input.method !== 'HEAD') requestInit.duplex = 'half'
    return [new Request(input, requestInit), init]
  }

  return undefined
}

function contextualStream(storage, state, next) {
  return {
    [Symbol.asyncIterator]() {
      let iterator
      const invoke = (method, value) => storage.run(state, () => {
        iterator ??= next()[Symbol.asyncIterator]()
        const operation = iterator[method]
        if (operation === undefined) return Promise.resolve({ done: true, value })
        return operation.call(iterator, value)
      })
      return {
        next: value => invoke('next', value),
        return: value => invoke('return', value),
        throw: error => invoke('throw', error),
      }
    },
  }
}

async function* modelAwareStream(ctx, storage, resolved, options, next) {
  let modelInfo
  try {
    modelInfo = await ctx.llm.resolveModelInfo(options.provider, options.model, options.signal)
  } catch {
    yield* next()
    return
  }
  if (!shouldUseAdaptiveThinking(modelInfo)) {
    yield* next()
    return
  }
  const state = {
    provider: options.provider,
    model: options.model,
    level: options.reasoningEffort === undefined ? undefined : String(options.reasoningEffort),
    effortMap: resolved.effortMap,
  }
  yield* contextualStream(storage, state, next)
}

export function apply(ctx, config) {
  const resolved = resolveConfig(config)
  const providerTypes = ctx.settings.register(
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
  installClaudeModelInfoDefaults(ctx, providerTypes)
  installForceAdaptiveThinking(ctx, providerTypes)
  installClaudeModelDiscovery(ctx)
  const storage = new AsyncLocalStorage()
  const upstreamFetch = globalThis.fetch
  if (typeof upstreamFetch !== 'function') {
    throw new Error('claude-provider: global fetch is unavailable')
  }

  const adaptiveFetch = async (input, init) => {
    const state = storage.getStore()
    if (state === undefined) return upstreamFetch(input, init)
    const rewritten = await rewriteFetchArguments(input, init, state)
    if (rewritten !== undefined && resolved.debug) {
      process.stderr.write(
        `[claude-provider] rewrote ${state.provider}/${state.model}`
        + ` effort=${state.level ?? 'inferred'}\n`,
      )
    }
    return rewritten === undefined
      ? upstreamFetch(input, init)
      : upstreamFetch(rewritten[0], rewritten[1])
  }

  globalThis.fetch = adaptiveFetch
  ctx.effect(() => () => {
    storage.disable()
    if (globalThis.fetch === adaptiveFetch) globalThis.fetch = upstreamFetch
  })

  ctx.on('llm/stream', (options, next) => {
    if (!isClaudeProviderType(providerTypes.get(), options.provider)) return next()
    return modelAwareStream(ctx, storage, resolved, options, next)
  })
}
