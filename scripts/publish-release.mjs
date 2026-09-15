import { readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { setTimeout } from 'node:timers/promises'

const manifest = JSON.parse(readFileSync('package.json', 'utf8'))
const [pack] = JSON.parse(readFileSync(`${process.env.RUNNER_TEMP}/package-pack.json`, 'utf8'))
const registry = 'https://registry.npmjs.org'
const endpoint = `${registry}/${encodeURIComponent(manifest.name)}/${manifest.version}`

async function publishedVersion() {
  const response = await fetch(endpoint)
  if (response.status === 404) return null
  if (!response.ok) throw new Error(`npm registry returned ${response.status}`)
  return response.json()
}

function verify(remote) {
  if (remote.dist?.integrity !== pack.integrity) {
    throw new Error('Published package differs from the verified build; refusing to create a release')
  }
}

const existing = await publishedVersion()
if (existing) {
  verify(existing)
  console.log('Identical version already published; resuming verification')
} else {
  execFileSync('npm', ['publish', pack.filename, '--access', 'public', '--tag', 'latest'], { stdio: 'inherit' })
}

let available = false
for (let attempt = 0; attempt < 40; attempt++) {
  const remote = await publishedVersion()
  if (remote) {
    verify(remote)
    available = true
    break
  }
  console.log('Waiting for npm processing...')
  await setTimeout(15000)
}
if (!available) throw new Error('npm version is still unavailable; rerun this workflow after processing completes')

const tagsResponse = await fetch(`${registry}/-/package/${encodeURIComponent(manifest.name)}/dist-tags`)
if (!tagsResponse.ok) throw new Error('Could not verify npm dist-tags')
const tags = await tagsResponse.json()
if (tags.latest !== manifest.version) throw new Error('npm latest does not point to this version')

const dshResponse = await fetch(`${registry}/-/package/${encodeURIComponent('@deepseek-ai/dsh')}/dist-tags`)
if (!dshResponse.ok) throw new Error('Could not read DSH dist-tags')
const dshTags = await dshResponse.json()
const target = manifest.devDependencies['@deepseek-ai/dsh-client-ui-settings-models']
const channel = ['alpha', 'next', 'latest'].find(tag => dshTags[tag] === target)
const command = `npx @deepseek-ai/dsh@${channel ?? target} web`
const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
const tagText = ['latest', 'next', 'alpha'].filter(tag => dshTags[tag]).map(tag => `\`${tag}\`: ${dshTags[tag]}`).join(', ')
const body = `## Changes

- Add compatibility with DeepSeek Harness ${target}.

## Notes

- As of ${date}, npm tags: ${tagText}. To run DeepSeek Harness ${target}, use \`${command}\`.

npm: \`${manifest.name}@${manifest.version}\`

---

## 变更

- 适配 DeepSeek Harness ${target}。

## 说明

- 截至 ${date}，npm 标签：${tagText}。要运行 DeepSeek Harness ${target}，请使用 \`${command}\`。

npm：\`${manifest.name}@${manifest.version}\`
`
writeFileSync(`${process.env.RUNNER_TEMP}/release-notes.md`, body)
console.log('npm version, integrity and latest tag verified')
