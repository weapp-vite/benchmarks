import type { VerificationStep } from '../types'
import { spawn } from 'node:child_process'
import process from 'node:process'
import { sanitizeTerminalOutput } from '../../fs'
import { repoRoot } from '../../projects'

const tailLimit = 8_000

function tail(value: string) {
  const sanitized = sanitizeTerminalOutput(value)
  return sanitized.length > tailLimit ? sanitized.slice(-tailLimit) : sanitized
}

export async function runStep(id: string, label: string, args: readonly string[], runEnv: NodeJS.ProcessEnv): Promise<VerificationStep> {
  const startedAt = new Date().toISOString()
  const started = performance.now()
  const command = `pnpm ${args.join(' ')}`
  process.stdout.write(`\n[full-report] ${label}: ${command}\n`)
  let stdout = ''
  let stderr = ''
  const child = spawn('pnpm', [...args], {
    cwd: repoRoot,
    env: { ...runEnv, FORCE_COLOR: '0' },
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
