# HMR 基准报告

生成时间：2026-06-10T02:01:43.716Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.14.1；pnpm：10.33.4
- 微信开发者工具 CLI：-
- Git commit：f72e7673f575286294866cd166d5a60b86927a7b
- weapp-vite submodule：fa75b2ff90b4fdf005ac510245812cab8c19a4cb

## 一眼结论

- HMR 最快：weapp-vite 原生 / JSON 文件，平均 87.2ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 424.0ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR | 相对最快 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | -------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   87.2ms |    1.00x |   87.2ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   87.9ms |    1.01x |   87.9ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   90.8ms |    1.04x |   90.8ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |   99.5ms |    1.14x |   99.5ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  107.2ms |    1.23x |  107.2ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | taro vue3 / 页面配置                                  | taro vue3                     | Vue SFC  | 产物变化 |  109.2ms |    1.25x |  109.2ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  110.9ms |    1.27x |  110.9ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  135.8ms |    1.56x |  135.8ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  137.1ms |    1.57x |  137.1ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |  152.8ms |    1.75x |  152.8ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |  153.1ms |    1.76x |  153.1ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |  153.7ms |    1.76x |  153.7ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |  166.4ms |    1.91x |  166.4ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  185.1ms |    2.12x |  185.1ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  201.2ms |    2.31x |  201.2ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  202.7ms |    2.33x |  202.7ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |  207.5ms |    2.38x |  207.5ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  212.7ms |    2.44x |  212.7ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |  227.1ms |    2.60x |  227.1ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  227.4ms |    2.61x |  227.4ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |  230.6ms |    2.64x |  230.6ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  247.9ms |    2.84x |  247.9ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  253.2ms |    2.90x |  253.2ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |  275.3ms |    3.16x |  275.3ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  313.5ms |    3.60x |  313.5ms |        - |    - |    - |        - |          - |          - |            - |
|   26 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  424.0ms |    4.86x |  424.0ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                            |
| ----------------------------------------------------- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | --------------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |    275.3ms |  275.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |    230.6ms |  230.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |    227.1ms |  227.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |    207.5ms |  207.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |    247.9ms |  247.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |    107.2ms |  107.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |    227.4ms |  227.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |    212.7ms |  212.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite 原生 / JS 文件                             | 产物变化 |     99.5ms |   99.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`        |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |     87.9ms |   87.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml`      |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |     90.8ms |   90.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss`      |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |     87.2ms |   87.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json`      |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    185.1ms |  185.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    137.1ms |  137.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    135.8ms |  135.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    424.0ms |  424.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    202.7ms |  202.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    201.2ms |  201.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    313.5ms |  313.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    253.2ms |  253.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / CSS 文件                                  | 产物变化 |    110.9ms |  110.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`       |
| taro vue3 / 页面配置                                  | 产物变化 |    109.2ms |  109.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.config.ts` |
| mpx / template 区块                                   | 产物变化 |    166.4ms |  166.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / script 区块                                     | 产物变化 |    153.7ms |  153.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / style 区块                                      | 产物变化 |    153.1ms |  153.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / 页面配置                                        | 产物变化 |    152.8ms |  152.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |

## 原始明细

| 场景                                                  | 轮次 | 通过 | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | ---- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 | 是   | 产物变化 |    286.2ms |  286.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 | 是   | 产物变化 |    262.6ms |  262.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 | 是   | 产物变化 |    272.4ms |  272.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 | 是   | 产物变化 |    241.0ms |  241.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 | 是   | 产物变化 |    234.2ms |  234.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 | 是   | 产物变化 |    270.4ms |  270.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 | 是   | 产物变化 |    426.0ms |  426.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 | 是   | 产物变化 |    363.6ms |  363.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 | 是   | 产物变化 |    284.4ms |  284.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 | 是   | 产物变化 |    262.0ms |  262.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 | 是   | 产物变化 |    260.1ms |  260.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 | 是   | 产物变化 |    324.6ms |  324.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 | 是   | 产物变化 |    274.0ms |  274.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 | 是   | 产物变化 |    250.0ms |  250.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 | 是   | 产物变化 |    236.1ms |  236.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 | 是   | 产物变化 |    236.9ms |  236.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 | 是   | 产物变化 |    303.7ms |  303.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 | 是   | 产物变化 |    235.3ms |  235.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 | 是   | 产物变化 |    244.9ms |  244.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 | 是   | 产物变化 |    237.5ms |  237.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 | 是   | 产物变化 |    205.2ms |  205.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 | 是   | 产物变化 |    269.6ms |  269.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 | 是   | 产物变化 |    204.8ms |  204.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 | 是   | 产物变化 |    216.7ms |  216.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 | 是   | 产物变化 |    224.1ms |  224.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 | 是   | 产物变化 |    225.2ms |  225.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 | 是   | 产物变化 |    218.9ms |  218.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 | 是   | 产物变化 |    267.7ms |  267.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 | 是   | 产物变化 |    233.6ms |  233.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 | 是   | 产物变化 |    226.2ms |  226.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 | 是   | 产物变化 |    224.6ms |  224.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 | 是   | 产物变化 |    227.1ms |  227.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 | 是   | 产物变化 |    279.4ms |  279.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 | 是   | 产物变化 |    216.7ms |  216.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 | 是   | 产物变化 |    220.3ms |  220.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 | 是   | 产物变化 |    242.6ms |  242.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 | 是   | 产物变化 |    215.2ms |  215.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 | 是   | 产物变化 |    214.1ms |  214.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 | 是   | 产物变化 |    275.7ms |  275.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 | 是   | 产物变化 |    225.4ms |  225.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 | 是   | 产物变化 |    214.3ms |  214.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 | 是   | 产物变化 |    202.4ms |  202.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 | 是   | 产物变化 |    226.5ms |  226.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 | 是   | 产物变化 |    284.7ms |  284.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 | 是   | 产物变化 |    225.2ms |  225.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 | 是   | 产物变化 |    214.7ms |  214.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 | 是   | 产物变化 |    217.2ms |  217.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 | 是   | 产物变化 |    226.5ms |  226.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 | 是   | 产物变化 |    207.3ms |  207.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 | 是   | 产物变化 |    216.5ms |  216.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 | 是   | 产物变化 |    224.0ms |  224.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 | 是   | 产物变化 |    300.8ms |  300.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 | 是   | 产物变化 |    237.3ms |  237.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 | 是   | 产物变化 |    214.1ms |  214.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 | 是   | 产物变化 |    204.7ms |  204.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 | 是   | 产物变化 |    227.8ms |  227.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 | 是   | 产物变化 |    231.2ms |  231.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 | 是   | 产物变化 |    215.0ms |  215.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 | 是   | 产物变化 |    225.7ms |  225.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 | 是   | 产物变化 |    212.4ms |  212.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 | 是   | 产物变化 |    200.3ms |  200.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 | 是   | 产物变化 |    217.7ms |  217.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 | 是   | 产物变化 |    204.4ms |  204.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 | 是   | 产物变化 |    206.5ms |  206.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 | 是   | 产物变化 |    230.7ms |  230.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 | 是   | 产物变化 |    226.9ms |  226.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 | 是   | 产物变化 |    217.9ms |  217.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 | 是   | 产物变化 |    196.6ms |  196.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 | 是   | 产物变化 |    201.3ms |  201.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 | 是   | 产物变化 |    204.9ms |  204.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 | 是   | 产物变化 |    194.5ms |  194.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 | 是   | 产物变化 |    202.4ms |  202.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 | 是   | 产物变化 |    202.7ms |  202.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 | 是   | 产物变化 |    203.6ms |  203.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 | 是   | 产物变化 |    206.1ms |  206.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 | 是   | 产物变化 |    205.1ms |  205.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 | 是   | 产物变化 |    194.5ms |  194.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 | 是   | 产物变化 |    217.3ms |  217.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 | 是   | 产物变化 |    277.7ms |  277.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 | 是   | 产物变化 |    259.9ms |  259.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 | 是   | 产物变化 |    285.2ms |  285.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 | 是   | 产物变化 |    236.4ms |  236.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 | 是   | 产物变化 |    234.7ms |  234.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 | 是   | 产物变化 |    236.0ms |  236.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 | 是   | 产物变化 |    269.9ms |  269.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 | 是   | 产物变化 |    238.1ms |  238.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 | 是   | 产物变化 |    238.6ms |  238.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 | 是   | 产物变化 |    228.4ms |  228.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 | 是   | 产物变化 |    225.9ms |  225.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 | 是   | 产物变化 |    279.0ms |  279.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 | 是   | 产物变化 |    236.6ms |  236.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 | 是   | 产物变化 |    235.6ms |  235.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 | 是   | 产物变化 |    246.5ms |  246.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 | 是   | 产物变化 |    233.6ms |  233.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 | 是   | 产物变化 |    239.2ms |  239.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 | 是   | 产物变化 |    292.8ms |  292.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 | 是   | 产物变化 |    227.7ms |  227.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 | 是   | 产物变化 |    237.1ms |  237.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 | 是   | 产物变化 |      0.3ms |    0.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 | 是   | 产物变化 |    107.1ms |  107.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 | 是   | 产物变化 |    172.4ms |  172.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 | 是   | 产物变化 |     97.0ms |   97.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 | 是   | 产物变化 |    107.0ms |  107.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 | 是   | 产物变化 |    124.7ms |  124.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 | 是   | 产物变化 |     76.1ms |   76.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 | 是   | 产物变化 |     99.4ms |   99.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 | 是   | 产物变化 |    107.5ms |  107.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 | 是   | 产物变化 |    168.1ms |  168.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 | 是   | 产物变化 |     96.5ms |   96.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 | 是   | 产物变化 |     97.3ms |   97.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 | 是   | 产物变化 |    107.9ms |  107.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 | 是   | 产物变化 |    107.7ms |  107.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 | 是   | 产物变化 |     98.2ms |   98.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 | 是   | 产物变化 |    175.3ms |  175.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 | 是   | 产物变化 |     96.2ms |   96.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 | 是   | 产物变化 |    108.2ms |  108.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 | 是   | 产物变化 |    108.9ms |  108.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 | 是   | 产物变化 |    217.4ms |  217.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 | 是   | 产物变化 |    216.7ms |  216.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 | 是   | 产物变化 |    216.4ms |  216.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 | 是   | 产物变化 |    293.8ms |  293.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 | 是   | 产物变化 |    204.6ms |  204.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 | 是   | 产物变化 |    230.1ms |  230.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 | 是   | 产物变化 |    207.1ms |  207.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 | 是   | 产物变化 |    227.0ms |  227.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 | 是   | 产物变化 |    214.4ms |  214.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 | 是   | 产物变化 |    288.4ms |  288.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 | 是   | 产物变化 |    214.8ms |  214.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 | 是   | 产物变化 |    217.8ms |  217.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 | 是   | 产物变化 |    213.6ms |  213.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 | 是   | 产物变化 |    220.2ms |  220.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 | 是   | 产物变化 |    216.1ms |  216.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 | 是   | 产物变化 |    217.7ms |  217.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 | 是   | 产物变化 |    218.5ms |  218.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 | 是   | 产物变化 |    295.3ms |  295.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 | 是   | 产物变化 |    203.3ms |  203.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 | 是   | 产物变化 |    215.5ms |  215.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 | 是   | 产物变化 |    195.6ms |  195.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 | 是   | 产物变化 |    206.2ms |  206.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 | 是   | 产物变化 |    209.0ms |  209.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 | 是   | 产物变化 |    276.9ms |  276.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 | 是   | 产物变化 |    215.3ms |  215.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 | 是   | 产物变化 |    203.9ms |  203.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 | 是   | 产物变化 |    193.9ms |  193.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 | 是   | 产物变化 |    206.2ms |  206.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 | 是   | 产物变化 |    195.3ms |  195.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 | 是   | 产物变化 |    205.8ms |  205.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 | 是   | 产物变化 |    205.8ms |  205.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 | 是   | 产物变化 |    203.8ms |  203.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 | 是   | 产物变化 |    203.2ms |  203.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 | 是   | 产物变化 |    304.8ms |  304.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 | 是   | 产物变化 |    206.6ms |  206.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 | 是   | 产物变化 |    194.4ms |  194.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 | 是   | 产物变化 |    203.6ms |  203.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 | 是   | 产物变化 |    212.8ms |  212.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 | 是   | 产物变化 |    206.4ms |  206.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 | 是   | 产物变化 |    106.3ms |  106.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 | 是   | 产物变化 |     96.7ms |   96.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 | 是   | 产物变化 |    106.8ms |  106.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 | 是   | 产物变化 |     96.8ms |   96.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 | 是   | 产物变化 |     99.4ms |   99.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 | 是   | 产物变化 |    110.7ms |  110.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 | 是   | 产物变化 |    119.1ms |  119.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 | 是   | 产物变化 |     99.3ms |   99.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 | 是   | 产物变化 |     96.5ms |   96.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 | 是   | 产物变化 |     97.6ms |   97.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 | 是   | 产物变化 |     96.6ms |   96.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 | 是   | 产物变化 |     96.8ms |   96.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 | 是   | 产物变化 |     94.8ms |   94.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 | 是   | 产物变化 |     84.4ms |   84.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 | 是   | 产物变化 |     97.0ms |   97.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 | 是   | 产物变化 |     99.1ms |   99.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 | 是   | 产物变化 |    100.8ms |  100.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 | 是   | 产物变化 |     98.4ms |   98.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 | 是   | 产物变化 |     95.9ms |   95.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 | 是   | 产物变化 |     97.4ms |   97.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 | 是   | 产物变化 |     85.1ms |   85.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 | 是   | 产物变化 |     85.8ms |   85.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 | 是   | 产物变化 |    108.0ms |  108.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 | 是   | 产物变化 |     86.7ms |   86.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 | 是   | 产物变化 |     84.0ms |   84.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 | 是   | 产物变化 |     87.1ms |   87.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 | 是   | 产物变化 |     97.7ms |   97.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 | 是   | 产物变化 |     85.5ms |   85.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 | 是   | 产物变化 |     76.2ms |   76.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 | 是   | 产物变化 |     83.3ms |   83.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 | 是   | 产物变化 |     86.7ms |   86.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 | 是   | 产物变化 |     86.6ms |   86.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 | 是   | 产物变化 |     86.5ms |   86.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 | 是   | 产物变化 |     90.1ms |   90.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 | 是   | 产物变化 |     87.1ms |   87.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 | 是   | 产物变化 |     90.7ms |   90.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 | 是   | 产物变化 |     86.2ms |   86.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 | 是   | 产物变化 |     87.5ms |   87.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 | 是   | 产物变化 |     85.8ms |   85.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 | 是   | 产物变化 |     89.3ms |   89.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 | 是   | 产物变化 |     97.6ms |   97.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 | 是   | 产物变化 |     96.7ms |   96.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 | 是   | 产物变化 |     86.9ms |   86.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 | 是   | 产物变化 |     89.2ms |   89.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 | 是   | 产物变化 |     99.5ms |   99.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 | 是   | 产物变化 |     87.4ms |   87.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 | 是   | 产物变化 |     90.6ms |   90.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 | 是   | 产物变化 |     97.7ms |   97.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 | 是   | 产物变化 |     87.3ms |   87.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 | 是   | 产物变化 |     88.2ms |   88.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 | 是   | 产物变化 |     89.3ms |   89.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 | 是   | 产物变化 |     97.7ms |   97.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 | 是   | 产物变化 |     96.4ms |   96.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 | 是   | 产物变化 |     87.1ms |   87.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 | 是   | 产物变化 |     85.2ms |   85.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 | 是   | 产物变化 |     86.0ms |   86.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 | 是   | 产物变化 |     85.3ms |   85.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 | 是   | 产物变化 |     92.5ms |   92.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 | 是   | 产物变化 |     88.6ms |   88.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 | 是   | 产物变化 |     84.2ms |   84.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 | 是   | 产物变化 |     85.3ms |   85.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 | 是   | 产物变化 |     84.3ms |   84.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 | 是   | 产物变化 |     90.0ms |   90.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 | 是   | 产物变化 |     85.1ms |   85.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 | 是   | 产物变化 |     98.8ms |   98.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 | 是   | 产物变化 |     85.9ms |   85.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 | 是   | 产物变化 |     77.8ms |   77.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 | 是   | 产物变化 |     86.3ms |   86.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 | 是   | 产物变化 |     85.9ms |   85.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 | 是   | 产物变化 |     84.1ms |   84.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 | 是   | 产物变化 |     97.6ms |   97.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 | 是   | 产物变化 |     85.5ms |   85.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 | 是   | 产物变化 |     86.5ms |   86.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 | 是   | 产物变化 |     87.3ms |   87.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 | 是   | 产物变化 |   1068.6ms | 1068.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 | 是   | 产物变化 |    216.8ms |  216.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 | 是   | 产物变化 |    143.0ms |  143.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 | 是   | 产物变化 |    138.8ms |  138.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 | 是   | 产物变化 |    129.5ms |  129.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 | 是   | 产物变化 |    131.0ms |  131.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 | 是   | 产物变化 |    142.8ms |  142.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 | 是   | 产物变化 |    130.0ms |  130.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 | 是   | 产物变化 |    139.4ms |  139.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 | 是   | 产物变化 |    127.9ms |  127.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 | 是   | 产物变化 |    128.7ms |  128.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 | 是   | 产物变化 |    119.5ms |  119.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 | 是   | 产物变化 |    119.4ms |  119.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 | 是   | 产物变化 |    131.9ms |  131.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 | 是   | 产物变化 |    117.9ms |  117.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 | 是   | 产物变化 |    132.0ms |  132.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 | 是   | 产物变化 |    117.0ms |  117.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 | 是   | 产物变化 |    216.9ms |  216.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 | 是   | 产物变化 |    121.7ms |  121.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 | 是   | 产物变化 |    128.5ms |  128.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 | 是   | 产物变化 |    214.7ms |  214.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 | 是   | 产物变化 |    202.9ms |  202.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 | 是   | 产物变化 |    118.5ms |  118.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 | 是   | 产物变化 |    129.0ms |  129.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 | 是   | 产物变化 |    129.2ms |  129.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 | 是   | 产物变化 |    207.0ms |  207.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 | 是   | 产物变化 |    118.9ms |  118.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 | 是   | 产物变化 |    120.5ms |  120.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 | 是   | 产物变化 |    118.1ms |  118.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 | 是   | 产物变化 |    120.4ms |  120.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 | 是   | 产物变化 |    127.5ms |  127.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 | 是   | 产物变化 |    120.5ms |  120.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 | 是   | 产物变化 |    128.5ms |  128.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 | 是   | 产物变化 |    129.6ms |  129.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 | 是   | 产物变化 |    118.7ms |  118.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 | 是   | 产物变化 |    119.2ms |  119.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 | 是   | 产物变化 |    130.7ms |  130.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 | 是   | 产物变化 |    130.0ms |  130.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 | 是   | 产物变化 |    127.3ms |  127.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 | 是   | 产物变化 |    130.8ms |  130.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 | 是   | 产物变化 |    205.3ms |  205.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 | 是   | 产物变化 |    128.2ms |  128.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 | 是   | 产物变化 |    206.7ms |  206.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 | 是   | 产物变化 |    119.0ms |  119.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 | 是   | 产物变化 |    119.2ms |  119.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 | 是   | 产物变化 |    129.1ms |  129.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 | 是   | 产物变化 |    128.4ms |  128.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 | 是   | 产物变化 |    117.7ms |  117.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 | 是   | 产物变化 |    129.2ms |  129.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 | 是   | 产物变化 |    119.1ms |  119.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 | 是   | 产物变化 |    119.8ms |  119.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 | 是   | 产物变化 |    131.1ms |  131.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 | 是   | 产物变化 |    119.4ms |  119.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 | 是   | 产物变化 |    119.4ms |  119.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 | 是   | 产物变化 |    119.5ms |  119.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 | 是   | 产物变化 |    130.3ms |  130.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 | 是   | 产物变化 |    129.7ms |  129.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 | 是   | 产物变化 |    118.3ms |  118.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 | 是   | 产物变化 |    120.3ms |  120.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 | 是   | 产物变化 |    205.8ms |  205.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 | 是   | 产物变化 |   1325.5ms | 1325.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    402.1ms |  402.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    411.8ms |  411.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    422.9ms |  422.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    436.5ms |  436.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    411.9ms |  411.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    402.4ms |  402.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    313.9ms |  313.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    315.1ms |  315.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    314.4ms |  314.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    402.4ms |  402.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    413.9ms |  413.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    365.6ms |  365.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    402.1ms |  402.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    405.2ms |  405.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    389.1ms |  389.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    310.5ms |  310.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    404.1ms |  404.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    318.4ms |  318.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    312.4ms |  312.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    226.6ms |  226.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    204.7ms |  204.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    206.0ms |  206.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    196.1ms |  196.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    205.1ms |  205.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    205.0ms |  205.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    193.0ms |  193.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    206.7ms |  206.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    203.5ms |  203.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    194.0ms |  194.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    204.2ms |  204.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    208.1ms |  208.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    195.8ms |  195.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    204.9ms |  204.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    197.7ms |  197.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    203.5ms |  203.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    206.7ms |  206.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    191.7ms |  191.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    205.4ms |  205.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    195.9ms |  195.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 | 是   | 产物变化 |    205.9ms |  205.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 | 是   | 产物变化 |    193.7ms |  193.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 | 是   | 产物变化 |    203.3ms |  203.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 | 是   | 产物变化 |    195.9ms |  195.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 | 是   | 产物变化 |    203.5ms |  203.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 | 是   | 产物变化 |    202.3ms |  202.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 | 是   | 产物变化 |    202.7ms |  202.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 | 是   | 产物变化 |    204.8ms |  204.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 | 是   | 产物变化 |    193.1ms |  193.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 | 是   | 产物变化 |    238.2ms |  238.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 | 是   | 产物变化 |    185.1ms |  185.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 | 是   | 产物变化 |    182.2ms |  182.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 | 是   | 产物变化 |    203.4ms |  203.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 | 是   | 产物变化 |    202.8ms |  202.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 | 是   | 产物变化 |    194.9ms |  194.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 | 是   | 产物变化 |    204.8ms |  204.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 | 是   | 产物变化 |    201.9ms |  201.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 | 是   | 产物变化 |    194.3ms |  194.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 | 是   | 产物变化 |    205.9ms |  205.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 | 是   | 产物变化 |    205.0ms |  205.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 | 是   | 产物变化 |    283.6ms |  283.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    312.1ms |  312.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    337.7ms |  337.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    294.9ms |  294.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    314.6ms |  314.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    325.0ms |  325.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    293.3ms |  293.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    323.5ms |  323.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    311.4ms |  311.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    320.5ms |  320.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    310.9ms |  310.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    336.7ms |  336.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    320.9ms |  320.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    312.9ms |  312.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    312.5ms |  312.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    313.9ms |  313.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    316.7ms |  316.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    316.2ms |  316.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    309.5ms |  309.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    304.0ms |  304.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    318.5ms |  318.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    303.2ms |  303.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    295.5ms |  295.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    302.5ms |  302.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    217.2ms |  217.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    213.9ms |  213.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    302.2ms |  302.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    301.4ms |  301.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    322.1ms |  322.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    302.7ms |  302.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    290.1ms |  290.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    303.1ms |  303.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    215.9ms |  215.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    303.3ms |  303.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    290.8ms |  290.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    205.5ms |  205.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    210.2ms |  210.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    143.2ms |  143.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    117.7ms |  117.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    105.4ms |  105.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 | 是   | 产物变化 |    202.8ms |  202.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 | 是   | 产物变化 |    107.3ms |  107.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 | 是   | 产物变化 |     96.6ms |   96.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 | 是   | 产物变化 |     98.7ms |   98.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 | 是   | 产物变化 |    105.7ms |  105.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 | 是   | 产物变化 |    129.8ms |  129.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 | 是   | 产物变化 |    108.8ms |  108.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 | 是   | 产物变化 |     97.7ms |   97.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 | 是   | 产物变化 |    106.8ms |  106.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 | 是   | 产物变化 |     96.8ms |   96.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 | 是   | 产物变化 |    108.9ms |  108.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 | 是   | 产物变化 |     98.0ms |   98.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 | 是   | 产物变化 |    141.8ms |  141.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 | 是   | 产物变化 |    107.3ms |  107.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 | 是   | 产物变化 |     99.2ms |   99.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 | 是   | 产物变化 |     97.5ms |   97.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 | 是   | 产物变化 |    108.0ms |  108.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 | 是   | 产物变化 |    109.5ms |  109.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 | 是   | 产物变化 |     98.9ms |   98.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 | 是   | 产物变化 |     96.9ms |   96.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    1 | 是   | 产物变化 |    227.1ms |  227.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    2 | 是   | 产物变化 |    107.1ms |  107.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    3 | 是   | 产物变化 |     97.9ms |   97.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    4 | 是   | 产物变化 |     97.4ms |   97.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    5 | 是   | 产物变化 |     94.3ms |   94.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    6 | 是   | 产物变化 |     97.6ms |   97.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    7 | 是   | 产物变化 |     98.6ms |   98.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    8 | 是   | 产物变化 |    118.6ms |  118.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    9 | 是   | 产物变化 |    116.6ms |  116.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   10 | 是   | 产物变化 |     99.0ms |   99.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   11 | 是   | 产物变化 |     96.9ms |   96.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   12 | 是   | 产物变化 |     98.9ms |   98.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   13 | 是   | 产物变化 |     97.9ms |   97.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   14 | 是   | 产物变化 |     97.9ms |   97.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   15 | 是   | 产物变化 |     98.9ms |   98.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   16 | 是   | 产物变化 |    106.3ms |  106.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   17 | 是   | 产物变化 |    109.8ms |  109.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   18 | 是   | 产物变化 |    119.1ms |  119.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   19 | 是   | 产物变化 |     97.3ms |   97.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   20 | 是   | 产物变化 |    106.9ms |  106.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 | 是   | 产物变化 |    214.7ms |  214.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 | 是   | 产物变化 |    161.2ms |  161.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 | 是   | 产物变化 |    151.7ms |  151.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 | 是   | 产物变化 |    151.4ms |  151.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 | 是   | 产物变化 |    162.6ms |  162.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 | 是   | 产物变化 |    161.9ms |  161.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 | 是   | 产物变化 |    140.2ms |  140.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 | 是   | 产物变化 |    152.5ms |  152.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 | 是   | 产物变化 |    161.9ms |  161.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 | 是   | 产物变化 |    195.6ms |  195.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 | 是   | 产物变化 |    196.5ms |  196.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 | 是   | 产物变化 |    194.9ms |  194.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 | 是   | 产物变化 |    162.8ms |  162.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 | 是   | 产物变化 |    193.7ms |  193.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 | 是   | 产物变化 |    150.8ms |  150.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 | 是   | 产物变化 |    142.4ms |  142.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 | 是   | 产物变化 |    151.3ms |  151.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 | 是   | 产物变化 |    159.2ms |  159.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 | 是   | 产物变化 |    141.3ms |  141.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 | 是   | 产物变化 |    180.9ms |  180.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 | 是   | 产物变化 |    174.3ms |  174.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 | 是   | 产物变化 |    195.2ms |  195.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 | 是   | 产物变化 |    138.2ms |  138.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 | 是   | 产物变化 |    153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 | 是   | 产物变化 |    140.8ms |  140.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 | 是   | 产物变化 |    170.4ms |  170.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 | 是   | 产物变化 |    172.0ms |  172.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 | 是   | 产物变化 |    150.6ms |  150.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 | 是   | 产物变化 |    138.8ms |  138.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 | 是   | 产物变化 |    163.1ms |  163.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 | 是   | 产物变化 |    129.1ms |  129.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 | 是   | 产物变化 |    160.6ms |  160.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 | 是   | 产物变化 |    138.3ms |  138.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 | 是   | 产物变化 |    152.7ms |  152.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 | 是   | 产物变化 |    161.8ms |  161.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 | 是   | 产物变化 |    140.1ms |  140.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 | 是   | 产物变化 |    142.7ms |  142.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 | 是   | 产物变化 |    162.5ms |  162.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 | 是   | 产物变化 |    138.8ms |  138.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 | 是   | 产物变化 |    150.1ms |  150.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 | 是   | 产物变化 |    152.3ms |  152.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 | 是   | 产物变化 |    193.5ms |  193.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 | 是   | 产物变化 |    185.1ms |  185.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 | 是   | 产物变化 |    139.5ms |  139.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 | 是   | 产物变化 |    183.1ms |  183.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 | 是   | 产物变化 |    141.7ms |  141.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 | 是   | 产物变化 |    150.5ms |  150.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 | 是   | 产物变化 |    131.0ms |  131.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 | 是   | 产物变化 |    159.9ms |  159.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 | 是   | 产物变化 |    139.0ms |  139.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 | 是   | 产物变化 |    151.7ms |  151.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 | 是   | 产物变化 |    144.4ms |  144.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 | 是   | 产物变化 |    169.8ms |  169.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 | 是   | 产物变化 |    150.5ms |  150.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 | 是   | 产物变化 |    139.0ms |  139.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 | 是   | 产物变化 |    137.9ms |  137.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 | 是   | 产物变化 |    150.1ms |  150.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 | 是   | 产物变化 |    153.3ms |  153.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 | 是   | 产物变化 |    148.6ms |  148.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 | 是   | 产物变化 |    140.9ms |  140.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 | 是   | 产物变化 |    162.5ms |  162.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 | 是   | 产物变化 |    173.0ms |  173.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 | 是   | 产物变化 |    161.2ms |  161.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 | 是   | 产物变化 |    172.6ms |  172.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 | 是   | 产物变化 |    141.1ms |  141.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 | 是   | 产物变化 |    143.6ms |  143.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 | 是   | 产物变化 |    150.6ms |  150.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 | 是   | 产物变化 |    169.5ms |  169.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 | 是   | 产物变化 |    139.2ms |  139.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 | 是   | 产物变化 |    139.4ms |  139.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 | 是   | 产物变化 |    161.7ms |  161.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 | 是   | 产物变化 |    151.1ms |  151.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 | 是   | 产物变化 |    141.3ms |  141.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 | 是   | 产物变化 |    141.7ms |  141.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 | 是   | 产物变化 |    171.6ms |  171.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 | 是   | 产物变化 |    131.2ms |  131.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 | 是   | 产物变化 |    153.8ms |  153.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 | 是   | 产物变化 |    128.0ms |  128.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 | 是   | 产物变化 |    161.0ms |  161.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 | 是   | 产物变化 |    161.0ms |  161.0ms |        - |    - |    - |        - |          - |        |          |

说明：

- 所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。
- 本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
- HMR 产物变化轮询间隔默认是 10ms，可通过 BENCH_HMR_POLL_INTERVAL 覆盖。
