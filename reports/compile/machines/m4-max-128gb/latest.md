# 编译基准报告

生成时间：2026-07-14T06:47:33.966Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：11.13.0
- 微信开发者工具 CLI：-
- Git commit：026fe258b63b15a9b9d51c4635348ffeebc3dc41
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22

## 一眼结论

- 编译最快：weapp-vite 原生，平均 936ms。
- 编译最慢：taro vue3，平均 4075ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：mpx，平均 1137.6 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    936ms |    1.00x |    8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu             |        2 |        4 |   1065ms |    1.14x |  198.9 KB |   22.93x | 196.5 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu performance |        3 |        5 |   1068ms |    1.14x |  199.8 KB |   23.04x | 197.4 KB |   1.2 KB | 表现居中           |
| mpx                           |        4 |        7 |   2042ms |    2.18x | 1137.6 KB |  131.14x | 203.8 KB |   1.0 KB | 存在明显短板       |
| uni-app vite vue3             |        5 |        3 |   2563ms |    2.74x |  132.3 KB |   15.25x | 129.7 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        6 |        2 |   3169ms |    3.39x |   99.9 KB |   11.51x |  91.2 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        7 |        6 |   4075ms |    4.35x |  221.4 KB |   25.53x | 164.6 KB |  54.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    936ms |    1.00x | 是       |
|    2 | weapp-vite + wevu             |   1065ms |    1.14x | 是       |
|    3 | weapp-vite + wevu performance |   1068ms |    1.14x | 是       |
|    4 | mpx                           |   2042ms |    2.18x | 是       |
|    5 | uni-app vite vue3             |   2563ms |    2.74x | 是       |
|    6 | uni-app x                     |   3169ms |    3.39x | 是       |
|    7 | taro vue3                     |   4075ms |    4.35x | 是       |

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
| weapp-vite + wevu             |    1 | 是   | 1350ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1025ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1072ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1024ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1023ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1037ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1067ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1029ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1051ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1036ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1049ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1044ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1041ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1034ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1048ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1109ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1055ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1052ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1103ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1052ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1098ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1052ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1110ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1099ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1075ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1080ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1071ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1061ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1080ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1081ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1060ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1069ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1100ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1050ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1041ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1040ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1051ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1061ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1026ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1047ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  975ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  932ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  946ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  939ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  909ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  934ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  924ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  949ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  913ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  911ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  923ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  912ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  934ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  931ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  922ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  918ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   | 1027ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  937ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  953ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  934ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2487ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2552ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2572ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2524ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2449ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2484ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2448ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2502ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2572ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2483ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2502ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2529ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2484ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2462ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2491ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2849ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2682ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2840ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2551ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2790ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3058ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 2897ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2766ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 2817ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 3055ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 4287ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2852ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2909ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 3611ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 4358ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 3051ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2943ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 3062ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 3116ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2854ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2977ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 3855ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 3166ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2857ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2893ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 2636ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 1758ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 1731ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 1702ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 1770ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 1758ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 2949ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 2397ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 1932ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 1947ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 1860ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 1914ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 1909ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 1867ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 1790ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 1783ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 1750ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 1974ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 2843ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 2565ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 4123ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 4065ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 4281ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 4094ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 4104ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 4927ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 3669ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 3452ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 5081ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3613ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 3794ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 4173ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 3824ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3995ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 4277ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 4539ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 4350ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 3739ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 3824ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 3578ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
