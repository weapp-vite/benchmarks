# 编译基准报告

生成时间：2026-07-13T11:10:54.876Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：10.33.4
- 微信开发者工具 CLI：-
- Git commit：e89e08dd979bff187d98def574d5dfef16011129
- weapp-vite submodule：566e5184b3a818155a8e7041b3e03ba1d44045de

## 一眼结论

- 编译最快：weapp-vite 原生，平均 913ms。
- 编译最慢：taro vue3，平均 3516ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：mpx，平均 1137.6 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    913ms |    1.00x |    8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu             |        2 |        4 |   1006ms |    1.10x |  198.9 KB |   22.93x | 196.5 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu performance |        3 |        5 |   1009ms |    1.11x |  199.8 KB |   23.04x | 197.4 KB |   1.2 KB | 表现居中           |
| mpx                           |        4 |        7 |   1803ms |    1.97x | 1137.6 KB |  131.14x | 203.8 KB |   1.0 KB | 存在明显短板       |
| uni-app vite vue3             |        5 |        3 |   2450ms |    2.68x |  132.3 KB |   15.25x | 129.7 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        6 |        2 |   2804ms |    3.07x |   99.9 KB |   11.51x |  91.2 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        7 |        6 |   3516ms |    3.85x |  221.4 KB |   25.53x | 164.6 KB |  54.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    913ms |    1.00x | 是       |
|    2 | weapp-vite + wevu             |   1006ms |    1.10x | 是       |
|    3 | weapp-vite + wevu performance |   1009ms |    1.11x | 是       |
|    4 | mpx                           |   1803ms |    1.97x | 是       |
|    5 | uni-app vite vue3             |   2450ms |    2.68x | 是       |
|    6 | uni-app x                     |   2804ms |    3.07x | 是       |
|    7 | taro vue3                     |   3516ms |    3.85x | 是       |

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
| weapp-vite + wevu             |    1 | 是   | 1039ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1011ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1002ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1024ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1016ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1031ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1006ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1001ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   |  987ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   |  991ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   |  993ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1023ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   |  982ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1018ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   |  984ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1010ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   |  987ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1020ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   |  987ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1007ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1015ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1021ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   |  997ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1033ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   |  997ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1017ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   |  992ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1003ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1003ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1067ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   |  987ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1002ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   |  980ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1018ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   |  998ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1000ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1014ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1022ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1000ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1015ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  878ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  892ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  879ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  888ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  882ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  888ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  883ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  877ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  920ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  972ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  959ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  894ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  907ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  892ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  903ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   | 1000ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  954ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  934ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  931ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  931ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2985ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2506ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2489ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2446ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2412ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2391ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2410ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2404ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2398ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2392ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2386ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2423ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2428ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2387ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2430ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2419ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2399ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2403ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2416ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2467ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3014ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 2740ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2783ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 2758ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2799ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2733ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2729ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2767ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2771ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2811ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 2800ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2939ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2796ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2799ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2791ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2837ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2794ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 2840ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2773ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2808ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 2757ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 1724ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 1648ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 1802ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 1842ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 1764ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 1744ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 1753ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 1670ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 1721ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 1696ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 1692ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 1731ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 1656ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 1791ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 1837ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 1873ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 1827ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 1824ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 1712ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 4170ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 3388ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 3448ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 3357ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 3426ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 3546ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 3548ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 3589ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 3150ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3423ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 3493ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 3737ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 3501ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3647ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 3568ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 3570ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 3426ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 3525ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 3375ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 3433ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
