<script setup lang="ts">
definePageJson({
  navigationBarTitleText: 'Detail',
})
</script>

<template>
  <view class="page">
    <view class="title">
      Detail page
    </view>
    <view>Navigation target for runtime benchmark.</view>
  </view>
</template>

<style>
.page {
  padding: 32rpx;
}

.title {
  margin-bottom: 16rpx;
  font-size: 32rpx;
  font-weight: 700;
}
</style>
