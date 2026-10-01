# 本轮报告与验收状态（2026-10-01）

本轮原始报告由 `pnpm report:refresh` 统一生成，run ID 为 `ed3908e7-8aa6-4d06-aa98-40f13f793f2b`，受测提交为 `1923b5d2f69cd5842dfe74e7d9bd8fb44b6d81d2`。全部采样步骤的输入前后稳定，子模块 gitlink 保持 `eb9995e74fc4f760d265972b9148417cd40aab63`。实际依赖版本与配置摘要见各 JSON 的 provenance，参考子模块并不代表 npm 安装版本。

机器为 Apple M4 Max 128GB，Node 24.18.0 / pnpm 12.8.1。没有普通开发机或真机的本轮结果，也不据此作跨机器排名。

| 检查                                    | 结果与证据边界                                                                    |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| frozen install、build、lint、TypeScript | 通过；Turbo 命中的任务保留真实缓存日志                                            |
| tsd 入口                                | 命令通过，但当前工作区没有 tsd 任务，不等于执行了类型 API 用例                    |
| 单元与集成测试                          | 22 个文件 / 85 项通过，执行构建产物                                               |
| 安全审计                                | 失败：106 项，含 3 项 critical；处置分类见 [审计说明](security-audit.md)          |
| HBuilderX smoke                         | 编译成功；使用本机 5.26.2026091402-alpha，非 npm 正式编译批次或微信视图运行时证明 |
| 扩展编译方法                            | 180/180 成功，12 个组合各 15 样本；native/Wevu，4/24/80 页面和两种工具缓存策略    |
| 原编译基准                              | 140/140 成功；原 20 次采样、场景和统计口径保留                                    |
| IDE 一致性                              | 锁屏预检失败，真实视图用例本轮未执行                                              |
| IDE runtime                             | 所选与官方 stable 均为 2.02.2608080；因锁屏，160 个计划样本没有成功结果           |
| HMR                                     | 500/500 常规计时成功；166 个诊断编辑中 3 项失败，因此命令仍返回失败               |
| 体积                                    | 7 个项目及能力矩阵检查通过；未将体积差异解释为已验证的运行时收益                  |

完整刷新退出码为 1，总状态是 failed / 部分完成。报告已分别归档到机器、工具链和 run 目录；没有把之前的 IDE smoke 或旧运行时成功样本补进本轮排名。

HMR 的三项诊断失败是：原生 JS/WXML/WXSS/JSON 批量编辑未覆盖全部目标产物，uni-app 和 Taro 的重命名缺少编译/产物确认。常规计时与诊断分别保留；常规 500 样本成功不能替代批次一致性通过。本轮附加 watch 为约 30 秒、39 次编辑，不将该短时 RSS 变化解释为内存泄漏或优化收益；此前独立五分钟诊断也不混入本轮数据。

## 数据与呈现层的后续检查

原始 compile、runtime、HMR、size 和 verification 数据保持本轮采样内容。随后仅修正 dashboard 呈现：抽出符合 Stylelint 的样式模板，明确运行时列的“请求至已验证视图”边界；静态 SVG 通过 SVG painter 关闭 CSS 动画和悬停样式，避免 ECharts 把渐变对象写成无效 `fill: [object Object]`。同时规范化生成 SVG 的独立字体声明顺序。页面和 SVG 从本轮原始报告重新渲染，采样来源仍标为上述真实受测提交，不能把后续呈现修正误认为重新执行了 IDE 测试。

呈现层另行完成构建、ESLint、TypeScript 与 23 个测试文件 / 86 项测试，新增用例验证真实构建后的 SVG 导出保留渐变和可访问元数据，并且不再产生无效悬停 CSS 或动画。生成的 HTML / SVG 单独执行 Stylelint 和 SVG XML 解析检查；这些检查不改写原始验证报告中的 85 项测试记录。

Playwright 页面验收覆盖总览、运行时、验证页签和 390px 窄屏：8 个运行时项目均显示 N/A，验证页可见 4 项 failed，并根据实际日志提示 tsd 未执行任务，窄屏文档宽度等于视口宽度，没有页面横向溢出。浏览器控制台仅出现本地 HTTP 服务缺少 favicon 的 404，无页面脚本错误。该检查只验证报告展示，不代替微信开发者工具 E2E。检查后已关闭本次浏览器会话和临时 HTTP 服务。

CI 中 Windows Node 22 的 85 个测试全部通过，但原 15 分钟总预算在缓存保存阶段耗尽。PR #16 将总预算改为 25 分钟；各构建命令、测试与 IDE 操作链仍有各自 deadline，未用放宽断言或忽略错误获得绿色状态。

PR #17 首轮 Windows Node 22 的 85/86 项测试通过，包含 8 次 Git 子进程调用的真实 fixture 在 Vitest 默认 5 秒总预算处超时（未报告 gitlink 断言失败）。该用例改用独立 30 秒总预算，并为 fixture 自身每条 Git 命令保留 5 秒上限；不调整全局测试预算或基准超时，保留原断言。旧 CI 日志为 [36792457249](https://github.com/weapp-vite/benchmarks/actions/runs/36792457249)，后续 CI 验证修正后的提交。

## 未关闭的验收

- [#4](https://github.com/weapp-vite/benchmarks/issues/4)：普通开发机的独立采样尚未完成；本机大项目样本不能替代。
- [#5](https://github.com/weapp-vite/benchmarks/issues/5)：解锁后的 vue-mini-core 复验、stateful 状态保持和另一 IDE 安装的真实共存尚未完成。已知发布依赖的 CJS/devMode 冲突见 [上游复现](https://github.com/weapp-vite/weapp-vite/issues/1131#issuecomment-5920365650)。此前 classic 四阶段和 7/8 应用 smoke 见 [独立证据说明](runtime-evidence.md)，不是本轮成功结果。

完整状态见 [验证报告](../reports/verification/latest.md)、[dashboard](../reports/dashboard/latest.md)、[扩展方法](compile-methods.md)。
