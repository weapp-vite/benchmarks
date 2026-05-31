import type { HmrProfileSample } from './types'
import { readFile } from 'node:fs/promises'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function readProfileSamples(profilePath: string): Promise<HmrProfileSample[]> {
  let content = ''
  try {
    content = await readFile(profilePath, 'utf8')
  }
  catch {
    return []
  }
  return content
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line) as HmrProfileSample
      }
      catch {
        return undefined
      }
    })
    .filter((sample): sample is HmrProfileSample => (
      !!sample && typeof sample.totalMs === 'number' && Number.isFinite(sample.totalMs)
    ))
}

export async function waitForNextProfileSample(
  profilePath: string,
  previousCount: number,
  timeoutMs: number,
) {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    const samples = await readProfileSamples(profilePath)
    if (samples.length > previousCount) {
      return samples[previousCount] ?? samples.at(-1)!
    }
    await sleep(200)
  }
  throw new Error('等待 HMR profile 样本超时')
}
