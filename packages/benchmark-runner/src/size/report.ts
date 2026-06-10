import type { AnalysisOutput, ProjectSize, WevuPackageInfo } from './types'
import { toolchainEnvironmentLines } from '../reports/environment'
import { formatGap, formatKb, formatPercent, rows } from './format'

function topFiles(project: ProjectSize, count = 8) {
  return [...project.files]
    .sort((left, right) => right.bytes - left.bytes)
    .slice(0, count)
}

function projectTable(projects: ProjectSize[]) {
  const smallest = Math.min(...projects.map(project => project.totals.bytes))
  return [
    '| 项目 | 总体积 | gzip | brotli | JS | vendor JS | 页面 JS | JS 占比 | 相对最小 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...rows(projects.map(project => [
      project.label,
      formatKb(project.totals.bytes),
      formatKb(project.totals.gzipBytes),
      formatKb(project.totals.brotliBytes),
      formatKb(project.totals.jsBytes),
      formatKb(project.totals.vendorJsBytes),
      formatKb(project.totals.pageJsBytes),
      formatPercent(project.totals.jsBytes, project.totals.bytes),
      formatGap(smallest, project.totals.bytes),
    ])),
  ]
}

function topFileTable(project: ProjectSize) {
  return [
    `### ${project.label}`,
    '',
    '| 文件 | raw | gzip | brotli | 类型 | 分组 |',
    '| --- | ---: | ---: | ---: | --- | --- |',
    ...rows(topFiles(project).map(file => [
      file.path,
      formatKb(file.bytes),
      formatKb(file.gzipBytes),
      formatKb(file.brotliBytes),
      file.type,
      file.bucket,
    ])),
  ]
}

function wevuPackageTable(info: WevuPackageInfo | null) {
  if (!info) {
    return ['未能读取 `apps/weapp-vite-wevu/node_modules/wevu/package.json`。']
  }

  return [
    `wevu 版本：${info.version}；package.json 的 \`sideEffects\`：\`${String(info.sideEffects)}\`。`,
    '',
    '| 源包文件 | 压缩后体积 brotli |',
    '| --- | ---: |',
    ...rows(info.entryFiles.map(file => [
      file.file,
      formatKb(file.brotliBytes),
    ])),
  ]
}

function findProject(projects: ProjectSize[], id: string) {
  const project = projects.find(item => item.id === id)
  if (!project) {
    throw new Error(`Missing project ${id}`)
  }
  return project
}

export function generateReport(output: AnalysisOutput) {
  const wevu = findProject(output.projects, 'weapp-vite-wevu')
  const wevuPerformance = findProject(output.projects, 'weapp-vite-wevu-performance')
  const native = findProject(output.projects, 'weapp-vite-native')
  const uni = findProject(output.projects, 'uni-app-vite-vue3')
  const wevuVendorDelta = wevu.totals.vendorJsBytes - uni.totals.vendorJsBytes
  const wevuJsDelta = wevu.totals.jsBytes - uni.totals.jsBytes
  const runtimeTax = wevu.totals.jsBytes - native.totals.jsBytes
  const performanceDelta = wevuPerformance.totals.bytes - wevu.totals.bytes

  return [
    '# wevu 体积分析',
    '',
    `生成时间：${output.generatedAt}`,
    '',
    ...toolchainEnvironmentLines(output.toolchain),
    '',
    '## 结论',
    '',
    `- 当前差距主要来自 JS 固定运行时成本：${wevu.label} 的 JS 为 ${formatKb(wevu.totals.jsBytes)}，${uni.label} 为 ${formatKb(uni.totals.jsBytes)}，差值 ${formatKb(wevuJsDelta)}。`,
    `- wevu 的 vendor JS 为 ${formatKb(wevu.totals.vendorJsBytes)}，uni-app 的 vendor JS 为 ${formatKb(uni.totals.vendorJsBytes)}，vendor 差值 ${formatKb(wevuVendorDelta)}，这是最主要的大头。`,
    `- 对比 ${native.label}，wevu 增加的运行时税约 ${formatKb(runtimeTax)}。业务页面 JS 本身只有 ${formatKb(wevu.totals.pageJsBytes)}，不是主要问题。`,
    `- performance preset 的体积没有变小，当前比普通 wevu 多 ${formatKb(performanceDelta)}。它优化的是运行时 setData 策略和诊断配置，不是体积优化模式。`,
    '- 这不是“完全没有 tree shaking”。wevu 包声明了 `sideEffects: false`，但主入口 re-export 的小程序 renderer、生命周期 glue、layout/router/store 桥接和响应式辅助之间引用链较粗，最终仍会把完整运行时基座放进 vendor。',
    '',
    '## 总览',
    '',
    ...projectTable(output.projects),
    '',
    '## 文件级大头',
    '',
    ...output.projects.flatMap(project => [...topFileTable(project), '']),
    '## wevu 源包入口',
    '',
    ...wevuPackageTable(output.wevuPackage),
    '',
    '## 判断',
    '',
    '- `src/pages/index/index.vue` 只显式使用 `ref`、`computed`、`nextTick`、`onMounted`，但产物仍包含 `weapp-vendors/wevu-src.js` 和 `weapp-vendors/wevu-ref.js`。',
    '- `wevu-src.js` 承载页面/组件注册、setup 执行、props/emit/model、layout、router/native router、selector、setData 等小程序运行时 glue；这些能力现在通过同一个运行时入口进入页面。',
    '- `wevu-ref.js` 承载响应式系统和调度基础设施。源包中的 `ref-*.mjs` 约十几 KB，但构建后 vendor 更大，说明底层依赖和 helper 被内联到小程序产物。',
    '- uni-app 的 `common/vendor.js` 也包含 Vue runtime 和小程序适配层，但它在当前场景下产物更紧凑，说明它的 mp-weixin runtime 入口和编译生成代码在这个用例上更容易被压缩或裁剪。',
    '',
    '## 下一步优化建议',
    '',
    '1. 拆分 wevu public entry：新增轻量入口，至少把 `ref/computed/nextTick/onMounted` 与 router/store/layout/selector 等能力分离。',
    '2. 让 SFC 编译器按实际用到的能力导入内部 helper，页面注册只引入 page runtime，组件场景再引入 component runtime，layout/router/store 改为显式 opt-in。',
    '3. 对 weapp-vite 的 chunk 策略补一个模块级 analyze 输出，持续统计 `wevu-src`、`wevu-ref`、页面业务代码、shared helper 的压缩后体积。',
    '4. 给 benchmarks 加一个“最小 wevu 页面”场景，和当前复杂列表场景分开，避免业务压力用例掩盖固定 runtime 税。',
    '5. 优化后以本报告作为回归口径：优先看 vendor JS 是否下降，而不是只看总包体积。',
    '',
    '## 复跑命令',
    '',
    '```bash',
    'pnpm --filter @benchmarks/weapp-vite-wevu build',
    'pnpm --filter @benchmarks/weapp-vite-wevu-performance build',
    'pnpm --filter @benchmarks/weapp-vite-native build',
    'pnpm --filter @benchmarks/uni-app-vite-vue3 build:mp-weixin',
    'pnpm bench:size:wevu',
    '```',
  ].join('\n')
}
