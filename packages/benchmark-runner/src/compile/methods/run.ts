import type { Framework, SamplingSettings, Scale } from './schedule'
import type { MethodSample } from './statistics'
import { cp, mkdir, rm } from 'node:fs/promises'
import process from 'node:process'
import path from 'pathe'
import { runBuild } from '../../artifacts/build'
import { outputManifest } from '../../artifacts/manifest'
import { stageWorkspace } from '../../artifacts/workspace'
import { summarizeDir } from '../../fs'
import { repoRoot } from '../../projects'
import { writeMachineReport } from '../../reports/archive'
import { createMachineEnvironment, machineEnvironmentLines } from '../../reports/environment'
import { provenanceLines, startReportRun } from '../../reports/provenance/run'
import { measureBuild } from './execute'
import { prepareScale } from './fixture'
import { samplingSchedule, scales } from './schedule'
import { summarizeMethods } from './statistics'

export async function runCompileMethods() {
  const settings: SamplingSettings = {
    seed: Number(process.env['BENCH_COMPILE_SEED'] ?? 20261001),
    batches: Number(process.env['BENCH_COMPILE_BATCHES'] ?? 3),
    iterations: Number(process.env['BENCH_COMPILE_ITERATIONS'] ?? 5),
    scales: (process.env['BENCH_COMPILE_SCALES']?.split(',') ?? ['small', 'medium', 'large']) as Scale[],
    frameworks: (process.env['BENCH_COMPILE_FRAMEWORKS']?.split(',') ?? ['native', 'wevu']) as Framework[],
  }
  const machineProfile = process.env['BENCH_MACHINE_PROFILE'] ?? 'unclassified'
  if (!['unclassified', 'workstation', 'ordinary-developer'].includes(machineProfile)) {
    throw new Error('Invalid BENCH_MACHINE_PROFILE')
  }
  const schedule = samplingSchedule(settings)
  const method = { schemaVersion: 1, ...settings, scalesDefinition: scales, lifecycle: 'one new Node CLI build process per sample; no Turbo cache', cache: { reset: 'remove owned dist, .bench-cache, .weapp-vite before each sample', primed: 'reset then one recorded unmeasured build immediately before measured build; retain outputs/tool state' }, uncontrolled: ['OS file/page cache', 'CPU temperature/frequency', 'background workload', 'pnpm package store'], incremental: 'separate existing HMR report; never merged with full-build readings', order: 'seeded xorshift32 Fisher-Yates shuffle of all cells in each batch/round', retries: 0 }
  const run = await startReportRun('compile-methods', method)
  const samples: MethodSample[] = []
  const preparations: Array<Record<string, unknown>> = []
  const workspace = await stageWorkspace(repoRoot, run.inputs, 'compile-methods')
  const appFor = (framework: Framework) => path.join(workspace.root, `apps/weapp-vite-${framework === 'wevu' ? 'wevu' : 'native'}`)
  const prepared = new Map<string, Awaited<ReturnType<typeof prepareScale>>>()
  try {
    for (const framework of settings.frameworks) {
      for (const scale of settings.scales) {
        const key = `${framework}/${scale}`
        const app = appFor(framework)
        try {
          const fixture = await prepareScale(app, framework, scale)
          const durationMs = await measureBuild(app)
          await runBuild(app, 'typecheck')
          const saved = path.join(workspace.root, '.fixtures', key)
          await mkdir(path.dirname(saved), { recursive: true })
          await cp(path.join(app, 'src'), saved, { recursive: true })
          prepared.set(key, fixture)
          preparations.push({ key, ok: true, durationMs, sourceHash: fixture.sourceHash, dimensions: fixture.spec })
        }
        catch (error) {
          preparations.push({ key, ok: false, error: String(error) })
        }
      }
    }
    for (const item of schedule) {
      const sample: MethodSample = { ...item, ok: false, attempts: 1 }
      const key = `${item.framework}/${item.scale}`
      const fixture = prepared.get(key)
      process.stdout.write(`[compile-methods] ${item.ordinal}/${schedule.length} ${key} ${item.cache}\n`)
      try {
        if (!fixture) {
          throw new Error(`Fixture preparation failed: ${key}`)
        }
        const app = appFor(item.framework)
        await rm(path.join(app, 'src'), { recursive: true, force: true })
        await cp(path.join(workspace.root, '.fixtures', key), path.join(app, 'src'), { recursive: true })
        for (const owned of ['dist', '.bench-cache', '.weapp-vite']) {
          await rm(path.join(app, owned), { recursive: true, force: true })
        }
        sample.sourceHash = (await outputManifest(path.join(app, 'src'))).fingerprint
        if (sample.sourceHash !== fixture.sourceHash) {
          throw new Error('Generated source differs from verified fixture')
        }
        if (item.cache === 'primed-tool-state') {
          sample.primingMs = await measureBuild(app)
        }
        sample.durationMs = await measureBuild(app)
        const output = await outputManifest(path.join(app, 'dist'))
        const emitted = new Set(output.files.map(file => file.path))
        if (!emitted.has('app.js') || !emitted.has('app.json') || fixture.allPages.some(route => !emitted.has(`${route}.js`) || !emitted.has(`${route}.wxml`))) {
          throw new Error('Build omitted required application/page artifacts')
        }
        sample.outputHash = output.fingerprint
        sample.outputBytes = (await summarizeDir(path.join(app, 'dist'))).bytes
        sample.ok = true
      }
      catch (error) {
        sample.error = String(error)
      }
      samples.push(sample)
    }
  }
  finally {
    await workspace.dispose()
  }
  const provenance = await run.finish()
  const summaries = summarizeMethods(schedule, samples, provenance.inputStable)
  const report = { generatedAt: new Date().toISOString(), provenance, environment: await createMachineEnvironment(), method, schedule, preparations, samples, summaries, coverage: { machineProfile, profileSource: 'operator-declared; inspect captured hardware before accepting coverage', projectScales: settings.scales, frameworks: settings.frameworks, ordinaryDeveloperMachine: machineProfile === 'ordinary-developer' ? 'declared-this-run' : 'not-verified', realDevice: 'not-run', timingFromHostedCI: Boolean(process.env['GITHUB_ACTIONS']) } }
  const lines = ['# 扩展编译采样（独立方法，不与旧报告混排）', '', `种子 ${settings.seed}；${settings.batches} 批 × ${settings.iterations} 轮；每轮打乱所有组合。`, '每次启动新 Node CLI。reset-tool-state 清理本任务输出和已知工具缓存；primed-tool-state 清理后额外预热一次，保留工具状态再测。OS 缓存、CPU 与包存储未清理，不能称为物理冷启动。', '保留全部失败；不补采。P95 使用 nearest-rank，标准差使用总体分母 N。小样本 P95 可能就是最大值，不提供未经验证的置信区间。', '', '| 框架/规模/缓存 | 完整 | 样本 | 均值 ms | 中位数 ms | P95 ms | 最大 ms | 标准差 ms |', '| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |', ...summaries.map(row => `| ${row.id} | ${row.complete ? '是' : '否，不排名'} | ${row.accepted}/${row.expected} | ${row.meanMs?.toFixed(1) ?? '-'} | ${row.medianMs?.toFixed(1) ?? '-'} | ${row.p95Ms?.toFixed(1) ?? '-'} | ${row.maxMs?.toFixed(1) ?? '-'} | ${row.deviationMs?.toFixed(1) ?? '-'} |`), '', `本方法目前覆盖 weapp-vite 原生和 Wevu 的同规模路由/组件/共享依赖图；其他框架未生成扩展 fixture。增量 watch 使用独立 HMR 报告。机器类别：${machineProfile}（操作者声明，需核对硬件信息）；真实设备未测。各机器独立归档，hosted CI 仅验证功能。`, ...machineEnvironmentLines(report.environment), '', ...provenanceLines(provenance), ...samples.filter(sample => !sample.ok).map(sample => `- 失败 ${sample.ordinal} ${sample.framework}/${sample.scale}/${sample.cache}：${sample.error}`)]
  await writeMachineReport({ reportDir: path.resolve(process.env['BENCH_COMPILE_METHODS_DIR'] ?? path.join(repoRoot, 'reports/compile/methods')), report, markdown: `${lines.join('\n')}\n`, reportName: 'compile-methods' })
  if (summaries.some(row => !row.complete)) {
    process.exitCode = 1
  }
}
