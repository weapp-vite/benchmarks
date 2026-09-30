# HMR 基准报告

生成时间：2026-09-30T17:43:39.077Z
采样次数：20 次，报告中的平均值由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.0 (26A428)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.8.1
- 微信开发者工具 CLI：-
- Git commit：3ef40d10f83678e866e8bc639c0abae29a394a1d
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 一眼结论

- HMR 最快：weapp-vite 原生 / JS 文件，平均 107.6ms。
- HMR 最慢：uni-app x / Vue SFC script 区块，平均 356.4ms。
- 所有 HMR 场景样本完整且无重试，均已纳入排名。
- 场景覆盖：weapp-vite + wevu、weapp-vite + wevu performance、weapp-vite 原生、uni-app vite vue3、uni-app x、taro vue3、mpx。
- 读数口径：所有框架统一使用源文件写入到目标小程序产物更新的墙钟耗时，内部阶段列没有统一可比数据时显示为 -。
- @vue-mini/core 没有独立编译/watch 链路，只保留 runtime 对比，不纳入 HMR 排名。

## 场景速览

| 排名 | 场景                                                  | 项目                          | 类型     | 采集方式 | 平均 HMR |  中位数 |     P95 |   最大值 | 相对最快 | 重试样本 | 含重试总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | ----------------------------------------------------- | ----------------------------- | -------- | -------- | -------: | ------: | ------: | -------: | -------: | -------: | -----------: | -------: | -------: | ---: | ---: | -------: | ---------: | ---------: | -----------: |
|    1 | weapp-vite 原生 / JS 文件                             | weapp-vite 原生               | 原生文件 | 产物变化 |  107.6ms | 109.3ms | 131.8ms |  132.7ms |    1.00x |        0 |      107.6ms |  107.6ms |        - |    - |    - |        - |          - |          - |            - |
|    2 | mpx / style 区块                                      | mpx                           | Mpx SFC  | 产物变化 |  129.1ms | 126.4ms | 155.2ms |  166.6ms |    1.20x |        0 |      129.1ms |  129.1ms |        - |    - |    - |        - |          - |          - |            - |
|    3 | mpx / 页面配置                                        | mpx                           | Mpx SFC  | 产物变化 |  129.8ms | 125.9ms | 175.9ms |  206.8ms |    1.21x |        0 |      129.8ms |  129.8ms |        - |    - |    - |        - |          - |          - |            - |
|    4 | mpx / script 区块                                     | mpx                           | Mpx SFC  | 产物变化 |  142.8ms | 145.5ms | 166.8ms |  189.5ms |    1.33x |        0 |      142.8ms |  142.8ms |        - |    - |    - |        - |          - |          - |            - |
|    5 | uni-app vite vue3 / Vue SFC template 区块             | uni-app vite vue3             | Vue SFC  | 产物变化 |  144.8ms | 121.9ms | 211.3ms |  220.7ms |    1.35x |        0 |      144.8ms |  144.8ms |        - |    - |    - |        - |          - |          - |            - |
|    6 | uni-app vite vue3 / Vue SFC style 区块                | uni-app vite vue3             | Vue SFC  | 产物变化 |  154.3ms | 131.0ms | 220.8ms |  222.2ms |    1.43x |        0 |      154.3ms |  154.3ms |        - |    - |    - |        - |          - |          - |            - |
|    7 | mpx / template 区块                                   | mpx                           | Mpx SFC  | 产物变化 |  157.0ms | 154.4ms | 198.4ms |  207.7ms |    1.46x |        0 |      157.0ms |  157.0ms |        - |    - |    - |        - |          - |          - |            - |
|    8 | weapp-vite 原生 / WXML 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  159.1ms | 153.9ms | 198.5ms |  221.7ms |    1.48x |        0 |      159.1ms |  159.1ms |        - |    - |    - |        - |          - |          - |            - |
|    9 | uni-app vite vue3 / Vue SFC script 区块               | uni-app vite vue3             | Vue SFC  | 产物变化 |  191.0ms | 133.0ms | 244.7ms | 1130.0ms |    1.78x |        0 |      191.0ms |  191.0ms |        - |    - |    - |        - |          - |          - |            - |
|   10 | weapp-vite + wevu performance / Vue SFC script 区块   | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  197.5ms | 197.6ms | 211.0ms |  212.2ms |    1.84x |        0 |      197.5ms |  197.5ms |        - |    - |    - |        - |          - |          - |            - |
|   11 | weapp-vite + wevu / Vue SFC script 区块               | weapp-vite + wevu             | Vue SFC  | 产物变化 |  197.6ms | 198.0ms | 210.6ms |  221.5ms |    1.84x |        0 |      197.6ms |  197.6ms |        - |    - |    - |        - |          - |          - |            - |
|   12 | uni-app x / Vue SFC template 区块                     | uni-app x                     | Vue SFC  | 产物变化 |  199.8ms | 198.5ms | 211.2ms |  213.8ms |    1.86x |        0 |      199.8ms |  199.8ms |        - |    - |    - |        - |          - |          - |            - |
|   13 | uni-app x / Vue SFC style 区块                        | uni-app x                     | Vue SFC  | 产物变化 |  201.3ms | 200.1ms | 213.2ms |  233.0ms |    1.87x |        0 |      201.3ms |  201.3ms |        - |    - |    - |        - |          - |          - |            - |
|   14 | weapp-vite + wevu / Vue SFC template 区块             | weapp-vite + wevu             | Vue SFC  | 产物变化 |  201.4ms | 199.4ms | 218.0ms |  266.1ms |    1.87x |        0 |      201.4ms |  201.4ms |        - |    - |    - |        - |          - |          - |            - |
|   15 | weapp-vite + wevu performance / Vue SFC style 区块    | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  205.2ms | 199.7ms | 211.7ms |  299.0ms |    1.91x |        0 |      205.2ms |  205.2ms |        - |    - |    - |        - |          - |          - |            - |
|   16 | weapp-vite + wevu performance / Vue SFC 页面配置      | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  205.4ms | 199.0ms | 214.7ms |  311.6ms |    1.91x |        0 |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |          - |            - |
|   17 | weapp-vite + wevu / Vue SFC 页面配置                  | weapp-vite + wevu             | Vue SFC  | 产物变化 |  205.4ms | 198.2ms | 208.9ms |  333.6ms |    1.91x |        0 |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |          - |            - |
|   18 | weapp-vite + wevu / Vue SFC style 区块                | weapp-vite + wevu             | Vue SFC  | 产物变化 |  205.4ms | 199.0ms | 218.1ms |  285.1ms |    1.91x |        0 |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |          - |            - |
|   19 | weapp-vite + wevu performance / Vue SFC template 区块 | weapp-vite + wevu performance | Vue SFC  | 产物变化 |  206.3ms | 205.3ms | 222.3ms |  265.7ms |    1.92x |        0 |      206.3ms |  206.3ms |        - |    - |    - |        - |          - |          - |            - |
|   20 | weapp-vite 原生 / WXSS 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  274.5ms | 288.1ms | 332.0ms |  344.3ms |    2.55x |        0 |      274.5ms |  274.5ms |        - |    - |    - |        - |          - |          - |            - |
|   21 | taro vue3 / CSS 文件                                  | taro vue3                     | Vue SFC  | 产物变化 |  281.5ms | 294.7ms | 308.2ms |  317.4ms |    2.62x |        0 |      281.5ms |  281.5ms |        - |    - |    - |        - |          - |          - |            - |
|   22 | taro vue3 / Vue SFC template 区块                     | taro vue3                     | Vue SFC  | 产物变化 |  294.7ms | 301.4ms | 319.2ms |  344.0ms |    2.74x |        0 |      294.7ms |  294.7ms |        - |    - |    - |        - |          - |          - |            - |
|   23 | taro vue3 / Vue SFC script 区块                       | taro vue3                     | Vue SFC  | 产物变化 |  304.1ms | 306.1ms | 334.0ms |  343.7ms |    2.83x |        0 |      304.1ms |  304.1ms |        - |    - |    - |        - |          - |          - |            - |
|   24 | weapp-vite 原生 / JSON 文件                           | weapp-vite 原生               | 原生文件 | 产物变化 |  322.4ms | 324.9ms | 372.5ms |  373.2ms |    3.00x |        0 |      322.4ms |  322.4ms |        - |    - |    - |        - |          - |          - |            - |
|   25 | uni-app x / Vue SFC script 区块                       | uni-app x                     | Vue SFC  | 产物变化 |  356.4ms | 299.4ms | 417.0ms | 1233.0ms |    3.31x |        0 |      356.4ms |  356.4ms |        - |    - |    - |        - |          - |          - |            - |

## 阶段均值

| 场景                                                  | 采集方式 | HMR 总耗时 | 含重试总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                       |
| ----------------------------------------------------- | -------- | ---------: | -----------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: | ---------------------------- |
| weapp-vite + wevu / Vue SFC script 区块               | 产物变化 |    197.6ms |      197.6ms |  197.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC template 区块             | 产物变化 |    201.4ms |      201.4ms |  201.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC style 区块                | 产物变化 |    205.4ms |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu / Vue SFC 页面配置                  | 产物变化 |    205.4ms |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC script 区块   | 产物变化 |    197.5ms |      197.5ms |  197.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC template 区块 | 产物变化 |    206.3ms |      206.3ms |  206.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC style 区块    | 产物变化 |    205.2ms |      205.2ms |  205.2ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite + wevu performance / Vue SFC 页面配置      | 产物变化 |    205.4ms |      205.4ms |  205.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| weapp-vite 原生 / JS 文件                             | 产物变化 |    107.6ms |      107.6ms |  107.6ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.js`   |
| weapp-vite 原生 / WXML 文件                           | 产物变化 |    159.1ms |      159.1ms |  159.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxml` |
| weapp-vite 原生 / WXSS 文件                           | 产物变化 |    274.5ms |      274.5ms |  274.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.wxss` |
| weapp-vite 原生 / JSON 文件                           | 产物变化 |    322.4ms |      322.4ms |  322.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.json` |
| uni-app vite vue3 / Vue SFC script 区块               | 产物变化 |    191.0ms |      191.0ms |  191.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC template 区块             | 产物变化 |    144.8ms |      144.8ms |  144.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app vite vue3 / Vue SFC style 区块                | 产物变化 |    154.3ms |      154.3ms |  154.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC script 区块                       | 产物变化 |    356.4ms |      356.4ms |  356.4ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC template 区块                     | 产物变化 |    199.8ms |      199.8ms |  199.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| uni-app x / Vue SFC style 区块                        | 产物变化 |    201.3ms |      201.3ms |  201.3ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC script 区块                       | 产物变化 |    304.1ms |      304.1ms |  304.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / Vue SFC template 区块                     | 产物变化 |    294.7ms |      294.7ms |  294.7ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.vue`  |
| taro vue3 / CSS 文件                                  | 产物变化 |    281.5ms |      281.5ms |  281.5ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index/index.css`  |
| mpx / template 区块                                   | 产物变化 |    157.0ms |      157.0ms |  157.0ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / script 区块                                     | 产物变化 |    142.8ms |      142.8ms |  142.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / style 区块                                      | 产物变化 |    129.1ms |      129.1ms |  129.1ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |
| mpx / 页面配置                                        | 产物变化 |    129.8ms |      129.8ms |  129.8ms |        - |    - |    - |        - |          - |      - |        - | `src/pages/index.mpx`        |

## 原始明细

| 场景                                                  | 轮次 | 尝试次数 | 通过 | 采集方式 | HMR 总耗时 | 含重试总耗时 | 外部等待 | 构建核心 | 转换 | 写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| ----------------------------------------------------- | ---: | -------: | ---- | -------- | ---------: | -----------: | -------: | -------: | ---: | ---: | -------: | ---------: | -----: | -------: |
| weapp-vite + wevu / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |    153.4ms |      153.4ms |  153.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    210.5ms |      210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |    185.6ms |      185.6ms |  185.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    200.8ms |      200.8ms |  200.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |    210.6ms |      210.6ms |  210.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    187.4ms |      187.4ms |  187.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |    210.1ms |      210.1ms |  210.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |    188.4ms |      188.4ms |  188.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |    221.5ms |      221.5ms |  221.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |    189.5ms |      189.5ms |  189.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |    186.3ms |      186.3ms |  186.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    208.1ms |      208.1ms |  208.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |    195.6ms |      195.6ms |  195.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |    197.4ms |      197.4ms |  197.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    198.2ms |      198.2ms |  198.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |    198.1ms |      198.1ms |  198.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |    205.9ms |      205.9ms |  205.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    209.3ms |      209.3ms |  209.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |    197.8ms |      197.8ms |  197.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |    197.0ms |      197.0ms |  197.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |    207.6ms |      207.6ms |  207.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |    198.2ms |      198.2ms |  198.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |    199.8ms |      199.8ms |  199.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |    266.1ms |      266.1ms |  266.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |    144.7ms |      144.7ms |  144.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |    199.2ms |      199.2ms |  199.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |    185.7ms |      185.7ms |  185.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |    218.0ms |      218.0ms |  218.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |    199.3ms |      199.3ms |  199.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |    196.1ms |      196.1ms |  196.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    186.5ms |      186.5ms |  186.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |    209.3ms |      209.3ms |  209.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |    195.2ms |      195.2ms |  195.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    205.5ms |      205.5ms |  205.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |    197.1ms |      197.1ms |  197.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |    209.5ms |      209.5ms |  209.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    196.5ms |      196.5ms |  196.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |    199.5ms |      199.5ms |  199.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |    208.6ms |      208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |    206.2ms |      206.2ms |  206.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |    206.1ms |      206.1ms |  206.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |    285.1ms |      285.1ms |  285.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |    218.1ms |      218.1ms |  218.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |    187.3ms |      187.3ms |  187.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |    197.3ms |      197.3ms |  197.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |    208.6ms |      208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |    196.5ms |      196.5ms |  196.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |    200.1ms |      200.1ms |  200.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    207.8ms |      207.8ms |  207.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |    195.9ms |      195.9ms |  195.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |    198.3ms |      198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    198.6ms |      198.6ms |  198.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    206.4ms |      206.4ms |  206.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |    195.0ms |      195.0ms |  195.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |    196.9ms |      196.9ms |  196.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |    208.4ms |      208.4ms |  208.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |    196.3ms |      196.3ms |  196.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    210.3ms |      210.3ms |  210.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |    196.0ms |      196.0ms |  196.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |    199.3ms |      199.3ms |  199.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    1 |        1 | 是   | 产物变化 |    207.0ms |      207.0ms |  207.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    2 |        1 | 是   | 产物变化 |    197.0ms |      197.0ms |  197.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    3 |        1 | 是   | 产物变化 |    333.6ms |      333.6ms |  333.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    4 |        1 | 是   | 产物变化 |    175.9ms |      175.9ms |  175.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    5 |        1 | 是   | 产物变化 |    198.4ms |      198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    6 |        1 | 是   | 产物变化 |    199.4ms |      199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    7 |        1 | 是   | 产物变化 |    197.4ms |      197.4ms |  197.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    8 |        1 | 是   | 产物变化 |    198.4ms |      198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |    9 |        1 | 是   | 产物变化 |    197.8ms |      197.8ms |  197.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   10 |        1 | 是   | 产物变化 |    208.0ms |      208.0ms |  208.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   11 |        1 | 是   | 产物变化 |    198.1ms |      198.1ms |  198.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   12 |        1 | 是   | 产物变化 |    197.0ms |      197.0ms |  197.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   13 |        1 | 是   | 产物变化 |    208.7ms |      208.7ms |  208.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   14 |        1 | 是   | 产物变化 |    188.5ms |      188.5ms |  188.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   15 |        1 | 是   | 产物变化 |    208.4ms |      208.4ms |  208.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   16 |        1 | 是   | 产物变化 |    185.6ms |      185.6ms |  185.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   17 |        1 | 是   | 产物变化 |    208.9ms |      208.9ms |  208.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   18 |        1 | 是   | 产物变化 |    195.4ms |      195.4ms |  195.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   19 |        1 | 是   | 产物变化 |    207.8ms |      207.8ms |  207.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu / Vue SFC 页面配置                  |   20 |        1 | 是   | 产物变化 |    196.1ms |      196.1ms |  196.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    1 |        1 | 是   | 产物变化 |    152.6ms |      152.6ms |  152.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    2 |        1 | 是   | 产物变化 |    201.0ms |      201.0ms |  201.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    3 |        1 | 是   | 产物变化 |    197.2ms |      197.2ms |  197.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    4 |        1 | 是   | 产物变化 |    195.9ms |      195.9ms |  195.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    5 |        1 | 是   | 产物变化 |    207.1ms |      207.1ms |  207.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    6 |        1 | 是   | 产物变化 |    195.5ms |      195.5ms |  195.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    7 |        1 | 是   | 产物变化 |    211.0ms |      211.0ms |  211.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    8 |        1 | 是   | 产物变化 |    195.2ms |      195.2ms |  195.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |    9 |        1 | 是   | 产物变化 |    212.2ms |      212.2ms |  212.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   10 |        1 | 是   | 产物变化 |    185.4ms |      185.4ms |  185.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   11 |        1 | 是   | 产物变化 |    197.1ms |      197.1ms |  197.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   12 |        1 | 是   | 产物变化 |    208.8ms |      208.8ms |  208.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   13 |        1 | 是   | 产物变化 |    198.2ms |      198.2ms |  198.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   14 |        1 | 是   | 产物变化 |    198.0ms |      198.0ms |  198.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   15 |        1 | 是   | 产物变化 |    208.0ms |      208.0ms |  208.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   16 |        1 | 是   | 产物变化 |    197.1ms |      197.1ms |  197.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   17 |        1 | 是   | 产物变化 |    198.4ms |      198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   18 |        1 | 是   | 产物变化 |    194.9ms |      194.9ms |  194.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   19 |        1 | 是   | 产物变化 |    207.8ms |      207.8ms |  207.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC script 区块   |   20 |        1 | 是   | 产物变化 |    188.3ms |      188.3ms |  188.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    1 |        1 | 是   | 产物变化 |    210.8ms |      210.8ms |  210.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    2 |        1 | 是   | 产物变化 |    188.9ms |      188.9ms |  188.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    3 |        1 | 是   | 产物变化 |    217.6ms |      217.6ms |  217.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    4 |        1 | 是   | 产物变化 |    265.7ms |      265.7ms |  265.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    5 |        1 | 是   | 产物变化 |    222.3ms |      222.3ms |  222.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    6 |        1 | 是   | 产物变化 |    197.0ms |      197.0ms |  197.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    7 |        1 | 是   | 产物变化 |    209.7ms |      209.7ms |  209.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    8 |        1 | 是   | 产物变化 |    199.1ms |      199.1ms |  199.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |    9 |        1 | 是   | 产物变化 |    197.4ms |      197.4ms |  197.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   10 |        1 | 是   | 产物变化 |    210.5ms |      210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   11 |        1 | 是   | 产物变化 |    185.7ms |      185.7ms |  185.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   12 |        1 | 是   | 产物变化 |    208.2ms |      208.2ms |  208.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   13 |        1 | 是   | 产物变化 |    197.6ms |      197.6ms |  197.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   14 |        1 | 是   | 产物变化 |    197.4ms |      197.4ms |  197.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   15 |        1 | 是   | 产物变化 |    202.5ms |      202.5ms |  202.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   16 |        1 | 是   | 产物变化 |    210.0ms |      210.0ms |  210.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   17 |        1 | 是   | 产物变化 |    208.8ms |      208.8ms |  208.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   18 |        1 | 是   | 产物变化 |    175.9ms |      175.9ms |  175.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   19 |        1 | 是   | 产物变化 |    199.1ms |      199.1ms |  199.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC template 区块 |   20 |        1 | 是   | 产物变化 |    222.0ms |      222.0ms |  222.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    1 |        1 | 是   | 产物变化 |    200.1ms |      200.1ms |  200.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    2 |        1 | 是   | 产物变化 |    299.0ms |      299.0ms |  299.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    3 |        1 | 是   | 产物变化 |    208.6ms |      208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    4 |        1 | 是   | 产物变化 |    188.0ms |      188.0ms |  188.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    5 |        1 | 是   | 产物变化 |    199.7ms |      199.7ms |  199.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    6 |        1 | 是   | 产物变化 |    199.7ms |      199.7ms |  199.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    7 |        1 | 是   | 产物变化 |    200.3ms |      200.3ms |  200.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    8 |        1 | 是   | 产物变化 |    209.2ms |      209.2ms |  209.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |    9 |        1 | 是   | 产物变化 |    199.2ms |      199.2ms |  199.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   10 |        1 | 是   | 产物变化 |    199.5ms |      199.5ms |  199.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   11 |        1 | 是   | 产物变化 |    198.2ms |      198.2ms |  198.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   12 |        1 | 是   | 产物变化 |    200.5ms |      200.5ms |  200.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   13 |        1 | 是   | 产物变化 |    211.7ms |      211.7ms |  211.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   14 |        1 | 是   | 产物变化 |    188.7ms |      188.7ms |  188.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   15 |        1 | 是   | 产物变化 |    197.9ms |      197.9ms |  197.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   16 |        1 | 是   | 产物变化 |    198.8ms |      198.8ms |  198.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   17 |        1 | 是   | 产物变化 |    198.3ms |      198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   18 |        1 | 是   | 产物变化 |    208.4ms |      208.4ms |  208.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   19 |        1 | 是   | 产物变化 |    200.1ms |      200.1ms |  200.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC style 区块    |   20 |        1 | 是   | 产物变化 |    198.9ms |      198.9ms |  198.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    1 |        1 | 是   | 产物变化 |    214.7ms |      214.7ms |  214.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    2 |        1 | 是   | 产物变化 |    311.6ms |      311.6ms |  311.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    3 |        1 | 是   | 产物变化 |    188.0ms |      188.0ms |  188.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    4 |        1 | 是   | 产物变化 |    198.6ms |      198.6ms |  198.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    5 |        1 | 是   | 产物变化 |    188.0ms |      188.0ms |  188.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    6 |        1 | 是   | 产物变化 |    210.1ms |      210.1ms |  210.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    7 |        1 | 是   | 产物变化 |    198.7ms |      198.7ms |  198.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    8 |        1 | 是   | 产物变化 |    200.2ms |      200.2ms |  200.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |    9 |        1 | 是   | 产物变化 |    198.2ms |      198.2ms |  198.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   10 |        1 | 是   | 产物变化 |    198.0ms |      198.0ms |  198.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   11 |        1 | 是   | 产物变化 |    199.3ms |      199.3ms |  199.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   12 |        1 | 是   | 产物变化 |    198.0ms |      198.0ms |  198.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   13 |        1 | 是   | 产物变化 |    199.6ms |      199.6ms |  199.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   14 |        1 | 是   | 产物变化 |    199.7ms |      199.7ms |  199.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   15 |        1 | 是   | 产物变化 |    198.4ms |      198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   16 |        1 | 是   | 产物变化 |    210.0ms |      210.0ms |  210.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   17 |        1 | 是   | 产物变化 |    198.7ms |      198.7ms |  198.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   18 |        1 | 是   | 产物变化 |    200.2ms |      200.2ms |  200.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   19 |        1 | 是   | 产物变化 |    209.9ms |      209.9ms |  209.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite + wevu performance / Vue SFC 页面配置      |   20 |        1 | 是   | 产物变化 |    187.4ms |      187.4ms |  187.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    1 |        1 | 是   | 产物变化 |    131.8ms |      131.8ms |  131.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    2 |        1 | 是   | 产物变化 |    109.1ms |      109.1ms |  109.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    3 |        1 | 是   | 产物变化 |    100.1ms |      100.1ms |  100.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    4 |        1 | 是   | 产物变化 |     97.1ms |       97.1ms |   97.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    5 |        1 | 是   | 产物变化 |    109.9ms |      109.9ms |  109.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    6 |        1 | 是   | 产物变化 |     88.5ms |       88.5ms |   88.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    7 |        1 | 是   | 产物变化 |    132.7ms |      132.7ms |  132.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    8 |        1 | 是   | 产物变化 |     98.4ms |       98.4ms |   98.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |    9 |        1 | 是   | 产物变化 |     94.7ms |       94.7ms |   94.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   10 |        1 | 是   | 产物变化 |     99.1ms |       99.1ms |   99.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   11 |        1 | 是   | 产物变化 |    108.7ms |      108.7ms |  108.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   12 |        1 | 是   | 产物变化 |    100.9ms |      100.9ms |  100.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   13 |        1 | 是   | 产物变化 |    111.6ms |      111.6ms |  111.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   14 |        1 | 是   | 产物变化 |    110.7ms |      110.7ms |  110.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   15 |        1 | 是   | 产物变化 |     97.7ms |       97.7ms |   97.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   16 |        1 | 是   | 产物变化 |    109.5ms |      109.5ms |  109.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   17 |        1 | 是   | 产物变化 |    109.8ms |      109.8ms |  109.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   18 |        1 | 是   | 产物变化 |    110.3ms |      110.3ms |  110.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   19 |        1 | 是   | 产物变化 |    109.8ms |      109.8ms |  109.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JS 文件                             |   20 |        1 | 是   | 产物变化 |    120.8ms |      120.8ms |  120.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    1 |        1 | 是   | 产物变化 |    221.7ms |      221.7ms |  221.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    2 |        1 | 是   | 产物变化 |    143.8ms |      143.8ms |  143.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    3 |        1 | 是   | 产物变化 |    129.8ms |      129.8ms |  129.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    4 |        1 | 是   | 产物变化 |    132.7ms |      132.7ms |  132.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    5 |        1 | 是   | 产物变化 |    132.6ms |      132.6ms |  132.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    6 |        1 | 是   | 产物变化 |    143.2ms |      143.2ms |  143.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    7 |        1 | 是   | 产物变化 |    131.6ms |      131.6ms |  131.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    8 |        1 | 是   | 产物变化 |    140.9ms |      140.9ms |  140.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |    9 |        1 | 是   | 产物变化 |    153.8ms |      153.8ms |  153.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   10 |        1 | 是   | 产物变化 |    142.3ms |      142.3ms |  142.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   11 |        1 | 是   | 产物变化 |    153.1ms |      153.1ms |  153.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   12 |        1 | 是   | 产物变化 |    154.6ms |      154.6ms |  154.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   13 |        1 | 是   | 产物变化 |    165.5ms |      165.5ms |  165.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   14 |        1 | 是   | 产物变化 |    154.1ms |      154.1ms |  154.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   15 |        1 | 是   | 产物变化 |    164.5ms |      164.5ms |  164.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   16 |        1 | 是   | 产物变化 |    174.1ms |      174.1ms |  174.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   17 |        1 | 是   | 产物变化 |    175.7ms |      175.7ms |  175.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   18 |        1 | 是   | 产物变化 |    193.6ms |      193.6ms |  193.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   19 |        1 | 是   | 产物变化 |    198.5ms |      198.5ms |  198.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXML 文件                           |   20 |        1 | 是   | 产物变化 |    175.5ms |      175.5ms |  175.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    1 |        1 | 是   | 产物变化 |    175.4ms |      175.4ms |  175.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    2 |        1 | 是   | 产物变化 |    186.8ms |      186.8ms |  186.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    3 |        1 | 是   | 产物变化 |    187.1ms |      187.1ms |  187.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    4 |        1 | 是   | 产物变化 |    215.2ms |      215.2ms |  215.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    5 |        1 | 是   | 产物变化 |    288.2ms |      288.2ms |  288.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    6 |        1 | 是   | 产物变化 |    241.5ms |      241.5ms |  241.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    7 |        1 | 是   | 产物变化 |    276.9ms |      276.9ms |  276.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    8 |        1 | 是   | 产物变化 |    286.2ms |      286.2ms |  286.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |    9 |        1 | 是   | 产物变化 |    211.0ms |      211.0ms |  211.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   10 |        1 | 是   | 产物变化 |    303.3ms |      303.3ms |  303.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   11 |        1 | 是   | 产物变化 |    325.7ms |      325.7ms |  325.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   12 |        1 | 是   | 产物变化 |    344.3ms |      344.3ms |  344.3ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   13 |        1 | 是   | 产物变化 |    301.5ms |      301.5ms |  301.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   14 |        1 | 是   | 产物变化 |    319.2ms |      319.2ms |  319.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   15 |        1 | 是   | 产物变化 |    300.0ms |      300.0ms |  300.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   16 |        1 | 是   | 产物变化 |    332.0ms |      332.0ms |  332.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   17 |        1 | 是   | 产物变化 |    287.9ms |      287.9ms |  287.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   18 |        1 | 是   | 产物变化 |    313.5ms |      313.5ms |  313.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   19 |        1 | 是   | 产物变化 |    316.8ms |      316.8ms |  316.8ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / WXSS 文件                           |   20 |        1 | 是   | 产物变化 |    278.0ms |      278.0ms |  278.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    1 |        1 | 是   | 产物变化 |    302.5ms |      302.5ms |  302.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    2 |        1 | 是   | 产物变化 |    253.4ms |      253.4ms |  253.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    3 |        1 | 是   | 产物变化 |    372.5ms |      372.5ms |  372.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    4 |        1 | 是   | 产物变化 |    264.1ms |      264.1ms |  264.1ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    5 |        1 | 是   | 产物变化 |    295.0ms |      295.0ms |  295.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    6 |        1 | 是   | 产物变化 |    330.0ms |      330.0ms |  330.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    7 |        1 | 是   | 产物变化 |    320.7ms |      320.7ms |  320.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    8 |        1 | 是   | 产物变化 |    305.7ms |      305.7ms |  305.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |    9 |        1 | 是   | 产物变化 |    348.7ms |      348.7ms |  348.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   10 |        1 | 是   | 产物变化 |    309.0ms |      309.0ms |  309.0ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   11 |        1 | 是   | 产物变化 |    348.7ms |      348.7ms |  348.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   12 |        1 | 是   | 产物变化 |    305.5ms |      305.5ms |  305.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   13 |        1 | 是   | 产物变化 |    349.7ms |      349.7ms |  349.7ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   14 |        1 | 是   | 产物变化 |    331.2ms |      331.2ms |  331.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   15 |        1 | 是   | 产物变化 |    349.9ms |      349.9ms |  349.9ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   16 |        1 | 是   | 产物变化 |    298.4ms |      298.4ms |  298.4ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   17 |        1 | 是   | 产物变化 |    329.2ms |      329.2ms |  329.2ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   18 |        1 | 是   | 产物变化 |    320.6ms |      320.6ms |  320.6ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   19 |        1 | 是   | 产物变化 |    340.5ms |      340.5ms |  340.5ms |        - |    - |    - |        - |          - |        |          |
| weapp-vite 原生 / JSON 文件                           |   20 |        1 | 是   | 产物变化 |    373.2ms |      373.2ms |  373.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    1 |        1 | 是   | 产物变化 |   1130.0ms |     1130.0ms | 1130.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    2 |        1 | 是   | 产物变化 |    244.7ms |      244.7ms |  244.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    3 |        1 | 是   | 产物变化 |    232.0ms |      232.0ms |  232.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    4 |        1 | 是   | 产物变化 |    134.5ms |      134.5ms |  134.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    5 |        1 | 是   | 产物变化 |    133.2ms |      133.2ms |  133.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    6 |        1 | 是   | 产物变化 |    134.2ms |      134.2ms |  134.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    7 |        1 | 是   | 产物变化 |    130.1ms |      130.1ms |  130.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    8 |        1 | 是   | 产物变化 |    133.1ms |      133.1ms |  133.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |    9 |        1 | 是   | 产物变化 |    132.9ms |      132.9ms |  132.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   10 |        1 | 是   | 产物变化 |    133.9ms |      133.9ms |  133.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   11 |        1 | 是   | 产物变化 |    130.8ms |      130.8ms |  130.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   12 |        1 | 是   | 产物变化 |    121.3ms |      121.3ms |  121.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   13 |        1 | 是   | 产物变化 |    135.0ms |      135.0ms |  135.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   14 |        1 | 是   | 产物变化 |    122.6ms |      122.6ms |  122.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   15 |        1 | 是   | 产物变化 |    121.4ms |      121.4ms |  121.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   16 |        1 | 是   | 产物变化 |    121.7ms |      121.7ms |  121.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   17 |        1 | 是   | 产物变化 |    131.7ms |      131.7ms |  131.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   18 |        1 | 是   | 产物变化 |    133.5ms |      133.5ms |  133.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   19 |        1 | 是   | 产物变化 |    131.6ms |      131.6ms |  131.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC script 区块               |   20 |        1 | 是   | 产物变化 |    131.6ms |      131.6ms |  131.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    1 |        1 | 是   | 产物变化 |    220.7ms |      220.7ms |  220.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    2 |        1 | 是   | 产物变化 |    121.0ms |      121.0ms |  121.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    3 |        1 | 是   | 产物变化 |    208.6ms |      208.6ms |  208.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    4 |        1 | 是   | 产物变化 |    210.7ms |      210.7ms |  210.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    5 |        1 | 是   | 产物变化 |    122.0ms |      122.0ms |  122.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    6 |        1 | 是   | 产物变化 |    140.9ms |      140.9ms |  140.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    7 |        1 | 是   | 产物变化 |    122.9ms |      122.9ms |  122.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    8 |        1 | 是   | 产物变化 |    120.0ms |      120.0ms |  120.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |    9 |        1 | 是   | 产物变化 |    123.0ms |      123.0ms |  123.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   10 |        1 | 是   | 产物变化 |    208.9ms |      208.9ms |  208.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   11 |        1 | 是   | 产物变化 |    211.3ms |      211.3ms |  211.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   12 |        1 | 是   | 产物变化 |    121.8ms |      121.8ms |  121.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   13 |        1 | 是   | 产物变化 |    121.0ms |      121.0ms |  121.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   14 |        1 | 是   | 产物变化 |    130.5ms |      130.5ms |  130.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   15 |        1 | 是   | 产物变化 |    121.6ms |      121.6ms |  121.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   16 |        1 | 是   | 产物变化 |    121.6ms |      121.6ms |  121.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   17 |        1 | 是   | 产物变化 |    120.0ms |      120.0ms |  120.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   18 |        1 | 是   | 产物变化 |    121.7ms |      121.7ms |  121.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   19 |        1 | 是   | 产物变化 |    119.8ms |      119.8ms |  119.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC template 区块             |   20 |        1 | 是   | 产物变化 |    108.7ms |      108.7ms |  108.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    1 |        1 | 是   | 产物变化 |    220.8ms |      220.8ms |  220.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    2 |        1 | 是   | 产物变化 |    130.7ms |      130.7ms |  130.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    3 |        1 | 是   | 产物变化 |    124.9ms |      124.9ms |  124.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    4 |        1 | 是   | 产物变化 |    198.8ms |      198.8ms |  198.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    5 |        1 | 是   | 产物变化 |    133.2ms |      133.2ms |  133.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    6 |        1 | 是   | 产物变化 |    118.2ms |      118.2ms |  118.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    7 |        1 | 是   | 产物变化 |    208.0ms |      208.0ms |  208.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    8 |        1 | 是   | 产物变化 |    123.1ms |      123.1ms |  123.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |    9 |        1 | 是   | 产物变化 |    133.9ms |      133.9ms |  133.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   10 |        1 | 是   | 产物变化 |    199.9ms |      199.9ms |  199.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   11 |        1 | 是   | 产物变化 |    123.5ms |      123.5ms |  123.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   12 |        1 | 是   | 产物变化 |    118.5ms |      118.5ms |  118.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   13 |        1 | 是   | 产物变化 |    119.4ms |      119.4ms |  119.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   14 |        1 | 是   | 产物变化 |    121.4ms |      121.4ms |  121.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   15 |        1 | 是   | 产物变化 |    208.2ms |      208.2ms |  208.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   16 |        1 | 是   | 产物变化 |    120.0ms |      120.0ms |  120.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   17 |        1 | 是   | 产物变化 |    131.2ms |      131.2ms |  131.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   18 |        1 | 是   | 产物变化 |    120.5ms |      120.5ms |  120.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   19 |        1 | 是   | 产物变化 |    222.2ms |      222.2ms |  222.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app vite vue3 / Vue SFC style 区块                |   20 |        1 | 是   | 产物变化 |    210.5ms |      210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |   1233.0ms |     1233.0ms | 1233.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    383.9ms |      383.9ms |  383.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    417.0ms |      417.0ms |  417.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    299.8ms |      299.8ms |  299.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    288.2ms |      288.2ms |  288.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    307.4ms |      307.4ms |  307.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    299.1ms |      299.1ms |  299.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    298.1ms |      298.1ms |  298.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    329.9ms |      329.9ms |  329.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    266.2ms |      266.2ms |  266.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    298.3ms |      298.3ms |  298.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    302.4ms |      302.4ms |  302.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    298.7ms |      298.7ms |  298.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    298.3ms |      298.3ms |  298.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    310.0ms |      310.0ms |  310.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    342.3ms |      342.3ms |  342.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    290.9ms |      290.9ms |  290.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    308.6ms |      308.6ms |  308.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    268.2ms |      268.2ms |  268.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    287.8ms |      287.8ms |  287.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    199.9ms |      199.9ms |  199.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    199.7ms |      199.7ms |  199.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    198.3ms |      198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    198.5ms |      198.5ms |  198.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    213.8ms |      213.8ms |  213.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    189.5ms |      189.5ms |  189.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    200.3ms |      200.3ms |  200.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    190.1ms |      190.1ms |  190.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    210.1ms |      210.1ms |  210.1ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    197.6ms |      197.6ms |  197.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    198.5ms |      198.5ms |  198.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    198.0ms |      198.0ms |  198.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    210.5ms |      210.5ms |  210.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    188.2ms |      188.2ms |  188.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    208.5ms |      208.5ms |  208.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    200.9ms |      200.9ms |  200.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    198.2ms |      198.2ms |  198.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    211.2ms |      211.2ms |  211.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    186.9ms |      186.9ms |  186.9ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    197.8ms |      197.8ms |  197.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    1 |        1 | 是   | 产物变化 |    198.3ms |      198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    2 |        1 | 是   | 产物变化 |    211.6ms |      211.6ms |  211.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    3 |        1 | 是   | 产物变化 |    187.4ms |      187.4ms |  187.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    4 |        1 | 是   | 产物变化 |    209.7ms |      209.7ms |  209.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    5 |        1 | 是   | 产物变化 |    209.4ms |      209.4ms |  209.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    6 |        1 | 是   | 产物变化 |    187.6ms |      187.6ms |  187.6ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    7 |        1 | 是   | 产物变化 |    198.2ms |      198.2ms |  198.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    8 |        1 | 是   | 产物变化 |    213.2ms |      213.2ms |  213.2ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |    9 |        1 | 是   | 产物变化 |    233.0ms |      233.0ms |  233.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   10 |        1 | 是   | 产物变化 |    177.5ms |      177.5ms |  177.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   11 |        1 | 是   | 产物变化 |    189.4ms |      189.4ms |  189.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   12 |        1 | 是   | 产物变化 |    199.8ms |      199.8ms |  199.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   13 |        1 | 是   | 产物变化 |    203.0ms |      203.0ms |  203.0ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   14 |        1 | 是   | 产物变化 |    198.3ms |      198.3ms |  198.3ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   15 |        1 | 是   | 产物变化 |    202.5ms |      202.5ms |  202.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   16 |        1 | 是   | 产物变化 |    199.4ms |      199.4ms |  199.4ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   17 |        1 | 是   | 产物变化 |    200.5ms |      200.5ms |  200.5ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   18 |        1 | 是   | 产物变化 |    200.7ms |      200.7ms |  200.7ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   19 |        1 | 是   | 产物变化 |    197.8ms |      197.8ms |  197.8ms |        - |    - |    - |        - |          - |        |          |
| uni-app x / Vue SFC style 区块                        |   20 |        1 | 是   | 产物变化 |    209.0ms |      209.0ms |  209.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    1 |        1 | 是   | 产物变化 |    285.9ms |      285.9ms |  285.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    2 |        1 | 是   | 产物变化 |    328.8ms |      328.8ms |  328.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    3 |        1 | 是   | 产物变化 |    334.0ms |      334.0ms |  334.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    4 |        1 | 是   | 产物变化 |    296.1ms |      296.1ms |  296.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    5 |        1 | 是   | 产物变化 |    319.9ms |      319.9ms |  319.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    6 |        1 | 是   | 产物变化 |    306.9ms |      306.9ms |  306.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    7 |        1 | 是   | 产物变化 |    323.3ms |      323.3ms |  323.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    8 |        1 | 是   | 产物变化 |    283.8ms |      283.8ms |  283.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |    9 |        1 | 是   | 产物变化 |    305.2ms |      305.2ms |  305.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   10 |        1 | 是   | 产物变化 |    309.6ms |      309.6ms |  309.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   11 |        1 | 是   | 产物变化 |    297.8ms |      297.8ms |  297.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   12 |        1 | 是   | 产物变化 |    296.9ms |      296.9ms |  296.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   13 |        1 | 是   | 产物变化 |    318.4ms |      318.4ms |  318.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   14 |        1 | 是   | 产物变化 |    320.6ms |      320.6ms |  320.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   15 |        1 | 是   | 产物变化 |    299.2ms |      299.2ms |  299.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   16 |        1 | 是   | 产物变化 |    221.3ms |      221.3ms |  221.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   17 |        1 | 是   | 产物变化 |    298.4ms |      298.4ms |  298.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   18 |        1 | 是   | 产物变化 |    308.4ms |      308.4ms |  308.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   19 |        1 | 是   | 产物变化 |    343.7ms |      343.7ms |  343.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC script 区块                       |   20 |        1 | 是   | 产物变化 |    284.2ms |      284.2ms |  284.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    1 |        1 | 是   | 产物变化 |    297.8ms |      297.8ms |  297.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    2 |        1 | 是   | 产物变化 |    234.2ms |      234.2ms |  234.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    3 |        1 | 是   | 产物变化 |    297.4ms |      297.4ms |  297.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    4 |        1 | 是   | 产物变化 |    319.2ms |      319.2ms |  319.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    5 |        1 | 是   | 产物变化 |    307.4ms |      307.4ms |  307.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    6 |        1 | 是   | 产物变化 |    316.9ms |      316.9ms |  316.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    7 |        1 | 是   | 产物变化 |    316.7ms |      316.7ms |  316.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    8 |        1 | 是   | 产物变化 |    307.1ms |      307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |    9 |        1 | 是   | 产物变化 |    318.9ms |      318.9ms |  318.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   10 |        1 | 是   | 产物变化 |    295.4ms |      295.4ms |  295.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   11 |        1 | 是   | 产物变化 |    298.0ms |      298.0ms |  298.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   12 |        1 | 是   | 产物变化 |    211.9ms |      211.9ms |  211.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   13 |        1 | 是   | 产物变化 |    316.3ms |      316.3ms |  316.3ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   14 |        1 | 是   | 产物变化 |    293.8ms |      293.8ms |  293.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   15 |        1 | 是   | 产物变化 |    227.2ms |      227.2ms |  227.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   16 |        1 | 是   | 产物变化 |    287.5ms |      287.5ms |  287.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   17 |        1 | 是   | 产物变化 |    304.9ms |      304.9ms |  304.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   18 |        1 | 是   | 产物变化 |    344.0ms |      344.0ms |  344.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   19 |        1 | 是   | 产物变化 |    307.1ms |      307.1ms |  307.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / Vue SFC template 区块                     |   20 |        1 | 是   | 产物变化 |    293.2ms |      293.2ms |  293.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    1 |        1 | 是   | 产物变化 |    294.7ms |      294.7ms |  294.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    2 |        1 | 是   | 产物变化 |    212.6ms |      212.6ms |  212.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    3 |        1 | 是   | 产物变化 |    308.2ms |      308.2ms |  308.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    4 |        1 | 是   | 产物变化 |    297.2ms |      297.2ms |  297.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    5 |        1 | 是   | 产物变化 |    288.5ms |      288.5ms |  288.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    6 |        1 | 是   | 产物变化 |    296.6ms |      296.6ms |  296.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    7 |        1 | 是   | 产物变化 |    294.6ms |      294.6ms |  294.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    8 |        1 | 是   | 产物变化 |    317.4ms |      317.4ms |  317.4ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |    9 |        1 | 是   | 产物变化 |    303.2ms |      303.2ms |  303.2ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   10 |        1 | 是   | 产物变化 |    294.7ms |      294.7ms |  294.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   11 |        1 | 是   | 产物变化 |    210.0ms |      210.0ms |  210.0ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   12 |        1 | 是   | 产物变化 |    208.9ms |      208.9ms |  208.9ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   13 |        1 | 是   | 产物变化 |    297.6ms |      297.6ms |  297.6ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   14 |        1 | 是   | 产物变化 |    300.5ms |      300.5ms |  300.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   15 |        1 | 是   | 产物变化 |    306.7ms |      306.7ms |  306.7ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   16 |        1 | 是   | 产物变化 |    293.8ms |      293.8ms |  293.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   17 |        1 | 是   | 产物变化 |    305.8ms |      305.8ms |  305.8ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   18 |        1 | 是   | 产物变化 |    285.1ms |      285.1ms |  285.1ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   19 |        1 | 是   | 产物变化 |    293.5ms |      293.5ms |  293.5ms |        - |    - |    - |        - |          - |        |          |
| taro vue3 / CSS 文件                                  |   20 |        1 | 是   | 产物变化 |    219.3ms |      219.3ms |  219.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    1 |        1 | 是   | 产物变化 |    198.4ms |      198.4ms |  198.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    2 |        1 | 是   | 产物变化 |    175.2ms |      175.2ms |  175.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    3 |        1 | 是   | 产物变化 |    207.7ms |      207.7ms |  207.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    4 |        1 | 是   | 产物变化 |    163.5ms |      163.5ms |  163.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    5 |        1 | 是   | 产物变化 |    151.5ms |      151.5ms |  151.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    6 |        1 | 是   | 产物变化 |    140.8ms |      140.8ms |  140.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    7 |        1 | 是   | 产物变化 |    154.5ms |      154.5ms |  154.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    8 |        1 | 是   | 产物变化 |    153.3ms |      153.3ms |  153.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |    9 |        1 | 是   | 产物变化 |    122.8ms |      122.8ms |  122.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   10 |        1 | 是   | 产物变化 |    121.5ms |      121.5ms |  121.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   11 |        1 | 是   | 产物变化 |    144.3ms |      144.3ms |  144.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   12 |        1 | 是   | 产物变化 |    172.5ms |      172.5ms |  172.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   13 |        1 | 是   | 产物变化 |    178.5ms |      178.5ms |  178.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   14 |        1 | 是   | 产物变化 |    121.0ms |      121.0ms |  121.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   15 |        1 | 是   | 产物变化 |    164.7ms |      164.7ms |  164.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   16 |        1 | 是   | 产物变化 |    154.3ms |      154.3ms |  154.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   17 |        1 | 是   | 产物变化 |    153.6ms |      153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   18 |        1 | 是   | 产物变化 |    154.4ms |      154.4ms |  154.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   19 |        1 | 是   | 产物变化 |    142.1ms |      142.1ms |  142.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / template 区块                                   |   20 |        1 | 是   | 产物变化 |    164.9ms |      164.9ms |  164.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    1 |        1 | 是   | 产物变化 |    144.3ms |      144.3ms |  144.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    2 |        1 | 是   | 产物变化 |    111.3ms |      111.3ms |  111.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    3 |        1 | 是   | 产物变化 |    156.4ms |      156.4ms |  156.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    4 |        1 | 是   | 产物变化 |    189.5ms |      189.5ms |  189.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    5 |        1 | 是   | 产物变化 |    144.2ms |      144.2ms |  144.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    6 |        1 | 是   | 产物变化 |    144.2ms |      144.2ms |  144.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    7 |        1 | 是   | 产物变化 |    154.9ms |      154.9ms |  154.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    8 |        1 | 是   | 产物变化 |    155.8ms |      155.8ms |  155.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |    9 |        1 | 是   | 产物变化 |    110.8ms |      110.8ms |  110.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   10 |        1 | 是   | 产物变化 |    155.4ms |      155.4ms |  155.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   11 |        1 | 是   | 产物变化 |    146.7ms |      146.7ms |  146.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   12 |        1 | 是   | 产物变化 |    111.6ms |      111.6ms |  111.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   13 |        1 | 是   | 产物变化 |    145.9ms |      145.9ms |  145.9ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   14 |        1 | 是   | 产物变化 |    166.8ms |      166.8ms |  166.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   15 |        1 | 是   | 产物变化 |    145.1ms |      145.1ms |  145.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   16 |        1 | 是   | 产物变化 |    111.5ms |      111.5ms |  111.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   17 |        1 | 是   | 产物变化 |    166.1ms |      166.1ms |  166.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   18 |        1 | 是   | 产物变化 |    132.3ms |      132.3ms |  132.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   19 |        1 | 是   | 产物变化 |    109.8ms |      109.8ms |  109.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / script 区块                                     |   20 |        1 | 是   | 产物变化 |    153.6ms |      153.6ms |  153.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    1 |        1 | 是   | 产物变化 |    111.2ms |      111.2ms |  111.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    2 |        1 | 是   | 产物变化 |    143.4ms |      143.4ms |  143.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    3 |        1 | 是   | 产物变化 |    154.2ms |      154.2ms |  154.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    4 |        1 | 是   | 产物变化 |    109.3ms |      109.3ms |  109.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    5 |        1 | 是   | 产物变化 |    141.6ms |      141.6ms |  141.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    6 |        1 | 是   | 产物变化 |    143.8ms |      143.8ms |  143.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    7 |        1 | 是   | 产物变化 |    142.7ms |      142.7ms |  142.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    8 |        1 | 是   | 产物变化 |    130.8ms |      130.8ms |  130.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |    9 |        1 | 是   | 产物变化 |    100.6ms |      100.6ms |  100.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   10 |        1 | 是   | 产物变化 |    111.5ms |      111.5ms |  111.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   11 |        1 | 是   | 产物变化 |    122.0ms |      122.0ms |  122.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   12 |        1 | 是   | 产物变化 |    111.4ms |      111.4ms |  111.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   13 |        1 | 是   | 产物变化 |    155.2ms |      155.2ms |  155.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   14 |        1 | 是   | 产物变化 |    166.6ms |      166.6ms |  166.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   15 |        1 | 是   | 产物变化 |    110.1ms |      110.1ms |  110.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   16 |        1 | 是   | 产物变化 |    111.0ms |      111.0ms |  111.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   17 |        1 | 是   | 产物变化 |     98.0ms |       98.0ms |   98.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   18 |        1 | 是   | 产物变化 |    154.7ms |      154.7ms |  154.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   19 |        1 | 是   | 产物变化 |    110.4ms |      110.4ms |  110.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / style 区块                                      |   20 |        1 | 是   | 产物变化 |    154.2ms |      154.2ms |  154.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    1 |        1 | 是   | 产物变化 |    100.0ms |      100.0ms |  100.0ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    2 |        1 | 是   | 产物变化 |    111.1ms |      111.1ms |  111.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    3 |        1 | 是   | 产物变化 |    131.1ms |      131.1ms |  131.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    4 |        1 | 是   | 产物变化 |    111.4ms |      111.4ms |  111.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    5 |        1 | 是   | 产物变化 |    119.7ms |      119.7ms |  119.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    6 |        1 | 是   | 产物变化 |    131.8ms |      131.8ms |  131.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    7 |        1 | 是   | 产物变化 |    152.3ms |      152.3ms |  152.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    8 |        1 | 是   | 产物变化 |    111.7ms |      111.7ms |  111.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |    9 |        1 | 是   | 产物变化 |    110.1ms |      110.1ms |  110.1ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   10 |        1 | 是   | 产物变化 |    141.4ms |      141.4ms |  141.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   11 |        1 | 是   | 产物变化 |    120.2ms |      120.2ms |  120.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   12 |        1 | 是   | 产物变化 |    134.3ms |      134.3ms |  134.3ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   13 |        1 | 是   | 产物变化 |    111.5ms |      111.5ms |  111.5ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   14 |        1 | 是   | 产物变化 |    109.7ms |      109.7ms |  109.7ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   15 |        1 | 是   | 产物变化 |    133.6ms |      133.6ms |  133.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   16 |        1 | 是   | 产物变化 |    206.8ms |      206.8ms |  206.8ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   17 |        1 | 是   | 产物变化 |    131.2ms |      131.2ms |  131.2ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   18 |        1 | 是   | 产物变化 |    131.4ms |      131.4ms |  131.4ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   19 |        1 | 是   | 产物变化 |    120.6ms |      120.6ms |  120.6ms |        - |    - |    - |        - |          - |        |          |
| mpx / 页面配置                                        |   20 |        1 | 是   | 产物变化 |    175.9ms |      175.9ms |  175.9ms |        - |    - |    - |        - |          - |        |          |

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
- HMR 单轮最多尝试 2 次，重试会写入 attempts 字段；可通过 BENCH_HMR_ITERATION_ATTEMPTS 覆盖。
- 任何重试都会把场景标记为降级并移出正式排名，命令也会返回失败，避免隐藏超时污染性能结论。
