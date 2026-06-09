# 运行时基准报告

生成时间：2026-06-09T09:41:50.718Z
模式：IDE E2E 采集
采样次数：20 次，报告中的场景均值和总耗时由有效样本计算。

## 一眼结论

- 总耗时最好：weapp-vite + wevu performance，8 个场景平均合计 162ms。
- 总耗时最差：taro vue3，8 个场景平均合计 1593ms。
- 差距最大场景：全量排序，最慢比最快多 648ms。
- 未纳入排名：weapp-vite + wevu（有效样本 0/20）、mpx（有效样本 0/20）、@vue-mini/core（有效样本 0/20）。
- 场景覆盖：初始渲染、追加列表、批量更新、全量排序、过滤、分组聚合渲染、窗口切片和整表替换。
- 读数规则：性能指数以最快项目为 100，越接近 100 越好；小于 120ms 的绝对差值标为弱信号，只作为参考。

## 项目优劣速览

| 项目                          | 总排名 | 性能指数 | 总耗时 | 慢于最快 | 绝对差 | 场景最快数 | 场景最慢数 | 主要优势                  | 主要短板                  | 判断       |
| ----------------------------- | -----: | -------: | -----: | -------: | -----: | ---------: | ---------: | ------------------------- | ------------------------- | ---------- |
| weapp-vite + wevu performance |      1 |      100 |  162ms |    1.00x |    0ms |          5 |          0 | 初始渲染、全量排序等 5 项 | -                         | 整体最快   |
| uni-app vite vue3             |      2 |       78 |  207ms |    1.28x |   45ms |          2 |          0 | 追加批次、窗口切片        | -                         | 有局部优势 |
| uni-app x                     |      3 |       78 |  209ms |    1.29x |   47ms |          1 |          0 | 批量更新                  | -                         | 表现居中   |
| weapp-vite 原生               |      4 |       13 | 1269ms |    7.83x | 1107ms |          0 |          5 | -                         | 初始渲染、追加批次等 5 项 | 多场景偏慢 |
| taro vue3                     |      5 |       10 | 1593ms |    9.83x | 1431ms |          0 |          3 | -                         | 批量更新、全量排序等 3 项 | 整体最慢   |

## 总耗时排名

| 排名 | 项目                          | 性能指数 | 8 场景平均合计 | 相对最快 | 绝对差 | 有效样本 | 全部通过 |
| ---: | ----------------------------- | -------: | -------------: | -------: | -----: | -------: | -------- |
|    1 | weapp-vite + wevu performance |      100 |          162ms |    1.00x |    0ms |       20 | 是       |
|    2 | uni-app vite vue3             |       78 |          207ms |    1.28x |   45ms |       20 | 是       |
|    3 | uni-app x                     |       78 |          209ms |    1.29x |   47ms |       20 | 是       |
|    4 | weapp-vite 原生               |       13 |         1269ms |    7.83x | 1107ms |       20 | 是       |
|    5 | taro vue3                     |       10 |         1593ms |    9.83x | 1431ms |       20 | 是       |

## 未完成采集

| 项目              | 有效样本 | 问题                          |
| ----------------- | -------: | ----------------------------- |
| weapp-vite + wevu |     0/20 | Wait timed out after 60000 ms |
| mpx               |     0/20 | Wait timed out after 60000 ms |
| @vue-mini/core    |     0/20 | Wait timed out after 60000 ms |

## 各场景最快和最慢

| 场景           | 最快                          | 最快均值 | 最慢            | 最慢均值 | 相对差距 | 绝对差 | 信号强度 |
| -------------- | ----------------------------- | -------: | --------------- | -------: | -------: | -----: | -------- |
| 初始渲染       | weapp-vite + wevu performance |      7ms | weapp-vite 原生 |    130ms |   18.57x |  123ms | 中       |
| 追加批次       | uni-app vite vue3             |     13ms | weapp-vite 原生 |    103ms |    7.92x |   90ms | 弱       |
| 批量更新       | uni-app x                     |     30ms | taro vue3       |    184ms |    6.13x |  154ms | 中       |
| 全量排序       | weapp-vite + wevu performance |     27ms | taro vue3       |    675ms |   25.00x |  648ms | 强       |
| 过滤高分活跃项 | weapp-vite + wevu performance |     18ms | taro vue3       |    354ms |   19.67x |  336ms | 强       |
| 分组聚合渲染   | weapp-vite + wevu performance |     17ms | weapp-vite 原生 |     98ms |    5.76x |   81ms | 弱       |
| 窗口切片       | uni-app vite vue3             |     16ms | weapp-vite 原生 |     97ms |    6.06x |   81ms | 弱       |
| 整表替换       | weapp-vite + wevu performance |     10ms | weapp-vite 原生 |    212ms |   21.20x |  202ms | 中       |

## 场景含义

| 场景           | 对比重点                                                       |
| -------------- | -------------------------------------------------------------- |
| 初始渲染       | 连续 3 次重建并渲染 480 条列表，放大首屏列表创建成本           |
| 追加批次       | 连续 4 次追加 120 条数据，放大增量插入和列表扩容成本           |
| 批量更新       | 连续 6 次批量更新不同步长的列表项，放大局部批量变更成本        |
| 全量排序       | 连续 5 次排序并正反切换，放大全量顺序变化成本                  |
| 过滤高分活跃项 | 连续 6 次在过滤结果和完整列表间切换，放大列表缩减和恢复成本    |
| 分组聚合渲染   | 连续 6 次按 group 聚合并渲染统计行，放大派生数据和结构切换成本 |
| 窗口切片       | 连续 10 次切换 140 条窗口数据，放大虚拟窗口类场景成本          |
| 整表替换       | 连续 3 次用 640 条新数据整表替换，放大大批量替换成本           |

## 项目场景均值

| 项目                          | 总耗时 | 初始渲染 | 追加批次 | 批量更新 | 全量排序 | 过滤高分活跃项 | 分组聚合渲染 | 窗口切片 | 整表替换 |
| ----------------------------- | -----: | -------: | -------: | -------: | -------: | -------------: | -----------: | -------: | -------: |
| weapp-vite + wevu performance |  162ms |      7ms |     15ms |     37ms |     27ms |           18ms |         17ms |     31ms |     10ms |
| uni-app vite vue3             |  207ms |     13ms |     13ms |     32ms |     69ms |           23ms |         20ms |     16ms |     21ms |
| uni-app x                     |  209ms |     14ms |     13ms |     30ms |     71ms |           24ms |         21ms |     16ms |     20ms |
| weapp-vite 原生               | 1269ms |    130ms |    103ms |    101ms |    229ms |          299ms |         98ms |     97ms |    212ms |
| taro vue3                     | 1593ms |     67ms |     74ms |    184ms |    675ms |          354ms |         19ms |     91ms |    129ms |

## 原始明细

| 项目                          | 轮次 | 通过                                | 来源       | 初始渲染 | 追加批次 | 批量更新 | 全量排序 | 过滤高分活跃项 | 分组聚合渲染 | 窗口切片 | 整表替换 |
| ----------------------------- | ---: | ----------------------------------- | ---------- | -------: | -------: | -------: | -------: | -------------: | -----------: | -------: | -------: |
| weapp-vite + wevu             |    1 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    2 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    3 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    4 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    5 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    6 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    7 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    8 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |    9 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   10 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   11 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   12 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   13 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   14 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   15 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   16 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   17 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   18 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   19 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu             |   20 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| weapp-vite + wevu performance |    1 | 是                                  | 控制台日志 |        8 |       16 |       35 |       27 |             19 |           17 |       31 |       11 |
| weapp-vite + wevu performance |    2 | 是                                  | 控制台日志 |        7 |       16 |       36 |       26 |             18 |           16 |       32 |       10 |
| weapp-vite + wevu performance |    3 | 是                                  | 控制台日志 |        7 |       15 |       36 |       27 |             19 |           17 |       29 |        9 |
| weapp-vite + wevu performance |    4 | 是                                  | 控制台日志 |        6 |       14 |       37 |       26 |             19 |           17 |       29 |       10 |
| weapp-vite + wevu performance |    5 | 是                                  | 控制台日志 |        7 |       16 |       36 |       26 |             19 |           17 |       31 |       10 |
| weapp-vite + wevu performance |    6 | 是                                  | 控制台日志 |        7 |       15 |       37 |       27 |             18 |           17 |       32 |       10 |
| weapp-vite + wevu performance |    7 | 是                                  | 控制台日志 |        7 |       16 |       38 |       27 |             19 |           19 |       31 |       10 |
| weapp-vite + wevu performance |    8 | 是                                  | 控制台日志 |        7 |       15 |       38 |       27 |             18 |           19 |       29 |       10 |
| weapp-vite + wevu performance |    9 | 是                                  | 控制台日志 |        7 |       15 |       37 |       25 |             17 |           17 |       34 |       10 |
| weapp-vite + wevu performance |   10 | 是                                  | 控制台日志 |        7 |       16 |       35 |       25 |             18 |           16 |       28 |       10 |
| weapp-vite + wevu performance |   11 | 是                                  | 控制台日志 |        7 |       15 |       36 |       26 |             18 |           17 |       33 |        9 |
| weapp-vite + wevu performance |   12 | 是                                  | 控制台日志 |        7 |       14 |       36 |       25 |             18 |           17 |       30 |       10 |
| weapp-vite + wevu performance |   13 | 是                                  | 控制台日志 |        7 |       16 |       35 |       27 |             19 |           17 |       28 |       11 |
| weapp-vite + wevu performance |   14 | 是                                  | 控制台日志 |        7 |       13 |       35 |       30 |             22 |           17 |       30 |       10 |
| weapp-vite + wevu performance |   15 | 是                                  | 控制台日志 |        6 |       14 |       42 |       27 |             18 |           17 |       33 |       10 |
| weapp-vite + wevu performance |   16 | 是                                  | 控制台日志 |        7 |       16 |       43 |       29 |             18 |           17 |       29 |       10 |
| weapp-vite + wevu performance |   17 | 是                                  | 控制台日志 |        7 |       16 |       36 |       28 |             18 |           17 |       32 |       10 |
| weapp-vite + wevu performance |   18 | 是                                  | 控制台日志 |        8 |       15 |       36 |       26 |             17 |           17 |       30 |       10 |
| weapp-vite + wevu performance |   19 | 是                                  | 控制台日志 |        7 |       15 |       35 |       26 |             17 |           17 |       30 |       10 |
| weapp-vite + wevu performance |   20 | 是                                  | 控制台日志 |        7 |       14 |       37 |       25 |             17 |           17 |       34 |       10 |
| weapp-vite 原生               |    1 | 是                                  | 控制台日志 |      126 |      104 |       97 |      228 |            293 |           97 |       95 |      215 |
| weapp-vite 原生               |    2 | 是                                  | 控制台日志 |      127 |      103 |       96 |      222 |            291 |          102 |      101 |      217 |
| weapp-vite 原生               |    3 | 是                                  | 控制台日志 |      128 |       99 |      101 |      221 |            290 |           92 |       97 |      222 |
| weapp-vite 原生               |    4 | 是                                  | 控制台日志 |      134 |      105 |      101 |      220 |            295 |           97 |       94 |      225 |
| weapp-vite 原生               |    5 | 是                                  | 控制台日志 |      127 |      106 |       99 |      245 |            317 |          102 |      102 |      198 |
| weapp-vite 原生               |    6 | 是                                  | 控制台日志 |      140 |      112 |      103 |      232 |            292 |          104 |      119 |      220 |
| weapp-vite 原生               |    7 | 是                                  | 控制台日志 |      123 |       99 |       92 |      230 |            306 |           98 |       94 |      186 |
| weapp-vite 原生               |    8 | 是                                  | 控制台日志 |      128 |      100 |       93 |      233 |            316 |           96 |       95 |      218 |
| weapp-vite 原生               |    9 | 是                                  | 控制台日志 |      129 |      102 |       95 |      238 |            306 |           99 |       92 |      218 |
| weapp-vite 原生               |   10 | 是                                  | 控制台日志 |      127 |      101 |       97 |      228 |            301 |           99 |       92 |      213 |
| weapp-vite 原生               |   11 | 是                                  | 控制台日志 |      126 |      100 |       97 |      222 |            296 |           92 |       95 |      211 |
| weapp-vite 原生               |   12 | 是                                  | 控制台日志 |      154 |      101 |      103 |      222 |            316 |          104 |       93 |      183 |
| weapp-vite 原生               |   13 | 是                                  | 控制台日志 |      126 |      100 |       95 |      221 |            289 |           98 |       94 |      219 |
| weapp-vite 原生               |   14 | 是                                  | 控制台日志 |      128 |      105 |       92 |      234 |            297 |           97 |       93 |      222 |
| weapp-vite 原生               |   15 | 是                                  | 控制台日志 |      127 |      113 |      142 |      233 |            299 |           95 |       94 |      213 |
| weapp-vite 原生               |   16 | 是                                  | 控制台日志 |      129 |      104 |       93 |      226 |            292 |           97 |       99 |      210 |
| weapp-vite 原生               |   17 | 是                                  | 控制台日志 |      132 |      109 |      108 |      231 |            298 |           90 |       90 |      224 |
| weapp-vite 原生               |   18 | 是                                  | 控制台日志 |      134 |      102 |      116 |      229 |            306 |          100 |       96 |      195 |
| weapp-vite 原生               |   19 | 是                                  | 控制台日志 |      123 |       99 |       97 |      227 |            292 |           96 |       98 |      224 |
| weapp-vite 原生               |   20 | 是                                  | 控制台日志 |      130 |      101 |       93 |      228 |            293 |          102 |       98 |      216 |
| uni-app vite vue3             |    1 | 是                                  | 控制台日志 |       19 |       13 |       31 |       78 |             24 |           22 |       17 |       19 |
| uni-app vite vue3             |    2 | 是                                  | 控制台日志 |       14 |       13 |       33 |       69 |             24 |           20 |       17 |       36 |
| uni-app vite vue3             |    3 | 是                                  | 控制台日志 |       13 |       12 |       31 |       66 |             23 |           19 |       16 |       18 |
| uni-app vite vue3             |    4 | 是                                  | 控制台日志 |       13 |       13 |       32 |       77 |             22 |           20 |       25 |       20 |
| uni-app vite vue3             |    5 | 是                                  | 控制台日志 |       13 |       12 |       32 |       67 |             24 |           21 |       18 |       20 |
| uni-app vite vue3             |    6 | 是                                  | 控制台日志 |       12 |       12 |       30 |       65 |             23 |           20 |       15 |       18 |
| uni-app vite vue3             |    7 | 是                                  | 控制台日志 |       16 |       14 |       32 |       67 |             23 |           19 |       15 |       20 |
| uni-app vite vue3             |    8 | 是                                  | 控制台日志 |       12 |       12 |       40 |       64 |             22 |           20 |       15 |       25 |
| uni-app vite vue3             |    9 | 是                                  | 控制台日志 |       12 |       12 |       29 |       64 |             22 |           19 |       16 |       28 |
| uni-app vite vue3             |   10 | 是                                  | 控制台日志 |       13 |       14 |       31 |       65 |             22 |           20 |       14 |       19 |
| uni-app vite vue3             |   11 | 是                                  | 控制台日志 |       11 |       12 |       32 |       70 |             23 |           19 |       16 |       18 |
| uni-app vite vue3             |   12 | 是                                  | 控制台日志 |       13 |       12 |       30 |       81 |             24 |           25 |       16 |       19 |
| uni-app vite vue3             |   13 | 是                                  | 控制台日志 |       13 |       12 |       30 |       66 |             23 |           20 |       17 |       18 |
| uni-app vite vue3             |   14 | 是                                  | 控制台日志 |       12 |       12 |       30 |       64 |             23 |           20 |       16 |       33 |
| uni-app vite vue3             |   15 | 是                                  | 控制台日志 |       13 |       13 |       34 |       66 |             22 |           19 |       16 |       20 |
| uni-app vite vue3             |   16 | 是                                  | 控制台日志 |       12 |       11 |       29 |       66 |             22 |           21 |       15 |       18 |
| uni-app vite vue3             |   17 | 是                                  | 控制台日志 |       15 |       14 |       33 |       66 |             23 |           19 |       16 |       19 |
| uni-app vite vue3             |   18 | 是                                  | 控制台日志 |       13 |       14 |       30 |       64 |             23 |           20 |       16 |       18 |
| uni-app vite vue3             |   19 | 是                                  | 控制台日志 |       13 |       13 |       31 |       77 |             23 |           19 |       16 |       19 |
| uni-app vite vue3             |   20 | 是                                  | 控制台日志 |       13 |       13 |       32 |       73 |             26 |           23 |       17 |       19 |
| uni-app x                     |    1 | 是                                  | 控制台日志 |       18 |       13 |       29 |       79 |             23 |           20 |       20 |       25 |
| uni-app x                     |    2 | 是                                  | 控制台日志 |       13 |       14 |       30 |       67 |             23 |           21 |       17 |       19 |
| uni-app x                     |    3 | 是                                  | 控制台日志 |       13 |       12 |       30 |       69 |             23 |           31 |       17 |       20 |
| uni-app x                     |    4 | 是                                  | 控制台日志 |       12 |       12 |       28 |       78 |             24 |           20 |       15 |       20 |
| uni-app x                     |    5 | 是                                  | 控制台日志 |       13 |       13 |       29 |       66 |             23 |           19 |       16 |       18 |
| uni-app x                     |    6 | 是                                  | 控制台日志 |       15 |       13 |       33 |       75 |             24 |           22 |       16 |       20 |
| uni-app x                     |    7 | 是                                  | 控制台日志 |       19 |       15 |       44 |       79 |             25 |           21 |       15 |       21 |
| uni-app x                     |    8 | 是                                  | 控制台日志 |       12 |       12 |       29 |       67 |             25 |           19 |       16 |       19 |
| uni-app x                     |    9 | 是                                  | 控制台日志 |       14 |       16 |       30 |       70 |             24 |           26 |       17 |       31 |
| uni-app x                     |   10 | 是                                  | 控制台日志 |       14 |       15 |       29 |       68 |             23 |           19 |       15 |       19 |
| uni-app x                     |   11 | 是                                  | 控制台日志 |       12 |       13 |       31 |       66 |             29 |           20 |       16 |       19 |
| uni-app x                     |   12 | 是                                  | 控制台日志 |       14 |       12 |       28 |       82 |             26 |           20 |       16 |       20 |
| uni-app x                     |   13 | 是                                  | 控制台日志 |       12 |       12 |       28 |       74 |             27 |           19 |       16 |       20 |
| uni-app x                     |   14 | 是                                  | 控制台日志 |       12 |       11 |       28 |       66 |             23 |           20 |       15 |       18 |
| uni-app x                     |   15 | 是                                  | 控制台日志 |       15 |       14 |       31 |       67 |             24 |           20 |       16 |       19 |
| uni-app x                     |   16 | 是                                  | 控制台日志 |       14 |       13 |       30 |       72 |             25 |           20 |       16 |       20 |
| uni-app x                     |   17 | 是                                  | 控制台日志 |       13 |       13 |       30 |       79 |             23 |           20 |       16 |       20 |
| uni-app x                     |   18 | 是                                  | 控制台日志 |       12 |       11 |       28 |       69 |             25 |           20 |       16 |       19 |
| uni-app x                     |   19 | 是                                  | 控制台日志 |       13 |       13 |       29 |       65 |             23 |           19 |       17 |       19 |
| uni-app x                     |   20 | 是                                  | 控制台日志 |       15 |       14 |       29 |       65 |             23 |           20 |       15 |       19 |
| mpx                           |    1 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    2 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    3 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    4 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    5 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    6 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    7 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    8 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |    9 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   10 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   11 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   12 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   13 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   14 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   15 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   16 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   17 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   18 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   19 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| mpx                           |   20 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| taro vue3                     |    1 | 是                                  | 控制台日志 |       83 |       91 |      202 |      678 |            358 |           20 |       88 |      131 |
| taro vue3                     |    2 | 是                                  | 控制台日志 |       67 |       74 |      180 |      652 |            352 |           18 |       90 |      128 |
| taro vue3                     |    3 | 是                                  | 控制台日志 |       67 |       73 |      179 |      649 |            349 |           18 |       89 |      139 |
| taro vue3                     |    4 | 是                                  | 控制台日志 |       66 |       70 |      171 |      626 |            351 |           19 |       88 |      126 |
| taro vue3                     |    5 | 是                                  | 控制台日志 |       65 |       72 |      172 |      626 |            355 |           20 |       88 |      129 |
| taro vue3                     |    6 | 是                                  | 控制台日志 |       67 |       73 |      178 |      649 |            350 |           21 |      109 |      128 |
| taro vue3                     |    7 | 是                                  | 控制台日志 |       65 |       72 |      180 |      666 |            348 |           18 |       90 |      127 |
| taro vue3                     |    8 | 是                                  | 控制台日志 |       69 |       72 |      179 |      656 |            350 |           19 |       90 |      128 |
| taro vue3                     |    9 | 是                                  | 控制台日志 |       65 |       70 |      176 |      655 |            353 |           22 |       89 |      127 |
| taro vue3                     |   10 | 是                                  | 控制台日志 |       67 |       78 |      206 |      773 |            350 |           17 |       89 |      129 |
| taro vue3                     |   11 | 是                                  | 控制台日志 |       65 |       70 |      181 |      663 |            346 |           19 |       89 |      129 |
| taro vue3                     |   12 | 是                                  | 控制台日志 |       66 |       74 |      186 |      715 |            362 |           20 |       93 |      128 |
| taro vue3                     |   13 | 是                                  | 控制台日志 |       68 |       72 |      193 |      690 |            358 |           19 |       99 |      127 |
| taro vue3                     |   14 | 是                                  | 控制台日志 |       66 |       68 |      187 |      691 |            360 |           20 |       91 |      129 |
| taro vue3                     |   15 | 是                                  | 控制台日志 |       66 |       71 |      192 |      702 |            356 |           19 |       89 |      128 |
| taro vue3                     |   16 | 是                                  | 控制台日志 |       69 |       78 |      193 |      712 |            353 |           18 |       92 |      135 |
| taro vue3                     |   17 | 是                                  | 控制台日志 |       67 |       75 |      185 |      658 |            365 |           19 |       90 |      126 |
| taro vue3                     |   18 | 是                                  | 控制台日志 |       65 |       74 |      182 |      672 |            357 |           18 |       89 |      127 |
| taro vue3                     |   19 | 是                                  | 控制台日志 |       70 |       75 |      194 |      709 |            354 |           21 |       94 |      126 |
| taro vue3                     |   20 | 是                                  | 控制台日志 |       65 |       69 |      173 |      654 |            354 |           19 |       89 |      127 |
| @vue-mini/core                |    1 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    2 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    3 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    4 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    5 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    6 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    7 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    8 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |    9 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   10 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   11 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   12 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   13 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   14 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   15 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   16 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   17 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   18 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   19 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |
| @vue-mini/core                |   20 | 否（Wait timed out after 60000 ms） | 无         |          |          |          |          |                |              |          |          |

说明：

- 运行时数据由 e2e/ide/runtime-benchmark.ts 通过微信开发者工具真实 IDE 自动化采集。
- 运行时耗时在各框架页面内部统计，覆盖状态变更和下一次渲染 tick。
- 每轮都会重新打开 benchmark 页面，确保各框架从同一组确定性数据开始。
- weapp-vite + wevu performance 本次采集使用 wevu 运行时优化提交 9e43db53392298063eda3cc528a75f3ee2ebda6a。
- DevTools 启动超时默认是 60000ms，可通过 BENCH_RUNTIME_TIMEOUT 覆盖。
- 运行时指标等待超时默认是 45000ms，可通过 BENCH_RUNTIME_METRICS_TIMEOUT 覆盖。
- 页面重开默认最多重试 3 次，可通过 BENCH_RUNTIME_RELAUNCH_RETRIES 覆盖。
- 微信开发者工具 CLI：/Applications/wechatwebdevtools.app/Contents/MacOS/cli
