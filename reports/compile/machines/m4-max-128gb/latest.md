# 编译基准报告

生成时间：2026-09-30T23:03:39.778Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.0 (26A428)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.8.1
- 微信开发者工具 CLI：-
- Git commit：1923b5d2f69cd5842dfe74e7d9bd8fb44b6d81d2
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 一眼结论

- 编译最快：weapp-vite 原生，平均 934ms。
- 编译最慢：mpx，平均 3256ms。
- 产物最小：weapp-vite 原生，平均 8.8 KB。
- 产物最大：mpx，平均 1161.9 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |    934ms |    1.00x |    8.8 KB |    1.00x |   6.4 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu             |        2 |        4 |   1153ms |    1.23x |  179.8 KB |   20.54x | 177.4 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu performance |        3 |        5 |   1161ms |    1.24x |  198.3 KB |   22.66x | 195.9 KB |   1.1 KB | 表现居中           |
| uni-app vite vue3             |        4 |        2 |   2395ms |    2.56x |  139.1 KB |   15.89x | 136.4 KB |   0.9 KB | 表现居中           |
| taro vue3                     |        5 |        6 |   2502ms |    2.68x |  224.5 KB |   25.65x | 167.6 KB |  54.6 KB | 表现居中           |
| uni-app x                     |        6 |        3 |   2928ms |    3.13x |  176.5 KB |   20.17x | 166.1 KB |   1.5 KB | 表现居中           |
| mpx                           |        7 |        7 |   3256ms |    3.49x | 1161.9 KB |  132.76x | 206.5 KB |   1.0 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |    934ms |    1.00x | 是       |
|    2 | weapp-vite + wevu             |   1153ms |    1.23x | 是       |
|    3 | weapp-vite + wevu performance |   1161ms |    1.24x | 是       |
|    4 | uni-app vite vue3             |   2395ms |    2.56x | 是       |
|    5 | taro vue3                     |   2502ms |    2.68x | 是       |
|    6 | uni-app x                     |   2928ms |    3.13x | 是       |
|    7 | mpx                           |   3256ms |    3.49x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app vite vue3             |   139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |     15 |   15.89x |
|    3 | uni-app x                     |   176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |     17 |   20.17x |
|    4 | weapp-vite + wevu             |   179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |     13 |   20.54x |
|    5 | weapp-vite + wevu performance |   198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |     14 |   22.66x |
|    6 | taro vue3                     |   224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |     20 |   25.65x |
|    7 | mpx                           |  1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |     18 |  132.76x |

## 原始明细

| 项目                          | 轮次 | 通过 |   耗时 | 文件数 |    总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | -----: | -----: | --------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   | 1166ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   | 1123ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   | 1143ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   | 1150ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   | 1136ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   | 1134ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   | 1169ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   | 1187ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   | 1135ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   | 1191ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   | 1271ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   | 1170ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   | 1143ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   | 1135ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   | 1143ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   | 1136ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   | 1127ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   | 1131ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   | 1140ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   | 1137ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   | 1131ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    2 | 是   | 1123ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    3 | 是   | 1133ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    4 | 是   | 1135ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    5 | 是   | 1127ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    6 | 是   | 1123ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    7 | 是   | 1119ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    8 | 是   | 1143ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    9 | 是   | 1189ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   10 | 是   | 1256ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   11 | 是   | 1221ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   12 | 是   | 1198ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   13 | 是   | 1159ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   14 | 是   | 1163ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   15 | 是   | 1153ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   16 | 是   | 1156ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   17 | 是   | 1185ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   18 | 是   | 1180ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   19 | 是   | 1179ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   20 | 是   | 1155ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    1 | 是   |  923ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  911ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  914ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  931ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  992ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  935ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  923ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  965ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  949ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  951ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  931ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  928ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  925ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  931ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  926ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  928ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  928ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  923ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  939ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  933ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   | 2725ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   | 2420ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   | 2422ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   | 2391ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   | 2470ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   | 2402ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   | 2365ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   | 2400ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   | 2346ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   | 2357ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   | 2376ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   | 2344ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   | 2365ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   | 2360ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   | 2336ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   | 2346ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   | 2413ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   | 2355ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   | 2355ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   | 2353ms |     15 |  139.1 KB | 136.4 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 3072ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    2 | 是   | 3247ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    3 | 是   | 2952ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    4 | 是   | 2936ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    5 | 是   | 2931ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    6 | 是   | 2973ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    7 | 是   | 3050ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    8 | 是   | 2957ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |    9 | 是   | 2872ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   10 | 是   | 2939ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   11 | 是   | 2903ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   12 | 是   | 2855ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   13 | 是   | 2842ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   14 | 是   | 2864ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   15 | 是   | 2864ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   16 | 是   | 2841ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   17 | 是   | 2840ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   18 | 是   | 2861ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 2910ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 2849ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.8 KB |    1.0 KB |
| mpx                           |    1 | 是   | 3920ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 3237ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 3196ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 3206ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 3210ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 3235ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 3234ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 3315ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 3199ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 3218ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 3314ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 3180ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 3182ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 3171ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 3175ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 3190ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 3187ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 3316ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 3241ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 3197ms |     18 | 1161.9 KB | 206.5 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 2844ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 2501ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   | 2519ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 2674ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 2455ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 2441ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 2411ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   | 2407ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 2522ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 2504ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   | 2472ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   | 2414ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 2459ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 2570ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 2416ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 2620ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 2490ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 2391ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 2441ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 2490ms |     20 |  224.5 KB | 167.6 KB |  54.6 KB |   0.6 KB |    0.7 KB |

## 采样来源

- Run ID：ed3908e7-8aa6-4d06-aa98-40f13f793f2b；步骤：compile
- 采集区间：2026-09-30T22:58:52.829Z 至 2026-09-30T23:03:39.778Z
- 输入指纹：a6f9c5f6e3cc8d530ef240ed85fe650ef4862057fb40230bfe7d24d864e42a48
- lockfile SHA-256：8a5d8760666f2a66454271ee0768f65317f03f0c39b8cfdbedf7d898a549fec9
- runner：0.0.0；源码摘要：8465f9de41f2c3b17f21457f7b4e25bb54d5e53920795eae29ad4cac3456f227
- 工作区有修改：true；被测输入有修改：false
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
