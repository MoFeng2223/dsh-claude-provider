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

replaceOnce(
  'RC8 credential update compatibility',
  '\t\t\t\t\tctx.remote.$on("credentials/reference-updated", refreshModels),',
  '\t\t\t\t\tctx.remote.$on("credentials/reference-updated", refreshModels),\n\t\t\t\t\tctx.remote.$on("credentials/updated", refreshModels),',
)

replaceOnce(
  'Claude model helpers',
  '\t\t/** Stable visible and accessible identity for one provider target. */',
  `\t\tconst CLAUDE_DISCOVERY_API = "mofeng-anthropic-models";\n\t\tconst CLAUDE_FIVE_EFFORTS = Object.freeze({ low: "low", medium: "medium", high: "high", xhigh: "xhigh", max: "max" });\n\t\tconst CLAUDE_FOUR_EFFORTS = Object.freeze({ low: "low", medium: "medium", high: "high", max: "max" });\n\t\tconst CLAUDE_TOGGLE_EFFORTS = Object.freeze({ off: null, high: "high" });\n\t\tfunction reasoningEffortsForPreset(preset) {\n\t\t\tif (preset === "toggle") return { ...CLAUDE_TOGGLE_EFFORTS };\n\t\t\tif (preset === "four") return { ...CLAUDE_FOUR_EFFORTS };\n\t\t\treturn { ...CLAUDE_FIVE_EFFORTS };\n\t\t}\n\t\tfunction thinkingPresetOf(model) {\n\t\t\tconst efforts = model?.reasoningEfforts;\n\t\t\tif (efforts !== null && typeof efforts === "object" && !Array.isArray(efforts)) {\n\t\t\t\tif (Object.hasOwn(efforts, "off") && !Object.hasOwn(efforts, "low")) return "toggle";\n\t\t\t\tif (Object.hasOwn(efforts, "max") && !Object.hasOwn(efforts, "xhigh")) return "four";\n\t\t\t}\n\t\t\treturn "five";\n\t\t}\n\t\tfunction withDefaultClaudeReasoning(model) {\n\t\t\tconst efforts = model?.reasoningEfforts;\n\t\t\treturn efforts !== null && typeof efforts === "object" && !Array.isArray(efforts) && Object.keys(efforts).length > 0\n\t\t\t\t? { ...model }\n\t\t\t\t: { ...model, reasoningEfforts: reasoningEffortsForPreset("five") };\n\t\t}\n\t\tfunction isClaudeProvider(row, state) {\n\t\t\tif (row.entry.settingsNs !== "llm-pi-ai") return false;\n\t\t\tconst namespace = state.namespaces.get("llm-pi-ai");\n\t\t\tif (namespace === void 0) return false;\n\t\t\tconst profile = (0, _deepseek_ai_dsh_client_schema_form.getPath)(namespace.value, row.entry.settingsPath);\n\t\t\treturn profile !== null && typeof profile === "object" && profile.api === "anthropic-messages" && Array.isArray(profile.models) && profile.models.length > 0;\n\t\t}\n\t\t/** Stable visible and accessible identity for one provider target. */`,
)

replaceOnce(
  'custom Claude uses native Anthropic discovery',
  '\t\t\t\t\t\t...probe.api === void 0 ? {} : { api: probe.api },',
  '\t\t\t\t\t\t...probe.api === void 0 ? {} : { api: props.thinkingPresets ? CLAUDE_DISCOVERY_API : probe.api },',
)

replaceOnce(
  'Claude provider type constants',
  '\t\tconst CLAUDE_DISCOVERY_API = "mofeng-anthropic-models";',
  '\t\tconst CLAUDE_DISCOVERY_API = "mofeng-anthropic-models";\n\t\tconst CLAUDE_PROVIDER_SETTINGS_NS = "dsh-claude-provider";\n\t\tconst CLAUDE_PROVIDER_TYPE = "claude-adaptive";',
)

replaceOnce(
  'native RC8 Claude profile helper',
  '\t\tfunction isClaudeProvider(row, state) {',
  `\t\tfunction withNativeClaudeModel(model) {
\t\t\tconst next = withDefaultClaudeReasoning(model);
\t\t\tconst efforts = next.reasoningEfforts;
\t\t\tconst adaptive = efforts !== null && typeof efforts === "object" && !Array.isArray(efforts)
\t\t\t\t&& ["low", "medium", "high", "max"].every((level) => typeof efforts[level] === "string" && efforts[level].length > 0);
\t\t\tconst compat = { ...(next.compat ?? {}) };
\t\t\tif (adaptive) compat.forceAdaptiveThinking = true;
\t\t\telse Reflect.deleteProperty(compat, "forceAdaptiveThinking");
\t\t\tconst { compat: _compat, ...rest } = next;
\t\t\treturn { ...rest, ...Object.keys(compat).length === 0 ? {} : { compat } };
\t\t}
\t\tfunction withNativeClaudeProfile(profile) {
\t\t\tconst { compat: currentCompat, ...rest } = profile ?? {};
\t\t\tconst compat = { ...(currentCompat ?? {}) };
\t\t\tReflect.deleteProperty(compat, "forceAdaptiveThinking");
\t\t\tconst models = Array.isArray(profile?.models) ? profile.models.map(withNativeClaudeModel) : profile?.models;
\t\t\treturn {
\t\t\t\t...rest,
\t\t\t\tapi: "anthropic-messages",
\t\t\t\t...Object.keys(compat).length === 0 ? {} : { compat },
\t\t\t\t...models === void 0 ? {} : { models },
\t\t\t\treasoning: "high"
\t\t\t};
\t\t}
\t\tfunction isClaudeProvider(row, state) {`,
)


replaceOnce(
  'persisted Claude provider type lookup',
  '\t\tfunction isClaudeProvider(row, state) {\n\t\t\tif (row.entry.settingsNs !== "llm-pi-ai") return false;\n\t\t\tconst namespace = state.namespaces.get("llm-pi-ai");\n\t\t\tif (namespace === void 0) return false;\n\t\t\tconst profile = (0, _deepseek_ai_dsh_client_schema_form.getPath)(namespace.value, row.entry.settingsPath);\n\t\t\treturn profile !== null && typeof profile === "object" && profile.api === "anthropic-messages" && Array.isArray(profile.models) && profile.models.length > 0;\n\t\t}',
  '\t\tfunction isClaudeProvider(row, state) {\n\t\t\tconst namespace = state.namespaces.get(CLAUDE_PROVIDER_SETTINGS_NS);\n\t\t\treturn namespace?.value?.providerTypes?.[row.entry.provider] === CLAUDE_PROVIDER_TYPE;\n\t\t}',
)

replaceOnce(
  'React DOM portal dependency',
  '\t\tlet react = require("react");',
  '\t\tlet react = require("react");\n\t\tlet react_dom = require("react-dom");',
)

replaceOnce(
  'recorded Claude model metadata',
  '\t\tconst CLAUDE_TOGGLE_EFFORTS = Object.freeze({ off: null, high: "high" });',
  `\t\tconst CLAUDE_TOGGLE_EFFORTS = Object.freeze({ off: null, high: "high" });
\t\tconst CLAUDE_KNOWN_MODELS = Object.freeze({
\t\t\t"claude-fable-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-haiku-4-5-20251001": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-haiku-4-5": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
\t\t\t"claude-opus-4-6": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "four" }),
\t\t\t"claude-opus-4-7": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-opus-4-8": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-opus-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
\t\t\t"claude-sonnet-4-6": Object.freeze({ contextWindow: 1000000, maxTokens: 64000, preset: "four" }),
\t\t\t"claude-sonnet-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" })
\t\t});`,
)

replaceOnce(
  'fetched Claude metadata helper',
  '\t\tfunction thinkingPresetOf(model) {',
  `\t\tfunction withFetchedClaudeMetadata(model) {
\t\t\tconst known = CLAUDE_KNOWN_MODELS[model?.id];
\t\t\tif (known === undefined) return withDefaultClaudeReasoning(model);
\t\t\treturn { ...model, contextWindow: known.contextWindow, maxTokens: known.maxTokens, reasoningEfforts: reasoningEffortsForPreset(known.preset) };
\t\t}
\t\tfunction thinkingPresetOf(model) {`,
)

replaceOnce(
  'portal Claude thinking help component',
  '\t\tfunction isClaudeProvider(row, state) {',
  `\t\tfunction ClaudeThinkingHelp(props) {
\t\t\tconst anchorRef = (0, react.useRef)(null);
\t\t\tconst tooltipRef = (0, react.useRef)(null);
\t\t\tconst [open, setOpen] = (0, react.useState)(false);
\t\t\tconst [position, setPosition] = (0, react.useState)({ left: 12, top: 12, width: 680 });
\t\t\t(0, react.useLayoutEffect)(() => {
\t\t\t\tif (!open) return;
\t\t\t\tconst place = () => {
\t\t\t\t\tconst anchor = anchorRef.current;
\t\t\t\t\tif (anchor === null) return;
\t\t\t\t\tconst rect = anchor.getBoundingClientRect();
\t\t\t\t\tconst width = Math.max(280, Math.min(680, window.innerWidth - 24));
\t\t\t\t\tconst height = tooltipRef.current?.offsetHeight ?? 120;
\t\t\t\t\tconst left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
\t\t\t\t\tconst below = rect.bottom + 8;
\t\t\t\t\tconst top = below + height <= window.innerHeight - 12 ? below : Math.max(12, rect.top - height - 8);
\t\t\t\t\tsetPosition({ left, top, width });
\t\t\t\t};
\t\t\t\tplace();
\t\t\t\twindow.addEventListener("resize", place);
\t\t\t\twindow.addEventListener("scroll", place, true);
\t\t\t\treturn () => {
\t\t\t\t\twindow.removeEventListener("resize", place);
\t\t\t\t\twindow.removeEventListener("scroll", place, true);
\t\t\t\t};
\t\t\t}, [open]);
\t\t\tconst tooltip = open && typeof document !== "undefined" ? (0, react_dom.createPortal)((0, react_jsx_runtime.jsx)("span", {
\t\t\t\tref: tooltipRef,
\t\t\t\tclassName: "mofeng-thinking-tooltip",
\t\t\t\trole: "tooltip",
\t\t\t\tstyle: position,
\t\t\t\tchildren: props.t("adaptiveClaudeHelp").split("\\n").map((line, index) => (0, react_jsx_runtime.jsx)("span", { children: line }, index))
\t\t\t}), document.body) : null;
\t\t\treturn (0, react_jsx_runtime.jsxs)(react.Fragment, {
\t\t\t\tchildren: [(0, react_jsx_runtime.jsxs)("span", {
\t\t\t\t\tref: anchorRef,
\t\t\t\t\tclassName: "mofeng-thinking-help",
\t\t\t\t\t"aria-label": props.t("adaptiveClaudeHelpLabel"),
\t\t\t\t\ttabIndex: 0,
\t\t\t\t\tonMouseEnter: () => setOpen(true),
\t\t\t\t\tonMouseLeave: () => setOpen(false),
\t\t\t\t\tonFocus: () => setOpen(true),
\t\t\t\t\tonBlur: () => setOpen(false),
\t\t\t\t\tchildren: ["!", tooltip]
\t\t\t\t}), (0, react_jsx_runtime.jsx)("style", {
\t\t\t\t\tchildren: ".mofeng-thinking-help{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border:1px solid currentColor;border-radius:50%;font-size:11px;font-weight:700;line-height:1;cursor:help;vertical-align:middle}.mofeng-thinking-tooltip{position:fixed;z-index:2147483647;display:flex;flex-direction:column;gap:5px;box-sizing:border-box;padding:9px 12px;border:1px solid rgba(255,255,255,.18);border-radius:7px;background:#25282d;color:#f5f6f7;font-size:13px;font-weight:400;line-height:1.45;text-align:left;box-shadow:0 6px 20px rgba(0,0,0,.26);pointer-events:none}.mofeng-thinking-tooltip>span{display:block;white-space:normal;overflow-wrap:anywhere}"
\t\t\t\t})]
\t\t\t});
\t\t}
\t\tfunction isClaudeProvider(row, state) {`,
)


replaceOnce(
  'provider type state',
  '\t\t\tconst [baseURL, setBaseURL] = (0, react.useState)("");\n\t\t\tconst [protocol, setProtocol] = (0, react.useState)(protocols[0] ?? "");',
  '\t\t\tconst [baseURL, setBaseURL] = (0, react.useState)("");\n\t\t\tconst providerType = props.providerType ?? "generic";\n\t\t\tconst isAdaptiveClaude = providerType === CLAUDE_PROVIDER_TYPE;\n\t\t\tconst [protocol, setProtocol] = (0, react.useState)(isAdaptiveClaude ? "anthropic-messages" : protocols[0] ?? "");',
)

replaceOnce(
  'Claude profile serialization',
  '\t\t\t\t\t\tapi: protocol,\n\t\t\t\t\t\tbaseURL,\n\t\t\t\t\t\tmodels: models.map((model) => ({ ...model }))',
  '\t\t\t\t\t\tapi: isAdaptiveClaude ? "anthropic-messages" : protocol,\n\t\t\t\t\t\tbaseURL,\n\t\t\t\t\t\tmodels: models.map((model) => isAdaptiveClaude ? withNativeClaudeModel(model) : { ...model }),\n\t\t\t\t\t\t...isAdaptiveClaude ? { reasoning: "high" } : {}',
)

replaceOnce(
  'existing Claude profile serialization',
  '\t\t\t\tconst next = layout === "pi-ai" && stringAt(draft, "apiKeyEnv") === void 0 && stringAt(fallback, "apiKeyEnv") === void 0 && keyValue.length > 0 ? schema.setPath(draft, ["apiKeyEnv"], keyRef) : draft;',
  '\t\t\t\tconst credentialDraft = layout === "pi-ai" && stringAt(draft, "apiKeyEnv") === void 0 && stringAt(fallback, "apiKeyEnv") === void 0 && keyValue.length > 0 ? schema.setPath(draft, ["apiKeyEnv"], keyRef) : draft;\n\t\t\t\tconst next = props.thinkingPresets === true ? withNativeClaudeProfile(credentialDraft) : credentialDraft;',
)

replaceOnce(
  'Claude provider card title',
  '\t\t\t\t\t\t\tchildren: t("customTitle")',
  '\t\t\t\t\t\t\tchildren: t(isAdaptiveClaude ? "claudeCustomTitle" : "customTitle")',
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
  'Claude provider intro',
  `\t\t\t\t\t(0, react_jsx_runtime.jsxs)("div", {\n\t\t\t\t\t\tclassName: ModelsSection_module_css_default["field"],\n\t\t\t\t\t\tchildren: [(0, react_jsx_runtime.jsx)("span", {\n\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default["fieldLabel"],\n\t\t\t\t\t\t\tchildren: t("customRoute")`,
  `\t\t\t\t\tisAdaptiveClaude ? (0, react_jsx_runtime.jsx)("p", {\n\t\t\t\t\t\tclassName: ModelsSection_module_css_default["savedNotice"],\n\t\t\t\t\t\trole: "status",\n\t\t\t\t\t\tchildren: t("adaptiveClaudeEnabled")\n\t\t\t\t\t}) : null,\n\t\t\t\t\t(0, react_jsx_runtime.jsxs)("div", {\n\t\t\t\t\t\tclassName: ModelsSection_module_css_default["field"],\n\t\t\t\t\t\tchildren: [(0, react_jsx_runtime.jsx)("span", {\n\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default["fieldLabel"],\n\t\t\t\t\t\t\tchildren: t("customRoute")`,
)

replaceOnce(
  'Claude thinking help tooltip',
  '\t\t\t\t\tisAdaptiveClaude ? (0, react_jsx_runtime.jsx)("p", {\n\t\t\t\t\t\tclassName: ModelsSection_module_css_default["savedNotice"],\n\t\t\t\t\t\trole: "status",\n\t\t\t\t\t\tchildren: t("adaptiveClaudeEnabled")\n\t\t\t\t\t}) : null,',
  '\t\t\t\t\tisAdaptiveClaude ? (0, react_jsx_runtime.jsxs)("p", {\n\t\t\t\t\t\tclassName: ModelsSection_module_css_default["savedNotice"],\n\t\t\t\t\t\trole: "status",\n\t\t\t\t\t\tchildren: [t("adaptiveClaudeEnabled"), " ", (0, react_jsx_runtime.jsx)(ClaudeThinkingHelp, { t })]\n\t\t\t\t\t}) : null,',
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

replaceOnce(
  'setup-card provider editor Claude type',
  '\ttarget,\n\t\t\t\t\t\t\t\t\tnamespace,\n\t\t\t\t\t\t\t\t\tschema,\n\t\t\t\t\t\t\t\t\toperations,\n\t\t\t\t\t\t\t\t\tt,\n\t\t\t\t\t\t\t\t\treadOnly:',
  '\ttarget,\n\t\t\t\t\t\t\t\t\tnamespace,\n\t\t\t\t\t\t\t\t\tschema,\n\t\t\t\t\t\t\t\t\tthinkingPresets: isClaudeProvider(row, state),\n\t\t\t\t\t\t\t\t\toperations,\n\t\t\t\t\t\t\t\t\tt,\n\t\t\t\t\t\t\t\t\treadOnly:',
)

replaceOnce(
  'open provider editor Claude type',
  '\ttarget,\n\t\t\t\t\t\t\t\t\t\tnamespace,\n\t\t\t\t\t\t\t\t\t\tschema,\n\t\t\t\t\t\t\t\t\t\toperations,\n\t\t\t\t\t\t\t\t\t\tt,\n\t\t\t\t\t\t\t\t\t\treadOnly:',
  '\ttarget,\n\t\t\t\t\t\t\t\t\t\tnamespace,\n\t\t\t\t\t\t\t\t\t\tschema,\n\t\t\t\t\t\t\t\t\t\tthinkingPresets: isClaudeProvider(row, state),\n\t\t\t\t\t\t\t\t\t\toperations,\n\t\t\t\t\t\t\t\t\t\tt,\n\t\t\t\t\t\t\t\t\t\treadOnly:',
)

replaceOnce(
  'row Claude badge',
  'children: t("customTag")\n\t\t\t\t\t\t\t\t\t\t\t\t}) : null,\n\t\t\t\t\t\t\t\t\t\t\t\tcredentialConfigured ?',
  'children: t("customTag")\n\t\t\t\t\t\t\t\t\t\t\t\t}) : null,\n\t\t\t\t\t\t\t\t\t\t\t\tadaptiveClaude ? (0, react_jsx_runtime.jsx)("span", {\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default["rowTag"],\n\t\t\t\t\t\t\t\t\t\t\t\t\tchildren: t("adaptiveClaudeTag")\n\t\t\t\t\t\t\t\t\t\t\t\t}) : null,\n\t\t\t\t\t\t\t\t\t\t\t\tcredentialConfigured ?',
)

source = source.replaceAll('children: t("adaptiveClaudeTag")', 'children: t("claudeTypeTag")')

replaceOnce(
  'fetched Claude models use recorded metadata',
  '\t\t\t\t\tbyId.set(candidate.id, byId.get(candidate.id) ?? adopt(candidate));',
  '\t\t\t\t\tbyId.set(candidate.id, byId.get(candidate.id) ?? (props.thinkingPresets ? withFetchedClaudeMetadata(adopt(candidate)) : adopt(candidate)));',
)

replaceOnce(
  'manually added Claude models default to five efforts',
  '\t\t\t\t\t\tonChange([...models, { id: "" }]);',
  '\t\t\t\t\t\tonChange([...models, props.thinkingPresets ? withDefaultClaudeReasoning({ id: "" }) : { id: "" }]);',
)

replaceOnce(
  'per-model thinking preset selector',
  '\t\t\t\t\t\t\t\t\t\teditCapacity(index, "maxTokens", event.target.value);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})]\n\t\t\t\t\t\t\t})]',
  '\t\t\t\t\t\t\t\t\t\teditCapacity(index, "maxTokens", event.target.value);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})]\n\t\t\t\t\t\t\t}), props.thinkingPresets ? (0, react_jsx_runtime.jsxs)("label", {\n\t\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default["modelField"],\n\t\t\t\t\t\t\t\tchildren: [(0, react_jsx_runtime.jsx)("span", {\n\t\t\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default["modelFieldLabel"],\n\t\t\t\t\t\t\t\t\tchildren: t("thinkingPreset")\n\t\t\t\t\t\t\t\t}), (0, react_jsx_runtime.jsxs)("select", {\n\t\t\t\t\t\t\t\t\tclassName: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["selectInput"]}`,\n\t\t\t\t\t\t\t\t\tvalue: thinkingPresetOf(model),\n\t\t\t\t\t\t\t\t\t"aria-label": `${t("thinkingPreset")} ${index + 1}`,\n\t\t\t\t\t\t\t\t\tdisabled,\n\t\t\t\t\t\t\t\t\tonChange: (event) => {\n\t\t\t\t\t\t\t\t\t\tpatch(index, { reasoningEfforts: reasoningEffortsForPreset(event.target.value) });\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\tchildren: [(0, react_jsx_runtime.jsx)("option", { value: "toggle", children: t("thinkingPresetToggle") }), (0, react_jsx_runtime.jsx)("option", { value: "four", children: t("thinkingPresetFour") }), (0, react_jsx_runtime.jsx)("option", { value: "five", children: t("thinkingPresetFive") })]\n\t\t\t\t\t\t\t\t})]\n\t\t\t\t\t\t\t}) : null]',
)

replaceOnce(
  'custom Claude card enables thinking presets',
  '\t\t\t\t\t\tprobeBlocked: keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure,\n\t\t\t\t\t\toperations,\n\t\t\t\t\t\tt,\n\t\t\t\t\t\tdisabled: profileDisabled',
  '\t\t\t\t\t\tprobeBlocked: keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure,\n\t\t\t\t\t\tthinkingPresets: isAdaptiveClaude,\n\t\t\t\t\t\toperations,\n\t\t\t\t\t\tt,\n\t\t\t\t\t\tdisabled: profileDisabled',
)

replaceOnce(
  'existing Anthropic card enables thinking presets',
  '\t\t\t\t\t\t\t\t...catalogProps,\n\t\t\t\t\t\t\t\tprobe,\n\t\t\t\t\t\t\t\tprobeBlocked: keyFailure,\n\t\t\t\t\t\t\t\toperations',
  '\t\t\t\t\t\t\t\t...catalogProps,\n\t\t\t\t\t\t\t\tprobe,\n\t\t\t\t\t\t\t\tprobeBlocked: keyFailure,\n\t\t\t\t\t\t\t\tthinkingPresets: props.thinkingPresets === true,\n\t\t\t\t\t\t\t\toperations',
)

replaceOnce(
  'separate provider declaration type state',
  '\t\t\tconst [declaring, setDeclaring] = (0, react.useState)(false);',
  '\t\t\tconst [declaringType, setDeclaringType] = (0, react.useState)(void 0);',
)

source = source.replaceAll('setDeclaring(false)', 'setDeclaringType(void 0)')
source = source.replaceAll('setDeclaring(true)', 'setDeclaringType("generic")')

replaceOnce(
  'provider declaration branch',
  '\t\t\t\t\t}) : declaring ? (0, react_jsx_runtime.jsx)("div", {',
  '\t\t\t\t\t}) : declaringType !== void 0 ? (0, react_jsx_runtime.jsx)("div", {',
)

replaceOnce(
  'provider declaration card type',
  '\t\t\t\t\t\t\t\ttaken: state.rows.map((row) => row.entry.provider),\n\t\t\t\t\t\t\t\tprotocols,',
  '\t\t\t\t\t\t\t\ttaken: state.rows.map((row) => row.entry.provider),\n\t\t\t\t\t\t\t\tprotocols,\n\t\t\t\t\t\t\t\tproviderType: declaringType,',
)

replaceOnce(
  'separate Claude provider add button',
  't("customAdd")]\n\t\t\t\t\t\t\t})]',
  't("customAdd")]\n\t\t\t\t\t\t\t}), (0, react_jsx_runtime.jsxs)("button", {\n\t\t\t\t\t\t\t\ttype: "button",\n\t\t\t\t\t\t\t\tclassName: ModelsSection_module_css_default["addButton"],\n\t\t\t\t\t\t\t\tdisabled: !state.namespaces.has(CLAUDE_PROVIDER_SETTINGS_NS) || !state.writable,\n\t\t\t\t\t\t\t\tonClick: () => {\n\t\t\t\t\t\t\t\t\tsetSavedTarget(void 0);\n\t\t\t\t\t\t\t\t\tsetAdding(false);\n\t\t\t\t\t\t\t\t\tsetEditing(void 0);\n\t\t\t\t\t\t\t\t\tsetDeclaringType(CLAUDE_PROVIDER_TYPE);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tchildren: [(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutline16, { size: 14 }), t("claudeCustomAdd")]\n\t\t\t\t\t\t\t})]',
)

replaceOnce(
  'English Claude copy',
  '\t\t\tcustomTitle: "Custom provider",\n\t\t\tcustomTag: "Custom",',
  '\t\t\tcustomTitle: "Custom provider",\n\t\t\tcustomTag: "Custom",\n\t\t\tclaudeCustomAdd: "Add Claude provider",\n\t\t\tclaudeCustomTitle: "Claude provider",\n\t\t\tclaudeTypeUnavailable: "Claude provider type storage is unavailable.",\n\t\t\tclaudeTypeTag: "Claude provider",\n\t\t\tclaudeTypeIntro: "This provider type saves native RC8 adaptive-thinking compatibility, model reasoning mappings, Claude model discovery, and recorded capacities.",\n\t\t\tadaptiveClaudeEnabled: "Choose a thinking mode for each model; new models default to five levels.",\n\t\t\tadaptiveClaudeHelpLabel: "Thinking mode help",\n\t\t\tadaptiveClaudeHelp: "Five (low / medium / high / xhigh / max): Fable 5, Opus 5, Opus 4.8, Opus 4.7, Sonnet 5\\nFour (low / medium / high / max): Opus 4.6, Sonnet 4.6\\nOn / Off: Haiku 4.5",\n\t\t\tadaptiveClaudeTag: "Claude configured",\n\t\t\tthinkingPreset: "Thinking mode",\n\t\t\tthinkingPresetToggle: "On / Off",\n\t\t\tthinkingPresetFour: "Four levels",\n\t\t\tthinkingPresetFive: "Five levels (default)",',
)

replaceOnce(
  'Chinese Claude copy',
  '\t\t\tcustomTitle: "自定义提供方",\n\t\t\tcustomTag: "自定义",',
  '\t\t\tcustomTitle: "自定义提供方",\n\t\t\tcustomTag: "自定义",\n\t\t\tclaudeCustomAdd: "添加 Claude 提供方",\n\t\t\tclaudeCustomTitle: "Claude 提供方",\n\t\t\tclaudeTypeUnavailable: "Claude 提供方类型存储不可用。",\n\t\t\tclaudeTypeTag: "Claude 提供方",\n\t\t\tclaudeTypeIntro: "此提供方类型会写入 RC8 原生自适应思考兼容配置、模型思考映射、Claude 模型发现和已记录容量。",\n\t\t\tadaptiveClaudeEnabled: "每个模型可单独选择思考模式，新增模型默认使用五档。",\n\t\t\tadaptiveClaudeHelpLabel: "思考模式说明",\n\t\t\tadaptiveClaudeHelp: "五档（低 / 中 / 高 / 超高 / 最大）：Fable 5、Opus 5、Opus 4.8、Opus 4.7、Sonnet 5\\n四档（低 / 中 / 高 / 最大）：Opus 4.6、Sonnet 4.6\\n开启 / 关闭：Haiku 4.5",\n\t\t\tadaptiveClaudeTag: "Claude 已适配",\n\t\t\tthinkingPreset: "思考模式",\n\t\t\tthinkingPresetToggle: "开启 / 关闭",\n\t\t\tthinkingPresetFour: "四档",\n\t\t\tthinkingPresetFive: "五档（默认）",',
)

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, source)
process.stdout.write(`${outputPath}\n`)
