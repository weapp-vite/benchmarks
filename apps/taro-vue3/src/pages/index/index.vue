<script setup lang="ts">
import type { BenchmarkItem, RuntimeMetric } from '../../shared/benchmark'
import Taro from '@tarojs/taro'
import { computed, nextTick, onMounted, ref } from 'vue'
import {
  batchCount,

  checksum,
  createItems,
  filterActiveHighScore,
  initialCount,
  now,

  updateEveryNth,
} from '../../shared/benchmark'
import './index.css'

const items = ref<BenchmarkItem[]>(createItems())
const visibleItems = ref<BenchmarkItem[]>(items.value)
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

async function runBenchmark() {
  metrics.value = []
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
  visibleItems.value = filterActiveHighScore(items.value)
  await nextTick()
  record('filter-active-high-score', start, visibleItems.value)

  // eslint-disable-next-line no-console
  console.log('BENCHMARK_RUNTIME', {
    framework: 'taro-vue3',
    metrics: metrics.value,
  })
}

function goDetail(item: BenchmarkItem) {
  void Taro.navigateTo({
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
        taro vue3
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
