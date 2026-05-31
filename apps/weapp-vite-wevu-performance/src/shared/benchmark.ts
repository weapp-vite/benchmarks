export interface BenchmarkItem {
  id: number
  title: string
  group: number
  score: number
  active: boolean
}

export interface RuntimeMetric {
  name: string
  durationMs: number
  count: number
  checksum: number
}

export interface BenchmarkGroup {
  group: number
  count: number
  activeCount: number
  totalScore: number
}

export const initialCount = 480
export const batchCount = 120
export const replaceCount = 640
export const windowSize = 140

export const stressCycles = {
  initialRender: 3,
  appendBatch: 4,
  updateEveryNth: 6,
  sortScoreDesc: 5,
  filterActiveHighScore: 6,
  groupAggregate: 6,
  windowSlice: 10,
  replaceDataset: 3,
} as const

export function now() {
  return Date.now()
}

export function createItems(count = initialCount, offset = 0): BenchmarkItem[] {
  return Array.from({ length: count }, (_, index) => {
    const id = offset + index
    return {
      id,
      title: `Item ${id}`,
      group: id % 12,
      score: (id * 17) % 101,
      active: id % 3 !== 0,
    }
  })
}

export function checksum(items: BenchmarkItem[]) {
  return items.reduce((total, item) => total + item.id + item.score + (item.active ? 1 : 0), 0)
}

export function updateEveryNth(items: BenchmarkItem[], nth = 5) {
  return items.map((item, index) => {
    if (index % nth !== 0) {
      return item
    }
    return {
      ...item,
      score: (item.score + 7) % 101,
      active: !item.active,
    }
  })
}

export function filterActiveHighScore(items: BenchmarkItem[]) {
  return items.filter(item => item.active && item.score >= 50)
}

export function sortByScoreThenId(items: BenchmarkItem[]) {
  return [...items].sort((left, right) => {
    const scoreDiff = right.score - left.score
    return scoreDiff === 0 ? left.id - right.id : scoreDiff
  })
}

export function groupItems(items: BenchmarkItem[]) {
  const groups = new Map<number, BenchmarkGroup>()
  for (const item of items) {
    const group = groups.get(item.group) ?? {
      group: item.group,
      count: 0,
      activeCount: 0,
      totalScore: 0,
    }
    group.count += 1
    group.activeCount += item.active ? 1 : 0
    group.totalScore += item.score
    groups.set(item.group, group)
  }
  return [...groups.values()].sort((left, right) => left.group - right.group)
}

export function groupChecksum(groups: BenchmarkGroup[]) {
  return groups.reduce((total, group) => (
    total + group.group + group.count + group.activeCount + group.totalScore
  ), 0)
}

export function sliceWindow(items: BenchmarkItem[], start = 240, size = windowSize) {
  const safeStart = Math.max(0, Math.min(start, Math.max(0, items.length - size)))
  return items.slice(safeStart, safeStart + size)
}
