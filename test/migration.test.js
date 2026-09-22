import test from 'node:test'
import assert from 'node:assert/strict'
import { Config } from '../src/index.js'
import { recoverProviderTypes } from '../scripts/migrate-legacy-types.mjs'

test('legacy type recovery preserves existing markers and excludes removed or non-Anthropic providers', () => {
  const providers = { keep: { api: 'anthropic-messages' }, recover: { api: 'anthropic-messages' }, generic: { api: 'openai-responses' } }
  const before = structuredClone(providers)
  const legacy = Object.fromEntries(['keep', 'recover', 'generic', 'deleted'].map(id => [id, 'claude-adaptive']))
  const result = recoverProviderTypes(legacy, { keep: 'existing' }, providers)
  assert.deepEqual(result, { keep: 'existing', recover: 'claude-adaptive' })
  assert.deepEqual(recoverProviderTypes(legacy, result, providers), result)
  assert.deepEqual(providers, before)
})

test('plugin declares profile Config without legacy settings registration', () => {
  assert.deepEqual(Config({}).providerTypes.get(), {})
  assert.deepEqual(Config({ providerTypes: { claude: 'claude-adaptive' } }).providerTypes.get(), { claude: 'claude-adaptive' })
})
