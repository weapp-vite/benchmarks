import { spawn } from 'node:child_process'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import path from 'pathe'
import { defaultTimingIterations } from './constants'
import { ensureDir, removeDir, summarizeDir, writeJson, writeText } from './fs'
import { compileProjects, repoRoot } from './projects'

interface CompileSample {
  project: string
  label: string
  iteration: number
  command: string
  durationMs: number
  ok: boolean
  exitCode: number | null
  output: Awaited<ReturnType<typeof summarizeDir>>
  stdoutTail: string
  stderrTail: string
}

const tailLimit = 4_000

function average(values: number[]) {
  return values.length
    ? Math.round(values.reduce((total, value) => total + value, 0) / values.length)
    : 0
}

function tail(value: string) {
  return value.length > tailLimit ? value.slice(-tailLimit) : value
}

function formatMs(value: number | undefined) {
  return typeof value === 'number' ? `${value}ms` : '-'
}

function formatKb(value: number | undefined) {
  if (typeof value !== 'number') {
    return '-'
  }
  return `${(value / 1024).toFixed(1)} KB`
}

function formatGap(base: number | undefined, value: number | undefined) {
  if (!base || typeof value !== 'number') {
    return '-'
  }
  return `${(value / base).toFixed(2)}x`
}

async function runCommand(command: string, cwd: string) {
  const started = performance.now()
  let stdout = ''
  let stderr = ''
  const child = spawn(command, {
    cwd,
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: {
      ...process.env,
      NODE_ENV: 'production',
      CI: '1',
    },
  })

  child.stdout.setEncoding('utf8')
  child.stderr.setEncoding('utf8')
  child.stdout.on('data', chunk => stdout += chunk)
  child.stderr.on('data', chunk => stderr += chunk)

  const exitCode = await new Promise<number | null>((resolve) => {
    child.on('close', resolve)
  })

  return {
    durationMs: Math.round(performance.now() - started),
    exitCode,
    stdout,
    stderr,
  }
}

async function runCompileBenchmark() {
  const iterations = Number(process.env['BENCH_ITERATIONS'] ?? defaultTimingIterations)
  const samples: CompileSample[] = []

  for (const project of compileProjects) {
    const appDir = path.join(repoRoot, project.appDir)
    const outDir = path.join(appDir, project.outputDir)

    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      await removeDir(outDir)
      const result = await runCommand(project.buildCommand, appDir)
      const output = await summarizeDir(outDir)
      samples.push({
        project: project.id,
        label: project.label,
        iteration,
        command: project.buildCommand,
        durationMs: result.durationMs,
        ok: result.exitCode === 0,
        exitCode: result.exitCode,
        output,
        stdoutTail: tail(result.stdout),
        stderrTail: tail(result.stderr),
      })
    }
  }

  const reportDir = path.join(repoRoot, 'reports/compile')
  await ensureDir(reportDir)
  const generatedAt = new Date().toISOString()
  await writeJson(path.join(reportDir, 'latest.json'), {
    generatedAt,
    iterations,
    samples,
  })

  const successfulSamples = samples.filter(sample => sample.ok)
  const projectSummaries = compileProjects.map((project) => {
    const projectSamples = successfulSamples.filter(sample => sample.project === project.id)
    const first = projectSamples[0]
    return {
      id: project.id,
      label: project.label,
      avgDurationMs: average(projectSamples.map(sample => sample.durationMs)),
      avgBytes: average(projectSamples.map(sample => sample.output.bytes)),
      avgJsBytes: average(projectSamples.map(sample => sample.output.jsBytes)),
      avgTemplateBytes: average(projectSamples.map(sample => sample.output.templateBytes)),
      avgStyleBytes: average(projectSamples.map(sample => sample.output.styleBytes)),
      files: first?.output.files ?? 0,
      ok: projectSamples.length === iterations,
      sampleCount: projectSamples.length,
    }
  })
  const completeSummaries = projectSummaries.filter(summary => summary.ok)
  const incompleteSummaries = projectSummaries.filter(summary => !summary.ok)
  const byDuration = [...completeSummaries].sort((left, right) => left.avgDurationMs - right.avgDurationMs)
  const bySize = [...completeSummaries].sort((left, right) => left.avgBytes - right.avgBytes)
  const fastest = byDuration[0]
  const slowest = byDuration.at(-1)
  const smallest = bySize[0]
  const largest = bySize.at(-1)
  const durationRank = new Map(byDuration.map((summary, index) => [summary.id, index + 1]))
  const sizeRank = new Map(bySize.map((summary, index) => [summary.id, index + 1]))
  const insightRows = completeSummaries.map((summary) => {
    const buildRank = durationRank.get(summary.id) ?? 0
    const outputRank = sizeRank.get(summary.id) ?? 0
    const verdict = buildRank === 1 && outputRank <= 2
      ? '编译最快且体积靠前'
      : buildRank === 1
        ? '编译最快'
        : outputRank === 1
          ? '产物最小'
          : buildRank === completeSummaries.length || outputRank === completeSummaries.length
            ? '存在明显短板'
            : '表现居中'
    return {
      ...summary,
      buildRank,
      outputRank,
      verdict,
    }
  }).sort((left, right) => left.buildRank - right.buildRank)

  const lines = [
    '# 编译基准报告',
    '',
    `生成时间：${generatedAt}`,
    `采样次数：${iterations} 次，报告中的平均耗时由有效样本计算。`,
    '',
    '## 一眼结论',
    '',
    `- 编译最快：${fastest?.label ?? '-'}，平均 ${fastest?.avgDurationMs ?? 0}ms。`,
    `- 编译最慢：${slowest?.label ?? '-'}，平均 ${slowest?.avgDurationMs ?? 0}ms。`,
    `- 产物最小：${smallest?.label ?? '-'}，平均 ${formatKb(smallest?.avgBytes)}。`,
    `- 产物最大：${largest?.label ?? '-'}，平均 ${formatKb(largest?.avgBytes)}。`,
    incompleteSummaries.length
      ? `- 未纳入排名：${incompleteSummaries.map(summary => `${summary.label}（有效样本 ${summary.sampleCount}/${iterations}）`).join('、')}。`
      : '- 所有项目构建样本完整，均已纳入排名。',
    '',
    '## 项目优劣速览',
    '',
    '| 项目 | 编译排名 | 体积排名 | 平均耗时 | 慢于最快 | 平均体积 | 大于最小 | JS 大小 | 模板大小 | 判断 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |',
    ...insightRows.map(summary => [
      summary.label,
      summary.buildRank,
      summary.outputRank,
      formatMs(summary.avgDurationMs),
      formatGap(fastest?.avgDurationMs, summary.avgDurationMs),
      formatKb(summary.avgBytes),
      formatGap(smallest?.avgBytes, summary.avgBytes),
      formatKb(summary.avgJsBytes),
      formatKb(summary.avgTemplateBytes),
      summary.verdict,
    ].join(' | ')).map(row => `| ${row} |`),
    ...(incompleteSummaries.length
      ? [
          '',
          '## 未完成构建',
          '',
          '| 项目 | 有效样本 | 问题 |',
          '| --- | ---: | --- |',
          ...incompleteSummaries.map((summary) => {
            const errors = samples
              .filter(sample => sample.project === summary.id && !sample.ok)
              .map(sample => `exitCode ${sample.exitCode ?? 'signal'}`)
            return `| ${summary.label} | ${summary.sampleCount}/${iterations} | ${[...new Set(errors)].join('；')} |`
          }),
        ]
      : []),
    '',
    '## 编译耗时排名',
    '',
    '| 排名 | 项目 | 平均耗时 | 相对最快 | 构建通过 |',
    '| ---: | --- | ---: | ---: | --- |',
    ...byDuration.map((summary, index) => [
      index + 1,
      summary.label,
      formatMs(summary.avgDurationMs),
      formatGap(fastest?.avgDurationMs, summary.avgDurationMs),
      summary.ok ? '是' : '否',
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '## 产物体积排名',
    '',
    '| 排名 | 项目 | 平均总大小 | JS 大小 | 模板大小 | 样式大小 | 文件数 | 相对最小 |',
    '| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...bySize.map((summary, index) => [
      index + 1,
      summary.label,
      formatKb(summary.avgBytes),
      formatKb(summary.avgJsBytes),
      formatKb(summary.avgTemplateBytes),
      formatKb(summary.avgStyleBytes),
      summary.files,
      formatGap(smallest?.avgBytes, summary.avgBytes),
    ].join(' | ')).map(row => `| ${row} |`),
    '',
    '## 原始明细',
    '',
    '| 项目 | 轮次 | 通过 | 耗时 | 文件数 | 总大小 | JS 大小 | 模板大小 | 样式大小 | JSON 大小 |',
    '| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...samples.map(sample => [
      sample.label,
      sample.iteration,
      sample.ok ? '是' : `否（${sample.exitCode ?? 'signal'}）`,
      `${sample.durationMs}ms`,
      sample.output.files,
      formatKb(sample.output.bytes),
      formatKb(sample.output.jsBytes),
      formatKb(sample.output.templateBytes),
      formatKb(sample.output.styleBytes),
      formatKb(sample.output.jsonBytes),
    ].join(' | ')).map(row => `| ${row} |`),
  ]
  await writeText(path.join(reportDir, 'latest.md'), `${lines.join('\n')}\n`)

  const failed = samples.filter(sample => !sample.ok)
  if (failed.length) {
    process.exitCode = 1
  }
}

runCompileBenchmark().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
