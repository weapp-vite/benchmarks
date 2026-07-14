# 编译基准报告

生成时间：2026-07-14T04:01:15.475Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：10.33.4
- 微信开发者工具 CLI：-
- Git commit：685851c2b7741651934192328126d3cd25d7fade
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22

## 一眼结论

- 编译最快：weapp-vite 原生，平均 925ms。
- 编译最慢：uni-app x，平均 3052ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：mpx，平均 1137.6 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    925ms |    1.00x |    8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu performance |        2 |        5 |   1035ms |    1.12x |  199.8 KB |   23.04x | 197.4 KB |   1.2 KB | 表现居中           |
| weapp-vite + wevu             |        3 |        4 |   1096ms |    1.18x |  198.9 KB |   22.93x | 196.5 KB |   1.1 KB | 表现居中           |
| mpx                           |        4 |        7 |   1725ms |    1.86x | 1137.6 KB |  131.14x | 203.8 KB |   1.0 KB | 存在明显短板       |
| uni-app vite vue3             |        5 |        3 |   2611ms |    2.82x |  132.3 KB |   15.25x | 129.7 KB |   0.9 KB | 表现居中           |
| taro vue3                     |        6 |        6 |   2835ms |    3.06x |  221.4 KB |   25.53x | 164.6 KB |  54.5 KB | 表现居中           |
| uni-app x                     |        7 |        2 |   3052ms |    3.30x |   99.9 KB |   11.51x |  91.2 KB |   1.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    925ms |    1.00x | 是       |
|    2 | weapp-vite + wevu performance |   1035ms |    1.12x | 是       |
|    3 | weapp-vite + wevu             |   1096ms |    1.18x | 是       |
|    4 | mpx                           |   1725ms |    1.86x | 是       |
|    5 | uni-app vite vue3             |   2611ms |    2.82x | 是       |
|    6 | taro vue3                     |   2835ms |    3.06x | 是       |
|    7 | uni-app x                     |   3052ms |    3.30x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app x                     |    99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |     17 |   11.51x |
|    3 | uni-app vite vue3             |   132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |     15 |   15.25x |
|    4 | weapp-vite + wevu             |   198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |     14 |   22.93x |
|    5 | weapp-vite + wevu performance |   199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |     14 |   23.04x |
|    6 | taro vue3                     |   221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |     20 |   25.53x |
|    7 | mpx                           |  1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |     18 |  131.14x |

## 原始明细

| 项目                          | 轮次 | 通过 |   耗时 | 文件数 |    总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | -----: | -----: | --------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   | 1485ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1141ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1114ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1176ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1067ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1126ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1082ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1110ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1135ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1217ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1070ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1034ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1012ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1026ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1035ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1009ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1005ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1013ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1039ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1030ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1057ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1023ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1042ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1041ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1027ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1038ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1036ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1033ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1015ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1007ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1025ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1010ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1043ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1065ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1076ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1013ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1029ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1049ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1012ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1064ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  925ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  915ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  925ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  930ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  927ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  895ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  918ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  907ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  920ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  940ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  905ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  907ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  888ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  902ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  991ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  968ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  927ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  976ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  917ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  926ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2935ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2490ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2505ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2455ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2464ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2475ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2644ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2529ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2592ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2730ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2539ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2543ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 3006ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2614ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2551ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2591ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2564ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2613ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2617ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2769ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3497ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 3170ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 3250ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 3188ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 3417ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 3168ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 3257ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 3091ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 3042ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 3127ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 3027ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2854ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2857ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2843ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2892ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2813ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2866ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 2882ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2850ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2955ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 2636ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 1627ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 1681ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 1706ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 1715ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 1647ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 1699ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 1725ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 1637ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 1724ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 1680ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 1667ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 1691ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 1689ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 1663ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 1652ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 1677ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 1669ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 1634ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 1689ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 3156ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 2894ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 2798ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 3407ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 2792ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 2669ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 2679ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 2646ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 2585ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 2597ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 2635ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 3384ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 3364ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 2717ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 2771ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 2721ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 2610ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 2665ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 2634ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 2973ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
