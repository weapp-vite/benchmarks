import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/compile.ts',
    'src/hmr.ts',
    'src/runtime.ts',
    'src/size/wevu.ts',
    'src/dashboard/generate.ts',
    'src/dashboard/refresh.ts',
  ],
  deps: {
    neverBundle: ['@weapp-vite/miniprogram-automator', 'echarts', 'prettier'],
  },
  target: 'node20',
  dts: false,
})
