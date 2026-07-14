import type { DashboardChart, DashboardReport, ProjectSummary } from './types'
import * as echarts from 'echarts'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('\'', '&#39;')
}

function safeJson(value: unknown) {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}

function formatValue(key: string, value: number) {
  if (key.toLowerCase().includes('bytes')) {
    return `${(value / 1024).toFixed(1)} KB`
  }
  if (key.toLowerCase().includes('ms')) {
    return `${value.toFixed(1)} ms`
  }
  return value.toFixed(1)
}

function delta(current: number, previous: number | undefined) {
  if (!previous) {
    return '-'
  }
  const value = (current - previous) / previous * 100
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`
}

function projectRows(projects: ProjectSummary[], metrics: Array<[string, string]>) {
  return projects.map(project => `<tr>
    <th scope="row">${escapeHtml(project.label)}</th>
    ${metrics.map(([key]) => `<td>${project.complete ? formatValue(key, project.values[key] ?? 0) : 'N/A'}</td>`).join('')}
    <td>${project.sampleCount}/${project.expectedSamples}</td>
    <td>${project.complete ? '完整' : '不完整'}</td>
    <td>${project.previousValues && metrics[0] ? delta(project.values[metrics[0][0]] ?? 0, project.previousValues[metrics[0][0]]) : '-'}</td>
  </tr>`).join('\n')
}

function projectTable(
  title: string,
  projects: ProjectSummary[],
  metrics: Array<[string, string]>,
  reportLink: string,
) {
  return `<div class="table-wrap">
    <div class="table-heading"><h2>${escapeHtml(title)}</h2><a href="${reportLink}">详细报告</a></div>
    <table>
      <thead><tr><th scope="col">项目</th>${metrics.map(([, label]) => `<th scope="col">${escapeHtml(label)}</th>`).join('')}<th scope="col">样本</th><th scope="col">状态</th><th scope="col">较上次</th></tr></thead>
      <tbody>${projectRows(projects, metrics)}</tbody>
    </table>
  </div>`
}

function verificationTable(report: DashboardReport) {
  const steps = report.verification?.steps ?? []
  if (!steps.length) {
    return '<p class="empty">本次报告没有附带验证流水线结果。</p>'
  }
  return `<div class="table-wrap">
    <div class="table-heading"><h2>验证流水线</h2><a href="/benchmarks/reports/verification/latest.md">详细报告</a></div>
    <table>
      <thead><tr><th scope="col">检查</th><th scope="col">状态</th><th scope="col">耗时</th><th scope="col">命令</th></tr></thead>
      <tbody>${steps.map(step => `<tr><th scope="row">${escapeHtml(step.label)}</th><td><span class="status status-${step.status}">${step.status}</span></td><td>${(step.durationMs / 1000).toFixed(1)}s</td><td><code>${escapeHtml(step.command)}</code></td></tr>`).join('')}</tbody>
    </table>
  </div>`
}

export function renderDashboardHtml(options: {
  report: DashboardReport
  lightCharts: DashboardChart[]
  darkCharts: DashboardChart[]
}) {
  const { report, lightCharts, darkCharts } = options
  const tabs = [
    ['overview', '总览'],
    ['compile', '编译'],
    ['runtime', '运行时'],
    ['hmr', 'HMR'],
    ['size', '体积'],
    ['verification', '验证'],
  ] as const
  const chartPanels = lightCharts.map((chart, index) => `<section id="panel-${chart.id}" class="panel" role="tabpanel" aria-labelledby="tab-${chart.id}" ${index ? 'hidden' : ''}>
    <div id="chart-${chart.id}" class="chart" role="img" aria-label="${escapeHtml(chart.description)}"></div>
    ${chart.id === 'overview' ? `<p class="caption">${escapeHtml(chart.description)}</p>` : ''}
    ${chart.id === 'compile' ? projectTable('编译结果', report.compile?.projects ?? [], [['buildMs', '平均耗时'], ['outputBytes', '平均体积']], '/benchmarks/reports/compile/latest.md') : ''}
    ${chart.id === 'runtime' ? projectTable('运行时结果', report.runtime?.projects ?? [], [['totalMs', '八场景合计']], '/benchmarks/reports/runtime/latest.md') : ''}
    ${chart.id === 'hmr' ? projectTable('HMR 结果', report.hmr?.projects ?? [], [['averageMs', '场景平均']], '/benchmarks/reports/hmr/latest.md') : ''}
    ${chart.id === 'size' ? projectTable('运行时包结果', report.size?.projects ?? [], [['runtimeBytes', 'runtime 体积']], '/benchmarks/reports/size/wevu-analysis.md') : ''}
  </section>`).join('\n')
  const environment = report.runtime?.environment ?? report.compile?.environment ?? report.hmr?.environment
  const statusLabel = report.status === 'complete' ? '全部完成' : '部分完成'

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="小程序框架编译、运行时、HMR 和体积基准测试结果">
  <title>小程序框架基准测试</title>
  <style>
    :root { color-scheme: light dark; --bg: #fff; --fg: #20242b; --muted: #667085; --line: #d9dee8; --soft: #f4f6f8; --accent: #1769aa; --ok: #16794d; --bad: #b42318; }
    @media (prefers-color-scheme: dark) { :root { --bg: #17191d; --fg: #f2f4f7; --muted: #aab2c0; --line: #3a404b; --soft: #22262d; --accent: #62a8e5; --ok: #61c995; --bad: #ff8b83; } }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--fg); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif; }
    a { color: var(--accent); }
    header { border-bottom: 1px solid var(--line); padding: 32px max(20px, calc((100% - 1280px) / 2)); }
    h1 { margin: 0 0 12px; font-size: 30px; font-weight: 500; letter-spacing: 0; }
    h2 { margin: 0; font-size: 18px; font-weight: 500; letter-spacing: 0; }
    .meta { display: flex; flex-wrap: wrap; gap: 10px 24px; color: var(--muted); font-size: 14px; }
    .meta strong { color: var(--fg); font-weight: 500; }
    nav { display: flex; flex-wrap: wrap; gap: 4px; max-width: 1280px; margin: 0 auto; padding: 14px 20px; border-bottom: 1px solid var(--line); }
    .tab { border: 0; border-bottom: 2px solid transparent; background: transparent; color: var(--muted); padding: 10px 14px; font: inherit; cursor: pointer; }
    .tab[aria-selected="true"] { color: var(--fg); border-bottom-color: var(--accent); }
    .tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    main { max-width: 1280px; margin: 0 auto; padding: 24px 20px 56px; }
    .panel[hidden] { display: none; }
    .chart { width: 100%; height: 650px; min-height: 420px; }
    #chart-compile, #chart-size { height: 760px; }
    .caption, .empty { color: var(--muted); font-size: 14px; }
    .table-wrap { margin-top: 28px; overflow-x: auto; border-top: 1px solid var(--line); }
    .table-heading { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 20px 0 12px; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th, td { padding: 11px 12px; border-bottom: 1px solid var(--line); text-align: right; white-space: nowrap; }
    th:first-child, td:first-child { text-align: left; }
    thead th { color: var(--muted); font-weight: 500; background: var(--soft); }
    tbody th { font-weight: 400; }
    code { color: var(--fg); }
    .status { font-weight: 500; }
    .status-passed { color: var(--ok); }
    .status-failed { color: var(--bad); }
    .status-skipped { color: var(--muted); }
    @media (max-width: 640px) {
      header { padding-top: 24px; padding-bottom: 24px; }
      h1 { font-size: 24px; }
      main { padding-left: 12px; padding-right: 12px; }
      nav { padding-left: 8px; padding-right: 8px; }
      .tab { padding-left: 10px; padding-right: 10px; }
      .chart, #chart-compile, #chart-size { height: 540px; }
      th, td { padding: 10px 9px; }
    }
  </style>
</head>
<body>
  <header>
    <h1>小程序框架基准测试</h1>
    <div class="meta">
      <span><strong>${statusLabel}</strong></span>
      <span>生成时间 ${escapeHtml(report.generatedAt)}</span>
      <span>机器 ${escapeHtml(environment?.machineLabel ?? '未记录')}</span>
      <span>Commit <code>${escapeHtml(report.sourceCommit?.slice(0, 12) ?? 'unknown')}</code></span>
    </div>
  </header>
  <nav role="tablist" aria-label="报告视图">
    ${tabs.map(([id, label], index) => `<button id="tab-${id}" class="tab" type="button" role="tab" aria-controls="panel-${id}" aria-selected="${index === 0}">${label}</button>`).join('')}
  </nav>
  <main>
    ${chartPanels}
    <section id="panel-verification" class="panel" role="tabpanel" aria-labelledby="tab-verification" hidden>${verificationTable(report)}</section>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/echarts@${echarts.version}/dist/echarts.min.js"></script>
  <script>
    const chartDefinitions = { light: ${safeJson(lightCharts)}, dark: ${safeJson(darkCharts)} };
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const instances = new Map();
    function currentDefinitions() { return media.matches ? chartDefinitions.dark : chartDefinitions.light; }
    function renderCharts() {
      for (const definition of currentDefinitions()) {
        const element = document.getElementById('chart-' + definition.id);
        if (!element) continue;
        let instance = instances.get(definition.id);
        if (!instance) {
          instance = echarts.init(element, null, { renderer: 'canvas' });
          instances.set(definition.id, instance);
        }
        instance.setOption(definition.option, true);
      }
    }
    function selectTab(id) {
      for (const button of document.querySelectorAll('[role="tab"]')) {
        const active = button.id === 'tab-' + id;
        button.setAttribute('aria-selected', String(active));
      }
      for (const panel of document.querySelectorAll('[role="tabpanel"]')) {
        panel.hidden = panel.id !== 'panel-' + id;
      }
      const chart = instances.get(id);
      if (chart) requestAnimationFrame(() => chart.resize());
    }
    for (const button of document.querySelectorAll('[role="tab"]')) {
      button.addEventListener('click', () => selectTab(button.id.replace('tab-', '')));
    }
    window.addEventListener('resize', () => { for (const chart of instances.values()) chart.resize(); });
    media.addEventListener('change', renderCharts);
    renderCharts();
  </script>
</body>
</html>
`
}
