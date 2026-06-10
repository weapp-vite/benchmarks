# 编译基准报告

生成时间：2026-06-10T01:52:36.573Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.14.1；pnpm：10.33.4
- 微信开发者工具 CLI：-
- Git commit：f72e7673f575286294866cd166d5a60b86927a7b
- weapp-vite submodule：fa75b2ff90b4fdf005ac510245812cab8c19a4cb

## 一眼结论

- 编译最快：weapp-vite 原生，平均 952ms。
- 编译最慢：taro vue3，平均 3915ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：mpx，平均 1146.1 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    952ms |    1.00x |    8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu performance |        2 |        5 |   1159ms |    1.22x |  197.0 KB |   22.62x | 194.6 KB |   1.2 KB | 表现居中           |
| weapp-vite + wevu             |        3 |        4 |   1165ms |    1.22x |  196.1 KB |   22.51x | 193.7 KB |   1.1 KB | 表现居中           |
| mpx                           |        4 |        7 |   2022ms |    2.12x | 1146.1 KB |  131.59x | 205.9 KB |   1.0 KB | 存在明显短板       |
| uni-app vite vue3             |        5 |        2 |   2354ms |    2.47x |   71.4 KB |    8.19x |  68.7 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        6 |        3 |   2968ms |    3.12x |   99.4 KB |   11.42x |  90.8 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        7 |        6 |   3915ms |    4.11x |  221.3 KB |   25.40x | 164.4 KB |  54.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    952ms |    1.00x | 是       |
|    2 | weapp-vite + wevu performance |   1159ms |    1.22x | 是       |
|    3 | weapp-vite + wevu             |   1165ms |    1.22x | 是       |
|    4 | mpx                           |   2022ms |    2.12x | 是       |
|    5 | uni-app vite vue3             |   2354ms |    2.47x | 是       |
|    6 | uni-app x                     |   2968ms |    3.12x | 是       |
|    7 | taro vue3                     |   3915ms |    4.11x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app vite vue3             |    71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |     15 |    8.19x |
|    3 | uni-app x                     |    99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |     17 |   11.42x |
|    4 | weapp-vite + wevu             |   196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |     14 |   22.51x |
|    5 | weapp-vite + wevu performance |   197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |     14 |   22.62x |
|    6 | taro vue3                     |   221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |     19 |   25.40x |
|    7 | mpx                           |  1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |     18 |  131.59x |

## 原始明细

| 项目                          | 轮次 | 通过 |   耗时 | 文件数 |    总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | -----: | -----: | --------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   | 1468ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1086ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1145ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1105ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1137ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1131ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1137ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1112ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1098ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1136ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1115ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1136ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1184ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1169ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1184ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1221ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1133ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1256ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1176ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1164ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1215ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1397ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1259ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1161ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1118ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1131ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1113ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1118ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1139ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1139ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1126ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1121ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1122ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1130ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1126ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1178ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1179ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1129ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1122ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1148ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  989ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  948ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  973ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  969ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  932ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  958ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  931ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  957ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  957ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  984ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  954ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  972ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  920ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  942ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  944ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  940ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  942ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  922ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  938ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  969ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2793ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2289ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2321ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2259ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2300ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2282ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2259ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2252ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2272ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2265ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2258ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2339ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2282ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2261ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2742ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2585ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2353ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2305ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2355ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2306ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3096ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 3016ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2953ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 3003ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2975ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2970ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2920ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2997ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2949ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2914ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 2929ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2939ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 3027ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2900ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2942ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2954ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2976ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 3042ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2940ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2921ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 6918ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 1817ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 1754ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 1757ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 1843ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 1723ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 1718ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 1722ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 1732ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 1820ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 1735ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 1750ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 1764ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 1816ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 1829ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 1714ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 1780ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 1770ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 1746ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 1737ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 4357ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 3282ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 3952ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 3931ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 4027ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 4060ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 4029ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 3520ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 3979ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3577ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 3975ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 3965ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 3993ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3981ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 3893ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 4058ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 4028ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 3734ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 3956ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 4010ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
