/* global getCurrentPages, wx */

const {
  computed,
  definePage,
  nextTick,
  onReady,
  ref,
} = require('@vue-mini/core')
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

definePage(() => {
  const items = ref(createItems())
  const visibleItems = ref(items.value)
  const groups = ref([])
  const metrics = ref([])
  const summary = computed(() => `${visibleItems.value.length}/${items.value.length}`)

  function record(name, start, list) {
    metrics.value = [
      ...metrics.value,
      {
        name,
        durationMs: now() - start,
        count: list.length,
        checksum: checksum(list),
      },
    ]
  }

  function recordGroups(name, start, list) {
    metrics.value = [
      ...metrics.value,
      {
        name,
        durationMs: now() - start,
        count: list.length,
        checksum: groupChecksum(list),
      },
    ]
  }

  async function runBenchmark() {
    metrics.value = []
    groups.value = []
    let start = now()
    for (let index = 0; index < stressCycles.initialRender; index += 1) {
      items.value = createItems(initialCount, index * 10000)
      visibleItems.value = items.value
      groups.value = []
      await nextTick()
    }
    record('initial-render', start, visibleItems.value)

    start = now()
    for (let index = 0; index < stressCycles.appendBatch; index += 1) {
      items.value = [...items.value, ...createItems(batchCount, items.value.length)]
      visibleItems.value = items.value
      await nextTick()
    }
    record('append-batch', start, visibleItems.value)

    start = now()
    for (let index = 0; index < stressCycles.updateEveryNth; index += 1) {
      items.value = updateEveryNth(items.value, 3 + (index % 5))
      visibleItems.value = items.value
      await nextTick()
    }
    record('update-every-5th', start, visibleItems.value)

    start = now()
    for (let index = 0; index < stressCycles.sortScoreDesc; index += 1) {
      const sortedItems = sortByScoreThenId(items.value)
      visibleItems.value = index % 2 === 0 ? sortedItems : sortedItems.reverse()
      await nextTick()
    }
    record('sort-score-desc', start, visibleItems.value)

    start = now()
    for (let index = 0; index < stressCycles.filterActiveHighScore; index += 1) {
      visibleItems.value = index % 2 === 0 ? filterActiveHighScore(items.value) : items.value
      await nextTick()
    }
    record('filter-active-high-score', start, visibleItems.value)

    start = now()
    for (let index = 0; index < stressCycles.groupAggregate; index += 1) {
      groups.value = groupItems(items.value)
      await nextTick()
    }
    recordGroups('group-aggregate-render', start, groups.value)

    start = now()
    for (let index = 0; index < stressCycles.windowSlice; index += 1) {
      visibleItems.value = sliceWindow(items.value, index * 53)
      await nextTick()
    }
    record('window-slice-middle', start, visibleItems.value)

    start = now()
    for (let index = 0; index < stressCycles.replaceDataset; index += 1) {
      items.value = createItems(replaceCount, 100000 + index * replaceCount)
      visibleItems.value = items.value
      groups.value = []
      await nextTick()
    }
    record('replace-dataset', start, visibleItems.value)

    const pages = getCurrentPages()
    pages[pages.length - 1]?.setData?.({ __metrics: metrics.value })

    // eslint-disable-next-line no-console
    console.log('BENCHMARK_RUNTIME', {
      framework: 'vue-mini-core',
      metrics: metrics.value,
    })
  }

  function goDetail(event) {
    const { id, score } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail/index?id=${id}&score=${score}`,
    })
  }

  onReady(() => {
    void runBenchmark()
  })

  return {
    groups,
    goDetail,
    items,
    metrics,
    runBenchmark,
    summary,
    visibleItems,
  }
})
