# HMR 基准报告

生成时间：2026-06-02T09:12:22.008Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 一眼结论

- HMR 最快：mpx / 页面配置，平均 58.7ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 429.5ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR | 相对最快 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | -------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |   58.7ms |    1.00x |   58.7ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |   59.0ms |    1.01x |   59.0ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |   63.6ms |    1.08x |   63.6ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |   76.8ms |    1.31x |   76.8ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  102.1ms |    1.74x |  102.1ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  102.7ms |    1.75x |  102.7ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  102.8ms |    1.75x |  102.8ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |  113.3ms |    1.93x |  113.3ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  158.6ms |    2.70x |  158.6ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  163.5ms |    2.79x |  163.5ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  201.8ms |    3.44x |  201.8ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  204.6ms |    3.49x |  204.6ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  217.6ms |    3.71x |  217.6ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |  227.5ms |    3.88x |  227.5ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  245.3ms |    4.18x |  245.3ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  258.2ms |    4.40x |  258.2ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |  260.8ms |    4.44x |  260.8ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  260.8ms |    4.44x |  260.8ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |  268.7ms |    4.58x |  268.7ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  271.3ms |    4.62x |  271.3ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  286.3ms |    4.88x |  286.3ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | taro vue3 / 页面配置                                  | taro vue3                     | Vue SFC  | 产物变化 |  291.0ms |    4.96x |  291.0ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |  296.3ms |    5.05x |  296.3ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  314.0ms |    5.35x |  314.0ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  331.3ms |    5.64x |  331.3ms |        - |    - |    - |        - |          - |          - |            - |
|   26 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  429.5ms |    7.32x |  429.5ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                            |
| ----------------------------------------------------- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | --------------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |    268.7ms |  268.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |    296.3ms |  296.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |    260.8ms |  260.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |    227.5ms |  227.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |    271.3ms |  271.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |    260.8ms |  260.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |    258.2ms |  258.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |    217.6ms |  217.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| weapp-vite 原生 / JS 文件                             | 产物变化 |    113.3ms |  113.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`        |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |    102.7ms |  102.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml`      |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss`      |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json`      |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    245.3ms |  245.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    163.5ms |  163.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    158.6ms |  158.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    429.5ms |  429.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    204.6ms |  204.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    201.8ms |  201.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    331.3ms |  331.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    314.0ms |  314.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`       |
| taro vue3 / CSS 文件                                  | 产物变化 |    286.3ms |  286.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`       |
| taro vue3 / 页面配置                                  | 产物变化 |    291.0ms |  291.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.config.ts` |
| mpx / template 区块                                   | 产物变化 |     76.8ms |   76.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / script 区块                                     | 产物变化 |     59.0ms |   59.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / style 区块                                      | 产物变化 |     63.6ms |   63.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |
| mpx / 页面配置                                        | 产物变化 |     58.7ms |   58.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`             |

## 原始明细

| 场景                                                  | 轮次 | 通过 | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | ---- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 | 是   | 产物变化 |    309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 | 是   | 产物变化 |    306.2ms |  306.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 | 是   | 产物变化 |    308.9ms |  308.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 | 是   | 产物变化 |    256.8ms |  256.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 | 是   | 产物变化 |    253.6ms |  253.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 | 是   | 产物变化 |    254.9ms |  254.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 | 是   | 产物变化 |    256.4ms |  256.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 | 是   | 产物变化 |    254.8ms |  254.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 | 是   | 产物变化 |    254.3ms |  254.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 | 是   | 产物变化 |    257.6ms |  257.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 | 是   | 产物变化 |    254.3ms |  254.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 | 是   | 产物变化 |    257.0ms |  257.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 | 是   | 产物变化 |    256.9ms |  256.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 | 是   | 产物变化 |    254.8ms |  254.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 | 是   | 产物变化 |    306.8ms |  306.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 | 是   | 产物变化 |    307.9ms |  307.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 | 是   | 产物变化 |    255.7ms |  255.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 | 是   | 产物变化 |    255.6ms |  255.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 | 是   | 产物变化 |    255.5ms |  255.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 | 是   | 产物变化 |    256.1ms |  256.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 | 是   | 产物变化 |    381.4ms |  381.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 | 是   | 产物变化 |    422.9ms |  422.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 | 是   | 产物变化 |    256.0ms |  256.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 | 是   | 产物变化 |    255.7ms |  255.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 | 是   | 产物变化 |    256.9ms |  256.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 | 是   | 产物变化 |    614.0ms |  614.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 | 是   | 产物变化 |    254.9ms |  254.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 | 是   | 产物变化 |    256.0ms |  256.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 | 是   | 产物变化 |    307.5ms |  307.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 | 是   | 产物变化 |    255.6ms |  255.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 | 是   | 产物变化 |    256.3ms |  256.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 | 是   | 产物变化 |    257.9ms |  257.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 | 是   | 产物变化 |    256.1ms |  256.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 | 是   | 产物变化 |    255.7ms |  255.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 | 是   | 产物变化 |    359.7ms |  359.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 | 是   | 产物变化 |    254.8ms |  254.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 | 是   | 产物变化 |    204.7ms |  204.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 | 是   | 产物变化 |    308.7ms |  308.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 | 是   | 产物变化 |    254.2ms |  254.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 | 是   | 产物变化 |    256.1ms |  256.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 | 是   | 产物变化 |    255.4ms |  255.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 | 是   | 产物变化 |    255.5ms |  255.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 | 是   | 产物变化 |    308.2ms |  308.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 | 是   | 产物变化 |    255.3ms |  255.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 | 是   | 产物变化 |    256.8ms |  256.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 | 是   | 产物变化 |    255.9ms |  255.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 | 是   | 产物变化 |    254.7ms |  254.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 | 是   | 产物变化 |    257.9ms |  257.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 | 是   | 产物变化 |    253.3ms |  253.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 | 是   | 产物变化 |    261.1ms |  261.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 | 是   | 产物变化 |    255.0ms |  255.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 | 是   | 产物变化 |    254.7ms |  254.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 | 是   | 产物变化 |    357.9ms |  357.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 | 是   | 产物变化 |    203.4ms |  203.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 | 是   | 产物变化 |    255.6ms |  255.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 | 是   | 产物变化 |    257.2ms |  257.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 | 是   | 产物变化 |    254.6ms |  254.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 | 是   | 产物变化 |    253.4ms |  253.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 | 是   | 产物变化 |    253.8ms |  253.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 | 是   | 产物变化 |    255.7ms |  255.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 | 是   | 产物变化 |    255.8ms |  255.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 | 是   | 产物变化 |    205.2ms |  205.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 | 是   | 产物变化 |    257.2ms |  257.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 | 是   | 产物变化 |    202.2ms |  202.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 | 是   | 产物变化 |    254.5ms |  254.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 | 是   | 产物变化 |    259.5ms |  259.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 | 是   | 产物变化 |    255.2ms |  255.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 | 是   | 产物变化 |    256.6ms |  256.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 | 是   | 产物变化 |    205.2ms |  205.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 | 是   | 产物变化 |    203.3ms |  203.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 | 是   | 产物变化 |    206.2ms |  206.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 | 是   | 产物变化 |    203.9ms |  203.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 | 是   | 产物变化 |    203.0ms |  203.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 | 是   | 产物变化 |    205.7ms |  205.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 | 是   | 产物变化 |    253.3ms |  253.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 | 是   | 产物变化 |    203.5ms |  203.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 | 是   | 产物变化 |    205.4ms |  205.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 | 是   | 产物变化 |    304.7ms |  304.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 | 是   | 产物变化 |    309.4ms |  309.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 | 是   | 产物变化 |    307.5ms |  307.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 | 是   | 产物变化 |    306.1ms |  306.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 | 是   | 产物变化 |    257.4ms |  257.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 | 是   | 产物变化 |    256.2ms |  256.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 | 是   | 产物变化 |    256.8ms |  256.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 | 是   | 产物变化 |    255.2ms |  255.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 | 是   | 产物变化 |    308.2ms |  308.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 | 是   | 产物变化 |    255.8ms |  255.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 | 是   | 产物变化 |    255.8ms |  255.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 | 是   | 产物变化 |    254.4ms |  254.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 | 是   | 产物变化 |    254.8ms |  254.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 | 是   | 产物变化 |    255.7ms |  255.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 | 是   | 产物变化 |    305.9ms |  305.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 | 是   | 产物变化 |    254.7ms |  254.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 | 是   | 产物变化 |    258.6ms |  258.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 | 是   | 产物变化 |    256.8ms |  256.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 | 是   | 产物变化 |    255.7ms |  255.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 | 是   | 产物变化 |    306.3ms |  306.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 | 是   | 产物变化 |    255.4ms |  255.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 | 是   | 产物变化 |    255.9ms |  255.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 | 是   | 产物变化 |    256.4ms |  256.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 | 是   | 产物变化 |    306.0ms |  306.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 | 是   | 产物变化 |    255.5ms |  255.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 | 是   | 产物变化 |    254.5ms |  254.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 | 是   | 产物变化 |    256.1ms |  256.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 | 是   | 产物变化 |    204.8ms |  204.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 | 是   | 产物变化 |    256.7ms |  256.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 | 是   | 产物变化 |    256.0ms |  256.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 | 是   | 产物变化 |    305.5ms |  305.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 | 是   | 产物变化 |    254.8ms |  254.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 | 是   | 产物变化 |    255.5ms |  255.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 | 是   | 产物变化 |    255.4ms |  255.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 | 是   | 产物变化 |    255.8ms |  255.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 | 是   | 产物变化 |    255.2ms |  255.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 | 是   | 产物变化 |    255.3ms |  255.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 | 是   | 产物变化 |    307.4ms |  307.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 | 是   | 产物变化 |    257.0ms |  257.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 | 是   | 产物变化 |    255.7ms |  255.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 | 是   | 产物变化 |    257.0ms |  257.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 | 是   | 产物变化 |    255.9ms |  255.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 | 是   | 产物变化 |    256.6ms |  256.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 | 是   | 产物变化 |    305.1ms |  305.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 | 是   | 产物变化 |    256.7ms |  256.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 | 是   | 产物变化 |    257.3ms |  257.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 | 是   | 产物变化 |    255.6ms |  255.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 | 是   | 产物变化 |    204.3ms |  204.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 | 是   | 产物变化 |    257.3ms |  257.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 | 是   | 产物变化 |    253.9ms |  253.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 | 是   | 产物变化 |    203.1ms |  203.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 | 是   | 产物变化 |    306.4ms |  306.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 | 是   | 产物变化 |    254.1ms |  254.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 | 是   | 产物变化 |    258.7ms |  258.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 | 是   | 产物变化 |    254.1ms |  254.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 | 是   | 产物变化 |    256.5ms |  256.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 | 是   | 产物变化 |    257.2ms |  257.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 | 是   | 产物变化 |    254.3ms |  254.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 | 是   | 产物变化 |    254.7ms |  254.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 | 是   | 产物变化 |    307.7ms |  307.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 | 是   | 产物变化 |    253.9ms |  253.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 | 是   | 产物变化 |    203.2ms |  203.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 | 是   | 产物变化 |    205.0ms |  205.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 | 是   | 产物变化 |    204.7ms |  204.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 | 是   | 产物变化 |    205.2ms |  205.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 | 是   | 产物变化 |    307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 | 是   | 产物变化 |    204.0ms |  204.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 | 是   | 产物变化 |    204.0ms |  204.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 | 是   | 产物变化 |    203.6ms |  203.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 | 是   | 产物变化 |    204.6ms |  204.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 | 是   | 产物变化 |    203.5ms |  203.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 | 是   | 产物变化 |    205.0ms |  205.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 | 是   | 产物变化 |    205.2ms |  205.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 | 是   | 产物变化 |    204.7ms |  204.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 | 是   | 产物变化 |    314.9ms |  314.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 | 是   | 产物变化 |    256.4ms |  256.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 | 是   | 产物变化 |    204.4ms |  204.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 | 是   | 产物变化 |    203.7ms |  203.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 | 是   | 产物变化 |    204.7ms |  204.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 | 是   | 产物变化 |    152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 | 是   | 产物变化 |    103.3ms |  103.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 | 是   | 产物变化 |    101.9ms |  101.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 | 是   | 产物变化 |    164.7ms |  164.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 | 是   | 产物变化 |    153.9ms |  153.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 | 是   | 产物变化 |    102.3ms |  102.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 | 是   | 产物变化 |    102.9ms |  102.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 | 是   | 产物变化 |    102.9ms |  102.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 | 是   | 产物变化 |    102.9ms |  102.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 | 是   | 产物变化 |    102.0ms |  102.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 | 是   | 产物变化 |    153.7ms |  153.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 | 是   | 产物变化 |    102.7ms |  102.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 | 是   | 产物变化 |    103.3ms |  103.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 | 是   | 产物变化 |    103.1ms |  103.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 | 是   | 产物变化 |    102.0ms |  102.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 | 是   | 产物变化 |    102.6ms |  102.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 | 是   | 产物变化 |    101.9ms |  101.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 | 是   | 产物变化 |    101.9ms |  101.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 | 是   | 产物变化 |    102.4ms |  102.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 | 是   | 产物变化 |    102.7ms |  102.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 | 是   | 产物变化 |    103.6ms |  103.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 | 是   | 产物变化 |    103.2ms |  103.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 | 是   | 产物变化 |    102.7ms |  102.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 | 是   | 产物变化 |    102.4ms |  102.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 | 是   | 产物变化 |    103.3ms |  103.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 | 是   | 产物变化 |    103.7ms |  103.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 | 是   | 产物变化 |    102.4ms |  102.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 | 是   | 产物变化 |    103.6ms |  103.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 | 是   | 产物变化 |    102.5ms |  102.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 | 是   | 产物变化 |    103.2ms |  103.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 | 是   | 产物变化 |    103.6ms |  103.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 | 是   | 产物变化 |    102.4ms |  102.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 | 是   | 产物变化 |    103.3ms |  103.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 | 是   | 产物变化 |    103.1ms |  103.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 | 是   | 产物变化 |    102.3ms |  102.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 | 是   | 产物变化 |    102.3ms |  102.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 | 是   | 产物变化 |    101.7ms |  101.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 | 是   | 产物变化 |    103.3ms |  103.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 | 是   | 产物变化 |    102.5ms |  102.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 | 是   | 产物变化 |    101.1ms |  101.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 | 是   | 产物变化 |    101.7ms |  101.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 | 是   | 产物变化 |    103.1ms |  103.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 | 是   | 产物变化 |    103.2ms |  103.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 | 是   | 产物变化 |    102.5ms |  102.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 | 是   | 产物变化 |    102.0ms |  102.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 | 是   | 产物变化 |    101.4ms |  101.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 | 是   | 产物变化 |    100.7ms |  100.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 | 是   | 产物变化 |    101.2ms |  101.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 | 是   | 产物变化 |    101.7ms |  101.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 | 是   | 产物变化 |    102.4ms |  102.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 | 是   | 产物变化 |   1123.0ms | 1123.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 | 是   | 产物变化 |    154.0ms |  154.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 | 是   | 产物变化 |    255.3ms |  255.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 | 是   | 产物变化 |    154.5ms |  154.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 | 是   | 产物变化 |    202.6ms |  202.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 | 是   | 产物变化 |    254.3ms |  254.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 | 是   | 产物变化 |    206.2ms |  206.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 | 是   | 产物变化 |    203.6ms |  203.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 | 是   | 产物变化 |    255.1ms |  255.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 | 是   | 产物变化 |    155.2ms |  155.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 | 是   | 产物变化 |    203.5ms |  203.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 | 是   | 产物变化 |    254.7ms |  254.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 | 是   | 产物变化 |    153.0ms |  153.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 | 是   | 产物变化 |    153.1ms |  153.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 | 是   | 产物变化 |    205.2ms |  205.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 | 是   | 产物变化 |    204.7ms |  204.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 | 是   | 产物变化 |    254.0ms |  254.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 | 是   | 产物变化 |    205.4ms |  205.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 | 是   | 产物变化 |    154.6ms |  154.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 | 是   | 产物变化 |    153.9ms |  153.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 | 是   | 产物变化 |    203.4ms |  203.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 | 是   | 产物变化 |    152.3ms |  152.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 | 是   | 产物变化 |    152.9ms |  152.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 | 是   | 产物变化 |    202.8ms |  202.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 | 是   | 产物变化 |    203.2ms |  203.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 | 是   | 产物变化 |    154.8ms |  154.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 | 是   | 产物变化 |    154.6ms |  154.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 | 是   | 产物变化 |    155.2ms |  155.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 | 是   | 产物变化 |    153.8ms |  153.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 | 是   | 产物变化 |    153.7ms |  153.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 | 是   | 产物变化 |    153.9ms |  153.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 | 是   | 产物变化 |    153.4ms |  153.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 | 是   | 产物变化 |    203.6ms |  203.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 | 是   | 产物变化 |    153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 | 是   | 产物变化 |    153.8ms |  153.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 | 是   | 产物变化 |    153.3ms |  153.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 | 是   | 产物变化 |    153.4ms |  153.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 | 是   | 产物变化 |    152.3ms |  152.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 | 是   | 产物变化 |    152.8ms |  152.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 | 是   | 产物变化 |    153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 | 是   | 产物变化 |    205.4ms |  205.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 | 是   | 产物变化 |    152.5ms |  152.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 | 是   | 产物变化 |    154.0ms |  154.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 | 是   | 产物变化 |    153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 | 是   | 产物变化 |    155.0ms |  155.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 | 是   | 产物变化 |    153.1ms |  153.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 | 是   | 产物变化 |    154.3ms |  154.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 | 是   | 产物变化 |    152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 | 是   | 产物变化 |    153.5ms |  153.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 | 是   | 产物变化 |    153.7ms |  153.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 | 是   | 产物变化 |    153.3ms |  153.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 | 是   | 产物变化 |    204.3ms |  204.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 | 是   | 产物变化 |    152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 | 是   | 产物变化 |    154.6ms |  154.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 | 是   | 产物变化 |    153.4ms |  153.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 | 是   | 产物变化 |    154.4ms |  154.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 | 是   | 产物变化 |    153.5ms |  153.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 | 是   | 产物变化 |    154.3ms |  154.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 | 是   | 产物变化 |    152.2ms |  152.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 | 是   | 产物变化 |    152.7ms |  152.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 | 是   | 产物变化 |   1382.4ms | 1382.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    359.1ms |  359.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    408.2ms |  408.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    517.6ms |  517.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    409.4ms |  409.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    408.3ms |  408.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    359.0ms |  359.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    408.7ms |  408.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    356.6ms |  356.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    356.1ms |  356.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    358.6ms |  358.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    409.3ms |  409.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    408.7ms |  408.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    356.1ms |  356.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    356.4ms |  356.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    356.8ms |  356.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    358.2ms |  358.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    357.6ms |  357.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    306.0ms |  306.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    356.7ms |  356.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    256.1ms |  256.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    204.1ms |  204.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    202.8ms |  202.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    205.1ms |  205.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    206.0ms |  206.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    204.6ms |  204.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    205.0ms |  205.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    204.3ms |  204.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    204.8ms |  204.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    204.0ms |  204.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    205.0ms |  205.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    254.4ms |  254.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    204.1ms |  204.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    152.5ms |  152.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    204.8ms |  204.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    254.7ms |  254.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    206.9ms |  206.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    205.6ms |  205.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 | 是   | 产物变化 |    203.8ms |  203.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 | 是   | 产物变化 |    204.6ms |  204.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 | 是   | 产物变化 |    203.3ms |  203.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 | 是   | 产物变化 |    203.8ms |  203.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 | 是   | 产物变化 |    204.4ms |  204.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 | 是   | 产物变化 |    204.8ms |  204.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 | 是   | 产物变化 |    204.0ms |  204.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 | 是   | 产物变化 |    203.6ms |  203.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 | 是   | 产物变化 |    204.9ms |  204.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 | 是   | 产物变化 |    204.9ms |  204.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 | 是   | 产物变化 |    152.1ms |  152.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 | 是   | 产物变化 |    205.5ms |  205.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 | 是   | 产物变化 |    256.5ms |  256.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 | 是   | 产物变化 |    204.1ms |  204.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 | 是   | 产物变化 |    151.6ms |  151.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 | 是   | 产物变化 |    203.9ms |  203.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 | 是   | 产物变化 |    203.9ms |  203.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 | 是   | 产物变化 |    205.5ms |  205.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 | 是   | 产物变化 |    205.6ms |  205.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 | 是   | 产物变化 |    204.6ms |  204.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 | 是   | 产物变化 |    306.8ms |  306.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 | 是   | 产物变化 |    359.9ms |  359.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 | 是   | 产物变化 |    359.5ms |  359.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 | 是   | 产物变化 |    306.9ms |  306.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 | 是   | 产物变化 |    412.9ms |  412.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 | 是   | 产物变化 |    253.3ms |  253.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 | 是   | 产物变化 |    360.2ms |  360.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 | 是   | 产物变化 |    375.9ms |  375.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 | 是   | 产物变化 |    308.0ms |  308.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 | 是   | 产物变化 |    306.0ms |  306.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 | 是   | 产物变化 |    357.6ms |  357.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 | 是   | 产物变化 |    306.3ms |  306.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 | 是   | 产物变化 |    361.4ms |  361.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 | 是   | 产物变化 |    358.1ms |  358.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 | 是   | 产物变化 |    304.3ms |  304.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 | 是   | 产物变化 |    307.0ms |  307.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 | 是   | 产物变化 |    363.9ms |  363.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 | 是   | 产物变化 |    306.4ms |  306.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 | 是   | 产物变化 |    306.2ms |  306.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 | 是   | 产物变化 |    304.4ms |  304.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 | 是   | 产物变化 |    306.7ms |  306.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 | 是   | 产物变化 |    356.6ms |  356.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 | 是   | 产物变化 |    356.9ms |  356.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 | 是   | 产物变化 |    305.5ms |  305.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 | 是   | 产物变化 |    307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 | 是   | 产物变化 |    307.5ms |  307.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 | 是   | 产物变化 |    305.5ms |  305.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 | 是   | 产物变化 |    307.4ms |  307.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 | 是   | 产物变化 |    253.1ms |  253.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 | 是   | 产物变化 |    304.1ms |  304.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 | 是   | 产物变化 |    358.5ms |  358.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 | 是   | 产物变化 |    308.5ms |  308.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 | 是   | 产物变化 |    311.5ms |  311.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 | 是   | 产物变化 |    305.2ms |  305.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 | 是   | 产物变化 |    306.6ms |  306.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 | 是   | 产物变化 |    304.6ms |  304.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 | 是   | 产物变化 |    306.2ms |  306.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 | 是   | 产物变化 |    306.1ms |  306.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 | 是   | 产物变化 |    305.9ms |  305.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 | 是   | 产物变化 |    357.4ms |  357.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 | 是   | 产物变化 |    305.7ms |  305.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 | 是   | 产物变化 |    308.4ms |  308.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 | 是   | 产物变化 |    306.6ms |  306.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 | 是   | 产物变化 |    257.3ms |  257.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 | 是   | 产物变化 |    305.9ms |  305.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 | 是   | 产物变化 |    256.1ms |  256.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 | 是   | 产物变化 |    308.3ms |  308.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 | 是   | 产物变化 |    307.4ms |  307.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 | 是   | 产物变化 |    307.3ms |  307.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 | 是   | 产物变化 |    204.6ms |  204.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 | 是   | 产物变化 |    304.1ms |  304.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 | 是   | 产物变化 |    306.9ms |  306.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 | 是   | 产物变化 |    307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 | 是   | 产物变化 |    306.2ms |  306.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 | 是   | 产物变化 |    254.5ms |  254.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 | 是   | 产物变化 |    306.7ms |  306.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 | 是   | 产物变化 |    306.9ms |  306.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 | 是   | 产物变化 |    255.0ms |  255.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 | 是   | 产物变化 |    204.1ms |  204.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 | 是   | 产物变化 |    306.4ms |  306.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    1 | 是   | 产物变化 |    306.0ms |  306.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    2 | 是   | 产物变化 |    305.5ms |  305.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    3 | 是   | 产物变化 |    205.5ms |  205.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    4 | 是   | 产物变化 |    305.1ms |  305.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    5 | 是   | 产物变化 |    304.4ms |  304.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    6 | 是   | 产物变化 |    253.7ms |  253.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    7 | 是   | 产物变化 |    256.3ms |  256.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    8 | 是   | 产物变化 |    307.0ms |  307.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |    9 | 是   | 产物变化 |    358.8ms |  358.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   10 | 是   | 产物变化 |    307.9ms |  307.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   11 | 是   | 产物变化 |    304.8ms |  304.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   12 | 是   | 产物变化 |    307.6ms |  307.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   13 | 是   | 产物变化 |    205.5ms |  205.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   14 | 是   | 产物变化 |    306.6ms |  306.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   15 | 是   | 产物变化 |    256.5ms |  256.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   16 | 是   | 产物变化 |    255.1ms |  255.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   17 | 是   | 产物变化 |    305.2ms |  305.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   18 | 是   | 产物变化 |    305.6ms |  305.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   19 | 是   | 产物变化 |    356.4ms |  356.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / 页面配置                                  |   20 | 是   | 产物变化 |    306.9ms |  306.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 | 是   | 产物变化 |    102.5ms |  102.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 | 是   | 产物变化 |    102.0ms |  102.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 | 是   | 产物变化 |    104.3ms |  104.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 | 是   | 产物变化 |     50.4ms |   50.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 | 是   | 产物变化 |     51.5ms |   51.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 | 是   | 产物变化 |     51.6ms |   51.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 | 是   | 产物变化 |     51.5ms |   51.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 | 是   | 产物变化 |    101.8ms |  101.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 | 是   | 产物变化 |    103.1ms |  103.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 | 是   | 产物变化 |     52.1ms |   52.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 | 是   | 产物变化 |    102.2ms |  102.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 | 是   | 产物变化 |     50.7ms |   50.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 | 是   | 产物变化 |     50.8ms |   50.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 | 是   | 产物变化 |     51.6ms |   51.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 | 是   | 产物变化 |    101.9ms |  101.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 | 是   | 产物变化 |     50.2ms |   50.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 | 是   | 产物变化 |    103.0ms |  103.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 | 是   | 产物变化 |    101.8ms |  101.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 | 是   | 产物变化 |     50.6ms |   50.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 | 是   | 产物变化 |    102.3ms |  102.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 | 是   | 产物变化 |    103.7ms |  103.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 | 是   | 产物变化 |    104.2ms |  104.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 | 是   | 产物变化 |     50.8ms |   50.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 | 是   | 产物变化 |     52.0ms |   52.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 | 是   | 产物变化 |     51.5ms |   51.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 | 是   | 产物变化 |     51.8ms |   51.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 | 是   | 产物变化 |     51.6ms |   51.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 | 是   | 产物变化 |     51.3ms |   51.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 | 是   | 产物变化 |     51.1ms |   51.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 | 是   | 产物变化 |     51.6ms |   51.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 | 是   | 产物变化 |     51.1ms |   51.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 | 是   | 产物变化 |     51.4ms |   51.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 | 是   | 产物变化 |     51.0ms |   51.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 | 是   | 产物变化 |     51.2ms |   51.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 | 是   | 产物变化 |     50.5ms |   50.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 | 是   | 产物变化 |     50.5ms |   50.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 | 是   | 产物变化 |     50.9ms |   50.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 | 是   | 产物变化 |     51.0ms |   51.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 | 是   | 产物变化 |     51.2ms |   51.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 | 是   | 产物变化 |     50.9ms |   50.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 | 是   | 产物变化 |     50.7ms |   50.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 | 是   | 产物变化 |     50.9ms |   50.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 | 是   | 产物变化 |     50.3ms |   50.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 | 是   | 产物变化 |     50.9ms |   50.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 | 是   | 产物变化 |    101.1ms |  101.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 | 是   | 产物变化 |    101.4ms |  101.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 | 是   | 产物变化 |    103.1ms |  103.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 | 是   | 产物变化 |     50.8ms |   50.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 | 是   | 产物变化 |     51.2ms |   51.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 | 是   | 产物变化 |     50.7ms |   50.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 | 是   | 产物变化 |     51.2ms |   51.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 | 是   | 产物变化 |     50.8ms |   50.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 | 是   | 产物变化 |     50.5ms |   50.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 | 是   | 产物变化 |     51.0ms |   51.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 | 是   | 产物变化 |     50.6ms |   50.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 | 是   | 产物变化 |    102.1ms |  102.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 | 是   | 产物变化 |     50.4ms |   50.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 | 是   | 产物变化 |     50.4ms |   50.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 | 是   | 产物变化 |     50.2ms |   50.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 | 是   | 产物变化 |     51.0ms |   51.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 | 是   | 产物变化 |     52.1ms |   52.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 | 是   | 产物变化 |     50.8ms |   50.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 | 是   | 产物变化 |     51.0ms |   51.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 | 是   | 产物变化 |     50.3ms |   50.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 | 是   | 产物变化 |     50.5ms |   50.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 | 是   | 产物变化 |     50.5ms |   50.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 | 是   | 产物变化 |     51.3ms |   51.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 | 是   | 产物变化 |     50.8ms |   50.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 | 是   | 产物变化 |     51.2ms |   51.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 | 是   | 产物变化 |     51.1ms |   51.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 | 是   | 产物变化 |     50.7ms |   50.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 | 是   | 产物变化 |     50.8ms |   50.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 | 是   | 产物变化 |     51.4ms |   51.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 | 是   | 产物变化 |    102.7ms |  102.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 | 是   | 产物变化 |    102.4ms |  102.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 | 是   | 产物变化 |     51.2ms |   51.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 | 是   | 产物变化 |     51.1ms |   51.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 | 是   | 产物变化 |    102.5ms |  102.5ms |        - |    - |    - |        - |          - |        |          |

说明：

- 所有项目统一使用 dev/watch 模式下“写入源文件到目标小程序产物更新”的墙钟耗时。
- 本报告不使用 weapp-vite 内部 profile；阶段列没有统一可比数据时显示为 -。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件；Mpx 拆分 template、script、style 和页面配置。
- @vue-mini/core 是原生小程序运行时对比项，没有独立编译/watch 链路，因此不纳入 HMR 排名。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
