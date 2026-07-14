# HMR 基准报告

生成时间：2026-07-14T07:34:26.614Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：11.13.0
- 微信开发者工具 CLI：-
- Git commit：026fe258b63b15a9b9d51c4635348ffeebc3dc41
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22

## 一眼结论

- HMR 最快：mpx / 页面配置，平均 311.5ms。
- HMR 最慢：uni-app vite vue3 / Vue SFC script 区块，平均 1827.8ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR | 相对最快 | 重试样本 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | -------: | -------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |  311.5ms |    1.00x |        0 |  311.5ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |  387.9ms |    1.25x |        0 |  387.9ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  396.6ms |    1.27x |        2 |  396.6ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |  415.3ms |    1.33x |        0 |  415.3ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  430.9ms |    1.38x |        1 |  430.9ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |  484.5ms |    1.56x |        3 |  484.5ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  492.8ms |    1.58x |        0 |  492.8ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  507.1ms |    1.63x |        2 |  507.1ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |  521.5ms |    1.67x |        1 |  521.5ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |  526.5ms |    1.69x |        2 |  526.5ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  531.6ms |    1.71x |        1 |  531.6ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |  544.4ms |    1.75x |        1 |  544.4ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |  576.3ms |    1.85x |        0 |  576.3ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  667.7ms |    2.14x |        1 |  667.7ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  722.1ms |    2.32x |        0 |  722.1ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  756.0ms |    2.43x |        1 |  756.0ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  811.8ms |    2.61x |        0 |  811.8ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  905.0ms |    2.91x |        0 |  905.0ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  922.2ms |    2.96x |        0 |  922.2ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  944.7ms |    3.03x |        0 |  944.7ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  979.7ms |    3.15x |        0 |  979.7ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 | 1145.2ms |    3.68x |        0 | 1145.2ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 | 1362.6ms |    4.37x |        0 | 1362.6ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 | 1794.6ms |    5.76x |        1 | 1794.6ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 | 1827.8ms |    5.87x |        0 | 1827.8ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                       |
| ----------------------------------------------------- | -------- | ---------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | ---------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |    521.5ms |  521.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |   1794.6ms | 1794.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |    484.5ms |  484.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |    526.5ms |  526.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |    492.8ms |  492.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |    507.1ms |  507.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |    531.6ms |  531.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |    667.7ms |  667.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite 原生 / JS 文件                             | 产物变化 |    544.4ms |  544.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`   |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |    396.6ms |  396.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml` |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |    430.9ms |  430.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss` |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |    756.0ms |  756.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json` |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |   1827.8ms | 1827.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |   1145.2ms | 1145.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    811.8ms |  811.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC script 区块                       | 产物变化 |   1362.6ms | 1362.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    722.1ms |  722.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    922.2ms |  922.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    905.0ms |  905.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    979.7ms |  979.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / CSS 文件                                  | 产物变化 |    944.7ms |  944.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`  |
| mpx / template 区块                                   | 产物变化 |    576.3ms |  576.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / script 区块                                     | 产物变化 |    415.3ms |  415.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / style 区块                                      | 产物变化 |    387.9ms |  387.9ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / 页面配置                                        | 产物变化 |    311.5ms |  311.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |

## 原始明细

| 场景                                                  | 轮次 | 尝试次数 | 通过 | 采集方式 | HMR 总耗时 |  外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | -------: | ---- | -------- | ---------: | --------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |    408.7ms |   408.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    263.0ms |   263.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 |        2 | 是   | 产物变化 |   1603.7ms |  1603.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    319.0ms |   319.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |    272.3ms |   272.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    276.8ms |   276.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |   1074.9ms |  1074.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |    618.0ms |   618.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |    154.6ms |   154.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |    185.0ms |   185.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |    310.9ms |   310.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    186.3ms |   186.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |    839.6ms |   839.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |   1393.0ms |  1393.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    273.5ms |   273.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |    177.5ms |   177.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |    252.6ms |   252.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    305.1ms |   305.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |    666.6ms |   666.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |    848.4ms |   848.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |    935.9ms |   935.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |   2279.7ms |  2279.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |    733.7ms |   733.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |   1763.5ms |  1763.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |   3160.3ms |  3160.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |  15591.3ms | 15591.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |   3030.2ms |  3030.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |   1086.5ms |  1086.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |    497.6ms |   497.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |    273.6ms |   273.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    329.9ms |   329.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |   1616.9ms |  1616.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |    561.9ms |   561.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    385.8ms |   385.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |    379.9ms |   379.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |    308.4ms |   308.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    142.5ms |   142.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |   1555.3ms |  1555.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |    774.0ms |   774.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 |        2 | 是   | 产物变化 |    484.1ms |   484.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |    358.0ms |   358.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |    270.3ms |   270.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |    322.0ms |   322.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |    248.3ms |   248.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |    353.7ms |   353.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |    945.2ms |   945.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 |        2 | 是   | 产物变化 |   1454.6ms |  1454.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 |        2 | 是   | 产物变化 |    305.9ms |   305.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    199.9ms |   199.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |    174.7ms |   174.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |   1169.6ms |  1169.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    578.1ms |   578.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    217.0ms |   217.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |    187.8ms |   187.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |    219.6ms |   219.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |    129.9ms |   129.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |    187.0ms |   187.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    635.3ms |   635.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 |        2 | 是   | 产物变化 |    420.5ms |   420.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |   1312.2ms |  1312.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 |        2 | 是   | 产物变化 |    733.2ms |   733.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 |        1 | 是   | 产物变化 |    458.8ms |   458.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 |        1 | 是   | 产物变化 |    215.5ms |   215.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 |        1 | 是   | 产物变化 |    240.0ms |   240.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 |        1 | 是   | 产物变化 |   1395.5ms |  1395.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 |        1 | 是   | 产物变化 |    724.1ms |   724.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 |        1 | 是   | 产物变化 |    202.2ms |   202.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 |        1 | 是   | 产物变化 |    241.4ms |   241.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 |        1 | 是   | 产物变化 |    132.0ms |   132.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 |        1 | 是   | 产物变化 |    926.9ms |   926.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 |        1 | 是   | 产物变化 |    450.3ms |   450.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 |        1 | 是   | 产物变化 |    975.0ms |   975.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 |        1 | 是   | 产物变化 |    336.5ms |   336.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 |        1 | 是   | 产物变化 |    163.9ms |   163.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 |        1 | 是   | 产物变化 |    295.8ms |   295.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 |        1 | 是   | 产物变化 |    240.5ms |   240.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 |        1 | 是   | 产物变化 |    507.1ms |   507.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 |        2 | 是   | 产物变化 |   1449.7ms |  1449.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 |        1 | 是   | 产物变化 |    576.3ms |   576.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 |        1 | 是   | 产物变化 |    265.4ms |   265.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 |        1 | 是   | 产物变化 |    433.2ms |   433.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 |        1 | 是   | 产物变化 |    295.4ms |   295.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 |        1 | 是   | 产物变化 |    153.3ms |   153.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 |        1 | 是   | 产物变化 |    386.8ms |   386.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 |        1 | 是   | 产物变化 |    197.6ms |   197.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 |        1 | 是   | 产物变化 |   1132.5ms |  1132.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 |        1 | 是   | 产物变化 |    750.9ms |   750.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 |        1 | 是   | 产物变化 |    207.0ms |   207.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 |        1 | 是   | 产物变化 |    286.6ms |   286.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 |        1 | 是   | 产物变化 |    431.2ms |   431.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 |        1 | 是   | 产物变化 |    263.9ms |   263.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 |        1 | 是   | 产物变化 |   1871.8ms |  1871.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 |        1 | 是   | 产物变化 |    349.4ms |   349.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 |        1 | 是   | 产物变化 |    350.5ms |   350.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 |        1 | 是   | 产物变化 |    165.5ms |   165.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 |        1 | 是   | 产物变化 |    277.9ms |   277.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 |        1 | 是   | 产物变化 |    420.0ms |   420.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 |        1 | 是   | 产物变化 |    966.0ms |   966.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 |        1 | 是   | 产物变化 |    719.2ms |   719.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 |        1 | 是   | 产物变化 |    197.7ms |   197.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 |        1 | 是   | 产物变化 |    294.9ms |   294.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 |        1 | 是   | 产物变化 |    274.7ms |   274.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 |        1 | 是   | 产物变化 |   1576.8ms |  1576.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 |        1 | 是   | 产物变化 |    711.5ms |   711.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 |        1 | 是   | 产物变化 |    313.9ms |   313.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 |        1 | 是   | 产物变化 |    199.5ms |   199.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 |        1 | 是   | 产物变化 |    233.7ms |   233.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 |        1 | 是   | 产物变化 |   1723.8ms |  1723.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 |        2 | 是   | 产物变化 |    649.3ms |   649.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 |        2 | 是   | 产物变化 |    295.2ms |   295.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 |        1 | 是   | 产物变化 |    877.3ms |   877.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 |        1 | 是   | 产物变化 |    211.7ms |   211.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 |        1 | 是   | 产物变化 |    698.2ms |   698.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 |        1 | 是   | 产物变化 |    639.1ms |   639.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 |        1 | 是   | 产物变化 |    207.9ms |   207.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 |        1 | 是   | 产物变化 |    244.2ms |   244.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 |        1 | 是   | 产物变化 |    175.3ms |   175.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 |        1 | 是   | 产物变化 |    219.0ms |   219.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 |        1 | 是   | 产物变化 |    174.6ms |   174.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 |        1 | 是   | 产物变化 |    420.7ms |   420.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 |        2 | 是   | 产物变化 |    556.2ms |   556.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 |        1 | 是   | 产物变化 |   1204.4ms |  1204.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 |        1 | 是   | 产物变化 |    221.2ms |   221.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 |        1 | 是   | 产物变化 |    351.6ms |   351.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 |        1 | 是   | 产物变化 |    332.0ms |   332.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 |        1 | 是   | 产物变化 |    927.9ms |   927.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 |        1 | 是   | 产物变化 |    895.6ms |   895.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 |        1 | 是   | 产物变化 |    154.8ms |   154.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 |        1 | 是   | 产物变化 |    175.9ms |   175.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 |        1 | 是   | 产物变化 |    198.2ms |   198.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 |        1 | 是   | 产物变化 |    244.7ms |   244.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 |        1 | 是   | 产物变化 |   1392.0ms |  1392.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 |        1 | 是   | 产物变化 |    725.5ms |   725.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 |        1 | 是   | 产物变化 |    146.1ms |   146.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 |        1 | 是   | 产物变化 |    250.9ms |   250.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 |        1 | 是   | 产物变化 |    374.5ms |   374.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 |        1 | 是   | 产物变化 |    197.4ms |   197.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 |        1 | 是   | 产物变化 |   1330.8ms |  1330.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 |        1 | 是   | 产物变化 |    763.8ms |   763.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 |        1 | 是   | 产物变化 |    187.5ms |   187.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 |        1 | 是   | 产物变化 |    438.9ms |   438.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 |        1 | 是   | 产物变化 |    301.2ms |   301.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 |        1 | 是   | 产物变化 |    929.0ms |   929.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 |        1 | 是   | 产物变化 |    792.2ms |   792.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 |        1 | 是   | 产物变化 |    288.1ms |   288.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 |        1 | 是   | 产物变化 |    398.3ms |   398.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 |        1 | 是   | 产物变化 |    188.3ms |   188.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 |        1 | 是   | 产物变化 |    308.9ms |   308.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 |        1 | 是   | 产物变化 |   1655.9ms |  1655.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 |        2 | 是   | 产物变化 |    693.1ms |   693.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 |        1 | 是   | 产物变化 |    491.1ms |   491.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 |        1 | 是   | 产物变化 |    406.9ms |   406.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 |        1 | 是   | 产物变化 |    219.1ms |   219.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 |        1 | 是   | 产物变化 |    376.4ms |   376.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 |        1 | 是   | 产物变化 |    320.0ms |   320.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 |        1 | 是   | 产物变化 |    470.7ms |   470.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 |        1 | 是   | 产物变化 |   1376.9ms |  1376.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 |        1 | 是   | 产物变化 |   2593.8ms |  2593.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 |        1 | 是   | 产物变化 |    710.3ms |   710.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 |        1 | 是   | 产物变化 |    395.2ms |   395.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 |        1 | 是   | 产物变化 |    420.2ms |   420.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 |        1 | 是   | 产物变化 |   1156.9ms |  1156.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 |        1 | 是   | 产物变化 |   1481.6ms |  1481.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 |        1 | 是   | 产物变化 |    219.8ms |   219.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 |        1 | 是   | 产物变化 |    209.0ms |   209.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 |        1 | 是   | 产物变化 |    218.3ms |   218.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 |        1 | 是   | 产物变化 |    306.8ms |   306.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 |        2 | 是   | 产物变化 |    535.5ms |   535.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 |        1 | 是   | 产物变化 |    337.6ms |   337.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 |        1 | 是   | 产物变化 |    109.1ms |   109.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 |        1 | 是   | 产物变化 |    285.8ms |   285.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 |        1 | 是   | 产物变化 |    273.1ms |   273.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 |        1 | 是   | 产物变化 |   1173.1ms |  1173.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 |        1 | 是   | 产物变化 |    794.7ms |   794.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 |        1 | 是   | 产物变化 |    281.8ms |   281.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 |        1 | 是   | 产物变化 |    210.1ms |   210.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 |        1 | 是   | 产物变化 |    318.1ms |   318.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 |        1 | 是   | 产物变化 |    280.2ms |   280.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 |        1 | 是   | 产物变化 |   2163.9ms |  2163.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 |        1 | 是   | 产物变化 |    112.2ms |   112.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 |        1 | 是   | 产物变化 |    318.5ms |   318.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 |        1 | 是   | 产物变化 |    195.9ms |   195.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 |        1 | 是   | 产物变化 |    133.6ms |   133.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 |        1 | 是   | 产物变化 |    953.5ms |   953.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 |        2 | 是   | 产物变化 |    609.3ms |   609.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 |        2 | 是   | 产物变化 |    402.1ms |   402.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 |        1 | 是   | 产物变化 |     83.6ms |    83.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 |        1 | 是   | 产物变化 |    209.8ms |   209.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 |        1 | 是   | 产物变化 |    927.4ms |   927.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 |        1 | 是   | 产物变化 |    987.9ms |   987.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 |        1 | 是   | 产物变化 |    171.5ms |   171.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 |        1 | 是   | 产物变化 |    147.1ms |   147.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 |        1 | 是   | 产物变化 |    109.9ms |   109.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 |        1 | 是   | 产物变化 |    175.5ms |   175.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 |        1 | 是   | 产物变化 |    333.5ms |   333.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 |        1 | 是   | 产物变化 |    891.0ms |   891.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 |        1 | 是   | 产物变化 |    476.7ms |   476.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 |        1 | 是   | 产物变化 |    421.6ms |   421.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 |        1 | 是   | 产物变化 |    207.5ms |   207.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 |        1 | 是   | 产物变化 |    176.7ms |   176.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 |        1 | 是   | 产物变化 |    147.2ms |   147.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 |        1 | 是   | 产物变化 |    337.1ms |   337.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 |        1 | 是   | 产物变化 |   1117.7ms |  1117.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 |        1 | 是   | 产物变化 |    929.0ms |   929.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 |        1 | 是   | 产物变化 |    217.9ms |   217.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 |        1 | 是   | 产物变化 |    154.6ms |   154.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 |        1 | 是   | 产物变化 |    241.5ms |   241.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 |        1 | 是   | 产物变化 |    139.2ms |   139.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 |        1 | 是   | 产物变化 |    222.8ms |   222.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 |        1 | 是   | 产物变化 |    278.6ms |   278.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 |        2 | 是   | 产物变化 |    876.4ms |   876.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 |        1 | 是   | 产物变化 |    892.3ms |   892.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 |        1 | 是   | 产物变化 |    263.2ms |   263.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 |        1 | 是   | 产物变化 |    149.0ms |   149.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 |        1 | 是   | 产物变化 |    250.2ms |   250.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 |        1 | 是   | 产物变化 |    228.6ms |   228.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 |        1 | 是   | 产物变化 |    261.1ms |   261.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 |        1 | 是   | 产物变化 |   1444.8ms |  1444.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 |        1 | 是   | 产物变化 |    303.3ms |   303.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 |        1 | 是   | 产物变化 |    162.8ms |   162.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 |        1 | 是   | 产物变化 |    769.5ms |   769.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 |        1 | 是   | 产物变化 |    325.7ms |   325.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 |        1 | 是   | 产物变化 |    244.6ms |   244.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 |        1 | 是   | 产物变化 |   1409.8ms |  1409.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 |        1 | 是   | 产物变化 |   1346.8ms |  1346.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 |        1 | 是   | 产物变化 |    259.1ms |   259.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 |        1 | 是   | 产物变化 |    147.0ms |   147.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 |        1 | 是   | 产物变化 |    370.9ms |   370.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 |        1 | 是   | 产物变化 |   1157.7ms |  1157.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 |        1 | 是   | 产物变化 |    955.7ms |   955.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 |        2 | 是   | 产物变化 |    864.2ms |   864.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 |        1 | 是   | 产物变化 |   2982.4ms |  2982.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 |        1 | 是   | 产物变化 |    387.7ms |   387.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 |        1 | 是   | 产物变化 |    835.7ms |   835.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 |        1 | 是   | 产物变化 |    402.3ms |   402.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 |        1 | 是   | 产物变化 |    351.6ms |   351.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 |        1 | 是   | 产物变化 |    564.2ms |   564.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 |        1 | 是   | 产物变化 |    300.3ms |   300.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 |        1 | 是   | 产物变化 |    862.0ms |   862.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 |        1 | 是   | 产物变化 |    582.8ms |   582.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |   1513.8ms |  1513.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |   3844.1ms |  3844.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |   3497.3ms |  3497.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    330.1ms |   330.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |   2254.1ms |  2254.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    879.7ms |   879.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |   5199.5ms |  5199.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |   1926.4ms |  1926.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |   1088.2ms |  1088.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |   4860.2ms |  4860.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |   1588.1ms |  1588.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |   1256.1ms |  1256.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |    447.4ms |   447.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |    329.1ms |   329.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    367.5ms |   367.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |   2788.3ms |  2788.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |    244.6ms |   244.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    456.7ms |   456.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |   1309.4ms |  1309.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |   2375.8ms |  2375.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |    491.6ms |   491.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |    267.7ms |   267.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |   3809.5ms |  3809.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |    428.8ms |   428.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |    291.0ms |   291.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |   1419.8ms |  1419.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |   1440.5ms |  1440.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |   2495.7ms |  2495.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |    754.8ms |   754.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |    273.3ms |   273.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    552.1ms |   552.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |    246.5ms |   246.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |   1058.3ms |  1058.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |   2290.4ms |  2290.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |   1765.5ms |  1765.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |   1078.0ms |  1078.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    420.2ms |   420.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |    444.3ms |   444.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |   2678.7ms |  2678.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |    697.5ms |   697.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |    363.0ms |   363.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |   2372.1ms |  2372.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |    263.2ms |   263.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |    254.9ms |   254.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |   2848.2ms |  2848.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |    388.5ms |   388.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |    240.4ms |   240.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |    229.6ms |   229.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |   1215.7ms |  1215.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |    887.7ms |   887.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |    224.4ms |   224.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    218.9ms |   218.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    209.1ms |   209.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |    243.0ms |   243.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |   2405.4ms |  2405.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |    353.5ms |   353.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |    241.3ms |   241.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    236.2ms |   236.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |   2367.7ms |  2367.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |    672.4ms |   672.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |   1289.1ms |  1289.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |   4296.2ms |  4296.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |   1700.3ms |  1700.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |   1102.3ms |  1102.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    393.4ms |   393.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    453.5ms |   453.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |   2270.5ms |  2270.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    416.4ms |   416.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    463.8ms |   463.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |   3901.8ms |  3901.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |   3204.7ms |  3204.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    427.4ms |   427.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    409.3ms |   409.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |   2732.2ms |  2732.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    419.3ms |   419.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    328.0ms |   328.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    426.6ms |   426.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |   2049.6ms |  2049.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    327.3ms |   327.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    640.3ms |   640.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    175.2ms |   175.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    201.1ms |   201.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    220.9ms |   220.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |   2375.2ms |  2375.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    223.0ms |   223.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    271.5ms |   271.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    212.2ms |   212.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |   2634.9ms |  2634.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    240.8ms |   240.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    253.5ms |   253.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    285.2ms |   285.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |   2415.3ms |  2415.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    341.0ms |   341.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    228.3ms |   228.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |   1438.5ms |  1438.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    770.3ms |   770.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    234.0ms |   234.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    230.5ms |   230.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    232.7ms |   232.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |   1457.9ms |  1457.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 |        1 | 是   | 产物变化 |    382.6ms |   382.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 |        1 | 是   | 产物变化 |   2450.8ms |  2450.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 |        1 | 是   | 产物变化 |    294.9ms |   294.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 |        1 | 是   | 产物变化 |    255.1ms |   255.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 |        1 | 是   | 产物变化 |    247.5ms |   247.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 |        1 | 是   | 产物变化 |   2609.9ms |  2609.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 |        1 | 是   | 产物变化 |    511.0ms |   511.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 |        1 | 是   | 产物变化 |    255.3ms |   255.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 |        1 | 是   | 产物变化 |   2211.4ms |  2211.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 |        1 | 是   | 产物变化 |    547.0ms |   547.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 |        1 | 是   | 产物变化 |    290.2ms |   290.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 |        1 | 是   | 产物变化 |    260.3ms |   260.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 |        1 | 是   | 产物变化 |   2272.0ms |  2272.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 |        1 | 是   | 产物变化 |    290.9ms |   290.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 |        1 | 是   | 产物变化 |    444.3ms |   444.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 |        1 | 是   | 产物变化 |    248.1ms |   248.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 |        1 | 是   | 产物变化 |   2629.0ms |  2629.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 |        1 | 是   | 产物变化 |    250.2ms |   250.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 |        1 | 是   | 产物变化 |    274.8ms |   274.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 |        1 | 是   | 产物变化 |   1718.5ms |  1718.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |    275.4ms |   275.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    251.4ms |   251.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |   2413.9ms |  2413.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    395.0ms |   395.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    266.0ms |   266.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |   2193.3ms |  2193.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    303.0ms |   303.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    365.6ms |   365.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |   1710.7ms |  1710.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    631.2ms |   631.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    477.7ms |   477.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    384.3ms |   384.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    275.8ms |   275.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |   2092.6ms |  2092.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    380.6ms |   380.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    414.7ms |   414.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |   2176.9ms |  2176.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    258.8ms |   258.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    402.0ms |   402.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |   2431.7ms |  2431.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |   2780.5ms |  2780.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    371.1ms |   371.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    411.4ms |   411.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |   2209.7ms |  2209.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    267.6ms |   267.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    425.8ms |   425.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |   2522.1ms |  2522.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    309.2ms |   309.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    369.3ms |   369.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |   1837.5ms |  1837.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    544.9ms |   544.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    254.1ms |   254.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    282.7ms |   282.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    343.7ms |   343.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |   2367.9ms |  2367.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    652.9ms |   652.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    411.3ms |   411.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |   2437.3ms |  2437.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    431.3ms |   431.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    362.7ms |   362.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 |        1 | 是   | 产物变化 |    491.7ms |   491.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 |        1 | 是   | 产物变化 |    357.5ms |   357.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 |        1 | 是   | 产物变化 |   1361.6ms |  1361.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 |        1 | 是   | 产物变化 |    643.4ms |   643.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 |        1 | 是   | 产物变化 |    376.5ms |   376.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 |        1 | 是   | 产物变化 |    246.9ms |   246.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 |        1 | 是   | 产物变化 |   2438.2ms |  2438.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 |        1 | 是   | 产物变化 |    366.2ms |   366.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 |        1 | 是   | 产物变化 |    365.6ms |   365.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 |        1 | 是   | 产物变化 |   2495.7ms |  2495.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 |        1 | 是   | 产物变化 |    231.4ms |   231.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 |        1 | 是   | 产物变化 |    344.5ms |   344.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 |        1 | 是   | 产物变化 |   2436.4ms |  2436.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 |        1 | 是   | 产物变化 |    413.3ms |   413.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 |        1 | 是   | 产物变化 |    366.5ms |   366.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 |        1 | 是   | 产物变化 |   2709.7ms |  2709.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 |        1 | 是   | 产物变化 |    366.4ms |   366.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 |        1 | 是   | 产物变化 |    405.3ms |   405.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 |        1 | 是   | 产物变化 |   2152.2ms |  2152.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 |        1 | 是   | 产物变化 |    324.1ms |   324.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 |        1 | 是   | 产物变化 |   2670.1ms |  2670.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 |        1 | 是   | 产物变化 |    431.1ms |   431.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 |        1 | 是   | 产物变化 |    185.5ms |   185.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 |        1 | 是   | 产物变化 |    208.3ms |   208.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 |        1 | 是   | 产物变化 |    933.5ms |   933.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 |        1 | 是   | 产物变化 |    763.2ms |   763.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 |        1 | 是   | 产物变化 |    294.3ms |   294.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 |        1 | 是   | 产物变化 |    238.4ms |   238.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 |        1 | 是   | 产物变化 |    269.8ms |   269.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 |        1 | 是   | 产物变化 |    254.6ms |   254.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 |        1 | 是   | 产物变化 |   1365.6ms |  1365.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 |        1 | 是   | 产物变化 |    628.4ms |   628.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 |        1 | 是   | 产物变化 |    196.0ms |   196.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 |        1 | 是   | 产物变化 |    271.2ms |   271.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 |        1 | 是   | 产物变化 |    190.7ms |   190.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 |        1 | 是   | 产物变化 |    258.7ms |   258.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 |        1 | 是   | 产物变化 |   1128.0ms |  1128.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 |        1 | 是   | 产物变化 |    774.1ms |   774.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 |        1 | 是   | 产物变化 |    258.5ms |   258.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 |        1 | 是   | 产物变化 |    206.8ms |   206.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 |        1 | 是   | 产物变化 |    181.7ms |   181.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 |        1 | 是   | 产物变化 |    181.1ms |   181.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 |        1 | 是   | 产物变化 |    206.9ms |   206.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 |        1 | 是   | 产物变化 |   1278.0ms |  1278.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 |        1 | 是   | 产物变化 |    635.8ms |   635.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 |        1 | 是   | 产物变化 |    205.1ms |   205.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 |        1 | 是   | 产物变化 |    259.6ms |   259.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 |        1 | 是   | 产物变化 |    215.9ms |   215.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 |        1 | 是   | 产物变化 |    196.0ms |   196.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 |        1 | 是   | 产物变化 |    152.4ms |   152.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 |        1 | 是   | 产物变化 |    913.8ms |   913.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 |        1 | 是   | 产物变化 |    810.2ms |   810.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 |        1 | 是   | 产物变化 |    184.4ms |   184.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 |        1 | 是   | 产物变化 |    146.5ms |   146.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 |        1 | 是   | 产物变化 |    198.2ms |   198.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 |        1 | 是   | 产物变化 |    153.5ms |   153.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 |        1 | 是   | 产物变化 |    326.0ms |   326.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 |        1 | 是   | 产物变化 |    175.4ms |   175.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 |        1 | 是   | 产物变化 |    763.2ms |   763.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 |        1 | 是   | 产物变化 |   1123.1ms |  1123.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 |        1 | 是   | 产物变化 |    301.2ms |   301.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 |        1 | 是   | 产物变化 |    230.3ms |   230.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 |        1 | 是   | 产物变化 |    240.7ms |   240.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 |        1 | 是   | 产物变化 |    194.5ms |   194.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 |        1 | 是   | 产物变化 |    871.1ms |   871.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 |        1 | 是   | 产物变化 |    659.8ms |   659.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 |        1 | 是   | 产物变化 |    186.2ms |   186.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 |        1 | 是   | 产物变化 |    173.2ms |   173.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 |        1 | 是   | 产物变化 |    181.3ms |   181.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 |        1 | 是   | 产物变化 |    174.1ms |   174.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 |        1 | 是   | 产物变化 |    156.3ms |   156.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 |        1 | 是   | 产物变化 |   1212.4ms |  1212.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 |        1 | 是   | 产物变化 |    547.3ms |   547.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 |        1 | 是   | 产物变化 |    160.8ms |   160.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 |        1 | 是   | 产物变化 |    271.6ms |   271.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 |        1 | 是   | 产物变化 |    150.2ms |   150.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 |        1 | 是   | 产物变化 |    252.6ms |   252.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 |        1 | 是   | 产物变化 |    125.9ms |   125.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 |        1 | 是   | 产物变化 |   1090.2ms |  1090.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 |        1 | 是   | 产物变化 |    577.8ms |   577.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 |        1 | 是   | 产物变化 |    170.5ms |   170.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 |        1 | 是   | 产物变化 |    242.3ms |   242.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 |        1 | 是   | 产物变化 |    298.9ms |   298.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 |        1 | 是   | 产物变化 |    127.3ms |   127.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 |        1 | 是   | 产物变化 |    845.2ms |   845.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 |        1 | 是   | 产物变化 |    770.9ms |   770.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 |        1 | 是   | 产物变化 |    142.4ms |   142.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 |        1 | 是   | 产物变化 |    263.7ms |   263.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 |        1 | 是   | 产物变化 |    182.8ms |   182.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 |        1 | 是   | 产物变化 |    160.9ms |   160.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 |        1 | 是   | 产物变化 |    153.6ms |   153.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 |        1 | 是   | 产物变化 |    873.3ms |   873.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 |        1 | 是   | 产物变化 |    710.3ms |   710.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 |        1 | 是   | 产物变化 |    148.8ms |   148.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 |        1 | 是   | 产物变化 |    236.3ms |   236.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 |        1 | 是   | 产物变化 |    195.8ms |   195.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 |        1 | 是   | 产物变化 |    220.6ms |   220.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 |        1 | 是   | 产物变化 |    140.9ms |   140.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 |        1 | 是   | 产物变化 |    193.9ms |   193.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 |        1 | 是   | 产物变化 |    150.8ms |   150.8ms |        - |    - |    - |        - |          - |        |          |

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
