# 编译基准报告

生成时间：2026-09-30T17:37:25.507Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.0 (26A428)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.8.1
- 微信开发者工具 CLI：-
- Git commit：3ef40d10f83678e866e8bc639c0abae29a394a1d
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 一眼结论

- 编译最快：weapp-vite 原生，平均 900ms。
- 编译最慢：mpx，平均 3373ms。
- 产物最小：weapp-vite 原生，平均 8.7 KB。
- 产物最大：mpx，平均 1161.5 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    900ms |    1.00x |    8.7 KB |    1.00x |   6.3 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu performance |        2 |        5 |   1080ms |    1.20x |  198.2 KB |   22.85x | 195.8 KB |   1.2 KB | 表现居中           |
| weapp-vite + wevu             |        3 |        4 |   1095ms |    1.22x |  179.6 KB |   20.71x | 177.3 KB |   1.1 KB | 表现居中           |
| uni-app vite vue3             |        4 |        2 |   2362ms |    2.62x |  138.9 KB |   16.01x | 136.3 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        5 |        3 |   2877ms |    3.20x |  176.4 KB |   20.33x | 166.0 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        6 |        6 |   3041ms |    3.38x |  224.4 KB |   25.87x | 167.5 KB |  54.6 KB | 表现居中           |
| mpx                           |        7 |        7 |   3373ms |    3.75x | 1161.5 KB |  133.89x | 206.4 KB |   1.0 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    900ms |    1.00x | 是       |
|    2 | weapp-vite + wevu performance |   1080ms |    1.20x | 是       |
|    3 | weapp-vite + wevu             |   1095ms |    1.22x | 是       |
|    4 | uni-app vite vue3             |   2362ms |    2.62x | 是       |
|    5 | uni-app x                     |   2877ms |    3.20x | 是       |
|    6 | taro vue3                     |   3041ms |    3.38x | 是       |
|    7 | mpx                           |   3373ms |    3.75x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app vite vue3             |   138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |     15 |   16.01x |
|    3 | uni-app x                     |   176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |     17 |   20.33x |
|    4 | weapp-vite + wevu             |   179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |     13 |   20.71x |
|    5 | weapp-vite + wevu performance |   198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |     14 |   22.85x |
|    6 | taro vue3                     |   224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |     20 |   25.87x |
|    7 | mpx                           |  1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |     18 |  133.89x |

## 原始明细

| 项目                          | 轮次 | 通过 |   耗时 | 文件数 |    总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | -----: | -----: | --------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   | 1331ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1079ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1091ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1080ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1095ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1071ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1092ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1103ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1093ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1106ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1074ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1097ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1078ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1072ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1064ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1082ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1070ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1085ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1066ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1073ms |     13 |  179.6 KB | 177.3 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1077ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    2 | 是   | 1082ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    3 | 是   | 1135ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    4 | 是   | 1118ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    5 | 是   | 1068ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    6 | 是   | 1070ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    7 | 是   | 1085ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    8 | 是   | 1084ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |    9 | 是   | 1082ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   10 | 是   | 1085ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   11 | 是   | 1077ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   12 | 是   | 1072ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   13 | 是   | 1065ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   14 | 是   | 1060ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   15 | 是   | 1073ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   16 | 是   | 1059ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   17 | 是   | 1059ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   18 | 是   | 1054ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   19 | 是   | 1084ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite + wevu performance |   20 | 是   | 1108ms |     14 |  198.2 KB | 195.8 KB |   1.2 KB |   0.8 KB |    0.5 KB |
| weapp-vite 原生               |    1 | 是   |  865ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  851ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  859ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  858ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  855ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  856ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  863ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  859ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   | 1517ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  979ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  850ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  857ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  890ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  880ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  853ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  851ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  841ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  874ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  874ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  877ms |     12 |    8.7 KB |   6.3 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2380ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2353ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2331ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2316ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2322ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2314ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2981ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2340ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2322ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2342ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2321ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2355ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2379ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2311ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2304ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2289ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2341ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2327ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2319ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2295ms |     15 |  138.9 KB | 136.3 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 2868ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 2910ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2884ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 2921ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2888ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2904ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 2851ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2856ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2921ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2874ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 2883ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2847ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2883ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2852ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2872ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2870ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2870ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 2874ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2849ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2862ms |     17 |  176.4 KB | 166.0 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 3792ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 3349ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 3330ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 3326ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 3369ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 3334ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 3429ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 3337ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 3319ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 3353ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 3429ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 3457ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 3368ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 3364ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 3315ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 3286ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 3357ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 3315ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 3310ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 3323ms |     18 | 1161.5 KB | 206.4 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 3172ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 3007ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 3087ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 3091ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 3216ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 2950ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 3189ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 2737ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 2967ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 3121ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 3068ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 3020ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 2947ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 3082ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 3177ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 3192ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 2963ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 2849ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 2994ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 2997ms |     20 |  224.4 KB | 167.5 KB |  54.6 KB |   0.6 KB |    0.7 KB |
