import assert from 'node:assert/strict'
import test from 'node:test'
import {
  anthropicModelsUrl,
  discoverAnthropicModels,
  readAnthropicModelPage,
  rewriteAnthropicPayload,
  shouldUseAdaptiveThinking,
} from '../src/index.js'

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
