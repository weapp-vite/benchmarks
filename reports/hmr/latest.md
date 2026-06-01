# HMR 基准报告

生成时间：2026-05-31T18:25:27.379Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 一眼结论

- HMR 最快：weapp-vite 原生 / WXSS 文件，平均 12.3ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 435.8ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：weapp-vite 使用内部 profile；其他框架使用源文件写入到目标产物更新的墙钟耗时，因此阶段列只在 weapp-vite 场景有值。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式     | 平均 HMR | 相对最快 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | ------------ | -------: | -------: | -------: | -------: | -----: | ----: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   12.3ms |    1.00x |  201.9ms |   10.5ms |  0.1ms | 0.6ms |    0.9ms |          - |        1.0 |          1.0 |
|    2 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   12.5ms |    1.02x |  202.1ms |   10.3ms |  0.1ms | 0.6ms |    1.1ms |          - |        1.0 |          1.0 |
|    3 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   12.8ms |    1.04x |  201.4ms |   11.1ms |  0.1ms | 0.5ms |    0.2ms |          - |        1.0 |          1.0 |
|    4 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 内部 profile |   20.5ms |    1.66x |  202.2ms |   19.3ms |  1.5ms | 0.6ms |    0.2ms |          - |        1.0 |          1.0 |
|    5 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化     |   53.8ms |    4.37x |   53.8ms |        - |      - |     - |        - |          - |          - |            - |
|    6 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化     |   64.4ms |    5.23x |   64.4ms |        - |      - |     - |        - |          - |          - |            - |
|    7 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化     |   69.2ms |    5.62x |   69.2ms |        - |      - |     - |        - |          - |          - |            - |
|    8 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化     |   92.2ms |    7.49x |   92.2ms |        - |      - |     - |        - |          - |          - |            - |
|    9 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 内部 profile |  135.3ms |   10.99x |  292.0ms |  131.9ms |  5.4ms | 0.7ms |    0.2ms |      0.0ms |        1.0 |          1.0 |
|   10 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  152.8ms |   12.42x |  402.8ms |  135.4ms |  9.5ms | 0.9ms |   12.9ms |      0.0ms |        1.0 |          1.0 |
|   11 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 内部 profile |  153.2ms |   12.45x |  403.3ms |  137.4ms |  6.2ms | 0.9ms |   11.3ms |      0.0ms |        1.0 |          1.0 |
|   12 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  157.7ms |   12.82x |  403.2ms |  140.3ms |  5.9ms | 0.9ms |   12.1ms |      0.0ms |        1.0 |          1.0 |
|   13 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  161.3ms |   13.11x |  393.6ms |  158.1ms |  7.4ms | 0.8ms |    0.2ms |      0.0ms |        1.0 |          1.0 |
|   14 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化     |  168.9ms |   13.73x |  168.9ms |        - |      - |     - |        - |          - |          - |            - |
|   15 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 内部 profile |  169.2ms |   13.75x |  413.7ms |  151.1ms |  5.9ms | 1.0ms |   13.0ms |      0.0ms |        1.0 |          1.0 |
|   16 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 内部 profile |  170.3ms |   13.84x |  402.9ms |  163.9ms | 65.3ms | 2.1ms |    0.6ms |      0.0ms |        1.0 |          3.0 |
|   17 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化     |  174.5ms |   14.18x |  174.5ms |        - |      - |     - |        - |          - |          - |            - |
|   18 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  180.3ms |   14.65x |  402.7ms |  173.6ms | 64.1ms | 2.0ms |    0.6ms |      0.0ms |        1.0 |          3.0 |
|   19 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化     |  206.1ms |   16.75x |  206.1ms |        - |      - |     - |        - |          - |          - |            - |
|   20 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化     |  207.9ms |   16.89x |  207.9ms |        - |      - |     - |        - |          - |          - |            - |
|   21 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化     |  222.7ms |   18.09x |  222.7ms |        - |      - |     - |        - |          - |          - |            - |
|   22 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化     |  293.5ms |   23.85x |  293.5ms |        - |      - |     - |        - |          - |          - |            - |
|   23 | taro vue3 / 页面配置                                  | taro vue3                     | Vue SFC  | 产物变化     |  294.2ms |   23.91x |  294.2ms |        - |      - |     - |        - |          - |          - |            - |
|   24 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化     |  302.3ms |   24.56x |  302.3ms |        - |      - |     - |        - |          - |          - |            - |
|   25 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化     |  345.5ms |   28.07x |  345.5ms |        - |      - |     - |        - |          - |          - |            - |
|   26 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化     |  435.8ms |   35.41x |  435.8ms |        - |      - |     - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式     | HMR 总耗时 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                            |
| ----------------------------------------------------- | ------------ | ---------: | -------: | -------: | -----: | ----: | -------: | ---------: | -----: | -------: | --------------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 内部 profile |    170.3ms |  402.9ms |  163.9ms | 65.3ms | 2.1ms |    0.6ms |      0.0ms |    1.0 |      3.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC template 区块             | 内部 profile |    169.2ms |  413.7ms |  151.1ms |  5.9ms | 1.0ms |   13.0ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC style 区块                | 内部 profile |    153.2ms |  403.3ms |  137.4ms |  6.2ms | 0.9ms |   11.3ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC 页面配置                  | 内部 profile |    135.3ms |  292.0ms |  131.9ms |  5.4ms | 0.7ms |    0.2ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC script 区块   | 内部 profile |    180.3ms |  402.7ms |  173.6ms | 64.1ms | 2.0ms |    0.6ms |      0.0ms |    1.0 |      3.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC template 区块 | 内部 profile |    157.7ms |  403.2ms |  140.3ms |  5.9ms | 0.9ms |   12.1ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC style 区块    | 内部 profile |    152.8ms |  402.8ms |  135.4ms |  9.5ms | 0.9ms |   12.9ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 内部 profile |    161.3ms |  393.6ms |  158.1ms |  7.4ms | 0.8ms |    0.2ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite 原生 / JS 文件                             | 内部 profile |     20.5ms |  202.2ms |   19.3ms |  1.5ms | 0.6ms |    0.2ms |          - |    1.0 |      1.0 | `src/pages/index/index.js`        |
| weapp-vite 原生 / WXML 文件                           | 内部 profile |     12.8ms |  201.4ms |   11.1ms |  0.1ms | 0.5ms |    0.2ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxml`      |
| weapp-vite 原生 / WXSS 文件                           | 内部 profile |     12.3ms |  201.9ms |   10.5ms |  0.1ms | 0.6ms |    0.9ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxss`      |
| weapp-vite 原生 / JSON 文件                           | 内部 profile |     12.5ms |  202.1ms |   10.3ms |  0.1ms | 0.6ms |    1.1ms |          - |    1.0 |      1.0 | `src/pages/index/index.json`      |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化     |    222.7ms |  222.7ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化     |    174.5ms |  174.5ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化     |    168.9ms |  168.9ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC script 区块                       | 产物变化     |    435.8ms |  435.8ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC template 区块                     | 产物变化     |    207.9ms |  207.9ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC style 区块                        | 产物变化     |    206.1ms |  206.1ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC script 区块                       | 产物变化     |    345.5ms |  345.5ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC template 区块                     | 产物变化     |    302.3ms |  302.3ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / CSS 文件                                  | 产物变化     |    293.5ms |  293.5ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.css`       |
| taro vue3 / 页面配置                                  | 产物变化     |    294.2ms |  294.2ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.config.ts` |
| mpx / template 区块                                   | 产物变化     |     92.2ms |   92.2ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / script 区块                                     | 产物变化     |     64.4ms |   64.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / style 区块                                      | 产物变化     |     53.8ms |   53.8ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / 页面配置                                        | 产物变化     |     69.2ms |   69.2ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |

## 原始明细

| 场景                                                  | 轮次 | 通过 | 采集方式     | HMR 总耗时 | 外部等待 | 构建核心 |    转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | ---- | ------------ | ---------: | -------: | -------: | ------: | ----: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 | 是   | 内部 profile |    195.4ms |  403.1ms |  180.0ms |  64.0ms | 2.0ms |    7.8ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    2 | 是   | 内部 profile |    163.3ms |  405.6ms |  157.3ms |  56.4ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    3 | 是   | 内部 profile |    175.9ms |  402.8ms |  170.6ms |  62.3ms | 1.9ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    4 | 是   | 内部 profile |    213.9ms |  401.5ms |  207.1ms | 173.6ms | 1.9ms |    0.4ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    5 | 是   | 内部 profile |    161.9ms |  404.2ms |  156.1ms |  66.4ms | 2.3ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    6 | 是   | 内部 profile |    152.5ms |  402.5ms |  147.2ms |  62.7ms | 2.1ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    7 | 是   | 内部 profile |    159.7ms |  402.7ms |  153.4ms |  53.9ms | 1.8ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    8 | 是   | 内部 profile |    201.5ms |  403.1ms |  195.2ms |  46.8ms | 2.3ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    9 | 是   | 内部 profile |    158.2ms |  401.5ms |  152.3ms |  65.5ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   10 | 是   | 内部 profile |    157.0ms |  401.7ms |  151.4ms |  58.7ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   11 | 是   | 内部 profile |    162.1ms |  403.4ms |  155.9ms |  57.1ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   12 | 是   | 内部 profile |    150.8ms |  403.5ms |  145.8ms |  56.1ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   13 | 是   | 内部 profile |    201.4ms |  402.0ms |  195.6ms |  65.4ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   14 | 是   | 内部 profile |    156.5ms |  404.3ms |  150.3ms |  47.1ms | 2.1ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   15 | 是   | 内部 profile |    152.6ms |  402.3ms |  146.7ms |  44.3ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   16 | 是   | 内部 profile |    163.3ms |  402.9ms |  155.1ms |  44.6ms | 4.7ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   17 | 是   | 内部 profile |    153.4ms |  401.2ms |  148.2ms |  61.5ms | 1.7ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   18 | 是   | 内部 profile |    209.7ms |  404.1ms |  203.4ms |  92.3ms | 2.2ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   19 | 是   | 内部 profile |    161.1ms |  402.4ms |  155.3ms |  62.9ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   20 | 是   | 内部 profile |    156.3ms |  402.2ms |  151.4ms |  64.1ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC template 区块             |    1 | 是   | 内部 profile |    164.3ms |  413.1ms |  150.2ms |   5.1ms | 1.2ms |    9.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    2 | 是   | 内部 profile |    176.5ms |  405.7ms |  162.4ms |   5.9ms | 0.9ms |   10.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    3 | 是   | 内部 profile |    140.5ms |  403.3ms |  124.9ms |   5.1ms | 0.7ms |   11.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    4 | 是   | 内部 profile |    166.1ms |  401.5ms |  146.9ms |   5.8ms | 1.0ms |   15.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    5 | 是   | 内部 profile |    177.1ms |  403.0ms |  153.4ms |   5.1ms | 1.0ms |   19.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    6 | 是   | 内部 profile |    128.8ms |  403.3ms |  115.8ms |   4.7ms | 0.7ms |    9.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    7 | 是   | 内部 profile |    133.5ms |  403.9ms |  120.1ms |   5.4ms | 0.7ms |    9.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    8 | 是   | 内部 profile |    165.0ms |  403.0ms |  138.4ms |   5.7ms | 1.1ms |   22.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    9 | 是   | 内部 profile |    170.4ms |  403.1ms |  149.1ms |  11.3ms | 4.3ms |   13.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   10 | 是   | 内部 profile |    156.4ms |  402.6ms |  135.8ms |   6.1ms | 0.8ms |   15.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   11 | 是   | 内部 profile |    148.6ms |  403.1ms |  133.8ms |   5.0ms | 0.8ms |   10.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   12 | 是   | 内部 profile |    137.1ms |  403.3ms |  124.3ms |   5.1ms | 0.7ms |    9.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   13 | 是   | 内部 profile |    141.9ms |  403.1ms |  121.1ms |   5.6ms | 0.7ms |   17.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   14 | 是   | 内部 profile |    170.1ms |  402.9ms |  156.0ms |   9.0ms | 0.8ms |   10.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   15 | 是   | 内部 profile |    162.4ms |  403.7ms |  141.6ms |   5.5ms | 1.3ms |   16.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   16 | 是   | 内部 profile |    146.6ms |  403.2ms |  125.7ms |   5.4ms | 0.7ms |   17.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   17 | 是   | 内部 profile |    171.2ms |  402.5ms |  157.1ms |   5.3ms | 0.9ms |   10.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   18 | 是   | 内部 profile |    442.4ms |  604.4ms |  427.5ms |   5.3ms | 0.8ms |   10.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   19 | 是   | 内部 profile |    145.5ms |  401.8ms |  113.1ms |   5.8ms | 0.7ms |   10.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   20 | 是   | 内部 profile |    140.2ms |  403.1ms |  125.4ms |   6.0ms | 0.8ms |   11.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    1 | 是   | 内部 profile |    128.8ms |  403.0ms |  115.4ms |   5.3ms | 0.7ms |    9.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    2 | 是   | 内部 profile |    162.7ms |  401.9ms |  149.8ms |  10.9ms | 0.9ms |    9.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    3 | 是   | 内部 profile |    137.8ms |  403.6ms |  117.6ms |   5.5ms | 0.7ms |   16.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    4 | 是   | 内部 profile |    136.9ms |  403.5ms |  122.6ms |   6.1ms | 1.9ms |    9.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    5 | 是   | 内部 profile |    135.5ms |  402.1ms |  122.5ms |   5.2ms | 0.8ms |    9.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    6 | 是   | 内部 profile |    223.7ms |  402.8ms |  206.8ms |   6.4ms | 0.8ms |   12.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    7 | 是   | 内部 profile |    131.4ms |  402.5ms |  118.7ms |   5.3ms | 0.7ms |    9.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    8 | 是   | 内部 profile |    132.3ms |  402.0ms |  119.5ms |   5.5ms | 0.7ms |    9.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    9 | 是   | 内部 profile |    149.6ms |  402.7ms |  127.4ms |   6.2ms | 0.8ms |   18.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   10 | 是   | 内部 profile |    140.3ms |  402.0ms |  126.8ms |   6.4ms | 0.9ms |    9.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   11 | 是   | 内部 profile |    205.9ms |  404.1ms |  182.8ms |  12.7ms | 0.8ms |   17.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   12 | 是   | 内部 profile |    163.0ms |  402.4ms |  141.1ms |   5.4ms | 1.1ms |   17.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   13 | 是   | 内部 profile |    131.7ms |  402.7ms |  118.6ms |   5.1ms | 0.8ms |    9.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   14 | 是   | 内部 profile |    135.0ms |  405.2ms |  122.3ms |   4.9ms | 0.8ms |    9.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   15 | 是   | 内部 profile |    219.0ms |  403.6ms |  205.6ms |   5.2ms | 0.9ms |    9.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   16 | 是   | 内部 profile |    133.3ms |  402.7ms |  110.8ms |   4.8ms | 0.9ms |   10.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   17 | 是   | 内部 profile |    128.9ms |  401.2ms |  116.6ms |   5.3ms | 0.9ms |    8.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   18 | 是   | 内部 profile |    167.1ms |  402.9ms |  151.3ms |   6.5ms | 1.0ms |   10.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   19 | 是   | 内部 profile |    127.5ms |  401.6ms |  114.9ms |   4.8ms | 0.8ms |    9.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   20 | 是   | 内部 profile |    172.9ms |  413.9ms |  157.6ms |   6.2ms | 1.7ms |   10.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 | 是   | 内部 profile |    124.5ms |  403.3ms |  122.0ms |   5.4ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 | 是   | 内部 profile |    118.7ms |  201.2ms |  116.1ms |   5.4ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 | 是   | 内部 profile |    125.1ms |  402.4ms |  122.7ms |   5.9ms | 0.7ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 | 是   | 内部 profile |    236.2ms |  401.9ms |  233.7ms |   5.8ms | 0.7ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 | 是   | 内部 profile |    129.3ms |  403.5ms |  118.7ms |   6.0ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 | 是   | 内部 profile |    121.6ms |  200.0ms |  118.8ms |   4.9ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 | 是   | 内部 profile |    118.6ms |  200.9ms |  115.9ms |   5.1ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 | 是   | 内部 profile |    122.9ms |  201.9ms |  120.3ms |   5.3ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 | 是   | 内部 profile |    130.0ms |  200.5ms |  127.5ms |   6.2ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 | 是   | 内部 profile |    132.5ms |  403.3ms |  129.9ms |   5.5ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 | 是   | 内部 profile |    126.3ms |  401.7ms |  123.8ms |   5.8ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 | 是   | 内部 profile |    120.4ms |  201.4ms |  117.9ms |   5.0ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 | 是   | 内部 profile |    120.4ms |  201.4ms |  118.0ms |   5.4ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 | 是   | 内部 profile |    121.8ms |  201.7ms |  119.4ms |   5.6ms | 0.6ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 | 是   | 内部 profile |    237.5ms |  407.7ms |  235.0ms |   5.1ms | 0.7ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 | 是   | 内部 profile |    132.6ms |  401.7ms |  121.3ms |   5.6ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 | 是   | 内部 profile |    122.1ms |  200.9ms |  119.4ms |   5.0ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 | 是   | 内部 profile |    120.9ms |  200.7ms |  118.4ms |   4.9ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 | 是   | 内部 profile |    120.0ms |  201.7ms |  117.4ms |   5.1ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 | 是   | 内部 profile |    124.2ms |  402.6ms |  121.2ms |   5.0ms | 1.0ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 | 是   | 内部 profile |    230.9ms |  402.0ms |  217.8ms |  57.1ms | 1.9ms |    7.1ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 | 是   | 内部 profile |    174.8ms |  402.1ms |  169.1ms |  79.6ms | 2.1ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 | 是   | 内部 profile |    216.4ms |  402.0ms |  205.8ms |  50.9ms | 2.0ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 | 是   | 内部 profile |    159.1ms |  402.3ms |  153.6ms |  54.1ms | 1.8ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 | 是   | 内部 profile |    166.1ms |  402.4ms |  160.0ms |  62.2ms | 2.4ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 | 是   | 内部 profile |    160.7ms |  403.4ms |  155.2ms |  64.5ms | 2.0ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 | 是   | 内部 profile |    186.3ms |  403.7ms |  180.1ms |  67.7ms | 2.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 | 是   | 内部 profile |    225.1ms |  402.6ms |  219.8ms |  94.8ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 | 是   | 内部 profile |    154.9ms |  403.1ms |  150.1ms |  49.3ms | 1.7ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 | 是   | 内部 profile |    159.4ms |  402.6ms |  148.6ms |  52.7ms | 2.1ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 | 是   | 内部 profile |    158.5ms |  402.2ms |  147.5ms |  53.1ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 | 是   | 内部 profile |    154.3ms |  402.6ms |  149.4ms |  51.6ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 | 是   | 内部 profile |    211.7ms |  403.4ms |  204.2ms |  49.4ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 | 是   | 内部 profile |    158.7ms |  402.5ms |  153.6ms |  78.3ms | 2.2ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 | 是   | 内部 profile |    158.0ms |  402.5ms |  152.6ms |  67.5ms | 2.3ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 | 是   | 内部 profile |    172.8ms |  402.2ms |  167.7ms |  87.6ms | 2.0ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 | 是   | 内部 profile |    215.5ms |  403.2ms |  210.7ms |  61.3ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 | 是   | 内部 profile |    205.4ms |  403.1ms |  199.8ms |  97.0ms | 2.2ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 | 是   | 内部 profile |    166.8ms |  403.6ms |  160.6ms |  51.8ms | 2.0ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 | 是   | 内部 profile |    170.6ms |  402.6ms |  165.9ms |  52.1ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 | 是   | 内部 profile |    185.2ms |  403.2ms |  172.1ms |   5.0ms | 0.8ms |    9.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 | 是   | 内部 profile |    153.5ms |  403.2ms |  140.8ms |   5.3ms | 1.0ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 | 是   | 内部 profile |    140.0ms |  402.9ms |  126.1ms |   4.8ms | 0.8ms |    9.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 | 是   | 内部 profile |    135.0ms |  401.9ms |  116.9ms |   5.2ms | 0.9ms |   14.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 | 是   | 内部 profile |    156.1ms |  403.5ms |  136.5ms |   6.9ms | 1.2ms |   15.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 | 是   | 内部 profile |    141.9ms |  402.4ms |  128.1ms |   5.8ms | 0.8ms |   10.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 | 是   | 内部 profile |    142.5ms |  404.0ms |  121.9ms |   6.6ms | 0.9ms |   10.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 | 是   | 内部 profile |    296.8ms |  407.2ms |  273.1ms |   9.6ms | 1.0ms |   19.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 | 是   | 内部 profile |    136.8ms |  405.2ms |  123.5ms |   5.3ms | 0.8ms |    9.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 | 是   | 内部 profile |    137.4ms |  402.4ms |  123.6ms |   5.2ms | 0.8ms |   10.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 | 是   | 内部 profile |    163.9ms |  402.6ms |  142.5ms |   5.8ms | 1.0ms |   17.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 | 是   | 内部 profile |    145.1ms |  403.1ms |  130.5ms |   6.5ms | 0.8ms |   10.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 | 是   | 内部 profile |    143.6ms |  402.3ms |  128.6ms |   6.3ms | 1.1ms |   10.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 | 是   | 内部 profile |    159.2ms |  402.3ms |  117.4ms |   5.7ms | 0.9ms |   17.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 | 是   | 内部 profile |    207.5ms |  403.4ms |  194.7ms |   6.5ms | 0.8ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 | 是   | 内部 profile |    134.1ms |  402.5ms |  119.8ms |   5.4ms | 0.7ms |   10.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 | 是   | 内部 profile |    149.8ms |  403.4ms |  135.2ms |   6.3ms | 0.7ms |   10.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 | 是   | 内部 profile |    141.2ms |  402.8ms |  121.7ms |   5.8ms | 0.9ms |   15.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 | 是   | 内部 profile |    145.4ms |  403.0ms |  131.5ms |   5.1ms | 1.0ms |   10.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 | 是   | 内部 profile |    139.0ms |  402.6ms |  121.3ms |   5.6ms | 0.8ms |   13.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 | 是   | 内部 profile |    156.8ms |  402.2ms |  137.5ms |   6.3ms | 1.1ms |   13.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 | 是   | 内部 profile |    249.8ms |  403.6ms |  215.0ms |   9.9ms | 0.8ms |   31.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 | 是   | 内部 profile |    153.9ms |  403.4ms |  131.6ms |   5.6ms | 1.0ms |   18.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 | 是   | 内部 profile |    158.2ms |  401.5ms |  144.5ms |  21.9ms | 0.7ms |   10.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 | 是   | 内部 profile |    138.9ms |  403.4ms |  118.2ms |   5.3ms | 1.0ms |   16.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 | 是   | 内部 profile |    131.7ms |  403.3ms |  119.1ms |   5.4ms | 0.8ms |    9.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 | 是   | 内部 profile |    141.0ms |  402.8ms |  128.7ms |   5.4ms | 0.7ms |    8.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 | 是   | 内部 profile |    192.3ms |  403.1ms |  179.4ms |   5.3ms | 1.0ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 | 是   | 内部 profile |    131.9ms |  403.3ms |  117.6ms |   5.1ms | 0.8ms |   10.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 | 是   | 内部 profile |    132.7ms |  401.7ms |  117.7ms |   4.9ms | 0.8ms |   10.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 | 是   | 内部 profile |    138.4ms |  402.5ms |  118.3ms |   4.9ms | 0.8ms |   16.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 | 是   | 内部 profile |    132.4ms |  401.7ms |  119.3ms |   5.0ms | 0.8ms |    9.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 | 是   | 内部 profile |    132.9ms |  403.3ms |  119.4ms |   5.1ms | 0.8ms |    9.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 | 是   | 内部 profile |    133.2ms |  404.1ms |  121.2ms |   5.7ms | 0.9ms |    8.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 | 是   | 内部 profile |    143.8ms |  402.6ms |  128.6ms |   6.7ms | 0.8ms |   10.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 | 是   | 内部 profile |    209.9ms |  403.0ms |  187.8ms |  63.6ms | 0.7ms |   17.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 | 是   | 内部 profile |    142.2ms |  401.1ms |  128.3ms |   6.0ms | 1.1ms |    9.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 | 是   | 内部 profile |    136.2ms |  403.2ms |  122.7ms |   5.2ms | 0.8ms |   10.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 | 是   | 内部 profile |    168.2ms |  402.8ms |  133.1ms |   6.1ms | 1.0ms |   21.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 | 是   | 内部 profile |    132.4ms |  403.0ms |  119.7ms |   5.8ms | 0.8ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 | 是   | 内部 profile |    174.1ms |  405.2ms |  170.8ms |   5.2ms | 1.2ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 | 是   | 内部 profile |    194.1ms |  401.7ms |  191.2ms |   6.2ms | 0.6ms |    0.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 | 是   | 内部 profile |    134.2ms |  404.7ms |  130.7ms |   5.7ms | 1.3ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 | 是   | 内部 profile |    127.9ms |  403.9ms |  125.3ms |   5.6ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 | 是   | 内部 profile |    122.7ms |  201.2ms |  120.2ms |   5.6ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 | 是   | 内部 profile |    146.7ms |  405.1ms |  144.2ms |   4.9ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 | 是   | 内部 profile |    148.0ms |  404.6ms |  145.0ms |   6.3ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 | 是   | 内部 profile |    186.2ms |  405.2ms |  181.1ms |  14.3ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 | 是   | 内部 profile |    120.6ms |  401.9ms |  118.2ms |   5.2ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 | 是   | 内部 profile |    125.6ms |  402.0ms |  123.1ms |   5.0ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 | 是   | 内部 profile |    249.8ms |  405.6ms |  247.0ms |   5.7ms | 1.0ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 | 是   | 内部 profile |    154.5ms |  404.0ms |  151.6ms |   7.2ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 | 是   | 内部 profile |    130.5ms |  403.0ms |  127.8ms |   5.8ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 | 是   | 内部 profile |    149.0ms |  403.4ms |  146.2ms |   5.6ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 | 是   | 内部 profile |    198.3ms |  404.4ms |  195.0ms |  13.7ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 | 是   | 内部 profile |    174.5ms |  404.6ms |  166.2ms |  16.1ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 | 是   | 内部 profile |    144.8ms |  402.8ms |  142.1ms |   7.0ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 | 是   | 内部 profile |    169.3ms |  401.9ms |  166.5ms |   9.8ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 | 是   | 内部 profile |    238.1ms |  403.4ms |  235.4ms |   6.4ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 | 是   | 内部 profile |    137.1ms |  403.0ms |  134.6ms |   7.0ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    1 | 是   | 内部 profile |     20.2ms |  201.0ms |   18.4ms |   2.0ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    2 | 是   | 内部 profile |     23.0ms |  200.3ms |   21.7ms |   1.7ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    3 | 是   | 内部 profile |     20.7ms |  201.5ms |   19.8ms |   1.7ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    4 | 是   | 内部 profile |     17.7ms |  200.9ms |   16.7ms |   1.2ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    5 | 是   | 内部 profile |     19.4ms |  201.6ms |   18.2ms |   1.7ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    6 | 是   | 内部 profile |     20.3ms |  202.1ms |   19.2ms |   1.7ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    7 | 是   | 内部 profile |     21.7ms |  201.8ms |   20.5ms |   1.4ms | 0.7ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    8 | 是   | 内部 profile |     23.4ms |  201.2ms |   21.8ms |   1.6ms | 0.9ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    9 | 是   | 内部 profile |     22.8ms |  201.5ms |   21.6ms |   1.5ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   10 | 是   | 内部 profile |     19.1ms |  202.2ms |   18.0ms |   1.7ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   11 | 是   | 内部 profile |     21.1ms |  202.0ms |   20.1ms |   1.9ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   12 | 是   | 内部 profile |     31.8ms |  201.7ms |   30.5ms |   1.7ms | 0.8ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   13 | 是   | 内部 profile |     17.2ms |  213.0ms |   16.3ms |   1.4ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   14 | 是   | 内部 profile |     19.8ms |  200.5ms |   18.8ms |   1.4ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   15 | 是   | 内部 profile |     17.3ms |  200.9ms |   16.4ms |   1.3ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   16 | 是   | 内部 profile |     18.2ms |  202.6ms |   17.3ms |   1.4ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   17 | 是   | 内部 profile |     19.6ms |  202.2ms |   18.7ms |   1.5ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   18 | 是   | 内部 profile |     16.2ms |  202.1ms |   15.4ms |   1.2ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   19 | 是   | 内部 profile |     23.0ms |  202.2ms |   21.8ms |   1.4ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   20 | 是   | 内部 profile |     16.7ms |  201.9ms |   15.6ms |   1.2ms | 0.7ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    1 | 是   | 内部 profile |      9.2ms |  200.5ms |    6.9ms |   0.1ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    2 | 是   | 内部 profile |     10.5ms |  201.0ms |    8.9ms |   0.2ms | 0.5ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    3 | 是   | 内部 profile |     10.0ms |  201.1ms |    8.4ms |   0.1ms | 0.7ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    4 | 是   | 内部 profile |      9.3ms |  201.5ms |    8.0ms |   0.1ms | 0.5ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    5 | 是   | 内部 profile |     10.1ms |  201.3ms |    7.9ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    6 | 是   | 内部 profile |     12.1ms |  201.0ms |   10.5ms |   0.1ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    7 | 是   | 内部 profile |     17.7ms |  201.7ms |   16.0ms |   0.1ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    8 | 是   | 内部 profile |     25.2ms |  201.7ms |   23.5ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    9 | 是   | 内部 profile |     11.5ms |  201.9ms |    9.7ms |   0.1ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   10 | 是   | 内部 profile |     13.4ms |  200.7ms |   12.0ms |   0.2ms | 0.4ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   11 | 是   | 内部 profile |     10.4ms |  202.0ms |    9.0ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   12 | 是   | 内部 profile |     25.6ms |  201.4ms |   23.8ms |   0.1ms | 0.4ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   13 | 是   | 内部 profile |     19.3ms |  201.6ms |   17.1ms |   0.2ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   14 | 是   | 内部 profile |     10.2ms |  201.8ms |    8.9ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   15 | 是   | 内部 profile |      9.6ms |  201.6ms |    8.2ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   16 | 是   | 内部 profile |     10.0ms |  201.1ms |    8.5ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   17 | 是   | 内部 profile |     11.3ms |  202.1ms |    9.7ms |   0.1ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   18 | 是   | 内部 profile |      9.6ms |  201.1ms |    8.4ms |   0.1ms | 0.4ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   19 | 是   | 内部 profile |     11.1ms |  201.9ms |    9.7ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   20 | 是   | 内部 profile |      9.2ms |  202.0ms |    7.9ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    1 | 是   | 内部 profile |     10.8ms |  202.1ms |    9.0ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    2 | 是   | 内部 profile |     10.8ms |  201.9ms |    9.3ms |   0.1ms | 0.4ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    3 | 是   | 内部 profile |     10.0ms |  202.1ms |    8.5ms |   0.1ms | 0.5ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    4 | 是   | 内部 profile |      8.6ms |  202.0ms |    7.4ms |   0.1ms | 0.3ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    5 | 是   | 内部 profile |      9.9ms |  202.8ms |    8.4ms |   0.1ms | 0.4ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    6 | 是   | 内部 profile |     11.3ms |  202.6ms |    9.5ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    7 | 是   | 内部 profile |     21.9ms |  202.3ms |   18.0ms |   0.1ms | 1.7ms |    1.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    8 | 是   | 内部 profile |     11.6ms |  201.7ms |   10.1ms |   0.1ms | 0.5ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    9 | 是   | 内部 profile |     10.2ms |  201.0ms |    8.6ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   10 | 是   | 内部 profile |     10.7ms |  201.2ms |    9.1ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   11 | 是   | 内部 profile |     20.8ms |  201.8ms |   17.1ms |   0.3ms | 1.1ms |    2.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   12 | 是   | 内部 profile |     14.7ms |  201.4ms |   12.6ms |   0.1ms | 0.5ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   13 | 是   | 内部 profile |     10.6ms |  202.8ms |    8.9ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   14 | 是   | 内部 profile |     23.5ms |  201.6ms |   21.1ms |   0.1ms | 1.0ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   15 | 是   | 内部 profile |     13.6ms |  202.2ms |   11.7ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   16 | 是   | 内部 profile |      8.9ms |  202.4ms |    7.5ms |   0.1ms | 0.4ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   17 | 是   | 内部 profile |      9.0ms |  201.4ms |    7.7ms |   0.1ms | 0.4ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   18 | 是   | 内部 profile |      9.9ms |  201.2ms |    8.2ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   19 | 是   | 内部 profile |      9.3ms |  202.0ms |    8.0ms |   0.1ms | 0.3ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   20 | 是   | 内部 profile |      9.8ms |  201.7ms |    8.4ms |   0.1ms | 0.4ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    1 | 是   | 内部 profile |      9.9ms |  201.8ms |    8.3ms |   0.1ms | 0.4ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    2 | 是   | 内部 profile |     10.7ms |  201.4ms |    8.7ms |   0.1ms | 0.4ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    3 | 是   | 内部 profile |     10.5ms |  202.0ms |    8.9ms |   0.1ms | 0.4ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    4 | 是   | 内部 profile |     11.8ms |  202.0ms |    9.6ms |   0.1ms | 0.4ms |    1.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    5 | 是   | 内部 profile |     11.0ms |  201.5ms |    9.3ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    6 | 是   | 内部 profile |     11.7ms |  201.9ms |   10.0ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    7 | 是   | 内部 profile |     11.1ms |  202.5ms |    9.2ms |   0.1ms | 0.7ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    8 | 是   | 内部 profile |     10.0ms |  202.1ms |    8.4ms |   0.1ms | 0.5ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    9 | 是   | 内部 profile |     10.0ms |  201.9ms |    8.4ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   10 | 是   | 内部 profile |     13.4ms |  202.2ms |   10.2ms |   0.1ms | 0.8ms |    2.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   11 | 是   | 内部 profile |     12.5ms |  202.1ms |   10.3ms |   0.1ms | 0.5ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   12 | 是   | 内部 profile |     11.5ms |  202.6ms |    9.0ms |   0.1ms | 0.5ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   13 | 是   | 内部 profile |     24.3ms |  202.7ms |   22.0ms |   0.1ms | 0.6ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   14 | 是   | 内部 profile |     15.9ms |  203.0ms |   13.6ms |   0.1ms | 0.8ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   15 | 是   | 内部 profile |      8.6ms |  202.1ms |    7.2ms |   0.1ms | 0.3ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   16 | 是   | 内部 profile |     10.1ms |  202.1ms |    8.2ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   17 | 是   | 内部 profile |     19.9ms |  202.2ms |   14.0ms |   0.1ms | 1.8ms |    2.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   18 | 是   | 内部 profile |     10.5ms |  201.5ms |    8.6ms |   0.1ms | 0.5ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   19 | 是   | 内部 profile |     10.9ms |  203.5ms |    9.3ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   20 | 是   | 内部 profile |     16.0ms |  200.4ms |   12.9ms |   0.1ms | 0.6ms |    1.4ms |          - |      1 |        1 |
| uni-app vite vue3 / Vue SFC script 区块               |    1 | 是   | 产物变化     |   1126.6ms | 1126.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 | 是   | 产物变化     |    205.3ms |  205.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 | 是   | 产物变化     |    154.0ms |  154.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 | 是   | 产物变化     |    154.2ms |  154.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 | 是   | 产物变化     |    255.0ms |  255.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 | 是   | 产物变化     |    153.7ms |  153.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 | 是   | 产物变化     |    154.2ms |  154.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 | 是   | 产物变化     |    204.6ms |  204.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 | 是   | 产物变化     |    152.6ms |  152.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 | 是   | 产物变化     |    203.7ms |  203.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 | 是   | 产物变化     |    153.7ms |  153.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 | 是   | 产物变化     |    153.9ms |  153.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 | 是   | 产物变化     |    153.6ms |  153.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 | 是   | 产物变化     |    153.3ms |  153.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 | 是   | 产物变化     |    153.9ms |  153.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 | 是   | 产物变化     |    205.0ms |  205.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 | 是   | 产物变化     |    256.0ms |  256.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 | 是   | 产物变化     |    151.8ms |  151.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 | 是   | 产物变化     |    154.6ms |  154.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 | 是   | 产物变化     |    153.4ms |  153.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 | 是   | 产物变化     |    204.7ms |  204.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 | 是   | 产物变化     |    153.5ms |  153.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 | 是   | 产物变化     |    206.0ms |  206.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 | 是   | 产物变化     |    151.9ms |  151.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 | 是   | 产物变化     |    153.2ms |  153.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 | 是   | 产物变化     |    155.4ms |  155.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 | 是   | 产物变化     |    209.5ms |  209.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 | 是   | 产物变化     |    153.8ms |  153.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 | 是   | 产物变化     |    205.9ms |  205.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 | 是   | 产物变化     |    152.3ms |  152.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 | 是   | 产物变化     |    154.9ms |  154.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 | 是   | 产物变化     |    154.0ms |  154.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 | 是   | 产物变化     |    205.8ms |  205.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 | 是   | 产物变化     |    151.5ms |  151.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 | 是   | 产物变化     |    153.4ms |  153.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 | 是   | 产物变化     |    205.6ms |  205.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 | 是   | 产物变化     |    205.2ms |  205.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 | 是   | 产物变化     |    153.4ms |  153.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 | 是   | 产物变化     |    154.5ms |  154.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 | 是   | 产物变化     |    206.4ms |  206.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 | 是   | 产物变化     |    205.0ms |  205.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 | 是   | 产物变化     |    153.7ms |  153.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 | 是   | 产物变化     |    153.3ms |  153.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 | 是   | 产物变化     |    203.8ms |  203.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 | 是   | 产物变化     |    154.1ms |  154.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 | 是   | 产物变化     |    154.6ms |  154.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 | 是   | 产物变化     |    205.6ms |  205.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 | 是   | 产物变化     |    152.9ms |  152.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 | 是   | 产物变化     |    154.9ms |  154.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 | 是   | 产物变化     |    153.0ms |  153.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 | 是   | 产物变化     |    205.4ms |  205.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 | 是   | 产物变化     |    152.7ms |  152.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 | 是   | 产物变化     |    205.1ms |  205.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 | 是   | 产物变化     |    153.4ms |  153.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 | 是   | 产物变化     |    153.8ms |  153.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 | 是   | 产物变化     |    153.6ms |  153.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 | 是   | 产物变化     |    153.6ms |  153.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 | 是   | 产物变化     |    204.0ms |  204.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 | 是   | 产物变化     |    153.4ms |  153.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 | 是   | 产物变化     |    152.8ms |  152.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 | 是   | 产物变化     |   1278.8ms | 1278.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 | 是   | 产物变化     |    358.4ms |  358.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 | 是   | 产物变化     |    409.7ms |  409.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 | 是   | 产物变化     |    459.9ms |  459.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 | 是   | 产物变化     |    409.7ms |  409.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 | 是   | 产物变化     |    358.9ms |  358.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 | 是   | 产物变化     |    421.6ms |  421.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 | 是   | 产物变化     |    408.3ms |  408.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 | 是   | 产物变化     |    359.3ms |  359.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 | 是   | 产物变化     |    357.7ms |  357.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 | 是   | 产物变化     |    359.3ms |  359.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 | 是   | 产物变化     |    412.3ms |  412.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 | 是   | 产物变化     |    408.0ms |  408.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 | 是   | 产物变化     |    359.8ms |  359.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 | 是   | 产物变化     |    357.6ms |  357.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 | 是   | 产物变化     |    359.9ms |  359.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 | 是   | 产物变化     |    356.2ms |  356.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 | 是   | 产物变化     |    461.6ms |  461.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 | 是   | 产物变化     |    409.8ms |  409.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 | 是   | 产物变化     |    408.7ms |  408.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 | 是   | 产物变化     |    267.0ms |  267.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 | 是   | 产物变化     |    203.8ms |  203.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 | 是   | 产物变化     |    206.2ms |  206.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 | 是   | 产物变化     |    204.1ms |  204.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 | 是   | 产物变化     |    204.6ms |  204.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 | 是   | 产物变化     |    204.5ms |  204.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 | 是   | 产物变化     |    204.7ms |  204.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 | 是   | 产物变化     |    152.2ms |  152.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 | 是   | 产物变化     |    255.6ms |  255.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 | 是   | 产物变化     |    153.6ms |  153.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 | 是   | 产物变化     |    257.1ms |  257.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 | 是   | 产物变化     |    204.6ms |  204.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 | 是   | 产物变化     |    256.2ms |  256.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 | 是   | 产物变化     |    153.5ms |  153.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 | 是   | 产物变化     |    203.9ms |  203.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 | 是   | 产物变化     |    206.3ms |  206.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 | 是   | 产物变化     |    205.0ms |  205.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 | 是   | 产物变化     |    203.8ms |  203.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 | 是   | 产物变化     |    204.9ms |  204.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 | 是   | 产物变化     |    205.6ms |  205.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 | 是   | 产物变化     |    203.7ms |  203.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 | 是   | 产物变化     |    206.2ms |  206.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 | 是   | 产物变化     |    205.7ms |  205.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 | 是   | 产物变化     |    152.9ms |  152.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 | 是   | 产物变化     |    204.2ms |  204.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 | 是   | 产物变化     |    205.4ms |  205.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 | 是   | 产物变化     |    205.1ms |  205.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 | 是   | 产物变化     |    203.2ms |  203.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 | 是   | 产物变化     |    205.8ms |  205.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 | 是   | 产物变化     |    205.1ms |  205.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 | 是   | 产物变化     |    204.9ms |  204.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 | 是   | 产物变化     |    203.6ms |  203.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 | 是   | 产物变化     |    203.6ms |  203.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 | 是   | 产物变化     |    204.4ms |  204.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 | 是   | 产物变化     |    205.8ms |  205.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 | 是   | 产物变化     |    205.6ms |  205.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 | 是   | 产物变化     |    231.6ms |  231.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 | 是   | 产物变化     |    256.3ms |  256.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 | 是   | 产物变化     |    204.7ms |  204.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 | 是   | 产物变化     |    205.1ms |  205.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 | 是   | 产物变化     |    706.6ms |  706.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 | 是   | 产物变化     |    410.4ms |  410.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 | 是   | 产物变化     |    309.5ms |  309.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 | 是   | 产物变化     |    410.4ms |  410.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 | 是   | 产物变化     |    309.3ms |  309.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 | 是   | 产物变化     |    311.0ms |  311.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 | 是   | 产物变化     |    255.8ms |  255.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 | 是   | 产物变化     |    356.3ms |  356.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 | 是   | 产物变化     |    355.9ms |  355.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 | 是   | 产物变化     |    308.3ms |  308.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 | 是   | 产物变化     |    358.7ms |  358.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 | 是   | 产物变化     |    256.3ms |  256.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 | 是   | 产物变化     |    307.1ms |  307.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 | 是   | 产物变化     |    307.9ms |  307.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 | 是   | 产物变化     |    307.4ms |  307.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 | 是   | 产物变化     |    359.6ms |  359.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 | 是   | 产物变化     |    306.3ms |  306.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 | 是   | 产物变化     |    306.9ms |  306.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 | 是   | 产物变化     |    306.4ms |  306.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 | 是   | 产物变化     |    359.4ms |  359.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 | 是   | 产物变化     |    307.8ms |  307.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 | 是   | 产物变化     |    307.1ms |  307.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 | 是   | 产物变化     |    307.1ms |  307.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 | 是   | 产物变化     |    305.5ms |  305.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 | 是   | 产物变化     |    306.6ms |  306.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 | 是   | 产物变化     |    306.7ms |  306.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 | 是   | 产物变化     |    358.8ms |  358.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 | 是   | 产物变化     |    256.2ms |  256.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 | 是   | 产物变化     |    307.4ms |  307.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 | 是   | 产物变化     |    306.6ms |  306.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 | 是   | 产物变化     |    306.9ms |  306.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 | 是   | 产物变化     |    306.9ms |  306.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 | 是   | 产物变化     |    319.5ms |  319.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 | 是   | 产物变化     |    306.5ms |  306.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 | 是   | 产物变化     |    304.8ms |  304.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 | 是   | 产物变化     |    254.5ms |  254.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 | 是   | 产物变化     |    305.9ms |  305.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 | 是   | 产物变化     |    307.1ms |  307.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 | 是   | 产物变化     |    257.1ms |  257.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 | 是   | 产物变化     |    306.3ms |  306.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 | 是   | 产物变化     |    307.6ms |  307.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 | 是   | 产物变化     |    356.8ms |  356.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 | 是   | 产物变化     |    306.4ms |  306.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 | 是   | 产物变化     |    306.1ms |  306.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 | 是   | 产物变化     |    255.3ms |  255.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 | 是   | 产物变化     |    305.6ms |  305.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 | 是   | 产物变化     |    205.1ms |  205.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 | 是   | 产物变化     |    304.2ms |  304.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 | 是   | 产物变化     |    357.8ms |  357.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 | 是   | 产物变化     |    305.7ms |  305.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 | 是   | 产物变化     |    305.3ms |  305.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 | 是   | 产物变化     |    308.7ms |  308.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 | 是   | 产物变化     |    305.3ms |  305.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 | 是   | 产物变化     |    305.3ms |  305.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 | 是   | 产物变化     |    307.2ms |  307.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 | 是   | 产物变化     |    255.0ms |  255.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 | 是   | 产物变化     |    256.5ms |  256.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 | 是   | 产物变化     |    254.9ms |  254.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 | 是   | 产物变化     |    255.5ms |  255.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 | 是   | 产物变化     |    306.1ms |  306.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    1 | 是   | 产物变化     |    255.3ms |  255.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    2 | 是   | 产物变化     |    306.4ms |  306.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    3 | 是   | 产物变化     |    306.6ms |  306.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    4 | 是   | 产物变化     |    306.3ms |  306.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    5 | 是   | 产物变化     |    307.1ms |  307.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    6 | 是   | 产物变化     |    307.9ms |  307.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    7 | 是   | 产物变化     |    306.4ms |  306.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    8 | 是   | 产物变化     |    257.2ms |  257.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    9 | 是   | 产物变化     |    305.6ms |  305.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   10 | 是   | 产物变化     |    307.4ms |  307.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   11 | 是   | 产物变化     |    307.2ms |  307.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   12 | 是   | 产物变化     |    307.0ms |  307.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   13 | 是   | 产物变化     |    308.0ms |  308.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   14 | 是   | 产物变化     |    307.4ms |  307.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   15 | 是   | 产物变化     |    307.6ms |  307.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   16 | 是   | 产物变化     |    305.8ms |  305.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   17 | 是   | 产物变化     |    306.5ms |  306.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   18 | 是   | 产物变化     |    256.2ms |  256.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   19 | 是   | 产物变化     |    257.0ms |  257.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   20 | 是   | 产物变化     |    254.8ms |  254.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    1 | 是   | 产物变化     |    102.8ms |  102.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    2 | 是   | 产物变化     |    102.2ms |  102.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    3 | 是   | 产物变化     |    101.8ms |  101.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    4 | 是   | 产物变化     |    101.7ms |  101.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    5 | 是   | 产物变化     |    102.9ms |  102.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    6 | 是   | 产物变化     |    102.2ms |  102.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    7 | 是   | 产物变化     |    102.4ms |  102.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    8 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    9 | 是   | 产物变化     |    103.0ms |  103.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   10 | 是   | 产物变化     |    103.6ms |  103.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   11 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   12 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   13 | 是   | 产物变化     |    101.1ms |  101.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   14 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   15 | 是   | 产物变化     |    103.3ms |  103.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   16 | 是   | 产物变化     |    102.8ms |  102.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   17 | 是   | 产物变化     |    101.1ms |  101.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   18 | 是   | 产物变化     |    103.1ms |  103.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   19 | 是   | 产物变化     |    101.8ms |  101.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   20 | 是   | 产物变化     |    102.2ms |  102.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    1 | 是   | 产物变化     |     52.2ms |   52.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    2 | 是   | 产物变化     |    103.5ms |  103.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    3 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    4 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    5 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    6 | 是   | 产物变化     |    102.6ms |  102.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    7 | 是   | 产物变化     |    102.6ms |  102.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    8 | 是   | 产物变化     |     51.4ms |   51.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    9 | 是   | 产物变化     |     51.6ms |   51.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   10 | 是   | 产物变化     |     52.2ms |   52.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   11 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   12 | 是   | 产物变化     |     50.5ms |   50.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   13 | 是   | 产物变化     |     52.1ms |   52.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   14 | 是   | 产物变化     |     51.6ms |   51.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   15 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   16 | 是   | 产物变化     |    102.6ms |  102.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   17 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   18 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   19 | 是   | 产物变化     |    103.3ms |  103.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   20 | 是   | 产物变化     |     51.9ms |   51.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    1 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    2 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    3 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    4 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    5 | 是   | 产物变化     |     51.3ms |   51.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    6 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    7 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    8 | 是   | 产物变化     |     52.3ms |   52.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    9 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   10 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   11 | 是   | 产物变化     |     51.3ms |   51.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   12 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   13 | 是   | 产物变化     |    102.2ms |  102.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   14 | 是   | 产物变化     |     51.0ms |   51.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   15 | 是   | 产物变化     |     51.6ms |   51.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   16 | 是   | 产物变化     |     50.3ms |   50.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   17 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   18 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   19 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   20 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 | 是   | 产物变化     |     50.4ms |   50.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 | 是   | 产物变化     |     50.3ms |   50.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 | 是   | 产物变化     |     51.0ms |   51.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 | 是   | 产物变化     |    102.9ms |  102.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 | 是   | 产物变化     |     52.0ms |   52.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 | 是   | 产物变化     |    102.3ms |  102.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 | 是   | 产物变化     |    102.5ms |  102.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 | 是   | 产物变化     |     51.4ms |   51.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 | 是   | 产物变化     |    102.6ms |  102.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 | 是   | 产物变化     |    102.2ms |  102.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 | 是   | 产物变化     |    103.2ms |  103.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 | 是   | 产物变化     |    103.3ms |  103.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |

说明：

- weapp-vite 项目使用 dev 模式 JSONL profile 采集 HMR 内部阶段耗时。
- 非 weapp-vite 项目使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时，内部阶段列没有框架可比的公开数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
