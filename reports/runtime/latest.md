# 运行时基准报告

生成时间：2026-11-16T06:36:20.829Z
采样次数：20

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.2 (26B123)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.21.0
- 微信开发者工具 CLI：cli
- Git commit：ca8e16f1e616d7b88074ff84d613b7b9ba9249c7
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 计时边界

新外部读数从 reLaunch 请求计时，到真实 IDE 文本、列表和计算颜色的七项断言全部满足。它包含导航、协议往返及 100ms 轮询，不是纯宿主提交或屏幕绘制耗时。
原八场景的内部 durationMs 保留在原始明细，按实际完成边界标注。框架 nextTick、原生 setData callback、Mpx setData callback 不混合排名。没有新观察证据的旧样本不进入排名。

## 总耗时排名

| 排名 | 项目              | reLaunch → 已确认视图均值 | 有效样本 |
| ---: | ----------------- | ------------------------: | -------: |
|    1 | uni-app x         |                  1474.7ms |    20/20 |
|    2 | weapp-vite + wevu |                  1573.9ms |    20/20 |
|    3 | weapp-vite 原生   |                  2111.0ms |    20/20 |
|    4 | mpx               |                  2146.2ms |    20/20 |
|    5 | @vue-mini/core    |                  2267.6ms |    20/20 |

## 未完成采集

- weapp-vite + wevu performance：有效样本 0/20。
- uni-app vite vue3：有效样本 0/20。
- taro vue3：有效样本 0/20。
- weapp-vite + wevu performance 第 1 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 2 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 3 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 4 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 5 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 6 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 7 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 8 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 9 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 10 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 11 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 12 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 13 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 14 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 15 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 16 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 17 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 18 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 19 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- weapp-vite + wevu performance 第 20 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 1 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 2 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 3 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 4 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 5 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 6 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 7 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 8 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 9 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 10 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 11 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 12 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 13 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 14 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 15 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 16 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 17 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 18 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 19 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- uni-app vite vue3 第 20 轮：not-executed；DeadlineError: Runtime deadline exceeded at project worker; scoped close=0; worker output=
- taro vue3 第 1 轮：connection；Wait timed out after 60000 ms
- taro vue3 第 2 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 3 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 4 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 5 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 6 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 7 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 8 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 9 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 10 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 11 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 12 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 13 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 14 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 15 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 16 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 17 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 18 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 19 轮：not-executed；Not executed after project failure/deadline
- taro vue3 第 20 轮：not-executed；Not executed after project failure/deadline

## 运行环境诊断

- 检查时间：2026-11-16T06:17:47.221Z；状态：passed
- 官方来源：https://devtools.wxqcloud.qq.com.cn/WechatWebDev/nightly/versions/config.json
- 稳定版：2.02.2609250；所选安装版本：2.02.2609250
- 所选 CLI：/Applications/wechatwebdevtools.app/Contents/MacOS/cli；服务端口：19355

## 原始明细

| 项目                          | 轮次 | 通过 | 内部计时边界         | 指标观察 | 视图观察 | 实际宿主信息                                     |
| ----------------------------- | ---: | ---- | -------------------- | -------: | -------: | ------------------------------------------------ |
| weapp-vite + wevu             |    1 | 是   | framework-next-tick  |   1009.5 |   1569.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    2 | 是   | framework-next-tick  |    970.3 |   1524.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    3 | 是   | framework-next-tick  |    968.6 |   1482.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    4 | 是   | framework-next-tick  |    966.0 |   1521.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    5 | 是   | framework-next-tick  |   1050.3 |   1687.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    6 | 是   | framework-next-tick  |   1071.7 |   1625.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    7 | 是   | framework-next-tick  |    999.2 |   1551.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    8 | 是   | framework-next-tick  |   1003.4 |   1559.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |    9 | 是   | framework-next-tick  |   1040.0 |   1593.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   10 | 是   | framework-next-tick  |   1068.2 |   1679.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   11 | 是   | framework-next-tick  |   1056.8 |   1625.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   12 | 是   | framework-next-tick  |   1084.9 |   1702.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   13 | 是   | framework-next-tick  |   1138.5 |   1707.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   14 | 是   | framework-next-tick  |   1037.0 |   1582.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   15 | 是   | framework-next-tick  |   1013.5 |   1575.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   16 | 是   | framework-next-tick  |   1001.8 |   1531.8 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   17 | 是   | framework-next-tick  |    936.1 |   1459.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   18 | 是   | framework-next-tick  |    924.8 |   1481.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   19 | 是   | framework-next-tick  |   1011.5 |   1549.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu             |   20 | 是   | framework-next-tick  |    944.8 |   1466.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite + wevu performance |    1 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    2 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    3 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    4 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    5 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    6 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    7 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    8 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |    9 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   10 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   11 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   12 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   13 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   14 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   15 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   16 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   17 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   18 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   19 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite + wevu performance |   20 | 否   | 历史未标注           |        - |        - | {}                                               |
| weapp-vite 原生               |    1 | 是   | setData-callback     |   2219.2 |   2328.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    2 | 是   | setData-callback     |   1948.4 |   2037.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    3 | 是   | setData-callback     |   2000.6 |   2098.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    4 | 是   | setData-callback     |   2021.0 |   2124.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    5 | 是   | setData-callback     |   1997.3 |   2099.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    6 | 是   | setData-callback     |   2020.8 |   2131.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    7 | 是   | setData-callback     |   2008.5 |   2107.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    8 | 是   | setData-callback     |   1978.7 |   2077.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |    9 | 是   | setData-callback     |   1981.8 |   2079.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   10 | 是   | setData-callback     |   1976.7 |   2077.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   11 | 是   | setData-callback     |   2088.1 |   2185.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   12 | 是   | setData-callback     |   2000.2 |   2094.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   13 | 是   | setData-callback     |   2018.6 |   2118.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   14 | 是   | setData-callback     |   1983.3 |   2080.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   15 | 是   | setData-callback     |   1972.8 |   2058.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   16 | 是   | setData-callback     |   1974.1 |   2063.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   17 | 是   | setData-callback     |   2189.7 |   2278.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   18 | 是   | setData-callback     |   1963.7 |   2054.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   19 | 是   | setData-callback     |   1973.3 |   2080.8 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| weapp-vite 原生               |   20 | 是   | setData-callback     |   1964.5 |   2047.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app vite vue3             |    1 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    2 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    3 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    4 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    5 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    6 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    7 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    8 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |    9 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   10 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   11 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   12 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   13 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   14 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   15 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   16 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   17 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   18 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   19 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app vite vue3             |   20 | 否   | 历史未标注           |        - |        - | {}                                               |
| uni-app x                     |    1 | 是   | framework-next-tick  |    640.5 |   1460.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    2 | 是   | framework-next-tick  |    569.3 |   1389.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    3 | 是   | framework-next-tick  |    624.6 |   1494.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    4 | 是   | framework-next-tick  |    672.6 |   1493.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    5 | 是   | framework-next-tick  |    642.8 |   1457.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    6 | 是   | framework-next-tick  |    621.8 |   1554.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    7 | 是   | framework-next-tick  |    697.1 |   1637.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    8 | 是   | framework-next-tick  |    709.4 |   1572.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |    9 | 是   | framework-next-tick  |    722.4 |   1574.8 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   10 | 是   | framework-next-tick  |    597.9 |   1443.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   11 | 是   | framework-next-tick  |    647.6 |   1506.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   12 | 是   | framework-next-tick  |    630.0 |   1420.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   13 | 是   | framework-next-tick  |    572.9 |   1437.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   14 | 是   | framework-next-tick  |    719.2 |   1499.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   15 | 是   | framework-next-tick  |    631.9 |   1460.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   16 | 是   | framework-next-tick  |    619.2 |   1573.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   17 | 是   | framework-next-tick  |    593.3 |   1435.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   18 | 是   | framework-next-tick  |    599.3 |   1370.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   19 | 是   | framework-next-tick  |    591.6 |   1368.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| uni-app x                     |   20 | 是   | framework-next-tick  |    580.6 |   1347.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    1 | 是   | mpx-setData-callback |   2006.7 |   2113.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    2 | 是   | mpx-setData-callback |   2058.8 |   2151.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    3 | 是   | mpx-setData-callback |   1973.3 |   2072.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    4 | 是   | mpx-setData-callback |   2114.4 |   2268.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    5 | 是   | mpx-setData-callback |   1994.9 |   2083.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    6 | 是   | mpx-setData-callback |   1984.5 |   2096.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    7 | 是   | mpx-setData-callback |   2000.5 |   2101.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    8 | 是   | mpx-setData-callback |   1876.9 |   1969.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |    9 | 是   | mpx-setData-callback |   2019.2 |   2120.8 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   10 | 是   | mpx-setData-callback |   2019.0 |   2114.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   11 | 是   | mpx-setData-callback |   2022.4 |   2161.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   12 | 是   | mpx-setData-callback |   2086.4 |   2204.8 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   13 | 是   | mpx-setData-callback |   2034.3 |   2153.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   14 | 是   | mpx-setData-callback |   2091.7 |   2201.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   15 | 是   | mpx-setData-callback |   1985.2 |   2097.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   16 | 是   | mpx-setData-callback |   2059.5 |   2172.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   17 | 是   | mpx-setData-callback |   2062.2 |   2171.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   18 | 是   | mpx-setData-callback |   2268.6 |   2373.7 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   19 | 是   | mpx-setData-callback |   2082.9 |   2201.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| mpx                           |   20 | 是   | mpx-setData-callback |   2009.9 |   2094.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| taro vue3                     |    1 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    2 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    3 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    4 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    5 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    6 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    7 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    8 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |    9 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   10 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   11 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   12 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   13 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   14 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   15 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   16 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   17 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   18 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   19 | 否   | framework-next-tick  |        - |        - | {}                                               |
| taro vue3                     |   20 | 否   | framework-next-tick  |        - |        - | {}                                               |
| @vue-mini/core                |    1 | 是   | framework-next-tick  |   1995.3 |   2266.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    2 | 是   | framework-next-tick  |   1931.4 |   2119.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    3 | 是   | framework-next-tick  |   2028.3 |   2224.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    4 | 是   | framework-next-tick  |   2057.3 |   2379.4 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    5 | 是   | framework-next-tick  |   2067.9 |   2616.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    6 | 是   | framework-next-tick  |   2012.7 |   2236.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    7 | 是   | framework-next-tick  |   2041.5 |   2268.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    8 | 是   | framework-next-tick  |   1976.3 |   2194.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |    9 | 是   | framework-next-tick  |   1995.6 |   2276.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   10 | 是   | framework-next-tick  |   1990.4 |   2180.8 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   11 | 是   | framework-next-tick  |   1998.3 |   2280.2 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   12 | 是   | framework-next-tick  |   2028.2 |   2367.3 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   13 | 是   | framework-next-tick  |   1917.1 |   2196.9 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   14 | 是   | framework-next-tick  |   1962.3 |   2235.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   15 | 是   | framework-next-tick  |   2048.0 |   2237.1 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   16 | 是   | framework-next-tick  |   1994.1 |   2206.0 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   17 | 是   | framework-next-tick  |   1982.3 |   2268.6 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   18 | 是   | framework-next-tick  |   1943.7 |   2174.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   19 | 是   | framework-next-tick  |   2037.5 |   2340.5 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |
| @vue-mini/core                |   20 | 是   | framework-next-tick  |   2083.1 |   2283.8 | {"version":"2.02.2609250","SDKVersion":"3.17.6"} |

### 内部场景计时（仅作各自边界诊断）

| 项目                          | 轮次 | 初始渲染 | 追加批次 | 批量更新 | 全量排序 | 过滤高分活跃项 | 分组聚合渲染 | 窗口切片 | 整表替换 |
| ----------------------------- | ---: | -------: | -------: | -------: | -------: | -------------: | -----------: | -------: | -------: |
| weapp-vite + wevu             |    1 |       36 |       75 |      156 |      110 |            103 |          123 |      132 |       53 |
| weapp-vite + wevu             |    2 |       34 |       70 |      152 |      113 |            109 |          129 |      128 |       50 |
| weapp-vite + wevu             |    3 |       35 |       73 |      143 |      107 |            101 |          117 |      121 |       47 |
| weapp-vite + wevu             |    4 |       33 |       66 |      144 |      109 |            100 |          116 |      123 |       52 |
| weapp-vite + wevu             |    5 |       37 |       72 |      155 |      124 |            110 |          127 |      133 |       52 |
| weapp-vite + wevu             |    6 |       39 |       84 |      162 |      130 |            110 |          125 |      127 |       50 |
| weapp-vite + wevu             |    7 |       36 |       71 |      145 |      114 |            104 |          122 |      130 |       50 |
| weapp-vite + wevu             |    8 |       39 |       69 |      142 |      115 |            104 |          127 |      127 |       50 |
| weapp-vite + wevu             |    9 |       35 |       75 |      160 |      117 |            107 |          131 |      129 |       51 |
| weapp-vite + wevu             |   10 |       36 |       75 |      164 |      128 |            115 |          127 |      128 |       50 |
| weapp-vite + wevu             |   11 |       35 |       74 |      156 |      124 |            111 |          135 |      132 |       52 |
| weapp-vite + wevu             |   12 |       37 |       74 |      164 |      134 |            112 |          133 |      130 |       52 |
| weapp-vite + wevu             |   13 |       40 |       79 |      174 |      131 |            112 |          136 |      129 |       49 |
| weapp-vite + wevu             |   14 |       36 |       74 |      156 |      123 |            107 |          132 |      132 |       48 |
| weapp-vite + wevu             |   15 |       36 |       72 |      151 |      116 |            109 |          127 |      124 |       46 |
| weapp-vite + wevu             |   16 |       39 |       70 |      144 |      124 |            101 |          120 |      126 |       51 |
| weapp-vite + wevu             |   17 |       33 |       65 |      135 |      107 |             96 |          120 |      118 |       49 |
| weapp-vite + wevu             |   18 |       33 |       66 |      133 |      110 |             95 |          111 |      120 |       48 |
| weapp-vite + wevu             |   19 |       34 |       68 |      148 |      117 |            111 |          128 |      128 |       50 |
| weapp-vite + wevu             |   20 |       33 |       66 |      139 |      111 |             97 |          116 |      117 |       46 |
| weapp-vite + wevu performance |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    1 |      131 |      377 |      293 |      246 |            299 |          158 |      183 |      194 |
| weapp-vite 原生               |    2 |      246 |      162 |      294 |      241 |            281 |          149 |      170 |      169 |
| weapp-vite 原生               |    3 |      230 |      204 |      273 |      244 |            283 |          144 |      173 |      176 |
| weapp-vite 原生               |    4 |      246 |      160 |      281 |      241 |            293 |          157 |      176 |      184 |
| weapp-vite 原生               |    5 |      231 |      167 |      274 |      250 |            303 |          148 |      175 |      183 |
| weapp-vite 原生               |    6 |      239 |      163 |      279 |      243 |            300 |          156 |      180 |      189 |
| weapp-vite 原生               |    7 |      237 |      181 |      273 |      237 |            277 |          150 |      174 |      176 |
| weapp-vite 原生               |    8 |      219 |      151 |      286 |      245 |            273 |          149 |      174 |      186 |
| weapp-vite 原生               |    9 |      239 |      167 |      273 |      239 |            285 |          148 |      169 |      178 |
| weapp-vite 原生               |   10 |      232 |      155 |      270 |      226 |            277 |          144 |      159 |      171 |
| weapp-vite 原生               |   11 |      134 |      304 |      271 |      242 |            293 |          157 |      181 |      182 |
| weapp-vite 原生               |   12 |      236 |      166 |      282 |      243 |            281 |          151 |      168 |      172 |
| weapp-vite 原生               |   13 |      237 |      154 |      269 |      242 |            299 |          148 |      169 |      180 |
| weapp-vite 原生               |   14 |      227 |      164 |      268 |      228 |            277 |          151 |      182 |      177 |
| weapp-vite 原生               |   15 |      228 |      156 |      271 |      226 |            278 |          147 |      174 |      170 |
| weapp-vite 原生               |   16 |      227 |      153 |      290 |      240 |            281 |          149 |      171 |      176 |
| weapp-vite 原生               |   17 |      239 |      179 |      310 |      260 |            335 |          151 |      191 |      207 |
| weapp-vite 原生               |   18 |      216 |      153 |      254 |      229 |            288 |          149 |      174 |      188 |
| weapp-vite 原生               |   19 |      140 |      262 |      274 |      244 |            298 |          160 |      174 |      177 |
| weapp-vite 原生               |   20 |      229 |      152 |      265 |      242 |            284 |          142 |      165 |      167 |
| uni-app vite vue3             |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    1 |       22 |       38 |       81 |      117 |             66 |           24 |       40 |       36 |
| uni-app x                     |    2 |       21 |       39 |       88 |      113 |             65 |           27 |       36 |       37 |
| uni-app x                     |    3 |       22 |       42 |       84 |      116 |             68 |           27 |       39 |       40 |
| uni-app x                     |    4 |       23 |       40 |       88 |      123 |             67 |           27 |       44 |       40 |
| uni-app x                     |    5 |       23 |       41 |       91 |      119 |             68 |           30 |       40 |       38 |
| uni-app x                     |    6 |       20 |       41 |       83 |      121 |             68 |           27 |       39 |       37 |
| uni-app x                     |    7 |       22 |       44 |       90 |      120 |             75 |           29 |       42 |       42 |
| uni-app x                     |    8 |       25 |       49 |      101 |      128 |             76 |           28 |       43 |       40 |
| uni-app x                     |    9 |       23 |       43 |      100 |      131 |             70 |           26 |       39 |       37 |
| uni-app x                     |   10 |       20 |       39 |       81 |      111 |             63 |           26 |       39 |       37 |
| uni-app x                     |   11 |       22 |       39 |       91 |      130 |             67 |           28 |       40 |       38 |
| uni-app x                     |   12 |       29 |       41 |       87 |      111 |             64 |           26 |       40 |       37 |
| uni-app x                     |   13 |       19 |       37 |       80 |      105 |             63 |           24 |       36 |       35 |
| uni-app x                     |   14 |       26 |       40 |       83 |      112 |             64 |           28 |       40 |       39 |
| uni-app x                     |   15 |       21 |       41 |       84 |      119 |             69 |           25 |       40 |       37 |
| uni-app x                     |   16 |       22 |       40 |       84 |      114 |             65 |           27 |       41 |       35 |
| uni-app x                     |   17 |       22 |       42 |       83 |      109 |             63 |           24 |       37 |       35 |
| uni-app x                     |   18 |       23 |       40 |       85 |      114 |             63 |           25 |       36 |       38 |
| uni-app x                     |   19 |       20 |       39 |       81 |      110 |             64 |           26 |       40 |       35 |
| uni-app x                     |   20 |       19 |       37 |       76 |      104 |             59 |           24 |       34 |       33 |
| mpx                           |    1 |      189 |      154 |      346 |      312 |            351 |           96 |      167 |      184 |
| mpx                           |    2 |      204 |      391 |      261 |      290 |            331 |           93 |      151 |      165 |
| mpx                           |    3 |      207 |      262 |      267 |      294 |            343 |           63 |      159 |      185 |
| mpx                           |    4 |      224 |      274 |      283 |      319 |            361 |          100 |      165 |      169 |
| mpx                           |    5 |      220 |      259 |      253 |      302 |            333 |           93 |      147 |      164 |
| mpx                           |    6 |      204 |      247 |      273 |      314 |            354 |          102 |      169 |      177 |
| mpx                           |    7 |      207 |      277 |      273 |      293 |            341 |           93 |      157 |      170 |
| mpx                           |    8 |      199 |      258 |      254 |      292 |            322 |           57 |      151 |      169 |
| mpx                           |    9 |      201 |      252 |      256 |      297 |            351 |           95 |      159 |      176 |
| mpx                           |   10 |      209 |      272 |      278 |      301 |            327 |           90 |      155 |      175 |
| mpx                           |   11 |      198 |      266 |      275 |      312 |            341 |           90 |      156 |      171 |
| mpx                           |   12 |      204 |      267 |      283 |      315 |            364 |          103 |      167 |      185 |
| mpx                           |   13 |      219 |      261 |      279 |      306 |            336 |           93 |      165 |      176 |
| mpx                           |   14 |      209 |      269 |      282 |      314 |            339 |           95 |      163 |      182 |
| mpx                           |   15 |      218 |      264 |      267 |      302 |            321 |           94 |      171 |      174 |
| mpx                           |   16 |      205 |      270 |      267 |      314 |            340 |           61 |      246 |      184 |
| mpx                           |   17 |      221 |      269 |      272 |      316 |            351 |          101 |      171 |      184 |
| mpx                           |   18 |      380 |      265 |      268 |      371 |            361 |           65 |      164 |      197 |
| mpx                           |   19 |      217 |      262 |      275 |      380 |            386 |           60 |      171 |      182 |
| mpx                           |   20 |      223 |      260 |      262 |      300 |            338 |           87 |      146 |      165 |
| taro vue3                     |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    1 |      132 |      262 |      410 |      189 |            274 |          161 |      184 |      172 |
| @vue-mini/core                |    2 |      125 |      249 |      405 |      178 |            266 |          159 |      187 |      172 |
| @vue-mini/core                |    3 |      127 |      271 |      407 |      180 |            270 |          162 |      195 |      182 |
| @vue-mini/core                |    4 |      135 |      273 |      406 |      182 |            272 |          160 |      189 |      175 |
| @vue-mini/core                |    5 |      134 |      271 |      414 |      187 |            275 |          158 |      201 |      183 |
| @vue-mini/core                |    6 |      138 |      273 |      422 |      185 |            279 |          154 |      180 |      169 |
| @vue-mini/core                |    7 |      133 |      265 |      407 |      185 |            269 |          161 |      196 |      183 |
| @vue-mini/core                |    8 |      130 |      266 |      386 |      176 |            263 |          166 |      181 |      166 |
| @vue-mini/core                |    9 |      126 |      256 |      400 |      179 |            264 |          157 |      197 |      178 |
| @vue-mini/core                |   10 |      132 |      283 |      394 |      178 |            264 |          149 |      183 |      171 |
| @vue-mini/core                |   11 |      135 |      266 |      403 |      178 |            259 |          153 |      188 |      174 |
| @vue-mini/core                |   12 |      141 |      265 |      409 |      180 |            263 |          165 |      185 |      174 |
| @vue-mini/core                |   13 |      128 |      256 |      386 |      179 |            257 |          158 |      191 |      170 |
| @vue-mini/core                |   14 |      130 |      262 |      390 |      184 |            258 |          152 |      182 |      174 |
| @vue-mini/core                |   15 |      129 |      257 |      399 |      178 |            266 |          154 |      181 |      166 |
| @vue-mini/core                |   16 |      128 |      252 |      398 |      192 |            259 |          159 |      194 |      178 |
| @vue-mini/core                |   17 |      130 |      266 |      394 |      174 |            257 |          159 |      186 |      167 |
| @vue-mini/core                |   18 |      128 |      258 |      387 |      182 |            253 |          148 |      178 |      166 |
| @vue-mini/core                |   19 |      137 |      269 |      400 |      188 |            264 |          154 |      187 |      175 |
| @vue-mini/core                |   20 |      135 |      268 |      428 |      189 |            269 |          162 |      190 |      180 |

## 场景含义

- 初始渲染：连续 3 次重建并渲染 480 条列表，放大首屏列表创建成本
- 追加批次：连续 4 次追加 120 条数据，放大增量插入和列表扩容成本
- 批量更新：连续 6 次批量更新不同步长的列表项，放大局部批量变更成本
- 全量排序：连续 5 次排序并正反切换，放大全量顺序变化成本
- 过滤高分活跃项：连续 6 次在过滤结果和完整列表间切换，放大列表缩减和恢复成本
- 分组聚合渲染：连续 6 次按 group 聚合并渲染统计行，放大派生数据和结构切换成本
- 窗口切片：连续 10 次切换 140 条窗口数据，放大虚拟窗口类场景成本
- 整表替换：连续 3 次用 640 条新数据整表替换，放大大批量替换成本

## 证据边界

- 统一外部边界为请求 reLaunch 至真实 IDE 确认最终视图；包括导航、RPC、100ms 轮询和七项视图检查的观察成本，不称为纯 host commit 或 paint 耗时。
- 原八场景的页面内部耗时原样保存，但 nextTick、原生 setData 回调与 Mpx setData 回调边界不同，不再混合排名。
- 独立校验确定性数据的八项 count/checksum；控制台载荷必须匹配本轮唯一 token，不能使用上一轮日志或旧 samples 文件。
- 预检与每个项目分别设总 deadline；每个项目共享一次 automator，通过 reLaunch 切换轮次；失败不补采为成功。
- 仅关闭本任务隔离项目并断开自己持有的连接，不调用全局 quit/kill，不清理用户缓存或其他会话。
- 视图查询确认的是 IDE 自动化可观察结果，不证明显示器已经完成光栅化，也不等价真机。setData 字节/次数和内存收益未采集。

## 采样来源

- Run ID：d103c8bb-f658-4d02-ac3e-0451b9978eb7；步骤：runtime
- 采集区间：2026-11-16T06:17:47.216Z 至 2026-11-16T06:36:20.829Z
- 输入指纹：267013314fcb64e88c54df81193cade4e742fb34a1898be81826d2e632154448
- lockfile SHA-256：0fc38c72cb6a63f4109eecd8ba14aa7080a4e1914956949973093f0e5b461e2b
- runner：0.0.0；源码摘要：cfd49892467b8d6ed605a4d062164f2a040112ac5c107dee9e35be15d0abcfcc
- 工作区有修改：true；被测输入有修改：true
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
