# DSH Claude Provider

[English](./README.md) | 简体中文

`@mofeng2223/dsh-claude-provider` 为 DeepSeek Harness 增加一个可见且可复用的“Claude 提供方”类型，并修正其 Anthropic Messages 适配器仍将思考参数序列化为 `thinking.type: enabled` 与 `budget_tokens` 的问题。对于明确登记在此类型下的提供方和模型组合，插件会将请求转换为 `thinking.type: adaptive` 与 `output_config.effort`。

通过“添加 Claude 提供方”可以在同一个类型下创建任意多个 Provider ID。类型归属会明确保存在插件自己的设置命名空间中。插件不会根据 `anthropic-messages` 协议、`claude-*` 模型 ID 或默认思考强度推断类型。因此，即使通用自定义提供方或内置提供方使用相同协议，插件也不会修改它们。

只有明确登记为此类型的提供方才会获得 Claude 标识、原生模型发现、已记录容量预填、按模型设置思考模式以及 adaptive 请求转换。发送请求时，插件会读取所选模型配置的思考档位：四档和五档配置使用 adaptive thinking；开启/关闭配置继续使用旧版基于预算的思考方式。手动新增的模型默认使用五档，因此未来新增的模型 ID 也可以直接配置。

同一个 npm 包同时提供 Host 请求适配器和 Web 设置客户端。客户端会使用内部发现协议标记“获取模型目录”请求，再由 Host 部分处理。只有这个请求会调用 Anthropic 原生的 `GET /v1/models` 接口，并使用 `x-api-key` 和 `anthropic-version` 请求头。

插件支持 Anthropic 游标分页，并会在提供方返回相关字段时读取 `display_name`、`max_input_tokens` 和 `max_tokens`。插件不会尝试使用 OpenAI 兼容的模型列表接口，也不会回退到 Bearer 鉴权。

## 安装

直接安装 npm 上发布的插件：

```sh
npx @deepseek-ai/dsh plugin --profile web add @mofeng2223/dsh-claude-provider
npx @deepseek-ai/dsh plugin --profile headless add @mofeng2223/dsh-claude-provider
```

安装完成后，重启对应的 Harness 进程。

修改插件源码后，可以重新构建 Web 客户端并生成单一分发包：

```sh
npm run build
npm pack --pack-destination dist
```

日常安装不建议直接使用源码目录。直接安装源码目录会创建 pnpm `link:` 依赖；在目前的 DSH/pnpm 版本中，移除依赖和 bundle 注册后，顶层符号链接仍有可能残留。通过 npm 或 `.tgz` 归档安装时，文件由包管理器管理，卸载后不会留下这类链接。

## 调试

临时设置 `DSH_CLAUDE_PROVIDER_DEBUG=1`，可以为每个被改写的请求输出一行经过脱敏的诊断信息。诊断内容只包含提供方、模型和所选思考强度，不包含 API 密钥。

## 卸载

```sh
npx @deepseek-ai/dsh plugin --profile web remove @mofeng2223/dsh-claude-provider
npx @deepseek-ai/dsh plugin --profile headless remove @mofeng2223/dsh-claude-provider
```

卸载插件时会保留 `~/.dsh/settings.yaml` 和已经保存的凭据。现有的 Claude 类型提供方仍会作为普通的 `anthropic-messages` 自定义路由显示，但会失去本插件提供的 Claude 标识、按模型配置思考模式、Anthropic 原生模型发现以及 adaptive 请求改写功能。

## 安全与隐私

插件不会存储或记录 API 密钥。获取模型列表时，插件会使用表单中临时输入的密钥，或者通过 DSH 解析现有路由保存的凭据。密钥只会发送到该路由对应的 Anthropic Models API。

请求转换器只会在明确登记到本插件类型的 Provider ID 所对应的 `llm/stream` 调用中运行，不会修改任何其他提供方。

## Windows 支持

发布到 npm 的插件和生成的 `.tgz` 包均可跨平台使用。Windows 可以直接通过 npm 包名或本地 `.tgz` 路径安装，无需在目标电脑上重新构建，也不依赖平台专用的原生模块。
