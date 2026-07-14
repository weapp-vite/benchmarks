# HMR 基准报告

生成时间：2026-07-14T04:10:30.346Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：10.33.4
- 微信开发者工具 CLI：-
- Git commit：685851c2b7741651934192328126d3cd25d7fade
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22

## 一眼结论

- HMR 最快：weapp-vite 原生 / WXML 文件，平均 44.1ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 351.4ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR | 相对最快 | 重试样本 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | -------: | -------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   44.1ms |    1.00x |        0 |   44.1ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   45.5ms |    1.03x |        0 |   45.5ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |   46.1ms |    1.05x |        0 |   46.1ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |   50.6ms |    1.15x |        0 |   50.6ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   75.2ms |    1.71x |        0 |   75.2ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |   75.4ms |    1.71x |        0 |   75.4ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |   82.8ms |    1.88x |        0 |   82.8ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   82.9ms |    1.88x |        0 |   82.9ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |   83.7ms |    1.90x |        0 |   83.7ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   89.6ms |    2.03x |        0 |   89.6ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |   93.2ms |    2.11x |        0 |   93.2ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |   98.9ms |    2.24x |        0 |   98.9ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |  144.2ms |    3.27x |        0 |  144.2ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |  147.7ms |    3.35x |        0 |  147.7ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |  150.9ms |    3.42x |        0 |  150.9ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |  159.3ms |    3.61x |        0 |  159.3ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  201.1ms |    4.56x |        0 |  201.1ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  202.9ms |    4.60x |        0 |  202.9ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  207.4ms |    4.70x |        0 |  207.4ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  209.1ms |    4.74x |        0 |  209.1ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  278.8ms |    6.32x |        0 |  278.8ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  304.6ms |    6.91x |        0 |  304.6ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  312.5ms |    7.09x |        0 |  312.5ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  314.8ms |    7.14x |        0 |  314.8ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  351.4ms |    7.97x |        0 |  351.4ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                       |
| ----------------------------------------------------- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | ---------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |     98.9ms |   98.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |     82.8ms |   82.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |     75.4ms |   75.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |     83.7ms |   83.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |     93.2ms |   93.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |     82.9ms |   82.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |     75.2ms |   75.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |     89.6ms |   89.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite 原生 / JS 文件                             | 产物变化 |     50.6ms |   50.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`   |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |     44.1ms |   44.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml` |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |     46.1ms |   46.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss` |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |     45.5ms |   45.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json` |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    278.8ms |  278.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    207.4ms |  207.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    209.1ms |  209.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    351.4ms |  351.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    202.9ms |  202.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    201.1ms |  201.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    312.5ms |  312.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    314.8ms |  314.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / CSS 文件                                  | 产物变化 |    304.6ms |  304.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`  |
| mpx / template 区块                                   | 产物变化 |    150.9ms |  150.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / script 区块                                     | 产物变化 |    159.3ms |  159.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / style 区块                                      | 产物变化 |    147.7ms |  147.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / 页面配置                                        | 产物变化 |    144.2ms |  144.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |

## 原始明细

| 场景                                                  | 轮次 | 尝试次数 | 通过 | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | -------: | ---- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |    189.8ms |  189.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |     82.3ms |   82.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |     91.1ms |   91.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    129.7ms |  129.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |     90.9ms |   90.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |     93.1ms |   93.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |     91.3ms |   91.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |     90.5ms |   90.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |     92.8ms |   92.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |     92.2ms |   92.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |     87.0ms |   87.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |     88.6ms |   88.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |     99.7ms |   99.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |    102.8ms |  102.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    102.4ms |  102.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |     90.5ms |   90.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |     80.4ms |   80.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |     99.4ms |   99.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |    102.3ms |  102.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |     81.1ms |   81.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |     75.4ms |   75.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |     80.4ms |   80.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |     90.9ms |   90.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |     79.7ms |   79.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |     88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |     81.5ms |   81.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |     79.3ms |   79.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |     79.7ms |   79.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |     81.0ms |   81.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |     71.6ms |   71.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    105.4ms |  105.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |     82.0ms |   82.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |     79.6ms |   79.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |     83.4ms |   83.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |     89.1ms |   89.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |     80.4ms |   80.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |     80.1ms |   80.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |     89.6ms |   89.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |     81.7ms |   81.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |     76.2ms |   76.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |     57.1ms |   57.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |     70.0ms |   70.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |     78.4ms |   78.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |     67.9ms |   67.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |     76.4ms |   76.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |     78.7ms |   78.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |     67.5ms |   67.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |     68.8ms |   68.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |     86.2ms |   86.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |     67.8ms |   67.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |     67.1ms |   67.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |     65.5ms |   65.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    116.0ms |  116.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |     70.4ms |   70.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |     67.9ms |   67.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |     87.3ms |   87.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |     68.8ms |   68.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    113.4ms |  113.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |     67.9ms |   67.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |     65.4ms |   65.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 |        1 | 是   | 产物变化 |     76.5ms |   76.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 |        1 | 是   | 产物变化 |    114.6ms |  114.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 |        1 | 是   | 产物变化 |     83.2ms |   83.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 |        1 | 是   | 产物变化 |     94.2ms |   94.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 |        1 | 是   | 产物变化 |     78.9ms |   78.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 |        1 | 是   | 产物变化 |     90.3ms |   90.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 |        1 | 是   | 产物变化 |     90.5ms |   90.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 |        1 | 是   | 产物变化 |     71.9ms |   71.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 |        1 | 是   | 产物变化 |     80.0ms |   80.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 |        1 | 是   | 产物变化 |     80.2ms |   80.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 |        1 | 是   | 产物变化 |     78.4ms |   78.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 |        1 | 是   | 产物变化 |     81.9ms |   81.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 |        1 | 是   | 产物变化 |     91.3ms |   91.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 |        1 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 |        1 | 是   | 产物变化 |     76.7ms |   76.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 |        1 | 是   | 产物变化 |     78.3ms |   78.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 |        1 | 是   | 产物变化 |     80.4ms |   80.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 |        1 | 是   | 产物变化 |     78.2ms |   78.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 |        1 | 是   | 产物变化 |     80.4ms |   80.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 |        1 | 是   | 产物变化 |     79.1ms |   79.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 |        1 | 是   | 产物变化 |    104.2ms |  104.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 |        1 | 是   | 产物变化 |     92.2ms |   92.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 |        1 | 是   | 产物变化 |     85.6ms |   85.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 |        1 | 是   | 产物变化 |     93.0ms |   93.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 |        1 | 是   | 产物变化 |     92.1ms |   92.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 |        1 | 是   | 产物变化 |     92.4ms |   92.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 |        1 | 是   | 产物变化 |     92.8ms |   92.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 |        1 | 是   | 产物变化 |     89.4ms |   89.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 |        1 | 是   | 产物变化 |     90.8ms |   90.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 |        1 | 是   | 产物变化 |    101.2ms |  101.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 |        1 | 是   | 产物变化 |    113.0ms |  113.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 |        1 | 是   | 产物变化 |     91.8ms |   91.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 |        1 | 是   | 产物变化 |     92.0ms |   92.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 |        1 | 是   | 产物变化 |    103.3ms |  103.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 |        1 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 |        1 | 是   | 产物变化 |     92.2ms |   92.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 |        1 | 是   | 产物变化 |     93.9ms |   93.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 |        1 | 是   | 产物变化 |     88.8ms |   88.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 |        1 | 是   | 产物变化 |     76.7ms |   76.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 |        1 | 是   | 产物变化 |     89.6ms |   89.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 |        1 | 是   | 产物变化 |     81.0ms |   81.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 |        1 | 是   | 产物变化 |     82.0ms |   82.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 |        1 | 是   | 产物变化 |     93.5ms |   93.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 |        1 | 是   | 产物变化 |     81.3ms |   81.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 |        1 | 是   | 产物变化 |     79.5ms |   79.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 |        1 | 是   | 产物变化 |     80.3ms |   80.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 |        1 | 是   | 产物变化 |     91.3ms |   91.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 |        1 | 是   | 产物变化 |     99.9ms |   99.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 |        1 | 是   | 产物变化 |     80.0ms |   80.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 |        1 | 是   | 产物变化 |     88.4ms |   88.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 |        1 | 是   | 产物变化 |     80.6ms |   80.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 |        1 | 是   | 产物变化 |     89.6ms |   89.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 |        1 | 是   | 产物变化 |     80.3ms |   80.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 |        1 | 是   | 产物变化 |     79.6ms |   79.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 |        1 | 是   | 产物变化 |     78.7ms |   78.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 |        1 | 是   | 产物变化 |     70.1ms |   70.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 |        1 | 是   | 产物变化 |     81.1ms |   81.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 |        1 | 是   | 产物变化 |     81.3ms |   81.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 |        1 | 是   | 产物变化 |     80.2ms |   80.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 |        1 | 是   | 产物变化 |     80.0ms |   80.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 |        1 | 是   | 产物变化 |     65.9ms |   65.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 |        1 | 是   | 产物变化 |     81.2ms |   81.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 |        1 | 是   | 产物变化 |     58.6ms |   58.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 |        1 | 是   | 产物变化 |     70.2ms |   70.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 |        1 | 是   | 产物变化 |     89.7ms |   89.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 |        1 | 是   | 产物变化 |     77.4ms |   77.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 |        1 | 是   | 产物变化 |     81.2ms |   81.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 |        1 | 是   | 产物变化 |     65.5ms |   65.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 |        1 | 是   | 产物变化 |     69.6ms |   69.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 |        1 | 是   | 产物变化 |     70.1ms |   70.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 |        1 | 是   | 产物变化 |     80.5ms |   80.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 |        1 | 是   | 产物变化 |     78.8ms |   78.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 |        1 | 是   | 产物变化 |     78.2ms |   78.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 |        1 | 是   | 产物变化 |     76.5ms |   76.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 |        1 | 是   | 产物变化 |     81.1ms |   81.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 |        1 | 是   | 产物变化 |     78.8ms |   78.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 |        1 | 是   | 产物变化 |     65.3ms |   65.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 |        1 | 是   | 产物变化 |     76.9ms |   76.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 |        1 | 是   | 产物变化 |     70.1ms |   70.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 |        1 | 是   | 产物变化 |     89.1ms |   89.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 |        1 | 是   | 产物变化 |     80.8ms |   80.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 |        1 | 是   | 产物变化 |     87.1ms |   87.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 |        1 | 是   | 产物变化 |     79.3ms |   79.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 |        1 | 是   | 产物变化 |    101.8ms |  101.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 |        1 | 是   | 产物变化 |     78.3ms |   78.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 |        1 | 是   | 产物变化 |     93.2ms |   93.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 |        1 | 是   | 产物变化 |     91.4ms |   91.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 |        1 | 是   | 产物变化 |     80.7ms |   80.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 |        1 | 是   | 产物变化 |    104.7ms |  104.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 |        1 | 是   | 产物变化 |     81.3ms |   81.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 |        1 | 是   | 产物变化 |    110.3ms |  110.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 |        1 | 是   | 产物变化 |     81.3ms |   81.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 |        1 | 是   | 产物变化 |     93.1ms |   93.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 |        1 | 是   | 产物变化 |     92.1ms |   92.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 |        1 | 是   | 产物变化 |    112.9ms |  112.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 |        1 | 是   | 产物变化 |     92.9ms |   92.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 |        1 | 是   | 产物变化 |     77.2ms |   77.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 |        1 | 是   | 产物变化 |     89.9ms |   89.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 |        1 | 是   | 产物变化 |     80.1ms |   80.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 |        1 | 是   | 产物变化 |     82.3ms |   82.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 |        1 | 是   | 产物变化 |     56.7ms |   56.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 |        1 | 是   | 产物变化 |     58.3ms |   58.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 |        1 | 是   | 产物变化 |     46.0ms |   46.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 |        1 | 是   | 产物变化 |     43.9ms |   43.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 |        1 | 是   | 产物变化 |     46.5ms |   46.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 |        1 | 是   | 产物变化 |     44.3ms |   44.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 |        1 | 是   | 产物变化 |     46.8ms |   46.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 |        1 | 是   | 产物变化 |     47.4ms |   47.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 |        1 | 是   | 产物变化 |     45.8ms |   45.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 |        1 | 是   | 产物变化 |     79.4ms |   79.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 |        1 | 是   | 产物变化 |     46.5ms |   46.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 |        1 | 是   | 产物变化 |     46.0ms |   46.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 |        1 | 是   | 产物变化 |     46.1ms |   46.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 |        1 | 是   | 产物变化 |     48.1ms |   48.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 |        1 | 是   | 产物变化 |     45.4ms |   45.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 |        1 | 是   | 产物变化 |     93.9ms |   93.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 |        1 | 是   | 产物变化 |     46.1ms |   46.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 |        1 | 是   | 产物变化 |     45.6ms |   45.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 |        1 | 是   | 产物变化 |     32.8ms |   32.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 |        1 | 是   | 产物变化 |     46.4ms |   46.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 |        1 | 是   | 产物变化 |     37.3ms |   37.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 |        1 | 是   | 产物变化 |     44.1ms |   44.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 |        1 | 是   | 产物变化 |     34.4ms |   34.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 |        1 | 是   | 产物变化 |     46.5ms |   46.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 |        1 | 是   | 产物变化 |     47.1ms |   47.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 |        1 | 是   | 产物变化 |     43.4ms |   43.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 |        1 | 是   | 产物变化 |     37.0ms |   37.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 |        1 | 是   | 产物变化 |     46.0ms |   46.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 |        1 | 是   | 产物变化 |     43.1ms |   43.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 |        1 | 是   | 产物变化 |     44.0ms |   44.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 |        1 | 是   | 产物变化 |     45.6ms |   45.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 |        1 | 是   | 产物变化 |     35.7ms |   35.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 |        1 | 是   | 产物变化 |     44.7ms |   44.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 |        1 | 是   | 产物变化 |     45.7ms |   45.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 |        1 | 是   | 产物变化 |     33.2ms |   33.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 |        1 | 是   | 产物变化 |     34.3ms |   34.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 |        1 | 是   | 产物变化 |     35.7ms |   35.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 |        1 | 是   | 产物变化 |     81.3ms |   81.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 |        1 | 是   | 产物变化 |     56.8ms |   56.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 |        1 | 是   | 产物变化 |     45.9ms |   45.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 |        1 | 是   | 产物变化 |     42.9ms |   42.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 |        1 | 是   | 产物变化 |     34.2ms |   34.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 |        1 | 是   | 产物变化 |     78.1ms |   78.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 |        1 | 是   | 产物变化 |     81.3ms |   81.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 |        1 | 是   | 产物变化 |     37.4ms |   37.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 |        1 | 是   | 产物变化 |     45.3ms |   45.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 |        1 | 是   | 产物变化 |     46.4ms |   46.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 |        1 | 是   | 产物变化 |     48.1ms |   48.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 |        1 | 是   | 产物变化 |     45.2ms |   45.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 |        1 | 是   | 产物变化 |     44.4ms |   44.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 |        1 | 是   | 产物变化 |     44.9ms |   44.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 |        1 | 是   | 产物变化 |     35.2ms |   35.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 |        1 | 是   | 产物变化 |     44.8ms |   44.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 |        1 | 是   | 产物变化 |     48.6ms |   48.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 |        1 | 是   | 产物变化 |     46.8ms |   46.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 |        1 | 是   | 产物变化 |     36.7ms |   36.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 |        1 | 是   | 产物变化 |     37.0ms |   37.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 |        1 | 是   | 产物变化 |     32.1ms |   32.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 |        1 | 是   | 产物变化 |     45.9ms |   45.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 |        1 | 是   | 产物变化 |     46.7ms |   46.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 |        1 | 是   | 产物变化 |     46.2ms |   46.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 |        1 | 是   | 产物变化 |     46.0ms |   46.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 |        1 | 是   | 产物变化 |     46.5ms |   46.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 |        1 | 是   | 产物变化 |     46.3ms |   46.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 |        1 | 是   | 产物变化 |     48.0ms |   48.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 |        1 | 是   | 产物变化 |     43.1ms |   43.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 |        1 | 是   | 产物变化 |     34.5ms |   34.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 |        1 | 是   | 产物变化 |     35.7ms |   35.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 |        1 | 是   | 产物变化 |     46.5ms |   46.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 |        1 | 是   | 产物变化 |     46.3ms |   46.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 |        1 | 是   | 产物变化 |     67.5ms |   67.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 |        1 | 是   | 产物变化 |     43.6ms |   43.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 |        1 | 是   | 产物变化 |     44.6ms |   44.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 |        1 | 是   | 产物变化 |     47.2ms |   47.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 |        1 | 是   | 产物变化 |     57.0ms |   57.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 |        1 | 是   | 产物变化 |     35.1ms |   35.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 |        1 | 是   | 产物变化 |     45.7ms |   45.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 |        1 | 是   | 产物变化 |     43.2ms |   43.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 |        1 | 是   | 产物变化 |     43.2ms |   43.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 |        1 | 是   | 产物变化 |     44.5ms |   44.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |   1104.0ms | 1104.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    290.6ms |  290.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |    290.0ms |  290.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    209.3ms |  209.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |    216.1ms |  216.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    182.9ms |  182.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |    186.9ms |  186.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |    196.6ms |  196.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |    196.8ms |  196.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |    274.1ms |  274.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |    175.1ms |  175.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    268.2ms |  268.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |    266.1ms |  266.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |    289.6ms |  289.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    294.5ms |  294.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |    207.4ms |  207.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |    205.4ms |  205.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    263.5ms |  263.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |    181.3ms |  181.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |    277.7ms |  277.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |    266.8ms |  266.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |    182.3ms |  182.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |    185.9ms |  185.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |    178.9ms |  178.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |    193.5ms |  193.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |    195.6ms |  195.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |    170.2ms |  170.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |    264.1ms |  264.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |    171.2ms |  171.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |    265.6ms |  265.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    207.9ms |  207.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |    290.0ms |  290.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |    180.4ms |  180.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    176.0ms |  176.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |    177.7ms |  177.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |    183.6ms |  183.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    195.9ms |  195.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |    199.3ms |  199.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |    281.4ms |  281.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |    182.0ms |  182.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |    269.7ms |  269.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |    194.5ms |  194.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |    195.4ms |  195.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |    181.8ms |  181.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |    186.7ms |  186.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |    175.3ms |  175.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |    167.0ms |  167.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |    183.4ms |  183.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    277.7ms |  277.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |    183.2ms |  183.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |    181.3ms |  181.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    172.5ms |  172.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    279.7ms |  279.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |    279.9ms |  279.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |    181.8ms |  181.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |    264.3ms |  264.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |    255.3ms |  255.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    175.8ms |  175.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |    186.5ms |  186.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |    190.8ms |  190.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |   1184.2ms | 1184.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    376.5ms |  376.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    284.9ms |  284.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    300.7ms |  300.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    312.8ms |  312.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    293.6ms |  293.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    293.1ms |  293.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    310.6ms |  310.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    325.6ms |  325.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    304.7ms |  304.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    305.2ms |  305.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    296.6ms |  296.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    304.2ms |  304.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    300.3ms |  300.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    298.4ms |  298.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    339.9ms |  339.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    307.8ms |  307.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    294.9ms |  294.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    280.3ms |  280.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    314.4ms |  314.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    198.8ms |  198.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    194.1ms |  194.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    196.4ms |  196.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    204.4ms |  204.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    213.7ms |  213.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    196.2ms |  196.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    204.5ms |  204.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    230.2ms |  230.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    184.0ms |  184.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    202.8ms |  202.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    195.4ms |  195.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    219.9ms |  219.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    195.8ms |  195.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    201.9ms |  201.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    196.1ms |  196.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    202.8ms |  202.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    195.6ms |  195.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    207.3ms |  207.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    199.6ms |  199.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    218.7ms |  218.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 |        1 | 是   | 产物变化 |    220.3ms |  220.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 |        1 | 是   | 产物变化 |    170.7ms |  170.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 |        1 | 是   | 产物变化 |    207.9ms |  207.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 |        1 | 是   | 产物变化 |    200.7ms |  200.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 |        1 | 是   | 产物变化 |    199.9ms |  199.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 |        1 | 是   | 产物变化 |    203.9ms |  203.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 |        1 | 是   | 产物变化 |    197.2ms |  197.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 |        1 | 是   | 产物变化 |    198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 |        1 | 是   | 产物变化 |    215.4ms |  215.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 |        1 | 是   | 产物变化 |    191.4ms |  191.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 |        1 | 是   | 产物变化 |    205.7ms |  205.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 |        1 | 是   | 产物变化 |    201.0ms |  201.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 |        1 | 是   | 产物变化 |    199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 |        1 | 是   | 产物变化 |    214.7ms |  214.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 |        1 | 是   | 产物变化 |    194.9ms |  194.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 |        1 | 是   | 产物变化 |    199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 |        1 | 是   | 产物变化 |    196.6ms |  196.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 |        1 | 是   | 产物变化 |    206.3ms |  206.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 |        1 | 是   | 产物变化 |    207.8ms |  207.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 |        1 | 是   | 产物变化 |    191.4ms |  191.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |    343.2ms |  343.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    314.9ms |  314.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    334.2ms |  334.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    317.9ms |  317.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    289.4ms |  289.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    312.9ms |  312.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    317.1ms |  317.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    325.7ms |  325.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    348.9ms |  348.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    314.3ms |  314.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    304.7ms |  304.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    312.5ms |  312.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    308.2ms |  308.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    316.3ms |  316.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    290.4ms |  290.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    323.2ms |  323.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    305.0ms |  305.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    302.7ms |  302.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    259.6ms |  259.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    330.7ms |  330.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    300.8ms |  300.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    293.0ms |  293.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    320.1ms |  320.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    326.0ms |  326.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    341.2ms |  341.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    306.2ms |  306.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    303.5ms |  303.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    315.7ms |  315.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    357.1ms |  357.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    298.7ms |  298.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    349.6ms |  349.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    290.0ms |  290.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    311.9ms |  311.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    306.7ms |  306.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    329.0ms |  329.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    301.0ms |  301.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    296.6ms |  296.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    308.0ms |  308.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 |        1 | 是   | 产物变化 |    300.5ms |  300.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 |        1 | 是   | 产物变化 |    300.5ms |  300.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 |        1 | 是   | 产物变化 |    351.5ms |  351.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 |        1 | 是   | 产物变化 |    261.4ms |  261.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 |        1 | 是   | 产物变化 |    308.9ms |  308.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 |        1 | 是   | 产物变化 |    290.0ms |  290.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 |        1 | 是   | 产物变化 |    296.2ms |  296.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 |        1 | 是   | 产物变化 |    306.4ms |  306.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 |        1 | 是   | 产物变化 |    362.7ms |  362.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 |        1 | 是   | 产物变化 |    316.4ms |  316.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 |        1 | 是   | 产物变化 |    300.8ms |  300.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 |        1 | 是   | 产物变化 |    296.1ms |  296.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 |        1 | 是   | 产物变化 |    296.2ms |  296.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 |        1 | 是   | 产物变化 |    309.3ms |  309.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 |        1 | 是   | 产物变化 |    311.2ms |  311.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 |        1 | 是   | 产物变化 |    296.5ms |  296.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 |        1 | 是   | 产物变化 |    308.7ms |  308.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 |        1 | 是   | 产物变化 |    240.4ms |  240.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 |        1 | 是   | 产物变化 |    299.1ms |  299.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 |        1 | 是   | 产物变化 |    339.6ms |  339.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 |        1 | 是   | 产物变化 |    230.8ms |  230.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 |        1 | 是   | 产物变化 |    161.5ms |  161.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 |        1 | 是   | 产物变化 |    149.5ms |  149.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 |        1 | 是   | 产物变化 |    134.9ms |  134.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 |        1 | 是   | 产物变化 |    160.0ms |  160.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 |        1 | 是   | 产物变化 |    139.4ms |  139.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 |        1 | 是   | 产物变化 |    139.3ms |  139.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 |        1 | 是   | 产物变化 |    139.2ms |  139.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 |        1 | 是   | 产物变化 |    136.1ms |  136.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 |        1 | 是   | 产物变化 |    169.2ms |  169.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 |        1 | 是   | 产物变化 |    124.1ms |  124.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 |        1 | 是   | 产物变化 |    122.3ms |  122.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 |        1 | 是   | 产物变化 |    146.9ms |  146.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 |        1 | 是   | 产物变化 |    170.1ms |  170.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 |        1 | 是   | 产物变化 |    148.7ms |  148.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 |        1 | 是   | 产物变化 |    135.8ms |  135.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 |        1 | 是   | 产物变化 |    162.2ms |  162.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 |        1 | 是   | 产物变化 |    148.0ms |  148.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 |        1 | 是   | 产物变化 |    152.0ms |  152.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 |        1 | 是   | 产物变化 |    148.7ms |  148.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 |        1 | 是   | 产物变化 |    148.8ms |  148.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 |        1 | 是   | 产物变化 |    124.9ms |  124.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 |        1 | 是   | 产物变化 |    158.9ms |  158.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 |        1 | 是   | 产物变化 |    170.5ms |  170.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 |        1 | 是   | 产物变化 |    148.1ms |  148.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 |        1 | 是   | 产物变化 |    162.0ms |  162.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 |        1 | 是   | 产物变化 |    170.0ms |  170.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 |        1 | 是   | 产物变化 |    140.1ms |  140.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 |        1 | 是   | 产物变化 |    176.4ms |  176.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 |        1 | 是   | 产物变化 |    174.9ms |  174.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 |        1 | 是   | 产物变化 |    201.6ms |  201.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 |        1 | 是   | 产物变化 |    153.7ms |  153.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 |        1 | 是   | 产物变化 |    116.4ms |  116.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 |        1 | 是   | 产物变化 |    192.8ms |  192.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 |        1 | 是   | 产物变化 |    139.6ms |  139.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 |        1 | 是   | 产物变化 |    171.0ms |  171.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 |        1 | 是   | 产物变化 |    167.1ms |  167.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 |        1 | 是   | 产物变化 |    147.5ms |  147.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 |        1 | 是   | 产物变化 |    160.1ms |  160.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 |        1 | 是   | 产物变化 |    160.9ms |  160.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 |        1 | 是   | 产物变化 |    161.9ms |  161.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 |        1 | 是   | 产物变化 |    118.8ms |  118.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 |        1 | 是   | 产物变化 |    126.8ms |  126.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 |        1 | 是   | 产物变化 |    153.5ms |  153.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 |        1 | 是   | 产物变化 |    174.0ms |  174.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 |        1 | 是   | 产物变化 |    150.4ms |  150.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 |        1 | 是   | 产物变化 |    128.4ms |  128.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 |        1 | 是   | 产物变化 |    159.0ms |  159.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 |        1 | 是   | 产物变化 |    173.4ms |  173.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 |        1 | 是   | 产物变化 |    135.3ms |  135.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 |        1 | 是   | 产物变化 |    133.5ms |  133.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 |        1 | 是   | 产物变化 |    165.8ms |  165.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 |        1 | 是   | 产物变化 |    161.9ms |  161.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 |        1 | 是   | 产物变化 |    120.5ms |  120.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 |        1 | 是   | 产物变化 |    117.1ms |  117.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 |        1 | 是   | 产物变化 |    148.5ms |  148.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 |        1 | 是   | 产物变化 |    164.5ms |  164.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 |        1 | 是   | 产物变化 |    148.5ms |  148.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 |        1 | 是   | 产物变化 |    129.5ms |  129.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 |        1 | 是   | 产物变化 |    183.0ms |  183.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 |        1 | 是   | 产物变化 |    150.2ms |  150.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 |        1 | 是   | 产物变化 |    167.5ms |  167.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 |        1 | 是   | 产物变化 |    116.4ms |  116.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 |        1 | 是   | 产物变化 |    162.3ms |  162.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 |        1 | 是   | 产物变化 |    163.2ms |  163.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 |        1 | 是   | 产物变化 |    159.5ms |  159.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 |        1 | 是   | 产物变化 |    117.8ms |  117.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 |        1 | 是   | 产物变化 |    141.7ms |  141.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 |        1 | 是   | 产物变化 |    161.2ms |  161.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 |        1 | 是   | 产物变化 |    161.5ms |  161.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 |        1 | 是   | 产物变化 |    162.2ms |  162.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 |        1 | 是   | 产物变化 |    126.4ms |  126.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 |        1 | 是   | 产物变化 |    151.7ms |  151.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 |        1 | 是   | 产物变化 |    126.2ms |  126.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 |        1 | 是   | 产物变化 |    128.5ms |  128.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 |        1 | 是   | 产物变化 |    118.1ms |  118.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 |        1 | 是   | 产物变化 |    153.5ms |  153.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 |        1 | 是   | 产物变化 |    124.8ms |  124.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 |        1 | 是   | 产物变化 |    164.5ms |  164.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 |        1 | 是   | 产物变化 |    125.9ms |  125.9ms |        - |    - |    - |        - |          - |        |          |

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
