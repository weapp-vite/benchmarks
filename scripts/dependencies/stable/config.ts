export type Framework = 'weapp-vite' | 'taro' | 'dcloud' | 'mpx'

export const projects = {
  weappViteNative: 'apps/weapp-vite-native',
  weappViteWevu: 'apps/weapp-vite-wevu',
  weappViteWevuPerformance: 'apps/weapp-vite-wevu-performance',
  taro: 'apps/taro-vue3',
  uniApp: 'apps/uni-app-vite-vue3',
  uniAppX: 'apps/uni-app-x',
  mpx: 'apps/mpx',
  runner: 'packages/benchmark-runner',
} as const

export const frameworkPackages: Record<Exclude<Framework, 'dcloud'>, string[]> = {
  'weapp-vite': ['weapp-vite', 'wevu', '@weapp-vite/miniprogram-automator'],
  'taro': [
    '@tarojs/cli',
    '@tarojs/components',
    '@tarojs/helper',
    '@tarojs/plugin-framework-vue3',
    '@tarojs/plugin-platform-weapp',
    '@tarojs/runtime',
    '@tarojs/shared',
    '@tarojs/taro',
    '@tarojs/vite-runner',
  ],
  'mpx': [
    '@mpxjs/api-proxy',
    '@mpxjs/babel-plugin-inject-page-events',
    '@mpxjs/core',
    '@mpxjs/eslint-config',
    '@mpxjs/fetch',
    '@mpxjs/pinia',
    '@mpxjs/store',
    '@mpxjs/utils',
    '@mpxjs/size-report',
    '@mpxjs/webpack-plugin',
    '@mpxjs/mpx-cli-service',
    '@mpxjs/vue-cli-plugin-mpx',
    '@mpxjs/vue-cli-plugin-mpx-eslint',
    '@mpxjs/vue-cli-plugin-mpx-typescript',
  ],
}

export const stablePackages = [
  { framework: 'weapp-vite', project: projects.weappViteNative, name: 'weapp-vite' },
  { framework: 'weapp-vite', project: projects.weappViteWevu, name: 'weapp-vite' },
  { framework: 'weapp-vite', project: projects.weappViteWevu, name: 'wevu' },
  { framework: 'weapp-vite', project: projects.weappViteWevuPerformance, name: 'weapp-vite' },
  { framework: 'weapp-vite', project: projects.weappViteWevuPerformance, name: 'wevu' },
  { framework: 'weapp-vite', project: projects.runner, name: '@weapp-vite/miniprogram-automator' },
  { framework: 'taro', project: projects.taro, name: '@tarojs/cli' },
  { framework: 'taro', project: projects.taro, name: '@tarojs/taro' },
  { framework: 'mpx', project: projects.mpx, name: '@mpxjs/babel-plugin-inject-page-events' },
  { framework: 'mpx', project: projects.mpx, name: '@mpxjs/core' },
  { framework: 'mpx', project: projects.mpx, name: '@mpxjs/eslint-config' },
  { framework: 'mpx', project: projects.mpx, name: '@mpxjs/webpack-plugin' },
  { framework: 'mpx', project: projects.mpx, name: '@mpxjs/mpx-cli-service' },
] as const

export const workspaceNames: Record<string, string> = {
  [projects.weappViteNative]: '@benchmarks/weapp-vite-native',
  [projects.weappViteWevu]: '@benchmarks/weapp-vite-wevu',
  [projects.weappViteWevuPerformance]: '@benchmarks/weapp-vite-wevu-performance',
  [projects.taro]: '@benchmarks/taro-vue3',
  [projects.mpx]: '@benchmarks/mpx',
  [projects.runner]: '@benchmarks/runner',
}
