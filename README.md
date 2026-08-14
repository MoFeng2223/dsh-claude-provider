# DSH Claude Provider

English | [简体中文](./README.zh-CN.md)

DeepSeek Harness's generic reasoning controls do not fully match the request parameters expected by newer Claude models. A selected level can therefore fail with HTTP 400, or be silently mapped to another effective level, such as Max behaving as High. `@mofeng2223/dsh-claude-provider` adds an explicit Claude provider type and sends the reasoning parameters that each configured Claude model expects.

## What this plugin does

1. **Adds a dedicated Claude provider type**

   The Models settings page gains a separate **Claude Provider** form. You can create multiple Provider IDs under this type without mixing them with generic custom providers.

<p align="center">
  <img src="./docs/images/provider-entry.jpg" alt="Add Claude Provider entry in DeepSeek Harness" width="580">
</p>

   Selecting **Add Claude Provider** opens the dedicated Anthropic Messages form:

<p align="center">
  <img src="./docs/images/claude-provider-form.jpg" alt="Claude Provider form in DeepSeek Harness" width="580">
</p>

2. **Adds model-specific reasoning modes**

   Each model can use one of three configurable mode sets:

   - Five levels: Low, Medium, High, XHigh, and Max
   - Four levels: Low, Medium, High, and Max
   - Toggle: On or Off

   New models default to five levels. Claude providers default to High, while toggle-only models default to On. For adaptive-thinking models, the plugin converts the selection to Claude's `thinking.type: adaptive` and `output_config.effort` request format instead of allowing the adapter to collapse or reject the selected level.

<p align="center">
  <img src="./docs/images/model-defaults.jpg" alt="Claude model capacity defaults and reasoning modes" width="580">
</p>

3. **Adds native Anthropic model discovery**

   DeepSeek Harness's generic custom provider cannot list models for the `anthropic-messages` protocol. This plugin adds model discovery for Claude providers through the provider's native Anthropic-compatible `GET /v1/models` endpoint, including cursor pagination.

4. **Fills known Claude model defaults after discovery**

   When a discovered model matches a recorded Claude model ID, the plugin automatically fills its context window, maximum output length, and reasoning-mode set. Models entered manually remain fully editable and are not overwritten by this lookup.

5. **Leaves every other provider unchanged**

   All discovery, defaults, reasoning controls, and request rewriting are limited to Provider IDs explicitly created as **Claude Providers**. DeepSeek Harness's built-in providers and ordinary custom providers keep their original behavior, even when they use `anthropic-messages` or expose a `claude-*` model ID.

## Install

### Published package

Install the Web profile for the browser interface:

```sh
npx @deepseek-ai/dsh plugin --profile web add @mofeng2223/dsh-claude-provider
```

Install the Headless profile for command-line runs without the Web interface:

```sh
npx @deepseek-ai/dsh plugin --profile headless add @mofeng2223/dsh-claude-provider
```

Restart the corresponding DeepSeek Harness process after installation.

### From source

Build and package the repository first:

```sh
git clone https://github.com/MoFeng2223/dsh-claude-provider.git
cd dsh-claude-provider
npm install
npm run build
mkdir -p dist
npm pack --pack-destination dist
```

Install the generated package into the Web profile:

```sh
npx @deepseek-ai/dsh plugin --profile web add ./dist/mofeng2223-dsh-claude-provider-*.tgz
```

Or install it into the Headless profile:

```sh
npx @deepseek-ai/dsh plugin --profile headless add ./dist/mofeng2223-dsh-claude-provider-*.tgz
```

## Uninstall

Run the command for each profile where the plugin was installed:

```sh
npx @deepseek-ai/dsh plugin --profile web remove @mofeng2223/dsh-claude-provider
npx @deepseek-ai/dsh plugin --profile headless remove @mofeng2223/dsh-claude-provider
```

Uninstalling the plugin does not delete `~/.dsh/settings.yaml` or stored credentials. Existing Claude providers remain configured as ordinary custom `anthropic-messages` routes, but lose the Claude-specific interface, model discovery, defaults, reasoning controls, and adaptive request conversion supplied by this plugin.

## License

[MIT](./LICENSE)
