import { spawn } from 'node:child_process'
import { createServer } from 'node:net'

const defaultCloseTimeoutMs = 15_000
const defaultPortSettleMs = 1_000
const defaultPortPollIntervalMs = 250

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function isPortAvailable(port: number) {
  const server = createServer()
  return new Promise<boolean>((resolve) => {
    server.once('error', () => resolve(false))
    server.listen(port, '127.0.0.1', () => {
      server.close(() => resolve(true))
    })
  })
}

export async function ensurePortReleased(
  port: number,
  closeProject: () => Promise<void>,
  options: {
    timeoutMs?: number
    settleMs?: number
    pollIntervalMs?: number
  } = {},
) {
  const timeoutMs = options.timeoutMs ?? defaultCloseTimeoutMs
  const settleMs = options.settleMs ?? defaultPortSettleMs
  const pollIntervalMs = options.pollIntervalMs ?? defaultPortPollIntervalMs
  const started = Date.now()
  let availableSince: number | undefined

  while (Date.now() - started < timeoutMs) {
    if (await isPortAvailable(port)) {
      availableSince ??= Date.now()
      if (Date.now() - availableSince >= settleMs) {
        return
      }
    }
    else {
      availableSince = undefined
      await closeProject()
    }
    await sleep(pollIntervalMs)
  }

  throw new Error(`微信开发者工具自动化端口未释放：${port}`)
}

async function waitForClose(
  child: ReturnType<typeof spawn>,
  projectPath: string,
  timeoutMs: number,
) {
  const result = await new Promise<{ code: number | null, timedOut: boolean }>((resolve, reject) => {
    const timer = setTimeout(() => {
      child.kill('SIGTERM')
      resolve({ code: null, timedOut: true })
    }, timeoutMs)

    child.once('error', (error) => {
      clearTimeout(timer)
      reject(error)
    })
    child.once('close', (code) => {
      clearTimeout(timer)
      resolve({ code, timedOut: false })
    })
  })

  if (result.timedOut) {
    throw new Error(`关闭微信开发者工具项目超时：${projectPath}`)
  }
  if (result.code !== 0) {
    throw new Error(`关闭微信开发者工具项目失败：${result.code ?? 'signal'}`)
  }
}

async function runCloseCommand(cliPath: string, projectPath: string, timeoutMs: number) {
  const child = spawn(cliPath, ['close', '--project', projectPath], {
    stdio: 'ignore',
  })
  await waitForClose(child, projectPath, timeoutMs)
}

export async function closeDevtoolsProject(
  cliPath: string,
  projectPath: string,
  port: number,
  options: {
    timeoutMs?: number
    settleMs?: number
  } = {},
) {
  const timeoutMs = options.timeoutMs ?? defaultCloseTimeoutMs
  const started = Date.now()
  const closeProject = async () => {
    const remainingMs = Math.max(1, timeoutMs - (Date.now() - started))
    await runCloseCommand(cliPath, projectPath, remainingMs)
  }
  await closeProject()
  await ensurePortReleased(port, closeProject, {
    timeoutMs: Math.max(1, timeoutMs - (Date.now() - started)),
    ...(typeof options.settleMs === 'number' ? { settleMs: options.settleMs } : {}),
  })
}
