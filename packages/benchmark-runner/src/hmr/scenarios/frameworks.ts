import type { HmrScenario } from '../types'
import {
  appendScriptMarker,
  appendStyleMarker,
  insertTemplateMarker,
} from './shared'

const uniPage = 'src/pages/index/index.vue'
const taroPage = 'src/pages/index/index.vue'
const taroStyle = 'src/pages/index/index.css'
const mpxPage = 'src/pages/index.mpx'

const uniPageOutputBase = 'dist/dev/mp-weixin/pages/index/index'
const taroPageOutputBase = 'dist/pages/index/index'
const mpxPageOutputBase = 'dist/wx/pages/index'

function appendMpxScriptMarker(source: string, marker: string) {
  return source.replace(
    '</script>\n\n<script type="application/json">',
    `\nconsole.debug('hmr-script-marker: ${marker}')\n</script>\n\n<script type="application/json">`,
  )
}

function createUniScenarios(options: {
  project: string
  projectLabel: string
}): HmrScenario[] {
  return [
    {
      id: `${options.project}-script`,
      label: `${options.projectLabel} / Vue SFC script 区块`,
      group: 'vue-sfc',
      project: options.project,
      projectLabel: options.projectLabel,
      appDir: `apps/${options.project}`,
      collector: 'artifact',
      outputFiles: [`${uniPageOutputBase}.js`],
      sourceFile: uniPage,
      applyMarker: appendScriptMarker,
    },
    {
      id: `${options.project}-template`,
      label: `${options.projectLabel} / Vue SFC template 区块`,
      group: 'vue-sfc',
      project: options.project,
      projectLabel: options.projectLabel,
      appDir: `apps/${options.project}`,
      collector: 'artifact',
      outputFiles: [`${uniPageOutputBase}.wxml`],
      sourceFile: uniPage,
      applyMarker: insertTemplateMarker,
    },
    {
      id: `${options.project}-style`,
      label: `${options.projectLabel} / Vue SFC style 区块`,
      group: 'vue-sfc',
      project: options.project,
      projectLabel: options.projectLabel,
      appDir: `apps/${options.project}`,
      collector: 'artifact',
      outputFiles: [`${uniPageOutputBase}.wxss`],
      sourceFile: uniPage,
      applyMarker: appendStyleMarker,
    },
  ]
}

export const frameworkHmrScenarios: HmrScenario[] = [
  ...createUniScenarios({
    project: 'uni-app-vite-vue3',
    projectLabel: 'uni-app vite vue3',
  }),
  ...createUniScenarios({
    project: 'uni-app-x',
    projectLabel: 'uni-app x',
  }),
  {
    id: 'taro-vue3-script',
    label: 'taro vue3 / Vue SFC script 区块',
    group: 'vue-sfc',
    project: 'taro-vue3',
    projectLabel: 'taro vue3',
    appDir: 'apps/taro-vue3',
    collector: 'artifact',
    outputFiles: [`${taroPageOutputBase}.js`],
    sourceFile: taroPage,
    applyMarker: appendScriptMarker,
  },
  {
    id: 'taro-vue3-template',
    label: 'taro vue3 / Vue SFC template 区块',
    group: 'vue-sfc',
    project: 'taro-vue3',
    projectLabel: 'taro vue3',
    appDir: 'apps/taro-vue3',
    collector: 'artifact',
    outputFiles: [`${taroPageOutputBase}.js`],
    sourceFile: taroPage,
    applyMarker: insertTemplateMarker,
  },
  {
    id: 'taro-vue3-style',
    label: 'taro vue3 / CSS 文件',
    group: 'vue-sfc',
    project: 'taro-vue3',
    projectLabel: 'taro vue3',
    appDir: 'apps/taro-vue3',
    collector: 'artifact',
    outputFiles: [`${taroPageOutputBase}.wxss`],
    sourceFile: taroStyle,
    applyMarker: (source, marker) => `${source.trimEnd()}\n.hmr-style-marker-${marker} { color: #123456; }\n`,
  },
  {
    id: 'mpx-template',
    label: 'mpx / template 区块',
    group: 'mpx-sfc',
    project: 'mpx',
    projectLabel: 'mpx',
    appDir: 'apps/mpx',
    collector: 'artifact',
    outputFiles: [`${mpxPageOutputBase}.wxml`],
    sourceFile: mpxPage,
    applyMarker: insertTemplateMarker,
  },
  {
    id: 'mpx-script',
    label: 'mpx / script 区块',
    group: 'mpx-sfc',
    project: 'mpx',
    projectLabel: 'mpx',
    appDir: 'apps/mpx',
    collector: 'artifact',
    outputFiles: [`${mpxPageOutputBase}.js`],
    sourceFile: mpxPage,
    applyMarker: appendMpxScriptMarker,
  },
  {
    id: 'mpx-style',
    label: 'mpx / style 区块',
    group: 'mpx-sfc',
    project: 'mpx',
    projectLabel: 'mpx',
    appDir: 'apps/mpx',
    collector: 'artifact',
    outputFiles: [`${mpxPageOutputBase}.wxss`],
    sourceFile: mpxPage,
    applyMarker: appendStyleMarker,
  },
  {
    id: 'mpx-page-json',
    label: 'mpx / 页面配置',
    group: 'mpx-sfc',
    project: 'mpx',
    projectLabel: 'mpx',
    appDir: 'apps/mpx',
    collector: 'artifact',
    outputFiles: [`${mpxPageOutputBase}.json`],
    sourceFile: mpxPage,
    applyMarker: (source, marker) => source.replace(
      /("navigationBarTitleText":\s*)"[^"]*"/,
      `$1"mpx ${marker}"`,
    ),
  },
]
