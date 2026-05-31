# 小程序框架基准测试

本仓库用同一套小程序场景对比以下框架：

- `weapp-vite + wevu`
- `weapp-vite 原生`，纯原生微信小程序页面，由 `weapp-vite` 负责编译
- `uni-app vite vue3`
- `uni-app x`
- `mpx`
- `taro vue3`
- `@vue-mini/core` 原生小程序

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

`@vue-mini/core` 没有独立构建链路，本仓库只把它纳入运行时对比，不纳入编译时排名。

`weapp-vite 原生` 没有引入 `wevu`，源码是原生 `Page` / `setData` 写法。它参与编译时 benchmark，用来观察只使用 `weapp-vite` 编译链路时的构建成本；运行时报告中则作为原生小程序实现列出，方便和 `weapp-vite + wevu`、`@vue-mini/core` 等运行时方案分开看。

## 运行时

每个应用都实现同一套页面场景：

- 连续多次重建并渲染确定性的列表数据
- 连续多次追加一批数据
- 连续多次按不同步长批量更新列表项
- 连续多次按分数和 ID 做全量排序，并正反切换
- 连续多次在过滤结果和完整列表之间切换
- 连续多次分组聚合并渲染分组结果
- 连续多次切换中段窗口数据
- 连续多次用全新数据集整表替换
- 跳转详情页

运行时页面通过各框架原生的状态更新机制暴露同一套 benchmark 概念。每个指标都包含多轮真实状态变更和渲染提交，记录的是累计耗时，避免单次 5ms、34ms 这类轻量操作差值被误读。每个页面会把指标写入页面状态，并打印 `BENCHMARK_RUNTIME` 日志载荷。

运行时数据必须从 `e2e/ide/runtime-benchmark.ts` 获取。这个 IDE E2E 入口会通过微信开发者工具 automator 启动真实小程序项目，并在同一个项目会话内复用 automator，多轮数据通过 `miniProgram.reLaunch(...)` 串联采集。`pnpm bench:runtime` 只负责调用这条 IDE E2E 链路并把样本渲染成报告。

`@vue-mini/core` 运行时项目是原生微信小程序，启动前会通过微信开发者工具 `build-npm` 准备 npm 依赖；这一步只用于运行时采集准备，不进入编译时 benchmark。

`weapp-vite 原生` 运行时项目同样是原生微信小程序页面，但它不需要 `build-npm`。运行时数据由 IDE E2E 打开 `weapp-vite` 编译后的 `dist/` 小程序项目采集。

运行时报告会优先展示直观对比：

- 性能指数，最快项目为 100
- 绝对差值和信号强度，区分弱信号和明显差距
- 8 个场景平均总耗时排名
- 每个场景的最快和最慢框架
- 每个框架在各场景下的平均耗时
- 完整原始样本明细

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

- 数据量默认一致：`INITIAL_COUNT=480`，`BATCH_COUNT=120`，`REPLACE_COUNT=640`，`WINDOW_SIZE=140`。
- 运行时指标使用累计压力场景：同一指标内会连续执行多次真实渲染提交，再记录累计耗时。
- 交互序列和指标名称一致。
- 编译测量使用生产构建。
- 每次测量前都会删除构建输出目录。
- 不测量依赖安装时间。
- 框架特有的生成辅助文件不计入源码复杂度对比，但计入产物体积。
- 运行时报告的排名来自真实 IDE E2E 采集结果，不使用本地模拟数据。

## 项目布局

框架项目位于 `apps/*`。共享 runner 逻辑位于 `packages/benchmark-runner`。

`submodules/weapp-vite` 挂载 `weapp-vite/weapp-vite` 源码，用于后续对照和追踪上游实现。
