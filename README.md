# DSH Claude Provider

English | [简体中文](./README.zh-CN.md)

~~DeepSeek Harness's general-purpose reasoning controls did not fully match the request parameters required by newer Claude models. As a result, selecting a reasoning level could either produce an HTTP 400 error or be silently mapped by the adapter to a different effective level—for example, Max in the interface could actually be sent as High. `@mofeng2223/dsh-claude-provider` added an explicit Claude provider type and sent the correct reasoning parameters for each Claude model.~~

Since DeepSeek Harness 0.1.1-rc.1, reasoning-effort parameters for Claude models are supported natively, but they still need to be configured manually in `settings.yaml`. Therefore, this plugin no longer intercepts or rewrites model requests at runtime. Instead, it writes the corresponding native settings to `settings.yaml` when a Claude provider is saved through the front end.

The plugin retains its dedicated Claude provider configuration page, so users do not need to edit `settings.yaml` manually. Anthropic-native model discovery, automatic defaults for common Claude models, and other features not yet available in DeepSeek Harness are also retained.

## What this plugin does

1. **Adds a dedicated Claude provider type**

   The Models settings page gains a separate **Claude Provider** form. You can create multiple Provider IDs under this type without mixing them with generic custom providers.

<p align="center">
  <img src="./docs/images/provider-entry.en.jpg" alt="Add Claude Provider entry in DeepSeek Harness" width="580">
</p>

   Selecting **Add Claude Provider** opens the dedicated Anthropic Messages form:

<p align="center">
  <img src="./docs/images/claude-provider-form.en.jpg" alt="Claude Provider form in DeepSeek Harness" width="580">
</p>

2. **Adds model-specific reasoning modes**

   Each model can use one of three configurable mode sets:

   - Five levels: Low, Medium, High, XHigh, and Max
   - Four levels: Low, Medium, High, and Max
   - Toggle: On or Off

   New models default to five levels, and Claude providers default to High.

   ~~For adaptive thinking models, the plugin converted the selected level into Claude's `thinking.type: adaptive` and `output_config.effort` request format, preventing adapter rejections or silent downgrades.~~

   For adaptive thinking models, the plugin writes the selected level to DSH's native configuration when saved.

<p align="center">
  <img src="./docs/images/model-defaults.en.jpg" alt="Claude model capacity defaults and reasoning modes" width="580">
</p>

3. **Adds native Anthropic model discovery**

   DeepSeek Harness's generic custom provider cannot list models for the `anthropic-messages` protocol. This plugin adds model discovery for Claude providers through the provider's native Anthropic-compatible `GET /v1/models` endpoint, including cursor pagination.

4. **Fills known Claude model defaults after discovery**

   When a discovered model matches a recorded Claude model ID, the plugin automatically fills its context window, maximum output length, and reasoning-mode set. Models entered manually remain fully editable and are not overwritten by this lookup.

5. **Leaves every other provider unchanged**

   Discovery, defaults, and reasoning controls are limited to Provider IDs explicitly created as **Claude Providers**. DeepSeek Harness's built-in providers and ordinary custom providers keep their original behavior, even when they use `anthropic-messages` or expose a `claude-*` model ID.

## Install

### Published package

Install the Web profile for the browser interface:

```sh
npx @deepseek-ai/dsh plugin --profile web add @mofeng2223/dsh-claude-provider
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

## Uninstall

```sh
npx @deepseek-ai/dsh plugin --profile web remove @mofeng2223/dsh-claude-provider
```

Uninstalling the plugin does not delete `~/.dsh/settings.yaml` or stored credentials. Existing Claude providers remain ordinary custom `anthropic-messages` routes. Their `reasoningEfforts`, default `reasoning`, and `compat.forceAdaptiveThinking` fields are native RC8 settings, so adaptive thinking and the front-end reasoning-effort selector continue to work. Only the dedicated Claude add/edit UI, model discovery, and recorded defaults disappear.

## License

[MIT](./LICENSE)
