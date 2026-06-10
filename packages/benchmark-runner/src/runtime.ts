import type { RuntimeSample } from './runtime/types'
import { spawn } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import process from 'node:process'
import path from 'pathe'
import { ensureDir } from './fs'
import { repoRoot, runtimeProjects } from './projects'
import {
  defaultIterations,
  defaultLaunchTimeout,
  defaultMetricsTimeout,
  defaultRelaunchRetries,
} from './runtime/constants'
import { resolveWechatCliPath, runtimeMode } from './runtime/devtools'
import { createRuntimeEnvironment } from './runtime/environment'
import { renderPlan, writeReport } from './runtime/report'

async function runIdeE2eCollector(iterations: number, cliPath: string) {
  const script = path.join(repoRoot, 'e2e/ide/runtime-benchmark.ts')
  const child = spawn('pnpm', [
    'exec',
    'tsx',
    script,
    '--iterations',
    String(iterations),
  ], {
    cwd: repoRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      WECHAT_DEVTOOLS_CLI: process.env['WECHAT_DEVTOOLS_CLI'] ?? cliPath,
    },
  })

  const exitCode = await new Promise<number | null>((resolve) => {
    child.on('close', resolve)
  })
  if (exitCode !== 0) {
    throw new Error(`e2e/ide runtime benchmark failed with exit code ${exitCode ?? 'signal'}`)
  }
}

async function runRuntimeBenchmark() {
  const reportDir = path.join(repoRoot, 'reports/runtime')
  await ensureDir(reportDir)

  if (runtimeMode() === 'plan') {
    await renderPlan(reportDir)
    return
  }

  const iterations = Number(process.env['BENCH_RUNTIME_ITERATIONS'] ?? defaultIterations)
  const cliPath = await resolveWechatCliPath()
  const notes: string[] = [
    '运行时数据由 e2e/ide/runtime-benchmark.ts 通过微信开发者工具真实 IDE 自动化采集。',
    '运行时耗时在各框架页面内部统计，覆盖状态变更和下一次渲染 tick。',
    '每轮都会重新打开 benchmark 页面，确保各框架从同一组确定性数据开始。',
    'weapp-vite + wevu performance 本次采集使用 wevu 运行时优化提交 9e43db53392298063eda3cc528a75f3ee2ebda6a。',
    `DevTools 启动超时默认是 ${defaultLaunchTimeout}ms，可通过 BENCH_RUNTIME_TIMEOUT 覆盖。`,
    `运行时指标等待超时默认是 ${defaultMetricsTimeout}ms，可通过 BENCH_RUNTIME_METRICS_TIMEOUT 覆盖。`,
    `页面重开默认最多重试 ${defaultRelaunchRetries} 次，可通过 BENCH_RUNTIME_RELAUNCH_RETRIES 覆盖。`,
  ]

  if (!cliPath) {
    const environment = await createRuntimeEnvironment()
    await writeReport(reportDir, {
      generatedAt: new Date().toISOString(),
      mode: 'ide-e2e',
      iterations,
      environment,
      samples: runtimeProjects.flatMap(project => Array.from({ length: iterations }, (_, index) => ({
        project: project.id,
        label: project.label,
        iteration: index + 1,
        page: project.runtimePage,
        ok: false,
        source: 'none' as const,
        metrics: [],
        error: '未找到微信开发者工具 CLI',
      }))),
      notes,
    })
    if (process.env['BENCH_RUNTIME_REQUIRED'] === '1') {
      process.exitCode = 1
    }
    return
  }

  await runIdeE2eCollector(iterations, cliPath)
  const samples = JSON.parse(
    await readFile(path.join(reportDir, 'latest.samples.json'), 'utf8'),
  ) as RuntimeSample[]
  const environment = await createRuntimeEnvironment({ wechatDevtools: cliPath })

  await writeReport(reportDir, {
    generatedAt: new Date().toISOString(),
    mode: 'ide-e2e',
    iterations,
    environment,
    samples,
    notes: [
      ...notes,
      `微信开发者工具 CLI：${cliPath}`,
    ],
  })

  if (process.env['BENCH_RUNTIME_REQUIRED'] === '1' && samples.some(sample => !sample.ok)) {
    process.exitCode = 1
  }
}

runRuntimeBenchmark().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
