# HMR 基准报告

生成时间：2026-07-14T09:43:16.538Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：11.13.0
- 微信开发者工具 CLI：-
- Git commit：d739f29753a96f151f136064cfe12b65b432f557
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22

## 一眼结论

- HMR 最快：weapp-vite 原生 / WXSS 文件，平均 45.2ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 359.8ms。
- 所有 HMR 场景样本完整且无重试，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR |  中位数 |     P95 |   最大值 | 相对最快 | 重试样本 | 含重试总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | ------: | ------: | -------: | -------: | -------: | -----------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   45.2ms |  44.4ms |  58.0ms |   59.2ms |    1.00x |        0 |       45.2ms |   45.2ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   46.9ms |  44.8ms |  69.8ms |   70.3ms |    1.04x |        0 |       46.9ms |   46.9ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   47.8ms |  45.2ms |  57.1ms |   60.6ms |    1.06x |        0 |       47.8ms |   47.8ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |   51.4ms |  50.0ms |  58.4ms |   78.1ms |    1.14x |        0 |       51.4ms |   51.4ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   77.0ms |  75.2ms |  96.9ms |  121.5ms |    1.70x |        0 |       77.0ms |   77.0ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |   80.2ms |  76.6ms | 108.5ms |  110.1ms |    1.77x |        0 |       80.2ms |   80.2ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   86.0ms |  86.5ms | 108.5ms |  123.3ms |    1.90x |        0 |       86.0ms |   86.0ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   86.6ms |  87.8ms |  98.6ms |  134.5ms |    1.91x |        0 |       86.6ms |   86.6ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |   86.9ms |  86.5ms | 120.0ms |  120.7ms |    1.92x |        0 |       86.9ms |   86.9ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |   87.2ms |  86.7ms | 119.4ms |  133.7ms |    1.93x |        0 |       87.2ms |   87.2ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   96.1ms |  91.9ms | 129.8ms |  131.6ms |    2.13x |        0 |       96.1ms |   96.1ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |   97.1ms |  94.0ms | 131.5ms |  142.0ms |    2.15x |        0 |       97.1ms |   97.1ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |  133.3ms | 129.9ms | 162.2ms |  163.6ms |    2.95x |        0 |      133.3ms |  133.3ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |  148.3ms | 152.7ms | 186.4ms |  197.7ms |    3.28x |        0 |      148.3ms |  148.3ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |  152.4ms | 152.9ms | 185.5ms |  209.2ms |    3.37x |        0 |      152.4ms |  152.4ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |  158.8ms | 154.3ms | 195.8ms |  219.3ms |    3.51x |        0 |      158.8ms |  158.8ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  199.4ms | 186.5ms | 274.5ms |  276.5ms |    4.41x |        0 |      199.4ms |  199.4ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  204.7ms | 200.1ms | 229.2ms |  251.0ms |    4.53x |        0 |      204.7ms |  204.7ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  205.4ms | 205.9ms | 228.1ms |  239.8ms |    4.54x |        0 |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  209.2ms | 186.8ms | 284.1ms |  375.1ms |    4.62x |        0 |      209.2ms |  209.2ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  252.3ms | 198.3ms | 309.4ms | 1122.7ms |    5.58x |        0 |      252.3ms |  252.3ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  305.7ms | 305.7ms | 331.6ms |  338.9ms |    6.76x |        0 |      305.7ms |  305.7ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  309.9ms | 309.2ms | 343.0ms |  347.6ms |    6.85x |        0 |      309.9ms |  309.9ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  310.0ms | 307.6ms | 353.3ms |  375.3ms |    6.85x |        0 |      310.0ms |  310.0ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  359.8ms | 304.7ms | 375.8ms | 1355.5ms |    7.95x |        0 |      359.8ms |  359.8ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 含重试总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                       |
| ----------------------------------------------------- | -------- | ---------: | -----------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | ---------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |     97.1ms |       97.1ms |   97.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |     87.2ms |       87.2ms |   87.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |     80.2ms |       80.2ms |   80.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |     86.9ms |       86.9ms |   86.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |     96.1ms |       96.1ms |   96.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |     86.0ms |       86.0ms |   86.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |     77.0ms |       77.0ms |   77.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |     86.6ms |       86.6ms |   86.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite 原生 / JS 文件                             | 产物变化 |     51.4ms |       51.4ms |   51.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`   |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |     47.8ms |       47.8ms |   47.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml` |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |     45.2ms |       45.2ms |   45.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss` |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |     46.9ms |       46.9ms |   46.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json` |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    252.3ms |      252.3ms |  252.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    199.4ms |      199.4ms |  199.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    209.2ms |      209.2ms |  209.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    359.8ms |      359.8ms |  359.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    205.4ms |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    204.7ms |      204.7ms |  204.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    310.0ms |      310.0ms |  310.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    309.9ms |      309.9ms |  309.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / CSS 文件                                  | 产物变化 |    305.7ms |      305.7ms |  305.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`  |
| mpx / template 区块                                   | 产物变化 |    158.8ms |      158.8ms |  158.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / script 区块                                     | 产物变化 |    152.4ms |      152.4ms |  152.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / style 区块                                      | 产物变化 |    133.3ms |      133.3ms |  133.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / 页面配置                                        | 产物变化 |    148.3ms |      148.3ms |  148.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |

## 原始明细

| 场景                                                  | 轮次 | 尝试次数 | 通过 | 采集方式 | HMR 总耗时 | 含重试总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | -------: | ---- | -------- | ---------: | -----------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |    110.7ms |      110.7ms |  110.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    131.5ms |      131.5ms |  131.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |     89.4ms |       89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    100.4ms |      100.4ms |  100.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |     86.2ms |       86.2ms |   86.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    142.0ms |      142.0ms |  142.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |    107.4ms |      107.4ms |  107.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |     77.5ms |       77.5ms |   77.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |     76.5ms |       76.5ms |   76.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |     88.5ms |       88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |     75.1ms |       75.1ms |   75.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    110.2ms |      110.2ms |  110.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |     90.7ms |       90.7ms |   90.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |     87.8ms |       87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |     98.1ms |       98.1ms |   98.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |     97.4ms |       97.4ms |   97.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |     98.7ms |       98.7ms |   98.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |     99.2ms |       99.2ms |   99.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |     88.7ms |       88.7ms |   88.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |     86.6ms |       86.6ms |   86.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |     77.5ms |       77.5ms |   77.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |     76.7ms |       76.7ms |   76.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |     77.9ms |       77.9ms |   77.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |     77.2ms |       77.2ms |   77.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |     88.0ms |       88.0ms |   88.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |     76.6ms |       76.6ms |   76.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |     88.2ms |       88.2ms |   88.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |     75.3ms |       75.3ms |   75.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |     88.2ms |       88.2ms |   88.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |     87.4ms |       87.4ms |   87.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |     75.9ms |       75.9ms |   75.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |     86.4ms |       86.4ms |   86.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |    133.7ms |      133.7ms |  133.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    119.4ms |      119.4ms |  119.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |     97.4ms |       97.4ms |   97.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |     77.1ms |       77.1ms |   77.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |     87.2ms |       87.2ms |   87.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |     88.4ms |       88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |     87.0ms |       87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |     78.5ms |       78.5ms |   78.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |     65.3ms |       65.3ms |   65.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |     76.8ms |       76.8ms |   76.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |     87.9ms |       87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |     66.1ms |       66.1ms |   66.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |     77.1ms |       77.1ms |   77.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |     76.0ms |       76.0ms |   76.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |     66.1ms |       66.1ms |   66.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |     78.9ms |       78.9ms |   78.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    103.4ms |      103.4ms |  103.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |     76.5ms |       76.5ms |   76.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |     76.7ms |       76.7ms |   76.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    108.5ms |      108.5ms |  108.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |     74.8ms |       74.8ms |   74.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |     89.2ms |       89.2ms |   89.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |     76.1ms |       76.1ms |   76.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |     74.2ms |       74.2ms |   74.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |     66.5ms |       66.5ms |   66.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |     77.2ms |       77.2ms |   77.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |     76.3ms |       76.3ms |   76.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |    110.1ms |      110.1ms |  110.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 |        1 | 是   | 产物变化 |     74.3ms |       74.3ms |   74.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 |        1 | 是   | 产物变化 |     76.9ms |       76.9ms |   76.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 |        1 | 是   | 产物变化 |     86.1ms |       86.1ms |   86.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 |        1 | 是   | 产物变化 |     72.2ms |       72.2ms |   72.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 |        1 | 是   | 产物变化 |     87.5ms |       87.5ms |   87.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 |        1 | 是   | 产物变化 |    120.7ms |      120.7ms |  120.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 |        1 | 是   | 产物变化 |     87.9ms |       87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 |        1 | 是   | 产物变化 |     74.3ms |       74.3ms |   74.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 |        1 | 是   | 产物变化 |     76.1ms |       76.1ms |   76.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 |        1 | 是   | 产物变化 |     87.3ms |       87.3ms |   87.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 |        1 | 是   | 产物变化 |     75.4ms |       75.4ms |   75.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 |        1 | 是   | 产物变化 |     85.2ms |       85.2ms |   85.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 |        1 | 是   | 产物变化 |     88.5ms |       88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 |        1 | 是   | 产物变化 |     88.0ms |       88.0ms |   88.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 |        1 | 是   | 产物变化 |    120.0ms |      120.0ms |  120.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 |        1 | 是   | 产物变化 |    109.4ms |      109.4ms |  109.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 |        1 | 是   | 产物变化 |     75.4ms |       75.4ms |   75.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 |        1 | 是   | 产物变化 |     87.9ms |       87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 |        1 | 是   | 产物变化 |     77.3ms |       77.3ms |   77.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 |        1 | 是   | 产物变化 |     87.0ms |       87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 |        1 | 是   | 产物变化 |    109.9ms |      109.9ms |  109.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 |        1 | 是   | 产物变化 |    100.7ms |      100.7ms |  100.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 |        1 | 是   | 产物变化 |    131.6ms |      131.6ms |  131.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 |        1 | 是   | 产物变化 |    109.7ms |      109.7ms |  109.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 |        1 | 是   | 产物变化 |     98.3ms |       98.3ms |   98.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 |        1 | 是   | 产物变化 |     83.6ms |       83.6ms |   83.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 |        1 | 是   | 产物变化 |     87.8ms |       87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 |        1 | 是   | 产物变化 |     99.6ms |       99.6ms |   99.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 |        1 | 是   | 产物变化 |     96.5ms |       96.5ms |   96.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 |        1 | 是   | 产物变化 |     94.9ms |       94.9ms |   94.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 |        1 | 是   | 产物变化 |     87.6ms |       87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 |        1 | 是   | 产物变化 |     77.8ms |       77.8ms |   77.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 |        1 | 是   | 产物变化 |     76.9ms |       76.9ms |   76.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 |        1 | 是   | 产物变化 |     86.6ms |       86.6ms |   86.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 |        1 | 是   | 产物变化 |     77.1ms |       77.1ms |   77.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 |        1 | 是   | 产物变化 |     88.4ms |       88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 |        1 | 是   | 产物变化 |    110.0ms |      110.0ms |  110.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 |        1 | 是   | 产物变化 |     88.9ms |       88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 |        1 | 是   | 产物变化 |    129.8ms |      129.8ms |  129.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 |        1 | 是   | 产物变化 |     87.3ms |       87.3ms |   87.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 |        1 | 是   | 产物变化 |     75.4ms |       75.4ms |   75.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 |        1 | 是   | 产物变化 |     77.2ms |       77.2ms |   77.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 |        1 | 是   | 产物变化 |    108.5ms |      108.5ms |  108.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 |        1 | 是   | 产物变化 |     86.9ms |       86.9ms |   86.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 |        1 | 是   | 产物变化 |     86.8ms |       86.8ms |   86.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 |        1 | 是   | 产物变化 |     86.3ms |       86.3ms |   86.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 |        1 | 是   | 产物变化 |     75.4ms |       75.4ms |   75.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 |        1 | 是   | 产物变化 |     86.9ms |       86.9ms |   86.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 |        1 | 是   | 产物变化 |    123.3ms |      123.3ms |  123.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 |        1 | 是   | 产物变化 |     87.0ms |       87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 |        1 | 是   | 产物变化 |     86.7ms |       86.7ms |   86.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 |        1 | 是   | 产物变化 |     76.0ms |       76.0ms |   76.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 |        1 | 是   | 产物变化 |     87.5ms |       87.5ms |   87.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 |        1 | 是   | 产物变化 |     86.0ms |       86.0ms |   86.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 |        1 | 是   | 产物变化 |     86.0ms |       86.0ms |   86.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 |        1 | 是   | 产物变化 |     87.1ms |       87.1ms |   87.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 |        1 | 是   | 产物变化 |     77.5ms |       77.5ms |   77.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 |        1 | 是   | 产物变化 |     74.8ms |       74.8ms |   74.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 |        1 | 是   | 产物变化 |     77.1ms |       77.1ms |   77.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 |        1 | 是   | 产物变化 |     88.5ms |       88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 |        1 | 是   | 产物变化 |     64.2ms |       64.2ms |   64.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 |        1 | 是   | 产物变化 |     78.0ms |       78.0ms |   78.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 |        1 | 是   | 产物变化 |     65.3ms |       65.3ms |   65.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 |        1 | 是   | 产物变化 |     96.9ms |       96.9ms |   96.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 |        1 | 是   | 产物变化 |     66.1ms |       66.1ms |   66.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 |        1 | 是   | 产物变化 |     75.6ms |       75.6ms |   75.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 |        1 | 是   | 产物变化 |     64.4ms |       64.4ms |   64.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 |        1 | 是   | 产物变化 |     73.2ms |       73.2ms |   73.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 |        1 | 是   | 产物变化 |     74.9ms |       74.9ms |   74.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 |        1 | 是   | 产物变化 |    121.5ms |      121.5ms |  121.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 |        1 | 是   | 产物变化 |     77.2ms |       77.2ms |   77.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 |        1 | 是   | 产物变化 |     74.4ms |       74.4ms |   74.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 |        1 | 是   | 产物变化 |     74.1ms |       74.1ms |   74.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 |        1 | 是   | 产物变化 |     76.2ms |       76.2ms |   76.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 |        1 | 是   | 产物变化 |     74.6ms |       74.6ms |   74.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 |        1 | 是   | 产物变化 |     65.4ms |       65.4ms |   65.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 |        1 | 是   | 产物变化 |     89.4ms |       89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 |        1 | 是   | 产物变化 |     76.3ms |       76.3ms |   76.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 |        1 | 是   | 产物变化 |     75.5ms |       75.5ms |   75.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 |        1 | 是   | 产物变化 |     76.1ms |       76.1ms |   76.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 |        1 | 是   | 产物变化 |     77.4ms |       77.4ms |   77.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 |        1 | 是   | 产物变化 |     87.7ms |       87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 |        1 | 是   | 产物变化 |     88.4ms |       88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 |        1 | 是   | 产物变化 |     88.4ms |       88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 |        1 | 是   | 产物变化 |     75.9ms |       75.9ms |   75.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 |        1 | 是   | 产物变化 |     77.3ms |       77.3ms |   77.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 |        1 | 是   | 产物变化 |     88.8ms |       88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 |        1 | 是   | 产物变化 |     85.4ms |       85.4ms |   85.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 |        1 | 是   | 产物变化 |     76.1ms |       76.1ms |   76.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 |        1 | 是   | 产物变化 |     88.9ms |       88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 |        1 | 是   | 产物变化 |     76.3ms |       76.3ms |   76.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 |        1 | 是   | 产物变化 |    134.5ms |      134.5ms |  134.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 |        1 | 是   | 产物变化 |     72.5ms |       72.5ms |   72.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 |        1 | 是   | 产物变化 |     88.4ms |       88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 |        1 | 是   | 产物变化 |     87.9ms |       87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 |        1 | 是   | 产物变化 |     88.1ms |       88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 |        1 | 是   | 产物变化 |     89.3ms |       89.3ms |   89.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 |        1 | 是   | 产物变化 |     76.2ms |       76.2ms |   76.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 |        1 | 是   | 产物变化 |     86.5ms |       86.5ms |   86.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 |        1 | 是   | 产物变化 |     98.6ms |       98.6ms |   98.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 |        1 | 是   | 产物变化 |     44.5ms |       44.5ms |   44.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 |        1 | 是   | 产物变化 |     55.5ms |       55.5ms |   55.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 |        1 | 是   | 产物变化 |     42.7ms |       42.7ms |   42.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 |        1 | 是   | 产物变化 |     58.4ms |       58.4ms |   58.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 |        1 | 是   | 产物变化 |     56.7ms |       56.7ms |   56.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 |        1 | 是   | 产物变化 |     57.3ms |       57.3ms |   57.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 |        1 | 是   | 产物变化 |     57.9ms |       57.9ms |   57.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 |        1 | 是   | 产物变化 |     43.2ms |       43.2ms |   43.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 |        1 | 是   | 产物变化 |     44.7ms |       44.7ms |   44.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 |        1 | 是   | 产物变化 |     43.8ms |       43.8ms |   43.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 |        1 | 是   | 产物变化 |     46.2ms |       46.2ms |   46.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 |        1 | 是   | 产物变化 |     53.7ms |       53.7ms |   53.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 |        1 | 是   | 产物变化 |     43.4ms |       43.4ms |   43.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 |        1 | 是   | 产物变化 |     43.3ms |       43.3ms |   43.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 |        1 | 是   | 产物变化 |     43.9ms |       43.9ms |   43.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 |        1 | 是   | 产物变化 |     44.5ms |       44.5ms |   44.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 |        1 | 是   | 产物变化 |     55.7ms |       55.7ms |   55.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 |        1 | 是   | 产物变化 |     57.3ms |       57.3ms |   57.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 |        1 | 是   | 产物变化 |     56.9ms |       56.9ms |   56.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 |        1 | 是   | 产物变化 |     78.1ms |       78.1ms |   78.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 |        1 | 是   | 产物变化 |     43.7ms |       43.7ms |   43.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 |        1 | 是   | 产物变化 |     42.8ms |       42.8ms |   42.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 |        1 | 是   | 产物变化 |     44.4ms |       44.4ms |   44.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 |        1 | 是   | 产物变化 |     60.6ms |       60.6ms |   60.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 |        1 | 是   | 产物变化 |     44.9ms |       44.9ms |   44.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 |        1 | 是   | 产物变化 |     57.1ms |       57.1ms |   57.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 |        1 | 是   | 产物变化 |     43.0ms |       43.0ms |   43.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 |        1 | 是   | 产物变化 |     44.6ms |       44.6ms |   44.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 |        1 | 是   | 产物变化 |     45.3ms |       45.3ms |   45.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 |        1 | 是   | 产物变化 |     45.1ms |       45.1ms |   45.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 |        1 | 是   | 产物变化 |     50.5ms |       50.5ms |   50.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 |        1 | 是   | 产物变化 |     45.2ms |       45.2ms |   45.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 |        1 | 是   | 产物变化 |     47.2ms |       47.2ms |   47.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 |        1 | 是   | 产物变化 |     42.3ms |       42.3ms |   42.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 |        1 | 是   | 产物变化 |     53.8ms |       53.8ms |   53.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 |        1 | 是   | 产物变化 |     54.2ms |       54.2ms |   54.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 |        1 | 是   | 产物变化 |     47.2ms |       47.2ms |   47.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 |        1 | 是   | 产物变化 |     44.3ms |       44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 |        1 | 是   | 产物变化 |     44.7ms |       44.7ms |   44.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 |        1 | 是   | 产物变化 |     55.9ms |       55.9ms |   55.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 |        1 | 是   | 产物变化 |     32.6ms |       32.6ms |   32.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 |        1 | 是   | 产物变化 |     44.4ms |       44.4ms |   44.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 |        1 | 是   | 产物变化 |     44.9ms |       44.9ms |   44.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 |        1 | 是   | 产物变化 |     34.0ms |       34.0ms |   34.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 |        1 | 是   | 产物变化 |     42.5ms |       42.5ms |   42.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 |        1 | 是   | 产物变化 |     32.8ms |       32.8ms |   32.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 |        1 | 是   | 产物变化 |     43.7ms |       43.7ms |   43.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 |        1 | 是   | 产物变化 |     43.8ms |       43.8ms |   43.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 |        1 | 是   | 产物变化 |     56.1ms |       56.1ms |   56.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 |        1 | 是   | 产物变化 |     58.0ms |       58.0ms |   58.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 |        1 | 是   | 产物变化 |     34.1ms |       34.1ms |   34.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 |        1 | 是   | 产物变化 |     44.7ms |       44.7ms |   44.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 |        1 | 是   | 产物变化 |     45.8ms |       45.8ms |   45.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 |        1 | 是   | 产物变化 |     57.9ms |       57.9ms |   57.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 |        1 | 是   | 产物变化 |     43.6ms |       43.6ms |   43.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 |        1 | 是   | 产物变化 |     59.2ms |       59.2ms |   59.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 |        1 | 是   | 产物变化 |     54.9ms |       54.9ms |   54.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 |        1 | 是   | 产物变化 |     42.3ms |       42.3ms |   42.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 |        1 | 是   | 产物变化 |     44.8ms |       44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 |        1 | 是   | 产物变化 |     44.5ms |       44.5ms |   44.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 |        1 | 是   | 产物变化 |     33.6ms |       33.6ms |   33.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 |        1 | 是   | 产物变化 |     44.2ms |       44.2ms |   44.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 |        1 | 是   | 产物变化 |     42.9ms |       42.9ms |   42.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 |        1 | 是   | 产物变化 |     34.2ms |       34.2ms |   34.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 |        1 | 是   | 产物变化 |     48.4ms |       48.4ms |   48.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 |        1 | 是   | 产物变化 |     46.6ms |       46.6ms |   46.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 |        1 | 是   | 产物变化 |     45.0ms |       45.0ms |   45.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 |        1 | 是   | 产物变化 |     44.5ms |       44.5ms |   44.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 |        1 | 是   | 产物变化 |     45.7ms |       45.7ms |   45.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 |        1 | 是   | 产物变化 |     44.8ms |       44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 |        1 | 是   | 产物变化 |     46.8ms |       46.8ms |   46.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 |        1 | 是   | 产物变化 |     68.0ms |       68.0ms |   68.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 |        1 | 是   | 产物变化 |     70.3ms |       70.3ms |   70.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 |        1 | 是   | 产物变化 |     32.0ms |       32.0ms |   32.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 |        1 | 是   | 产物变化 |     56.3ms |       56.3ms |   56.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 |        1 | 是   | 产物变化 |     44.8ms |       44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 |        1 | 是   | 产物变化 |     42.2ms |       42.2ms |   42.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 |        1 | 是   | 产物变化 |     69.8ms |       69.8ms |   69.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 |        1 | 是   | 产物变化 |     33.4ms |       33.4ms |   33.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 |        1 | 是   | 产物变化 |     44.0ms |       44.0ms |   44.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |   1122.7ms |     1122.7ms | 1122.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    199.4ms |      199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |    198.8ms |      198.8ms |  198.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    198.4ms |      198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |    185.0ms |      185.0ms |  185.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    199.3ms |      199.3ms |  199.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |    199.2ms |      199.2ms |  199.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |    302.9ms |      302.9ms |  302.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |    309.4ms |      309.4ms |  309.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |    189.3ms |      189.3ms |  189.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |    176.4ms |      176.4ms |  176.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    187.6ms |      187.6ms |  187.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |    188.2ms |      188.2ms |  188.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |    199.1ms |      199.1ms |  199.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    189.1ms |      189.1ms |  189.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |    184.4ms |      184.4ms |  184.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |    165.5ms |      165.5ms |  165.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    275.6ms |      275.6ms |  275.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |    177.7ms |      177.7ms |  177.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |    198.3ms |      198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |    272.4ms |      272.4ms |  272.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |    188.2ms |      188.2ms |  188.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |    176.7ms |      176.7ms |  176.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |    185.6ms |      185.6ms |  185.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |    208.0ms |      208.0ms |  208.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |    186.3ms |      186.3ms |  186.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |    176.4ms |      176.4ms |  176.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |    276.5ms |      276.5ms |  276.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |    176.4ms |      176.4ms |  176.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |    274.5ms |      274.5ms |  274.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    197.1ms |      197.1ms |  197.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |    221.8ms |      221.8ms |  221.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |    175.0ms |      175.0ms |  175.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    174.4ms |      174.4ms |  174.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |    176.8ms |      176.8ms |  176.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |    174.5ms |      174.5ms |  174.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    187.9ms |      187.9ms |  187.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |    186.6ms |      186.6ms |  186.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |    186.2ms |      186.2ms |  186.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |    187.1ms |      187.1ms |  187.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |    262.5ms |      262.5ms |  262.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |    284.1ms |      284.1ms |  284.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |    196.4ms |      196.4ms |  196.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |    185.6ms |      185.6ms |  185.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |    183.3ms |      183.3ms |  183.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |    175.2ms |      175.2ms |  175.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |    184.4ms |      184.4ms |  184.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |    188.3ms |      188.3ms |  188.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    195.7ms |      195.7ms |  195.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |    184.3ms |      184.3ms |  184.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |    186.4ms |      186.4ms |  186.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    175.3ms |      175.3ms |  175.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    375.1ms |      375.1ms |  375.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |    204.4ms |      204.4ms |  204.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |    187.1ms |      187.1ms |  187.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |    177.4ms |      177.4ms |  177.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |    186.6ms |      186.6ms |  186.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    277.0ms |      277.0ms |  277.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |    184.9ms |      184.9ms |  184.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |    190.4ms |      190.4ms |  190.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |   1355.5ms |     1355.5ms | 1355.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    375.8ms |      375.8ms |  375.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    300.4ms |      300.4ms |  300.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    287.3ms |      287.3ms |  287.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    296.7ms |      296.7ms |  296.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    341.5ms |      341.5ms |  341.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    299.9ms |      299.9ms |  299.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    309.0ms |      309.0ms |  309.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    318.6ms |      318.6ms |  318.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    275.6ms |      275.6ms |  275.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    286.1ms |      286.1ms |  286.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    313.0ms |      313.0ms |  313.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    321.1ms |      321.1ms |  321.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    310.2ms |      310.2ms |  310.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    295.7ms |      295.7ms |  295.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    318.8ms |      318.8ms |  318.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    298.1ms |      298.1ms |  298.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    284.2ms |      284.2ms |  284.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    309.8ms |      309.8ms |  309.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    298.4ms |      298.4ms |  298.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    219.5ms |      219.5ms |  219.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    187.2ms |      187.2ms |  187.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    209.4ms |      209.4ms |  209.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    197.3ms |      197.3ms |  197.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    205.6ms |      205.6ms |  205.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    208.6ms |      208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    188.3ms |      188.3ms |  188.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    208.1ms |      208.1ms |  208.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    239.8ms |      239.8ms |  239.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    208.3ms |      208.3ms |  208.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    198.3ms |      198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    197.9ms |      197.9ms |  197.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    196.3ms |      196.3ms |  196.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    209.9ms |      209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    198.1ms |      198.1ms |  198.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    197.0ms |      197.0ms |  197.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    206.3ms |      206.3ms |  206.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    196.9ms |      196.9ms |  196.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    207.6ms |      207.6ms |  207.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    228.1ms |      228.1ms |  228.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 |        1 | 是   | 产物变化 |    197.0ms |      197.0ms |  197.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 |        1 | 是   | 产物变化 |    199.4ms |      199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 |        1 | 是   | 产物变化 |    198.4ms |      198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 |        1 | 是   | 产物变化 |    209.0ms |      209.0ms |  209.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 |        1 | 是   | 产物变化 |    197.7ms |      197.7ms |  197.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 |        1 | 是   | 产物变化 |    251.0ms |      251.0ms |  251.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 |        1 | 是   | 产物变化 |    209.0ms |      209.0ms |  209.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 |        1 | 是   | 产物变化 |    200.8ms |      200.8ms |  200.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 |        1 | 是   | 产物变化 |    194.9ms |      194.9ms |  194.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 |        1 | 是   | 产物变化 |    196.9ms |      196.9ms |  196.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 |        1 | 是   | 产物变化 |    209.0ms |      209.0ms |  209.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 |        1 | 是   | 产物变化 |    195.7ms |      195.7ms |  195.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 |        1 | 是   | 产物变化 |    221.8ms |      221.8ms |  221.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 |        1 | 是   | 产物变化 |    207.8ms |      207.8ms |  207.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 |        1 | 是   | 产物变化 |    188.0ms |      188.0ms |  188.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 |        1 | 是   | 产物变化 |    187.5ms |      187.5ms |  187.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 |        1 | 是   | 产物变化 |    208.9ms |      208.9ms |  208.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 |        1 | 是   | 产物变化 |    207.5ms |      207.5ms |  207.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 |        1 | 是   | 产物变化 |    185.2ms |      185.2ms |  185.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 |        1 | 是   | 产物变化 |    229.2ms |      229.2ms |  229.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |    288.1ms |      288.1ms |  288.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    296.3ms |      296.3ms |  296.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    341.3ms |      341.3ms |  341.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    298.6ms |      298.6ms |  298.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    317.7ms |      317.7ms |  317.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    307.6ms |      307.6ms |  307.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    315.2ms |      315.2ms |  315.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    298.0ms |      298.0ms |  298.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    375.3ms |      375.3ms |  375.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    254.3ms |      254.3ms |  254.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    288.1ms |      288.1ms |  288.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    315.7ms |      315.7ms |  315.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    299.5ms |      299.5ms |  299.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    322.5ms |      322.5ms |  322.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    332.7ms |      332.7ms |  332.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    284.1ms |      284.1ms |  284.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    308.9ms |      308.9ms |  308.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    307.7ms |      307.7ms |  307.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    296.1ms |      296.1ms |  296.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    353.3ms |      353.3ms |  353.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    309.1ms |      309.1ms |  309.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    347.6ms |      347.6ms |  347.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    297.8ms |      297.8ms |  297.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    309.3ms |      309.3ms |  309.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    251.3ms |      251.3ms |  251.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    328.8ms |      328.8ms |  328.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    304.6ms |      304.6ms |  304.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    307.0ms |      307.0ms |  307.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    318.8ms |      318.8ms |  318.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    241.3ms |      241.3ms |  241.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    343.0ms |      343.0ms |  343.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    310.9ms |      310.9ms |  310.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    297.6ms |      297.6ms |  297.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    306.8ms |      306.8ms |  306.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    329.2ms |      329.2ms |  329.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    307.0ms |      307.0ms |  307.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    333.5ms |      333.5ms |  333.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    335.5ms |      335.5ms |  335.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    317.1ms |      317.1ms |  317.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    301.5ms |      301.5ms |  301.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 |        1 | 是   | 产物变化 |    296.1ms |      296.1ms |  296.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 |        1 | 是   | 产物变化 |    303.4ms |      303.4ms |  303.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 |        1 | 是   | 产物变化 |    308.0ms |      308.0ms |  308.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 |        1 | 是   | 产物变化 |    305.4ms |      305.4ms |  305.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 |        1 | 是   | 产物变化 |    297.1ms |      297.1ms |  297.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 |        1 | 是   | 产物变化 |    338.9ms |      338.9ms |  338.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 |        1 | 是   | 产物变化 |    306.1ms |      306.1ms |  306.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 |        1 | 是   | 产物变化 |    318.1ms |      318.1ms |  318.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 |        1 | 是   | 产物变化 |    318.9ms |      318.9ms |  318.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 |        1 | 是   | 产物变化 |    299.3ms |      299.3ms |  299.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 |        1 | 是   | 产物变化 |    295.4ms |      295.4ms |  295.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 |        1 | 是   | 产物变化 |    318.0ms |      318.0ms |  318.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 |        1 | 是   | 产物变化 |    240.2ms |      240.2ms |  240.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 |        1 | 是   | 产物变化 |    295.0ms |      295.0ms |  295.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 |        1 | 是   | 产物变化 |    330.2ms |      330.2ms |  330.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 |        1 | 是   | 产物变化 |    281.2ms |      281.2ms |  281.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 |        1 | 是   | 产物变化 |    294.7ms |      294.7ms |  294.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 |        1 | 是   | 产物变化 |    307.5ms |      307.5ms |  307.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 |        1 | 是   | 产物变化 |    328.7ms |      328.7ms |  328.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 |        1 | 是   | 产物变化 |    331.6ms |      331.6ms |  331.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 |        1 | 是   | 产物变化 |    219.3ms |      219.3ms |  219.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 |        1 | 是   | 产物变化 |    152.6ms |      152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 |        1 | 是   | 产物变化 |    164.0ms |      164.0ms |  164.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 |        1 | 是   | 产物变化 |    184.9ms |      184.9ms |  184.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 |        1 | 是   | 产物变化 |    152.6ms |      152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 |        1 | 是   | 产物变化 |    155.9ms |      155.9ms |  155.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 |        1 | 是   | 产物变化 |    177.4ms |      177.4ms |  177.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 |        1 | 是   | 产物变化 |    175.9ms |      175.9ms |  175.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 |        1 | 是   | 产物变化 |    143.2ms |      143.2ms |  143.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 |        1 | 是   | 产物变化 |    152.6ms |      152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 |        1 | 是   | 产物变化 |    151.1ms |      151.1ms |  151.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 |        1 | 是   | 产物变化 |    155.6ms |      155.6ms |  155.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 |        1 | 是   | 产物变化 |    154.9ms |      154.9ms |  154.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 |        1 | 是   | 产物变化 |    131.4ms |      131.4ms |  131.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 |        1 | 是   | 产物变化 |    152.1ms |      152.1ms |  152.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 |        1 | 是   | 产物变化 |    195.8ms |      195.8ms |  195.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 |        1 | 是   | 产物变化 |    129.5ms |      129.5ms |  129.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 |        1 | 是   | 产物变化 |    153.7ms |      153.7ms |  153.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 |        1 | 是   | 产物变化 |    118.5ms |      118.5ms |  118.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 |        1 | 是   | 产物变化 |    155.1ms |      155.1ms |  155.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 |        1 | 是   | 产物变化 |    153.5ms |      153.5ms |  153.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 |        1 | 是   | 产物变化 |    141.1ms |      141.1ms |  141.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 |        1 | 是   | 产物变化 |    166.6ms |      166.6ms |  166.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 |        1 | 是   | 产物变化 |    162.9ms |      162.9ms |  162.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 |        1 | 是   | 产物变化 |    167.6ms |      167.6ms |  167.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 |        1 | 是   | 产物变化 |    152.3ms |      152.3ms |  152.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 |        1 | 是   | 产物变化 |    120.0ms |      120.0ms |  120.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 |        1 | 是   | 产物变化 |    167.0ms |      167.0ms |  167.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 |        1 | 是   | 产物变化 |    173.5ms |      173.5ms |  173.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 |        1 | 是   | 产物变化 |    121.3ms |      121.3ms |  121.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 |        1 | 是   | 产物变化 |    185.5ms |      185.5ms |  185.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 |        1 | 是   | 产物变化 |    145.9ms |      145.9ms |  145.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 |        1 | 是   | 产物变化 |    128.5ms |      128.5ms |  128.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 |        1 | 是   | 产物变化 |    118.4ms |      118.4ms |  118.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 |        1 | 是   | 产物变化 |    120.8ms |      120.8ms |  120.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 |        1 | 是   | 产物变化 |    209.2ms |      209.2ms |  209.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 |        1 | 是   | 产物变化 |    154.2ms |      154.2ms |  154.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 |        1 | 是   | 产物变化 |    131.0ms |      131.0ms |  131.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 |        1 | 是   | 产物变化 |    176.4ms |      176.4ms |  176.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 |        1 | 是   | 产物变化 |    151.6ms |      151.6ms |  151.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 |        1 | 是   | 产物变化 |    152.6ms |      152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 |        1 | 是   | 产物变化 |    122.0ms |      122.0ms |  122.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 |        1 | 是   | 产物变化 |    163.6ms |      163.6ms |  163.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 |        1 | 是   | 产物变化 |    119.5ms |      119.5ms |  119.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 |        1 | 是   | 产物变化 |    142.0ms |      142.0ms |  142.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 |        1 | 是   | 产物变化 |    152.2ms |      152.2ms |  152.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 |        1 | 是   | 产物变化 |    152.4ms |      152.4ms |  152.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 |        1 | 是   | 产物变化 |    118.1ms |      118.1ms |  118.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 |        1 | 是   | 产物变化 |    119.8ms |      119.8ms |  119.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 |        1 | 是   | 产物变化 |    119.4ms |      119.4ms |  119.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 |        1 | 是   | 产物变化 |    162.2ms |      162.2ms |  162.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 |        1 | 是   | 产物变化 |    141.9ms |      141.9ms |  141.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 |        1 | 是   | 产物变化 |    128.0ms |      128.0ms |  128.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 |        1 | 是   | 产物变化 |    122.8ms |      122.8ms |  122.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 |        1 | 是   | 产物变化 |    133.2ms |      133.2ms |  133.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 |        1 | 是   | 产物变化 |    143.5ms |      143.5ms |  143.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 |        1 | 是   | 产物变化 |    109.5ms |      109.5ms |  109.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 |        1 | 是   | 产物变化 |    110.7ms |      110.7ms |  110.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 |        1 | 是   | 产物变化 |    120.2ms |      120.2ms |  120.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 |        1 | 是   | 产物变化 |    131.8ms |      131.8ms |  131.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 |        1 | 是   | 产物变化 |    140.7ms |      140.7ms |  140.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 |        1 | 是   | 产物变化 |    152.2ms |      152.2ms |  152.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 |        1 | 是   | 产物变化 |    152.0ms |      152.0ms |  152.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 |        1 | 是   | 产物变化 |    165.1ms |      165.1ms |  165.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 |        1 | 是   | 产物变化 |    154.3ms |      154.3ms |  154.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 |        1 | 是   | 产物变化 |    153.7ms |      153.7ms |  153.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 |        1 | 是   | 产物变化 |    122.1ms |      122.1ms |  122.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 |        1 | 是   | 产物变化 |    141.1ms |      141.1ms |  141.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 |        1 | 是   | 产物变化 |    163.5ms |      163.5ms |  163.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 |        1 | 是   | 产物变化 |    120.9ms |      120.9ms |  120.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 |        1 | 是   | 产物变化 |    119.7ms |      119.7ms |  119.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 |        1 | 是   | 产物变化 |    130.9ms |      130.9ms |  130.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 |        1 | 是   | 产物变化 |    186.4ms |      186.4ms |  186.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 |        1 | 是   | 产物变化 |    153.1ms |      153.1ms |  153.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 |        1 | 是   | 产物变化 |    153.6ms |      153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 |        1 | 是   | 产物变化 |    197.7ms |      197.7ms |  197.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 |        1 | 是   | 产物变化 |    165.9ms |      165.9ms |  165.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 |        1 | 是   | 产物变化 |    119.6ms |      119.6ms |  119.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 |        1 | 是   | 产物变化 |    120.3ms |      120.3ms |  120.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 |        1 | 是   | 产物变化 |    153.7ms |      153.7ms |  153.7ms |        - |    - |    - |        - |          - |        |          |

说明：

- 正式排名要求样本完整且没有重试；平均值、中位数、P95 和最大值共同用于识别长尾。
- 所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。
- 本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景按 watch 链路实际支持情况覆盖 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- Taro watch 模式不会因页面 .config.ts 变化重新生成页面 JSON，因此该格按不支持处理并显示为 N/A。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
- HMR 产物变化轮询间隔默认是 10ms，可通过 BENCH_HMR_POLL_INTERVAL 覆盖。
- HMR 单轮最多尝试 1 次，重试会写入 attempts 字段；可通过 BENCH_HMR_ITERATION_ATTEMPTS 覆盖。
- 任何重试都会把场景标记为降级并移出正式排名，命令也会返回失败，避免隐藏超时污染性能结论。
