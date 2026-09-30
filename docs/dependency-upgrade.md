# 2026-10 依赖升级评估

本次升级覆盖根目录、8 个 benchmark 应用和 runner；对照源码子模块保持原提交。直接依赖按 npm 正式发行版本和框架约束选择，锁文件固定实际依赖树。

## 升级与兼容性约束

| 依赖组                     | 目标版本                | 选择依据                                                  |
| -------------------------- | ----------------------- | --------------------------------------------------------- |
| pnpm                       | 12.8.1                  | 稳定版本；同步 packageManager 与锁文件                    |
| weapp-vite / wevu          | 7.4.0                   | 三个 weapp-vite 应用使用同一版本                          |
| Taro                       | 4.3.0                   | 所有 @tarojs 包同步；vite-runner 要求 Vite ^4             |
| uni-app / uni-app x 编译器 | 3.0.0-5020620260917001  | 正式发行批次；不使用指向历史 alpha 的 latest 标签         |
| uni-app-x runtime          | 0.7.132                 | 与该批次 uni-uts-v1 配套，未单独升级到 0.7.135            |
| uni-app Vue / Vite / types | 3.4.21 / 5.2.8 / 3.4.31 | 对齐编译器依赖及精确 peer 约束                            |
| Mpx                        | 2.11.x / CLI 2.2.32     | 目前稳定版本；保留 Vue 2.7、Pinia 2、Router 3、Babel 7    |
| Mpx ESLint                 | 9.39.5                  | @mpxjs/eslint-config 要求 ESLint ^9.10.0                  |
| TypeScript / vue-tsc       | 6.0.3 / 3.3.11          | repoctl 要求 TypeScript 5 或 6；保留 Vue 类型检查器兼容性 |
| repoctl                    | 5.5.10                  | 同步 ESLint、Stylelint、commitlint 和 Vitest 配套版本     |
| Vitest / coverage-v8       | 5.0.3                   | 测试运行器与覆盖率插件精确对齐                            |
| tsdown                     | 0.23.0                  | Node 要求同步为 ^22.18.0、^24.11.0 或 >=26.0.0            |
| miniprogram-automator      | 1.2.23                  | 与 weapp-vite 7.4.0 配套                                  |
| @vue-mini/core             | 1.2.16                  | 最新稳定修订版                                            |
| PostCSS                    | 8.5.28                  | 应用声明与全局 override 对齐，消除旧 override 降级        |

其他通用工具更新至评估时的稳定版，包括 ESLint 10.11.0、Stylelint 17.15.0、Turbo 2.11.5、tsx 4.23.15、Prettier 3.9.9、Rollup 4.63.5 和 Webpack 5.111.1。保留 node-ipc-compat 替代规则，避免恢复旧 node-ipc 实现。

## 验证方式

先构建，再运行 ESLint、Stylelint、工作区 TypeScript 检查、现有 tsd 任务和单元测试。runner 保留模块目录结构构建，单元测试通过 Vitest 别名加载 dist 产物；Turbo test 依赖 build。

完整刷新使用 `pnpm report:refresh`，依次执行 frozen-lockfile 安装、静态验证、安全审计、HBuilderX smoke、compile、runtime IDE E2E、HMR 和 size 基准。运行时失败必须返回失败状态；dashboard 排除不属于本轮采集时间窗口的旧报告。场景、采样数和统计口径保持一致。

## 已确认的验证与上游限制

- 最终依赖树构建、ESLint、Stylelint、9 个工作区类型检查以及 23 项构建产物单元测试通过。
- `pnpm tsd` 入口正常执行，但目前工作区没有实际 tsd 任务；这不代表已有公共类型测试覆盖。
- `pnpm peers check` 仍报告 repoctl 内部 pnpm logger/worker 版本混用、weapp-vite 依赖链中的 css-parser-algorithms 以及 tsconfck 对 TypeScript 5 的旧 peer 约束。当前构建和类型检查通过；不通过忽略 peer 规则隐藏这些上游约束。
- 安全审计仍有 101 项告警（10 low、57 moderate、31 high、3 critical）。例：Mpx api-proxy 精确锁定 axios 1.17.0，Taro Vue 插件锁定 lodash 4.17.21；uni-app 编译器精确要求 Vite 5.2.8。关键告警涉及 Taro components 引入的 swiper 11.1.15，以及 Taro CLI 模板下载链中的 decompress 4.2.1。
- 已刷新允许范围内的传递依赖。上述问题的修复涉及上游精确版本约束、主版本迁移或组件替换，本轮保留这些兼容性边界并让审计真实返回失败。

完整 IDE、性能基准及刷新结果以 `reports/verification/latest.md` 为准。

## 本轮基准结果

- 编译：7 个框架、每个 20 轮，共 140 个样本全部通过。
- HMR：25 个场景、每个 20 轮，共 500 个样本全部通过，无重试；临时源码修改已恢复。
- HBuilderX smoke：通过，本机实际使用 HBuilderX 5.26.2026091402-alpha。
- 运行时 IDE E2E：阻塞。CLI 尝试连接 19355 端口，但该端口没有监听；islogin 查询、三次启动和项目清理均超时，因此停止本轮 collector。保留失败状态，dashboard 排除旧 runtime 报告。
- 体积：适配 wevu 7 的拆包变化，按实际 wevu vendor 文件识别 runtime，并强制生产构建避免 Turbo 缓存恢复后残留 HMR chunk；缺失 runtime 仍视为错误。

已运行完整 `pnpm report:refresh`。修复体积采集后重跑构建、lint、类型检查、tsd 入口、23 项单元测试和体积统计，将真实重跑结果合并到最终验证报告；保留原编译、HMR 样本及 IDE 阻塞记录。
