# HMR 基准报告

生成时间：2026-05-31T05:32:39.783Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 一眼结论

- HMR 最快：weapp-vite 原生 / JSON 文件，平均 12.1ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 493.4ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：weapp-vite 使用内部 profile；其他框架使用源文件写入到目标产物更新的墙钟耗时，因此阶段列只在 weapp-vite 场景有值。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式     | 平均 HMR | 相对最快 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | ------------ | -------: | -------: | -------: | -------: | -----: | ----: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   12.1ms |    1.00x |  202.7ms |    9.9ms |  0.1ms | 0.5ms |    1.2ms |          - |        1.0 |          1.0 |
|    2 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   12.3ms |    1.02x |  202.5ms |    9.9ms |  0.1ms | 0.7ms |    0.3ms |          - |        1.0 |          1.0 |
|    3 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   12.8ms |    1.06x |  202.8ms |   10.8ms |  0.1ms | 0.5ms |    1.0ms |          - |        1.0 |          1.0 |
|    4 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 内部 profile |   24.7ms |    2.05x |  202.3ms |   23.4ms |  2.0ms | 0.6ms |    0.3ms |          - |        1.0 |          1.0 |
|    5 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化     |   54.2ms |    4.49x |   54.2ms |        - |      - |     - |        - |          - |          - |            - |
|    6 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化     |   57.0ms |    4.72x |   57.0ms |        - |      - |     - |        - |          - |          - |            - |
|    7 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化     |   75.9ms |    6.28x |   75.9ms |        - |      - |     - |        - |          - |          - |            - |
|    8 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化     |   88.8ms |    7.35x |   88.8ms |        - |      - |     - |        - |          - |          - |            - |
|    9 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 内部 profile |  156.0ms |   12.90x |  405.2ms |  152.5ms |  7.2ms | 0.8ms |    0.2ms |      0.0ms |        1.0 |          1.0 |
|   10 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化     |  164.0ms |   13.57x |  164.0ms |        - |      - |     - |        - |          - |          - |            - |
|   11 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 内部 profile |  171.7ms |   14.21x |  404.7ms |  152.2ms |  6.6ms | 0.7ms |   14.7ms |      0.0ms |        1.0 |          1.0 |
|   12 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  172.3ms |   14.25x |  405.0ms |  153.7ms |  5.7ms | 0.9ms |   13.9ms |      0.0ms |        1.0 |          1.0 |
|   13 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  178.0ms |   14.73x |  405.0ms |  159.6ms |  6.1ms | 0.8ms |   14.0ms |      0.0ms |        1.0 |          1.0 |
|   14 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化     |  180.4ms |   14.93x |  180.4ms |        - |      - |     - |        - |          - |          - |            - |
|   15 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  188.6ms |   15.61x |  425.3ms |  185.7ms |  6.6ms | 0.8ms |    0.2ms |      0.0ms |        1.0 |          1.0 |
|   16 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 内部 profile |  193.2ms |   15.99x |  405.2ms |  187.3ms | 75.5ms | 1.6ms |    0.7ms |      0.0ms |        1.0 |          3.0 |
|   17 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 内部 profile |  194.1ms |   16.06x |  425.0ms |  172.5ms |  7.2ms | 1.2ms |   16.9ms |      0.0ms |        1.0 |          1.0 |
|   18 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  211.2ms |   17.48x |  405.2ms |  205.3ms | 77.8ms | 1.7ms |    0.8ms |      0.0ms |        1.0 |          3.0 |
|   19 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化     |  212.8ms |   17.61x |  212.8ms |        - |      - |     - |        - |          - |          - |            - |
|   20 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化     |  215.4ms |   17.82x |  215.4ms |        - |      - |     - |        - |          - |          - |            - |
|   21 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化     |  216.3ms |   17.90x |  216.3ms |        - |      - |     - |        - |          - |          - |            - |
|   22 | taro vue3 / 页面配置                                  | taro vue3                     | Vue SFC  | 产物变化     |  324.9ms |   26.88x |  324.9ms |        - |      - |     - |        - |          - |          - |            - |
|   23 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化     |  325.4ms |   26.92x |  325.4ms |        - |      - |     - |        - |          - |          - |            - |
|   24 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化     |  338.1ms |   27.97x |  338.1ms |        - |      - |     - |        - |          - |          - |            - |
|   25 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化     |  340.5ms |   28.17x |  340.5ms |        - |      - |     - |        - |          - |          - |            - |
|   26 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化     |  493.4ms |   40.82x |  493.4ms |        - |      - |     - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式     | HMR 总耗时 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                            |
| ----------------------------------------------------- | ------------ | ---------: | -------: | -------: | -----: | ----: | -------: | ---------: | -----: | -------: | --------------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 内部 profile |    193.2ms |  405.2ms |  187.3ms | 75.5ms | 1.6ms |    0.7ms |      0.0ms |    1.0 |      3.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC template 区块             | 内部 profile |    194.1ms |  425.0ms |  172.5ms |  7.2ms | 1.2ms |   16.9ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC style 区块                | 内部 profile |    171.7ms |  404.7ms |  152.2ms |  6.6ms | 0.7ms |   14.7ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC 页面配置                  | 内部 profile |    156.0ms |  405.2ms |  152.5ms |  7.2ms | 0.8ms |    0.2ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC script 区块   | 内部 profile |    211.2ms |  405.2ms |  205.3ms | 77.8ms | 1.7ms |    0.8ms |      0.0ms |    1.0 |      3.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC template 区块 | 内部 profile |    178.0ms |  405.0ms |  159.6ms |  6.1ms | 0.8ms |   14.0ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC style 区块    | 内部 profile |    172.3ms |  405.0ms |  153.7ms |  5.7ms | 0.9ms |   13.9ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 内部 profile |    188.6ms |  425.3ms |  185.7ms |  6.6ms | 0.8ms |    0.2ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite 原生 / JS 文件                             | 内部 profile |     24.7ms |  202.3ms |   23.4ms |  2.0ms | 0.6ms |    0.3ms |          - |    1.0 |      1.0 | `src/pages/index/index.js`        |
| weapp-vite 原生 / WXML 文件                           | 内部 profile |     12.3ms |  202.5ms |    9.9ms |  0.1ms | 0.7ms |    0.3ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxml`      |
| weapp-vite 原生 / WXSS 文件                           | 内部 profile |     12.8ms |  202.8ms |   10.8ms |  0.1ms | 0.5ms |    1.0ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxss`      |
| weapp-vite 原生 / JSON 文件                           | 内部 profile |     12.1ms |  202.7ms |    9.9ms |  0.1ms | 0.5ms |    1.2ms |          - |    1.0 |      1.0 | `src/pages/index/index.json`      |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化     |    215.4ms |  215.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化     |    180.4ms |  180.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化     |    164.0ms |  164.0ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC script 区块                       | 产物变化     |    493.4ms |  493.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC template 区块                     | 产物变化     |    216.3ms |  216.3ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC style 区块                        | 产物变化     |    212.8ms |  212.8ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC script 区块                       | 产物变化     |    340.5ms |  340.5ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC template 区块                     | 产物变化     |    338.1ms |  338.1ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / CSS 文件                                  | 产物变化     |    325.4ms |  325.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.css`       |
| taro vue3 / 页面配置                                  | 产物变化     |    324.9ms |  324.9ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.config.ts` |
| mpx / template 区块                                   | 产物变化     |     88.8ms |   88.8ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / script 区块                                     | 产物变化     |     75.9ms |   75.9ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / style 区块                                      | 产物变化     |     54.2ms |   54.2ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / 页面配置                                        | 产物变化     |     57.0ms |   57.0ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |

## 原始明细

| 场景                                                  | 轮次 | 通过 | 采集方式     | HMR 总耗时 | 外部等待 | 构建核心 |    转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | ---- | ------------ | ---------: | -------: | -------: | ------: | ----: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 | 是   | 内部 profile |    217.8ms |  404.4ms |  201.5ms |  74.7ms | 1.6ms |    8.8ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    2 | 是   | 内部 profile |    195.8ms |  406.3ms |  190.7ms |  76.9ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    3 | 是   | 内部 profile |    185.9ms |  404.9ms |  176.7ms |  62.4ms | 1.4ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    4 | 是   | 内部 profile |    182.2ms |  404.0ms |  177.6ms |  55.7ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    5 | 是   | 内部 profile |    198.7ms |  404.8ms |  193.7ms |  80.7ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    6 | 是   | 内部 profile |    189.7ms |  406.3ms |  184.7ms |  81.4ms | 1.4ms |    0.6ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    7 | 是   | 内部 profile |    248.6ms |  404.4ms |  242.5ms |  87.9ms | 2.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    8 | 是   | 内部 profile |    188.7ms |  404.7ms |  183.5ms |  69.3ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    9 | 是   | 内部 profile |    179.7ms |  404.3ms |  174.5ms |  73.4ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   10 | 是   | 内部 profile |    193.9ms |  407.9ms |  188.8ms |  59.6ms | 1.4ms |    0.4ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   11 | 是   | 内部 profile |    184.0ms |  404.9ms |  179.0ms |  79.4ms | 1.3ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   12 | 是   | 内部 profile |    190.9ms |  404.8ms |  185.8ms |  83.1ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   13 | 是   | 内部 profile |    192.2ms |  404.8ms |  186.1ms |  72.7ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   14 | 是   | 内部 profile |    192.0ms |  405.3ms |  186.3ms |  93.4ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   15 | 是   | 内部 profile |    181.4ms |  404.4ms |  176.2ms |  69.9ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   16 | 是   | 内部 profile |    192.2ms |  405.4ms |  187.3ms |  96.3ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   17 | 是   | 内部 profile |    182.2ms |  405.8ms |  177.1ms |  72.0ms | 1.5ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   18 | 是   | 内部 profile |    183.3ms |  404.8ms |  178.8ms |  77.9ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   19 | 是   | 内部 profile |    198.6ms |  406.7ms |  193.9ms |  70.8ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   20 | 是   | 内部 profile |    186.8ms |  405.8ms |  182.1ms |  72.4ms | 1.4ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC template 区块             |    1 | 是   | 内部 profile |    156.4ms |  406.5ms |  138.9ms |   5.9ms | 1.0ms |   13.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    2 | 是   | 内部 profile |    168.7ms |  403.8ms |  153.3ms |   5.5ms | 0.6ms |   12.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    3 | 是   | 内部 profile |    159.9ms |  407.0ms |  143.5ms |   6.9ms | 1.3ms |   11.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    4 | 是   | 内部 profile |    162.9ms |  405.2ms |  145.3ms |   6.5ms | 1.1ms |   13.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    5 | 是   | 内部 profile |    176.1ms |  406.2ms |  150.4ms |   7.2ms | 0.9ms |   21.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    6 | 是   | 内部 profile |    152.5ms |  403.9ms |  138.8ms |   6.9ms | 0.8ms |   10.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    7 | 是   | 内部 profile |    156.3ms |  406.3ms |  140.8ms |   6.3ms | 0.7ms |   11.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    8 | 是   | 内部 profile |    169.8ms |  403.8ms |  143.5ms |   6.2ms | 1.1ms |   22.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    9 | 是   | 内部 profile |    153.2ms |  405.9ms |  136.2ms |   6.3ms | 0.7ms |   13.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   10 | 是   | 内部 profile |    159.3ms |  404.1ms |  144.1ms |   5.6ms | 0.7ms |   11.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   11 | 是   | 内部 profile |    631.2ms |  808.1ms |  553.1ms |   7.6ms | 1.2ms |   73.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   12 | 是   | 内部 profile |    198.2ms |  402.3ms |  182.5ms |  18.7ms | 1.0ms |   11.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   13 | 是   | 内部 profile |    175.5ms |  406.3ms |  155.5ms |   9.0ms | 3.9ms |   13.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   14 | 是   | 内部 profile |    189.3ms |  403.8ms |  159.0ms |   7.7ms | 2.6ms |   23.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   15 | 是   | 内部 profile |    156.6ms |  405.3ms |  141.1ms |   6.3ms | 0.6ms |   10.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   16 | 是   | 内部 profile |    178.4ms |  405.1ms |  154.8ms |   6.7ms | 0.8ms |   19.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   17 | 是   | 内部 profile |    173.7ms |  404.5ms |  157.7ms |   6.4ms | 2.3ms |   10.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   18 | 是   | 内部 profile |    167.5ms |  404.5ms |  151.3ms |   6.1ms | 0.7ms |   12.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   19 | 是   | 内部 profile |    239.9ms |  404.6ms |  225.5ms |   5.6ms | 0.9ms |   10.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   20 | 是   | 内部 profile |    155.6ms |  403.2ms |  134.5ms |   6.3ms | 0.8ms |   11.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    1 | 是   | 内部 profile |    163.2ms |  403.6ms |  148.4ms |  13.8ms | 1.0ms |   10.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    2 | 是   | 内部 profile |    151.8ms |  403.8ms |  136.8ms |   6.9ms | 0.6ms |   11.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    3 | 是   | 内部 profile |    158.1ms |  404.4ms |  142.3ms |   6.3ms | 1.9ms |   11.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    4 | 是   | 内部 profile |    158.7ms |  404.8ms |  137.5ms |   6.3ms | 0.6ms |   17.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    5 | 是   | 内部 profile |    158.1ms |  405.0ms |  144.1ms |   5.6ms | 0.6ms |   10.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    6 | 是   | 内部 profile |    166.2ms |  406.5ms |  151.4ms |   6.6ms | 0.7ms |   11.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    7 | 是   | 内部 profile |    258.8ms |  405.8ms |  241.2ms |   8.0ms | 0.6ms |   14.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    8 | 是   | 内部 profile |    155.5ms |  404.6ms |  130.0ms |   5.5ms | 1.3ms |   13.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    9 | 是   | 内部 profile |    157.0ms |  406.0ms |  141.7ms |   5.5ms | 0.7ms |   11.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   10 | 是   | 内部 profile |    192.8ms |  404.5ms |  158.1ms |   6.3ms | 0.6ms |   31.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   11 | 是   | 内部 profile |    150.7ms |  403.5ms |  136.6ms |   6.4ms | 0.7ms |   10.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   12 | 是   | 内部 profile |    171.8ms |  405.4ms |  153.2ms |   6.4ms | 0.6ms |   13.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   13 | 是   | 内部 profile |    160.5ms |  405.2ms |  136.3ms |   5.5ms | 0.6ms |   20.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   14 | 是   | 内部 profile |    174.3ms |  403.5ms |  160.3ms |   7.9ms | 0.6ms |   10.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   15 | 是   | 内部 profile |    174.5ms |  404.9ms |  138.7ms |   6.5ms | 0.6ms |   32.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   16 | 是   | 内部 profile |    149.1ms |  404.8ms |  132.9ms |   5.4ms | 0.6ms |   12.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   17 | 是   | 内部 profile |    268.0ms |  404.6ms |  250.6ms |   5.3ms | 0.6ms |   12.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   18 | 是   | 内部 profile |    155.5ms |  404.7ms |  128.9ms |   7.3ms | 0.6ms |   10.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   19 | 是   | 内部 profile |    151.5ms |  404.0ms |  132.2ms |   5.2ms | 0.6ms |   14.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   20 | 是   | 内部 profile |    158.1ms |  403.9ms |  142.5ms |   5.6ms | 0.6ms |   12.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 | 是   | 内部 profile |    143.9ms |  405.1ms |  140.6ms |   8.2ms | 1.0ms |    0.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 | 是   | 内部 profile |    142.9ms |  405.2ms |  139.5ms |   6.6ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 | 是   | 内部 profile |    150.0ms |  404.3ms |  147.1ms |   7.3ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 | 是   | 内部 profile |    156.6ms |  404.6ms |  153.4ms |   8.1ms | 0.7ms |    0.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 | 是   | 内部 profile |    140.3ms |  404.0ms |  137.3ms |   6.2ms | 1.0ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 | 是   | 内部 profile |    254.1ms |  404.4ms |  251.5ms |   6.4ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 | 是   | 内部 profile |    147.3ms |  405.6ms |  135.7ms |   6.4ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 | 是   | 内部 profile |    145.2ms |  406.9ms |  142.0ms |   5.7ms | 0.8ms |    0.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 | 是   | 内部 profile |    143.9ms |  403.2ms |  139.2ms |   8.1ms | 0.8ms |    0.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 | 是   | 内部 profile |    143.1ms |  405.3ms |  140.6ms |   6.6ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 | 是   | 内部 profile |    154.7ms |  405.4ms |  152.1ms |   6.2ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 | 是   | 内部 profile |    158.6ms |  404.7ms |  155.8ms |  14.5ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 | 是   | 内部 profile |    137.2ms |  406.2ms |  134.8ms |   7.3ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 | 是   | 内部 profile |    141.4ms |  405.8ms |  139.0ms |   5.8ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 | 是   | 内部 profile |    143.0ms |  404.1ms |  140.3ms |   6.0ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 | 是   | 内部 profile |    142.7ms |  405.7ms |  140.0ms |   6.2ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 | 是   | 内部 profile |    256.2ms |  404.9ms |  252.9ms |   9.6ms | 1.2ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 | 是   | 内部 profile |    139.6ms |  406.4ms |  136.4ms |   6.3ms | 1.0ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 | 是   | 内部 profile |    142.0ms |  406.4ms |  137.5ms |   6.1ms | 1.1ms |    0.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 | 是   | 内部 profile |    136.6ms |  405.7ms |  133.7ms |   6.3ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 | 是   | 内部 profile |    229.0ms |  403.0ms |  211.9ms |  79.2ms | 1.5ms |   11.4ms |      0.3ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 | 是   | 内部 profile |    226.9ms |  405.8ms |  220.8ms |  85.1ms | 2.3ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 | 是   | 内部 profile |    242.0ms |  404.0ms |  235.9ms | 158.3ms | 2.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 | 是   | 内部 profile |    217.1ms |  407.4ms |  211.3ms |  83.9ms | 2.4ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 | 是   | 内部 profile |    192.4ms |  405.8ms |  186.1ms |  80.6ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 | 是   | 内部 profile |    201.8ms |  405.8ms |  196.8ms |  95.3ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 | 是   | 内部 profile |    280.6ms |  405.5ms |  275.4ms |  63.7ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 | 是   | 内部 profile |    203.7ms |  405.6ms |  199.0ms |  78.3ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 | 是   | 内部 profile |    203.2ms |  404.7ms |  198.6ms |  69.5ms | 1.5ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 | 是   | 内部 profile |    195.0ms |  403.9ms |  189.3ms |  58.4ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 | 是   | 内部 profile |    197.9ms |  406.7ms |  193.5ms |  59.6ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 | 是   | 内部 profile |    253.8ms |  403.5ms |  249.1ms |  58.7ms | 1.7ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 | 是   | 内部 profile |    193.3ms |  404.1ms |  188.4ms |  64.5ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 | 是   | 内部 profile |    203.6ms |  407.2ms |  198.0ms |  78.8ms | 1.4ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 | 是   | 内部 profile |    188.2ms |  405.6ms |  182.0ms |  75.5ms | 1.9ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 | 是   | 内部 profile |    183.9ms |  405.0ms |  179.1ms |  78.1ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 | 是   | 内部 profile |    242.7ms |  406.2ms |  238.3ms |  83.6ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 | 是   | 内部 profile |    196.9ms |  404.5ms |  192.2ms |  62.6ms | 1.3ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 | 是   | 内部 profile |    186.8ms |  405.9ms |  182.0ms |  65.0ms | 1.3ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 | 是   | 内部 profile |    185.5ms |  404.0ms |  178.4ms |  76.5ms | 2.0ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 | 是   | 内部 profile |    235.2ms |  405.9ms |  219.3ms |   6.7ms | 0.9ms |   10.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 | 是   | 内部 profile |    156.6ms |  405.7ms |  142.5ms |   6.0ms | 1.0ms |   10.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 | 是   | 内部 profile |    166.9ms |  404.5ms |  151.8ms |   5.6ms | 1.5ms |   10.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 | 是   | 内部 profile |    188.3ms |  404.6ms |  164.5ms |   4.9ms | 0.6ms |   20.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 | 是   | 内部 profile |    164.9ms |  404.4ms |  149.0ms |   6.0ms | 0.6ms |   12.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 | 是   | 内部 profile |    162.4ms |  403.0ms |  141.1ms |   6.4ms | 0.7ms |   16.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 | 是   | 内部 profile |    162.2ms |  404.8ms |  145.4ms |   6.3ms | 0.6ms |   13.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 | 是   | 内部 profile |    224.8ms |  405.8ms |  209.5ms |   5.7ms | 1.1ms |   11.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 | 是   | 内部 profile |    152.9ms |  405.2ms |  138.3ms |   6.7ms | 0.7ms |   10.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 | 是   | 内部 profile |    163.2ms |  405.4ms |  144.4ms |   6.1ms | 0.7ms |   13.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 | 是   | 内部 profile |    168.8ms |  404.9ms |  140.7ms |   6.0ms | 0.6ms |   24.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 | 是   | 内部 profile |    159.5ms |  405.3ms |  143.5ms |   6.0ms | 1.2ms |   10.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 | 是   | 内部 profile |    218.7ms |  405.5ms |  193.5ms |   6.3ms | 0.9ms |   20.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 | 是   | 内部 profile |    155.8ms |  403.4ms |  136.7ms |   6.9ms | 0.7ms |   11.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 | 是   | 内部 profile |    156.5ms |  405.7ms |  141.6ms |   5.3ms | 0.7ms |   11.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 | 是   | 内部 profile |    180.2ms |  406.0ms |  163.6ms |   6.3ms | 0.8ms |   12.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 | 是   | 内部 profile |    160.0ms |  404.9ms |  145.0ms |   5.9ms | 0.7ms |   11.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 | 是   | 内部 profile |    170.2ms |  404.1ms |  152.2ms |   6.4ms | 0.7ms |   13.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 | 是   | 内部 profile |    171.2ms |  405.4ms |  145.6ms |   6.8ms | 0.7ms |   22.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 | 是   | 内部 profile |    242.0ms |  405.2ms |  224.8ms |   5.7ms | 0.9ms |   12.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 | 是   | 内部 profile |    167.9ms |  404.8ms |  151.9ms |   5.6ms | 0.8ms |   12.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 | 是   | 内部 profile |    173.9ms |  404.3ms |  147.2ms |   5.4ms | 1.1ms |   22.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 | 是   | 内部 profile |    159.5ms |  405.7ms |  143.6ms |   5.5ms | 1.8ms |   11.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 | 是   | 内部 profile |    186.2ms |  405.4ms |  161.4ms |   5.4ms | 0.8ms |   20.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 | 是   | 内部 profile |    181.7ms |  404.1ms |  166.1ms |   5.5ms | 1.0ms |   11.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 | 是   | 内部 profile |    178.4ms |  404.8ms |  158.0ms |   6.5ms | 0.8ms |   12.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 | 是   | 内部 profile |    157.8ms |  404.4ms |  142.5ms |   5.4ms | 0.8ms |   11.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 | 是   | 内部 profile |    168.7ms |  404.9ms |  152.8ms |   5.5ms | 0.7ms |   12.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 | 是   | 内部 profile |    160.2ms |  406.5ms |  145.1ms |   5.5ms | 0.6ms |   11.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 | 是   | 内部 profile |    166.5ms |  405.5ms |  148.1ms |   6.1ms | 1.0ms |   13.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 | 是   | 内部 profile |    181.2ms |  405.8ms |  161.7ms |   5.4ms | 2.2ms |   13.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 | 是   | 内部 profile |    174.9ms |  406.0ms |  157.7ms |   5.2ms | 1.0ms |   12.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 | 是   | 内部 profile |    179.4ms |  404.0ms |  154.7ms |   5.0ms | 0.6ms |   21.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 | 是   | 内部 profile |    160.4ms |  402.9ms |  146.2ms |   5.8ms | 0.6ms |   10.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 | 是   | 内部 profile |    171.2ms |  405.2ms |  146.6ms |   5.3ms | 0.6ms |   20.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 | 是   | 内部 profile |    169.9ms |  405.5ms |  153.5ms |   6.3ms | 1.0ms |   10.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 | 是   | 内部 profile |    171.7ms |  404.8ms |  151.4ms |   6.5ms | 1.1ms |   11.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 | 是   | 内部 profile |    207.6ms |  405.1ms |  190.4ms |   6.6ms | 0.9ms |   13.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 | 是   | 内部 profile |    169.3ms |  404.5ms |  154.4ms |   5.6ms | 0.7ms |   11.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 | 是   | 内部 profile |    158.7ms |  405.9ms |  141.7ms |   6.0ms | 0.6ms |   13.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 | 是   | 内部 profile |    175.4ms |  405.3ms |  172.0ms |   7.2ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 | 是   | 内部 profile |    152.1ms |  405.0ms |  149.7ms |   6.3ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 | 是   | 内部 profile |    150.8ms |  404.5ms |  147.6ms |   6.8ms | 1.1ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 | 是   | 内部 profile |    716.7ms |  809.6ms |  714.0ms |   6.9ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 | 是   | 内部 profile |    156.4ms |  403.5ms |  152.8ms |   6.5ms | 1.0ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 | 是   | 内部 profile |    149.3ms |  405.1ms |  146.4ms |   6.6ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 | 是   | 内部 profile |    153.8ms |  403.8ms |  151.0ms |   6.9ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 | 是   | 内部 profile |    153.6ms |  406.4ms |  150.9ms |   6.8ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 | 是   | 内部 profile |    148.1ms |  404.7ms |  145.6ms |   6.5ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 | 是   | 内部 profile |    151.7ms |  406.3ms |  149.0ms |   5.2ms | 0.6ms |    0.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 | 是   | 内部 profile |    150.9ms |  405.0ms |  147.2ms |   5.9ms | 1.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 | 是   | 内部 profile |    158.4ms |  405.5ms |  155.6ms |   7.6ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 | 是   | 内部 profile |    151.9ms |  405.2ms |  148.9ms |   7.0ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 | 是   | 内部 profile |    261.1ms |  405.9ms |  258.3ms |   5.8ms | 0.8ms |    0.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 | 是   | 内部 profile |    153.5ms |  404.4ms |  150.7ms |   7.1ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 | 是   | 内部 profile |    143.2ms |  404.3ms |  140.3ms |   6.7ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 | 是   | 内部 profile |    148.5ms |  405.7ms |  144.8ms |   6.0ms | 0.6ms |    0.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 | 是   | 内部 profile |    181.1ms |  404.2ms |  178.1ms |   7.5ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 | 是   | 内部 profile |    168.4ms |  405.4ms |  165.9ms |   6.7ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 | 是   | 内部 profile |    148.0ms |  405.6ms |  144.6ms |   5.9ms | 1.0ms |    0.5ms |      0.0ms |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    1 | 是   | 内部 profile |     28.1ms |  203.2ms |   26.2ms |   2.3ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    2 | 是   | 内部 profile |     26.7ms |  202.7ms |   25.3ms |   2.3ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    3 | 是   | 内部 profile |     20.8ms |  201.9ms |   19.7ms |   2.1ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    4 | 是   | 内部 profile |     24.3ms |  202.1ms |   23.3ms |   1.7ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    5 | 是   | 内部 profile |     22.3ms |  202.4ms |   21.3ms |   1.7ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    6 | 是   | 内部 profile |     24.4ms |  201.6ms |   22.6ms |   1.4ms | 0.6ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    7 | 是   | 内部 profile |     34.9ms |  202.4ms |   33.2ms |   3.2ms | 0.7ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    8 | 是   | 内部 profile |     25.3ms |  202.5ms |   23.9ms |   2.0ms | 0.9ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    9 | 是   | 内部 profile |     21.0ms |  202.4ms |   19.7ms |   2.7ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   10 | 是   | 内部 profile |     21.7ms |  201.8ms |   20.4ms |   1.8ms | 0.5ms |    0.5ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   11 | 是   | 内部 profile |     22.8ms |  202.4ms |   21.5ms |   2.6ms | 0.9ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   12 | 是   | 内部 profile |     19.8ms |  202.4ms |   18.8ms |   1.5ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   13 | 是   | 内部 profile |     22.5ms |  201.7ms |   21.1ms |   2.5ms | 0.9ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   14 | 是   | 内部 profile |     28.4ms |  202.7ms |   27.3ms |   1.7ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   15 | 是   | 内部 profile |     23.0ms |  203.7ms |   21.4ms |   1.3ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   16 | 是   | 内部 profile |     19.6ms |  202.3ms |   18.6ms |   1.7ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   17 | 是   | 内部 profile |     35.7ms |  201.1ms |   34.1ms |   2.3ms | 1.2ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   18 | 是   | 内部 profile |     20.9ms |  201.0ms |   19.9ms |   1.5ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   19 | 是   | 内部 profile |     32.0ms |  203.7ms |   30.8ms |   1.8ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   20 | 是   | 内部 profile |     20.7ms |  202.1ms |   19.7ms |   1.6ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    1 | 是   | 内部 profile |     16.5ms |  202.4ms |   14.7ms |   0.1ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    2 | 是   | 内部 profile |     14.0ms |  201.9ms |   11.5ms |   0.1ms | 0.5ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    3 | 是   | 内部 profile |     11.0ms |  203.1ms |    9.3ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    4 | 是   | 内部 profile |     12.3ms |  204.2ms |    9.4ms |   0.1ms | 0.8ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    5 | 是   | 内部 profile |     10.2ms |  206.2ms |    8.7ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    6 | 是   | 内部 profile |     13.1ms |  203.4ms |   10.5ms |   0.1ms | 0.8ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    7 | 是   | 内部 profile |     11.2ms |  201.0ms |    9.4ms |   0.1ms | 0.9ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    8 | 是   | 内部 profile |     11.1ms |  202.6ms |    9.2ms |   0.1ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    9 | 是   | 内部 profile |     11.8ms |  202.5ms |    9.1ms |   0.1ms | 0.5ms |    0.5ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   10 | 是   | 内部 profile |     10.5ms |  200.8ms |    8.8ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   11 | 是   | 内部 profile |     12.1ms |  200.9ms |    9.9ms |   0.1ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   12 | 是   | 内部 profile |     11.5ms |  203.8ms |    9.3ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   13 | 是   | 内部 profile |     10.9ms |  202.9ms |    8.5ms |   0.1ms | 0.7ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   14 | 是   | 内部 profile |     11.6ms |  202.7ms |    9.1ms |   0.1ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   15 | 是   | 内部 profile |     17.3ms |  202.2ms |   13.6ms |   0.1ms | 2.5ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   16 | 是   | 内部 profile |     11.9ms |  202.3ms |    9.1ms |   0.1ms | 0.5ms |    0.5ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   17 | 是   | 内部 profile |     16.4ms |  201.1ms |   13.2ms |   0.1ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   18 | 是   | 内部 profile |     12.8ms |  202.8ms |    8.1ms |   0.1ms | 0.9ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   19 | 是   | 内部 profile |     10.6ms |  202.0ms |    8.9ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   20 | 是   | 内部 profile |      9.9ms |  201.4ms |    8.5ms |   0.1ms | 0.4ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    1 | 是   | 内部 profile |     11.3ms |  202.4ms |    9.0ms |   0.1ms | 0.4ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    2 | 是   | 内部 profile |     11.7ms |  202.9ms |   10.3ms |   0.1ms | 0.5ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    3 | 是   | 内部 profile |     11.5ms |  202.9ms |    9.7ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    4 | 是   | 内部 profile |     12.4ms |  201.9ms |   10.1ms |   0.1ms | 0.5ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    5 | 是   | 内部 profile |     15.7ms |  202.9ms |   11.7ms |   0.1ms | 0.7ms |    2.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    6 | 是   | 内部 profile |     11.7ms |  202.5ms |   10.0ms |   0.2ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    7 | 是   | 内部 profile |     11.3ms |  202.7ms |    9.9ms |   0.1ms | 0.5ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    8 | 是   | 内部 profile |     12.9ms |  203.2ms |   11.5ms |   0.1ms | 0.4ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    9 | 是   | 内部 profile |     11.5ms |  202.7ms |   10.0ms |   0.1ms | 0.4ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   10 | 是   | 内部 profile |     10.4ms |  203.3ms |    8.9ms |   0.1ms | 0.4ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   11 | 是   | 内部 profile |     11.2ms |  203.4ms |    8.6ms |   0.1ms | 0.5ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   12 | 是   | 内部 profile |     12.2ms |  202.1ms |   10.3ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   13 | 是   | 内部 profile |     13.1ms |  201.4ms |   10.6ms |   0.1ms | 0.6ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   14 | 是   | 内部 profile |     11.3ms |  203.0ms |    9.4ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   15 | 是   | 内部 profile |     12.1ms |  202.0ms |   10.6ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   16 | 是   | 内部 profile |     18.5ms |  203.6ms |   16.5ms |   0.1ms | 0.9ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   17 | 是   | 内部 profile |     15.3ms |  203.8ms |   12.6ms |   0.2ms | 0.4ms |    1.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   18 | 是   | 内部 profile |     11.6ms |  201.4ms |    9.7ms |   0.1ms | 0.4ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   19 | 是   | 内部 profile |     13.3ms |  204.0ms |   11.6ms |   0.1ms | 0.7ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   20 | 是   | 内部 profile |     17.8ms |  203.6ms |   15.1ms |   0.1ms | 0.6ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    1 | 是   | 内部 profile |     12.3ms |  201.6ms |   10.3ms |   0.1ms | 0.6ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    2 | 是   | 内部 profile |     10.8ms |  203.3ms |    8.8ms |   0.1ms | 0.5ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    3 | 是   | 内部 profile |     11.2ms |  203.3ms |    8.9ms |   0.1ms | 0.4ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    4 | 是   | 内部 profile |     12.2ms |  203.3ms |    9.7ms |   0.1ms | 0.5ms |    1.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    5 | 是   | 内部 profile |     11.4ms |  202.8ms |    9.5ms |   0.1ms | 0.5ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    6 | 是   | 内部 profile |     11.8ms |  203.6ms |    9.9ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    7 | 是   | 内部 profile |     10.8ms |  200.6ms |    8.7ms |   0.1ms | 0.5ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    8 | 是   | 内部 profile |     11.4ms |  202.4ms |    8.8ms |   0.1ms | 0.4ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    9 | 是   | 内部 profile |     11.7ms |  203.6ms |    9.9ms |   0.1ms | 0.5ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   10 | 是   | 内部 profile |     11.6ms |  202.5ms |    9.7ms |   0.1ms | 0.5ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   11 | 是   | 内部 profile |     14.0ms |  202.6ms |   11.6ms |   0.1ms | 1.0ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   12 | 是   | 内部 profile |     10.6ms |  203.2ms |    9.0ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   13 | 是   | 内部 profile |     12.2ms |  202.6ms |    9.2ms |   0.1ms | 0.6ms |    2.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   14 | 是   | 内部 profile |     16.1ms |  201.5ms |   14.2ms |   0.1ms | 0.6ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   15 | 是   | 内部 profile |     11.1ms |  203.4ms |    9.1ms |   0.1ms | 0.4ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   16 | 是   | 内部 profile |     12.4ms |  202.9ms |    9.6ms |   0.1ms | 0.6ms |    1.7ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   17 | 是   | 内部 profile |     14.1ms |  204.1ms |   11.4ms |   0.1ms | 0.8ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   18 | 是   | 内部 profile |     11.2ms |  202.1ms |    9.1ms |   0.1ms | 0.5ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   19 | 是   | 内部 profile |     11.5ms |  202.5ms |    9.2ms |   0.1ms | 0.5ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   20 | 是   | 内部 profile |     13.3ms |  202.9ms |   10.8ms |   0.1ms | 0.6ms |    1.6ms |          - |      1 |        1 |
| uni-app vite vue3 / Vue SFC script 区块               |    1 | 是   | 产物变化     |   1141.6ms | 1141.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 | 是   | 产物变化     |    259.2ms |  259.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 | 是   | 产物变化     |    257.0ms |  257.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 | 是   | 产物变化     |    156.6ms |  156.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 | 是   | 产物变化     |    154.4ms |  154.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 | 是   | 产物变化     |    154.8ms |  154.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 | 是   | 产物变化     |    156.0ms |  156.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 | 是   | 产物变化     |    156.2ms |  156.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 | 是   | 产物变化     |    153.0ms |  153.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 | 是   | 产物变化     |    156.3ms |  156.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 | 是   | 产物变化     |    158.8ms |  158.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 | 是   | 产物变化     |    157.2ms |  157.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 | 是   | 产物变化     |    155.9ms |  155.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 | 是   | 产物变化     |    155.7ms |  155.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 | 是   | 产物变化     |    155.9ms |  155.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 | 是   | 产物变化     |    153.1ms |  153.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 | 是   | 产物变化     |    157.4ms |  157.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 | 是   | 产物变化     |    155.9ms |  155.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 | 是   | 产物变化     |    155.6ms |  155.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 | 是   | 产物变化     |    156.8ms |  156.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 | 是   | 产物变化     |    208.0ms |  208.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 | 是   | 产物变化     |    156.4ms |  156.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 | 是   | 产物变化     |    155.5ms |  155.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 | 是   | 产物变化     |    157.2ms |  157.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 | 是   | 产物变化     |    260.4ms |  260.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 | 是   | 产物变化     |    156.4ms |  156.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 | 是   | 产物变化     |    158.4ms |  158.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 | 是   | 产物变化     |    157.7ms |  157.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 | 是   | 产物变化     |    263.6ms |  263.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 | 是   | 产物变化     |    158.6ms |  158.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 | 是   | 产物变化     |    162.2ms |  162.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 | 是   | 产物变化     |    156.3ms |  156.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 | 是   | 产物变化     |    258.5ms |  258.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 | 是   | 产物变化     |    155.9ms |  155.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 | 是   | 产物变化     |    155.9ms |  155.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 | 是   | 产物变化     |    156.7ms |  156.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 | 是   | 产物变化     |    156.1ms |  156.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 | 是   | 产物变化     |    156.0ms |  156.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 | 是   | 产物变化     |    261.6ms |  261.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 | 是   | 产物变化     |    157.2ms |  157.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 | 是   | 产物变化     |    209.0ms |  209.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 | 是   | 产物变化     |    158.1ms |  158.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 | 是   | 产物变化     |    155.1ms |  155.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 | 是   | 产物变化     |    158.1ms |  158.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 | 是   | 产物变化     |    155.2ms |  155.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 | 是   | 产物变化     |    207.6ms |  207.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 | 是   | 产物变化     |    155.6ms |  155.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 | 是   | 产物变化     |    154.6ms |  154.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 | 是   | 产物变化     |    154.5ms |  154.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 | 是   | 产物变化     |    151.7ms |  151.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 | 是   | 产物变化     |    158.8ms |  158.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 | 是   | 产物变化     |    156.7ms |  156.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 | 是   | 产物变化     |    156.6ms |  156.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 | 是   | 产物变化     |    207.3ms |  207.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 | 是   | 产物变化     |    157.7ms |  157.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 | 是   | 产物变化     |    154.7ms |  154.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 | 是   | 产物变化     |    157.5ms |  157.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 | 是   | 产物变化     |    157.3ms |  157.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 | 是   | 产物变化     |    157.0ms |  157.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 | 是   | 产物变化     |    156.0ms |  156.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 | 是   | 产物变化     |   1403.6ms | 1403.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 | 是   | 产物变化     |    416.1ms |  416.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 | 是   | 产物变化     |    465.9ms |  465.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 | 是   | 产物变化     |    470.7ms |  470.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 | 是   | 产物变化     |    468.0ms |  468.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 | 是   | 产物变化     |    417.3ms |  417.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 | 是   | 产物变化     |    466.9ms |  466.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 | 是   | 产物变化     |    465.4ms |  465.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 | 是   | 产物变化     |    463.0ms |  463.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 | 是   | 产物变化     |    414.6ms |  414.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 | 是   | 产物变化     |    417.3ms |  417.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 | 是   | 产物变化     |    470.2ms |  470.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 | 是   | 产物变化     |    415.9ms |  415.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 | 是   | 产物变化     |    467.5ms |  467.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 | 是   | 产物变化     |    468.2ms |  468.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 | 是   | 产物变化     |    467.2ms |  467.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 | 是   | 产物变化     |    414.3ms |  414.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 | 是   | 产物变化     |    465.6ms |  465.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 | 是   | 产物变化     |    416.1ms |  416.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 | 是   | 产物变化     |    413.8ms |  413.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 | 是   | 产物变化     |    260.8ms |  260.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 | 是   | 产物变化     |    208.1ms |  208.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 | 是   | 产物变化     |    205.2ms |  205.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 | 是   | 产物变化     |    267.3ms |  267.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 | 是   | 产物变化     |    206.4ms |  206.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 | 是   | 产物变化     |    209.3ms |  209.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 | 是   | 产物变化     |    208.1ms |  208.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 | 是   | 产物变化     |    258.1ms |  258.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 | 是   | 产物变化     |    206.6ms |  206.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 | 是   | 产物变化     |    211.5ms |  211.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 | 是   | 产物变化     |    208.7ms |  208.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 | 是   | 产物变化     |    206.5ms |  206.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 | 是   | 产物变化     |    209.5ms |  209.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 | 是   | 产物变化     |    207.4ms |  207.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 | 是   | 产物变化     |    207.1ms |  207.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 | 是   | 产物变化     |    208.6ms |  208.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 | 是   | 产物变化     |    209.4ms |  209.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 | 是   | 产物变化     |    208.7ms |  208.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 | 是   | 产物变化     |    209.6ms |  209.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 | 是   | 产物变化     |    208.9ms |  208.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 | 是   | 产物变化     |    258.3ms |  258.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 | 是   | 产物变化     |    206.3ms |  206.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 | 是   | 产物变化     |    207.4ms |  207.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 | 是   | 产物变化     |    260.4ms |  260.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 | 是   | 产物变化     |    206.9ms |  206.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 | 是   | 产物变化     |    207.9ms |  207.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 | 是   | 产物变化     |    207.7ms |  207.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 | 是   | 产物变化     |    210.0ms |  210.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 | 是   | 产物变化     |    208.2ms |  208.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 | 是   | 产物变化     |    206.1ms |  206.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 | 是   | 产物变化     |    209.5ms |  209.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 | 是   | 产物变化     |    206.1ms |  206.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 | 是   | 产物变化     |    207.8ms |  207.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 | 是   | 产物变化     |    207.8ms |  207.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 | 是   | 产物变化     |    205.8ms |  205.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 | 是   | 产物变化     |    208.7ms |  208.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 | 是   | 产物变化     |    208.0ms |  208.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 | 是   | 产物变化     |    206.8ms |  206.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 | 是   | 产物变化     |    208.3ms |  208.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 | 是   | 产物变化     |    207.9ms |  207.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 | 是   | 产物变化     |    365.3ms |  365.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 | 是   | 产物变化     |    364.0ms |  364.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 | 是   | 产物变化     |    365.7ms |  365.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 | 是   | 产物变化     |    309.9ms |  309.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 | 是   | 产物变化     |    312.7ms |  312.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 | 是   | 产物变化     |    312.2ms |  312.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 | 是   | 产物变化     |    362.1ms |  362.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 | 是   | 产物变化     |    259.4ms |  259.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 | 是   | 产物变化     |    366.5ms |  366.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 | 是   | 产物变化     |    361.1ms |  361.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 | 是   | 产物变化     |    363.2ms |  363.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 | 是   | 产物变化     |    311.7ms |  311.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 | 是   | 产物变化     |    308.4ms |  308.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 | 是   | 产物变化     |    417.3ms |  417.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 | 是   | 产物变化     |    365.3ms |  365.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 | 是   | 产物变化     |    314.1ms |  314.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 | 是   | 产物变化     |    309.3ms |  309.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 | 是   | 产物变化     |    364.2ms |  364.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 | 是   | 产物变化     |    313.6ms |  313.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 | 是   | 产物变化     |    364.4ms |  364.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 | 是   | 产物变化     |    310.8ms |  310.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 | 是   | 产物变化     |    364.0ms |  364.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 | 是   | 产物变化     |    310.2ms |  310.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 | 是   | 产物变化     |    360.5ms |  360.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 | 是   | 产物变化     |    310.1ms |  310.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 | 是   | 产物变化     |    312.6ms |  312.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 | 是   | 产物变化     |    369.7ms |  369.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 | 是   | 产物变化     |    259.0ms |  259.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 | 是   | 产物变化     |    365.6ms |  365.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 | 是   | 产物变化     |    411.4ms |  411.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 | 是   | 产物变化     |    366.6ms |  366.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 | 是   | 产物变化     |    262.6ms |  262.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 | 是   | 产物变化     |    366.7ms |  366.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 | 是   | 产物变化     |    363.9ms |  363.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 | 是   | 产物变化     |    312.8ms |  312.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 | 是   | 产物变化     |    367.2ms |  367.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 | 是   | 产物变化     |    259.8ms |  259.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 | 是   | 产物变化     |    362.9ms |  362.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 | 是   | 产物变化     |    362.3ms |  362.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 | 是   | 产物变化     |    363.6ms |  363.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 | 是   | 产物变化     |    261.8ms |  261.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 | 是   | 产物变化     |    312.1ms |  312.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 | 是   | 产物变化     |    365.5ms |  365.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 | 是   | 产物变化     |    312.5ms |  312.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 | 是   | 产物变化     |    315.2ms |  315.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 | 是   | 产物变化     |    418.8ms |  418.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 | 是   | 产物变化     |    361.0ms |  361.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 | 是   | 产物变化     |    313.4ms |  313.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 | 是   | 产物变化     |    314.2ms |  314.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 | 是   | 产物变化     |    313.7ms |  313.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 | 是   | 产物变化     |    361.7ms |  361.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 | 是   | 产物变化     |    312.1ms |  312.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 | 是   | 产物变化     |    313.1ms |  313.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 | 是   | 产物变化     |    311.9ms |  311.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 | 是   | 产物变化     |    361.8ms |  361.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 | 是   | 产物变化     |    311.4ms |  311.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 | 是   | 产物变化     |    310.1ms |  310.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 | 是   | 产物变化     |    311.7ms |  311.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 | 是   | 产物变化     |    312.7ms |  312.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 | 是   | 产物变化     |    313.1ms |  313.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    1 | 是   | 产物变化     |    313.1ms |  313.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    2 | 是   | 产物变化     |    365.7ms |  365.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    3 | 是   | 产物变化     |    310.0ms |  310.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    4 | 是   | 产物变化     |    310.4ms |  310.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    5 | 是   | 产物变化     |    310.6ms |  310.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    6 | 是   | 产物变化     |    364.1ms |  364.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    7 | 是   | 产物变化     |    310.8ms |  310.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    8 | 是   | 产物变化     |    260.4ms |  260.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    9 | 是   | 产物变化     |    421.8ms |  421.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   10 | 是   | 产物变化     |    260.0ms |  260.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   11 | 是   | 产物变化     |    363.8ms |  363.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   12 | 是   | 产物变化     |    258.8ms |  258.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   13 | 是   | 产物变化     |    362.6ms |  362.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   14 | 是   | 产物变化     |    309.8ms |  309.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   15 | 是   | 产物变化     |    310.6ms |  310.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   16 | 是   | 产物变化     |    313.5ms |  313.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   17 | 是   | 产物变化     |    312.4ms |  312.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   18 | 是   | 产物变化     |    417.5ms |  417.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   19 | 是   | 产物变化     |    312.0ms |  312.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   20 | 是   | 产物变化     |    309.9ms |  309.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    1 | 是   | 产物变化     |    104.1ms |  104.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    2 | 是   | 产物变化     |    104.7ms |  104.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    3 | 是   | 产物变化     |    104.6ms |  104.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    4 | 是   | 产物变化     |    103.6ms |  103.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    5 | 是   | 产物变化     |    104.8ms |  104.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    6 | 是   | 产物变化     |    103.8ms |  103.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    7 | 是   | 产物变化     |    104.6ms |  104.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    8 | 是   | 产物变化     |     53.0ms |   53.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    9 | 是   | 产物变化     |    102.6ms |  102.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   10 | 是   | 产物变化     |    103.0ms |  103.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   11 | 是   | 产物变化     |     53.0ms |   53.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   12 | 是   | 产物变化     |     52.6ms |   52.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   13 | 是   | 产物变化     |    104.7ms |  104.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   14 | 是   | 产物变化     |     52.5ms |   52.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   15 | 是   | 产物变化     |    104.8ms |  104.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   16 | 是   | 产物变化     |     52.2ms |   52.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   17 | 是   | 产物变化     |    104.1ms |  104.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   18 | 是   | 产物变化     |    105.0ms |  105.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   19 | 是   | 产物变化     |    105.1ms |  105.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   20 | 是   | 产物变化     |     52.8ms |   52.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    1 | 是   | 产物变化     |     51.6ms |   51.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    2 | 是   | 产物变化     |    105.2ms |  105.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    3 | 是   | 产物变化     |    105.3ms |  105.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    4 | 是   | 产物变化     |    103.2ms |  103.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    5 | 是   | 产物变化     |     51.4ms |   51.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    6 | 是   | 产物变化     |    105.1ms |  105.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    7 | 是   | 产物变化     |     52.2ms |   52.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    8 | 是   | 产物变化     |     51.6ms |   51.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    9 | 是   | 产物变化     |    105.4ms |  105.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   10 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   11 | 是   | 产物变化     |    104.7ms |  104.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   12 | 是   | 产物变化     |    105.7ms |  105.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   13 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   14 | 是   | 产物变化     |    105.4ms |  105.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   15 | 是   | 产物变化     |     53.3ms |   53.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   16 | 是   | 产物变化     |     53.0ms |   53.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   17 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   18 | 是   | 产物变化     |     53.3ms |   53.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   19 | 是   | 产物变化     |     53.1ms |   53.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   20 | 是   | 产物变化     |    103.7ms |  103.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    1 | 是   | 产物变化     |     54.0ms |   54.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    2 | 是   | 产物变化     |    101.3ms |  101.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    3 | 是   | 产物变化     |     51.3ms |   51.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    4 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    5 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    6 | 是   | 产物变化     |     52.9ms |   52.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    7 | 是   | 产物变化     |     52.0ms |   52.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    8 | 是   | 产物变化     |     52.9ms |   52.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    9 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   10 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   11 | 是   | 产物变化     |     51.4ms |   51.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   12 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   13 | 是   | 产物变化     |     53.1ms |   53.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   14 | 是   | 产物变化     |     52.0ms |   52.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   15 | 是   | 产物变化     |     50.5ms |   50.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   16 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   17 | 是   | 产物变化     |     51.4ms |   51.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   18 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   19 | 是   | 产物变化     |     52.0ms |   52.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   20 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 | 是   | 产物变化     |     50.2ms |   50.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 | 是   | 产物变化     |    104.4ms |  104.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 | 是   | 产物变化     |    105.4ms |  105.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 | 是   | 产物变化     |     52.6ms |   52.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 | 是   | 产物变化     |     52.2ms |   52.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 | 是   | 产物变化     |     52.0ms |   52.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 | 是   | 产物变化     |     52.8ms |   52.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 | 是   | 产物变化     |     52.2ms |   52.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 | 是   | 产物变化     |     52.0ms |   52.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 | 是   | 产物变化     |     52.7ms |   52.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 | 是   | 产物变化     |     51.3ms |   51.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |

说明：

- weapp-vite 项目使用 dev 模式 JSONL profile 采集 HMR 内部阶段耗时。
- 非 weapp-vite 项目使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时，内部阶段列没有框架可比的公开数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
