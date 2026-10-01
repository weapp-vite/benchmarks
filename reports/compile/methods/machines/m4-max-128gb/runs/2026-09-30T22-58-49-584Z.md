# 扩展编译采样（独立方法，不与旧报告混排）

种子 20261001；3 批 × 5 轮；每轮打乱所有组合。
每次启动新 Node CLI。reset-tool-state 清理本任务输出和已知工具缓存；primed-tool-state 清理后额外预热一次，保留工具状态再测。OS 缓存、CPU 与包存储未清理，不能称为物理冷启动。
保留全部失败；不补采。P95 使用 nearest-rank，标准差使用总体分母 N。小样本 P95 可能就是最大值，不提供未经验证的置信区间。

| 框架/规模/缓存                  | 完整 |  样本 | 均值 ms | 中位数 ms | P95 ms | 最大 ms | 标准差 ms |
| ------------------------------- | ---- | ----: | ------: | --------: | -----: | ------: | --------: |
| wevu/medium/primed-tool-state   | 是   | 15/15 |  1284.0 |    1272.9 | 1374.6 |  1374.6 |      33.7 |
| wevu/large/primed-tool-state    | 是   | 15/15 |  1991.4 |    1945.6 | 2374.1 |  2374.1 |     133.3 |
| wevu/small/primed-tool-state    | 是   | 15/15 |  1037.1 |    1036.2 | 1120.7 |  1120.7 |      36.9 |
| wevu/medium/reset-tool-state    | 是   | 15/15 |  1293.5 |    1291.0 | 1467.8 |  1467.8 |      50.9 |
| native/medium/reset-tool-state  | 是   | 15/15 |  1105.8 |    1095.7 | 1155.3 |  1155.3 |      22.6 |
| native/large/reset-tool-state   | 是   | 15/15 |  1780.7 |    1760.6 | 1981.8 |  1981.8 |      64.6 |
| native/large/primed-tool-state  | 是   | 15/15 |  1774.3 |    1757.8 | 1901.2 |  1901.2 |      42.2 |
| wevu/small/reset-tool-state     | 是   | 15/15 |  1041.1 |    1028.5 | 1133.6 |  1133.6 |      39.4 |
| native/medium/primed-tool-state | 是   | 15/15 |  1113.8 |    1110.6 | 1261.5 |  1261.5 |      43.6 |
| native/small/reset-tool-state   | 是   | 15/15 |   857.5 |     845.8 |  908.6 |   908.6 |      22.1 |
| wevu/large/reset-tool-state     | 是   | 15/15 |  1903.1 |    1879.0 | 2022.3 |  2022.3 |      48.2 |
| native/small/primed-tool-state  | 是   | 15/15 |   854.4 |     863.2 |  897.6 |   897.6 |      23.6 |

本方法目前覆盖 weapp-vite 原生和 Wevu 的同规模路由/组件/共享依赖图；其他框架未生成扩展 fixture。增量 watch 使用独立 HMR 报告。机器类别：workstation（操作者声明，需核对硬件信息）；真实设备未测。各机器独立归档，hosted CI 仅验证功能。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.0 (26A428)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.8.1
- 微信开发者工具 CLI：-
- Git commit：1923b5d2f69cd5842dfe74e7d9bd8fb44b6d81d2
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 采样来源

- Run ID：ed3908e7-8aa6-4d06-aa98-40f13f793f2b；步骤：compile-methods
- 采集区间：2026-09-30T22:52:03.316Z 至 2026-09-30T22:58:49.583Z
- 输入指纹：a6f9c5f6e3cc8d530ef240ed85fe650ef4862057fb40230bfe7d24d864e42a48
- lockfile SHA-256：8a5d8760666f2a66454271ee0768f65317f03f0c39b8cfdbedf7d898a549fec9
- runner：0.0.0；源码摘要：8465f9de41f2c3b17f21457f7b4e25bb54d5e53920795eae29ad4cac3456f227
- 工作区有修改：false；被测输入有修改：false
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。

## 采样来源

- Run ID：ed3908e7-8aa6-4d06-aa98-40f13f793f2b；步骤：compile-methods
- 采集区间：2026-09-30T22:52:03.316Z 至 2026-09-30T22:58:49.583Z
- 输入指纹：a6f9c5f6e3cc8d530ef240ed85fe650ef4862057fb40230bfe7d24d864e42a48
- lockfile SHA-256：8a5d8760666f2a66454271ee0768f65317f03f0c39b8cfdbedf7d898a549fec9
- runner：0.0.0；源码摘要：8465f9de41f2c3b17f21457f7b4e25bb54d5e53920795eae29ad4cac3456f227
- 工作区有修改：false；被测输入有修改：false
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
