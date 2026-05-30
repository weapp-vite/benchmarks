import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/compile.ts', 'src/runtime.ts'],
  deps: {
    neverBundle: ['@weapp-vite/miniprogram-automator'],
  },
  target: 'node20',
  dts: false,
})
