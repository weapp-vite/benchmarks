# HMR 基准报告

生成时间：2026-07-13T11:23:14.098Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：10.33.4
- 微信开发者工具 CLI：-
- Git commit：e89e08dd979bff187d98def574d5dfef16011129
- weapp-vite submodule：566e5184b3a818155a8e7041b3e03ba1d44045de

## 一眼结论

- HMR 最快：weapp-vite 原生 / JSON 文件，平均 45.5ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 476.0ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR | 相对最快 | 重试样本 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | -------: | -------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   45.5ms |    1.00x |        0 |   45.5ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   47.1ms |    1.04x |        0 |   47.1ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   48.4ms |    1.06x |        0 |   48.4ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |   78.3ms |    1.72x |        0 |   78.3ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |   98.3ms |    2.16x |        0 |   98.3ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |  116.1ms |    2.55x |        0 |  116.1ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  144.7ms |    3.18x |        0 |  144.7ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |  156.3ms |    3.44x |        0 |  156.3ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |  164.5ms |    3.62x |        0 |  164.5ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |  165.4ms |    3.63x |        0 |  165.4ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |  166.6ms |    3.66x |        0 |  166.6ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |  170.7ms |    3.75x |        0 |  170.7ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  177.5ms |    3.90x |        0 |  177.5ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  184.3ms |    4.05x |        0 |  184.3ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  213.5ms |    4.69x |        0 |  213.5ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  256.3ms |    5.63x |        0 |  256.3ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  256.9ms |    5.65x |        0 |  256.9ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  261.0ms |    5.74x |        0 |  261.0ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  274.1ms |    6.02x |        0 |  274.1ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  315.0ms |    6.92x |        0 |  315.0ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  326.2ms |    7.17x |        0 |  326.2ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  330.0ms |    7.25x |        0 |  330.0ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |  337.9ms |    7.43x |        0 |  337.9ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  339.7ms |    7.46x |        0 |  339.7ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  476.0ms |   10.46x |        0 |  476.0ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                       |
| ----------------------------------------------------- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | ---------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |     98.3ms |   98.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |    166.6ms |  166.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |     78.3ms |   78.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |    337.9ms |  337.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |    256.9ms |  256.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |    184.3ms |  184.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |    177.5ms |  177.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |    144.7ms |  144.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite 原生 / JS 文件                             | 产物变化 |    116.1ms |  116.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`   |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |     48.4ms |   48.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml` |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |     47.1ms |   47.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss` |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |     45.5ms |   45.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json` |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    315.0ms |  315.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    261.0ms |  261.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    274.1ms |  274.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    476.0ms |  476.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    213.5ms |  213.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    256.3ms |  256.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    326.2ms |  326.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    330.0ms |  330.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / CSS 文件                                  | 产物变化 |    339.7ms |  339.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`  |
| mpx / template 区块                                   | 产物变化 |    165.4ms |  165.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / script 区块                                     | 产物变化 |    170.7ms |  170.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / style 区块                                      | 产物变化 |    164.5ms |  164.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / 页面配置                                        | 产物变化 |    156.3ms |  156.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |

## 原始明细

| 场景                                                  | 轮次 | 尝试次数 | 通过 | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | -------: | ---- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |    124.5ms |  124.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    120.7ms |  120.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |     97.5ms |   97.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    109.6ms |  109.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |     89.0ms |   89.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |     98.0ms |   98.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |     88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |     90.7ms |   90.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |     99.3ms |   99.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |    111.3ms |  111.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    108.0ms |  108.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |     89.2ms |   89.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |     88.6ms |   88.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    105.1ms |  105.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |     87.5ms |   87.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |     87.5ms |   87.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    111.7ms |  111.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |     86.0ms |   86.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |     86.8ms |   86.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |     99.5ms |   99.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |     87.3ms |   87.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |    121.1ms |  121.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |     87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |     88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |     84.8ms |   84.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |     78.0ms |   78.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |     88.7ms |   88.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    731.6ms |  731.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |     75.6ms |   75.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    162.5ms |  162.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |     87.2ms |   87.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |     87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    111.4ms |  111.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |    871.0ms |  871.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |     85.0ms |   85.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |    120.5ms |  120.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |     75.8ms |   75.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |     77.5ms |   77.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |     74.4ms |   74.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |     76.8ms |   76.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |     76.4ms |   76.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |     77.0ms |   77.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |     76.9ms |   76.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    100.9ms |  100.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |     86.6ms |   86.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |     74.7ms |   74.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |     75.1ms |   75.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |     75.0ms |   75.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |     75.6ms |   75.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |     75.6ms |   75.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |     76.4ms |   76.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |     75.5ms |   75.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |     75.0ms |   75.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |     78.1ms |   78.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |     75.6ms |   75.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 |        1 | 是   | 产物变化 |     77.7ms |   77.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 |        1 | 是   | 产物变化 |    111.0ms |  111.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 |        1 | 是   | 产物变化 |     87.4ms |   87.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 |        1 | 是   | 产物变化 |     86.4ms |   86.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 |        1 | 是   | 产物变化 |    100.1ms |  100.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 |        1 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 |        1 | 是   | 产物变化 |     89.6ms |   89.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 |        1 | 是   | 产物变化 |     84.0ms |   84.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 |        1 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 |        1 | 是   | 产物变化 |     86.9ms |   86.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 |        1 | 是   | 产物变化 |     87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 |        1 | 是   | 产物变化 |    100.3ms |  100.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 |        1 | 是   | 产物变化 |   1932.3ms | 1932.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 |        1 | 是   | 产物变化 |    305.9ms |  305.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 |        1 | 是   | 产物变化 |    241.2ms |  241.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 |        1 | 是   | 产物变化 |   1231.2ms | 1231.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 |        1 | 是   | 产物变化 |    838.5ms |  838.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 |        1 | 是   | 产物变化 |    362.7ms |  362.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 |        1 | 是   | 产物变化 |    405.2ms |  405.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 |        1 | 是   | 产物变化 |    353.2ms |  353.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 |        1 | 是   | 产物变化 |   1172.6ms | 1172.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 |        1 | 是   | 产物变化 |    416.8ms |  416.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 |        1 | 是   | 产物变化 |    242.5ms |  242.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 |        1 | 是   | 产物变化 |    302.0ms |  302.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 |        1 | 是   | 产物变化 |    153.3ms |  153.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 |        1 | 是   | 产物变化 |    306.1ms |  306.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 |        1 | 是   | 产物变化 |    142.3ms |  142.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 |        1 | 是   | 产物变化 |     98.5ms |   98.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 |        1 | 是   | 产物变化 |     89.2ms |   89.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 |        1 | 是   | 产物变化 |     99.6ms |   99.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 |        1 | 是   | 产物变化 |     98.4ms |   98.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 |        1 | 是   | 产物变化 |     88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 |        1 | 是   | 产物变化 |     98.5ms |   98.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 |        1 | 是   | 产物变化 |    111.1ms |  111.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 |        1 | 是   | 产物变化 |    101.4ms |  101.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 |        1 | 是   | 产物变化 |    287.7ms |  287.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 |        1 | 是   | 产物变化 |    965.3ms |  965.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 |        1 | 是   | 产物变化 |    110.9ms |  110.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 |        1 | 是   | 产物变化 |    163.1ms |  163.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 |        1 | 是   | 产物变化 |     90.4ms |   90.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 |        1 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 |        1 | 是   | 产物变化 |     88.0ms |   88.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 |        1 | 是   | 产物变化 |    139.6ms |  139.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 |        1 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 |        1 | 是   | 产物变化 |    109.3ms |  109.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 |        1 | 是   | 产物变化 |    152.8ms |  152.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 |        1 | 是   | 产物变化 |     99.9ms |   99.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 |        1 | 是   | 产物变化 |    110.8ms |  110.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 |        1 | 是   | 产物变化 |     85.4ms |   85.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 |        1 | 是   | 产物变化 |     95.6ms |   95.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 |        1 | 是   | 产物变化 |    132.9ms |  132.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 |        1 | 是   | 产物变化 |    144.7ms |  144.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 |        1 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 |        1 | 是   | 产物变化 |    101.9ms |  101.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 |        1 | 是   | 产物变化 |    166.1ms |  166.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 |        1 | 是   | 产物变化 |     98.6ms |   98.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 |        1 | 是   | 产物变化 |    554.6ms |  554.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 |        1 | 是   | 产物变化 |   1024.7ms | 1024.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 |        1 | 是   | 产物变化 |    175.2ms |  175.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 |        1 | 是   | 产物变化 |    143.5ms |  143.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 |        1 | 是   | 产物变化 |    109.1ms |  109.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 |        1 | 是   | 产物变化 |     87.2ms |   87.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 |        1 | 是   | 产物变化 |    141.9ms |  141.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 |        1 | 是   | 产物变化 |     76.3ms |   76.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 |        1 | 是   | 产物变化 |     87.1ms |   87.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 |        1 | 是   | 产物变化 |     87.2ms |   87.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 |        1 | 是   | 产物变化 |     98.8ms |   98.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 |        1 | 是   | 产物变化 |     87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 |        1 | 是   | 产物变化 |    350.6ms |  350.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 |        1 | 是   | 产物变化 |    441.1ms |  441.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 |        1 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 |        1 | 是   | 产物变化 |     78.8ms |   78.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 |        1 | 是   | 产物变化 |     77.7ms |   77.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 |        1 | 是   | 产物变化 |    906.6ms |  906.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 |        1 | 是   | 产物变化 |     74.3ms |   74.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 |        1 | 是   | 产物变化 |     85.4ms |   85.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 |        1 | 是   | 产物变化 |    444.2ms |  444.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 |        1 | 是   | 产物变化 |     75.4ms |   75.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 |        1 | 是   | 产物变化 |     75.0ms |   75.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 |        1 | 是   | 产物变化 |     78.6ms |   78.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 |        1 | 是   | 产物变化 |     76.1ms |   76.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 |        1 | 是   | 产物变化 |    359.3ms |  359.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 |        1 | 是   | 产物变化 |     87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 |        1 | 是   | 产物变化 |     88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 |        1 | 是   | 产物变化 |     85.9ms |   85.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 |        1 | 是   | 产物变化 |     88.2ms |   88.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 |        1 | 是   | 产物变化 |     87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 |        1 | 是   | 产物变化 |     87.1ms |   87.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 |        1 | 是   | 产物变化 |    124.6ms |  124.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 |        1 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 |        1 | 是   | 产物变化 |     98.3ms |   98.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 |        1 | 是   | 产物变化 |     86.2ms |   86.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 |        1 | 是   | 产物变化 |     86.1ms |   86.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 |        1 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 |        1 | 是   | 产物变化 |     85.3ms |   85.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 |        1 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 |        1 | 是   | 产物变化 |     86.7ms |   86.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 |        1 | 是   | 产物变化 |     86.1ms |   86.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 |        1 | 是   | 产物变化 |    844.6ms |  844.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 |        1 | 是   | 产物变化 |    172.7ms |  172.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 |        1 | 是   | 产物变化 |     56.2ms |   56.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 |        1 | 是   | 产物变化 |     45.1ms |   45.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 |        1 | 是   | 产物变化 |     43.9ms |   43.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 |        1 | 是   | 产物变化 |     42.9ms |   42.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 |        1 | 是   | 产物变化 |     43.5ms |   43.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 |        1 | 是   | 产物变化 |     43.8ms |   43.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 |        1 | 是   | 产物变化 |    211.1ms |  211.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 |        1 | 是   | 产物变化 |    682.6ms |  682.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 |        1 | 是   | 产物变化 |    604.9ms |  604.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 |        1 | 是   | 产物变化 |     43.4ms |   43.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 |        1 | 是   | 产物变化 |     44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 |        1 | 是   | 产物变化 |     54.6ms |   54.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 |        1 | 是   | 产物变化 |     44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 |        1 | 是   | 产物变化 |     55.2ms |   55.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 |        1 | 是   | 产物变化 |     41.7ms |   41.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 |        1 | 是   | 产物变化 |     88.0ms |   88.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 |        1 | 是   | 产物变化 |     44.7ms |   44.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 |        1 | 是   | 产物变化 |     42.7ms |   42.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 |        1 | 是   | 产物变化 |     44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 |        1 | 是   | 产物变化 |     43.3ms |   43.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 |        1 | 是   | 产物变化 |     43.3ms |   43.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 |        1 | 是   | 产物变化 |     45.4ms |   45.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 |        1 | 是   | 产物变化 |     43.1ms |   43.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 |        1 | 是   | 产物变化 |     67.0ms |   67.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 |        1 | 是   | 产物变化 |     44.5ms |   44.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 |        1 | 是   | 产物变化 |     64.4ms |   64.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 |        1 | 是   | 产物变化 |     33.1ms |   33.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 |        1 | 是   | 产物变化 |     43.5ms |   43.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 |        1 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 |        1 | 是   | 产物变化 |     43.5ms |   43.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 |        1 | 是   | 产物变化 |     43.9ms |   43.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 |        1 | 是   | 产物变化 |     42.9ms |   42.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 |        1 | 是   | 产物变化 |     43.5ms |   43.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 |        1 | 是   | 产物变化 |     44.4ms |   44.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 |        1 | 是   | 产物变化 |     56.4ms |   56.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 |        1 | 是   | 产物变化 |     43.4ms |   43.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 |        1 | 是   | 产物变化 |     44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 |        1 | 是   | 产物变化 |     43.9ms |   43.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 |        1 | 是   | 产物变化 |     33.0ms |   33.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 |        1 | 是   | 产物变化 |     55.8ms |   55.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 |        1 | 是   | 产物变化 |     44.6ms |   44.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 |        1 | 是   | 产物变化 |     76.1ms |   76.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 |        1 | 是   | 产物变化 |     44.0ms |   44.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 |        1 | 是   | 产物变化 |     44.1ms |   44.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 |        1 | 是   | 产物变化 |     43.3ms |   43.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 |        1 | 是   | 产物变化 |     45.3ms |   45.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 |        1 | 是   | 产物变化 |     44.0ms |   44.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 |        1 | 是   | 产物变化 |     75.2ms |   75.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 |        1 | 是   | 产物变化 |     43.0ms |   43.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 |        1 | 是   | 产物变化 |     32.9ms |   32.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 |        1 | 是   | 产物变化 |     76.6ms |   76.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 |        1 | 是   | 产物变化 |     44.7ms |   44.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 |        1 | 是   | 产物变化 |     44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 |        1 | 是   | 产物变化 |     44.4ms |   44.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 |        1 | 是   | 产物变化 |     33.7ms |   33.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 |        1 | 是   | 产物变化 |     42.1ms |   42.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 |        1 | 是   | 产物变化 |     44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 |        1 | 是   | 产物变化 |     43.3ms |   43.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 |        1 | 是   | 产物变化 |     43.5ms |   43.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 |        1 | 是   | 产物变化 |     32.6ms |   32.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 |        1 | 是   | 产物变化 |     46.0ms |   46.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 |        1 | 是   | 产物变化 |     42.4ms |   42.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 |        1 | 是   | 产物变化 |     43.8ms |   43.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 |        1 | 是   | 产物变化 |     43.7ms |   43.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 |        1 | 是   | 产物变化 |     33.8ms |   33.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 |        1 | 是   | 产物变化 |     42.6ms |   42.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 |        1 | 是   | 产物变化 |     44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 |        1 | 是   | 产物变化 |     43.6ms |   43.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 |        1 | 是   | 产物变化 |     75.8ms |   75.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 |        1 | 是   | 产物变化 |     44.9ms |   44.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 |        1 | 是   | 产物变化 |     44.5ms |   44.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 |        1 | 是   | 产物变化 |     43.8ms |   43.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 |        1 | 是   | 产物变化 |     44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 |        1 | 是   | 产物变化 |     45.5ms |   45.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 |        1 | 是   | 产物变化 |     46.6ms |   46.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 |        1 | 是   | 产物变化 |     44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 |        1 | 是   | 产物变化 |     31.4ms |   31.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 |        1 | 是   | 产物变化 |     44.4ms |   44.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 |        1 | 是   | 产物变化 |     54.9ms |   54.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 |        1 | 是   | 产物变化 |     47.9ms |   47.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |   1238.0ms | 1238.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    359.8ms |  359.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |    336.7ms |  336.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    258.5ms |  258.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |    287.6ms |  287.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    197.8ms |  197.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |    197.3ms |  197.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |    210.7ms |  210.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |    234.3ms |  234.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |    290.4ms |  290.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |    198.7ms |  198.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    219.6ms |  219.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |    210.8ms |  210.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |    245.1ms |  245.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |    283.5ms |  283.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |    231.1ms |  231.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    526.5ms |  526.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |    187.8ms |  187.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |    277.0ms |  277.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |    307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |    287.6ms |  287.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |    186.4ms |  186.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |    187.3ms |  187.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |    241.0ms |  241.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |    195.6ms |  195.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |    244.0ms |  244.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |    265.0ms |  265.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |    219.1ms |  219.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |    179.0ms |  179.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    302.7ms |  302.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |    313.2ms |  313.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |    276.0ms |  276.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    268.1ms |  268.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |    209.8ms |  209.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |    774.4ms |  774.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    186.3ms |  186.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |    200.1ms |  200.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |    187.4ms |  187.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |    190.9ms |  190.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |    276.2ms |  276.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |    210.3ms |  210.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |    200.4ms |  200.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |    199.0ms |  199.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |    189.3ms |  189.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |    275.3ms |  275.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |    178.2ms |  178.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |    197.0ms |  197.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    264.7ms |  264.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |    781.4ms |  781.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |    184.9ms |  184.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    184.7ms |  184.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    238.4ms |  238.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |    847.2ms |  847.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |    276.7ms |  276.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |    198.6ms |  198.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |    187.4ms |  187.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    185.4ms |  185.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |    200.0ms |  200.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |    207.6ms |  207.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |   1286.8ms | 1286.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    403.3ms |  403.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    392.7ms |  392.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    306.2ms |  306.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    338.9ms |  338.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    915.2ms |  915.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    285.2ms |  285.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    307.7ms |  307.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    369.8ms |  369.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    416.7ms |  416.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    941.6ms |  941.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    386.0ms |  386.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    575.9ms |  575.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    310.1ms |  310.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    376.7ms |  376.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    373.9ms |  373.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    314.4ms |  314.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    568.6ms |  568.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    340.7ms |  340.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    185.3ms |  185.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    205.3ms |  205.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    205.7ms |  205.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    198.9ms |  198.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    261.0ms |  261.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    198.6ms |  198.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    207.8ms |  207.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    220.6ms |  220.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    175.6ms |  175.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    213.6ms |  213.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    187.0ms |  187.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    195.8ms |  195.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    208.2ms |  208.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    214.6ms |  214.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    265.7ms |  265.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    183.4ms |  183.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    215.0ms |  215.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    211.5ms |  211.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    286.2ms |  286.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    231.0ms |  231.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 |        1 | 是   | 产物变化 |    209.7ms |  209.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 |        1 | 是   | 产物变化 |    200.8ms |  200.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 |        1 | 是   | 产物变化 |    173.5ms |  173.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 |        1 | 是   | 产物变化 |    207.0ms |  207.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 |        1 | 是   | 产物变化 |    209.3ms |  209.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 |        1 | 是   | 产物变化 |    189.6ms |  189.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 |        1 | 是   | 产物变化 |    206.9ms |  206.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 |        1 | 是   | 产物变化 |    211.3ms |  211.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 |        1 | 是   | 产物变化 |    186.1ms |  186.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 |        1 | 是   | 产物变化 |    246.2ms |  246.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 |        1 | 是   | 产物变化 |    177.2ms |  177.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 |        1 | 是   | 产物变化 |    199.6ms |  199.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 |        1 | 是   | 产物变化 |    214.0ms |  214.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 |        1 | 是   | 产物变化 |    196.5ms |  196.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 |        1 | 是   | 产物变化 |   1270.3ms | 1270.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 |        1 | 是   | 产物变化 |    204.4ms |  204.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 |        1 | 是   | 产物变化 |    230.5ms |  230.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 |        1 | 是   | 产物变化 |    176.1ms |  176.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 |        1 | 是   | 产物变化 |    209.4ms |  209.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 |        1 | 是   | 产物变化 |    208.5ms |  208.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |    384.1ms |  384.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    363.8ms |  363.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    321.6ms |  321.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    329.6ms |  329.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    305.4ms |  305.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    348.9ms |  348.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    332.9ms |  332.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    332.1ms |  332.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    287.8ms |  287.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    344.8ms |  344.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    294.7ms |  294.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    308.6ms |  308.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    307.4ms |  307.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    352.4ms |  352.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    286.4ms |  286.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    331.4ms |  331.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    337.2ms |  337.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    326.7ms |  326.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    310.0ms |  310.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    317.3ms |  317.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    376.5ms |  376.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    334.4ms |  334.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    289.6ms |  289.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    317.2ms |  317.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    316.7ms |  316.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    330.1ms |  330.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    232.6ms |  232.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    307.5ms |  307.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    315.4ms |  315.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    331.4ms |  331.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    375.0ms |  375.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    284.6ms |  284.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    319.8ms |  319.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    308.0ms |  308.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    392.3ms |  392.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    327.8ms |  327.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    379.3ms |  379.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    430.4ms |  430.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    345.7ms |  345.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    286.4ms |  286.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 |        1 | 是   | 产物变化 |    307.4ms |  307.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 |        1 | 是   | 产物变化 |    323.6ms |  323.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 |        1 | 是   | 产物变化 |    317.7ms |  317.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 |        1 | 是   | 产物变化 |    308.4ms |  308.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 |        1 | 是   | 产物变化 |    233.6ms |  233.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 |        1 | 是   | 产物变化 |    309.7ms |  309.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 |        1 | 是   | 产物变化 |    306.1ms |  306.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 |        1 | 是   | 产物变化 |    328.8ms |  328.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 |        1 | 是   | 产物变化 |    409.4ms |  409.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 |        1 | 是   | 产物变化 |    728.8ms |  728.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 |        1 | 是   | 产物变化 |    306.7ms |  306.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 |        1 | 是   | 产物变化 |    309.1ms |  309.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 |        1 | 是   | 产物变化 |    321.7ms |  321.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 |        1 | 是   | 产物变化 |    332.1ms |  332.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 |        1 | 是   | 产物变化 |    299.3ms |  299.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 |        1 | 是   | 产物变化 |    313.1ms |  313.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 |        1 | 是   | 产物变化 |    311.8ms |  311.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 |        1 | 是   | 产物变化 |    309.4ms |  309.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 |        1 | 是   | 产物变化 |    379.9ms |  379.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 |        1 | 是   | 产物变化 |    336.5ms |  336.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 |        1 | 是   | 产物变化 |    207.0ms |  207.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 |        1 | 是   | 产物变化 |    161.3ms |  161.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 |        1 | 是   | 产物变化 |    155.0ms |  155.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 |        1 | 是   | 产物变化 |    188.0ms |  188.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 |        1 | 是   | 产物变化 |    133.2ms |  133.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 |        1 | 是   | 产物变化 |    186.2ms |  186.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 |        1 | 是   | 产物变化 |    234.5ms |  234.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 |        1 | 是   | 产物变化 |    154.6ms |  154.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 |        1 | 是   | 产物变化 |    129.7ms |  129.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 |        1 | 是   | 产物变化 |    131.6ms |  131.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 |        1 | 是   | 产物变化 |    164.4ms |  164.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 |        1 | 是   | 产物变化 |    162.0ms |  162.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 |        1 | 是   | 产物变化 |    131.8ms |  131.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 |        1 | 是   | 产物变化 |    164.0ms |  164.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 |        1 | 是   | 产物变化 |    131.5ms |  131.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 |        1 | 是   | 产物变化 |    156.3ms |  156.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 |        1 | 是   | 产物变化 |    130.5ms |  130.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 |        1 | 是   | 产物变化 |    197.7ms |  197.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 |        1 | 是   | 产物变化 |    184.5ms |  184.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 |        1 | 是   | 产物变化 |    204.1ms |  204.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 |        1 | 是   | 产物变化 |    291.3ms |  291.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 |        1 | 是   | 产物变化 |    212.9ms |  212.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 |        1 | 是   | 产物变化 |    188.0ms |  188.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 |        1 | 是   | 产物变化 |    227.2ms |  227.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 |        1 | 是   | 产物变化 |    232.3ms |  232.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 |        1 | 是   | 产物变化 |    155.2ms |  155.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 |        1 | 是   | 产物变化 |    174.6ms |  174.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 |        1 | 是   | 产物变化 |    143.6ms |  143.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 |        1 | 是   | 产物变化 |    129.8ms |  129.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 |        1 | 是   | 产物变化 |    165.5ms |  165.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 |        1 | 是   | 产物变化 |    154.6ms |  154.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 |        1 | 是   | 产物变化 |    155.0ms |  155.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 |        1 | 是   | 产物变化 |    188.3ms |  188.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 |        1 | 是   | 产物变化 |    130.7ms |  130.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 |        1 | 是   | 产物变化 |    122.0ms |  122.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 |        1 | 是   | 产物变化 |    154.1ms |  154.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 |        1 | 是   | 产物变化 |    119.0ms |  119.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 |        1 | 是   | 产物变化 |    146.7ms |  146.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 |        1 | 是   | 产物变化 |    177.1ms |  177.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 |        1 | 是   | 产物变化 |    145.0ms |  145.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 |        1 | 是   | 产物变化 |    138.8ms |  138.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 |        1 | 是   | 产物变化 |    131.3ms |  131.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 |        1 | 是   | 产物变化 |    174.6ms |  174.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 |        1 | 是   | 产物变化 |    155.4ms |  155.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 |        1 | 是   | 产物变化 |    130.6ms |  130.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 |        1 | 是   | 产物变化 |    143.2ms |  143.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 |        1 | 是   | 产物变化 |    244.7ms |  244.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 |        1 | 是   | 产物变化 |    134.1ms |  134.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 |        1 | 是   | 产物变化 |    156.1ms |  156.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 |        1 | 是   | 产物变化 |    165.3ms |  165.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 |        1 | 是   | 产物变化 |    155.3ms |  155.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 |        1 | 是   | 产物变化 |    153.2ms |  153.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 |        1 | 是   | 产物变化 |    142.5ms |  142.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 |        1 | 是   | 产物变化 |    206.3ms |  206.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 |        1 | 是   | 产物变化 |    188.0ms |  188.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 |        1 | 是   | 产物变化 |    190.9ms |  190.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 |        1 | 是   | 产物变化 |    141.8ms |  141.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 |        1 | 是   | 产物变化 |    176.5ms |  176.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 |        1 | 是   | 产物变化 |    185.3ms |  185.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 |        1 | 是   | 产物变化 |    176.2ms |  176.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 |        1 | 是   | 产物变化 |    249.0ms |  249.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 |        1 | 是   | 产物变化 |    134.3ms |  134.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 |        1 | 是   | 产物变化 |    156.1ms |  156.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 |        1 | 是   | 产物变化 |    287.5ms |  287.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 |        1 | 是   | 产物变化 |    131.6ms |  131.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 |        1 | 是   | 产物变化 |    155.4ms |  155.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 |        1 | 是   | 产物变化 |    151.4ms |  151.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 |        1 | 是   | 产物变化 |    130.3ms |  130.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 |        1 | 是   | 产物变化 |    118.7ms |  118.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 |        1 | 是   | 产物变化 |    153.1ms |  153.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 |        1 | 是   | 产物变化 |    142.5ms |  142.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 |        1 | 是   | 产物变化 |    164.7ms |  164.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 |        1 | 是   | 产物变化 |    154.1ms |  154.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 |        1 | 是   | 产物变化 |    131.3ms |  131.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 |        1 | 是   | 产物变化 |    141.1ms |  141.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 |        1 | 是   | 产物变化 |    143.4ms |  143.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 |        1 | 是   | 产物变化 |    120.5ms |  120.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 |        1 | 是   | 产物变化 |    153.1ms |  153.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 |        1 | 是   | 产物变化 |    163.7ms |  163.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 |        1 | 是   | 产物变化 |    144.8ms |  144.8ms |        - |    - |    - |        - |          - |        |          |

说明：

- 所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。
- 本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景按 watch 链路实际支持情况覆盖 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- Taro watch 模式不会因页面 .config.ts 变化重新生成页面 JSON，因此该格按不支持处理并显示为 N/A。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
- HMR 产物变化轮询间隔默认是 10ms，可通过 BENCH_HMR_POLL_INTERVAL 覆盖。
- HMR 单轮最多尝试 2 次，重试会写入 attempts 字段；可通过 BENCH_HMR_ITERATION_ATTEMPTS 覆盖。
