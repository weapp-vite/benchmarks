# 扩展编译采样（独立方法，不与旧报告混排）

种子 20261001；3 批 × 5 轮；每轮打乱所有组合。
每次启动新 Node CLI。reset-tool-state 清理本任务输出和已知工具缓存；primed-tool-state 清理后额外预热一次，保留工具状态再测。OS 缓存、CPU 与包存储未清理，不能称为物理冷启动。
保留全部失败；不补采。P95 使用 nearest-rank，标准差使用总体分母 N。小样本 P95 可能就是最大值，不提供未经验证的置信区间。

| 框架/规模/缓存                  | 完整 |  样本 | 均值 ms | 中位数 ms |  P95 ms | 最大 ms | 标准差 ms |
| ------------------------------- | ---- | ----: | ------: | --------: | ------: | ------: | --------: |
| wevu/medium/primed-tool-state   | 是   | 15/15 |  7493.1 |    7312.3 | 10386.4 | 10386.4 |    1231.1 |
| wevu/large/primed-tool-state    | 是   | 15/15 | 11738.9 |   11386.2 | 14502.1 | 14502.1 |    1362.1 |
| wevu/small/primed-tool-state    | 是   | 15/15 |  5777.9 |    5694.9 |  7951.3 |  7951.3 |     984.8 |
| wevu/medium/reset-tool-state    | 是   | 15/15 |  7566.9 |    7434.0 | 11532.1 | 11532.1 |    1522.7 |
| native/medium/reset-tool-state  | 是   | 15/15 |  6294.4 |    5965.9 |  8682.3 |  8682.3 |    1078.0 |
| native/large/reset-tool-state   | 是   | 15/15 | 11044.3 |   10292.6 | 15618.9 | 15618.9 |    1937.0 |
| native/large/primed-tool-state  | 是   | 15/15 | 11381.1 |   10998.8 | 16050.9 | 16050.9 |    2386.4 |
| wevu/small/reset-tool-state     | 是   | 15/15 |  5728.3 |    5367.0 |  7202.7 |  7202.7 |     849.3 |
| native/medium/primed-tool-state | 是   | 15/15 |  6096.8 |    5791.8 |  7865.2 |  7865.2 |     917.4 |
| native/small/reset-tool-state   | 是   | 15/15 |  4812.2 |    4386.2 |  7350.2 |  7350.2 |     966.7 |
| wevu/large/reset-tool-state     | 是   | 15/15 | 11334.8 |   10639.5 | 16410.2 | 16410.2 |    2159.5 |
| native/small/primed-tool-state  | 是   | 15/15 |  4471.1 |    4510.2 |  5771.7 |  5771.7 |     531.8 |

本方法目前覆盖 weapp-vite 原生和 Wevu 的同规模路由/组件/共享依赖图；其他框架未生成扩展 fixture。增量 watch 使用独立 HMR 报告。机器类别：unclassified（操作者声明，需核对硬件信息）；真实设备未测。各机器独立归档，hosted CI 仅验证功能。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.2 (26B123)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.21.0
- 微信开发者工具 CLI：-
- Git commit：ca8e16f1e616d7b88074ff84d613b7b9ba9249c7
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 采样来源

- Run ID：d103c8bb-f658-4d02-ac3e-0451b9978eb7；步骤：compile-methods
- 采集区间：2026-11-16T05:08:31.363Z 至 2026-11-16T05:51:49.821Z
- 输入指纹：267013314fcb64e88c54df81193cade4e742fb34a1898be81826d2e632154448
- lockfile SHA-256：0fc38c72cb6a63f4109eecd8ba14aa7080a4e1914956949973093f0e5b461e2b
- runner：0.0.0；源码摘要：cfd49892467b8d6ed605a4d062164f2a040112ac5c107dee9e35be15d0abcfcc
- 工作区有修改：true；被测输入有修改：true
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。

## 采样来源

- Run ID：d103c8bb-f658-4d02-ac3e-0451b9978eb7；步骤：compile-methods
- 采集区间：2026-11-16T05:08:31.363Z 至 2026-11-16T05:51:49.821Z
- 输入指纹：267013314fcb64e88c54df81193cade4e742fb34a1898be81826d2e632154448
- lockfile SHA-256：0fc38c72cb6a63f4109eecd8ba14aa7080a4e1914956949973093f0e5b461e2b
- runner：0.0.0；源码摘要：cfd49892467b8d6ed605a4d062164f2a040112ac5c107dee9e35be15d0abcfcc
- 工作区有修改：true；被测输入有修改：true
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
