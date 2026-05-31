import path from 'pathe'

export interface BenchmarkProject {
  id: string
  label: string
  appDir: string
  runtimeProjectDir: string
  runtimePage: string
  runtimeNpmBuild?: boolean
}

export interface CompileBenchmarkProject extends BenchmarkProject {
  buildCommand: string
  outputDir: string
}

export const repoRoot = path.resolve(import.meta.dirname, '../../..')

export const compileProjects: CompileBenchmarkProject[] = [
  {
    id: 'weapp-vite-wevu',
    label: 'weapp-vite + wevu',
    appDir: 'apps/weapp-vite-wevu',
    buildCommand: 'pnpm build',
    outputDir: 'dist',
    runtimeProjectDir: 'apps/weapp-vite-wevu',
    runtimePage: 'pages/index/index',
  },
  {
    id: 'weapp-vite-native',
    label: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    buildCommand: 'pnpm build',
    outputDir: 'dist',
    runtimeProjectDir: 'apps/weapp-vite-native',
    runtimePage: 'pages/index/index',
  },
  {
    id: 'uni-app-vite-vue3',
    label: 'uni-app vite vue3',
    appDir: 'apps/uni-app-vite-vue3',
    buildCommand: 'pnpm build:mp-weixin',
    outputDir: 'dist/build/mp-weixin',
    runtimeProjectDir: 'apps/uni-app-vite-vue3/dist/build/mp-weixin',
    runtimePage: 'pages/index/index',
  },
  {
    id: 'uni-app-x',
    label: 'uni-app x',
    appDir: 'apps/uni-app-x',
    buildCommand: 'pnpm build:mp-weixin',
    outputDir: 'dist/build/mp-weixin',
    runtimeProjectDir: 'apps/uni-app-x/dist/build/mp-weixin',
    runtimePage: 'pages/index/index',
  },
  {
    id: 'mpx',
    label: 'mpx',
    appDir: 'apps/mpx',
    buildCommand: 'pnpm build',
    outputDir: 'dist/wx',
    runtimeProjectDir: 'apps/mpx',
    runtimePage: 'pages/index',
  },
  {
    id: 'taro-vue3',
    label: 'taro vue3',
    appDir: 'apps/taro-vue3',
    buildCommand: 'pnpm build:weapp',
    outputDir: 'dist',
    runtimeProjectDir: 'apps/taro-vue3',
    runtimePage: 'pages/index/index',
  },
]

export const runtimeProjects: BenchmarkProject[] = [
  ...compileProjects,
  {
    id: 'vue-mini-core',
    label: '@vue-mini/core',
    appDir: 'apps/vue-mini-core',
    runtimeProjectDir: 'apps/vue-mini-core',
    runtimePage: 'pages/index/index',
    runtimeNpmBuild: true,
  },
]

export const benchmarkProjects = compileProjects
