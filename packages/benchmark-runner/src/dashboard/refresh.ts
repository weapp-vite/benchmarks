import type { VerificationReport, VerificationStep } from './types'
import { spawn } from 'node:child_process'
import process from 'node:process'
import path from 'pathe'
import { sanitizeTerminalOutput } from '../fs'
import { repoRoot } from '../projects'
import { createMachineEnvironment } from '../reports/environment'
import { generateDashboard } from './generate'
import { writeVerificationReport } from './verification'

const tailLimit = 8_000

const steps = [
  ['install', '安装依赖', ['install', '--frozen-lockfile']],
  ['build', '构建', ['run', 'build']],
  ['lint', '代码检查', ['run', 'lint']],
  ['typecheck', '类型检查', ['run', 'typecheck']],
  ['tsd', '类型 API 测试', ['run', 'tsd']],
  ['test', '单元与集成测试', ['run', 'test']],
  ['audit', '依赖安全审计', ['audit', '--audit-level=moderate']],
  ['hbuilderx', 'HBuilderX uni-app x smoke', ['run', 'test:hbuilderx:uni-app-x']],
  ['compile', '编译基准', ['run', 'bench:compile']],
  ['runtime', '运行时 IDE E2E 基准', ['run', 'bench:runtime']],
  ['hmr', 'HMR 基准', ['run', 'bench:hmr']],
  ['size', 'wevu 体积分析', ['run', 'bench:size:wevu']],
] as const

function tail(value: string) {
  const sanitized = sanitizeTerminalOutput(value)
  return sanitized.length > tailLimit ? sanitized.slice(-tailLimit) : sanitized
}

async function runStep(id: string, label: string, args: readonly string[]): Promise<VerificationStep> {
  const startedAt = new Date().toISOString()
  const started = performance.now()
  const command = `pnpm ${args.join(' ')}`
  process.stdout.write(`\n[full-report] ${label}: ${command}\n`)
  let stdout = ''
  let stderr = ''
  const child = spawn('pnpm', [...args], {
    cwd: repoRoot,
    env: { ...process.env, CI: '1', FORCE_COLOR: '0' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  child.stdout.setEncoding('utf8')
  child.stderr.setEncoding('utf8')
  child.stdout.on('data', (chunk: string) => {
    stdout += chunk
    process.stdout.write(chunk)
  })
  child.stderr.on('data', (chunk: string) => {
    stderr += chunk
    process.stderr.write(chunk)
  })
  const exitCode = await new Promise<number | null>(resolve => child.on('close', resolve))
  const semanticFailure = id === 'hbuilderx'
    && /不是 uni-app 项目|编译失败|build failed with errors/i.test(`${stdout}\n${stderr}`)
  if (semanticFailure) {
    stderr += '\nHBuilderX reported a semantic failure despite returning exit code 0.\n'
  }
  return {
    id,
    label,
    command,
    startedAt,
    finishedAt: new Date().toISOString(),
    durationMs: Math.round(performance.now() - started),
    status: exitCode === 0 && !semanticFailure ? 'passed' : 'failed',
    exitCode,
    stdoutTail: tail(stdout),
    stderrTail: tail(stderr),
  }
}

async function main() {
  const results: VerificationStep[] = []
  for (const [id, label, args] of steps) {
    results.push(await runStep(id, label, args))
  }
  const report: VerificationReport = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    environment: await createMachineEnvironment(process.env['WECHAT_DEVTOOLS_CLI']
      ? { wechatDevtools: process.env['WECHAT_DEVTOOLS_CLI'] }
      : {}),
    overallStatus: results.every(step => step.status === 'passed') ? 'passed' : 'failed',
    steps: results,
  }
  await writeVerificationReport(path.join(repoRoot, 'reports/verification'), report)
  await generateDashboard(report)
  if (report.overallStatus === 'failed') {
    process.exitCode = 1
  }
}

main().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`)
  process.exitCode = 1
})
