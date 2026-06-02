# HMR 基准报告

生成时间：2026-06-02T08:29:45.900Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 一眼结论

- HMR 最快：weapp-vite 原生 / WXML 文件，平均 10.6ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 511.0ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：weapp-vite 使用内部 profile；其他框架使用源文件写入到目标产物更新的墙钟耗时，因此阶段列只在 weapp-vite 场景有值。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式     | 平均 HMR | 相对最快 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | ------------ | -------: | -------: | -------: | -------: | -----: | ----: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   10.6ms |    1.00x |  201.8ms |    8.3ms |  0.1ms | 0.5ms |    0.2ms |          - |        1.0 |          1.0 |
|    2 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   13.1ms |    1.23x |  202.3ms |   10.7ms |  0.1ms | 0.5ms |    1.4ms |          - |        1.0 |          1.0 |
|    3 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 内部 profile |   14.1ms |    1.32x |  203.0ms |   11.5ms |  0.1ms | 0.5ms |    1.4ms |          - |        1.0 |          1.0 |
|    4 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 内部 profile |   22.7ms |    2.14x |  201.8ms |   21.1ms |  1.8ms | 0.8ms |    0.3ms |          - |        1.0 |          1.0 |
|    5 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化     |   56.4ms |    5.30x |   56.4ms |        - |      - |     - |        - |          - |          - |            - |
|    6 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化     |   58.9ms |    5.53x |   58.9ms |        - |      - |     - |        - |          - |          - |            - |
|    7 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化     |   64.4ms |    6.06x |   64.4ms |        - |      - |     - |        - |          - |          - |            - |
|    8 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化     |   76.6ms |    7.20x |   76.6ms |        - |      - |     - |        - |          - |          - |            - |
|    9 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  129.1ms |   12.13x |  352.3ms |  125.9ms |  5.7ms | 0.6ms |    0.2ms |      0.0ms |        1.0 |          1.0 |
|   10 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 内部 profile |  132.7ms |   12.48x |  302.2ms |  130.0ms |  5.3ms | 0.6ms |    0.2ms |      0.0ms |        1.0 |          1.0 |
|   11 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 内部 profile |  139.6ms |   13.12x |  393.0ms |  120.1ms |  5.7ms | 0.7ms |   13.9ms |      0.0ms |        1.0 |          1.0 |
|   12 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  143.8ms |   13.51x |  402.6ms |  127.7ms |  5.3ms | 0.7ms |   11.4ms |      0.0ms |        1.0 |          1.0 |
|   13 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  151.3ms |   14.22x |  403.0ms |  133.3ms |  5.6ms | 0.7ms |   13.3ms |      0.0ms |        1.0 |          1.0 |
|   14 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化     |  161.2ms |   15.15x |  161.2ms |        - |      - |     - |        - |          - |          - |            - |
|   15 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化     |  161.4ms |   15.17x |  161.4ms |        - |      - |     - |        - |          - |          - |            - |
|   16 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 内部 profile |  165.3ms |   15.54x |  403.1ms |  158.0ms | 62.2ms | 2.1ms |    0.6ms |      0.0ms |        1.0 |          3.0 |
|   17 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 内部 profile |  169.2ms |   15.91x |  402.6ms |  162.7ms | 68.2ms | 1.7ms |    0.8ms |      0.0ms |        1.0 |          3.0 |
|   18 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 内部 profile |  173.0ms |   16.26x |  424.2ms |  156.9ms |  6.7ms | 0.9ms |   11.5ms |      0.0ms |        1.0 |          1.0 |
|   19 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化     |  207.2ms |   19.47x |  207.2ms |        - |      - |     - |        - |          - |          - |            - |
|   20 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化     |  225.6ms |   21.20x |  225.6ms |        - |      - |     - |        - |          - |          - |            - |
|   21 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化     |  259.1ms |   24.35x |  259.1ms |        - |      - |     - |        - |          - |          - |            - |
|   22 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化     |  305.6ms |   28.72x |  305.6ms |        - |      - |     - |        - |          - |          - |            - |
|   23 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化     |  405.7ms |   38.12x |  405.7ms |        - |      - |     - |        - |          - |          - |            - |
|   24 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化     |  418.4ms |   39.32x |  418.4ms |        - |      - |     - |        - |          - |          - |            - |
|   25 | taro vue3 / 页面配置                                  | taro vue3                     | Vue SFC  | 产物变化     |  504.7ms |   47.43x |  504.7ms |        - |      - |     - |        - |          - |          - |            - |
|   26 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化     |  511.0ms |   48.02x |  511.0ms |        - |      - |     - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式     | HMR 总耗时 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                            |
| ----------------------------------------------------- | ------------ | ---------: | -------: | -------: | -----: | ----: | -------: | ---------: | -----: | -------: | --------------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 内部 profile |    165.3ms |  403.1ms |  158.0ms | 62.2ms | 2.1ms |    0.6ms |      0.0ms |    1.0 |      3.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC template 区块             | 内部 profile |    139.6ms |  393.0ms |  120.1ms |  5.7ms | 0.7ms |   13.9ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC style 区块                | 内部 profile |    173.0ms |  424.2ms |  156.9ms |  6.7ms | 0.9ms |   11.5ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC 页面配置                  | 内部 profile |    132.7ms |  302.2ms |  130.0ms |  5.3ms | 0.6ms |    0.2ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC script 区块   | 内部 profile |    169.2ms |  402.6ms |  162.7ms | 68.2ms | 1.7ms |    0.8ms |      0.0ms |    1.0 |      3.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC template 区块 | 内部 profile |    151.3ms |  403.0ms |  133.3ms |  5.6ms | 0.7ms |   13.3ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC style 区块    | 内部 profile |    143.8ms |  402.6ms |  127.7ms |  5.3ms | 0.7ms |   11.4ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 内部 profile |    129.1ms |  352.3ms |  125.9ms |  5.7ms | 0.6ms |    0.2ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`       |
| weapp-vite 原生 / JS 文件                             | 内部 profile |     22.7ms |  201.8ms |   21.1ms |  1.8ms | 0.8ms |    0.3ms |          - |    1.0 |      1.0 | `src/pages/index/index.js`        |
| weapp-vite 原生 / WXML 文件                           | 内部 profile |     10.6ms |  201.8ms |    8.3ms |  0.1ms | 0.5ms |    0.2ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxml`      |
| weapp-vite 原生 / WXSS 文件                           | 内部 profile |     14.1ms |  203.0ms |   11.5ms |  0.1ms | 0.5ms |    1.4ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxss`      |
| weapp-vite 原生 / JSON 文件                           | 内部 profile |     13.1ms |  202.3ms |   10.7ms |  0.1ms | 0.5ms |    1.4ms |          - |    1.0 |      1.0 | `src/pages/index/index.json`      |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化     |    225.6ms |  225.6ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化     |    161.4ms |  161.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化     |    161.2ms |  161.2ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC script 区块                       | 产物变化     |    511.0ms |  511.0ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC template 区块                     | 产物变化     |    259.1ms |  259.1ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC style 区块                        | 产物变化     |    207.2ms |  207.2ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC script 区块                       | 产物变化     |    405.7ms |  405.7ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC template 区块                     | 产物变化     |    305.6ms |  305.6ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / CSS 文件                                  | 产物变化     |    418.4ms |  418.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.css`       |
| taro vue3 / 页面配置                                  | 产物变化     |    504.7ms |  504.7ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index/index.config.ts` |
| mpx / template 区块                                   | 产物变化     |     76.6ms |   76.6ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / script 区块                                     | 产物变化     |     56.4ms |   56.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / style 区块                                      | 产物变化     |     64.4ms |   64.4ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / 页面配置                                        | 产物变化     |     58.9ms |   58.9ms |        - |      - |     - |        - |          - |      - |        - | `src/pages/index.mpx`             |

## 原始明细

| 场景                                                  | 轮次 | 通过 | 采集方式     | HMR 总耗时 | 外部等待 | 构建核心 |    转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | ---- | ------------ | ---------: | -------: | -------: | ------: | ----: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 | 是   | 内部 profile |    158.6ms |  403.7ms |  145.6ms |  65.4ms | 1.6ms |    7.1ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    2 | 是   | 内部 profile |    164.3ms |  402.5ms |  157.8ms |  56.8ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    3 | 是   | 内部 profile |    164.1ms |  401.4ms |  156.2ms |  63.2ms | 1.6ms |    0.4ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    4 | 是   | 内部 profile |    203.6ms |  405.0ms |  196.9ms |  68.8ms | 1.8ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    5 | 是   | 内部 profile |    170.9ms |  403.8ms |  154.1ms |  50.7ms | 9.6ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    6 | 是   | 内部 profile |    164.6ms |  403.3ms |  159.3ms |  53.6ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    7 | 是   | 内部 profile |    150.8ms |  403.1ms |  145.7ms |  70.8ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    8 | 是   | 内部 profile |    162.3ms |  402.7ms |  153.5ms |  66.8ms | 1.7ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |    9 | 是   | 内部 profile |    203.9ms |  402.3ms |  199.2ms |  61.1ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   10 | 是   | 内部 profile |    144.8ms |  402.5ms |  136.7ms |  55.2ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   11 | 是   | 内部 profile |    148.4ms |  404.5ms |  143.6ms |  60.8ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   12 | 是   | 内部 profile |    156.3ms |  401.8ms |  146.1ms |  72.9ms | 1.5ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   13 | 是   | 内部 profile |    146.8ms |  404.6ms |  142.1ms |  58.3ms | 1.9ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   14 | 是   | 内部 profile |    147.4ms |  404.1ms |  142.9ms |  57.2ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   15 | 是   | 内部 profile |    207.4ms |  402.1ms |  203.1ms |  69.3ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   16 | 是   | 内部 profile |    158.7ms |  402.5ms |  153.6ms |  70.7ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   17 | 是   | 内部 profile |    151.1ms |  402.4ms |  145.4ms |  58.4ms | 1.5ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   18 | 是   | 内部 profile |    159.1ms |  402.4ms |  151.8ms |  64.5ms | 1.5ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   19 | 是   | 内部 profile |    194.4ms |  402.8ms |  189.0ms |  63.6ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC script 区块               |   20 | 是   | 内部 profile |    148.7ms |  404.2ms |  137.5ms |  55.4ms | 1.6ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu / Vue SFC template 区块             |    1 | 是   | 内部 profile |    129.3ms |  402.6ms |  115.8ms |   5.2ms | 0.8ms |    9.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    2 | 是   | 内部 profile |    132.9ms |  403.1ms |  110.0ms |   5.0ms | 0.7ms |   18.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    3 | 是   | 内部 profile |    129.4ms |  403.9ms |  116.2ms |   5.3ms | 0.6ms |    9.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    4 | 是   | 内部 profile |    130.0ms |  402.9ms |  117.0ms |   5.5ms | 0.7ms |    9.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    5 | 是   | 内部 profile |    133.8ms |  403.1ms |  118.0ms |   5.6ms | 0.7ms |    9.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    6 | 是   | 内部 profile |    138.6ms |  403.3ms |  115.8ms |   6.6ms | 0.6ms |   16.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    7 | 是   | 内部 profile |    148.4ms |  403.4ms |  121.2ms |   8.0ms | 0.8ms |   18.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    8 | 是   | 内部 profile |    148.7ms |  403.5ms |  117.2ms |   5.6ms | 1.1ms |   24.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |    9 | 是   | 内部 profile |    123.3ms |  402.5ms |  109.0ms |   4.4ms | 0.7ms |   10.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   10 | 是   | 内部 profile |    178.7ms |  403.7ms |  165.6ms |   7.3ms | 0.7ms |    9.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   11 | 是   | 内部 profile |    131.7ms |  402.7ms |  107.8ms |   4.8ms | 0.6ms |   13.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   12 | 是   | 内部 profile |    128.3ms |  404.1ms |  111.3ms |   5.9ms | 0.6ms |   11.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   13 | 是   | 内部 profile |    126.4ms |  403.0ms |  113.4ms |   5.1ms | 0.8ms |    9.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   14 | 是   | 内部 profile |    140.2ms |  402.8ms |  116.1ms |   5.9ms | 0.7ms |   19.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   15 | 是   | 内部 profile |    135.4ms |  402.0ms |  115.6ms |   5.9ms | 0.7ms |   14.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   16 | 是   | 内部 profile |    130.0ms |  402.4ms |  117.0ms |   4.9ms | 0.6ms |   10.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   17 | 是   | 内部 profile |    207.1ms |  403.1ms |  177.3ms |   5.2ms | 0.6ms |   24.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   18 | 是   | 内部 profile |    147.9ms |  403.3ms |  113.6ms |   7.9ms | 0.6ms |   19.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   19 | 是   | 内部 profile |    120.0ms |  201.7ms |  107.9ms |   4.6ms | 0.6ms |    8.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC template 区块             |   20 | 是   | 内部 profile |    131.8ms |  403.5ms |  116.8ms |   5.1ms | 0.8ms |   10.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    1 | 是   | 内部 profile |    121.5ms |  401.8ms |  109.1ms |   4.2ms | 0.6ms |    8.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    2 | 是   | 内部 profile |    162.6ms |  406.1ms |  144.6ms |   5.8ms | 0.8ms |   13.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    3 | 是   | 内部 profile |    143.4ms |  403.2ms |  130.1ms |   5.9ms | 0.9ms |    9.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    4 | 是   | 内部 profile |    136.5ms |  402.4ms |  116.6ms |   5.8ms | 0.6ms |   10.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    5 | 是   | 内部 profile |    125.8ms |  403.0ms |  113.6ms |   5.1ms | 0.6ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    6 | 是   | 内部 profile |    126.3ms |  404.3ms |  113.7ms |   4.8ms | 0.7ms |    9.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    7 | 是   | 内部 profile |    135.2ms |  403.2ms |  122.8ms |   4.6ms | 0.6ms |    9.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    8 | 是   | 内部 profile |    136.2ms |  411.1ms |  119.1ms |   5.3ms | 0.6ms |   13.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |    9 | 是   | 内部 profile |    128.8ms |  402.8ms |  112.3ms |   5.0ms | 0.6ms |   12.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   10 | 是   | 内部 profile |    183.5ms |  402.9ms |  165.4ms |   5.5ms | 0.7ms |   12.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   11 | 是   | 内部 profile |    375.6ms |  606.3ms |  346.1ms |  29.0ms | 2.4ms |   18.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   12 | 是   | 内部 profile |    174.2ms |  411.0ms |  157.4ms |   5.9ms | 1.4ms |   12.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   13 | 是   | 内部 profile |    154.6ms |  403.6ms |  139.1ms |   6.0ms | 0.8ms |   11.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   14 | 是   | 内部 profile |    216.1ms |  403.7ms |  199.5ms |   7.2ms | 0.7ms |   12.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   15 | 是   | 内部 profile |    148.5ms |  402.6ms |  133.8ms |   5.4ms | 0.8ms |   10.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   16 | 是   | 内部 profile |    157.0ms |  402.1ms |  142.6ms |   4.5ms | 0.7ms |   10.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   17 | 是   | 内部 profile |    160.6ms |  402.2ms |  147.8ms |   4.7ms | 0.9ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   18 | 是   | 内部 profile |    375.7ms |  606.4ms |  355.3ms |   7.3ms | 1.5ms |   14.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   19 | 是   | 内部 profile |    150.9ms |  400.9ms |  135.9ms |   7.1ms | 0.8ms |   11.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC style 区块                |   20 | 是   | 内部 profile |    147.8ms |  403.6ms |  133.7ms |   5.3ms | 1.5ms |    9.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 | 是   | 内部 profile |    127.1ms |  402.8ms |  124.6ms |   6.4ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 | 是   | 内部 profile |    125.2ms |  403.1ms |  122.4ms |   5.1ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 | 是   | 内部 profile |    130.4ms |  401.3ms |  127.7ms |   5.9ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 | 是   | 内部 profile |    149.2ms |  402.1ms |  146.2ms |   8.5ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 | 是   | 内部 profile |    195.9ms |  402.6ms |  193.2ms |   5.8ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 | 是   | 内部 profile |    121.7ms |  402.2ms |  114.7ms |   5.4ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 | 是   | 内部 profile |    120.9ms |  201.1ms |  118.4ms |   4.3ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 | 是   | 内部 profile |    116.4ms |  201.7ms |  114.2ms |   4.3ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 | 是   | 内部 profile |    119.4ms |  200.4ms |  117.0ms |   4.6ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 | 是   | 内部 profile |    120.0ms |  200.9ms |  117.5ms |   5.3ms | 0.5ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 | 是   | 内部 profile |    119.3ms |  202.1ms |  116.8ms |   5.5ms | 0.7ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 | 是   | 内部 profile |    120.3ms |  202.7ms |  117.8ms |   4.7ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 | 是   | 内部 profile |    121.9ms |  200.4ms |  119.7ms |   4.9ms | 0.5ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 | 是   | 内部 profile |    216.7ms |  406.2ms |  214.2ms |   5.0ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 | 是   | 内部 profile |    130.3ms |  406.7ms |  127.5ms |   4.8ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 | 是   | 内部 profile |    121.6ms |  201.2ms |  119.0ms |   5.4ms | 0.7ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 | 是   | 内部 profile |    127.2ms |  401.5ms |  124.8ms |   5.4ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 | 是   | 内部 profile |    122.6ms |  200.1ms |  119.8ms |   5.6ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 | 是   | 内部 profile |    128.5ms |  402.8ms |  126.2ms |   4.8ms | 0.6ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 | 是   | 内部 profile |    120.3ms |  201.8ms |  117.7ms |   4.8ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 | 是   | 内部 profile |    188.0ms |  403.2ms |  169.7ms |  67.8ms | 1.8ms |   11.8ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 | 是   | 内部 profile |    170.3ms |  402.8ms |  163.7ms |  65.4ms | 1.7ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 | 是   | 内部 profile |    207.3ms |  401.8ms |  202.1ms |  66.0ms | 1.7ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 | 是   | 内部 profile |    156.9ms |  401.6ms |  151.0ms |  55.5ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 | 是   | 内部 profile |    152.9ms |  403.1ms |  147.6ms |  67.1ms | 2.2ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 | 是   | 内部 profile |    161.7ms |  401.6ms |  156.2ms |  60.2ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 | 是   | 内部 profile |    152.6ms |  403.0ms |  146.8ms |  73.0ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 | 是   | 内部 profile |    207.0ms |  403.3ms |  201.0ms |  77.4ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 | 是   | 内部 profile |    149.4ms |  404.6ms |  142.4ms |  54.6ms | 1.7ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 | 是   | 内部 profile |    150.8ms |  401.6ms |  139.2ms |  55.1ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 | 是   | 内部 profile |    158.6ms |  402.0ms |  152.4ms |  53.9ms | 1.6ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 | 是   | 内部 profile |    154.6ms |  402.3ms |  149.4ms |  56.6ms | 1.5ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 | 是   | 内部 profile |    203.4ms |  402.5ms |  197.8ms | 160.4ms | 1.8ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 | 是   | 内部 profile |    151.0ms |  402.6ms |  146.4ms |  67.7ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 | 是   | 内部 profile |    159.4ms |  402.9ms |  154.6ms |  63.2ms | 1.8ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 | 是   | 内部 profile |    152.1ms |  402.4ms |  147.4ms |  80.9ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 | 是   | 内部 profile |    208.3ms |  403.4ms |  203.3ms |  61.5ms | 2.0ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 | 是   | 内部 profile |    153.1ms |  402.7ms |  148.6ms |  60.3ms | 1.6ms |    0.2ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 | 是   | 内部 profile |    177.2ms |  402.1ms |  170.4ms |  58.3ms | 1.6ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 | 是   | 内部 profile |    170.3ms |  401.8ms |  163.2ms |  58.4ms | 1.9ms |    0.3ms |      0.0ms |      1 |        3 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 | 是   | 内部 profile |    131.4ms |  402.9ms |  114.6ms |   5.3ms | 0.6ms |   12.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 | 是   | 内部 profile |    203.0ms |  403.5ms |  189.5ms |   4.9ms | 0.7ms |    9.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 | 是   | 内部 profile |    132.7ms |  402.3ms |  119.2ms |   5.2ms | 0.6ms |    9.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 | 是   | 内部 profile |    190.8ms |  403.7ms |  173.7ms |   7.3ms | 0.8ms |   12.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 | 是   | 内部 profile |    136.2ms |  404.6ms |  123.0ms |   4.5ms | 0.7ms |    9.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 | 是   | 内部 profile |    127.9ms |  402.9ms |  114.1ms |   5.1ms | 1.1ms |    9.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 | 是   | 内部 profile |    138.2ms |  402.8ms |  118.1ms |   5.7ms | 0.6ms |   15.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 | 是   | 内部 profile |    144.0ms |  403.0ms |  113.4ms |   5.9ms | 0.7ms |   24.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 | 是   | 内部 profile |    188.8ms |  401.8ms |  176.0ms |   5.6ms | 0.8ms |    8.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 | 是   | 内部 profile |    142.9ms |  404.1ms |  126.4ms |   5.6ms | 0.6ms |   11.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 | 是   | 内部 profile |    141.7ms |  402.8ms |  119.7ms |   6.1ms | 0.7ms |   15.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 | 是   | 内部 profile |    146.2ms |  403.2ms |  126.5ms |   6.3ms | 0.6ms |   13.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 | 是   | 内部 profile |    143.1ms |  403.0ms |  116.9ms |   6.7ms | 0.7ms |   17.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 | 是   | 内部 profile |    146.2ms |  404.4ms |  126.0ms |   6.0ms | 0.8ms |   14.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 | 是   | 内部 profile |    133.2ms |  401.9ms |  111.0ms |   4.9ms | 0.7ms |   18.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 | 是   | 内部 profile |    222.5ms |  403.0ms |  208.4ms |   6.1ms | 0.7ms |   10.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 | 是   | 内部 profile |    133.4ms |  402.1ms |  117.0ms |   5.3ms | 0.6ms |   13.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 | 是   | 内部 profile |    133.9ms |  402.2ms |  120.6ms |   4.5ms | 0.7ms |    9.8ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 | 是   | 内部 profile |    145.9ms |  403.8ms |  128.5ms |   5.8ms | 0.8ms |   13.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 | 是   | 内部 profile |    144.7ms |  402.9ms |  122.4ms |   4.8ms | 0.9ms |   18.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 | 是   | 内部 profile |    137.5ms |  402.1ms |  115.7ms |   5.2ms | 0.7ms |   18.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 | 是   | 内部 profile |    191.4ms |  403.1ms |  178.5ms |   5.5ms | 0.8ms |    9.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 | 是   | 内部 profile |    135.0ms |  401.9ms |  114.9ms |   6.3ms | 0.6ms |   10.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 | 是   | 内部 profile |    127.3ms |  402.7ms |  115.4ms |   4.7ms | 0.6ms |    8.4ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 | 是   | 内部 profile |    130.1ms |  403.3ms |  117.8ms |   5.2ms | 0.7ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 | 是   | 内部 profile |    128.0ms |  401.7ms |  114.4ms |   4.7ms | 0.7ms |   10.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 | 是   | 内部 profile |    129.5ms |  402.5ms |  116.9ms |   5.5ms | 0.8ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 | 是   | 内部 profile |    141.1ms |  403.9ms |  120.3ms |   5.3ms | 0.7ms |   17.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 | 是   | 内部 profile |    126.6ms |  401.1ms |  113.8ms |   4.6ms | 0.9ms |    9.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 | 是   | 内部 profile |    208.6ms |  403.1ms |  193.8ms |   5.1ms | 0.8ms |   10.7ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 | 是   | 内部 profile |    139.0ms |  403.4ms |  114.5ms |   6.1ms | 0.6ms |   15.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 | 是   | 内部 profile |    132.2ms |  402.3ms |  116.1ms |   5.6ms | 0.7ms |   11.6ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 | 是   | 内部 profile |    132.5ms |  402.9ms |  118.4ms |   5.6ms | 0.7ms |   10.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 | 是   | 内部 profile |    127.9ms |  401.3ms |  115.5ms |   5.2ms | 0.6ms |    9.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 | 是   | 内部 profile |    129.9ms |  402.4ms |  117.3ms |   5.1ms | 0.7ms |    9.5ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 | 是   | 内部 profile |    150.4ms |  403.0ms |  123.4ms |   5.3ms | 0.7ms |   19.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 | 是   | 内部 profile |    138.0ms |  401.7ms |  117.4ms |   4.9ms | 0.7ms |   10.3ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 | 是   | 内部 profile |    206.0ms |  402.8ms |  191.7ms |   5.5ms | 0.7ms |    9.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 | 是   | 内部 profile |    136.8ms |  403.1ms |  121.6ms |   6.1ms | 0.9ms |   11.0ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 | 是   | 内部 profile |    128.3ms |  404.0ms |  116.3ms |   4.5ms | 0.5ms |    8.9ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 | 是   | 内部 profile |    121.4ms |  401.2ms |  118.1ms |   7.4ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 | 是   | 内部 profile |    129.7ms |  403.5ms |  126.9ms |   6.7ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 | 是   | 内部 profile |    121.9ms |  201.0ms |  119.3ms |   5.3ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 | 是   | 内部 profile |    123.7ms |  402.0ms |  121.3ms |   4.6ms | 0.6ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 | 是   | 内部 profile |    128.5ms |  403.0ms |  125.6ms |   4.9ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 | 是   | 内部 profile |    133.6ms |  403.8ms |  122.4ms |   7.0ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 | 是   | 内部 profile |    126.9ms |  403.9ms |  124.5ms |   5.7ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 | 是   | 内部 profile |    121.8ms |  201.9ms |  119.1ms |   5.6ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 | 是   | 内部 profile |    118.9ms |  201.4ms |  116.6ms |   5.3ms | 0.6ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 | 是   | 内部 profile |    128.1ms |  402.6ms |  124.5ms |   6.2ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 | 是   | 内部 profile |    127.9ms |  403.5ms |  125.5ms |   5.9ms | 0.7ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 | 是   | 内部 profile |    126.7ms |  402.2ms |  123.8ms |   6.6ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 | 是   | 内部 profile |    188.2ms |  401.9ms |  185.5ms |   6.3ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 | 是   | 内部 profile |    123.2ms |  403.4ms |  120.5ms |   5.2ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 | 是   | 内部 profile |    121.6ms |  201.0ms |  119.2ms |   4.9ms | 0.6ms |    0.1ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 | 是   | 内部 profile |    115.4ms |  202.0ms |  112.8ms |   4.6ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 | 是   | 内部 profile |    124.3ms |  402.2ms |  121.5ms |   5.8ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 | 是   | 内部 profile |    130.8ms |  401.1ms |  128.4ms |   5.5ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 | 是   | 内部 profile |    142.5ms |  402.5ms |  139.7ms |   5.5ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 | 是   | 内部 profile |    126.5ms |  401.5ms |  123.7ms |   5.4ms | 0.7ms |    0.3ms |      0.0ms |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    1 | 是   | 内部 profile |     23.9ms |  201.2ms |   21.6ms |   2.3ms | 0.8ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    2 | 是   | 内部 profile |     27.5ms |  202.4ms |   26.4ms |   2.4ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    3 | 是   | 内部 profile |     19.3ms |  201.7ms |   18.2ms |   1.4ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    4 | 是   | 内部 profile |     18.4ms |  200.6ms |   16.7ms |   1.4ms | 1.2ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    5 | 是   | 内部 profile |     17.2ms |  200.9ms |   16.1ms |   1.6ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    6 | 是   | 内部 profile |     19.9ms |  201.3ms |   18.8ms |   2.1ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    7 | 是   | 内部 profile |     20.0ms |  202.4ms |   18.3ms |   1.7ms | 1.3ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    8 | 是   | 内部 profile |     24.1ms |  201.7ms |   18.8ms |   1.7ms | 1.4ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |    9 | 是   | 内部 profile |     32.6ms |  202.2ms |   28.2ms |   2.5ms | 1.3ms |    2.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   10 | 是   | 内部 profile |     18.6ms |  202.4ms |   17.5ms |   1.5ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   11 | 是   | 内部 profile |     32.2ms |  201.8ms |   30.6ms |   2.8ms | 0.7ms |    0.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   12 | 是   | 内部 profile |     20.2ms |  202.6ms |   19.3ms |   2.0ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   13 | 是   | 内部 profile |     24.7ms |  202.1ms |   23.5ms |   1.4ms | 0.8ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   14 | 是   | 内部 profile |     21.2ms |  201.1ms |   20.2ms |   1.4ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   15 | 是   | 内部 profile |     26.0ms |  202.8ms |   24.8ms |   2.5ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   16 | 是   | 内部 profile |     15.7ms |  201.6ms |   14.8ms |   1.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   17 | 是   | 内部 profile |     20.5ms |  201.5ms |   19.4ms |   1.5ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   18 | 是   | 内部 profile |     28.5ms |  201.4ms |   26.9ms |   1.8ms | 0.7ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   19 | 是   | 内部 profile |     21.3ms |  202.1ms |   20.3ms |   1.3ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / JS 文件                             |   20 | 是   | 内部 profile |     23.0ms |  201.2ms |   22.0ms |   1.7ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    1 | 是   | 内部 profile |      8.2ms |  201.5ms |    6.6ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    2 | 是   | 内部 profile |     11.8ms |  201.6ms |   10.2ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    3 | 是   | 内部 profile |     10.5ms |  201.0ms |    8.6ms |   0.1ms | 0.8ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    4 | 是   | 内部 profile |      8.9ms |  202.6ms |    7.6ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    5 | 是   | 内部 profile |     10.7ms |  201.8ms |    9.3ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    6 | 是   | 内部 profile |      9.2ms |  202.6ms |    7.8ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    7 | 是   | 内部 profile |     12.8ms |  202.4ms |   10.2ms |   0.1ms | 0.6ms |    0.6ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    8 | 是   | 内部 profile |     10.6ms |  201.2ms |    3.6ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |    9 | 是   | 内部 profile |      9.7ms |  201.3ms |    8.4ms |   0.1ms | 0.5ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   10 | 是   | 内部 profile |      9.9ms |  201.7ms |    7.3ms |   0.1ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   11 | 是   | 内部 profile |     10.5ms |  202.0ms |    5.1ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   12 | 是   | 内部 profile |      9.6ms |  201.9ms |    8.3ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   13 | 是   | 内部 profile |      9.2ms |  201.7ms |    7.9ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   14 | 是   | 内部 profile |     26.3ms |  201.2ms |   19.0ms |   0.1ms | 1.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   15 | 是   | 内部 profile |      8.7ms |  202.4ms |    7.3ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   16 | 是   | 内部 profile |      8.6ms |  201.6ms |    7.3ms |   0.1ms | 0.4ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   17 | 是   | 内部 profile |     10.3ms |  201.5ms |    9.0ms |   0.1ms | 0.5ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   18 | 是   | 内部 profile |      9.5ms |  201.7ms |    8.2ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   19 | 是   | 内部 profile |      8.8ms |  203.1ms |    7.6ms |   0.1ms | 0.5ms |    0.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXML 文件                           |   20 | 是   | 内部 profile |      8.9ms |  201.1ms |    7.6ms |   0.1ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    1 | 是   | 内部 profile |     10.1ms |  200.4ms |    8.4ms |   0.1ms | 0.4ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    2 | 是   | 内部 profile |     10.6ms |  201.5ms |    8.9ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    3 | 是   | 内部 profile |     12.8ms |  201.3ms |   10.8ms |   0.1ms | 0.6ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    4 | 是   | 内部 profile |     14.3ms |  201.7ms |   12.1ms |   0.1ms | 0.5ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    5 | 是   | 内部 profile |     14.9ms |  203.8ms |   12.4ms |   0.1ms | 0.5ms |    1.5ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    6 | 是   | 内部 profile |     19.8ms |  202.2ms |   16.2ms |   0.2ms | 0.4ms |    2.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    7 | 是   | 内部 profile |     13.9ms |  201.8ms |   11.7ms |   0.1ms | 0.5ms |    1.2ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    8 | 是   | 内部 profile |     12.7ms |  203.9ms |   10.7ms |   0.1ms | 0.5ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |    9 | 是   | 内部 profile |     15.0ms |  201.3ms |   13.1ms |   0.1ms | 0.6ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   10 | 是   | 内部 profile |     19.6ms |  202.7ms |   12.4ms |   0.1ms | 0.6ms |    5.9ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   11 | 是   | 内部 profile |      9.2ms |  202.4ms |    7.8ms |   0.1ms | 0.4ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   12 | 是   | 内部 profile |     13.8ms |  210.7ms |   11.9ms |   0.1ms | 0.5ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   13 | 是   | 内部 profile |      9.0ms |  202.5ms |    7.5ms |   0.1ms | 0.4ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   14 | 是   | 内部 profile |      9.8ms |  202.7ms |    8.3ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   15 | 是   | 内部 profile |     15.1ms |  205.6ms |   12.6ms |   0.1ms | 0.9ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   16 | 是   | 内部 profile |     16.1ms |  203.1ms |   13.7ms |   0.1ms | 0.5ms |    1.4ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   17 | 是   | 内部 profile |     16.2ms |  202.7ms |   12.2ms |   0.1ms | 0.6ms |    1.8ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   18 | 是   | 内部 profile |     18.8ms |  202.7ms |   14.8ms |   0.1ms | 0.6ms |    2.1ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   19 | 是   | 内部 profile |     15.1ms |  205.5ms |   12.7ms |   0.1ms | 0.6ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / WXSS 文件                           |   20 | 是   | 内部 profile |     14.3ms |  200.8ms |   12.1ms |   0.1ms | 0.6ms |    1.1ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    1 | 是   | 内部 profile |     13.6ms |  203.4ms |   10.7ms |   0.1ms | 0.5ms |    1.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    2 | 是   | 内部 profile |     13.6ms |  202.8ms |   12.0ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    3 | 是   | 内部 profile |      8.7ms |  200.7ms |    7.3ms |   0.1ms | 0.4ms |    0.7ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    4 | 是   | 内部 profile |      9.1ms |  200.9ms |    7.5ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    5 | 是   | 内部 profile |      9.7ms |  201.8ms |    8.2ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    6 | 是   | 内部 profile |     16.4ms |  202.5ms |   13.6ms |   0.1ms | 0.7ms |    1.6ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    7 | 是   | 内部 profile |      9.5ms |  202.5ms |    7.9ms |   0.1ms | 0.4ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    8 | 是   | 内部 profile |      9.4ms |  201.9ms |    7.9ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |    9 | 是   | 内部 profile |      9.4ms |  201.3ms |    7.9ms |   0.1ms | 0.4ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   10 | 是   | 内部 profile |     12.9ms |  201.9ms |   10.5ms |   0.1ms | 0.7ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   11 | 是   | 内部 profile |     10.8ms |  205.7ms |    9.3ms |   0.1ms | 0.3ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   12 | 是   | 内部 profile |     11.9ms |  206.6ms |    8.0ms |   0.2ms | 0.4ms |    1.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   13 | 是   | 内部 profile |     11.4ms |  201.8ms |    8.9ms |   0.1ms | 0.4ms |    1.3ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   14 | 是   | 内部 profile |     25.2ms |  200.9ms |   23.4ms |   0.5ms | 0.5ms |    1.0ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   15 | 是   | 内部 profile |      8.1ms |  201.1ms |    6.8ms |   0.1ms | 0.3ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   16 | 是   | 内部 profile |     15.7ms |  201.6ms |    9.0ms |   0.1ms | 0.4ms |    5.6ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   17 | 是   | 内部 profile |      9.5ms |  201.8ms |    7.9ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   18 | 是   | 内部 profile |      8.5ms |  201.1ms |    7.1ms |   0.1ms | 0.3ms |    0.8ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   19 | 是   | 内部 profile |     13.2ms |  203.9ms |   10.4ms |   0.1ms | 0.6ms |    1.4ms |          - |      1 |        1 |
| weapp-vite 原生 / JSON 文件                           |   20 | 是   | 内部 profile |     35.5ms |  202.9ms |   30.4ms |   0.2ms | 1.0ms |    3.7ms |          - |      1 |        1 |
| uni-app vite vue3 / Vue SFC script 区块               |    1 | 是   | 产物变化     |   1130.0ms | 1130.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 | 是   | 产物变化     |    203.3ms |  203.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 | 是   | 产物变化     |    254.7ms |  254.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 | 是   | 产物变化     |    152.4ms |  152.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 | 是   | 产物变化     |    155.1ms |  155.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 | 是   | 产物变化     |    154.6ms |  154.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 | 是   | 产物变化     |    153.7ms |  153.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 | 是   | 产物变化     |    203.6ms |  203.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 | 是   | 产物变化     |    153.8ms |  153.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 | 是   | 产物变化     |    153.0ms |  153.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 | 是   | 产物变化     |    154.7ms |  154.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 | 是   | 产物变化     |    153.5ms |  153.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 | 是   | 产物变化     |    154.0ms |  154.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 | 是   | 产物变化     |    153.7ms |  153.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 | 是   | 产物变化     |    205.2ms |  205.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 | 是   | 产物变化     |    154.9ms |  154.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 | 是   | 产物变化     |    259.2ms |  259.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 | 是   | 产物变化     |    206.0ms |  206.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 | 是   | 产物变化     |    154.0ms |  154.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 | 是   | 产物变化     |    202.1ms |  202.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 | 是   | 产物变化     |    204.1ms |  204.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 | 是   | 产物变化     |    153.1ms |  153.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 | 是   | 产物变化     |    153.7ms |  153.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 | 是   | 产物变化     |    152.5ms |  152.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 | 是   | 产物变化     |    204.2ms |  204.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 | 是   | 产物变化     |    153.9ms |  153.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 | 是   | 产物变化     |    205.3ms |  205.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 | 是   | 产物变化     |    155.4ms |  155.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 | 是   | 产物变化     |    152.5ms |  152.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 | 是   | 产物变化     |    153.1ms |  153.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 | 是   | 产物变化     |    153.3ms |  153.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 | 是   | 产物变化     |    153.6ms |  153.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 | 是   | 产物变化     |    153.8ms |  153.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 | 是   | 产物变化     |    153.3ms |  153.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 | 是   | 产物变化     |    154.4ms |  154.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 | 是   | 产物变化     |    154.5ms |  154.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 | 是   | 产物变化     |    154.9ms |  154.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 | 是   | 产物变化     |    153.0ms |  153.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 | 是   | 产物变化     |    154.4ms |  154.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 | 是   | 产物变化     |    154.5ms |  154.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 | 是   | 产物变化     |    204.3ms |  204.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 | 是   | 产物变化     |    152.3ms |  152.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 | 是   | 产物变化     |    203.9ms |  203.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 | 是   | 产物变化     |    155.0ms |  155.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 | 是   | 产物变化     |    152.4ms |  152.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 | 是   | 产物变化     |    152.8ms |  152.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 | 是   | 产物变化     |    154.0ms |  154.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 | 是   | 产物变化     |    154.3ms |  154.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 | 是   | 产物变化     |    153.5ms |  153.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 | 是   | 产物变化     |    153.9ms |  153.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 | 是   | 产物变化     |    152.8ms |  152.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 | 是   | 产物变化     |    153.9ms |  153.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 | 是   | 产物变化     |    152.4ms |  152.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 | 是   | 产物变化     |    154.8ms |  154.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 | 是   | 产物变化     |    153.8ms |  153.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 | 是   | 产物变化     |    203.8ms |  203.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 | 是   | 产物变化     |    153.8ms |  153.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 | 是   | 产物变化     |    153.9ms |  153.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 | 是   | 产物变化     |    153.9ms |  153.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 | 是   | 产物变化     |    155.3ms |  155.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 | 是   | 产物变化     |   1382.5ms | 1382.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 | 是   | 产物变化     |    408.6ms |  408.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 | 是   | 产物变化     |    358.8ms |  358.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 | 是   | 产物变化     |    460.1ms |  460.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 | 是   | 产物变化     |    358.0ms |  358.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 | 是   | 产物变化     |    359.9ms |  359.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 | 是   | 产物变化     |    409.7ms |  409.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 | 是   | 产物变化     |    357.9ms |  357.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 | 是   | 产物变化     |    357.1ms |  357.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 | 是   | 产物变化     |    358.8ms |  358.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 | 是   | 产物变化     |    407.0ms |  407.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 | 是   | 产物变化     |    408.0ms |  408.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 | 是   | 产物变化     |    358.8ms |  358.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 | 是   | 产物变化     |    647.9ms |  647.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 | 是   | 产物变化     |    954.0ms |  954.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 | 是   | 产物变化     |    475.4ms |  475.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 | 是   | 产物变化     |    635.4ms |  635.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 | 是   | 产物变化     |    635.5ms |  635.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 | 是   | 产物变化     |    411.4ms |  411.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 | 是   | 产物变化     |    475.4ms |  475.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 | 是   | 产物变化     |    254.3ms |  254.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 | 是   | 产物变化     |    204.1ms |  204.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 | 是   | 产物变化     |    204.8ms |  204.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 | 是   | 产物变化     |    205.8ms |  205.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 | 是   | 产物变化     |    206.5ms |  206.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 | 是   | 产物变化     |    205.7ms |  205.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 | 是   | 产物变化     |    303.8ms |  303.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 | 是   | 产物变化     |    264.2ms |  264.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 | 是   | 产物变化     |    268.2ms |  268.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 | 是   | 产物变化     |    272.7ms |  272.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 | 是   | 产物变化     |    325.4ms |  325.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 | 是   | 产物变化     |    311.5ms |  311.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 | 是   | 产物变化     |    273.8ms |  273.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 | 是   | 产物变化     |    323.4ms |  323.4ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 | 是   | 产物变化     |    263.8ms |  263.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 | 是   | 产物变化     |    363.5ms |  363.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 | 是   | 产物变化     |    314.2ms |  314.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 | 是   | 产物变化     |    208.6ms |  208.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 | 是   | 产物变化     |    203.0ms |  203.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 | 是   | 产物变化     |    205.2ms |  205.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 | 是   | 产物变化     |    259.6ms |  259.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 | 是   | 产物变化     |    255.6ms |  255.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 | 是   | 产物变化     |    206.2ms |  206.2ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 | 是   | 产物变化     |    207.8ms |  207.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 | 是   | 产物变化     |    153.5ms |  153.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 | 是   | 产物变化     |    257.3ms |  257.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 | 是   | 产物变化     |    155.1ms |  155.1ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 | 是   | 产物变化     |    202.8ms |  202.8ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 | 是   | 产物变化     |    203.7ms |  203.7ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 | 是   | 产物变化     |    201.6ms |  201.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 | 是   | 产物变化     |    203.5ms |  203.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 | 是   | 产物变化     |    204.0ms |  204.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 | 是   | 产物变化     |    204.5ms |  204.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 | 是   | 产物变化     |    203.3ms |  203.3ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 | 是   | 产物变化     |    204.6ms |  204.6ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 | 是   | 产物变化     |    205.0ms |  205.0ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 | 是   | 产物变化     |    203.9ms |  203.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 | 是   | 产物变化     |    203.5ms |  203.5ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 | 是   | 产物变化     |    203.9ms |  203.9ms |        - |       - |     - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 | 是   | 产物变化     |    204.7ms |  204.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 | 是   | 产物变化     |    354.5ms |  354.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 | 是   | 产物变化     |    358.8ms |  358.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 | 是   | 产物变化     |    357.6ms |  357.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 | 是   | 产物变化     |    358.1ms |  358.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 | 是   | 产物变化     |    308.5ms |  308.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 | 是   | 产物变化     |    583.9ms |  583.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 | 是   | 产物变化     |    635.5ms |  635.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 | 是   | 产物变化     |    537.2ms |  537.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 | 是   | 产物变化     |    510.8ms |  510.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 | 是   | 产物变化     |    570.4ms |  570.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 | 是   | 产物变化     |    572.2ms |  572.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 | 是   | 产物变化     |    413.5ms |  413.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 | 是   | 产物变化     |    306.8ms |  306.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 | 是   | 产物变化     |    358.9ms |  358.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 | 是   | 产物变化     |    307.5ms |  307.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 | 是   | 产物变化     |    305.5ms |  305.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 | 是   | 产物变化     |    306.6ms |  306.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 | 是   | 产物变化     |    306.4ms |  306.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 | 是   | 产物变化     |    356.5ms |  356.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 | 是   | 产物变化     |    304.4ms |  304.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 | 是   | 产物变化     |    307.9ms |  307.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 | 是   | 产物变化     |    255.6ms |  255.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 | 是   | 产物变化     |    256.2ms |  256.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 | 是   | 产物变化     |    523.3ms |  523.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 | 是   | 产物变化     |    254.9ms |  254.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 | 是   | 产物变化     |    304.8ms |  304.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 | 是   | 产物变化     |    358.3ms |  358.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 | 是   | 产物变化     |    268.5ms |  268.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 | 是   | 产物变化     |    307.1ms |  307.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 | 是   | 产物变化     |    307.0ms |  307.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 | 是   | 产物变化     |    252.4ms |  252.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 | 是   | 产物变化     |    256.4ms |  256.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 | 是   | 产物变化     |    256.3ms |  256.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 | 是   | 产物变化     |    306.3ms |  306.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 | 是   | 产物变化     |    306.8ms |  306.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 | 是   | 产物变化     |    308.0ms |  308.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 | 是   | 产物变化     |    306.1ms |  306.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 | 是   | 产物变化     |    362.2ms |  362.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 | 是   | 产物变化     |    306.8ms |  306.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 | 是   | 产物变化     |    306.9ms |  306.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 | 是   | 产物变化     |    304.5ms |  304.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 | 是   | 产物变化     |    306.6ms |  306.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 | 是   | 产物变化     |    359.2ms |  359.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 | 是   | 产物变化     |    255.6ms |  255.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 | 是   | 产物变化     |    307.2ms |  307.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 | 是   | 产物变化     |    309.4ms |  309.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 | 是   | 产物变化     |    307.2ms |  307.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 | 是   | 产物变化     |    331.9ms |  331.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 | 是   | 产物变化     |    364.7ms |  364.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 | 是   | 产物变化     |    411.7ms |  411.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 | 是   | 产物变化     |    523.2ms |  523.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 | 是   | 产物变化     |    524.5ms |  524.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 | 是   | 产物变化     |    589.4ms |  589.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 | 是   | 产物变化     |    569.3ms |  569.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 | 是   | 产物变化     |    471.6ms |  471.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 | 是   | 产物变化     |    467.3ms |  467.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 | 是   | 产物变化     |    427.1ms |  427.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 | 是   | 产物变化     |    475.9ms |  475.9ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 | 是   | 产物变化     |    494.5ms |  494.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 | 是   | 产物变化     |    567.6ms |  567.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    1 | 是   | 产物变化     |    768.0ms |  768.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    2 | 是   | 产物变化     |    512.1ms |  512.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    3 | 是   | 产物变化     |    467.5ms |  467.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    4 | 是   | 产物变化     |    474.1ms |  474.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    5 | 是   | 产物变化     |    360.5ms |  360.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    6 | 是   | 产物变化     |    486.2ms |  486.2ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    7 | 是   | 产物变化     |    464.4ms |  464.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    8 | 是   | 产物变化     |    426.0ms |  426.0ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    9 | 是   | 产物变化     |    572.1ms |  572.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   10 | 是   | 产物变化     |    615.7ms |  615.7ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   11 | 是   | 产物变化     |    582.5ms |  582.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   12 | 是   | 产物变化     |    479.3ms |  479.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   13 | 是   | 产物变化     |    513.1ms |  513.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   14 | 是   | 产物变化     |    512.5ms |  512.5ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   15 | 是   | 产物变化     |    493.4ms |  493.4ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   16 | 是   | 产物变化     |    543.8ms |  543.8ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   17 | 是   | 产物变化     |    472.1ms |  472.1ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   18 | 是   | 产物变化     |    472.3ms |  472.3ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   19 | 是   | 产物变化     |    464.6ms |  464.6ms |        - |       - |     - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   20 | 是   | 产物变化     |    413.6ms |  413.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    1 | 是   | 产物变化     |    207.4ms |  207.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    2 | 是   | 产物变化     |    101.3ms |  101.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    3 | 是   | 产物变化     |    102.6ms |  102.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    4 | 是   | 产物变化     |    101.5ms |  101.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    5 | 是   | 产物变化     |    102.5ms |  102.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    6 | 是   | 产物变化     |     50.4ms |   50.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    7 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    8 | 是   | 产物变化     |    102.5ms |  102.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |    9 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   10 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   11 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   12 | 是   | 产物变化     |     51.6ms |   51.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   13 | 是   | 产物变化     |     50.9ms |   50.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   14 | 是   | 产物变化     |    101.9ms |  101.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   15 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   16 | 是   | 产物变化     |    103.0ms |  103.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   17 | 是   | 产物变化     |     50.5ms |   50.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   18 | 是   | 产物变化     |     50.3ms |   50.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   19 | 是   | 产物变化     |     51.0ms |   51.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / template 区块                                   |   20 | 是   | 产物变化     |     50.3ms |   50.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    1 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    2 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    3 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    4 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    5 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    6 | 是   | 产物变化     |     51.9ms |   51.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    7 | 是   | 产物变化     |     50.2ms |   50.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    8 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |    9 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   10 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   11 | 是   | 产物变化     |     50.5ms |   50.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   12 | 是   | 产物变化     |     50.3ms |   50.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   13 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   14 | 是   | 产物变化     |     52.1ms |   52.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   15 | 是   | 产物变化     |     51.3ms |   51.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   16 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   17 | 是   | 产物变化     |    103.6ms |  103.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   18 | 是   | 产物变化     |     50.1ms |   50.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   19 | 是   | 产物变化     |     51.9ms |   51.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / script 区块                                     |   20 | 是   | 产物变化     |    102.9ms |  102.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    1 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    2 | 是   | 产物变化     |     50.7ms |   50.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    3 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    4 | 是   | 产物变化     |     50.7ms |   50.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    5 | 是   | 产物变化     |     51.0ms |   51.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    6 | 是   | 产物变化     |    108.6ms |  108.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    7 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    8 | 是   | 产物变化     |     51.0ms |   51.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |    9 | 是   | 产物变化     |    106.1ms |  106.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   10 | 是   | 产物变化     |    103.0ms |  103.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   11 | 是   | 产物变化     |     51.3ms |   51.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   12 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   13 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   14 | 是   | 产物变化     |     49.9ms |   49.9ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   15 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   16 | 是   | 产物变化     |    102.0ms |  102.0ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   17 | 是   | 产物变化     |     51.3ms |   51.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   18 | 是   | 产物变化     |    102.4ms |  102.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   19 | 是   | 产物变化     |     51.8ms |   51.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / style 区块                                      |   20 | 是   | 产物变化     |     50.7ms |   50.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 | 是   | 产物变化     |     50.7ms |   50.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 | 是   | 产物变化     |     50.6ms |   50.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 | 是   | 产物变化     |     50.2ms |   50.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 | 是   | 产物变化     |    104.1ms |  104.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 | 是   | 产物变化     |     50.4ms |   50.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 | 是   | 产物变化     |     51.6ms |   51.6ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 | 是   | 产物变化     |    103.2ms |  103.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 | 是   | 产物变化     |     51.4ms |   51.4ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 | 是   | 产物变化     |     51.2ms |   51.2ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 | 是   | 产物变化     |     51.1ms |   51.1ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 | 是   | 产物变化     |     50.3ms |   50.3ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 | 是   | 产物变化     |    102.7ms |  102.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 | 是   | 产物变化     |     50.8ms |   50.8ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 | 是   | 产物变化     |     51.7ms |   51.7ms |        - |       - |     - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 | 是   | 产物变化     |     51.5ms |   51.5ms |        - |       - |     - |        - |          - |        |          |

说明：

- weapp-vite 项目使用 dev 模式 JSONL profile 采集 HMR 内部阶段耗时。
- 非 weapp-vite 项目使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时，内部阶段列没有框架可比的公开数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
