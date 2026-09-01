import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  apply,
  CLAUDE_DISCOVERY_API,
  anthropicModelsUrl,
  CLAUDE_KNOWN_MODELS,
  CLAUDE_PROVIDER_SETTINGS_NS,
  CLAUDE_PROVIDER_TYPE,
  discoverAnthropicModels,
  isClaudeProviderType,
  readAnthropicModelPage,
  withKnownModelMetadata,
} from '../src/index.js'

const builtClient = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')
const packageManifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

test('builds the forked section against DSH 0.1.2-alpha.3', () => {
  assert.equal(packageManifest.exports['./client'], './lib/client.js')
  assert.equal(packageManifest.scripts.build, 'node scripts/build-client.mjs')
  assert.equal(packageManifest.devDependencies['@deepseek-ai/dsh-client-ui-settings-models'], '0.1.2-alpha.3')
  assert.ok(!packageManifest.dsh.client.inject.includes('@deepseek-ai/dsh-client-runtime'))
})

test('built client patches the alpha operations world, not the removed rc APIs', () => {
  assert.match(builtClient, /operations\.writeSettings\(CLAUDE_PROVIDER_SETTINGS_NS/)
  assert.match(builtClient, /thinkingPresets: isClaudeProvider\(row, state\)/)
  assert.match(builtClient, /claudeCustomAdd/)
  assert.doesNotMatch(builtClient, /api\.settings\.mutate/)
  assert.doesNotMatch(builtClient, /require\("@deepseek-ai\/dsh-client-runtime\/client"\)/)
  assert.doesNotMatch(builtClient, /require\("@deepseek-ai\/dsh-client-schema-form"\)/)
})

test('built client writes native adaptive-thinking settings', () => {
  assert.match(builtClient, /if \(adaptive\) compat\.forceAdaptiveThinking = true/)
  assert.match(builtClient, /withNativeClaudeProfile\(credentialDraft\)/)
  assert.match(builtClient, /reasoningEfforts: reasoningEffortsForPreset/)
})

test('builds the Anthropic models endpoint from the Messages base URL', () => {
  assert.equal(anthropicModelsUrl('https://api.anthropic.com').href, 'https://api.anthropic.com/v1/models')
  assert.equal(anthropicModelsUrl('https://proxy.example.com/v1').href, 'https://proxy.example.com/v1/models')
  assert.equal(anthropicModelsUrl('https://proxy.example.com/v1/?x=1#y').href, 'https://proxy.example.com/v1/models')
  assert.throws(() => anthropicModelsUrl('ftp://api.anthropic.com'), /http 或 https/)
  assert.throws(() => anthropicModelsUrl('not a url'), /有效 URL/)
})

test('parses Anthropic model pages and skips malformed rows', () => {
  const page = readAnthropicModelPage({
    data: [
      { id: 'claude-opus-5', display_name: 'Claude Opus 5', context_window: 1000000, max_output_tokens: 128000 },
      { id: '' },
      null,
      { name: 'no id' },
      { id: 'claude-sonnet-5' },
    ],
    has_more: true,
    last_id: 'claude-sonnet-5',
  })
  assert.deepEqual(page.models, [
    { id: 'claude-opus-5', name: 'Claude Opus 5', contextWindow: 1000000, maxTokens: 128000 },
    { id: 'claude-sonnet-5' },
  ])
  assert.equal(page.hasMore, true)
  assert.equal(page.lastId, 'claude-sonnet-5')
  assert.throws(() => readAnthropicModelPage({}), /data 数组/)
})

test('fills recorded capacities for known Claude model ids', () => {
  assert.deepEqual(withKnownModelMetadata({ id: 'claude-opus-5' }), {
    id: 'claude-opus-5',
    contextWindow: CLAUDE_KNOWN_MODELS['claude-opus-5'].contextWindow,
    maxTokens: CLAUDE_KNOWN_MODELS['claude-opus-5'].maxTokens,
  })
  assert.deepEqual(withKnownModelMetadata({ id: 'unknown-model', maxTokens: 5 }), { id: 'unknown-model', maxTokens: 5 })
})

function jsonResponse(body) {
  const text = JSON.stringify(body)
  return {
    ok: true,
    status: 200,
    headers: new Headers({ 'content-length': String(text.length) }),
    body: new Blob([text]).stream(),
  }
}

test('discovery follows cursor pagination, dedupes, and applies recorded metadata', async () => {
  const calls = []
  const fetchImpl = async (url) => {
    calls.push(url.href)
    if (url.searchParams.get('after_id') === null) {
      return jsonResponse({ data: [{ id: 'claude-opus-5' }, { id: 'other-model' }], has_more: true, last_id: 'other-model' })
    }
    return jsonResponse({ data: [{ id: 'other-model' }, { id: 'claude-haiku-4-5' }], has_more: false })
  }
  const models = await discoverAnthropicModels({ baseURL: 'https://api.anthropic.com', apiKey: 'sk-test', fetchImpl })
  assert.deepEqual(models.map(model => model.id), ['claude-opus-5', 'other-model', 'claude-haiku-4-5'])
  assert.equal(models[0].contextWindow, 1000000)
  assert.equal(models[1].contextWindow, undefined)
  assert.deepEqual(calls, [
    'https://api.anthropic.com/v1/models',
    'https://api.anthropic.com/v1/models?after_id=other-model',
  ])
})

test('discovery honors the caller signal', async () => {
  const controller = new AbortController()
  controller.abort()
  await assert.rejects(
    discoverAnthropicModels({ baseURL: 'https://api.anthropic.com', apiKey: 'sk-test', signal: controller.signal, fetchImpl: async () => { throw new Error('unreachable') } }),
    /已取消/,
  )
})

test('recognizes only provider ids explicitly registered under the Claude provider type', () => {
  const settings = { providerTypes: { xiaobai: CLAUDE_PROVIDER_TYPE } }
  assert.equal(isClaudeProviderType(settings, 'xiaobai'), true)
  assert.equal(isClaudeProviderType(settings, 'generic-anthropic-route'), false)
  assert.equal(isClaudeProviderType({ providerTypes: { xiaobai: 'other-type' } }, 'xiaobai'), false)
  assert.equal(isClaudeProviderType(undefined, 'xiaobai'), false)
})

function fakeContext({ typed }) {
  const cleanups = []
  const llm = { discoverModels: async () => ['upstream'] }
  const ctx = {
    llm,
    settings: {
      register: (ns, _schema, _options) => {
        assert.equal(ns, CLAUDE_PROVIDER_SETTINGS_NS)
        return { get: () => ({ providerTypes: typed ? { myclaude: CLAUDE_PROVIDER_TYPE } : {} }) }
      },
    },
    get: () => undefined,
    effect: (factory) => { cleanups.push(factory()) },
  }
  return { ctx, llm, dispose: () => { for (const cleanup of cleanups) cleanup() } }
}

test('leaves every non-Claude interrogation upstream with the alpha signal parameter', async () => {
  const { ctx, llm, dispose } = fakeContext({ typed: false })
  let seen
  llm.discoverModels = async function (settingsNs, request, signal) {
    seen = { settingsNs, request, signal }
    return ['upstream']
  }
  apply(ctx)
  const signal = new AbortController().signal
  assert.deepEqual(await llm.discoverModels('llm-pi-ai', { provider: 'generic', api: 'anthropic-messages' }, signal), ['upstream'])
  assert.equal(seen.signal, signal)
  assert.equal(seen.request.api, 'anthropic-messages')
  dispose()
})

test('maps the built-in anthropic route back to its stock catalog', async () => {
  const { ctx, llm, dispose } = fakeContext({ typed: true })
  let seen
  llm.discoverModels = async function (settingsNs, request, signal) {
    seen = { settingsNs, request, signal }
    return ['upstream']
  }
  apply(ctx)
  assert.deepEqual(await llm.discoverModels('llm-pi-ai', { provider: 'anthropic', api: CLAUDE_DISCOVERY_API }), ['upstream'])
  assert.equal(seen.request.api, 'anthropic-messages')
  dispose()
})

test('intercepts only the Claude discovery api and requires a baseURL', async () => {
  const { ctx, llm, dispose } = fakeContext({ typed: true })
  apply(ctx)
  await assert.rejects(
    llm.discoverModels('llm-pi-ai', { provider: 'myclaude', api: CLAUDE_DISCOVERY_API }),
    /API 地址/,
  )
  dispose()
})

test('restores the upstream discovery on disposal', async () => {
  const { ctx, llm, dispose } = fakeContext({ typed: true })
  const upstream = llm.discoverModels
  apply(ctx)
  assert.notEqual(llm.discoverModels, upstream)
  dispose()
  assert.equal(llm.discoverModels, upstream)
})
