import type { HmrScenario } from './types'

const wevuPage = 'src/pages/index/index.vue'
const nativePageBase = 'src/pages/index/index'

function appendBefore(source: string, needle: string, insertion: string) {
  const index = source.lastIndexOf(needle)
  if (index < 0) {
    throw new Error(`未找到 HMR marker 插入位置：${needle}`)
  }
  return `${source.slice(0, index)}${insertion}${source.slice(index)}`
}

function updateSingleQuotedValue(source: string, key: string, value: string) {
  const pattern = new RegExp(`(${key}:\\s*)'[^']*'`)
  if (!pattern.test(source)) {
    throw new Error(`未找到 ${key} 配置`)
  }
  return source.replace(pattern, `$1'${value}'`)
}

function updateJsonTitle(source: string, value: string) {
  const json = JSON.parse(source) as Record<string, unknown>
  json['navigationBarTitleText'] = value
  return `${JSON.stringify(json, null, 2)}\n`
}

export const hmrScenarios: HmrScenario[] = [
  {
    id: 'wevu-vue-script',
    label: 'Vue SFC script 区块',
    group: 'vue-sfc',
    project: 'weapp-vite-wevu',
    projectLabel: 'weapp-vite + wevu',
    appDir: 'apps/weapp-vite-wevu',
    sourceFile: wevuPage,
    applyMarker: (source, marker) => appendBefore(source, '</script>', `\n// hmr-script-marker: ${marker}\n`),
  },
  {
    id: 'wevu-vue-template',
    label: 'Vue SFC template 区块',
    group: 'vue-sfc',
    project: 'weapp-vite-wevu',
    projectLabel: 'weapp-vite + wevu',
    appDir: 'apps/weapp-vite-wevu',
    sourceFile: wevuPage,
    applyMarker: (source, marker) => source.replace(
      '<view class="metrics">',
      `<!-- hmr-template-marker: ${marker} -->\n    <view class="metrics">`,
    ),
  },
  {
    id: 'wevu-vue-style',
    label: 'Vue SFC style 区块',
    group: 'vue-sfc',
    project: 'weapp-vite-wevu',
    projectLabel: 'weapp-vite + wevu',
    appDir: 'apps/weapp-vite-wevu',
    sourceFile: wevuPage,
    applyMarker: (source, marker) => appendBefore(source, '</style>', `\n/* hmr-style-marker: ${marker} */\n`),
  },
  {
    id: 'wevu-vue-page-json',
    label: 'Vue SFC 页面配置',
    group: 'vue-sfc',
    project: 'weapp-vite-wevu',
    projectLabel: 'weapp-vite + wevu',
    appDir: 'apps/weapp-vite-wevu',
    sourceFile: wevuPage,
    applyMarker: (source, marker) => updateSingleQuotedValue(
      source,
      'navigationBarTitleText',
      `weapp-vite wevu ${marker}`,
    ),
  },
  {
    id: 'native-js',
    label: '原生 JS 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    sourceFile: `${nativePageBase}.js`,
    applyMarker: (source, marker) => `${source.trimEnd()}\n// hmr-js-marker: ${marker}\n`,
  },
  {
    id: 'native-wxml',
    label: '原生 WXML 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    sourceFile: `${nativePageBase}.wxml`,
    applyMarker: (source, marker) => `${source.trimEnd()}\n<!-- hmr-wxml-marker: ${marker} -->\n`,
  },
  {
    id: 'native-wxss',
    label: '原生 WXSS 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    sourceFile: `${nativePageBase}.wxss`,
    applyMarker: (source, marker) => `${source.trimEnd()}\n/* hmr-wxss-marker: ${marker} */\n`,
  },
  {
    id: 'native-json',
    label: '原生 JSON 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    sourceFile: `${nativePageBase}.json`,
    applyMarker: (source, marker) => updateJsonTitle(source, `weapp-vite native ${marker}`),
  },
]
