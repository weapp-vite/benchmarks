import { spawn } from 'node:child_process'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import path from 'pathe'
import { ensureDir, removeDir, summarizeDir, writeJson, writeText } from './fs'
import { benchmarkProjects, repoRoot } from './projects'

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

const defaultIterations = 3
const tailLimit = 4_000

function tail(value: string) {
  return value.length > tailLimit ? value.slice(-tailLimit) : value
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
  const iterations = Number(process.env['BENCH_ITERATIONS'] ?? defaultIterations)
  const samples: CompileSample[] = []

  for (const project of benchmarkProjects) {
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

  const lines = [
    '# 编译基准报告',
    '',
    `生成时间：${generatedAt}`,
    '',
    '| 项目 | 轮次 | 通过 | 耗时 | 文件数 | 总字节 | JS 字节 | 模板字节 | 样式字节 | JSON 字节 |',
    '| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...samples.map(sample => [
      sample.label,
      sample.iteration,
      sample.ok ? '是' : `否（${sample.exitCode ?? 'signal'}）`,
      `${sample.durationMs}ms`,
      sample.output.files,
      sample.output.bytes,
      sample.output.jsBytes,
      sample.output.templateBytes,
      sample.output.styleBytes,
      sample.output.jsonBytes,
    ].join(' | ')).map(row => `| ${row} |`),
    '',
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
