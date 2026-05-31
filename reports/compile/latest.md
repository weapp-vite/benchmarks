# 编译基准报告

生成时间：2026-05-31T04:20:26.688Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 一眼结论

- 编译最快：weapp-vite 原生，平均 964ms。
- 编译最慢：taro vue3，平均 3189ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：taro vue3，平均 221.3 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 | 平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | -------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    964ms |    1.00x |   8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu performance |        2 |        6 |   1235ms |    1.28x | 192.1 KB |   22.06x | 189.7 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu             |        3 |        5 |   1274ms |    1.32x | 190.9 KB |   21.91x | 188.5 KB |   1.1 KB | 表现居中           |
| mpx                           |        4 |        4 |   1667ms |    1.73x | 174.1 KB |   19.99x | 172.4 KB |   1.0 KB | 表现居中           |
| uni-app vite vue3             |        5 |        2 |   2473ms |    2.57x |  71.4 KB |    8.19x |  68.7 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        6 |        3 |   3176ms |    3.29x |  99.4 KB |   11.42x |  90.8 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        7 |        7 |   3189ms |    3.31x | 221.3 KB |   25.40x | 164.4 KB |  54.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    964ms |    1.00x | 是       |
|    2 | weapp-vite + wevu performance |   1235ms |    1.28x | 是       |
|    3 | weapp-vite + wevu             |   1274ms |    1.32x | 是       |
|    4 | mpx                           |   1667ms |    1.73x | 是       |
|    5 | uni-app vite vue3             |   2473ms |    2.57x | 是       |
|    6 | uni-app x                     |   3176ms |    3.29x | 是       |
|    7 | taro vue3                     |   3189ms |    3.31x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app vite vue3             |    71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |     15 |    8.19x |
|    3 | uni-app x                     |    99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |     17 |   11.42x |
|    4 | mpx                           |   174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |     12 |   19.99x |
|    5 | weapp-vite + wevu             |   190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |     14 |   21.91x |
|    6 | weapp-vite + wevu performance |   192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |     14 |   22.06x |
|    7 | taro vue3                     |   221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |     19 |   25.40x |

## 原始明细

| 项目                          | 轮次 | 通过 |   耗时 | 文件数 |   总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | -----: | -----: | -------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   | 1337ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1266ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1253ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1212ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1362ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1339ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1218ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1266ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1326ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1279ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1239ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1242ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1337ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1245ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1216ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1255ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1271ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1288ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1228ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1310ms |     14 | 190.9 KB | 188.5 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1285ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1261ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1327ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1279ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1252ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1275ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1284ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1289ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1194ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1307ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1172ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1201ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1164ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1205ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1222ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1186ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1196ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1206ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1204ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1185ms |     14 | 192.1 KB | 189.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  957ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  966ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  970ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  946ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  966ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  933ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  999ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  994ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  962ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  974ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  960ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  959ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  935ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  951ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  949ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  982ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   | 1010ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  968ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  956ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  940ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2807ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2434ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2524ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2557ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2543ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2478ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2507ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2394ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2385ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2487ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2455ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2446ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2408ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2459ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2440ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2418ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2430ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2443ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2420ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2420ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3327ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 3162ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 3232ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 3149ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 3172ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 3139ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 3179ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 3162ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 3193ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 3172ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 3121ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 3131ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 3135ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 3145ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 3149ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 3179ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 3195ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 3220ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 3207ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 3145ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 2026ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    2 | 是   | 1704ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    3 | 是   | 1654ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    4 | 是   | 1653ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    5 | 是   | 1662ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    6 | 是   | 1685ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    7 | 是   | 1631ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    8 | 是   | 1676ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    9 | 是   | 1612ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   10 | 是   | 1668ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   11 | 是   | 1620ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   12 | 是   | 1650ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   13 | 是   | 1659ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   14 | 是   | 1664ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   15 | 是   | 1609ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   16 | 是   | 1680ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   17 | 是   | 1610ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   18 | 是   | 1603ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   19 | 是   | 1668ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   20 | 是   | 1614ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| taro vue3                     |    1 | 是   | 4161ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 3063ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 3668ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 2967ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 3100ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 2992ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 3023ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 2970ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 3027ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3207ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 3156ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 3048ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 3182ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3015ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 3094ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 2993ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 3088ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 3612ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 3144ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 3275ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
