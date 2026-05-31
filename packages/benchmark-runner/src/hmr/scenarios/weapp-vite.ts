import type { HmrScenario } from '../types'
import {
  appendScriptMarker,
  appendStyleMarker,
  insertTemplateMarker,
  updateJsonTitle,
  updateSingleQuotedValue,
  weappViteReadyPattern,
} from './shared'

const wevuPage = 'src/pages/index/index.vue'
const nativePageBase = 'src/pages/index/index'

const pageOutputs = {
  js: 'dist/pages/index/index.js',
  wxml: 'dist/pages/index/index.wxml',
  wxss: 'dist/pages/index/index.wxss',
  json: 'dist/pages/index/index.json',
}

function createWevuScenarios(options: {
  idPrefix: string
  labelPrefix: string
  project: string
  appDir: string
  titlePrefix: string
}): HmrScenario[] {
  return [
    {
      id: `${options.idPrefix}-vue-script`,
      label: `${options.labelPrefix} / Vue SFC script 区块`,
      group: 'vue-sfc',
      project: options.project,
      projectLabel: options.labelPrefix,
      appDir: options.appDir,
      collector: 'weapp-vite-profile',
      readyPattern: weappViteReadyPattern,
      outputFiles: [pageOutputs.js],
      sourceFile: wevuPage,
      applyMarker: appendScriptMarker,
    },
    {
      id: `${options.idPrefix}-vue-template`,
      label: `${options.labelPrefix} / Vue SFC template 区块`,
      group: 'vue-sfc',
      project: options.project,
      projectLabel: options.labelPrefix,
      appDir: options.appDir,
      collector: 'weapp-vite-profile',
      readyPattern: weappViteReadyPattern,
      outputFiles: [pageOutputs.wxml],
      sourceFile: wevuPage,
      applyMarker: insertTemplateMarker,
    },
    {
      id: `${options.idPrefix}-vue-style`,
      label: `${options.labelPrefix} / Vue SFC style 区块`,
      group: 'vue-sfc',
      project: options.project,
      projectLabel: options.labelPrefix,
      appDir: options.appDir,
      collector: 'weapp-vite-profile',
      readyPattern: weappViteReadyPattern,
      outputFiles: [pageOutputs.wxss],
      sourceFile: wevuPage,
      applyMarker: appendStyleMarker,
    },
    {
      id: `${options.idPrefix}-vue-page-json`,
      label: `${options.labelPrefix} / Vue SFC 页面配置`,
      group: 'vue-sfc',
      project: options.project,
      projectLabel: options.labelPrefix,
      appDir: options.appDir,
      collector: 'weapp-vite-profile',
      readyPattern: weappViteReadyPattern,
      outputFiles: [pageOutputs.json],
      sourceFile: wevuPage,
      applyMarker: (source, marker) => updateSingleQuotedValue(
        source,
        'navigationBarTitleText',
        `${options.titlePrefix} ${marker}`,
      ),
    },
  ]
}

export const weappViteHmrScenarios: HmrScenario[] = [
  ...createWevuScenarios({
    idPrefix: 'wevu',
    labelPrefix: 'weapp-vite + wevu',
    project: 'weapp-vite-wevu',
    appDir: 'apps/weapp-vite-wevu',
    titlePrefix: 'weapp-vite wevu',
  }),
  ...createWevuScenarios({
    idPrefix: 'wevu-performance',
    labelPrefix: 'weapp-vite + wevu performance',
    project: 'weapp-vite-wevu-performance',
    appDir: 'apps/weapp-vite-wevu-performance',
    titlePrefix: 'weapp-vite wevu performance',
  }),
  {
    id: 'native-js',
    label: 'weapp-vite 原生 / JS 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    collector: 'weapp-vite-profile',
    readyPattern: weappViteReadyPattern,
    outputFiles: ['dist/pages/index/index.js'],
    sourceFile: `${nativePageBase}.js`,
    applyMarker: (source, marker) => `${source.trimEnd()}\n// hmr-js-marker: ${marker}\n`,
  },
  {
    id: 'native-wxml',
    label: 'weapp-vite 原生 / WXML 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    collector: 'weapp-vite-profile',
    readyPattern: weappViteReadyPattern,
    outputFiles: ['dist/pages/index/index.wxml'],
    sourceFile: `${nativePageBase}.wxml`,
    applyMarker: (source, marker) => `${source.trimEnd()}\n<view style="display: none;">${marker}</view>\n`,
  },
  {
    id: 'native-wxss',
    label: 'weapp-vite 原生 / WXSS 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    collector: 'weapp-vite-profile',
    readyPattern: weappViteReadyPattern,
    outputFiles: ['dist/pages/index/index.wxss'],
    sourceFile: `${nativePageBase}.wxss`,
    applyMarker: (source, marker) => `${source.trimEnd()}\n.hmr-wxss-marker-${marker} { color: #123456; }\n`,
  },
  {
    id: 'native-json',
    label: 'weapp-vite 原生 / JSON 文件',
    group: 'native',
    project: 'weapp-vite-native',
    projectLabel: 'weapp-vite 原生',
    appDir: 'apps/weapp-vite-native',
    collector: 'weapp-vite-profile',
    readyPattern: weappViteReadyPattern,
    outputFiles: ['dist/pages/index/index.json'],
    sourceFile: `${nativePageBase}.json`,
    applyMarker: (source, marker) => updateJsonTitle(source, `weapp-vite native ${marker}`),
  },
]
