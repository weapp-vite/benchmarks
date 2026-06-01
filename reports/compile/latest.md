# 编译基准报告

生成时间：2026-05-31T18:13:10.805Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 一眼结论

- 编译最快：weapp-vite 原生，平均 878ms。
- 编译最慢：taro vue3，平均 3501ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：taro vue3，平均 221.3 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 | 平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | -------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    878ms |    1.00x |   8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu performance |        2 |        6 |   1060ms |    1.21x | 192.4 KB |   22.09x | 190.0 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu             |        3 |        5 |   1070ms |    1.22x | 191.5 KB |   21.99x | 189.1 KB |   1.1 KB | 表现居中           |
| mpx                           |        4 |        4 |   1434ms |    1.63x | 174.1 KB |   19.99x | 172.4 KB |   1.0 KB | 表现居中           |
| uni-app vite vue3             |        5 |        2 |   2269ms |    2.58x |  71.4 KB |    8.19x |  68.7 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        6 |        3 |   2881ms |    3.28x |  99.4 KB |   11.42x |  90.8 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        7 |        7 |   3501ms |    3.99x | 221.3 KB |   25.40x | 164.4 KB |  54.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    878ms |    1.00x | 是       |
|    2 | weapp-vite + wevu performance |   1060ms |    1.21x | 是       |
|    3 | weapp-vite + wevu             |   1070ms |    1.22x | 是       |
|    4 | mpx                           |   1434ms |    1.63x | 是       |
|    5 | uni-app vite vue3             |   2269ms |    2.58x | 是       |
|    6 | uni-app x                     |   2881ms |    3.28x | 是       |
|    7 | taro vue3                     |   3501ms |    3.99x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app vite vue3             |    71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |     15 |    8.19x |
|    3 | uni-app x                     |    99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |     17 |   11.42x |
|    4 | mpx                           |   174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |     12 |   19.99x |
|    5 | weapp-vite + wevu             |   191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |     14 |   21.99x |
|    6 | weapp-vite + wevu performance |   192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |     14 |   22.09x |
|    7 | taro vue3                     |   221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |     19 |   25.40x |

## 原始明细

| 项目                          | 轮次 | 通过 |   耗时 | 文件数 |   总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | -----: | -----: | -------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   | 1106ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1056ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1035ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1108ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   |  990ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1020ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1027ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1080ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1128ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1122ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1040ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1090ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1053ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1024ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1103ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1109ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1062ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1087ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1092ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1075ms |     14 | 191.5 KB | 189.1 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1065ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1069ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1040ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1031ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1059ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1058ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1073ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1078ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1014ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1014ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1061ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1096ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1127ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1103ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   |  995ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1072ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1035ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1071ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1066ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1068ms |     14 | 192.4 KB | 190.0 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  875ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  898ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  883ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  848ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  873ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  872ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  902ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  856ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  903ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  915ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   | 1026ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  891ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  835ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  821ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  795ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  815ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  800ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  856ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  977ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  923ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2315ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2370ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2341ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2335ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2247ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2304ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2275ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2231ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2263ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2230ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2236ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2397ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2235ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2217ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2236ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2228ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2186ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2244ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2248ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2235ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 2904ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 2881ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2883ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 2926ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2933ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2865ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2892ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 3058ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2925ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2889ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 2875ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2860ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2814ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2828ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2828ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2838ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2846ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 2874ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2856ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2835ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 1450ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    2 | 是   | 1473ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    3 | 是   | 1384ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    4 | 是   | 1380ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    5 | 是   | 1377ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    6 | 是   | 1421ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    7 | 是   | 1412ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    8 | 是   | 1416ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    9 | 是   | 1443ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   10 | 是   | 1458ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   11 | 是   | 1419ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   12 | 是   | 1458ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   13 | 是   | 1439ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   14 | 是   | 1580ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   15 | 是   | 1458ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   16 | 是   | 1492ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   17 | 是   | 1429ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   18 | 是   | 1412ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   19 | 是   | 1389ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   20 | 是   | 1394ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| taro vue3                     |    1 | 是   | 3283ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 3884ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 3263ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 3402ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 3205ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 3252ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 3230ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 3203ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 3883ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3230ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 3934ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 3182ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 3923ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3298ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 3346ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 3384ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 3944ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 3397ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 3882ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 3887ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
