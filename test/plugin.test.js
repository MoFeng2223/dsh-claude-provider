import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  apply,
  anthropicModelsUrl,
  CLAUDE_PROVIDER_DIRECTORY_SENTINEL,
  discoverAnthropicModels,
  isClaudeProviderType,
  readAnthropicModelPage,
} from '../src/index.js'

const builtClient = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')

test('RC8 client writes native adaptive-thinking settings without RC7 externals', () => {
  assert.match(builtClient, /if \(adaptive\) compat\.forceAdaptiveThinking = true/)
  assert.match(builtClient, /Reflect\.deleteProperty\(compat, "forceAdaptiveThinking"\)/)
  assert.match(builtClient, /withNativeClaudeProfile\(credentialDraft\)/)
  assert.match(builtClient, /reasoningEfforts: reasoningEffortsForPreset/)
  assert.doesNotMatch(builtClient, /require\("@deepseek-ai\/dsh-client-web-react"\)/)
  assert.doesNotMatch(builtClient, /require\("@deepseek-ai\/dsh-client-schema-form"\)/)
})

test('recognizes only provider ids explicitly registered under the Claude provider type', () => {
  const settings = {
    providerTypes: {
      xiaobai: 'claude-adaptive',
      morecode: 'claude-adaptive',
    },
  }
  assert.equal(isClaudeProviderType(settings, 'xiaobai'), true)
  assert.equal(isClaudeProviderType(settings, 'morecode'), true)
  assert.equal(isClaudeProviderType(settings, 'generic-anthropic-route'), false)
  assert.equal(isClaudeProviderType({ providerTypes: { xiaobai: 'other-type' } }, 'xiaobai'), false)
  assert.equal(isClaudeProviderType({ providerTypes: {} }, 'claude-opus-5'), false)
})

test('registers the Claude provider type without installing a request rewrite hook', () => {
  const cleanups = []
  let directoryEntries
  let registeredNamespace
  const ctx = {
    llm: {
      discoverModels: async () => [],
      registerConfigurableProviders: entries => {
        directoryEntries = entries
      },
    },
    settings: {
      register: ns => {
        registeredNamespace = ns
      },
    },
    get: () => undefined,
    effect: setup => {
      const cleanup = setup()
      if (typeof cleanup === 'function') cleanups.push(cleanup)
    },
  }

  try {
    apply(ctx, {})
    assert.equal(registeredNamespace, 'dsh-claude-provider')
    assert.deepEqual(directoryEntries, [{
      provider: CLAUDE_PROVIDER_DIRECTORY_SENTINEL,
      displayName: 'Claude Provider Type',
      settingsNs: 'dsh-claude-provider',
      settingsPath: ['providerTypes'],
    }])
  } finally {
    for (const cleanup of cleanups.reverse()) cleanup()
  }
})

test('builds the native Anthropic models endpoint from Messages base URLs', () => {
  assert.equal(anthropicModelsUrl('https://api.example.com').href, 'https://api.example.com/v1/models')
  assert.equal(anthropicModelsUrl('https://api.example.com/anthropic').href, 'https://api.example.com/anthropic/v1/models')
  assert.equal(anthropicModelsUrl('https://api.example.com/anthropic/v1/').href, 'https://api.example.com/anthropic/v1/models')
})

test('parses Anthropic model capacities without requiring gateway extensions', () => {
  assert.deepEqual(readAnthropicModelPage({
    data: [{
      id: 'claude-haiku-4-5-20251001',
      display_name: 'Claude Haiku 4.5',
      max_input_tokens: 200000,
      max_tokens: 64000,
    }],
    has_more: false,
  }), {
    models: [{
      id: 'claude-haiku-4-5-20251001',
      name: 'Claude Haiku 4.5',
      contextWindow: 200000,
      maxTokens: 64000,
    }],
    hasMore: false,
    lastId: undefined,
  })
})

test('discovers every Anthropic page with native headers and deduplicates models', async () => {
  const requests = []
  const pages = [{
    data: [{ id: 'claude-a', display_name: 'Claude A', max_input_tokens: 200000, max_tokens: 64000 }],
    has_more: true,
    last_id: 'claude-a',
  }, {
    data: [{ id: 'claude-a' }, { id: 'claude-b' }],
    has_more: false,
  }]
  const models = await discoverAnthropicModels({
    baseURL: 'https://gateway.example/anthropic',
    apiKey: 'test-key',
    fetchImpl: async (url, init) => {
      requests.push({ url: String(url), headers: new Headers(init.headers) })
      return new Response(JSON.stringify(pages.shift()), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    },
  })
  assert.deepEqual(models.map(model => model.id), ['claude-a', 'claude-b'])
  assert.equal(requests[0].url, 'https://gateway.example/anthropic/v1/models')
  assert.equal(requests[1].url, 'https://gateway.example/anthropic/v1/models?after_id=claude-a')
  assert.equal(requests[0].headers.get('x-api-key'), 'test-key')
  assert.equal(requests[0].headers.get('anthropic-version'), '2023-06-01')
  assert.equal(requests[0].headers.has('authorization'), false)
})
