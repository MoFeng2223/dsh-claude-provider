// These helpers are inserted into the upstream client module by build-client.mjs.
const CLAUDE_DISCOVERY_API = "mofeng-anthropic-models";
const CLAUDE_PROVIDER_SETTINGS_NS = "dsh-claude-provider";
const CLAUDE_PROVIDER_TYPE = "claude-adaptive";
const CLAUDE_FIVE_EFFORTS = Object.freeze({ low: "low", medium: "medium", high: "high", xhigh: "xhigh", max: "max" });
const CLAUDE_FOUR_EFFORTS = Object.freeze({ low: "low", medium: "medium", high: "high", max: "max" });
const CLAUDE_TOGGLE_EFFORTS = Object.freeze({ off: null, high: "high" });
const CLAUDE_PENDING_MODELS = new WeakSet();

function reasoningEffortsForPreset(preset) {
  if (preset === "toggle") return { ...CLAUDE_TOGGLE_EFFORTS };
  if (preset === "four") return { ...CLAUDE_FOUR_EFFORTS };
  return { ...CLAUDE_FIVE_EFFORTS };
}

function claudeAdaptiveEnabled(model, inherited) {
  const known = CLAUDE_KNOWN_MODELS[model?.id];
  if (known?.preset === "toggle") return false;
  const explicit = model?.compat?.forceAdaptiveThinking;
  if (typeof explicit === "boolean") return explicit;
  if (typeof inherited === "boolean") return inherited;
  return known !== undefined && known.preset !== "toggle";
}

function withClaudeAdaptive(model, enabled) {
  return { ...model, compat: { ...model.compat, forceAdaptiveThinking: enabled } };
}

// Defaults are applied only when adopting a new model, never when saving an edit.
function withDefaultClaudeReasoning(model) {
  const known = CLAUDE_KNOWN_MODELS[model.id];
  const next = Object.hasOwn(model, "reasoningEfforts") ? { ...model } : {
    ...model, reasoningEfforts: reasoningEffortsForPreset(known?.preset ?? "five")
  };
  return typeof next.compat?.forceAdaptiveThinking === "boolean" ? next
    : withClaudeAdaptive(next, known?.preset !== "toggle");
}

function withKnownClaudeInput(model) {
  if (!CLAUDE_KNOWN_MODELS[model?.id] || Array.isArray(model.input)) return { ...model };
  return { ...model, input: ["text", "image"] };
}

function withFetchedClaudeMetadata(model) {
  const known = CLAUDE_KNOWN_MODELS[model?.id];
  return withDefaultClaudeReasoning(withKnownClaudeInput({
    ...model,
    ...known === undefined ? {} : {
      contextWindow: model.contextWindow ?? known.contextWindow,
      maxTokens: model.maxTokens ?? known.maxTokens
    }
  }));
}

function newClaudeModel() {
  const model = { id: "" };
  CLAUDE_PENDING_MODELS.add(model);
  return model;
}

function carryClaudeDraft(model, next) {
  if (CLAUDE_PENDING_MODELS.has(model)) CLAUDE_PENDING_MODELS.add(next);
  return next;
}

function finishClaudeDraft(model) {
  return CLAUDE_PENDING_MODELS.has(model) && model.id.trim().length > 0
    ? withFetchedClaudeMetadata(model) : model;
}

function withNativeClaudeModel(model, inherited) {
  const next = finishClaudeDraft(model);
  return withClaudeAdaptive(next, claudeAdaptiveEnabled(next, inherited));
}

function withNativeClaudeProfile(profile) {
  const { compat: currentCompat, ...rest } = profile;
  const compat = { ...currentCompat };
  Reflect.deleteProperty(compat, "forceAdaptiveThinking");
  const models = Array.isArray(profile.models)
    ? profile.models.map(model => withNativeClaudeModel(model, currentCompat?.forceAdaptiveThinking))
    : profile.models;
  const next = { ...rest, ...Object.keys(compat).length ? { compat } : {}, ...models === undefined ? {} : { models } };
  // A provider-wide default must not refer to a level the edited models no longer offer.
  if (typeof next.reasoning === "string" && Array.isArray(models)
      && models.some(model => !Object.hasOwn(model.reasoningEfforts ?? {}, next.reasoning))) {
    Reflect.deleteProperty(next, "reasoning");
  }
  return next;
}

function isClaudeProvider(row, state) {
  const namespace = state.namespaces.get(CLAUDE_PROVIDER_SETTINGS_NS);
  return namespace?.value?.providerTypes?.[row.entry.provider] === CLAUDE_PROVIDER_TYPE;
}

function ClaudeAdaptiveThinking({ model, inherited, position, disabled, t, onChange }) {
  const label = `${t("claudeAdaptiveThinking")} ${position}`;
  return react_jsx_runtime.jsxs("div", {
    className: ModelsSection_module_css_default["modelReasoningHead"],
    style: { marginTop: 4, marginBottom: 12 },
    children: [react_jsx_runtime.jsxs("span", {
      className: `${ModelsSection_module_css_default["modelFieldLabel"]} ${ModelsSection_module_css_default["modelReasoningLabel"]}`,
      children: [t("claudeAdaptiveThinking"), react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
        label: t("claudeAdaptiveHelp"), side: "right", delayMs: 0, focusDelayMs: 0, portal: true, openOnClick: true,
        children: react_jsx_runtime.jsx("button", {
          type: "button", className: ModelsSection_module_css_default["helpButton"],
          "aria-label": t("claudeAdaptiveHelpLabel"), children: "?"
        })
      })]
    }), react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Switch, {
      checked: claudeAdaptiveEnabled(model, inherited), label,
      disabled: disabled || CLAUDE_KNOWN_MODELS[model.id]?.preset === "toggle",
      onChange: enabled => onChange(withClaudeAdaptive(model, enabled))
    })]
  });
}
