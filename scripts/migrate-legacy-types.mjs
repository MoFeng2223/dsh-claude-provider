import { readFile, writeFile, copyFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { homedir } from 'node:os'
import { pathToFileURL } from 'node:url'
import yaml from 'js-yaml'

// Recover only UI type markers skipped when DSH was upgraded before this plugin.
// Model settings and credential references remain owned by llm-pi-ai.
export function recoverProviderTypes(legacy, current, providers) {
  const result = { ...current }
  for (const [id, type] of Object.entries(legacy ?? {})) {
    if (type === 'claude-adaptive' && providers?.[id]?.api === 'anthropic-messages'
      && !Object.hasOwn(result, id)) result[id] = type
  }
  return result
}

export async function migrateLegacyTypes(home, profile = 'web') {
  const target = join(home, 'profiles', profile, 'cordis.patch.yml')
  let legacy
  try { legacy = yaml.load(await readFile(join(home, 'settings.yaml.imported'), 'utf8')) }
  catch (error) { if (error.code === 'ENOENT') return { recovered: 0 }; throw error }
  const text = await readFile(target, 'utf8')
  const patches = yaml.load(text) ?? []
  if (!Array.isArray(patches)) throw new Error('Expected a profile patch list')
  const providerEntry = patches.find(entry => entry.id === 'llm-pi-ai')
  const markerEntry = patches.find(entry => entry.id === 'dsh-claude-provider')
  const current = markerEntry?.config?.providerTypes ?? {}
  const merged = recoverProviderTypes(legacy?.['dsh-claude-provider']?.providerTypes, current, providerEntry?.config?.providers)
  const recovered = Object.keys(merged).length - Object.keys(current).length
  if (!recovered) return { recovered: 0 }
  const backup = `${target}.before-claude-migration-${Date.now()}`
  await copyFile(target, backup)
  if (markerEntry) markerEntry.config = { ...markerEntry.config, providerTypes: merged }
  else patches.push({ id: 'dsh-claude-provider', config: { providerTypes: merged } })
  await writeFile(target, yaml.dump(patches, { lineWidth: -1, noRefs: true }), { mode: 0o600 })
  return { recovered, backup }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  console.log(JSON.stringify(await migrateLegacyTypes(process.env.DSH_HOME ?? join(homedir(), '.dsh'), process.argv[2] ?? 'web')))
}
