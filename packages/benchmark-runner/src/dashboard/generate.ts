import type { VerificationReport } from './types'
import process from 'node:process'
import path from 'pathe'
import { format } from 'prettier'
import { normalizeGeneratedText, writeJson, writeText } from '../fs'
import { repoRoot } from '../projects'
import { createDashboardCharts, darkPalette, lightPalette } from './charts/index'
import { loadDashboardReport } from './data'
import { renderDashboardHtml } from './html'
import { renderChartSvg } from './svg'

function markdownSummary(report: Awaited<ReturnType<typeof loadDashboardReport>>) {
  const status = report.status === 'complete' ? '完整' : '部分完成'
  const sections = [
    ['编译', report.compile, '../compile/latest.md'],
    ['运行时', report.runtime, '../runtime/latest.md'],
    ['HMR', report.hmr, '../hmr/latest.md'],
    ['体积', report.size, '../size/wevu-analysis.md'],
  ] as const
  return [
    '# 最新基准测试总览',
    '',
    `生成时间：${report.generatedAt}`,
    `状态：${status}`,
    `Git commit：${report.sourceCommit ?? '-'}`,
    '',
    '| 维度 | 生成时间 | 完整项目 | 详细报告 |',
    '| --- | --- | ---: | --- |',
    ...sections.map(([label, section, link]) => `| ${label} | ${section?.generatedAt ?? '-'} | ${section?.projects.filter(project => project.complete).length ?? 0}/${section?.projects.length ?? 0} | [查看](${link}) |`),
    '',
    ...(report.errors.length ? ['## 数据错误', '', ...report.errors.map(error => `- ${error}`), ''] : []),
  ].join('\n')
}

export async function generateDashboard(verification?: VerificationReport) {
  const report = await loadDashboardReport(repoRoot, verification)
  const outputDir = path.join(repoRoot, 'reports/dashboard')
  const lightCharts = createDashboardCharts(report, lightPalette)
  const darkCharts = createDashboardCharts(report, darkPalette)
  const html = await format(renderDashboardHtml({ report, lightCharts, darkCharts }), {
    parser: 'html',
  })
  await Promise.all([
    writeJson(path.join(outputDir, 'latest.json'), report),
    writeText(path.join(outputDir, 'latest.md'), normalizeGeneratedText(markdownSummary(report))),
    writeText(path.join(outputDir, 'index.html'), normalizeGeneratedText(html)),
    ...lightCharts.map(chart => writeText(path.join(outputDir, `${chart.id}.svg`), renderChartSvg(chart))),
  ])
  return report
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generateDashboard().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
