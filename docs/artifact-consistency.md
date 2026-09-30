# 生产产物所有权与体积采样

旧流程把 Turbo 恢复的文件叠加到此前 dev 的输出目录上。缓存命中只能证明缓存条目被恢复，不能证明目录没有遗留其他 chunk。`emptyOutDir: false` 又明确要求构建器保留目录内容，因此不能把剩余文件直接归咎于框架清理错误。

## 新的采集边界

`pnpm bench:size:wevu` 由 runner 按输入指纹复制代码和配置到一次性工作区，复用当前安装的 node_modules，不在其中安装依赖。pnpm 12 的 `verifyDepsBeforeRun` 在该工作区设为 false，避免它因工作区路径变化而自动重装共享依赖。原应用目录、产物和用户文件不被这条命令清理。

工作区路径由输入指纹确定，并以独占创建防止同输入并发互相清理。Mpx 的部分模块标识依赖构建路径，不能使用每轮随机路径，否则内容和压缩体积可能漂移；源工作区位置也仅以摘要参与 provenance，不公开个人绝对路径。

每个框架执行两次不经 Turbo 的生产构建。第一轮记录全部文件相对路径和 SHA-256；第二轮在 runner 自己的空输出目录重建，要求文件集合和内容完全相同，同时检查静态 JS 相对引用、页面/分包/组件注册、WXML import/include/wxs 和 WXSS import 的目标。动态加载或宿主运行时语义仍需真实 IDE 验收，不由静态检查代替。

体积采集前后再次核对实际文件摘要，任何增加、删除或改写都会报错。JSON 的 artifacts 记录项目、输入指纹及生产文件清单，Markdown 显示摘要。历史无此证据的报告保持原样，不补造验证。

这仍是强制生产重建；没有恢复旧的“缓存命中即可采样”捷径。移除根脚本对原工作区的额外 `turbo build --force`，是因为 runner 已在独立目录真实执行两轮强制构建。

## 回归与取舍

构建产物单元测试验证旧 chunk、改写内容、断裂引用会被拒绝，以及仅删除已登记文件时用户资产逐字节保留。真实构建集成测试覆盖 dev→build、build→dev→build、Turbo 缓存恢复→生产重建，以及页面/组件移动、分包调整和 preserveModules chunk 结构变化。

`emptyOutDir: false` 的保护性用例只清理清单中明确归 runner 所有的文件，保留额外用户资产。未知文件不会被猜测为旧 chunk 后直接删除；一致性不满足时拒绝采样。日常应用是否启用 emptyOutDir 仍按其自己的配置语义处理。

两轮重建增加了 size 命令耗时，换来当前产物完整性的可核查证据；这些时间不计入 compile 性能样本。chunk 策略在测试中只是结构变化场景，不是默认性能优化。

验证命令：

```sh
pnpm build
pnpm lint
pnpm typecheck
pnpm tsd
pnpm test
pnpm bench:size:wevu
```

完整刷新最终由 `pnpm report:refresh` 统一记录 run ID；单独运行 size 不会自动并入另一轮 dashboard。
