import type { RuntimeSample } from './types'
import { mkdir, writeFile } from 'node:fs/promises'
import process from 'node:process'
import path from 'pathe'
import { runBuild } from '../artifacts/build'
import { outputManifest } from '../artifacts/manifest'
import { stageWorkspace } from '../artifacts/workspace'
import { repoRoot, runtimeProjects } from '../projects'
import { startReportRun } from '../reports/provenance/run'
import { defaultIterations } from './constants'
import { resolveWechatCliPath, runtimeMode } from './devtools'
import { createRuntimeEnvironment } from './environment'
import { renderPlan, writeReport } from './report'
import { cliCommand } from './session/command'
import { Deadline } from './session/deadline'
import { materializeIdeDependencies } from './session/npm'
import { reserveSuite } from './session/ownership'
import { runtimePreflight } from './session/preflight'
import { collectInOwnedWorker } from './session/supervise'

export async function runRuntimeBenchmark() {
  const reportDir = path.resolve(process.env['BENCH_REPORT_RUNTIME_DIR'] ?? path.join(repoRoot, 'reports/runtime'))
  if (runtimeMode() === 'plan') {
    await renderPlan(reportDir)
    return
  }
  const iterations = Number(process.env['BENCH_RUNTIME_ITERATIONS'] ?? defaultIterations)
  if (!Number.isInteger(iterations) || iterations < 1 || iterations > 1000) {
    throw new Error('Runtime iterations must be an integer from 1 to 1000')
  }
  const filters = process.env['BENCH_RUNTIME_PROJECTS']?.split(',').map(item => item.trim()).filter(Boolean)
  const projects = filters ? runtimeProjects.filter(project => filters.includes(project.id)) : runtimeProjects
  if (!projects.length || filters?.some(id => !projects.some(project => project.id === id))) {
    throw new Error('Unknown or empty runtime project selection')
  }
  const run = await startReportRun('runtime', { schemaVersion: 2, iterations, projects, completion: 'route-to-verified-view', pollIntervalMs: 100, retries: 0 })
  const cliPath = await resolveWechatCliPath()
  const preflight = cliPath
    ? await runtimePreflight(cliPath, new Deadline(45_000))
    : { checkedAt: new Date().toISOString(), source: '', cliPath: '', status: 'not-installed' as const, reason: 'WeChat DevTools CLI not found' }
  const samples: RuntimeSample[] = []
  const notes = [
    '统一外部边界为请求 reLaunch 至真实 IDE 确认最终视图；包括导航、RPC、100ms 轮询和七项视图检查的观察成本，不称为纯 host commit 或 paint 耗时。',
    '原八场景的页面内部耗时原样保存，但 nextTick、原生 setData 回调与 Mpx setData 回调边界不同，不再混合排名。',
    '独立校验确定性数据的八项 count/checksum；控制台载荷必须匹配本轮唯一 token，不能使用上一轮日志或旧 samples 文件。',
    '预检与每个项目分别设总 deadline；每个项目共享一次 automator，通过 reLaunch 切换轮次；失败不补采为成功。',
    '仅关闭本任务隔离项目并断开自己持有的连接，不调用全局 quit/kill，不清理用户缓存或其他会话。',
    '视图查询确认的是 IDE 自动化可观察结果，不证明显示器已经完成光栅化，也不等价真机。setData 字节/次数和内存收益未采集。',
  ]
  let workspace: Awaited<ReturnType<typeof stageWorkspace>> | undefined
  let releaseSuite: (() => Promise<void>) | undefined
  try {
    if (preflight.status !== 'passed' || !cliPath) {
      throw new Error(`${preflight.status}: ${preflight.reason ?? 'IDE unavailable'}`)
    }
    releaseSuite = await reserveSuite()
    workspace = await stageWorkspace(repoRoot, run.inputs, 'runtime')
    for (const project of projects) {
      try {
        // Build sources in the owned workspace before starting the IDE operation deadline.
        if (!project.runtimeNpmBuild) {
          await runBuild(path.join(workspace.root, project.appDir), 'build')
        }
        const deadline = new Deadline(Number(process.env['BENCH_RUNTIME_PROJECT_DEADLINE'] ?? 300_000))
        if (project.runtimeNpmBuild) {
          const packages = await materializeIdeDependencies(path.join(repoRoot, project.appDir), path.join(workspace.root, project.appDir))
          const result = await cliCommand(cliPath, ['build-npm', '--project', path.join(workspace.root, project.runtimeProjectDir)], deadline, 60_000)
          const npm = await outputManifest(path.join(workspace.root, project.appDir, 'src/miniprogram_npm')).catch(() => undefined)
          await mkdir(reportDir, { recursive: true })
          await writeFile(path.join(reportDir, `${project.id}-npm.json`), JSON.stringify({ runId: run.runId, packages, ...result, artifacts: npm }, null, 2))
          if (result.code !== 0) {
            throw new Error(`build-npm failed: ${result.code}`)
          }
          if (!npm?.files.some(file => file.path === '@vue-mini/core/index.js')) {
            throw new Error(`build-npm did not produce the required @vue-mini/core entry: ${result.output}`)
          }
        }
        samples.push(...await collectInOwnedWorker(project, iterations, cliPath, workspace.root, deadline.remaining('project worker')))
      }
      catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        samples.push(...Array.from({ length: iterations }, (_, index): RuntimeSample => ({
          project: project.id,
          label: project.label,
          iteration: index + 1,
          page: project.runtimePage,
          ok: false,
          source: 'none',
          metrics: [],
          error: message,
          failureKind: 'not-executed',
        })))
      }
    }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    samples.push(...projects.flatMap(project => Array.from({ length: iterations }, (_, index): RuntimeSample => ({
      project: project.id,
      label: project.label,
      iteration: index + 1,
      page: project.runtimePage,
      ok: false,
      source: 'none',
      metrics: [],
      error: message,
      failureKind: 'preflight',
    }))))
  }
  finally {
    for (const cleanup of [workspace?.dispose, releaseSuite]) {
      try {
        await cleanup?.()
      }
      catch (error) {
        for (const sample of samples) {
          sample.ok = false
          sample.failureKind = 'cleanup'
          sample.error = `Suite cleanup failed: ${error instanceof Error ? error.message : String(error)}`
        }
      }
    }
  }
  await writeReport(reportDir, {
    provenance: await run.finish(),
    generatedAt: new Date().toISOString(),
    mode: 'ide-e2e',
    iterations,
    environment: await createRuntimeEnvironment(cliPath ? { wechatDevtools: cliPath } : {}),
    samples,
    preflight,
    notes,
  })
  if (samples.some(sample => !sample.ok)) {
    process.exitCode = 1
  }
}
