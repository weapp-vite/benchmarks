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

export const initialCount = 300
export const batchCount = 120

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
