# 小程序框架基准测试

本仓库用同一套小程序场景对比以下框架：

- `weapp-vite + wevu`
- `uni-app vite vue3`
- `uni-app x`
- `mpx`
- `taro vue3`

基准测试分为两层：编译时和运行时。

## 编译时

`packages/benchmark-runner` 会反复执行每个应用的构建命令，并记录：

- 冷构建耗时
- 重复构建耗时
- 命令退出码
- 失败时的 stdout/stderr 尾部内容
- 输出文件数量
- 输出总字节数
- JavaScript、模板、样式、JSON 和静态资源的字节分组

运行：

```bash
pnpm bench:compile
```

结果会写入 `reports/compile/latest.json` 和 `reports/compile/latest.md`。

## 运行时

每个应用都实现同一套页面场景：

- 渲染确定性的列表数据
- 追加一批数据
- 更新每第 5 项
- 过滤列表
- 计算汇总信息
- 跳转详情页

运行时页面通过各框架原生的状态更新机制暴露同一套 benchmark 概念。每个页面会把指标写入页面状态，并打印 `BENCHMARK_RUNTIME` 日志载荷。

运行时数据必须从 `e2e/ide/runtime-benchmark.ts` 获取。这个 IDE E2E 入口会通过微信开发者工具 automator 启动真实小程序项目，并在同一个项目会话内复用 automator，多轮数据通过 `miniProgram.reLaunch(...)` 串联采集。`pnpm bench:runtime` 只负责调用这条 IDE E2E 链路并把样本渲染成报告。

运行：

```bash
pnpm bench:runtime
```

结果会写入 `reports/runtime/latest.json` 和 `reports/runtime/latest.md`。如果 DevTools 不在默认 macOS 路径，设置：

```bash
WECHAT_DEVTOOLS_CLI=/path/to/wechat/devtools/cli pnpm bench:runtime
```

如果只需要写入手动采集计划，不启动 DevTools：

```bash
BENCH_RUNTIME_MODE=plan pnpm bench:runtime
```

如果只需要运行 IDE E2E 采集入口并生成原始样本：

```bash
pnpm e2e:ide:runtime
```

原始样本会写入 `reports/runtime/latest.samples.json`。

## uni-app x HBuilderX 检查

`uni-app x` 应用额外提供 HBuilderX CLI smoke 路径。这个检查没有放进默认 benchmark 命令，因为它依赖本机安装 HBuilderX。

运行：

```bash
pnpm test:hbuilderx:uni-app-x
```

该脚本会调用 `@dcloudio/hbuilderx-cli`：

```bash
uni-launch mp-weixin --compile true --project $PWD
```

交互式 HBuilderX 运行：

```bash
pnpm --filter @benchmarks/uni-app-x hbuilderx:launch:mp-weixin
pnpm --filter @benchmarks/uni-app-x hbuilderx:logcat:mp-weixin
```

## 公平性规则

- 数据量默认一致：`INITIAL_COUNT=300`，`BATCH_COUNT=120`。
- 交互序列和指标名称一致。
- 编译测量使用生产构建。
- 每次测量前都会删除构建输出目录。
- 不测量依赖安装时间。
- 框架特有的生成辅助文件不计入源码复杂度对比，但计入产物体积。

## 项目布局

框架项目位于 `apps/*`。共享 runner 逻辑位于 `packages/benchmark-runner`。
