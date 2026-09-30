import { batchCount, initialCount, replaceCount, stressCycles, windowSize } from '../../scenario'

export const metricLabels = [
  ['initial-render', '初始渲染'],
  ['append-batch', '追加批次'],
  ['update-every-5th', '批量更新'],
  ['sort-score-desc', '全量排序'],
  ['filter-active-high-score', '过滤高分活跃项'],
  ['group-aggregate-render', '分组聚合渲染'],
  ['window-slice-middle', '窗口切片'],
  ['replace-dataset', '整表替换'],
] as const

export const scenarioDescriptions = new Map<string, string>([
  ['initial-render', `连续 ${stressCycles.initialRender} 次重建并渲染 ${initialCount} 条列表，放大首屏列表创建成本`],
  ['append-batch', `连续 ${stressCycles.appendBatch} 次追加 ${batchCount} 条数据，放大增量插入和列表扩容成本`],
  ['update-every-5th', `连续 ${stressCycles.updateEveryNth} 次批量更新不同步长的列表项，放大局部批量变更成本`],
  ['sort-score-desc', `连续 ${stressCycles.sortScoreDesc} 次排序并正反切换，放大全量顺序变化成本`],
  ['filter-active-high-score', `连续 ${stressCycles.filterActiveHighScore} 次在过滤结果和完整列表间切换，放大列表缩减和恢复成本`],
  ['group-aggregate-render', `连续 ${stressCycles.groupAggregate} 次按 group 聚合并渲染统计行，放大派生数据和结构切换成本`],
  ['window-slice-middle', `连续 ${stressCycles.windowSlice} 次切换 ${windowSize} 条窗口数据，放大虚拟窗口类场景成本`],
  ['replace-dataset', `连续 ${stressCycles.replaceDataset} 次用 ${replaceCount} 条新数据整表替换，放大大批量替换成本`],
])
