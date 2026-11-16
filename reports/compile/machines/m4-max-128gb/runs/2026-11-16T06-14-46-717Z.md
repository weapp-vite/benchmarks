# 编译基准报告

生成时间：2026-11-16T06:14:46.717Z
采样次数：20 次，报告中的平均耗时由有效样本计算。

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.2 (26B123)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.21.0
- 微信开发者工具 CLI：-
- Git commit：ca8e16f1e616d7b88074ff84d613b7b9ba9249c7
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 一眼结论

- 编译最快：weapp-vite 原生，平均 4864ms。
- 编译最慢：mpx，平均 24238ms。
- 产物最小：weapp-vite 原生，平均 8.8 KB。
- 产物最大：mpx，平均 1163.7 KB。
- 所有项目构建样本完整，均已纳入排名。

## 项目优劣速览

| 项目                          | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 |  平均体积 | 大于最小 |  JS 大小 | 模板大小 | 判断               |
| ----------------------------- | -------: | -------: | -------: | -------: | --------: | -------: | -------: | -------: | ------------------ |
| weapp-vite 原生               |        1 |        1 |   4864ms |    1.00x |    8.8 KB |    1.00x |   6.4 KB |   1.2 KB | 编译最快且体积靠前 |
| weapp-vite + wevu             |        2 |        4 |   6511ms |    1.34x |  179.8 KB |   20.54x | 177.4 KB |   1.1 KB | 表现居中           |
| weapp-vite + wevu performance |        3 |        5 |   6616ms |    1.36x |  198.3 KB |   22.66x | 195.9 KB |   1.1 KB | 表现居中           |
| uni-app vite vue3             |        4 |        2 |   7100ms |    1.46x |  139.2 KB |   15.91x | 136.6 KB |   0.9 KB | 表现居中           |
| uni-app x                     |        5 |        3 |   8318ms |    1.71x |  176.5 KB |   20.17x | 166.1 KB |   1.5 KB | 表现居中           |
| taro vue3                     |        6 |        6 |  10687ms |    2.20x |  228.0 KB |   26.05x | 170.9 KB |  54.8 KB | 表现居中           |
| mpx                           |        7 |        7 |  24238ms |    4.98x | 1163.7 KB |  132.97x | 206.3 KB |   1.0 KB | 存在明显短板       |

## 编译耗时排名

| 排名 | 项目                          | 平均耗时 | 相对最快 | 构建通过 |
| ---: | ----------------------------- | -------: | -------: | -------- |
|    1 | weapp-vite 原生               |   4864ms |    1.00x | 是       |
|    2 | weapp-vite + wevu             |   6511ms |    1.34x | 是       |
|    3 | weapp-vite + wevu performance |   6616ms |    1.36x | 是       |
|    4 | uni-app vite vue3             |   7100ms |    1.46x | 是       |
|    5 | uni-app x                     |   8318ms |    1.71x | 是       |
|    6 | taro vue3                     |  10687ms |    2.20x | 是       |
|    7 | mpx                           |  24238ms |    4.98x | 是       |

## 产物体积排名

| 排名 | 项目                          | 平均总大小 |  JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |
| ---: | ----------------------------- | ---------: | -------: | -------: | -------: | -----: | -------: |
|    1 | weapp-vite 原生               |     8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |     12 |    1.00x |
|    2 | uni-app vite vue3             |   139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |     15 |   15.91x |
|    3 | uni-app x                     |   176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |     17 |   20.17x |
|    4 | weapp-vite + wevu             |   179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |     13 |   20.54x |
|    5 | weapp-vite + wevu performance |   198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |     14 |   22.66x |
|    6 | taro vue3                     |   228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |     20 |   26.05x |
|    7 | mpx                           |  1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |     18 |  132.97x |

## 原始明细

| 项目                          | 轮次 | 通过 |    耗时 | 文件数 |    总大小 |  JS 大小 | 模板大小 | 样式大小 | JSON 大小 |
| ----------------------------- | ---: | ---- | ------: | -----: | --------: | -------: | -------: | -------: | --------: |
| weapp-vite + wevu             |    1 | 是   |  6730ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    2 | 是   |  5590ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    3 | 是   |  6854ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    4 | 是   |  7313ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    5 | 是   |  6771ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    6 | 是   |  8952ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    7 | 是   |  6079ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    8 | 是   |  7065ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |    9 | 是   |  5627ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   10 | 是   |  5758ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   11 | 是   |  4589ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   12 | 是   |  5662ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   13 | 是   |  6017ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   14 | 是   |  4874ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   15 | 是   |  5546ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   16 | 是   |  6725ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   17 | 是   |  7234ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   18 | 是   |  7968ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   19 | 是   |  8623ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu             |   20 | 是   |  6249ms |     13 |  179.8 KB | 177.4 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    1 | 是   |  7729ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    2 | 是   |  7517ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    3 | 是   |  7172ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    4 | 是   |  6900ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    5 | 是   |  7360ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    6 | 是   |  7725ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    7 | 是   |  7965ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    8 | 是   |  7467ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |    9 | 是   |  5737ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   10 | 是   |  5974ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   11 | 是   |  5998ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   12 | 是   |  5329ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   13 | 是   |  5158ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   14 | 是   |  5267ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   15 | 是   |  5554ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   16 | 是   |  5489ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   17 | 是   |  6617ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   18 | 是   |  8227ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   19 | 是   |  6411ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite + wevu performance |   20 | 是   |  6718ms |     14 |  198.3 KB | 195.9 KB |   1.1 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    1 | 是   |  4986ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    2 | 是   |  4618ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    3 | 是   |  4503ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    4 | 是   |  5524ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    5 | 是   |  4731ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    6 | 是   |  4850ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    7 | 是   |  5257ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    8 | 是   |  4999ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |    9 | 是   |  4773ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   10 | 是   |  5193ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   11 | 是   |  4634ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   12 | 是   |  5011ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   13 | 是   |  4701ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   14 | 是   |  4890ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   15 | 是   |  4947ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   16 | 是   |  5304ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   17 | 是   |  4433ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   18 | 是   |  5149ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   19 | 是   |  5109ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| weapp-vite 原生               |   20 | 是   |  3670ms |     12 |    8.8 KB |   6.4 KB |   1.2 KB |   0.8 KB |    0.4 KB |
| uni-app vite vue3             |    1 | 是   |  7868ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    2 | 是   |  6462ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    3 | 是   |  6443ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    4 | 是   |  7309ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    5 | 是   |  6766ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    6 | 是   |  7152ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    7 | 是   |  7176ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    8 | 是   |  6607ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |    9 | 是   |  7962ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   10 | 是   |  6378ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   11 | 是   |  6442ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   12 | 是   |  8155ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   13 | 是   |  6923ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   14 | 是   |  6868ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   15 | 是   |  7885ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   16 | 是   |  6858ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   17 | 是   |  6508ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   18 | 是   |  6691ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   19 | 是   |  7489ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app vite vue3             |   20 | 是   |  8062ms |     15 |  139.2 KB | 136.6 KB |   0.9 KB |   0.8 KB |    1.0 KB |
| uni-app x                     |    1 | 是   | 11063ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    2 | 是   |  7602ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    3 | 是   |  7252ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    4 | 是   |  7517ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    5 | 是   |  8701ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    6 | 是   |  8377ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    7 | 是   |  8218ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    8 | 是   |  7881ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |    9 | 是   |  7739ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   10 | 是   |  7850ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   11 | 是   |  8124ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   12 | 是   |  7269ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   13 | 是   |  7558ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   14 | 是   |  7665ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   15 | 是   |  8213ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   16 | 是   |  8295ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   17 | 是   |  7261ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   18 | 是   |  8420ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   19 | 是   | 10398ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| uni-app x                     |   20 | 是   | 10962ms |     17 |  176.5 KB | 166.1 KB |   1.5 KB |   3.9 KB |    1.0 KB |
| mpx                           |    1 | 是   | 24051ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    2 | 是   | 21618ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    3 | 是   | 21511ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    4 | 是   | 31655ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    5 | 是   | 22214ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    6 | 是   | 19299ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    7 | 是   | 19710ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    8 | 是   | 19629ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |    9 | 是   | 20683ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   10 | 是   | 18094ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   11 | 是   | 28413ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   12 | 是   | 29049ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   13 | 是   | 28385ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   14 | 是   | 30734ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   15 | 是   | 34217ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   16 | 是   | 31005ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   17 | 是   | 27188ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   18 | 是   | 21277ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   19 | 是   | 19418ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| mpx                           |   20 | 是   | 16617ms |     18 | 1163.7 KB | 206.3 KB |   1.0 KB |   0.7 KB |    0.6 KB |
| taro vue3                     |    1 | 是   | 12998ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    2 | 是   | 11011ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    3 | 是   |  9729ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    4 | 是   | 11907ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    5 | 是   | 10179ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    6 | 是   | 11157ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    7 | 是   | 10421ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    8 | 是   |  9898ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |    9 | 是   | 10008ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   10 | 是   | 11295ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   11 | 是   |  9920ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   12 | 是   |  9688ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   13 | 是   | 10270ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   14 | 是   | 10144ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   15 | 是   | 12162ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   16 | 是   | 10291ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   17 | 是   | 10166ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   18 | 是   | 10767ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   19 | 是   | 11617ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |
| taro vue3                     |   20 | 是   | 10102ms |     20 |  228.0 KB | 170.9 KB |  54.8 KB |   0.6 KB |    0.7 KB |

## 采样来源

- Run ID：d103c8bb-f658-4d02-ac3e-0451b9978eb7；步骤：compile
- 采集区间：2026-11-16T05:51:53.595Z 至 2026-11-16T06:14:46.717Z
- 输入指纹：267013314fcb64e88c54df81193cade4e742fb34a1898be81826d2e632154448
- lockfile SHA-256：0fc38c72cb6a63f4109eecd8ba14aa7080a4e1914956949973093f0e5b461e2b
- runner：0.0.0；源码摘要：cfd49892467b8d6ed605a4d062164f2a040112ac5c107dee9e35be15d0abcfcc
- 工作区有修改：true；被测输入有修改：true
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
