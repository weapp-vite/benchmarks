import type { ProjectInput } from './types'

export const sizeProjects: ProjectInput[] = [
  {
    id: 'weapp-vite-wevu',
    label: 'weapp-vite + wevu',
    appDir: 'apps/weapp-vite-wevu',
    outputDir: 'dist',
  },
  {
    id: 'weapp-vite-wevu-performance',
    label: 'weapp-vite + wevu performance',
    appDir: 'apps/weapp-vite-wevu-performance',
    outputDir: 'dist',
  },
  {
    id: 'weapp-vite-native',
    label: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    outputDir: 'dist',
  },
  {
    id: 'uni-app-vite-vue3',
    label: 'uni-app vite vue3',
    appDir: 'apps/uni-app-vite-vue3',
    outputDir: 'dist/build/mp-weixin',
  },
]
