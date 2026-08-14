# DSH Claude Provider

[English](./README.md) | 简体中文

DeepSeek Harness 的通用推理强度控制与新版 Claude 模型要求的请求参数并不完全匹配，因此选择某个档位后，可能直接出现 HTTP 400，也可能被适配器静默映射成另一个实际档位，例如界面选择 Max，实际请求却只相当于 High。`@mofeng2223/dsh-claude-provider` 增加了一个明确的 Claude 提供方类型，并按照每个 Claude 模型的配置发送正确的推理参数。

## 插件功能

1. **增加独立的 Claude 提供方类型**

   模型设置页面会增加单独的“Claude 提供方”表单。你可以在这个类型下创建多个 Provider ID，不会与普通自定义提供方混在一起。

<p align="center">
  <img src="./docs/images/provider-entry.jpg" alt="DeepSeek Harness 中新增的 Claude 提供方入口" width="580">
</p>

   点击“添加 Claude 提供方”后，会打开独立的 Anthropic Messages 配置表单：

<p align="center">
  <img src="./docs/images/claude-provider-form.jpg" alt="DeepSeek Harness 中的 Claude 提供方表单" width="580">
</p>

2. **增加按模型设置的推理模式**

   每个模型可以单独选择以下三种档位配置之一：

   - 五档：Low、Medium、High、XHigh、Max
   - 四档：Low、Medium、High、Max
   - 开关：On、Off

   新增模型默认使用五档。Claude 提供方默认选择 High，仅支持开关的模型默认选择 On。对于 adaptive thinking 模型，插件会把所选档位转换成 Claude 使用的 `thinking.type: adaptive` 与 `output_config.effort` 请求格式，避免适配器拒绝请求或把档位降级。

<p align="center">
  <img src="./docs/images/model-defaults.jpg" alt="Claude 模型容量预填与思考模式设置" width="580">
</p>

3. **补充 Anthropic 原生模型探测**

   DeepSeek Harness 的普通自定义提供方在使用 `anthropic-messages` 协议时无法获取模型列表。本插件为 Claude 提供方增加了基于 Anthropic 兼容 `GET /v1/models` 接口的模型探测，并支持游标分页。

4. **探测后自动填写常用 Claude 模型参数**

   探测到的模型 ID 如果与插件已经记录的 Claude 模型匹配，插件会自动填写上下文窗口、最大输出长度和推理模式。用户手动添加的模型仍然可以自由编辑，不会被这项自动匹配覆盖。

5. **不影响其他提供方**

   模型探测、参数预填、推理档位和请求转换只对明确创建为“Claude 提供方”的 Provider ID 生效。DeepSeek Harness 的内置提供方和普通自定义提供方会保持原有行为，即使它们同样使用 `anthropic-messages` 协议，或者包含 `claude-*` 模型 ID，也不会被插件修改。

## 安装

### 安装已发布的版本

浏览器界面使用 Web Profile：

```sh
npx @deepseek-ai/dsh plugin --profile web add @mofeng2223/dsh-claude-provider
```

不使用 Web 界面的命令行运行使用 Headless Profile：

```sh
npx @deepseek-ai/dsh plugin --profile headless add @mofeng2223/dsh-claude-provider
```

安装后需要重启对应的 DeepSeek Harness 进程。

### 从源码安装

先克隆、构建并打包项目：

```sh
git clone https://github.com/MoFeng2223/dsh-claude-provider.git
cd dsh-claude-provider
npm install
npm run build
mkdir -p dist
npm pack --pack-destination dist
```

将生成的包安装到 Web Profile：

```sh
npx @deepseek-ai/dsh plugin --profile web add ./dist/mofeng2223-dsh-claude-provider-*.tgz
```

或者安装到 Headless Profile：

```sh
npx @deepseek-ai/dsh plugin --profile headless add ./dist/mofeng2223-dsh-claude-provider-*.tgz
```

## 卸载

插件安装在哪个 Profile，就执行对应的卸载命令：

```sh
npx @deepseek-ai/dsh plugin --profile web remove @mofeng2223/dsh-claude-provider
npx @deepseek-ai/dsh plugin --profile headless remove @mofeng2223/dsh-claude-provider
```

卸载插件不会删除 `~/.dsh/settings.yaml` 或已经保存的凭据。已有的 Claude 提供方会继续作为普通的 `anthropic-messages` 自定义路由保留，但会失去本插件提供的 Claude 专用界面、模型探测、参数预填、推理档位和 adaptive 请求转换。

## 许可证

[MIT](./LICENSE)
