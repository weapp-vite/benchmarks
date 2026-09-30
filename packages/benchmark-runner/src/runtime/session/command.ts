import type { Deadline } from './deadline'
import { spawn } from 'node:child_process'
import process from 'node:process'

// Only the spawned CLI process is signalled. A CLI PID is never treated as an IDE PID.
export async function cliCommand(cli: string, args: string[], deadline: Deadline, cap = 15_000) {
  const timeout = deadline.remaining(args[0] ?? 'CLI', cap)
  const windowsBatch = process.platform === 'win32' && /\.(?:cmd|bat)$/i.test(cli)
  const child = spawn(cli, args, { stdio: ['ignore', 'pipe', 'pipe'], shell: windowsBatch, windowsHide: true })
  let output = ''
  const append = (chunk: Uint8Array) => {
    output = `${output}${String(chunk)}`.slice(-16_000)
  }
  child.stdout.on('data', append)
  child.stderr.on('data', append)
  return await new Promise<{ code: number | null, output: string }>((resolve, reject) => {
    const timer = setTimeout(() => {
      child.kill('SIGKILL')
      reject(new Error(`CLI ${args[0]} timed out after ${timeout}ms`))
    }, timeout)
    child.once('error', (error) => {
      clearTimeout(timer)
      reject(error)
    })
    child.once('close', (code) => {
      clearTimeout(timer)
      resolve({ code, output })
    })
  })
}
