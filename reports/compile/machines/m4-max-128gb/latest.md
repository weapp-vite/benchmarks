# 编译基准报告

生成时间：2026-07-14T11:17:23.310Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：11.13.0
- 微信开发者工具 CLI：-
- Git commit：82b2553795a40325f25052ca187e93001a2c47f8
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22

## 一眼结论

- 编译最快：weapp-vite 原生，平均 1022ms。
- 编译最慢：taro vue3，平均 3437ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：mpx，平均 1137.6 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |   1022ms |    1.00x |    8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu             |        2 |        4 |   1138ms |    1.11x |  198.9 KB |   22.93x | 196.5 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu performance |        3 |        5 |   1166ms |    1.14x |  199.8 KB |   23.04x | 197.4 KB |   1.2 KB | 表现居中           |
| mpx                           |        4 |        7 |   1721ms |    1.68x | 1137.6 KB |  131.14x | 203.8 KB |   1.0 KB | 存在明显短板       |
| uni-app vite vue3             |        5 |        3 |   2554ms |    2.50x |  132.3 KB |   15.25x | 129.7 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        6 |        2 |   2878ms |    2.82x |   99.9 KB |   11.51x |  91.2 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        7 |        6 |   3437ms |    3.36x |  221.4 KB |   25.53x | 164.6 KB |  54.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |   1022ms |    1.00x | 是       |
|    2 | weapp-vite + wevu             |   1138ms |    1.11x | 是       |
|    3 | weapp-vite + wevu performance |   1166ms |    1.14x | 是       |
|    4 | mpx                           |   1721ms |    1.68x | 是       |
|    5 | uni-app vite vue3             |   2554ms |    2.50x | 是       |
|    6 | uni-app x                     |   2878ms |    2.82x | 是       |
|    7 | taro vue3                     |   3437ms |    3.36x | 是       |

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
| weapp-vite + wevu             |    1 | 是   | 1582ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1059ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1020ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1030ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1048ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1114ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1041ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1070ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1066ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1072ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1042ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1053ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1040ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1531ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1373ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1122ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1080ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1099ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1161ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1151ms |     14 |  198.9 KB | 196.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1096ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1127ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1168ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1149ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1135ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1107ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1174ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1206ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1167ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1187ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1206ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1165ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1203ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1189ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1119ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1192ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1203ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1244ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1119ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1161ms |     14 |  199.8 KB | 197.4 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   | 1041ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   | 1040ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   | 1056ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  975ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   | 1036ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   | 1035ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  976ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   | 1045ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  976ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   | 1080ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   | 1044ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   | 1018ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   | 1094ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   | 1010ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   | 1068ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  997ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   | 1066ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  953ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  981ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  946ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 3363ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2556ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2557ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2662ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2630ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2514ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2582ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2492ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2465ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2456ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2472ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2497ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2449ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2485ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2443ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2519ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2503ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2493ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2459ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2481ms |     15 |  132.3 KB | 129.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3442ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 2874ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2840ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 3201ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2892ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2860ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2909ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2817ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2848ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2808ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 2793ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2844ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2842ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2807ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2799ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2814ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2789ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 2797ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2808ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2766ms |     17 |   99.9 KB |  91.2 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 2872ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 1654ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 1594ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 1610ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 1612ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 1593ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 1597ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 1604ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 1638ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 1644ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 1627ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 1642ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 1656ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 1640ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 1634ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 1685ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 1807ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 1740ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 1784ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 1793ms |     18 | 1137.6 KB | 203.8 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 4115ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 3369ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 3508ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 3536ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 3423ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 3436ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 3365ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 3129ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 3482ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3168ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 3487ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 3122ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 3473ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3442ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 3532ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 3425ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 3444ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 3455ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 3418ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 3404ms |     20 |  221.4 KB | 164.6 KB |  54.5 KB |   0.6 KB |    0.7 KB |
