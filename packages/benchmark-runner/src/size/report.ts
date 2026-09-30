import type { AnalysisOutput, ProjectSize, WevuPackageInfo } from './types'
import { toolchainEnvironmentLines } from '../reports/environment'
import { formatKb, rows } from './format'

function selectedFiles(project: ProjectSize) {
  return project.files
    .filter(file => file.runtime)
    .sort((left, right) => right.bytes - left.bytes)
}

function projectTable(projects: ProjectSize[]) {
  return [
    '| 项目 | 选定文件数 | 选定文件体积 |',
    '| --- | ---: | ---: |',
    ...rows(projects.map(project => [
      project.label,
      String(project.totals.runtimeFiles),
      formatKb(project.totals.runtimeBytes),
    ])),
  ]
}

function fileTable(project: ProjectSize) {
  return [
    `### ${project.label}`,
    '',
    '| 选定文件 | 体积 | 原始字节 | 类型 | 分组 |',
    '| --- | ---: | ---: | --- | --- |',
    ...rows(selectedFiles(project).map(file => [
      file.path,
      formatKb(file.bytes),
      String(file.bytes),
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
    `wevu 版本：${info.version}；package.json 的 \`sideEffects\`：\`${JSON.stringify(info.sideEffects) ?? '未记录'}\`。`,
    '',
    '| 源包文件 | 压缩后体积 brotli |',
    '| --- | ---: |',
    ...rows(info.entryFiles.map(file => [
      file.file,
      formatKb(file.brotliBytes),
    ])),
  ]
}

function comparisons(projects: ProjectSize[]) {
  const wevu = projects.find(project => project.id === 'weapp-vite-wevu')
  if (!wevu) {
    return []
  }
  return projects
    .filter(project => ['weapp-vite-wevu-performance', 'weapp-vite-native', 'uni-app-vite-vue3'].includes(project.id))
    .map(project => `- ${project.label} 选定文件体积为 ${formatKb(project.totals.runtimeBytes)}，相对 ${wevu.label} 的差值为 ${formatKb(project.totals.runtimeBytes - wevu.totals.runtimeBytes)}。`)
}

export function generateReport(output: AnalysisOutput) {
  return [
    '# wevu 体积分析',
    '',
    `生成时间：${output.generatedAt}`,
    '',
    ...toolchainEnvironmentLines(output.toolchain),
    '',
    '## 结论',
    '',
    '- 统计生产构建中被 runtime 文件规则选中的完整文件，单位 KB 按 1024 字节换算；具体文件、类型和字节数见下表。',
    '- 不同框架的规则可能包含 JS、模板、样式、WXS 或 JSON。只按文件归类，不能分离同一 chunk 内的业务代码和框架模块，因此不代表精确的纯 runtime 成本。',
    ...comparisons(output.projects),
    '',
    '## 总览',
    '',
    ...projectTable(output.projects),
    '',
    '## 选定文件明细',
    '',
    ...output.projects.flatMap(project => [...fileTable(project), '']),
    '## wevu 源包入口',
    '',
    ...wevuPackageTable(output.wevuPackage),
    '',
    '## 证据范围与后续验证',
    '',
    '- 当前只有文件级体积和包元数据，没有模块图或引用链证据，无法据此判断 tree shaking 是否有效、具体能力是否冗余或哪个模块导致差值。',
    '- sideEffects 是采集时的包声明，不直接证明最终产物的裁剪结果；源包入口的压缩体积也不等于消费应用的运行时体积。',
    '- performance preset 的文件体积差异仅表示构建成本；运行时延迟、setData 次数/字节和内存收益需要同版本、同场景的独立运行时验证。',
    '- 后续可用最小能力阶梯与模块级分析定位成本，分别验证原始包体和宿主行为；这些是研究方向，不是本报告已确认的原因。',
    '',
    '## 复跑命令',
    '',
    '```bash',
    'pnpm bench:size:wevu',
    '```',
  ].join('\n')
}
