/* global Page, wx */

const {
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
} = require('../../shared/benchmark')

function createMetric(name, start, list) {
  return {
    name,
    durationMs: now() - start,
    count: list.length,
    checksum: checksum(list),
  }
}

function createGroupMetric(name, start, list) {
  return {
    name,
    durationMs: now() - start,
    count: list.length,
    checksum: groupChecksum(list),
  }
}

Page({
  data: {
    groups: [],
    items: createItems(),
    metrics: [],
    summary: `${initialCount}/${initialCount}`,
    visibleItems: createItems(),
  },

  onReady() {
    void this.runBenchmark()
  },

  renderTick(data) {
    return new Promise((resolve) => {
      this.setData(
        {
          ...data,
          summary: `${data.visibleItems?.length ?? this.data.visibleItems.length}/${data.items?.length ?? this.data.items.length}`,
        },
        resolve,
      )
    })
  },

  async runBenchmark() {
    let items = createItems()
    let visibleItems = items
    let groups = []
    const metrics = []

    await this.renderTick({
      groups,
      items,
      metrics,
      visibleItems,
    })

    let start = now()
    for (let index = 0; index < stressCycles.initialRender; index += 1) {
      items = createItems(initialCount, index * 10000)
      visibleItems = items
      groups = []
      await this.renderTick({ groups, items, visibleItems })
    }
    metrics.push(createMetric('initial-render', start, visibleItems))

    start = now()
    for (let index = 0; index < stressCycles.appendBatch; index += 1) {
      items = [...items, ...createItems(batchCount, items.length)]
      visibleItems = items
      await this.renderTick({ items, visibleItems })
    }
    metrics.push(createMetric('append-batch', start, visibleItems))

    start = now()
    for (let index = 0; index < stressCycles.updateEveryNth; index += 1) {
      items = updateEveryNth(items, 3 + (index % 5))
      visibleItems = items
      await this.renderTick({ items, visibleItems })
    }
    metrics.push(createMetric('update-every-5th', start, visibleItems))

    start = now()
    for (let index = 0; index < stressCycles.sortScoreDesc; index += 1) {
      const sortedItems = sortByScoreThenId(items)
      visibleItems = index % 2 === 0 ? sortedItems : sortedItems.reverse()
      await this.renderTick({ visibleItems })
    }
    metrics.push(createMetric('sort-score-desc', start, visibleItems))

    start = now()
    for (let index = 0; index < stressCycles.filterActiveHighScore; index += 1) {
      visibleItems = index % 2 === 0 ? filterActiveHighScore(items) : items
      await this.renderTick({ visibleItems })
    }
    metrics.push(createMetric('filter-active-high-score', start, visibleItems))

    start = now()
    for (let index = 0; index < stressCycles.groupAggregate; index += 1) {
      groups = groupItems(items)
      await this.renderTick({ groups })
    }
    metrics.push(createGroupMetric('group-aggregate-render', start, groups))

    start = now()
    for (let index = 0; index < stressCycles.windowSlice; index += 1) {
      visibleItems = sliceWindow(items, index * 53)
      await this.renderTick({ visibleItems })
    }
    metrics.push(createMetric('window-slice-middle', start, visibleItems))

    start = now()
    for (let index = 0; index < stressCycles.replaceDataset; index += 1) {
      items = createItems(replaceCount, 100000 + index * replaceCount)
      visibleItems = items
      groups = []
      await this.renderTick({ groups, items, visibleItems })
    }
    metrics.push(createMetric('replace-dataset', start, visibleItems))

    this.setData({ metrics })

    // eslint-disable-next-line no-console
    console.log('BENCHMARK_RUNTIME', {
      framework: 'weapp-vite-native',
      metrics,
    })
  },

  goDetail(event) {
    const { id, score } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail/index?id=${id}&score=${score}`,
    })
  },
})
