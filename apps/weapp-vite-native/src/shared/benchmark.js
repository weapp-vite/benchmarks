const initialCount = 480
const batchCount = 120
const replaceCount = 640
const windowSize = 140

const stressCycles = {
  initialRender: 3,
  appendBatch: 4,
  updateEveryNth: 6,
  sortScoreDesc: 5,
  filterActiveHighScore: 6,
  groupAggregate: 6,
  windowSlice: 10,
  replaceDataset: 3,
}

function now() {
  return Date.now()
}

function createItems(count = initialCount, offset = 0) {
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

function checksum(items) {
  return items.reduce((total, item) => total + item.id + item.score + (item.active ? 1 : 0), 0)
}

function updateEveryNth(items, nth = 5) {
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

function filterActiveHighScore(items) {
  return items.filter(item => item.active && item.score >= 50)
}

function sortByScoreThenId(items) {
  return [...items].sort((left, right) => {
    const scoreDiff = right.score - left.score
    return scoreDiff === 0 ? left.id - right.id : scoreDiff
  })
}

function groupItems(items) {
  const groups = new Map()
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

function groupChecksum(groups) {
  return groups.reduce((total, group) => (
    total + group.group + group.count + group.activeCount + group.totalScore
  ), 0)
}

function sliceWindow(items, start = 240, size = windowSize) {
  const safeStart = Math.max(0, Math.min(start, Math.max(0, items.length - size)))
  return items.slice(safeStart, safeStart + size)
}

module.exports = {
  batchCount,
  checksum,
  createItems,
  filterActiveHighScore,
  groupChecksum,
  groupItems,
  initialCount,
  now,
  replaceCount,
  sliceWindow,
  sortByScoreThenId,
  stressCycles,
  updateEveryNth,
}
