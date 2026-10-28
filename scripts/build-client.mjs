import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const sourcePath = require.resolve('@deepseek-ai/dsh-client-ui-settings-models/client')
const here = dirname(fileURLToPath(import.meta.url))
const outputPath = resolve(here, '../lib/client.js')
let source = await readFile(sourcePath, 'utf8')

function replaceOnce(label, before, after) {
  const first = source.indexOf(before)
  if (first === -1) throw new Error(`build-client: ${label} anchor not found`)
  if (source.indexOf(before, first + before.length) !== -1) {
    throw new Error(`build-client: ${label} anchor is not unique`)
  }
  source = source.slice(0, first) + after + source.slice(first + before.length)
}

function replaceExactly(label, before, after, expected) {
  let count = 0
  let offset = 0
  while ((offset = source.indexOf(before, offset)) !== -1) {
    count += 1
    offset += before.length
  }
  if (count !== expected) {
    throw new Error(`build-client: ${label} expected ${expected} anchors, found ${count}`)
  }
  source = source.replaceAll(before, after)
}

source = source.replaceAll('@deepseek-ai/dsh-client-ui-settings-models', '@mofeng2223/dsh-claude-provider')

const helpers = await readFile(new URL('./client-claude.js', import.meta.url), 'utf8')
replaceOnce('Claude model helpers', '\t\t/** Stable visible and accessible identity for one provider target. */',
  '\t\t// BEGIN CLAUDE HELPERS\n' + helpers.split('\n').map(line => line.length ? '\t\t' + line : '').join('\n') + '\n\t\t// END CLAUDE HELPERS\n\t\t/** Stable visible and accessible identity for one provider target. */')


replaceOnce(
  'RC8 credential update compatibility',
  '\t\t\t\t\tctx.remote.$on("credentials/reference-updated", refreshModels),',
  '\t\t\t\t\tctx.remote.$on("credentials/reference-updated", refreshModels),\n\t\t\t\t\tctx.remote.$on("credentials/updated", refreshModels),',
)


replaceOnce(
  'custom Claude uses native Anthropic discovery',
  '\t\t\t\t\t\t...probe.api === void 0 ? {} : { api: probe.api },',
  '\t\t\t\t\t\t...probe.api === void 0 ? {} : { api: props.thinkingPresets ? CLAUDE_DISCOVERY_API : probe.api },',
)



replaceOnce(
  'recorded Claude model metadata',
  '\t\tconst CLAUDE_TOGGLE_EFFORTS = Object.freeze({ off: null, high: "high" });',
  `\t\tconst CLAUDE_TOGGLE_EFFORTS = Object.freeze({ off: null, high: "high" });
\t\tconst CLAUDE_KNOWN_MODELS = Object.freeze({
\t\t\t"claude-fable-5-1": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),\n\t\t\t"claude-fable-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-haiku-5-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-haiku-4-5-20251001": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-haiku-4-5": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-opus-4-5-20251101": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-opus-4-5": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-opus-4-6": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "four" }),
\t\t\t"claude-opus-4-7": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-opus-4-8": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-opus-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-opus-5-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-sonnet-4-5-20250929": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-sonnet-4-5": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-sonnet-4-6": Object.freeze({ contextWindow: 1000000, maxTokens: 64000, preset: "four" }),
\t\t\t"claude-sonnet-5-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-sonnet-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" })
\t\t});`,
)

replaceOnce(
  'provider type state',
  '\t\t\tconst [baseURL, setBaseURL] = (0, react.useState)("");\n\t\t\tconst [protocol, setProtocol] = (0, react.useState)(protocols[0] ?? "");',
  '\t\t\tconst [baseURL, setBaseURL] = (0, react.useState)("");\n\t\t\tconst providerType = props.providerType ?? "generic";\n\t\t\tconst isAdaptiveClaude = providerType === CLAUDE_PROVIDER_TYPE;\n\t\t\tconst [protocol, setProtocol] = (0, react.useState)(isAdaptiveClaude ? "anthropic-messages" : protocols[0] ?? "");',
)

replaceOnce(
  'Claude profile serialization',
  '\t\t\t\t\t\tapi: protocol,\n\t\t\t\t\t\tbaseURL: normalizedBaseURL,\n\t\t\t\t\t\tmodels: models.map((model) => ({ ...model }))',
  '\t\t\t\t\t\tapi: isAdaptiveClaude ? "anthropic-messages" : protocol,\n\t\t\t\t\t\tbaseURL: normalizedBaseURL,\n\t\t\t\t\t\tmodels: models.map((model) => isAdaptiveClaude ? withNativeClaudeModel(model) : { ...model }),\n\t\t\t\t\t\t...isAdaptiveClaude ? { reasoning: "high" } : {}',
)

replaceOnce(
  'existing Claude profile serialization',
  '\t\t\t\tconst next = layout === "pi-ai" && stringAt(draft, "apiKeyEnv") === void 0 && stringAt(fallback, "apiKeyEnv") === void 0 && keyValue.length > 0 ? schema.setPath(draft, ["apiKeyEnv"], keyRef) : draft;',
  '\t\t\t\tconst credentialDraft = layout === "pi-ai" && stringAt(draft, "apiKeyEnv") === void 0 && stringAt(fallback, "apiKeyEnv") === void 0 && keyValue.length > 0 ? schema.setPath(draft, ["apiKeyEnv"], keyRef) : draft;\n\t\t\t\tconst next = props.thinkingPresets === true ? withNativeClaudeProfile(credentialDraft) : credentialDraft;',
)


replaceOnce(
  'persist Claude provider type after profile creation',
  '\t\t\t\tif (storesKey) {\n\t\t\t\t\tconst stored = await operations.storeCredential(keyRef, keyValue);',
  '\t\t\t\tif (isAdaptiveClaude) {\n\t\t\t\t\tconst typed = await operations.writeSettings(CLAUDE_PROVIDER_SETTINGS_NS, [{\n\t\t\t\t\t\top: "set",\n\t\t\t\t\t\tpath: ["providerTypes", route],\n\t\t\t\t\t\tvalue: CLAUDE_PROVIDER_TYPE\n\t\t\t\t\t}], void 0);\n\t\t\t\t\tif (typed.kind !== "written") return typed.kind === "conflict" ? t("conflict") : typed.message;\n\t\t\t\t}\n\t\t\t\tif (storesKey) {\n\t\t\t\t\tconst stored = await operations.storeCredential(keyRef, keyValue);',
)

replaceOnce(
  'remove persisted Claude provider type',
  '\t\t\t}], void 0);\n\t\t\tif (written.kind !== "written") return written.message;\n\t\t\tawait controller.load();',
  '\t\t\t}], void 0);\n\t\t\tif (written.kind !== "written") return written.message;\n\t\t\tconst typedRemoval = await operations.writeSettings(CLAUDE_PROVIDER_SETTINGS_NS, [{\n\t\t\t\top: "unset",\n\t\t\t\tpath: ["providerTypes", target.provider]\n\t\t\t}], void 0);\n\t\t\tif (typedRemoval.kind !== "written") return typedRemoval.message;\n\t\t\tawait controller.load();',
)

replaceOnce(
  'protocol lock',
  '\t\t\t\t\t\t\tdisabled: profileDisabled,\n\t\t\t\t\t\t\tonChange: (event) => {\n\t\t\t\t\t\t\t\tsetProtocol(event.target.value);',
  '\t\t\t\t\t\t\tdisabled: profileDisabled || isAdaptiveClaude,\n\t\t\t\t\t\t\tonChange: (event) => {\n\t\t\t\t\t\t\t\tsetProtocol(event.target.value);',
)

replaceOnce(
  'existing Claude protocol lock',
  '\t\t\t\t\t\t\t\t\t"aria-label": t("customApi"),\n\t\t\t\t\t\t\t\t\tdisabled,\n\t\t\t\t\t\t\t\t\tonChange: (event) => {\n\t\t\t\t\t\t\t\t\t\tsetField("api", event.target.value);',
  '\t\t\t\t\t\t\t\t\t"aria-label": t("customApi"),\n\t\t\t\t\t\t\t\t\tdisabled: disabled || props.thinkingPresets === true,\n\t\t\t\t\t\t\t\t\tonChange: (event) => {\n\t\t\t\t\t\t\t\t\t\tsetField("api", event.target.value);',
)

replaceOnce(
  'row Claude fact',
  '\t\t\t\t\t\t\tconst credentialConfigured = row.credential?.configured === true;',
  '\t\t\t\t\t\t\tconst adaptiveClaude = isClaudeProvider(row, state);\n\t\t\t\t\t\t\tconst credentialConfigured = row.credential?.configured === true;',
)

replaceExactly(
  'Claude type in setup and open provider editors',
  '\t\t\t\t\t\t\t\t\t\trow,\n\t\t\t\t\t\t\t\t\t\tnamespace,',
  '\t\t\t\t\t\t\t\t\t\trow,\n\t\t\t\t\t\t\t\t\t\tthinkingPresets: isClaudeProvider(row, state),\n\t\t\t\t\t\t\t\t\t\tnamespace,',
  2,
)

replaceOnce(
  'row Claude badge',
  '\t\t\t\t\t\t\t\t\t\t\t\trow.entry.provider === "deepseek-account" ?',
  '\t\t\t\t\t\t\t\t\t\t\t\tadaptiveClaude ? (0, react_jsx_runtime.jsx)("span", {\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default["rowTag"],\n\t\t\t\t\t\t\t\t\t\t\t\t\tchildren: t("adaptiveClaudeTag")\n\t\t\t\t\t\t\t\t\t\t\t\t}) : null,\n\t\t\t\t\t\t\t\t\t\t\t\trow.entry.provider === "deepseek-account" ?',
)

source = source.replaceAll('children: t("adaptiveClaudeTag")', 'children: t("claudeTypeTag")')

replaceOnce(
  'fetched Claude models use recorded metadata',
  'const addedRows = activeCandidates.filter((candidate) => isPicked(candidate.id) && !keptIds.has(candidate.id)).map(adopt);',
  'const addedRows = activeCandidates.filter((candidate) => isPicked(candidate.id) && !keptIds.has(candidate.id)).map((candidate) => props.thinkingPresets ? withFetchedClaudeMetadata(adopt(candidate)) : adopt(candidate));',
)


// Keep the upstream shared row and append Claude-only controls to its expanded fields.

replaceOnce(
  'Claude model row defaults and presets',
  '\t\t\t\t\t\t\tinputField: "input",\n\t\t\t\t\t\t\tinputFallback: inputDefaults.get(textOf(model, "id")) ?? props.defaultInput,',
  '\t\t\t\t\t\t\tinputField: "input",\n\t\t\t\t\t\t\tthinkingPresets: props.thinkingPresets,\n\t\t\t\t\t\t\tinputFallback: props.thinkingPresets && CLAUDE_KNOWN_MODELS[model.id] ? ["text", "image"] : inputDefaults.get(textOf(model, "id")) ?? props.defaultInput,',
)

replaceOnce(
  'custom Claude card enables thinking presets',
  '\t\t\t\t\t\tprobeBlocked: baseUrlInvalid ? "customBaseUrlInvalid" : keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure,\n\t\t\t\t\t\toperations,\n\t\t\t\t\t\tt,\n\t\t\t\t\t\tdisabled: profileDisabled',
  '\t\t\t\t\t\tprobeBlocked: baseUrlInvalid ? "customBaseUrlInvalid" : keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure,\n\t\t\t\t\t\tthinkingPresets: isAdaptiveClaude,\n\t\t\t\t\t\toperations,\n\t\t\t\t\t\tt,\n\t\t\t\t\t\tdisabled: profileDisabled',
)

replaceOnce(
  'existing Anthropic card enables thinking presets',
  '\t\t\t\t\t\t\t\t...catalogProps,\n\t\t\t\t\t\t\t\tcatalogProvider: props.declared === true ? void 0 : props.provider,\n\t\t\t\t\t\t\t\treasoningLevels,\n\t\t\t\t\t\t\t\tdefaultInput: Array.isArray(defaultInput) ? defaultInput : void 0,\n\t\t\t\t\t\t\t\tprobe,\n\t\t\t\t\t\t\t\tprobeBlocked: keyFailure,\n\t\t\t\t\t\t\t\toperations',
  '\t\t\t\t\t\t\t\t...catalogProps,\n\t\t\t\t\t\t\t\tcatalogProvider: props.declared === true ? void 0 : props.provider,\n\t\t\t\t\t\t\t\treasoningLevels,\n\t\t\t\t\t\t\t\tdefaultInput: Array.isArray(defaultInput) ? defaultInput : void 0,\n\t\t\t\t\t\t\t\tprobe,\n\t\t\t\t\t\t\t\tprobeBlocked: keyFailure,\n\t\t\t\t\t\t\t\tthinkingPresets: props.thinkingPresets === true,\n\t\t\t\t\t\t\t\toperations',
)

replaceOnce('native reasoning editor Claude props',
  'function ModelReasoningEfforts({ model, levels, position, disabled, t, onChange }) {',
  'function ModelReasoningEfforts({ model, levels, position, disabled, t, onChange, claude, adaptiveFallback }) {')
replaceOnce('native reasoning editor model defaults',
  'const initialEntries = INITIAL_LEVELS.filter((level) => levels.includes(level)).map((level) => [level, defaultValue(level)]);',
  'const initialEntries = claude ? Object.entries(reasoningEffortsForPreset(CLAUDE_KNOWN_MODELS[model.id]?.preset ?? "five")) : INITIAL_LEVELS.filter((level) => levels.includes(level)).map((level) => [level, defaultValue(level)]);')
replaceOnce('independent adaptive thinking switch',
  '\t\t\t\t}), entries === void 0 ? null : (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [',
  '\t\t\t\t}), claude ? (0, react_jsx_runtime.jsx)(ClaudeAdaptiveThinking, { model, inherited: adaptiveFallback, position, disabled, t, onChange }) : null, entries === void 0 ? null : (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [')
replaceOnce('Claude reasoning editor wiring',
  '\t\t\t\t\t\t\tlevels: props.reasoningLevels,',
  '\t\t\t\t\t\t\tlevels: props.reasoningLevels,\n\t\t\t\t\t\t\tclaude: props.thinkingPresets === true,\n\t\t\t\t\t\t\tadaptiveFallback: props.adaptiveFallback,')
replaceOnce('Claude row inherited adaptive setting',
  '\t\t\t\t\t\t\treasoningLevels: props.reasoningLevels,',
  '\t\t\t\t\t\t\treasoningLevels: props.reasoningLevels,\n\t\t\t\t\t\t\tadaptiveFallback: props.adaptiveFallback,')
replaceOnce('Claude profile inherited adaptive setting',
  '\t\t\t\t\t\t\t\tthinkingPresets: props.thinkingPresets === true,',
  '\t\t\t\t\t\t\t\tthinkingPresets: props.thinkingPresets === true,\n\t\t\t\t\t\t\t\tadaptiveFallback: schema.getPath(draft, ["compat", "forceAdaptiveThinking"]),')
replaceOnce('new Claude row draft',
  '\t\t\t\t\t\tonChange([...models, { id: "" }]);',
  '\t\t\t\t\t\tonChange([...models, props.thinkingPresets ? newClaudeModel() : { id: "" }]);')
replaceOnce('preserve new model draft while editing identity',
  '\t\t\t\t\treturn Object.fromEntries(Object.entries({\n\t\t\t\t\t\t...model,\n\t\t\t\t\t\t...next\n\t\t\t\t\t}).filter(([key]) => !cleared.has(key)));',
  '\t\t\t\t\treturn carryClaudeDraft(model, Object.fromEntries(Object.entries({\n\t\t\t\t\t\t...model,\n\t\t\t\t\t\t...next\n\t\t\t\t\t}).filter(([key]) => !cleared.has(key))));')
replaceOnce('new Claude defaults after model identity is entered',
  '\t\t\t\t\t\t\tonFieldChange: (field, value) => {\n\t\t\t\t\t\t\t\tpatch(index, { [field]: value });',
  '\t\t\t\t\t\t\tonIdBlur: () => {\n\t\t\t\t\t\t\t\tif (!props.thinkingPresets) return;\n\t\t\t\t\t\t\t\tconst next = finishClaudeDraft(model);\n\t\t\t\t\t\t\t\tif (next !== model) onChange(models.map((row, at) => at === index ? next : row));\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tonFieldChange: (field, value) => {\n\t\t\t\t\t\t\t\tpatch(index, { [field]: value });')
replaceOnce('new Claude profile compatible default effort',
  '\t\t\t\t\t\tvalue: profile\n\t\t\t\t\t}], openedAt);',
  '\t\t\t\t\t\tvalue: isAdaptiveClaude ? withNativeClaudeProfile(profile) : profile\n\t\t\t\t\t}], openedAt);')
replaceOnce('English Claude copy', '\t\t\tcustomTag: "Custom",',
  '\t\t\tcustomTag: "Custom",\n\t\t\tclaudeCustomAdd: "Add Claude provider",\n\t\t\tclaudeCustomTitle: "Claude provider",\n\t\t\tclaudeTypeTag: "Claude provider",\n\t\t\tclaudeAdaptiveThinking: "Adaptive thinking",\n\t\t\tclaudeAdaptiveHelpLabel: "Adaptive thinking help",\n\t\t\tclaudeAdaptiveHelp: "For Anthropic-compatible models that support adaptive thinking. When enabled, the model adjusts its thinking based on task complexity and your selected reasoning level. When disabled, it uses the thinking token limit associated with that level.",')
replaceOnce('Chinese Claude copy', '\t\t\tcustomTag: "自定义",',
  '\t\t\tcustomTag: "自定义",\n\t\t\tclaudeCustomAdd: "添加 Claude 提供方",\n\t\t\tclaudeCustomTitle: "Claude 提供方",\n\t\t\tclaudeTypeTag: "Claude 提供方",\n\t\t\tclaudeAdaptiveThinking: "自适应思考",\n\t\t\tclaudeAdaptiveHelpLabel: "自适应思考说明",\n\t\t\tclaudeAdaptiveHelp: "适用于支持自适应思考的 Anthropic 兼容模型。开启后，模型根据任务难度和你选择的推理等级自动调整思考量；关闭后，改用该等级对应的思考 token 数量上限。",')

replaceOnce('Claude tab busy state',
  'const [customBusy, setCustomBusy] = (0, react.useState)(false);',
  'const [customBusy, setCustomBusy] = (0, react.useState)(false);\n\t\t\tconst [claudeBusy, setClaudeBusy] = (0, react.useState)(false);')
replaceOnce('reset Claude busy state', 'setCustomBusy(false);', 'setCustomBusy(false);\n\t\t\t\tsetClaudeBusy(false);')
replaceOnce('lock all provider tabs during requests', 'const switchLocked = catalogBusy || customBusy;', 'const switchLocked = catalogBusy || customBusy || claudeBusy;')
replaceOnce('allow Claude tab without catalog', 'const bothOffered = catalogOffered && customOffered;', 'const claudeEnabled = customEnabled && state.namespaces.has(CLAUDE_PROVIDER_SETTINGS_NS);\n\t\t\tconst bothOffered = customOffered;')
replaceOnce('Claude provider option',
  '...customEnabled ? {} : { title: t("addCustomUnavailable") }\n\t\t\t\t\t\t\t\t\t\t}],',
  '...customEnabled ? {} : { title: t("addCustomUnavailable") }\n\t\t\t\t\t\t\t\t\t\t}, { value: "claude", label: t("claudeCustomTitle"), disabled: !claudeEnabled }],')
// Keep independent mounted cards so switching modes preserves both drafts.
const panelStart = source.indexOf('\t\t\t\t\t\t\t\tmounted("custom") && piAi !== void 0');
const panelEnd = source.indexOf('}) : null', panelStart) + '}) : null'.length;
if (panelStart < 0 || panelEnd < panelStart) throw new Error('custom panel not found');
const customPanel = source.slice(panelStart, panelEnd);
const claudePanel = customPanel.replaceAll('"custom"', '"claude"')
  .replaceAll('-custom', '-claude')
  .replace('taken: state.rows', 'providerType: CLAUDE_PROVIDER_TYPE,\n\t\t\t\t\t\t\t\t\t\ttaken: state.rows')
  .replace('onBusyChange: setCustomBusy', 'onBusyChange: setClaudeBusy');
source = source.slice(0, panelEnd) + ',\n' + claudePanel + source.slice(panelEnd);

replaceOnce('hide generic hint on Claude tab', "className: ModelsSection_module_css_default[\"advancedHint\"],\n\t\t\t\t\t\t\t\t\t\tchildren: t(mode === \"catalog\" ? \"addCatalogHint\" : \"addCustomHint\")", "hidden: mode === \"claude\",\n\t\t\t\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default[\"advancedHint\"],\n\t\t\t\t\t\t\t\t\t\tchildren: t(mode === \"catalog\" ? \"addCatalogHint\" : \"addCustomHint\")")

replaceOnce('compact English provider tabs', 'addCatalog: "Third-party model provider",', 'addCatalog: "Third-party providers",')
replaceOnce('compact English custom API tab', 'addCustom: "Custom model API",', 'addCustom: "Custom API",')

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, source)
process.stdout.write(`${outputPath}\n`)
