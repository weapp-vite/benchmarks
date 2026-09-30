import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/**/*.ts'],
  unbundle: true,
  deps: {
    neverBundle: ['@weapp-vite/miniprogram-automator', 'echarts', 'prettier'],
  },
  target: 'node22.18',
  dts: false,
})
