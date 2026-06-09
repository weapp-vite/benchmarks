# 编译基准报告

生成时间：2026-06-09T09:33:28.445Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 一眼结论

- 编译最快：weapp-vite 原生，平均 872ms。
- 编译最慢：uni-app x，平均 2879ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：mpx，平均 1146.1 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    872ms |    1.00x |    8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu performance |        2 |        5 |   1053ms |    1.21x |  197.0 KB |   22.62x | 194.6 KB |   1.2 KB | 表现居中           |
| weapp-vite + wevu             |        3 |        4 |   1083ms |    1.24x |  196.1 KB |   22.51x | 193.7 KB |   1.1 KB | 表现居中           |
| mpx                           |        4 |        7 |   1683ms |    1.93x | 1146.1 KB |  131.59x | 205.9 KB |   1.0 KB | 存在明显短板       |
| uni-app vite vue3             |        5 |        2 |   2231ms |    2.56x |   71.4 KB |    8.19x |  68.7 KB |   0.9 KB | 表现居中           |
| taro vue3                     |        6 |        6 |   2598ms |    2.98x |  221.3 KB |   25.40x | 164.4 KB |  54.5 KB | 表现居中           |
| uni-app x                     |        7 |        3 |   2879ms |    3.30x |   99.4 KB |   11.42x |  90.8 KB |   1.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    872ms |    1.00x | 是       |
|    2 | weapp-vite + wevu performance |   1053ms |    1.21x | 是       |
|    3 | weapp-vite + wevu             |   1083ms |    1.24x | 是       |
|    4 | mpx                           |   1683ms |    1.93x | 是       |
|    5 | uni-app vite vue3             |   2231ms |    2.56x | 是       |
|    6 | taro vue3                     |   2598ms |    2.98x | 是       |
|    7 | uni-app x                     |   2879ms |    3.30x | 是       |

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
| weapp-vite + wevu             |    1 | 是   | 1249ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1140ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1100ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1112ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1077ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1118ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1077ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1051ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1065ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1021ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1048ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1045ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1081ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1047ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1038ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1096ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1051ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1076ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1097ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1062ms |     14 |  196.1 KB | 193.7 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1037ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1033ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1035ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1042ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1061ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1043ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1066ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1074ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1063ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1035ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1035ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1120ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1067ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1041ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1068ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1072ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1041ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1037ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1039ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1041ms |     14 |  197.0 KB | 194.6 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  879ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  855ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  855ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  877ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  907ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  869ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  885ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  861ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  855ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  877ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  892ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  855ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  873ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  860ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  875ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  868ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  897ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  851ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  885ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  854ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2295ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2192ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2210ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2218ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2219ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2242ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2222ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2183ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2189ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2191ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2200ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2212ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2474ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2305ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2248ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2183ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2197ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2206ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2223ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2212ms |     15 |   71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 2975ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 2816ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2829ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 2836ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2851ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2882ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2840ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2853ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2829ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2849ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 2855ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2885ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2864ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2828ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2840ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2842ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2862ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 3223ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2983ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2836ms |     17 |   99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 1692ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 1671ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 1670ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 1636ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 1614ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 1766ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 1954ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 1724ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 1647ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 1611ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 1657ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 1687ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 1696ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 1724ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 1639ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 1647ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 1626ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 1614ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 1691ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 1697ms |     18 | 1146.1 KB | 205.9 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 2638ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 2490ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 2627ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 2593ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 2568ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 2893ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 2669ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 2670ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 2564ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 2593ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 2503ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 2584ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 2576ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 2533ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 2565ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 2563ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 2574ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 2595ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 2550ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 2620ms |     19 |  221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
