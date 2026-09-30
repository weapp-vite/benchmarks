# HMR 旁路诊断与重放

关联 [#7](https://github.com/weapp-vite/benchmarks/issues/7)。方法版本 2 保留原来的 500 个排名样本、10ms 默认轮询和源文件写入至目标产物更新的外部计时。排名会话关闭 profile；诊断重新启动独立 watch 会话，诊断耗时不进入横向排名。

## 采集内容

每个项目执行首次、连续和恢复编辑，再执行组合批次、批次恢复、编译错误/修复、重命名/重建、删除/重建、连续保存及最终恢复。组合批次同时验证全部目标文件；同一 SFC 的多种编辑合成一次源码写入，原生项目写入多个源文件。重命名/删除的成功表示编译器或产物确认变化，随后必须以新 marker 验证重建；这不证明页面路由或真实视图正确。

默认首个项目增加 30 秒有界 watch，每次更新都检查目标产物中的唯一 marker，记录被测进程树 RSS、变化文件、删除文件与写出字节。RSS 在首次、恢复及持续更新期间每 5 秒采样，未采样编辑记 resourceSampled=false，避免每次编辑都启动一次 PowerShell。更长观察可调整到最多一小时。RSS 受 GC、编译缓存和 OS 影响，短时增长不能单独证明泄漏。命令不可用时记录 resourceError，不用零值替代未知。

weapp-vite 诊断消费现有 `WEAPP_VITE_HMR_PROFILE_JSON=1` 生成的 JSONL。按源文件、watcher 事件时间和发射时间关联，保存原始事件字段（暂存路径脱敏）。profile 缺失、无法识别事件 ID 或多个候选事件分别标记 missing/ambiguous，不推算阶段耗时。其他框架没有该契约时记 unsupported。profile 读取、产物比较、RSS 观测开销单独记录在 observationMs，外部计时已经结束；preparationMs 另记编辑前的基线准备开销。产物清单要求至少 100ms 安静窗口并校验同一快照的文件哈希与字节，最多等待 5 秒；这不替代编译器事务完成信号。

源码和产物操作均在输入指纹对应的专属暂存目录中进行，复用已安装依赖，不修改原应用输出。只停止本次启动的进程树。源文件恢复失败、产物恢复超时、watch 退出和诊断错误保留失败状态；排名重试仍为降级，命令返回非零。JSON 的 firstFailure 指向首个诊断失败编辑；启动/清理失败另存 failures。

## 使用

```sh
pnpm build
pnpm bench:hmr

# 独立诊断观察，结果不覆盖公开报告
BENCH_HMR_PROJECTS=weapp-vite-wevu BENCH_HMR_ITERATIONS=2 \
  BENCH_HMR_LONG_WATCH_MS=300000 BENCH_HMR_REPORT_DIR=/tmp/hmr-observation \
  pnpm bench:hmr

# 重放保存的诊断序列（不会重新采集排名样本）
BENCH_HMR_REPLAY=/tmp/hmr-observation/latest.json \
  BENCH_HMR_REPORT_DIR=/tmp/hmr-replay pnpm bench:hmr
```

跨平台可用 `pnpm exec cross-env KEY=value ... pnpm bench:hmr` 设置环境变量。未指定重放输出目录时写入 `reports/hmr/replays`，不会替换正式 latest。

重放要求相同输入和 runner 指纹，保留场景顺序、编辑 ID、marker 和操作类型，遇到首个失败即停止该项目。它用于重现编辑操作序列，不保证 OS 调度和墙钟时延一致。恢复记录按此前 marker 检查产物；重放不会把缺失 profile 补成成功。更换源码、配置、依赖或 runner 后应重新采样，不应改 JSON 来绕过校验。

`BENCH_HMR_DIAGNOSTICS=0` 可只执行排名；报告明确标记诊断未执行。`BENCH_HMR_LONG_WATCH_MS=0` 仅禁用有界 watch，不能声称已有资源趋势验收。

## 验证边界

现有单元测试运行编译后的 runner 模块，覆盖 profile 关联、旧错误日志隔离、进程退出、恢复超时和重放输入拒绝。真实 watch 集成测试使用当前安装的 weapp-vite/wevu，验证组合产物和完整序列重放；CI 的短时观察只验证采集机制，不作为性能门禁或长期内存结论。

本报告仅验证磁盘产物。nextTick、宿主提交、页面文字、计算样式、交互与状态保持仍由真实 IDE 测试承担，不以此替代 #5 的验收。
