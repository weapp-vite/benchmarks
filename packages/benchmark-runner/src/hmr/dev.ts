import { Buffer } from 'node:buffer'
import { execFile, spawn } from 'node:child_process'
import process from 'node:process'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function appendRecentOutput(message: string, output: string[]) {
  const text = output.join('')
  if (!text.trim()) {
    return message
  }
  return `${message}\n\nRecent dev output:\n${text.length > 4_000 ? text.slice(-4_000) : text}`
}

export function startDevProcess(options: {
  command: string
  args: string[]
  cwd: string
  env: NodeJS.ProcessEnv
}) {
  const controller = new AbortController()
  const output: string[] = []
  let outputOffset = 0
  const child = spawn(options.command, options.args, {
    cwd: options.cwd,
    env: options.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: process.platform !== 'win32',
    shell: process.platform === 'win32' && options.command.endsWith('.cmd'),
  })

  const appendOutput = (chunk: unknown) => {
    if (typeof chunk === 'string') {
      output.push(chunk)
    }
    else if (chunk instanceof Uint8Array) {
      output.push(Buffer.from(chunk).toString('utf8'))
    }
    const text = output.join('')
    if (text.length > 64_000) {
      outputOffset += text.length - 64_000
      output.splice(0, output.length, text.slice(-64_000))
    }
  }

  child.stdout?.on('data', appendOutput)
  child.stderr?.on('data', appendOutput)

  const closed = new Promise<{ code: number | null, signal: NodeJS.Signals | null }>((resolve) => {
    child.on('close', (code, signal) => {
      controller.abort(new Error(`Owned dev process exited: ${code ?? signal}`))
      resolve({ code, signal })
    })
    child.on('error', (error) => {
      output.push(error.message)
      controller.abort(error)
      resolve({ code: null, signal: null })
    })
  })

  const waitFor = async <T>(task: Promise<T>, description: string) => {
    const winner = await Promise.race([
      task.then(value => ({ type: 'task' as const, value })),
      closed.then(result => ({ type: 'closed' as const, result })),
    ])
    if (winner.type === 'task') {
      return winner.value
    }
    throw new Error(appendRecentOutput(
      `dev 进程在 ${description} 前退出：code=${winner.result.code ?? 'unknown'} signal=${winner.result.signal ?? 'none'}`,
      output,
    ))
  }

  const waitForOutput = async (matcher: RegExp, description: string, timeoutMs: number, since = 0) => {
    const started = Date.now()
    while (Date.now() - started < timeoutMs) {
      controller.signal.throwIfAborted()
      const text = output.join('').slice(Math.max(0, since - outputOffset))
      matcher.lastIndex = 0
      if (matcher.test(text)) {
        return text
      }
      await Promise.race([sleep(200), closed])
    }
    throw new Error(appendRecentOutput(`等待 dev 输出超时：${description}`, output))
  }

  const stop = async () => {
    if (!controller.signal.aborted && child.exitCode == null && child.pid) {
      try {
        if (process.platform !== 'win32') {
          process.kill(-child.pid, 'SIGTERM')
        }
        else {
          await new Promise<void>((resolve) => {
            execFile('taskkill.exe', ['/PID', String(child.pid), '/T', '/F'], { timeout: 3000 }, () => resolve())
          })
        }
      }
      catch {}
    }
    await Promise.race([closed, sleep(3_000)])
    if (!controller.signal.aborted && child.exitCode == null && child.pid) {
      try {
        if (process.platform !== 'win32') {
          process.kill(-child.pid, 'SIGKILL')
        }
        else {
          child.kill('SIGKILL')
        }
      }
      catch {}
    }
    await Promise.race([closed, sleep(1_000)])
    controller.abort(new Error('Owned dev session stopped'))
  }

  return {
    waitFor,
    waitForOutput,
    getOutput: () => output.join(''),
    outputCursor: () => outputOffset + output.join('').length,
    outputSince: (cursor: number) => output.join('').slice(Math.max(0, cursor - outputOffset)),
    stop,
    signal: controller.signal,
    pid: child.pid,
  }
}
