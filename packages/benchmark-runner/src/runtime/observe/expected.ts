import type { RuntimeMetric } from '../../scenario'
import { batchCount, checksum, createItems, filterActiveHighScore, groupChecksum, groupItems, initialCount, replaceCount, sliceWindow, sortByScoreThenId, stressCycles, updateEveryNth } from '../../scenario'

export function expectedMetrics() {
  const result: Array<Omit<RuntimeMetric, 'durationMs'>> = []
  let items = createItems(initialCount, (stressCycles.initialRender - 1) * 10_000)
  let visible = items
  const record = (name: string) => result.push({ name, count: visible.length, checksum: checksum(visible) })
  record('initial-render')
  for (let index = 0; index < stressCycles.appendBatch; index += 1) {
    items = [...items, ...createItems(batchCount, items.length)]
  }
  visible = items
  record('append-batch')
  for (let index = 0; index < stressCycles.updateEveryNth; index += 1) {
    items = updateEveryNth(items, 3 + (index % 5))
  }
  visible = items
  record('update-every-5th')
  visible = sortByScoreThenId(items)
  if ((stressCycles.sortScoreDesc - 1) % 2 !== 0) {
    visible.reverse()
  }
  record('sort-score-desc')
  visible = (stressCycles.filterActiveHighScore - 1) % 2 === 0 ? filterActiveHighScore(items) : items
  record('filter-active-high-score')
  const groups = groupItems(items)
  result.push({ name: 'group-aggregate-render', count: groups.length, checksum: groupChecksum(groups) })
  visible = sliceWindow(items, (stressCycles.windowSlice - 1) * 53)
  record('window-slice-middle')
  visible = createItems(replaceCount, 100_000 + (stressCycles.replaceDataset - 1) * replaceCount)
  record('replace-dataset')
  return result
}

export function assertMetrics(metrics: RuntimeMetric[]) {
  const expected = expectedMetrics()
  if (metrics.length !== expected.length || new Set(metrics.map(metric => metric.name)).size !== expected.length) {
    throw new Error('Incomplete or duplicate runtime metrics')
  }
  for (const item of expected) {
    const actual = metrics.find(metric => metric.name === item.name)
    if (!actual || actual.count !== item.count || actual.checksum !== item.checksum
      || !Number.isFinite(actual.durationMs) || actual.durationMs < 0) {
      throw new Error(`Incorrect runtime result: ${item.name}`)
    }
  }
}
