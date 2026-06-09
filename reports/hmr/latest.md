# HMR 基准报告

生成时间：2026-06-09T09:46:02.194Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 一眼结论

- HMR 最快：weapp-vite 原生 / JSON 文件，平均 89.5ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 430.7ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR | 相对最快 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | -------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   89.5ms |    1.00x |   89.5ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   90.2ms |    1.01x |   90.2ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   90.6ms |    1.01x |   90.6ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |  101.9ms |    1.14x |  101.9ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  132.8ms |    1.48x |  132.8ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |  144.3ms |    1.61x |  144.3ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  147.8ms |    1.65x |  147.8ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |  148.8ms |    1.66x |  148.8ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |  151.6ms |    1.69x |  151.6ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |  164.1ms |    1.83x |  164.1ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  195.3ms |    2.18x |  195.3ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  202.4ms |    2.26x |  202.4ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  212.1ms |    2.37x |  212.1ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  217.3ms |    2.43x |  217.3ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |  218.4ms |    2.44x |  218.4ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |  219.3ms |    2.45x |  219.3ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  225.1ms |    2.51x |  225.1ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  227.0ms |    2.54x |  227.0ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |  229.8ms |    2.57x |  229.8ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  254.2ms |    2.84x |  254.2ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |  271.9ms |    3.04x |  271.9ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  297.4ms |    3.32x |  297.4ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | taro vue3 / 页面配置                                  | taro vue3                     | Vue SFC  | 产物变化 |  300.4ms |    3.36x |  300.4ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  313.2ms |    3.50x |  313.2ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  352.5ms |    3.94x |  352.5ms |        - |    - |    - |        - |          - |          - |            - |
|   26 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  430.7ms |    4.81x |  430.7ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                            |
| ----------------------------------------------------- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | --------------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |    271.9ms |  271.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |    229.8ms |  229.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |    219.3ms |  219.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |    218.4ms |  218.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |    254.2ms |  254.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |    227.0ms |  227.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |    225.1ms |  225.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |    217.3ms |  217.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite 原生 / JS 文件                             | 产物变化 |    101.9ms |  101.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`        |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |     90.6ms |   90.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml`      |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |     90.2ms |   90.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss`      |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |     89.5ms |   89.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json`      |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    195.3ms |  195.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    132.8ms |  132.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    147.8ms |  147.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    430.7ms |  430.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    202.4ms |  202.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    212.1ms |  212.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    352.5ms |  352.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    313.2ms |  313.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / CSS 文件                                  | 产物变化 |    297.4ms |  297.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`       |
| taro vue3 / 页面配置                                  | 产物变化 |    300.4ms |  300.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.config.ts` |
| mpx / template 区块                                   | 产物变化 |    164.1ms |  164.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / script 区块                                     | 产物变化 |    151.6ms |  151.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / style 区块                                      | 产物变化 |    144.3ms |  144.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / 页面配置                                        | 产物变化 |    148.8ms |  148.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |

## 原始明细

| 场景                                                  | 轮次 | 通过 | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | ---- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 | 是   | 产物变化 |    301.5ms |  301.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 | 是   | 产物变化 |    268.0ms |  268.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 | 是   | 产物变化 |    288.0ms |  288.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 | 是   | 产物变化 |    251.3ms |  251.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 | 是   | 产物变化 |    245.8ms |  245.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 | 是   | 产物变化 |    385.2ms |  385.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 | 是   | 产物变化 |    297.8ms |  297.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 | 是   | 产物变化 |    315.4ms |  315.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 | 是   | 产物变化 |    264.5ms |  264.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 | 是   | 产物变化 |    245.0ms |  245.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 | 是   | 产物变化 |    254.2ms |  254.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 | 是   | 产物变化 |    231.8ms |  231.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 | 是   | 产物变化 |    314.9ms |  314.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 | 是   | 产物变化 |    253.1ms |  253.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 | 是   | 产物变化 |    241.6ms |  241.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 | 是   | 产物变化 |    238.7ms |  238.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 | 是   | 产物变化 |    228.6ms |  228.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 | 是   | 产物变化 |    286.3ms |  286.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 | 是   | 产物变化 |    272.3ms |  272.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 | 是   | 产物变化 |    254.3ms |  254.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 | 是   | 产物变化 |    218.3ms |  218.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 | 是   | 产物变化 |    218.0ms |  218.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 | 是   | 产物变化 |    285.6ms |  285.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 | 是   | 产物变化 |    228.0ms |  228.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 | 是   | 产物变化 |    218.4ms |  218.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 | 是   | 产物变化 |    220.3ms |  220.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 | 是   | 产物变化 |    221.9ms |  221.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 | 是   | 产物变化 |    220.9ms |  220.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 | 是   | 产物变化 |    218.2ms |  218.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 | 是   | 产物变化 |    278.6ms |  278.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 | 是   | 产物变化 |    227.8ms |  227.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 | 是   | 产物变化 |    209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 | 是   | 产物变化 |    208.4ms |  208.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 | 是   | 产物变化 |    220.9ms |  220.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 | 是   | 产物变化 |    221.3ms |  221.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 | 是   | 产物变化 |    230.8ms |  230.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 | 是   | 产物变化 |    276.4ms |  276.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 | 是   | 产物变化 |    219.2ms |  219.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 | 是   | 产物变化 |    219.1ms |  219.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 | 是   | 产物变化 |    234.2ms |  234.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 | 是   | 产物变化 |    209.5ms |  209.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 | 是   | 产物变化 |    222.5ms |  222.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 | 是   | 产物变化 |    220.8ms |  220.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 | 是   | 产物变化 |    218.1ms |  218.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 | 是   | 产物变化 |    209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 | 是   | 产物变化 |    220.1ms |  220.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 | 是   | 产物变化 |    218.5ms |  218.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 | 是   | 产物变化 |    222.0ms |  222.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 | 是   | 产物变化 |    219.1ms |  219.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 | 是   | 产物变化 |    220.2ms |  220.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 | 是   | 产物变化 |    208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 | 是   | 产物变化 |    212.0ms |  212.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 | 是   | 产物变化 |    221.3ms |  221.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 | 是   | 产物变化 |    220.8ms |  220.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 | 是   | 产物变化 |    217.4ms |  217.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 | 是   | 产物变化 |    229.5ms |  229.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 | 是   | 产物变化 |    220.3ms |  220.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 | 是   | 产物变化 |    222.4ms |  222.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 | 是   | 产物变化 |    232.4ms |  232.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 | 是   | 产物变化 |    220.7ms |  220.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 | 是   | 产物变化 |    197.6ms |  197.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 | 是   | 产物变化 |    208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 | 是   | 产物变化 |    220.7ms |  220.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 | 是   | 产物变化 |    275.3ms |  275.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 | 是   | 产物变化 |    219.8ms |  219.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 | 是   | 产物变化 |    198.7ms |  198.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 | 是   | 产物变化 |    199.1ms |  199.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 | 是   | 产物变化 |    207.3ms |  207.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 | 是   | 产物变化 |    208.3ms |  208.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 | 是   | 产物变化 |    221.0ms |  221.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 | 是   | 产物变化 |    241.8ms |  241.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 | 是   | 产物变化 |    209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 | 是   | 产物变化 |    277.3ms |  277.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 | 是   | 产物变化 |    238.2ms |  238.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 | 是   | 产物变化 |    208.1ms |  208.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 | 是   | 产物变化 |    198.7ms |  198.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 | 是   | 产物变化 |    200.0ms |  200.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 | 是   | 产物变化 |    215.4ms |  215.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 | 是   | 产物变化 |    209.6ms |  209.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 | 是   | 产物变化 |    212.0ms |  212.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 | 是   | 产物变化 |    285.3ms |  285.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 | 是   | 产物变化 |    264.5ms |  264.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 | 是   | 产物变化 |    285.0ms |  285.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 | 是   | 产物变化 |    243.4ms |  243.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 | 是   | 产物变化 |    232.4ms |  232.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 | 是   | 产物变化 |    232.6ms |  232.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 | 是   | 产物变化 |    286.3ms |  286.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 | 是   | 产物变化 |    241.8ms |  241.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 | 是   | 产物变化 |    245.1ms |  245.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 | 是   | 产物变化 |    267.9ms |  267.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 | 是   | 产物变化 |    241.5ms |  241.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 | 是   | 产物变化 |    232.1ms |  232.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 | 是   | 产物变化 |    310.1ms |  310.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 | 是   | 产物变化 |    241.6ms |  241.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 | 是   | 产物变化 |    231.5ms |  231.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 | 是   | 产物变化 |    232.0ms |  232.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 | 是   | 产物变化 |    251.0ms |  251.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 | 是   | 产物变化 |    288.7ms |  288.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 | 是   | 产物变化 |    230.9ms |  230.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 | 是   | 产物变化 |    239.6ms |  239.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 | 是   | 产物变化 |    208.2ms |  208.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 | 是   | 产物变化 |    286.2ms |  286.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 | 是   | 产物变化 |    210.3ms |  210.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 | 是   | 产物变化 |    234.6ms |  234.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 | 是   | 产物变化 |    220.2ms |  220.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 | 是   | 产物变化 |    210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 | 是   | 产物变化 |    210.1ms |  210.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 | 是   | 产物变化 |    221.1ms |  221.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 | 是   | 产物变化 |    287.5ms |  287.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 | 是   | 产物变化 |    208.9ms |  208.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 | 是   | 产物变化 |    221.5ms |  221.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 | 是   | 产物变化 |    219.0ms |  219.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 | 是   | 产物变化 |    208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 | 是   | 产物变化 |    209.0ms |  209.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 | 是   | 产物变化 |    219.9ms |  219.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 | 是   | 产物变化 |    288.5ms |  288.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 | 是   | 产物变化 |    212.9ms |  212.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 | 是   | 产物变化 |    209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 | 是   | 产物变化 |    223.1ms |  223.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 | 是   | 产物变化 |    230.6ms |  230.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 | 是   | 产物变化 |    208.1ms |  208.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 | 是   | 产物变化 |    221.0ms |  221.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 | 是   | 产物变化 |    222.7ms |  222.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 | 是   | 产物变化 |    221.1ms |  221.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 | 是   | 产物变化 |    222.4ms |  222.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 | 是   | 产物变化 |    212.0ms |  212.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 | 是   | 产物变化 |    221.4ms |  221.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 | 是   | 产物变化 |    222.1ms |  222.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 | 是   | 产物变化 |    279.1ms |  279.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 | 是   | 产物变化 |    222.1ms |  222.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 | 是   | 产物变化 |    220.9ms |  220.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 | 是   | 产物变化 |    220.7ms |  220.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 | 是   | 产物变化 |    222.3ms |  222.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 | 是   | 产物变化 |    210.4ms |  210.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 | 是   | 产物变化 |    210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 | 是   | 产物变化 |    216.2ms |  216.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 | 是   | 产物变化 |    300.2ms |  300.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 | 是   | 产物变化 |    208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 | 是   | 产物变化 |    218.0ms |  218.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 | 是   | 产物变化 |    222.5ms |  222.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 | 是   | 产物变化 |    209.8ms |  209.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 | 是   | 产物变化 |    221.3ms |  221.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 | 是   | 产物变化 |    200.7ms |  200.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 | 是   | 产物变化 |    209.0ms |  209.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 | 是   | 产物变化 |    209.1ms |  209.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 | 是   | 产物变化 |    212.0ms |  212.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 | 是   | 产物变化 |    209.5ms |  209.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 | 是   | 产物变化 |    221.3ms |  221.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 | 是   | 产物变化 |    199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 | 是   | 产物变化 |    275.1ms |  275.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 | 是   | 产物变化 |    210.8ms |  210.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 | 是   | 产物变化 |    207.5ms |  207.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 | 是   | 产物变化 |    199.6ms |  199.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 | 是   | 产物变化 |    209.1ms |  209.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 | 是   | 产物变化 |    211.9ms |  211.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 | 是   | 产物变化 |    210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 | 是   | 产物变化 |    207.4ms |  207.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 | 是   | 产物变化 |    198.7ms |  198.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 | 是   | 产物变化 |    299.3ms |  299.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 | 是   | 产物变化 |    223.8ms |  223.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 | 是   | 产物变化 |     98.1ms |   98.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 | 是   | 产物变化 |     99.8ms |   99.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 | 是   | 产物变化 |    108.7ms |  108.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 | 是   | 产物变化 |    100.1ms |  100.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 | 是   | 产物变化 |    100.9ms |  100.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 | 是   | 产物变化 |    111.1ms |  111.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 | 是   | 产物变化 |     89.3ms |   89.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 | 是   | 产物变化 |    110.2ms |  110.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 | 是   | 产物变化 |     99.6ms |   99.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 | 是   | 产物变化 |     99.2ms |   99.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 | 是   | 产物变化 |    110.7ms |  110.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 | 是   | 产物变化 |     99.2ms |   99.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 | 是   | 产物变化 |     98.3ms |   98.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 | 是   | 产物变化 |    100.4ms |  100.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 | 是   | 产物变化 |     99.1ms |   99.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 | 是   | 产物变化 |     99.6ms |   99.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 | 是   | 产物变化 |     98.8ms |   98.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 | 是   | 产物变化 |    113.7ms |  113.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 | 是   | 产物变化 |     98.9ms |   98.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 | 是   | 产物变化 |     98.5ms |   98.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 | 是   | 产物变化 |     89.3ms |   89.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 | 是   | 产物变化 |     94.0ms |   94.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 | 是   | 产物变化 |     88.2ms |   88.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 | 是   | 产物变化 |     92.0ms |   92.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 | 是   | 产物变化 |     88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 | 是   | 产物变化 |     99.7ms |   99.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 | 是   | 产物变化 |     87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 | 是   | 产物变化 |     89.2ms |   89.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 | 是   | 产物变化 |     82.2ms |   82.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 | 是   | 产物变化 |     96.3ms |   96.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 | 是   | 产物变化 |     88.6ms |   88.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 | 是   | 产物变化 |     88.0ms |   88.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 | 是   | 产物变化 |     98.6ms |   98.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 | 是   | 产物变化 |     86.4ms |   86.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 | 是   | 产物变化 |     88.6ms |   88.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 | 是   | 产物变化 |     98.8ms |   98.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 | 是   | 产物变化 |     90.5ms |   90.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 | 是   | 产物变化 |     88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 | 是   | 产物变化 |     91.8ms |   91.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 | 是   | 产物变化 |     97.9ms |   97.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 | 是   | 产物变化 |     87.2ms |   87.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 | 是   | 产物变化 |     86.2ms |   86.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 | 是   | 产物变化 |     98.2ms |   98.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 | 是   | 产物变化 |     87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 | 是   | 产物变化 |     91.3ms |   91.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 | 是   | 产物变化 |     89.9ms |   89.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 | 是   | 产物变化 |     89.5ms |   89.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 | 是   | 产物变化 |     86.4ms |   86.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 | 是   | 产物变化 |     89.2ms |   89.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 | 是   | 产物变化 |     85.8ms |   85.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 | 是   | 产物变化 |     89.1ms |   89.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 | 是   | 产物变化 |     88.9ms |   88.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 | 是   | 产物变化 |     89.9ms |   89.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 | 是   | 产物变化 |     90.4ms |   90.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 | 是   | 产物变化 |     87.4ms |   87.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 | 是   | 产物变化 |     99.8ms |   99.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 | 是   | 产物变化 |     91.5ms |   91.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 | 是   | 产物变化 |     88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 | 是   | 产物变化 |     87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 | 是   | 产物变化 |     90.4ms |   90.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 | 是   | 产物变化 |     89.9ms |   89.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 | 是   | 产物变化 |     91.0ms |   91.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 | 是   | 产物变化 |     89.8ms |   89.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 | 是   | 产物变化 |   1124.7ms | 1124.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 | 是   | 产物变化 |    166.2ms |  166.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 | 是   | 产物变化 |    145.9ms |  145.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 | 是   | 产物变化 |    134.7ms |  134.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 | 是   | 产物变化 |    132.5ms |  132.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 | 是   | 产物变化 |    132.7ms |  132.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 | 是   | 产物变化 |    132.3ms |  132.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 | 是   | 产物变化 |    131.9ms |  131.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 | 是   | 产物变化 |    143.0ms |  143.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 | 是   | 产物变化 |    167.1ms |  167.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 | 是   | 产物变化 |    143.5ms |  143.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 | 是   | 产物变化 |    131.9ms |  131.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 | 是   | 产物变化 |    134.7ms |  134.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 | 是   | 产物变化 |    209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 | 是   | 产物变化 |    123.0ms |  123.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 | 是   | 产物变化 |    133.2ms |  133.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 | 是   | 产物变化 |    134.9ms |  134.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 | 是   | 产物变化 |    132.3ms |  132.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 | 是   | 产物变化 |    130.7ms |  130.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 | 是   | 产物变化 |    221.2ms |  221.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 | 是   | 产物变化 |    205.3ms |  205.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 | 是   | 产物变化 |    132.6ms |  132.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 | 是   | 产物变化 |    131.8ms |  131.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 | 是   | 产物变化 |    120.9ms |  120.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 | 是   | 产物变化 |    133.4ms |  133.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 | 是   | 产物变化 |    121.3ms |  121.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 | 是   | 产物变化 |    133.6ms |  133.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 | 是   | 产物变化 |    130.3ms |  130.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 | 是   | 产物变化 |    143.5ms |  143.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 | 是   | 产物变化 |    133.3ms |  133.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 | 是   | 产物变化 |    122.4ms |  122.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 | 是   | 产物变化 |    130.1ms |  130.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 | 是   | 产物变化 |    131.6ms |  131.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 | 是   | 产物变化 |    122.6ms |  122.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 | 是   | 产物变化 |    123.5ms |  123.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 | 是   | 产物变化 |    131.4ms |  131.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 | 是   | 产物变化 |    131.5ms |  131.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 | 是   | 产物变化 |    135.0ms |  135.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 | 是   | 产物变化 |    120.1ms |  120.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 | 是   | 产物变化 |    122.0ms |  122.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 | 是   | 产物变化 |    210.2ms |  210.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 | 是   | 产物变化 |    118.4ms |  118.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 | 是   | 产物变化 |    120.7ms |  120.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 | 是   | 产物变化 |    131.5ms |  131.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 | 是   | 产物变化 |    129.7ms |  129.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 | 是   | 产物变化 |    233.4ms |  233.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 | 是   | 产物变化 |    209.1ms |  209.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 | 是   | 产物变化 |    120.3ms |  120.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 | 是   | 产物变化 |    221.9ms |  221.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 | 是   | 产物变化 |    121.4ms |  121.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 | 是   | 产物变化 |    121.3ms |  121.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 | 是   | 产物变化 |    120.6ms |  120.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 | 是   | 产物变化 |    222.5ms |  222.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 | 是   | 产物变化 |    131.5ms |  131.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 | 是   | 产物变化 |    131.2ms |  131.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 | 是   | 产物变化 |    119.1ms |  119.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 | 是   | 产物变化 |    122.0ms |  122.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 | 是   | 产物变化 |    129.6ms |  129.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 | 是   | 产物变化 |    122.9ms |  122.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 | 是   | 产物变化 |    119.1ms |  119.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 | 是   | 产物变化 |   1227.1ms | 1227.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    423.9ms |  423.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    433.0ms |  433.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    419.8ms |  419.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    397.6ms |  397.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    333.2ms |  333.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    432.9ms |  432.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    323.1ms |  323.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    321.4ms |  321.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    397.7ms |  397.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    322.6ms |  322.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    420.5ms |  420.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    419.8ms |  419.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    399.8ms |  399.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    410.3ms |  410.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    307.8ms |  307.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    323.8ms |  323.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    470.6ms |  470.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    421.1ms |  421.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    408.3ms |  408.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    231.9ms |  231.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    232.0ms |  232.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    196.6ms |  196.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    195.1ms |  195.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    189.0ms |  189.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    200.5ms |  200.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    201.4ms |  201.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    203.1ms |  203.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    202.1ms |  202.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    187.2ms |  187.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    210.1ms |  210.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    196.2ms |  196.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    207.1ms |  207.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    198.5ms |  198.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    210.3ms |  210.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    186.0ms |  186.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    208.7ms |  208.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    209.2ms |  209.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    185.4ms |  185.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 | 是   | 产物变化 |    187.3ms |  187.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 | 是   | 产物变化 |    208.8ms |  208.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 | 是   | 产物变化 |    201.5ms |  201.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 | 是   | 产物变化 |    197.3ms |  197.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 | 是   | 产物变化 |    210.7ms |  210.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 | 是   | 产物变化 |    213.7ms |  213.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 | 是   | 产物变化 |    187.3ms |  187.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 | 是   | 产物变化 |    198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 | 是   | 产物变化 |    199.3ms |  199.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 | 是   | 产物变化 |    211.4ms |  211.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 | 是   | 产物变化 |    299.7ms |  299.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 | 是   | 产物变化 |    331.2ms |  331.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 | 是   | 产物变化 |    199.3ms |  199.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 | 是   | 产物变化 |    199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 | 是   | 产物变化 |    201.4ms |  201.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 | 是   | 产物变化 |    202.7ms |  202.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 | 是   | 产物变化 |    202.1ms |  202.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 | 是   | 产物变化 |    195.5ms |  195.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 | 是   | 产物变化 |    218.6ms |  218.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 | 是   | 产物变化 |    176.5ms |  176.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 | 是   | 产物变化 |    324.2ms |  324.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    289.5ms |  289.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    332.8ms |  332.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    313.1ms |  313.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    292.7ms |  292.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    345.2ms |  345.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    343.8ms |  343.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    338.9ms |  338.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    354.4ms |  354.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    359.4ms |  359.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    275.8ms |  275.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    353.5ms |  353.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    286.5ms |  286.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    330.2ms |  330.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    478.5ms |  478.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    393.6ms |  393.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    408.0ms |  408.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    503.5ms |  503.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    420.0ms |  420.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    305.6ms |  305.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    318.8ms |  318.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    328.2ms |  328.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    287.9ms |  287.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    312.9ms |  312.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    308.1ms |  308.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    316.1ms |  316.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    342.6ms |  342.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    350.7ms |  350.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    289.8ms |  289.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    298.0ms |  298.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    312.5ms |  312.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    307.7ms |  307.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    311.1ms |  311.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    307.5ms |  307.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    307.8ms |  307.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    330.7ms |  330.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    320.2ms |  320.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    306.1ms |  306.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    298.4ms |  298.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 | 是   | 产物变化 |    300.0ms |  300.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 | 是   | 产物变化 |    309.0ms |  309.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 | 是   | 产物变化 |    295.8ms |  295.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 | 是   | 产物变化 |    297.4ms |  297.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 | 是   | 产物变化 |    333.1ms |  333.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 | 是   | 产物变化 |    309.8ms |  309.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 | 是   | 产物变化 |    296.7ms |  296.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 | 是   | 产物变化 |    297.2ms |  297.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 | 是   | 产物变化 |    296.3ms |  296.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 | 是   | 产物变化 |    212.5ms |  212.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 | 是   | 产物变化 |    296.5ms |  296.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 | 是   | 产物变化 |    297.0ms |  297.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 | 是   | 产物变化 |    290.6ms |  290.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 | 是   | 产物变化 |    319.3ms |  319.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 | 是   | 产物变化 |    311.3ms |  311.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 | 是   | 产物变化 |    297.5ms |  297.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 | 是   | 产物变化 |    300.5ms |  300.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 | 是   | 产物变化 |    300.4ms |  300.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 | 是   | 产物变化 |    299.0ms |  299.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 | 是   | 产物变化 |    288.7ms |  288.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    1 | 是   | 产物变化 |    288.1ms |  288.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    2 | 是   | 产物变化 |    332.6ms |  332.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    3 | 是   | 产物变化 |    330.0ms |  330.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    4 | 是   | 产物变化 |    289.0ms |  289.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    5 | 是   | 产物变化 |    308.6ms |  308.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    6 | 是   | 产物变化 |    299.6ms |  299.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    7 | 是   | 产物变化 |    296.6ms |  296.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    8 | 是   | 产物变化 |    297.3ms |  297.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    9 | 是   | 产物变化 |    289.6ms |  289.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   10 | 是   | 产物变化 |    300.2ms |  300.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   11 | 是   | 产物变化 |    223.1ms |  223.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   12 | 是   | 产物变化 |    323.7ms |  323.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   13 | 是   | 产物变化 |    297.9ms |  297.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   14 | 是   | 产物变化 |    298.9ms |  298.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   15 | 是   | 产物变化 |    286.9ms |  286.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   16 | 是   | 产物变化 |    298.3ms |  298.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   17 | 是   | 产物变化 |    310.2ms |  310.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   18 | 是   | 产物变化 |    296.1ms |  296.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   19 | 是   | 产物变化 |    296.7ms |  296.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   20 | 是   | 产物变化 |    345.6ms |  345.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 | 是   | 产物变化 |    213.0ms |  213.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 | 是   | 产物变化 |    166.1ms |  166.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 | 是   | 产物变化 |    154.0ms |  154.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 | 是   | 产物变化 |    170.9ms |  170.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 | 是   | 产物变化 |    177.2ms |  177.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 | 是   | 产物变化 |    185.1ms |  185.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 | 是   | 产物变化 |    153.4ms |  153.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 | 是   | 产物变化 |    154.0ms |  154.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 | 是   | 产物变化 |    154.7ms |  154.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 | 是   | 产物变化 |    187.7ms |  187.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 | 是   | 产物变化 |    199.5ms |  199.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 | 是   | 产物变化 |    164.6ms |  164.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 | 是   | 产物变化 |    153.3ms |  153.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 | 是   | 产物变化 |    152.4ms |  152.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 | 是   | 产物变化 |    156.5ms |  156.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 | 是   | 产物变化 |    145.0ms |  145.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 | 是   | 产物变化 |    166.0ms |  166.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 | 是   | 产物变化 |    141.7ms |  141.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 | 是   | 产物变化 |    143.6ms |  143.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 | 是   | 产物变化 |    142.7ms |  142.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 | 是   | 产物变化 |    154.2ms |  154.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 | 是   | 产物变化 |    144.8ms |  144.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 | 是   | 产物变化 |    155.6ms |  155.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 | 是   | 产物变化 |    141.7ms |  141.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 | 是   | 产物变化 |    176.8ms |  176.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 | 是   | 产物变化 |    143.1ms |  143.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 | 是   | 产物变化 |    143.5ms |  143.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 | 是   | 产物变化 |    134.0ms |  134.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 | 是   | 产物变化 |    165.0ms |  165.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 | 是   | 产物变化 |    143.5ms |  143.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 | 是   | 产物变化 |    167.1ms |  167.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 | 是   | 产物变化 |    132.6ms |  132.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 | 是   | 产物变化 |    155.4ms |  155.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 | 是   | 产物变化 |    144.6ms |  144.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 | 是   | 产物变化 |    187.5ms |  187.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 | 是   | 产物变化 |    133.1ms |  133.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 | 是   | 产物变化 |    155.7ms |  155.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 | 是   | 产物变化 |    141.9ms |  141.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 | 是   | 产物变化 |    166.5ms |  166.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 | 是   | 产物变化 |    144.8ms |  144.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 | 是   | 产物变化 |    151.6ms |  151.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 | 是   | 产物变化 |    173.2ms |  173.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 | 是   | 产物变化 |    150.4ms |  150.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 | 是   | 产物变化 |    140.8ms |  140.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 | 是   | 产物变化 |    157.1ms |  157.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 | 是   | 产物变化 |    144.9ms |  144.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 | 是   | 产物变化 |    142.3ms |  142.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 | 是   | 产物变化 |    133.0ms |  133.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 | 是   | 产物变化 |    142.7ms |  142.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 | 是   | 产物变化 |    131.1ms |  131.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 | 是   | 产物变化 |    141.6ms |  141.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 | 是   | 产物变化 |    144.2ms |  144.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 | 是   | 产物变化 |    142.9ms |  142.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 | 是   | 产物变化 |    143.9ms |  143.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 | 是   | 产物变化 |    143.6ms |  143.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 | 是   | 产物变化 |    142.7ms |  142.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 | 是   | 产物变化 |    133.2ms |  133.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 | 是   | 产物变化 |    141.6ms |  141.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 | 是   | 产物变化 |    144.8ms |  144.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 | 是   | 产物变化 |    141.1ms |  141.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 | 是   | 产物变化 |    141.4ms |  141.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 | 是   | 产物变化 |    143.4ms |  143.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 | 是   | 产物变化 |    141.5ms |  141.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 | 是   | 产物变化 |    167.1ms |  167.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 | 是   | 产物变化 |    132.7ms |  132.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 | 是   | 产物变化 |    178.3ms |  178.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 | 是   | 产物变化 |    142.9ms |  142.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 | 是   | 产物变化 |    142.1ms |  142.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 | 是   | 产物变化 |    163.1ms |  163.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 | 是   | 产物变化 |    140.9ms |  140.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 | 是   | 产物变化 |    143.1ms |  143.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 | 是   | 产物变化 |    177.6ms |  177.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 | 是   | 产物变化 |    144.0ms |  144.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 | 是   | 产物变化 |    133.2ms |  133.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 | 是   | 产物变化 |    143.5ms |  143.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 | 是   | 产物变化 |    140.8ms |  140.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 | 是   | 产物变化 |    187.3ms |  187.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 | 是   | 产物变化 |    132.6ms |  132.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 | 是   | 产物变化 |    145.2ms |  145.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 | 是   | 产物变化 |    134.4ms |  134.4ms |        - |    - |    - |        - |          - |        |          |

说明：

- 所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。
- 本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
- HMR 产物变化轮询间隔默认是 10ms，可通过 BENCH_HMR_POLL_INTERVAL 覆盖。
