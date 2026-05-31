# HMR 基准报告

生成时间：2026-05-31T04:15:25.223Z
采样次数：20 次，报告中的平均值由 weapp-vite HMR profile 有效样本计算。

## 一眼结论

- HMR 最快：原生 WXML 文件，平均 11.4ms。
- HMR 最慢：Vue SFC script 区块，平均 205.3ms。
- 所有 HMR 场景样本完整，均已纳入排名。
- 场景覆盖：Vue SFC 的 script、template、style、页面配置，以及原生 JS、WXML、WXSS、JSON 文件。
- 读数口径：HMR 总耗时来自 weapp-vite 内部 profile；外部等待是文件写入到 profile 落盘的墙钟耗时，只用于排查 watcher 延迟。

## 场景速览

| 排名 | 场景                  | 项目              | 类型     | 平均 HMR | 相对最快 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 平均脏入口 | 平均输出文件 |
| ---: | --------------------- | ----------------- | -------- | -------: | -------: | -------: | -------: | -----: | ----: | -------: | ---------: | ---------: | -----------: |
|    1 | 原生 WXML 文件        | weapp-vite 原生   | 原生文件 |   11.4ms |    1.00x |  202.7ms |    9.7ms |  0.1ms | 0.3ms |    0.2ms |          - |        1.0 |          1.0 |
|    2 | 原生 JSON 文件        | weapp-vite 原生   | 原生文件 |   12.2ms |    1.07x |  202.6ms |    9.9ms |  0.1ms | 0.6ms |    1.3ms |          - |        1.0 |          1.0 |
|    3 | 原生 WXSS 文件        | weapp-vite 原生   | 原生文件 |   13.5ms |    1.18x |  203.0ms |   11.3ms |  0.1ms | 0.6ms |    1.1ms |          - |        1.0 |          1.0 |
|    4 | 原生 JS 文件          | weapp-vite 原生   | 原生文件 |   24.5ms |    2.16x |  202.6ms |   23.2ms |  2.2ms | 0.7ms |    0.3ms |          - |        1.0 |          1.0 |
|    5 | Vue SFC 页面配置      | weapp-vite + wevu | Vue SFC  |  154.0ms |   13.54x |  404.9ms |  150.2ms |  6.6ms | 0.8ms |    0.2ms |      0.0ms |        1.0 |          1.0 |
|    6 | Vue SFC style 区块    | weapp-vite + wevu | Vue SFC  |  165.5ms |   14.55x |  404.5ms |  146.6ms |  6.8ms | 0.8ms |   14.5ms |      0.0ms |        1.0 |          1.0 |
|    7 | Vue SFC template 区块 | weapp-vite + wevu | Vue SFC  |  183.5ms |   16.14x |  425.5ms |  164.2ms |  6.5ms | 0.6ms |   14.1ms |      0.0ms |        1.0 |          1.0 |
|    8 | Vue SFC script 区块   | weapp-vite + wevu | Vue SFC  |  205.3ms |   18.05x |  404.5ms |  198.8ms | 80.3ms | 2.0ms |    0.8ms |      0.0ms |        1.0 |          3.0 |

## 阶段均值

| 场景                  | HMR 总耗时 | 外部等待 | 构建核心 |   转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 | 源文件                       |
| --------------------- | ---------: | -------: | -------: | -----: | ----: | -------: | ---------: | -----: | -------: | ---------------------------- |
| Vue SFC script 区块   |    205.3ms |  404.5ms |  198.8ms | 80.3ms | 2.0ms |    0.8ms |      0.0ms |    1.0 |      3.0 | `src/pages/index/index.vue`  |
| Vue SFC template 区块 |    183.5ms |  425.5ms |  164.2ms |  6.5ms | 0.6ms |   14.1ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`  |
| Vue SFC style 区块    |    165.5ms |  404.5ms |  146.6ms |  6.8ms | 0.8ms |   14.5ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`  |
| Vue SFC 页面配置      |    154.0ms |  404.9ms |  150.2ms |  6.6ms | 0.8ms |    0.2ms |      0.0ms |    1.0 |      1.0 | `src/pages/index/index.vue`  |
| 原生 JS 文件          |     24.5ms |  202.6ms |   23.2ms |  2.2ms | 0.7ms |    0.3ms |          - |    1.0 |      1.0 | `src/pages/index/index.js`   |
| 原生 WXML 文件        |     11.4ms |  202.7ms |    9.7ms |  0.1ms | 0.3ms |    0.2ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxml` |
| 原生 WXSS 文件        |     13.5ms |  203.0ms |   11.3ms |  0.1ms | 0.6ms |    1.1ms |          - |    1.0 |      1.0 | `src/pages/index/index.wxss` |
| 原生 JSON 文件        |     12.2ms |  202.6ms |    9.9ms |  0.1ms | 0.6ms |    1.3ms |          - |    1.0 |      1.0 | `src/pages/index/index.json` |

## 原始明细

| 场景                  | 轮次 | 通过 | HMR 总耗时 | 外部等待 | 构建核心 |    转换 |  写入 | 产物发射 | 共享 chunk | 脏入口 | 输出文件 |
| --------------------- | ---: | ---- | ---------: | -------: | -------: | ------: | ----: | -------: | ---------: | -----: | -------: |
| Vue SFC script 区块   |    1 | 是   |    221.4ms |  405.1ms |  204.0ms |  78.6ms | 3.6ms |    9.7ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    2 | 是   |    245.3ms |  405.1ms |  239.2ms |  97.2ms | 2.1ms |    0.3ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    3 | 是   |    193.2ms |  404.1ms |  183.7ms |  65.1ms | 2.2ms |    0.4ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    4 | 是   |    216.3ms |  406.3ms |  211.5ms |  64.5ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    5 | 是   |    189.4ms |  404.0ms |  183.4ms |  79.3ms | 2.6ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    6 | 是   |    201.2ms |  404.0ms |  196.3ms |  91.2ms | 1.8ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    7 | 是   |    256.2ms |  405.7ms |  251.2ms |  92.8ms | 1.5ms |    0.4ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    8 | 是   |    198.4ms |  403.0ms |  193.9ms |  83.6ms | 1.5ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |    9 | 是   |    188.2ms |  405.1ms |  182.8ms |  68.0ms | 2.0ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   10 | 是   |    188.3ms |  404.6ms |  182.5ms |  62.2ms | 2.0ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   11 | 是   |    188.8ms |  405.8ms |  183.6ms |  83.1ms | 1.9ms |    0.3ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   12 | 是   |    241.4ms |  403.3ms |  237.2ms |  69.6ms | 1.4ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   13 | 是   |    182.1ms |  405.1ms |  177.8ms |  63.8ms | 1.3ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   14 | 是   |    207.1ms |  402.6ms |  202.5ms |  72.7ms | 1.4ms |    0.3ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   15 | 是   |    188.1ms |  403.4ms |  183.7ms |  58.0ms | 1.3ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   16 | 是   |    214.1ms |  403.3ms |  208.7ms | 188.1ms | 2.2ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   17 | 是   |    194.1ms |  405.5ms |  186.6ms |  74.4ms | 3.4ms |    0.3ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   18 | 是   |    221.6ms |  406.1ms |  209.9ms |  62.3ms | 2.1ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   19 | 是   |    185.2ms |  404.1ms |  178.7ms |  78.8ms | 1.7ms |    0.2ms |      0.0ms |      1 |        3 |
| Vue SFC script 区块   |   20 | 是   |    186.2ms |  404.8ms |  179.1ms |  72.3ms | 2.3ms |    1.1ms |      0.0ms |      1 |        3 |
| Vue SFC template 区块 |    1 | 是   |    156.0ms |  405.5ms |  141.7ms |   6.6ms | 1.0ms |   10.1ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    2 | 是   |    169.6ms |  405.5ms |  153.6ms |   6.3ms | 0.4ms |   11.1ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    3 | 是   |    181.0ms |  404.3ms |  164.1ms |   6.2ms | 0.5ms |   13.5ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    4 | 是   |    154.5ms |  404.4ms |  141.1ms |   5.4ms | 0.5ms |   10.1ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    5 | 是   |    161.1ms |  403.7ms |  139.0ms |   6.0ms | 0.5ms |   18.5ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    6 | 是   |    149.5ms |  403.6ms |  132.3ms |   5.3ms | 0.5ms |   13.3ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    7 | 是   |    157.6ms |  405.6ms |  140.5ms |   5.8ms | 0.5ms |   13.1ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    8 | 是   |    163.3ms |  407.9ms |  138.2ms |   5.4ms | 0.8ms |   20.9ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |    9 | 是   |    151.9ms |  404.1ms |  136.0ms |   6.4ms | 1.4ms |   11.3ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   10 | 是   |    192.5ms |  405.7ms |  174.0ms |   9.8ms | 0.4ms |   14.7ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   11 | 是   |    170.1ms |  404.9ms |  143.7ms |   6.7ms | 0.5ms |   22.8ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   12 | 是   |    152.5ms |  405.1ms |  138.2ms |   6.3ms | 0.4ms |   10.1ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   13 | 是   |    176.2ms |  405.8ms |  159.4ms |   5.0ms | 0.4ms |   13.0ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   14 | 是   |    172.9ms |  404.3ms |  149.0ms |   5.4ms | 0.5ms |   20.6ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   15 | 是   |    156.6ms |  405.7ms |  139.2ms |   5.9ms | 0.9ms |   11.8ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   16 | 是   |    538.3ms |  810.2ms |  522.6ms |   6.9ms | 0.4ms |   12.0ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   17 | 是   |    170.7ms |  405.7ms |  132.7ms |  11.2ms | 0.8ms |   12.3ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   18 | 是   |    160.3ms |  406.4ms |  145.8ms |   5.8ms | 0.7ms |   10.9ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   19 | 是   |    182.7ms |  405.5ms |  155.9ms |   6.3ms | 0.6ms |   19.1ms |      0.0ms |      1 |        1 |
| Vue SFC template 区块 |   20 | 是   |    153.6ms |  406.0ms |  137.2ms |   6.5ms | 0.4ms |   13.3ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    1 | 是   |    160.4ms |  403.6ms |  136.9ms |   6.1ms | 0.6ms |   19.0ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    2 | 是   |    156.2ms |  405.6ms |  139.8ms |   5.1ms | 2.3ms |   11.2ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    3 | 是   |    155.1ms |  404.5ms |  137.6ms |   5.9ms | 0.8ms |   14.1ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    4 | 是   |    165.9ms |  405.4ms |  138.7ms |   5.9ms | 0.8ms |   23.6ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    5 | 是   |    178.4ms |  403.7ms |  155.5ms |  12.2ms | 0.6ms |   12.0ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    6 | 是   |    167.7ms |  402.7ms |  153.1ms |   5.3ms | 0.5ms |   11.4ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    7 | 是   |    168.2ms |  405.2ms |  151.7ms |   8.5ms | 0.6ms |   13.0ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    8 | 是   |    147.6ms |  406.5ms |  131.5ms |   6.3ms | 0.7ms |   12.5ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |    9 | 是   |    154.5ms |  404.5ms |  139.0ms |   6.3ms | 0.6ms |   11.6ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   10 | 是   |    164.4ms |  404.3ms |  141.9ms |   7.1ms | 1.3ms |   18.2ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   11 | 是   |    149.9ms |  404.1ms |  135.6ms |   6.0ms | 0.5ms |   10.7ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   12 | 是   |    173.8ms |  404.8ms |  146.2ms |   6.1ms | 0.8ms |   19.7ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   13 | 是   |    246.4ms |  405.2ms |  218.5ms |   5.4ms | 1.1ms |   24.1ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   14 | 是   |    156.7ms |  405.4ms |  138.2ms |   6.5ms | 0.6ms |   14.9ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   15 | 是   |    159.3ms |  403.5ms |  145.1ms |   6.1ms | 0.6ms |   10.7ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   16 | 是   |    173.3ms |  404.8ms |  155.2ms |  13.0ms | 1.3ms |   13.1ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   17 | 是   |    149.6ms |  404.8ms |  134.4ms |   6.8ms | 0.6ms |   10.8ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   18 | 是   |    158.5ms |  402.6ms |  144.5ms |   5.3ms | 0.6ms |   10.8ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   19 | 是   |    173.0ms |  404.6ms |  150.0ms |   5.7ms | 0.8ms |   19.3ms |      0.0ms |      1 |        1 |
| Vue SFC style 区块    |   20 | 是   |    151.3ms |  404.6ms |  138.6ms |   6.9ms | 0.5ms |    9.3ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    1 | 是   |    158.2ms |  404.0ms |  147.7ms |   6.4ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    2 | 是   |    143.7ms |  402.1ms |  141.2ms |   6.7ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    3 | 是   |    150.4ms |  404.2ms |  147.6ms |   7.2ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    4 | 是   |    167.0ms |  406.7ms |  164.1ms |   5.8ms | 0.7ms |    0.3ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    5 | 是   |    140.6ms |  404.5ms |  137.5ms |   6.8ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    6 | 是   |    144.6ms |  405.5ms |  141.8ms |   6.3ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    7 | 是   |    148.7ms |  404.2ms |  144.4ms |   6.0ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    8 | 是   |    140.7ms |  404.6ms |  137.6ms |   7.4ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |    9 | 是   |    141.2ms |  405.4ms |  138.7ms |   6.3ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   10 | 是   |    157.8ms |  404.8ms |  155.1ms |   7.2ms | 0.5ms |    0.3ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   11 | 是   |    285.8ms |  405.0ms |  283.3ms |   6.4ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   12 | 是   |    146.3ms |  406.0ms |  134.3ms |   6.3ms | 0.9ms |    0.3ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   13 | 是   |    139.8ms |  404.3ms |  137.0ms |   6.5ms | 0.7ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   14 | 是   |    143.9ms |  404.0ms |  140.7ms |   5.6ms | 0.5ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   15 | 是   |    142.4ms |  406.7ms |  139.4ms |   8.3ms | 0.6ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   16 | 是   |    148.3ms |  406.8ms |  144.9ms |   6.4ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   17 | 是   |    147.6ms |  406.3ms |  144.3ms |   7.0ms | 1.2ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   18 | 是   |    149.3ms |  403.0ms |  145.6ms |   6.6ms | 1.7ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   19 | 是   |    141.6ms |  403.7ms |  138.5ms |   5.8ms | 0.9ms |    0.2ms |      0.0ms |      1 |        1 |
| Vue SFC 页面配置      |   20 | 是   |    141.8ms |  405.5ms |  139.1ms |   6.7ms | 0.8ms |    0.2ms |      0.0ms |      1 |        1 |
| 原生 JS 文件          |    1 | 是   |     29.1ms |  203.3ms |   27.1ms |   2.2ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| 原生 JS 文件          |    2 | 是   |     24.7ms |  202.9ms |   23.6ms |   1.9ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |    3 | 是   |     23.6ms |  203.1ms |   22.6ms |   2.8ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| 原生 JS 文件          |    4 | 是   |     21.9ms |  203.1ms |   20.6ms |   2.7ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| 原生 JS 文件          |    5 | 是   |     25.8ms |  202.7ms |   24.1ms |   1.9ms | 0.8ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |    6 | 是   |     26.0ms |  202.9ms |   24.3ms |   4.1ms | 1.0ms |    0.4ms |          - |      1 |        1 |
| 原生 JS 文件          |    7 | 是   |     30.2ms |  202.8ms |   29.0ms |   2.7ms | 0.7ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |    8 | 是   |     23.7ms |  202.1ms |   22.5ms |   2.8ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| 原生 JS 文件          |    9 | 是   |     22.2ms |  203.0ms |   21.0ms |   1.6ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| 原生 JS 文件          |   10 | 是   |     21.0ms |  202.4ms |   19.3ms |   1.4ms | 1.3ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |   11 | 是   |     24.1ms |  202.3ms |   23.2ms |   1.4ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |   12 | 是   |     20.7ms |  202.6ms |   19.2ms |   1.9ms | 0.6ms |    0.3ms |          - |      1 |        1 |
| 原生 JS 文件          |   13 | 是   |     22.2ms |  202.9ms |   21.3ms |   1.4ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |   14 | 是   |     28.7ms |  202.1ms |   27.7ms |   3.3ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| 原生 JS 文件          |   15 | 是   |     22.2ms |  203.1ms |   21.1ms |   1.4ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| 原生 JS 文件          |   16 | 是   |     20.8ms |  201.7ms |   19.8ms |   2.5ms | 0.5ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |   17 | 是   |     22.5ms |  202.1ms |   21.2ms |   1.9ms | 0.6ms |    0.4ms |          - |      1 |        1 |
| 原生 JS 文件          |   18 | 是   |     23.2ms |  201.2ms |   22.2ms |   3.1ms | 0.5ms |    0.3ms |          - |      1 |        1 |
| 原生 JS 文件          |   19 | 是   |     36.3ms |  203.6ms |   35.2ms |   2.5ms | 0.6ms |    0.2ms |          - |      1 |        1 |
| 原生 JS 文件          |   20 | 是   |     21.5ms |  201.1ms |   19.9ms |   1.5ms | 0.7ms |    0.3ms |          - |      1 |        1 |
| 原生 WXML 文件        |    1 | 是   |     11.5ms |  203.2ms |    8.0ms |   0.1ms | 0.8ms |    0.4ms |          - |      1 |        1 |
| 原生 WXML 文件        |    2 | 是   |     10.9ms |  202.1ms |    9.6ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |    3 | 是   |     11.7ms |  203.2ms |    9.1ms |   0.1ms | 0.2ms |    0.3ms |          - |      1 |        1 |
| 原生 WXML 文件        |    4 | 是   |      9.9ms |  203.3ms |    8.9ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |    5 | 是   |     12.5ms |  202.5ms |   11.1ms |   0.1ms | 0.4ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |    6 | 是   |     10.4ms |  203.4ms |    8.9ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |    7 | 是   |     10.4ms |  202.4ms |    8.6ms |   0.1ms | 0.3ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |    8 | 是   |     11.5ms |  202.8ms |   10.2ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |    9 | 是   |     14.0ms |  202.3ms |   12.6ms |   0.1ms | 0.5ms |    0.1ms |          - |      1 |        1 |
| 原生 WXML 文件        |   10 | 是   |     11.1ms |  201.6ms |    9.4ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |   11 | 是   |     11.0ms |  202.6ms |    9.5ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |   12 | 是   |     10.5ms |  203.5ms |    8.8ms |   0.1ms | 0.3ms |    0.3ms |          - |      1 |        1 |
| 原生 WXML 文件        |   13 | 是   |      9.9ms |  201.3ms |    8.8ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |   14 | 是   |     10.1ms |  203.7ms |    7.5ms |   0.1ms | 0.2ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |   15 | 是   |     10.7ms |  200.7ms |    9.3ms |   0.1ms | 0.3ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |   16 | 是   |     10.7ms |  202.9ms |    9.4ms |   0.1ms | 0.3ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |   17 | 是   |     14.9ms |  202.6ms |   12.8ms |   0.1ms | 0.3ms |    0.3ms |          - |      1 |        1 |
| 原生 WXML 文件        |   18 | 是   |     10.9ms |  202.8ms |    9.4ms |   0.1ms | 0.3ms |    0.2ms |          - |      1 |        1 |
| 原生 WXML 文件        |   19 | 是   |     13.3ms |  203.4ms |   11.9ms |   0.2ms | 0.3ms |    0.3ms |          - |      1 |        1 |
| 原生 WXML 文件        |   20 | 是   |     11.7ms |  204.2ms |    9.8ms |   0.1ms | 0.2ms |    0.4ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    1 | 是   |     12.0ms |  201.8ms |    9.9ms |   0.1ms | 0.4ms |    1.3ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    2 | 是   |     12.4ms |  205.4ms |   10.0ms |   0.1ms | 0.6ms |    1.4ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    3 | 是   |     12.0ms |  201.6ms |    9.8ms |   0.0ms | 0.5ms |    0.7ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    4 | 是   |     11.5ms |  202.1ms |    9.4ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    5 | 是   |     16.6ms |  203.1ms |   13.7ms |   0.2ms | 1.7ms |    0.9ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    6 | 是   |     10.8ms |  202.4ms |    9.0ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    7 | 是   |     12.6ms |  203.6ms |    9.6ms |   0.1ms | 2.0ms |    0.7ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    8 | 是   |     11.6ms |  203.3ms |    9.7ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| 原生 WXSS 文件        |    9 | 是   |     11.6ms |  203.5ms |    9.6ms |   0.1ms | 0.5ms |    1.1ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   10 | 是   |     11.2ms |  202.9ms |    9.3ms |   0.1ms | 0.6ms |    0.7ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   11 | 是   |     13.4ms |  201.6ms |   10.5ms |   0.1ms | 0.5ms |    2.0ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   12 | 是   |     13.9ms |  203.3ms |   10.7ms |   0.1ms | 0.6ms |    2.2ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   13 | 是   |     11.4ms |  203.0ms |    9.6ms |   0.1ms | 0.6ms |    0.8ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   14 | 是   |     18.0ms |  203.5ms |   16.0ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   15 | 是   |     11.8ms |  203.1ms |    9.9ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   16 | 是   |     12.0ms |  202.8ms |    9.9ms |   0.1ms | 0.4ms |    1.1ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   17 | 是   |     24.8ms |  202.4ms |   23.0ms |   0.1ms | 0.6ms |    0.7ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   18 | 是   |     11.9ms |  203.8ms |   10.2ms |   0.1ms | 0.6ms |    0.7ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   19 | 是   |     16.0ms |  202.3ms |   13.9ms |   0.6ms | 0.6ms |    0.7ms |          - |      1 |        1 |
| 原生 WXSS 文件        |   20 | 是   |     14.0ms |  203.8ms |   11.3ms |   0.1ms | 0.5ms |    1.9ms |          - |      1 |        1 |
| 原生 JSON 文件        |    1 | 是   |     10.4ms |  201.5ms |    8.6ms |   0.1ms | 0.5ms |    0.8ms |          - |      1 |        1 |
| 原生 JSON 文件        |    2 | 是   |     11.5ms |  203.3ms |    8.5ms |   0.1ms | 0.7ms |    2.1ms |          - |      1 |        1 |
| 原生 JSON 文件        |    3 | 是   |     11.5ms |  202.3ms |    9.7ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| 原生 JSON 文件        |    4 | 是   |     12.0ms |  202.4ms |    9.4ms |   0.1ms | 0.4ms |    1.6ms |          - |      1 |        1 |
| 原生 JSON 文件        |    5 | 是   |     13.2ms |  202.5ms |   10.5ms |   0.1ms | 1.3ms |    1.0ms |          - |      1 |        1 |
| 原生 JSON 文件        |    6 | 是   |     10.3ms |  202.4ms |    8.6ms |   0.1ms | 0.4ms |    0.9ms |          - |      1 |        1 |
| 原生 JSON 文件        |    7 | 是   |     10.6ms |  201.6ms |    8.7ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |
| 原生 JSON 文件        |    8 | 是   |     12.6ms |  202.2ms |   10.7ms |   0.2ms | 0.4ms |    1.1ms |          - |      1 |        1 |
| 原生 JSON 文件        |    9 | 是   |     12.8ms |  206.7ms |   10.9ms |   0.1ms | 0.6ms |    0.9ms |          - |      1 |        1 |
| 原生 JSON 文件        |   10 | 是   |     11.5ms |  202.8ms |    9.7ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| 原生 JSON 文件        |   11 | 是   |     11.4ms |  202.0ms |    9.3ms |   0.1ms | 0.4ms |    1.2ms |          - |      1 |        1 |
| 原生 JSON 文件        |   12 | 是   |     12.0ms |  201.5ms |    9.9ms |   0.1ms | 0.6ms |    1.1ms |          - |      1 |        1 |
| 原生 JSON 文件        |   13 | 是   |     14.3ms |  203.2ms |   11.1ms |   0.1ms | 0.5ms |    2.5ms |          - |      1 |        1 |
| 原生 JSON 文件        |   14 | 是   |     11.6ms |  203.3ms |    9.3ms |   0.1ms | 0.4ms |    1.1ms |          - |      1 |        1 |
| 原生 JSON 文件        |   15 | 是   |     13.2ms |  202.7ms |   10.6ms |   0.1ms | 1.0ms |    1.3ms |          - |      1 |        1 |
| 原生 JSON 文件        |   16 | 是   |     10.9ms |  201.1ms |    9.0ms |   0.1ms | 0.5ms |    0.9ms |          - |      1 |        1 |
| 原生 JSON 文件        |   17 | 是   |     19.6ms |  201.9ms |   15.4ms |   0.1ms | 0.8ms |    2.9ms |          - |      1 |        1 |
| 原生 JSON 文件        |   18 | 是   |     11.4ms |  203.4ms |    9.5ms |   0.1ms | 0.4ms |    0.9ms |          - |      1 |        1 |
| 原生 JSON 文件        |   19 | 是   |     11.9ms |  203.3ms |   10.0ms |   0.1ms | 0.5ms |    1.0ms |          - |      1 |        1 |
| 原生 JSON 文件        |   20 | 是   |     11.3ms |  202.4ms |    9.0ms |   0.1ms | 0.4ms |    1.0ms |          - |      1 |        1 |

说明：

- HMR 数据来自 weapp-vite dev 模式的 JSONL profile。
- 每个场景连续写入不同 marker 触发热更新，场景结束后恢复源码。
- Vue SFC 场景拆分 script、template、style 和页面配置；原生场景拆分 JS、WXML、WXSS、JSON 文件。
- HMR 等待超时默认是 90000ms，可通过 BENCH_HMR_TIMEOUT 覆盖。
