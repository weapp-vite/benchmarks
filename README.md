# 小程序框架基准测试

这个仓库用于对比多种小程序技术栈在构建、运行时、HMR 和包体积维度的表现。当前覆盖的测试项目包括 `weapp-vite + wevu`、`weapp-vite` 原生、uni-app、uni-app x、Mpx、Taro 和 `@vue-mini/core`。

## 目录结构

| 路径                         | 说明                                 |
| ---------------------------- | ------------------------------------ |
| `apps/`                      | 各框架的测试小程序项目               |
| `packages/benchmark-runner/` | 基准测试采集、统计和报告生成工具     |
| `e2e/ide/`                   | 微信开发者工具自动化采集脚本         |
| `reports/`                   | 最新报告和按机器归档的历史报告       |
| `submodules/weapp-vite/`     | 用于对照或定位的 `weapp-vite` 子模块 |

## 环境要求

- Node.js 20 或更高版本
- pnpm 10.x
- 微信开发者工具，并确保 CLI 可用
- HBuilderX，用于运行 uni-app x 的 CLI 构建和 `uni-launch` 测试
- 运行 IDE 自动化采集前，需要在微信开发者工具中登录

默认会尝试查找以下 CLI 路径：

```bash
/Applications/wechatwebdevtools.app/Contents/MacOS/cli
/Applications/小程序开发者工具.app/Contents/MacOS/cli
/Applications/微信开发者工具.app/Contents/MacOS/cli
```

如果你的安装位置不同，可以设置：

```bash
WECHAT_DEVTOOLS_CLI=/path/to/wechat/devtools/cli pnpm bench:runtime
```

uni-app x 的构建和 `pnpm test:hbuilderx:uni-app-x` 会调用 HBuilderX CLI。安装 HBuilderX 后，请确保 `hbuilderx`、`uni`、`uni-launch`、`uni-logcat` 等命令可用；如果没有配置到 `PATH`，需要先按 HBuilderX 的本机安装方式补齐命令路径。

## 安装

```bash
pnpm install
```

如果第一次克隆仓库后需要同步子模块：

```bash
git submodule update --init --recursive
```

## AppID 配置

仓库里的测试小程序配置使用了统一的示例 AppID。你在本机导入微信开发者工具或运行 runtime benchmark 前，建议替换成自己的小程序 AppID，否则可能遇到权限、编译或 IDE 自动化行为差异。

需要关注的位置：

| 项目                               | 配置文件                                                        |
| ---------------------------------- | --------------------------------------------------------------- |
| `apps/weapp-vite-wevu`             | `apps/weapp-vite-wevu/project.config.json`                      |
| `apps/weapp-vite-wevu-performance` | `apps/weapp-vite-wevu-performance/project.config.json`          |
| `apps/weapp-vite-native`           | `apps/weapp-vite-native/project.config.json`                    |
| `apps/mpx`                         | `apps/mpx/static/wx/project.config.json`                        |
| `apps/taro-vue3`                   | `apps/taro-vue3/project.config.json`                            |
| `apps/vue-mini-core`               | `apps/vue-mini-core/project.config.json`                        |
| `apps/uni-app-vite-vue3`           | `apps/uni-app-vite-vue3/src/manifest.json` 的 `mp-weixin.appid` |
| `apps/uni-app-x`                   | `apps/uni-app-x/src/manifest.json` 的 `mp-weixin.appid`         |

替换示例：

```json
{
  "appid": "你的微信小程序 AppID"
}
```

uni-app 项目需要替换 `mp-weixin.appid`：

```json
{
  "mp-weixin": {
    "appid": "你的微信小程序 AppID"
  }
}
```

## 常用命令

```bash
pnpm build
```

构建全部测试项目和 runner。

```bash
pnpm lint
pnpm typecheck
pnpm test
```

运行代码检查、类型检查和测试任务。当前仓库并非所有 workspace 都定义了实际 test 任务。

```bash
pnpm bench
```

依次运行 compile、runtime 和 HMR 基准测试。

也可以单独运行：

```bash
pnpm bench:compile
pnpm bench:runtime
pnpm bench:hmr
pnpm bench:size:wevu
```

uni-app x 的 HBuilderX 测试入口：

```bash
pnpm test:hbuilderx:uni-app-x
```

这个命令依赖本机已安装并可启动的 HBuilderX。

## 运行时基准测试

`pnpm bench:runtime` 会通过微信开发者工具真实打开各测试小程序，并采集页面内输出的 `BENCHMARK_RUNTIME` 指标。运行前建议先执行：

```bash
pnpm build
```

运行时报告会写入：

- `reports/runtime/latest.md`
- `reports/runtime/latest.json`
- `reports/runtime/latest.samples.json`
- `reports/runtime/machines/<machine-id>/`

可用环境变量：

| 变量                              | 说明                                         |
| --------------------------------- | -------------------------------------------- |
| `WECHAT_DEVTOOLS_CLI`             | 指定微信开发者工具 CLI 路径                  |
| `BENCH_RUNTIME_ITERATIONS`        | 每个项目的采样轮数，默认 20                  |
| `BENCH_RUNTIME_PROJECTS`          | 只采集指定项目，多个项目用逗号分隔，适合调试 |
| `BENCH_RUNTIME_TIMEOUT`           | DevTools 启动超时                            |
| `BENCH_RUNTIME_LAUNCH_RETRIES`    | DevTools 启动重试次数                        |
| `BENCH_RUNTIME_METRICS_TIMEOUT`   | 单次等待指标输出的超时                       |
| `BENCH_RUNTIME_ITERATION_RETRIES` | 单轮采样失败后的重试次数                     |
| `BENCH_RUNTIME_RELAUNCH_RETRIES`  | 页面 `reLaunch` 重试次数                     |

只调试某几个项目时可以使用：

```bash
BENCH_RUNTIME_PROJECTS=mpx,vue-mini-core BENCH_RUNTIME_ITERATIONS=1 pnpm exec tsx e2e/ide/runtime-benchmark.ts --iterations 1
```

完整报告请不要设置 `BENCH_RUNTIME_PROJECTS`，否则只会生成过滤后的样本文件。

## 报告

最新报告入口：

- 编译性能：`reports/compile/latest.md`
- 运行时性能：`reports/runtime/latest.md`
- HMR 性能：`reports/hmr/latest.md`
- wevu 体积分析：`reports/size/wevu-analysis.md`

按机器归档的报告放在对应的 `reports/**/machines/<machine-id>/` 目录下。不同机器之间的结果只能作为趋势参考，直接比较应优先使用同一机器 ID 下的历史报告。

## 提交流程

提交前建议按顺序执行：

```bash
pnpm build
pnpm lint
pnpm typecheck
pnpm test
```

涉及 runtime 报告时，还需要执行：

```bash
pnpm bench:runtime
```
