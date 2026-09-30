export type ConsistencyMode = 'classic' | 'stateful'

export function fixtureSource(script: string, template: string, color: string) {
  return `<script setup lang="ts">
import { computed, ref } from 'wevu'

const count = ref(0)
const version = () => '${script}'
const label = computed(() => version() + ':' + count.value)
</script>

<template>
  <view>
    <view class="probe-script">{{ label }}</view>
    <view class="probe-template">${template}</view>
    <view class="probe-style">style probe</view>
    <button class="probe-tap" @tap="count++">increment</button>
  </view>
</template>

<style>
.probe-style {
  color: ${color};
}
</style>
`
}

export const phases = [
  { phase: 'initial', marker: 'initial', color: '#123', computed: 'rgb(17, 34, 51)' },
  { phase: 'first', marker: 'first', color: '#246', computed: 'rgb(34, 68, 102)' },
  { phase: 'continuous', marker: 'continuous', color: '#369', computed: 'rgb(51, 102, 153)' },
  { phase: 'restore', marker: 'initial', color: '#123', computed: 'rgb(17, 34, 51)' },
] as const
