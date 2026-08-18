import assert from 'node:assert/strict'
import test from 'node:test'
import {
  apply,
  anthropicModelsUrl,
  CLAUDE_PROVIDER_DIRECTORY_SENTINEL,
  discoverAnthropicModels,
  isClaudeProviderType,
  piModelHasAdaptiveEfforts,
  readAnthropicModelPage,
  rewriteAnthropicPayload,
  shouldUseAdaptiveThinking,
  withClaudeProviderReasoningDefaults,
  withForcedAdaptiveThinking,
} from '../src/index.js'

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

test('uses High by default and presents toggle-only models as On or Off', () => {
  const adaptive = {
    reasoning: {
      efforts: ['low', 'medium', 'high', 'max'].map(id => ({ id, name: id })),
    },
  }
  assert.deepEqual(withClaudeProviderReasoningDefaults(adaptive), {
    reasoning: {
      defaultEffort: 'high',
      efforts: adaptive.reasoning.efforts,
    },
  })

  const toggle = {
    reasoning: {
      efforts: [{ id: 'off', name: 'Off' }, { id: 'high', name: 'High' }],
    },
  }
  assert.deepEqual(withClaudeProviderReasoningDefaults(toggle), {
    reasoning: {
      defaultEffort: 'high',
      efforts: [{ id: 'off', name: 'Off' }, { id: 'high', name: 'On' }],
    },
  })
})

test('enters the adaptive request path only for explicitly typed provider ids', async () => {
  const cleanups = []
  let streamHook
  let resolutions = 0
  let directoryEntries
  const providerTypeSettings = {
    providerTypes: {
      xiaobai: 'claude-adaptive',
      morecode: 'claude-adaptive',
    },
  }
  const ctx = {
    llm: {
      discoverModels: async () => [],
      resolveModelInfo: async () => {
        resolutions += 1
        return { reasoning: { efforts: ['low', 'medium', 'high', 'xhigh', 'max'].map(id => ({ id })) } }
      },
      registerConfigurableProviders: entries => {
        directoryEntries = entries
      },
    },
    settings: {
      register: () => ({ get: () => providerTypeSettings }),
    },
    get: () => undefined,
    effect: setup => {
      const cleanup = setup()
      if (typeof cleanup === 'function') cleanups.push(cleanup)
    },
    on: (event, listener) => {
      assert.equal(event, 'llm/stream')
      streamHook = listener
    },
  }
  const values = async function* () { yield 'ok' }

  try {
    apply(ctx, {})
    assert.deepEqual(directoryEntries, [{
      provider: CLAUDE_PROVIDER_DIRECTORY_SENTINEL,
      displayName: 'Claude Provider Type',
      settingsNs: 'dsh-claude-provider',
      settingsPath: ['providerTypes'],
    }])
    assert.deepEqual(
      await Array.fromAsync(streamHook({ provider: 'generic-anthropic-route', model: 'claude-opus-5' }, values)),
      ['ok'],
    )
    assert.equal(resolutions, 0)

    assert.deepEqual(
      await Array.fromAsync(streamHook({ provider: 'xiaobai', model: 'claude-opus-5' }, values)),
      ['ok'],
    )
    assert.equal(resolutions, 1)
  } finally {
    for (const cleanup of cleanups.reverse()) cleanup()
  }
})

const state = level => ({ model: 'claude-fable-5', level, effortMap: {
  minimal: 'low',
  low: 'low',
  medium: 'medium',
  high: 'high',
  xhigh: 'xhigh',
  max: 'max',
} })

test('rewrites enabled thinking to adaptive and preserves display', () => {
  const input = {
    model: 'claude-fable-5',
    max_tokens: 128000,
    thinking: { type: 'enabled', budget_tokens: 16384, display: 'summarized' },
  }
  assert.deepEqual(rewriteAnthropicPayload(input, state('high')), {
    model: 'claude-fable-5',
    max_tokens: 128000,
    thinking: { type: 'adaptive', display: 'summarized' },
    output_config: { effort: 'high' },
  })
  assert.equal(input.thinking.type, 'enabled')
})

test('maps an adapter default from its legacy budget when no level is visible', () => {
  const input = {
    model: 'claude-fable-5',
    thinking: { type: 'enabled', budget_tokens: 8192 },
  }
  assert.equal(rewriteAnthropicPayload(input, state(undefined)).output_config.effort, 'medium')
})

test('omits an unsupported disabled thinking object', () => {
  const input = {
    model: 'claude-fable-5',
    thinking: { type: 'disabled' },
    output_config: { effort: 'high' },
  }
  assert.deepEqual(rewriteAnthropicPayload(input, state('off')), {
    model: 'claude-fable-5',
  })
})

test('leaves other models and already-adaptive requests unchanged', () => {
  const other = { model: 'claude-haiku-4-5', thinking: { type: 'enabled', budget_tokens: 8192 } }
  const adaptive = { model: 'claude-fable-5', thinking: { type: 'adaptive' } }
  assert.equal(rewriteAnthropicPayload(other, state('high')), other)
  assert.equal(rewriteAnthropicPayload(adaptive, state('high')), adaptive)
})

test('passes xhigh and max through to adaptive output_config', () => {
  const input = {
    model: 'claude-fable-5',
    thinking: { type: 'enabled', budget_tokens: 16384 },
  }
  assert.equal(rewriteAnthropicPayload(input, state('xhigh')).output_config.effort, 'xhigh')
  assert.equal(rewriteAnthropicPayload(input, state('max')).output_config.effort, 'max')
})

test('distinguishes adaptive effort profiles from legacy on/off profiles', () => {
  const info = ids => ({ reasoning: { efforts: ids.map(id => ({ id })) } })
  assert.equal(shouldUseAdaptiveThinking(info(['low', 'medium', 'high', 'max'])), true)
  assert.equal(shouldUseAdaptiveThinking(info(['low', 'medium', 'high', 'xhigh', 'max'])), true)
  assert.equal(shouldUseAdaptiveThinking(info(['off', 'high'])), false)
})

test('stamps forceAdaptiveThinking only on typed Claude routes with four-plus efforts', () => {
  const settings = { providerTypes: { tianshu: 'claude-adaptive' } }
  const opus = {
    id: 'claude-opus-4-6',
    thinkingLevelMap: { low: 'low', medium: 'medium', high: 'high', max: 'max', xhigh: null, off: null },
  }
  const haiku = {
    id: 'claude-haiku-4-5',
    thinkingLevelMap: { off: null, high: 'high', low: null, medium: null, max: null },
  }
  assert.equal(piModelHasAdaptiveEfforts(opus), true)
  assert.equal(piModelHasAdaptiveEfforts(haiku), false)
  assert.equal(withForcedAdaptiveThinking(opus, 'generic', settings), opus)
  assert.equal(withForcedAdaptiveThinking(haiku, 'tianshu', settings), haiku)
  assert.deepEqual(withForcedAdaptiveThinking(opus, 'tianshu', settings), {
    ...opus,
    compat: { forceAdaptiveThinking: true },
  })
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
