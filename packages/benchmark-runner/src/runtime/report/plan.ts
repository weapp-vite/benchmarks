import path from 'pathe'
import { writeText } from '../../fs'
import { runtimeProjects } from '../../projects'

export function renderPlan(reportDir: string) {
  const lines = [
    '# 运行时基准报告',
    '',
    '每个应用的运行时页面都暴露同一套场景，并输出 `BENCHMARK_RUNTIME` 指标。',
    '',
    '| 项目 | 页面 | 采集状态 |',
    '| --- | --- | --- |',
    ...runtimeProjects.map(project => `| ${project.label} | \`${project.runtimePage}\` | 等待手动或 DevTools 日志采集 |`),
    '',
    '计划采集流程：',
    '',
    '1. 构建每个应用。',
    '2. 在微信开发者工具中打开生成的小程序项目。',
    '3. 进入表格中列出的页面。',
    '4. 触发 `runBenchmark`，或使用页面自动运行逻辑。',
    '5. 收集控制台中的 `BENCHMARK_RUNTIME` 载荷。',
    '',
    '自动采集：',
    '',
    '- 在可用环境中运行 `pnpm bench:runtime`，通过 `e2e/ide/runtime-benchmark.ts` 采集真实 IDE 运行时数据。',
    '- 如果 DevTools 不在默认 macOS 路径，设置 `WECHAT_DEVTOOLS_CLI=/path/to/cli`。',
    '',
  ]
  return writeText(path.join(reportDir, 'latest.md'), `${lines.join('\n')}\n`)
}
