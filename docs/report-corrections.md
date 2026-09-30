# 报告解释勘误

## 2026-10：体积报告的固定分析文字（Issue #2）

2026-09-30 采集的 wevu 7.4.0 体积 JSON 与文件清单有效，但旧版 Markdown 生成器仍输出 `wevu-src.js`、`wevu-ref.js` 和 `sideEffects: false` 等历史固定文字。当前包使用不同的 chunk 结构，`sideEffects` 记录也是入口数组；这些旧文字不能作为当前模块成本或裁剪失效的证据。

本次使用原 JSON 重新生成 `reports/size/wevu-analysis.md`、对应工具链的 latest Markdown 和 dashboard 图表文字。没有重跑采样，也没有修改原 JSON、采样时间、文件字节数或历史 runs 归档。历史 Markdown 保留原貌，涉及这些固定分析的解释以此勘误为准。

统计字段 `runtimeBytes` 表示按项目规则选中的完整文件字节。不同框架可能选入 JS、模板、样式、WXS 和 JSON，同一 chunk 内也可能混合业务与框架代码。因此它是文件级比较，不能直接称为精确的纯 runtime 成本，不能仅凭文件大小归因到 router、store、layout 或 tree shaking。缺少模块图时报告只陈述文件事实。

更新后的生成器从输入读取文件名称、数量、字节与包声明，支持布尔及数组形式的 `sideEffects`，并明确缺失证据。performance preset 的收益需要独立的宿主运行时测试，体积差异本身不证明运行时性能改善。

后续改进分别由 Issue #3 的输入指纹与 Issue #6 的能力阶梯、模块归因和收益成本矩阵跟进。
