# 编译基准报告

生成时间：2026-06-02T08:20:20.261Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 一眼结论

- 编译最快：weapp-vite 原生，平均 842ms。
- 编译最慢：taro vue3，平均 2992ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：taro vue3，平均 221.3 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 | 平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | -------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    842ms |    1.00x |   8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu performance |        2 |        6 |   1062ms |    1.26x | 193.2 KB |   22.18x | 190.7 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu             |        3 |        5 |   1114ms |    1.32x | 192.2 KB |   22.07x | 189.8 KB |   1.1 KB | 表现居中           |
| mpx                           |        4 |        4 |   1414ms |    1.68x | 174.1 KB |   19.99x | 172.4 KB |   1.0 KB | 表现居中           |
| uni-app vite vue3             |        5 |        2 |   2243ms |    2.66x |  71.4 KB |    8.19x |  68.7 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        6 |        3 |   2902ms |    3.45x |  99.4 KB |   11.42x |  90.8 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        7 |        7 |   2992ms |    3.55x | 221.3 KB |   25.40x | 164.4 KB |  54.5 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    842ms |    1.00x | 是       |
|    2 | weapp-vite + wevu performance |   1062ms |    1.26x | 是       |
|    3 | weapp-vite + wevu             |   1114ms |    1.32x | 是       |
|    4 | mpx                           |   1414ms |    1.68x | 是       |
|    5 | uni-app vite vue3             |   2243ms |    2.66x | 是       |
|    6 | uni-app x                     |   2902ms |    3.45x | 是       |
|    7 | taro vue3                     |   2992ms |    3.55x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app vite vue3             |    71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |     15 |    8.19x |
|    3 | uni-app x                     |    99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |     17 |   11.42x |
|    4 | mpx                           |   174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |     12 |   19.99x |
|    5 | weapp-vite + wevu             |   192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |     14 |   22.07x |
|    6 | weapp-vite + wevu performance |   193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |     14 |   22.18x |
|    7 | taro vue3                     |   221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |     19 |   25.40x |

## 原始明细

| 项目                          | 轮次 | 通过 |   耗时 | 文件数 |   总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | -----: | -----: | -------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   | 1465ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1350ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1137ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1080ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1085ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1122ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1134ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1114ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1085ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1131ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1051ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1032ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1039ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1036ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1059ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1078ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1021ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1033ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1097ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1126ms |     14 | 192.2 KB | 189.8 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1070ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1125ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1174ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1096ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1108ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1041ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1037ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1040ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1029ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1037ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1047ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1020ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1001ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1060ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1080ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1149ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1046ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1023ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1030ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1035ms |     14 | 193.2 KB | 190.7 KB |   1.1 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  841ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  884ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  854ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  855ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  814ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  842ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  833ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  844ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  848ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  848ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  857ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  828ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  834ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  823ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  822ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  846ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  864ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  847ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  839ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  807ms |     12 |   8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2529ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2252ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2167ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2180ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2294ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2169ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2230ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2208ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2193ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2234ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2187ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2206ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2189ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2202ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2244ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2199ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2384ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2294ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2282ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2225ms |     15 |  71.4 KB |  68.7 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3089ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 2908ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2973ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 2920ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2871ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2885ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2888ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2863ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2959ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2862ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 3012ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2885ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2881ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2894ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2862ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2929ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2849ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 2832ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2862ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2809ms |     17 |  99.4 KB |  90.8 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 1688ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    2 | 是   | 1412ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    3 | 是   | 1370ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    4 | 是   | 1364ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    5 | 是   | 1388ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    6 | 是   | 1366ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    7 | 是   | 1399ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    8 | 是   | 1371ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |    9 | 是   | 1409ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   10 | 是   | 1433ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   11 | 是   | 1364ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   12 | 是   | 1367ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   13 | 是   | 1464ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   14 | 是   | 1384ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   15 | 是   | 1379ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   16 | 是   | 1550ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   17 | 是   | 1359ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   18 | 是   | 1379ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   19 | 是   | 1359ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| mpx                           |   20 | 是   | 1476ms |     12 | 174.1 KB | 172.4 KB |   1.0 KB |   0.6 KB |    0.2 KB |
| taro vue3                     |    1 | 是   | 3287ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 2762ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 2540ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 2902ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 3020ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 2581ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 3268ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 3249ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 2832ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3127ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 2977ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 2757ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 2646ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3011ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 3137ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 3279ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 3361ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 3412ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 2717ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 2969ms |     19 | 221.3 KB | 164.4 KB |  54.5 KB |   0.6 KB |    0.7 KB |
