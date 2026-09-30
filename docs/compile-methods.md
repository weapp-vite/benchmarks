# 可重放的扩展编译采样

对应 benchmarks #4，独立方法 schema 1；原 compile/latest.json 场景、20 次采样和公开图表结构保留，不把新口径合入旧排名。新增报告位于 reports/compile/methods，包含原始执行序列、每批每轮结果、fixture 预验证和机器归档。report:refresh 增加该验证步骤。

```sh
BENCH_MACHINE_PROFILE=workstation pnpm bench:compile:methods
```

默认 seed=20261001、3 批 × 5 轮。每轮将 native/wevu × small/medium/large × reset/primed 共 12 个组合用 xorshift32 + Fisher–Yates 打乱，保存确切序号；同一设置可重放。可通过 BENCH_COMPILE_SEED、BENCH_COMPILE_BATCHES、BENCH_COMPILE_ITERATIONS、BENCH_COMPILE_SCALES、BENCH_COMPILE_FRAMEWORKS 选择实验，设置参与方法指纹。

| 规模   | 页面 | 复用组件 | 共享依赖模块 | 分包页面 |
| ------ | ---: | -------: | -----------: | -------: |
| small  |    4 |        4 |            4 |        2 |
| medium |   24 |       12 |           12 |       12 |
| large  |   80 |       32 |           32 |       40 |

生成代码与样式先经 ESLint、Stylelint、构建和工作区类型检查。每个样本在隔离目录恢复同一已验证源码摘要；每次启动新的 Node CLI 进程，直接执行 weapp-vite build，不走 Turbo。native/wevu 使用相同路由、组件复用和共享数据规模；目前没有扩展其他框架的 fixture，不能据此宣称全框架大型项目对比。

reset-tool-state 删除自己目录中的 dist、.bench-cache 和 .weapp-vite。primed-tool-state 在同样清理后先构建一次（记录 primingMs，不进入计时统计），再保留输出/工具状态测量第二次构建。Vite cacheDir 指向隔离目录，绝不清共享 node_modules、包存储或用户缓存。这不是物理冷启动：OS 文件缓存、CPU 温度/频率及后台负载不可控，均在报告披露。增量更新沿用独立 HMR 实验。

每个子进程有时间上限。失败、缺失、重复、重试不进入完整组合排名；失败结果仍保存。报告提供均值、中位数、nearest-rank P95、最大值、总体标准差与变异系数；小样本 P95 可等于最大值，不声称有统计显著性。

普通开发机需在那台机器实际运行，并保存自动采集的硬件信息；BENCH_MACHINE_PROFILE=ordinary-developer 仅为操作者声明，不是硬件验证。当前 M4 Max 128GB 的测试结果不能替代普通开发机。机器归档独立，不跨机器合并，也不使用 hosted CI 时延作为性能门禁。真实设备运行时仍属于另一项证据，未执行不得标记通过。

版本证据中的 weappViteSubmodule 读取主仓库索引记录的 gitlink，不要求初始化参考源码，也不会把上级仓库 HEAD 当成子模块版本。实际消费包仍以 provenance 中安装版本为准。采样中输入变动会使组合不完整并令命令失败，原始数据保留但不排名。
