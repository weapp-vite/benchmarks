# HMR 基准报告

生成时间：2026-06-02T09:38:39.621Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 一眼结论

- HMR 最快：mpx / style 区块，平均 53.1ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 462.0ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR | 相对最快 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | -------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |   53.1ms |    1.00x |   53.1ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |   53.9ms |    1.02x |   53.9ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |   63.3ms |    1.19x |   63.3ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |   67.2ms |    1.27x |   67.2ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   89.0ms |    1.68x |   89.0ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   90.5ms |    1.70x |   90.5ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |  101.1ms |    1.90x |  101.1ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  105.6ms |    1.99x |  105.6ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  140.4ms |    2.64x |  140.4ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  168.1ms |    3.17x |  168.1ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  199.3ms |    3.75x |  199.3ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  207.5ms |    3.91x |  207.5ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |  218.2ms |    4.11x |  218.2ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  229.2ms |    4.32x |  229.2ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |  233.3ms |    4.39x |  233.3ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  233.8ms |    4.40x |  233.8ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |  234.9ms |    4.42x |  234.9ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  237.6ms |    4.48x |  237.6ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  240.3ms |    4.53x |  240.3ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |  256.4ms |    4.83x |  256.4ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  266.2ms |    5.01x |  266.2ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | taro vue3 / 页面配置                                  | taro vue3                     | Vue SFC  | 产物变化 |  295.4ms |    5.56x |  295.4ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  312.2ms |    5.88x |  312.2ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  329.6ms |    6.21x |  329.6ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  349.8ms |    6.59x |  349.8ms |        - |    - |    - |        - |          - |          - |            - |
|   26 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  462.0ms |    8.70x |  462.0ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                            |
| ----------------------------------------------------- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | --------------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |    256.4ms |  256.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |    234.9ms |  234.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |    233.3ms |  233.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |    218.2ms |  218.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |    266.2ms |  266.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |    240.3ms |  240.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |    233.8ms |  233.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |    229.2ms |  229.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite 原生 / JS 文件                             | 产物变化 |    101.1ms |  101.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`        |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |    105.6ms |  105.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml`      |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |     90.5ms |   90.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss`      |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |     89.0ms |   89.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json`      |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    237.6ms |  237.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    168.1ms |  168.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    140.4ms |  140.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    462.0ms |  462.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    207.5ms |  207.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    199.3ms |  199.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    349.8ms |  349.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    329.6ms |  329.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / CSS 文件                                  | 产物变化 |    312.2ms |  312.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`       |
| taro vue3 / 页面配置                                  | 产物变化 |    295.4ms |  295.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.config.ts` |
| mpx / template 区块                                   | 产物变化 |     67.2ms |   67.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / script 区块                                     | 产物变化 |     63.3ms |   63.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / style 区块                                      | 产物变化 |     53.1ms |   53.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / 页面配置                                        | 产物变化 |     53.9ms |   53.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |

## 原始明细

| 场景                                                  | 轮次 | 通过 | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | ---- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 | 是   | 产物变化 |    287.4ms |  287.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 | 是   | 产物变化 |    281.5ms |  281.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 | 是   | 产物变化 |    244.2ms |  244.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 | 是   | 产物变化 |    241.4ms |  241.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 | 是   | 产物变化 |    265.3ms |  265.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 | 是   | 产物变化 |    243.2ms |  243.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 | 是   | 产物变化 |    318.5ms |  318.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 | 是   | 产物变化 |    233.6ms |  233.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 | 是   | 产物变化 |    242.7ms |  242.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 | 是   | 产物变化 |    244.3ms |  244.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 | 是   | 产物变化 |    287.1ms |  287.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 | 是   | 产物变化 |    243.4ms |  243.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 | 是   | 产物变化 |    239.9ms |  239.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 | 是   | 产物变化 |    244.3ms |  244.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 | 是   | 产物变化 |    242.7ms |  242.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 | 是   | 产物变化 |    241.0ms |  241.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 | 是   | 产物变化 |    297.0ms |  297.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 | 是   | 产物变化 |    245.2ms |  245.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 | 是   | 产物变化 |    239.8ms |  239.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 | 是   | 产物变化 |    244.9ms |  244.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 | 是   | 产物变化 |    261.6ms |  261.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 | 是   | 产物变化 |    221.8ms |  221.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 | 是   | 产物变化 |    208.9ms |  208.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 | 是   | 产物变化 |    232.6ms |  232.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 | 是   | 产物变化 |    222.0ms |  222.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 | 是   | 产物变化 |    229.9ms |  229.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 | 是   | 产物变化 |    251.4ms |  251.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 | 是   | 产物变化 |    316.5ms |  316.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 | 是   | 产物变化 |    216.6ms |  216.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 | 是   | 产物变化 |    220.2ms |  220.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 | 是   | 产物变化 |    229.1ms |  229.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 | 是   | 产物变化 |    238.9ms |  238.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 | 是   | 产物变化 |    280.1ms |  280.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 | 是   | 产物变化 |    221.0ms |  221.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 | 是   | 产物变化 |    248.8ms |  248.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 | 是   | 产物变化 |    211.3ms |  211.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 | 是   | 产物变化 |    208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 | 是   | 产物变化 |    231.4ms |  231.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 | 是   | 产物变化 |    228.9ms |  228.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 | 是   | 产物变化 |    217.8ms |  217.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 | 是   | 产物变化 |    209.6ms |  209.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 | 是   | 产物变化 |    232.4ms |  232.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 | 是   | 产物变化 |    207.9ms |  207.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 | 是   | 产物变化 |    250.4ms |  250.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 | 是   | 产物变化 |    275.1ms |  275.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 | 是   | 产物变化 |    221.2ms |  221.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 | 是   | 产物变化 |    233.3ms |  233.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 | 是   | 产物变化 |    221.6ms |  221.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 | 是   | 产物变化 |    220.7ms |  220.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 | 是   | 产物变化 |    230.9ms |  230.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 | 是   | 产物变化 |    300.7ms |  300.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 | 是   | 产物变化 |    220.8ms |  220.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 | 是   | 产物变化 |    209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 | 是   | 产物变化 |    230.5ms |  230.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 | 是   | 产物变化 |    221.6ms |  221.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 | 是   | 产物变化 |    221.8ms |  221.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 | 是   | 产物变化 |    217.7ms |  217.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 | 是   | 产物变化 |    228.8ms |  228.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 | 是   | 产物变化 |    291.7ms |  291.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 | 是   | 产物变化 |    219.6ms |  219.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 | 是   | 产物变化 |    200.6ms |  200.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 | 是   | 产物变化 |    196.4ms |  196.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 | 是   | 产物变化 |    210.4ms |  210.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 | 是   | 产物变化 |    225.0ms |  225.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 | 是   | 产物变化 |    210.7ms |  210.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 | 是   | 产物变化 |    206.5ms |  206.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 | 是   | 产物变化 |    285.2ms |  285.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 | 是   | 产物变化 |    206.7ms |  206.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 | 是   | 产物变化 |    220.4ms |  220.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 | 是   | 产物变化 |    210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 | 是   | 产物变化 |    207.1ms |  207.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 | 是   | 产物变化 |    199.1ms |  199.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 | 是   | 产物变化 |    220.5ms |  220.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 | 是   | 产物变化 |    208.4ms |  208.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 | 是   | 产物变化 |    206.8ms |  206.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 | 是   | 产物变化 |    304.3ms |  304.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 | 是   | 产物变化 |    219.5ms |  219.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 | 是   | 产物变化 |    198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 | 是   | 产物变化 |    229.6ms |  229.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 | 是   | 产物变化 |    197.9ms |  197.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 | 是   | 产物变化 |    268.5ms |  268.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 | 是   | 产物变化 |    253.9ms |  253.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 | 是   | 产物变化 |    306.3ms |  306.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 | 是   | 产物变化 |    233.7ms |  233.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 | 是   | 产物变化 |    241.5ms |  241.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 | 是   | 产物变化 |    243.2ms |  243.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 | 是   | 产物变化 |    251.7ms |  251.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 | 是   | 产物变化 |    326.8ms |  326.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 | 是   | 产物变化 |    305.3ms |  305.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 | 是   | 产物变化 |    281.6ms |  281.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 | 是   | 产物变化 |    249.5ms |  249.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 | 是   | 产物变化 |    234.4ms |  234.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 | 是   | 产物变化 |    287.3ms |  287.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 | 是   | 产物变化 |    241.1ms |  241.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 | 是   | 产物变化 |    243.1ms |  243.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 | 是   | 产物变化 |    302.2ms |  302.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 | 是   | 产物变化 |    286.3ms |  286.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 | 是   | 产物变化 |    269.8ms |  269.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 | 是   | 产物变化 |    254.2ms |  254.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 | 是   | 产物变化 |    243.9ms |  243.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 | 是   | 产物变化 |    232.8ms |  232.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 | 是   | 产物变化 |    231.6ms |  231.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 | 是   | 产物变化 |    210.3ms |  210.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 | 是   | 产物变化 |    227.4ms |  227.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 | 是   | 产物变化 |    231.2ms |  231.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 | 是   | 产物变化 |    223.2ms |  223.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 | 是   | 产物变化 |    289.8ms |  289.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 | 是   | 产物变化 |    244.2ms |  244.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 | 是   | 产物变化 |    290.0ms |  290.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 | 是   | 产物变化 |    232.6ms |  232.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 | 是   | 产物变化 |    219.3ms |  219.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 | 是   | 产物变化 |    224.3ms |  224.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 | 是   | 产物变化 |    274.2ms |  274.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 | 是   | 产物变化 |    316.5ms |  316.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 | 是   | 产物变化 |    231.9ms |  231.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 | 是   | 产物变化 |    238.2ms |  238.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 | 是   | 产物变化 |    224.4ms |  224.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 | 是   | 产物变化 |    217.4ms |  217.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 | 是   | 产物变化 |    219.3ms |  219.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 | 是   | 产物变化 |    228.1ms |  228.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 | 是   | 产物变化 |    252.8ms |  252.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 | 是   | 产物变化 |    224.0ms |  224.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 | 是   | 产物变化 |    229.6ms |  229.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 | 是   | 产物变化 |    220.6ms |  220.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 | 是   | 产物变化 |    231.9ms |  231.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 | 是   | 产物变化 |    268.0ms |  268.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 | 是   | 产物变化 |    296.7ms |  296.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 | 是   | 产物变化 |    246.5ms |  246.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 | 是   | 产物变化 |    218.8ms |  218.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 | 是   | 产物变化 |    223.3ms |  223.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 | 是   | 产物变化 |    218.0ms |  218.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 | 是   | 产物变化 |    219.3ms |  219.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 | 是   | 产物变化 |    221.5ms |  221.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 | 是   | 产物变化 |    222.6ms |  222.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 | 是   | 产物变化 |    290.1ms |  290.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 | 是   | 产物变化 |    221.0ms |  221.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 | 是   | 产物变化 |    211.4ms |  211.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 | 是   | 产物变化 |    217.9ms |  217.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 | 是   | 产物变化 |    220.1ms |  220.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 | 是   | 产物变化 |    221.8ms |  221.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 | 是   | 产物变化 |    215.3ms |  215.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 | 是   | 产物变化 |    311.9ms |  311.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 | 是   | 产物变化 |    216.9ms |  216.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 | 是   | 产物变化 |    209.2ms |  209.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 | 是   | 产物变化 |    208.5ms |  208.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 | 是   | 产物变化 |    220.3ms |  220.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 | 是   | 产物变化 |    208.3ms |  208.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 | 是   | 产物变化 |    220.3ms |  220.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 | 是   | 产物变化 |    210.2ms |  210.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 | 是   | 产物变化 |    194.0ms |  194.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 | 是   | 产物变化 |    333.1ms |  333.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 | 是   | 产物变化 |    212.9ms |  212.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 | 是   | 产物变化 |    222.0ms |  222.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 | 是   | 产物变化 |    210.7ms |  210.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 | 是   | 产物变化 |    209.3ms |  209.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 | 是   | 产物变化 |    220.4ms |  220.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 | 是   | 产物变化 |    222.1ms |  222.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 | 是   | 产物变化 |    209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 | 是   | 产物变化 |    208.8ms |  208.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 | 是   | 产物变化 |    319.9ms |  319.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 | 是   | 产物变化 |     99.8ms |   99.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 | 是   | 产物变化 |    122.1ms |  122.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 | 是   | 产物变化 |     99.4ms |   99.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 | 是   | 产物变化 |     98.4ms |   98.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 | 是   | 产物变化 |     98.8ms |   98.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 | 是   | 产物变化 |     99.6ms |   99.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 | 是   | 产物变化 |     99.7ms |   99.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 | 是   | 产物变化 |     99.0ms |   99.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 | 是   | 产物变化 |    109.5ms |  109.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 | 是   | 产物变化 |     97.1ms |   97.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 | 是   | 产物变化 |     98.6ms |   98.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 | 是   | 产物变化 |     97.4ms |   97.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 | 是   | 产物变化 |     96.8ms |   96.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 | 是   | 产物变化 |     98.8ms |   98.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 | 是   | 产物变化 |     99.7ms |   99.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 | 是   | 产物变化 |     98.5ms |   98.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 | 是   | 产物变化 |     98.4ms |   98.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 | 是   | 产物变化 |    101.7ms |  101.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 | 是   | 产物变化 |    109.2ms |  109.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 | 是   | 产物变化 |     99.6ms |   99.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 | 是   | 产物变化 |    101.8ms |  101.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 | 是   | 产物变化 |     89.0ms |   89.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 | 是   | 产物变化 |     86.8ms |   86.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 | 是   | 产物变化 |     98.1ms |   98.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 | 是   | 产物变化 |    153.9ms |  153.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 | 是   | 产物变化 |    160.9ms |  160.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 | 是   | 产物变化 |    146.9ms |  146.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 | 是   | 产物变化 |    106.1ms |  106.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 | 是   | 产物变化 |    137.1ms |  137.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 | 是   | 产物变化 |    126.5ms |  126.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 | 是   | 产物变化 |     98.2ms |   98.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 | 是   | 产物变化 |     89.9ms |   89.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 | 是   | 产物变化 |     87.4ms |   87.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 | 是   | 产物变化 |    101.5ms |  101.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 | 是   | 产物变化 |     87.5ms |   87.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 | 是   | 产物变化 |     88.6ms |   88.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 | 是   | 产物变化 |     89.6ms |   89.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 | 是   | 产物变化 |     99.3ms |   99.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 | 是   | 产物变化 |     87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 | 是   | 产物变化 |     88.0ms |   88.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 | 是   | 产物变化 |     86.7ms |   86.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 | 是   | 产物变化 |     87.8ms |   87.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 | 是   | 产物变化 |     87.9ms |   87.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 | 是   | 产物变化 |     91.0ms |   91.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 | 是   | 产物变化 |     86.6ms |   86.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 | 是   | 产物变化 |     86.5ms |   86.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 | 是   | 产物变化 |    110.9ms |  110.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 | 是   | 产物变化 |    100.3ms |  100.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 | 是   | 产物变化 |     88.2ms |   88.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 | 是   | 产物变化 |     88.2ms |   88.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 | 是   | 产物变化 |     87.5ms |   87.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 | 是   | 产物变化 |     88.3ms |   88.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 | 是   | 产物变化 |     87.7ms |   87.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 | 是   | 产物变化 |     87.2ms |   87.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 | 是   | 产物变化 |     86.6ms |   86.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 | 是   | 产物变化 |    100.2ms |  100.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 | 是   | 产物变化 |     86.9ms |   86.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 | 是   | 产物变化 |     88.1ms |   88.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 | 是   | 产物变化 |     99.3ms |   99.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 | 是   | 产物变化 |     87.6ms |   87.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 | 是   | 产物变化 |     87.4ms |   87.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 | 是   | 产物变化 |   1145.4ms | 1145.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 | 是   | 产物变化 |    257.1ms |  257.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 | 是   | 产物变化 |    231.8ms |  231.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 | 是   | 产物变化 |    143.8ms |  143.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 | 是   | 产物变化 |    233.8ms |  233.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 | 是   | 产物变化 |    232.0ms |  232.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 | 是   | 产物变化 |    221.2ms |  221.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 | 是   | 产物变化 |    222.7ms |  222.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 | 是   | 产物变化 |    219.3ms |  219.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 | 是   | 产物变化 |    218.9ms |  218.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 | 是   | 产物变化 |    132.2ms |  132.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 | 是   | 产物变化 |    133.4ms |  133.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 | 是   | 产物变化 |    132.4ms |  132.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 | 是   | 产物变化 |    133.1ms |  133.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 | 是   | 产物变化 |    152.7ms |  152.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 | 是   | 产物变化 |    230.6ms |  230.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 | 是   | 产物变化 |    134.5ms |  134.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 | 是   | 产物变化 |    222.6ms |  222.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 | 是   | 产物变化 |    222.4ms |  222.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 | 是   | 产物变化 |    132.9ms |  132.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 | 是   | 产物变化 |    262.9ms |  262.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 | 是   | 产物变化 |    148.9ms |  148.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 | 是   | 产物变化 |    234.1ms |  234.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 | 是   | 产物变化 |    208.7ms |  208.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 | 是   | 产物变化 |    221.0ms |  221.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 | 是   | 产物变化 |    253.5ms |  253.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 | 是   | 产物变化 |    133.7ms |  133.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 | 是   | 产物变化 |    122.1ms |  122.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 | 是   | 产物变化 |    132.7ms |  132.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 | 是   | 产物变化 |    131.5ms |  131.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 | 是   | 产物变化 |    132.7ms |  132.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 | 是   | 产物变化 |    136.0ms |  136.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 | 是   | 产物变化 |    133.5ms |  133.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 | 是   | 产物变化 |    142.6ms |  142.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 | 是   | 产物变化 |    133.6ms |  133.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 | 是   | 产物变化 |    208.2ms |  208.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 | 是   | 产物变化 |    137.6ms |  137.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 | 是   | 产物变化 |    220.8ms |  220.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 | 是   | 产物变化 |    130.6ms |  130.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 | 是   | 产物变化 |    136.7ms |  136.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 | 是   | 产物变化 |    210.4ms |  210.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 | 是   | 产物变化 |    130.5ms |  130.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 | 是   | 产物变化 |    132.2ms |  132.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 | 是   | 产物变化 |    132.7ms |  132.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 | 是   | 产物变化 |    133.5ms |  133.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 | 是   | 产物变化 |    120.8ms |  120.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 | 是   | 产物变化 |    121.9ms |  121.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 | 是   | 产物变化 |    131.0ms |  131.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 | 是   | 产物变化 |    134.9ms |  134.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 | 是   | 产物变化 |    131.1ms |  131.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 | 是   | 产物变化 |    121.8ms |  121.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 | 是   | 产物变化 |    166.3ms |  166.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 | 是   | 产物变化 |    206.7ms |  206.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 | 是   | 产物变化 |    133.9ms |  133.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 | 是   | 产物变化 |    132.8ms |  132.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 | 是   | 产物变化 |    155.9ms |  155.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 | 是   | 产物变化 |    131.4ms |  131.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 | 是   | 产物变化 |    134.1ms |  134.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 | 是   | 产物变化 |    122.4ms |  122.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 | 是   | 产物变化 |    124.1ms |  124.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 | 是   | 产物变化 |   1358.2ms | 1358.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    388.4ms |  388.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    431.5ms |  431.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    476.7ms |  476.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    430.3ms |  430.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    440.9ms |  440.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    483.2ms |  483.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    434.1ms |  434.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    450.9ms |  450.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    389.5ms |  389.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    329.5ms |  329.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    394.6ms |  394.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    407.7ms |  407.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    396.8ms |  396.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    482.4ms |  482.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    387.0ms |  387.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    405.2ms |  405.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    336.4ms |  336.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    396.3ms |  396.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    420.8ms |  420.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    233.9ms |  233.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    198.5ms |  198.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    196.4ms |  196.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    207.7ms |  207.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    199.8ms |  199.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    199.9ms |  199.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    202.0ms |  202.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    211.5ms |  211.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    248.5ms |  248.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    152.4ms |  152.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    197.9ms |  197.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    209.1ms |  209.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    199.1ms |  199.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    212.7ms |  212.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    186.5ms |  186.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    199.5ms |  199.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    199.9ms |  199.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    267.4ms |  267.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    233.1ms |  233.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    194.1ms |  194.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 | 是   | 产物变化 |    164.6ms |  164.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 | 是   | 产物变化 |    225.4ms |  225.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 | 是   | 产物变化 |    176.1ms |  176.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 | 是   | 产物变化 |    212.8ms |  212.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 | 是   | 产物变化 |    174.7ms |  174.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 | 是   | 产物变化 |    211.0ms |  211.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 | 是   | 产物变化 |    196.5ms |  196.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 | 是   | 产物变化 |    207.1ms |  207.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 | 是   | 产物变化 |    216.3ms |  216.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 | 是   | 产物变化 |    175.9ms |  175.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 | 是   | 产物变化 |    211.1ms |  211.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 | 是   | 产物变化 |    232.6ms |  232.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 | 是   | 产物变化 |    177.7ms |  177.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 | 是   | 产物变化 |    199.9ms |  199.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 | 是   | 产物变化 |    187.0ms |  187.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 | 是   | 产物变化 |    209.7ms |  209.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 | 是   | 产物变化 |    229.3ms |  229.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 | 是   | 产物变化 |    177.6ms |  177.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 | 是   | 产物变化 |    218.6ms |  218.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 | 是   | 产物变化 |    181.3ms |  181.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 | 是   | 产物变化 |    320.7ms |  320.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    343.8ms |  343.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    341.5ms |  341.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    352.7ms |  352.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    344.2ms |  344.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    314.8ms |  314.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    348.8ms |  348.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    339.4ms |  339.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    372.1ms |  372.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    429.1ms |  429.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    386.4ms |  386.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    489.9ms |  489.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    311.6ms |  311.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    310.9ms |  310.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    317.8ms |  317.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    318.8ms |  318.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    323.9ms |  323.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    321.7ms |  321.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    370.8ms |  370.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    337.0ms |  337.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    317.2ms |  317.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    364.0ms |  364.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    296.1ms |  296.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    320.4ms |  320.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    321.5ms |  321.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    320.5ms |  320.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    332.5ms |  332.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    287.7ms |  287.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    308.8ms |  308.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    319.7ms |  319.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    323.2ms |  323.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    310.0ms |  310.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    306.3ms |  306.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    307.7ms |  307.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    412.2ms |  412.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    384.4ms |  384.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    346.5ms |  346.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    424.9ms |  424.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    269.9ms |  269.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    318.3ms |  318.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 | 是   | 产物变化 |    295.5ms |  295.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 | 是   | 产物变化 |    318.7ms |  318.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 | 是   | 产物变化 |    403.2ms |  403.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 | 是   | 产物变化 |    218.2ms |  218.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 | 是   | 产物变化 |    308.7ms |  308.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 | 是   | 产物变化 |    308.0ms |  308.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 | 是   | 产物变化 |    309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 | 是   | 产物变化 |    324.9ms |  324.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 | 是   | 产物变化 |    288.5ms |  288.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 | 是   | 产物变化 |    364.6ms |  364.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 | 是   | 产物变化 |    322.5ms |  322.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 | 是   | 产物变化 |    309.2ms |  309.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 | 是   | 产物变化 |    324.9ms |  324.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 | 是   | 产物变化 |    309.3ms |  309.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 | 是   | 产物变化 |    349.5ms |  349.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 | 是   | 产物变化 |    307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 | 是   | 产物变化 |    298.5ms |  298.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 | 是   | 产物变化 |    222.6ms |  222.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 | 是   | 产物变化 |    342.7ms |  342.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 | 是   | 产物变化 |    318.8ms |  318.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    1 | 是   | 产物变化 |    300.7ms |  300.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    2 | 是   | 产物变化 |    310.6ms |  310.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    3 | 是   | 产物变化 |    307.9ms |  307.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    4 | 是   | 产物变化 |    314.5ms |  314.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    5 | 是   | 产物变化 |    311.2ms |  311.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    6 | 是   | 产物变化 |    298.3ms |  298.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    7 | 是   | 产物变化 |    344.1ms |  344.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    8 | 是   | 产物变化 |    310.6ms |  310.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    9 | 是   | 产物变化 |    307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   10 | 是   | 产物变化 |    297.7ms |  297.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   11 | 是   | 产物变化 |    208.9ms |  208.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   12 | 是   | 产物变化 |    208.5ms |  208.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   13 | 是   | 产物变化 |    322.2ms |  322.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   14 | 是   | 产物变化 |    295.7ms |  295.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   15 | 是   | 产物变化 |    221.7ms |  221.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   16 | 是   | 产物变化 |    353.8ms |  353.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   17 | 是   | 产物变化 |    287.6ms |  287.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   18 | 是   | 产物变化 |    300.0ms |  300.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   19 | 是   | 产物变化 |    297.4ms |  297.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   20 | 是   | 产物变化 |    309.1ms |  309.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 | 是   | 产物变化 |     99.5ms |   99.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 | 是   | 产物变化 |     55.6ms |   55.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 | 是   | 产物变化 |     56.1ms |   56.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 | 是   | 产物变化 |     99.7ms |   99.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 | 是   | 产物变化 |     56.5ms |   56.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 | 是   | 产物变化 |     55.5ms |   55.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 | 是   | 产物变化 |     68.9ms |   68.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 | 是   | 产物变化 |     54.4ms |   54.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 | 是   | 产物变化 |     56.8ms |   56.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 | 是   | 产物变化 |     88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 | 是   | 产物变化 |     56.3ms |   56.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 | 是   | 产物变化 |     56.1ms |   56.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 | 是   | 产物变化 |     55.6ms |   55.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 | 是   | 产物变化 |     55.7ms |   55.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 | 是   | 产物变化 |     55.3ms |   55.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 | 是   | 产物变化 |     55.2ms |   55.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 | 是   | 产物变化 |    117.8ms |  117.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 | 是   | 产物变化 |     57.4ms |   57.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 | 是   | 产物变化 |     55.4ms |   55.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 | 是   | 产物变化 |     45.3ms |   45.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 | 是   | 产物变化 |     56.0ms |   56.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 | 是   | 产物变化 |     91.5ms |   91.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 | 是   | 产物变化 |     54.8ms |   54.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 | 是   | 产物变化 |     54.5ms |   54.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 | 是   | 产物变化 |     99.8ms |   99.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 | 是   | 产物变化 |     46.3ms |   46.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 | 是   | 产物变化 |     58.4ms |   58.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 | 是   | 产物变化 |     48.0ms |   48.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 | 是   | 产物变化 |     57.4ms |   57.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 | 是   | 产物变化 |     56.3ms |   56.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 | 是   | 产物变化 |     46.3ms |   46.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 | 是   | 产物变化 |     60.9ms |   60.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 | 是   | 产物变化 |     90.6ms |   90.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 | 是   | 产物变化 |     59.2ms |   59.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 | 是   | 产物变化 |     46.2ms |   46.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 | 是   | 产物变化 |     80.3ms |   80.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 | 是   | 产物变化 |     55.6ms |   55.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 | 是   | 产物变化 |     57.5ms |   57.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 | 是   | 产物变化 |     53.8ms |   53.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 | 是   | 产物变化 |     55.1ms |   55.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 | 是   | 产物变化 |     67.1ms |   67.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 | 是   | 产物变化 |     55.7ms |   55.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 | 是   | 产物变化 |     55.3ms |   55.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 | 是   | 产物变化 |     54.1ms |   54.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 | 是   | 产物变化 |     45.3ms |   45.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 | 是   | 产物变化 |     43.4ms |   43.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 | 是   | 产物变化 |     56.6ms |   56.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 | 是   | 产物变化 |     44.2ms |   44.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 | 是   | 产物变化 |     56.2ms |   56.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 | 是   | 产物变化 |     44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 | 是   | 产物变化 |     54.4ms |   54.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 | 是   | 产物变化 |     56.0ms |   56.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 | 是   | 产物变化 |     54.2ms |   54.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 | 是   | 产物变化 |     65.9ms |   65.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 | 是   | 产物变化 |     56.0ms |   56.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 | 是   | 产物变化 |     43.7ms |   43.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 | 是   | 产物变化 |     44.0ms |   44.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 | 是   | 产物变化 |     56.6ms |   56.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 | 是   | 产物变化 |     45.0ms |   45.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 | 是   | 产物变化 |     55.1ms |   55.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 | 是   | 产物变化 |     44.4ms |   44.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 | 是   | 产物变化 |     54.6ms |   54.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 | 是   | 产物变化 |     55.4ms |   55.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 | 是   | 产物变化 |     98.0ms |   98.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 | 是   | 产物变化 |     56.7ms |   56.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 | 是   | 产物变化 |     45.3ms |   45.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 | 是   | 产物变化 |     44.1ms |   44.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 | 是   | 产物变化 |     54.0ms |   54.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 | 是   | 产物变化 |     55.2ms |   55.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 | 是   | 产物变化 |     57.7ms |   57.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 | 是   | 产物变化 |     45.8ms |   45.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 | 是   | 产物变化 |     55.0ms |   55.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 | 是   | 产物变化 |     55.8ms |   55.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 | 是   | 产物变化 |     44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 | 是   | 产物变化 |     55.2ms |   55.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 | 是   | 产物变化 |     57.0ms |   57.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 | 是   | 产物变化 |     43.5ms |   43.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 | 是   | 产物变化 |     56.2ms |   56.2ms |        - |    - |    - |        - |          - |        |          |

说明：

- 所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。
- 本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
- HMR 产物变化轮询间隔默认是 10ms，可通过 BENCH_HMR_POLL_INTERVAL 覆盖。
