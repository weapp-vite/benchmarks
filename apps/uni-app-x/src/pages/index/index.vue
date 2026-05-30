<script setup lang="ts">
import type { BenchmarkGroup, BenchmarkItem, RuntimeMetric } from '../../shared/benchmark'
import { computed, nextTick, onMounted, ref } from 'vue'
import {
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

  updateEveryNth,
} from '../../shared/benchmark'

const items = ref<BenchmarkItem[]>(createItems())
const visibleItems = ref<BenchmarkItem[]>(items.value)
const groups = ref<BenchmarkGroup[]>([])
const metrics = ref<RuntimeMetric[]>([])
const summary = computed(() => `${visibleItems.value.length}/${items.value.length}`)

function record(name: string, start: number, list: BenchmarkItem[]) {
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

function recordGroups(name: string, start: number, list: BenchmarkGroup[]) {
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
  items.value = createItems(initialCount)
  visibleItems.value = items.value
  await nextTick()
  record('initial-render', start, visibleItems.value)

  start = now()
  items.value = [...items.value, ...createItems(batchCount, items.value.length)]
  visibleItems.value = items.value
  await nextTick()
  record('append-batch', start, visibleItems.value)

  start = now()
  items.value = updateEveryNth(items.value)
  visibleItems.value = items.value
  await nextTick()
  record('update-every-5th', start, visibleItems.value)

  start = now()
  visibleItems.value = sortByScoreThenId(items.value)
  await nextTick()
  record('sort-score-desc', start, visibleItems.value)

  start = now()
  visibleItems.value = filterActiveHighScore(items.value)
  await nextTick()
  record('filter-active-high-score', start, visibleItems.value)

  start = now()
  groups.value = groupItems(items.value)
  await nextTick()
  recordGroups('group-aggregate-render', start, groups.value)

  start = now()
  visibleItems.value = sliceWindow(items.value)
  await nextTick()
  record('window-slice-middle', start, visibleItems.value)

  start = now()
  items.value = createItems(replaceCount, 10_000)
  visibleItems.value = items.value
  groups.value = []
  await nextTick()
  record('replace-dataset', start, visibleItems.value)

  // eslint-disable-next-line no-console
  console.log('BENCHMARK_RUNTIME', {
    framework: 'uni-app-x',
    metrics: metrics.value,
  })
}

function goDetail(item: BenchmarkItem) {
  uni.navigateTo({
    url: `/pages/detail/index?id=${item.id}&score=${item.score}`,
  })
}

onMounted(() => {
  void runBenchmark()
})
</script>

<template>
  <view class="page">
    <view class="toolbar">
      <view class="title">
        uni-app x
      </view>
      <view class="summary">
        {{ summary }}
      </view>
      <button size="mini" @tap="runBenchmark">
        Run
      </button>
    </view>
    <view class="metrics">
      <view v-for="metric in metrics" :key="metric.name" class="metric">
        <text>{{ metric.name }}</text>
        <text>{{ metric.durationMs }}ms</text>
        <text>{{ metric.count }}</text>
      </view>
    </view>
    <view class="groups">
      <view v-for="group in groups" :key="group.group" class="group">
        <text>g{{ group.group }}</text>
        <text>{{ group.count }}</text>
        <text>{{ group.activeCount }}</text>
        <text>{{ group.totalScore }}</text>
      </view>
    </view>
    <view class="list">
      <view
        v-for="item in visibleItems"
        :key="item.id"
        class="row"
        @tap="goDetail(item)"
      >
        <text class="row__title">
          {{ item.title }}
        </text>
        <text>g{{ item.group }}</text>
        <text>{{ item.score }}</text>
      </view>
    </view>
  </view>
</template>

<style>
.page {
  min-height: 100vh;
  padding: 24rpx;
}

.toolbar,
.metric,
.group,
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toolbar {
  gap: 16rpx;
  padding: 20rpx;
  background: #fff;
  border: 1rpx solid #d1d5db;
}

.title {
  font-size: 30rpx;
  font-weight: 700;
}

.summary {
  color: #2563eb;
}

.metrics {
  margin: 20rpx 0;
}

.metric,
.group,
.row {
  padding: 16rpx 20rpx;
  margin-bottom: 12rpx;
  background: #fff;
  border: 1rpx solid #e5e7eb;
}

.row__title {
  width: 260rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
