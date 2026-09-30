# 运行时观察边界与真实 IDE 验收

对应 benchmarks #5。新方法版本为 2，原八种操作、循环次数和数据规模不变。页面内部耗时保留，并分别标注 framework-next-tick、setData-callback、mpx-setData-callback；这些语义不同的读数不再混排。

新的横向指标从发出 reLaunch 请求开始，直到本轮唯一 token 的控制台数据通过八项确定性 count/checksum 校验，并在真实 IDE 完成 summary、列表数量、首尾文本、指标数量、分组清空、计算颜色共七项视图断言。它包含导航、RPC 和 100ms 轮询，不是纯 host commit 或屏幕 paint，不能当作真机耗时。setData 字节/次数及内存收益仍未测量。

## 执行与资源归属

```sh
WEAPP_VITE_E2E_DEVTOOLS_CLI_PATH=/absolute/path/to/cli pnpm bench:runtime
WEAPP_VITE_E2E_DEVTOOLS_CLI_PATH=/absolute/path/to/cli pnpm e2e:ide:consistency
```

默认采样数不变。开发诊断可用 BENCH_RUNTIME_PROJECTS（逗号分隔 ID）、BENCH_RUNTIME_ITERATIONS、BENCH_RUNTIME_PROJECT_DEADLINE；独立输出目录为 BENCH_REPORT_RUNTIME_DIR、BENCH_REPORT_RUNTIME_CONSISTENCY_DIR。report:refresh 会执行运行时和一致性门禁，保留真实失败。

- 预检从微信官方版本配置读取 stable 通道，与选中安装的 ASAR/package.nw 版本对比；不把 Electron Info.plist 版本当作 IDE 版本。macOS 锁屏、未登录、版本未验证和连接失败分别记录。
- 实际 Tool.getInfo 版本必须匹配所选安装，同时记录 SDKVersion。每个项目仅建立一个 automator，通过 reLaunch 切换轮次。无替换式补采。
- 隔离目录保留实际依赖版本与来源指纹。DevTools npm 打包器忽略工作区依赖链接时，复制准确的 runtime dependency closure 到本任务临时目录；拒绝扁平化版本冲突，并检查真实生成入口，不能只信 CLI 退出 0。
- 预检有 45 秒总上限，每项目默认 300 秒总上限；RPC worker、每个构建子进程、watch 初始产物和清理分别有界。超时先停止本任务 worker，避免晚到 RPC，再关闭准确的隔离项目路径。
- 全局 suite 锁防止本 runner 并发；清理仅断开自己持有的连接、关闭自己暂存的项目、停止自己启动的进程组。禁止全局 kill/quit、清用户缓存或第三方会话。单元与集成测试检查幂等释放、挂起进程终止和无关 listener 保留。

## 更新一致性

fixture 包含 computed 脚本文本、模板标记、计算颜色和点击计数。classic 同一 SFC 批量更改 JS/模板/样式，检查初始、首次、连续、恢复，并验证重建后计数重置与两次真实 tap。stateful-experimental 只改安全脚本，预期保留两次点击状态，不因观察到错误结果而改弱断言。

自动重编译会替换页面 ID，因此每次观察重新获取当前页面；轮询中的短暂旧句柄错误只允许在同一总 deadline 内继续观察。成功和失败截图、阶段标记、dev 日志、产物 manifest、客户端 transport/lastApply 信息分别留档。worker 由外层监督，watch 进程由父进程单独拥有，避免杀 worker 后泄漏 detached watch。

## 本轮证据与未完成项

- 官方 stable 2.02.2608080，实际 SDK 3.17.2。`839db66d-d6e7-43cd-9835-72e705f8443e` 在输入稳定时通过 classic initial/first/continuous/restore 及交互断言。
- 同轮 stateful 在 DevEngine 创建前失败：weapp-vite 7.4.0 强制 CJS，而 Rolldown 1.2.12 devMode 仅允许 ESM。已补充 [上游 #1131 的复现及解决方向](https://github.com/weapp-vite/weapp-vite/issues/1131#issuecomment-5920365650)。保留失败，不修改依赖、不静默降为 classic；状态保持验收未通过。
- `cf2770cf-b61c-4019-a944-2f78951d3a8b` 的 8 应用单轮 smoke 中，wevu、performance、原生、uni-app、uni-app x、Mpx、Taro 的七项视图检查通过。vue-mini-core 超时，后续发现并修复 IDE npm 未产出入口的问题。
- 修复后的 vue-mini-core 生成了准确依赖的 npm 入口，但 IDE 仍未就绪；系统确认 Mac 已锁屏，解锁后仍需复验，不能宣称 8/8 通过。
- 原先已运行的未知归属 IDE PID 74446 在前述测试后仍存活。未对另一安装版本做真实共存测试；模拟 listener 测试不能替代该项证据。
- 上述 smoke 仅验证行为，未代替统一 run ID 的最终公开 report:refresh；旧公开运行时结果仍不能混入新排名。
