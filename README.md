# DSH Claude Provider

English | [简体中文](./README.zh-CN.md)

`@mofeng2223/dsh-claude-provider` adds a visible Custom Claude provider type to
DeepSeek Harness and fixes Anthropic Messages routes that still
serialize reasoning as `thinking.type: enabled` with `budget_tokens`. For the
configured provider/model pairs, it converts the outgoing request to
`thinking.type: adaptive` plus `output_config.effort`.

The bundled defaults recognize every `claude-*` model on every provider route.
At request time the plugin reads the model's configured effort list: four- and
five-level profiles use adaptive thinking, while an On/Off profile keeps the
legacy budget-based path. This lets future Claude model IDs work without a
plugin update.

The same package supplies both the Host request adapter and the Web settings
client. The client marks its model-directory request with a private discovery
protocol handled by the Host half. Only that request uses Anthropic's native
`GET /v1/models` endpoint, with `x-api-key` and `anthropic-version` headers.
It supports Anthropic cursor pagination and reads `display_name`,
`max_input_tokens`, and `max_tokens` when the provider returns them. No
OpenAI-compatible listing or Bearer-auth fallback is attempted.

## Install

Build the Web client and refresh the single distributable archive after
changing the plugin source:

```sh
npm run build
npm pack --pack-destination dist
```

Install the published package directly:

```sh
npx @deepseek-ai/dsh plugin --profile web add @mofeng2223/dsh-claude-provider
npx @deepseek-ai/dsh plugin --profile headless add @mofeng2223/dsh-claude-provider
```

Restart the corresponding Harness process after installation.

Do not use the source directory as the normal installation target. That creates
a pnpm `link:` dependency, and current DSH/pnpm builds can leave the top-level
link behind after the dependency and bundle registration have been removed.
Archive installs are package-manager-owned and uninstall without those stale
links.

Set `DSH_CLAUDE_PROVIDER_DEBUG=1` temporarily to print one redacted line for
each rewritten request. The diagnostic contains only provider, model, and
selected effort.

## Remove

```sh
npx @deepseek-ai/dsh plugin --profile web remove @mofeng2223/dsh-claude-provider
npx @deepseek-ai/dsh plugin --profile headless remove @mofeng2223/dsh-claude-provider
```

Uninstall intentionally leaves `~/.dsh/settings.yaml` and stored credentials
alone. Existing custom providers therefore remain visible as ordinary custom
`anthropic-messages` routes, but lose this plugin's Claude badge, per-model
thinking-mode controls, native Anthropic model discovery, and adaptive request
rewrite.

The plugin never stores or logs API keys. Model discovery uses the one-shot key
typed into the form or resolves the existing route's credential through DSH;
the value is sent only to that route's Anthropic Models API. Its request
transformer runs only inside matching `llm/stream` calls and leaves nonmatching
providers and models untouched.

The generated `.tgz` package is portable. Copy it to Windows and install it by
its local path; no source build or platform-specific dependency is required.
