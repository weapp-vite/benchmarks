import { readFile, stat } from 'node:fs/promises'

export const defaultArtifactChangePollIntervalMs = 10

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

interface ArtifactState {
  file: string
  exists: boolean
  mtimeMs: number
  size: number
  content?: string
}

async function readArtifact(file: string): Promise<ArtifactState> {
  try {
    const [info, content] = await Promise.all([
      stat(file),
      readFile(file, 'utf8').catch(() => undefined),
    ])
    return {
      file,
      exists: true,
      mtimeMs: info.mtimeMs,
      size: info.size,
      ...(typeof content === 'string' ? { content } : {}),
    }
  }
  catch {
    return {
      file,
      exists: false,
      mtimeMs: 0,
      size: 0,
    }
  }
}

export async function snapshotArtifacts(files: string[]) {
  return Promise.all(files.map(file => readArtifact(file)))
}

function hasChanged(before: ArtifactState, after: ArtifactState) {
  if (before.exists !== after.exists) {
    return true
  }
  if (!after.exists) {
    return false
  }
  if (after.mtimeMs > before.mtimeMs || after.size !== before.size) {
    return true
  }
  return typeof after.content === 'string' && after.content !== before.content
}

export async function waitForArtifacts(files: string[], timeoutMs: number) {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    const states = await snapshotArtifacts(files)
    const missing = states.filter(state => !state.exists)
    if (missing.length === 0) {
      return states
    }
    await sleep(200)
  }
  throw new Error(`等待 HMR 初始产物超时：${files.join('、')}`)
}

export async function waitForArtifactChange(
  before: ArtifactState[],
  timeoutMs: number,
  pollIntervalMs = defaultArtifactChangePollIntervalMs,
) {
  const started = Date.now()
  const files = before.map(state => state.file)
  while (Date.now() - started < timeoutMs) {
    const after = await snapshotArtifacts(files)
    const changed = after.find((state, index) => {
      const previous = before[index]
      return previous ? hasChanged(previous, state) : false
    })
    if (changed) {
      return changed
    }
    await sleep(pollIntervalMs)
  }
  throw new Error(`等待 HMR 产物更新超时：${files.join('、')}`)
}
