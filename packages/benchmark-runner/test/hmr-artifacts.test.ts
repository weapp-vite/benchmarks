import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'pathe'
import { afterEach, describe, expect, it } from 'vitest'
import { snapshotArtifacts, waitForArtifactChange } from '../src/hmr/artifacts'

const temporaryRoots: string[] = []

afterEach(async () => {
  await Promise.all(temporaryRoots.splice(0).map(root => rm(root, { recursive: true, force: true })))
})

describe('HMR artifact marker matching', () => {
  it('ignores an older update and waits for the current attempt marker', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'benchmark-hmr-'))
    temporaryRoots.push(root)
    const artifact = path.join(root, 'page.js')
    await writeFile(artifact, 'baseline', 'utf8')
    const before = await snapshotArtifacts([artifact])

    setTimeout(() => void writeFile(artifact, 'old-marker', 'utf8'), 10)
    setTimeout(() => void writeFile(artifact, 'current-marker', 'utf8'), 30)

    const changed = await waitForArtifactChange(before, 500, 5, 'current-marker')
    expect(changed.content).toContain('current-marker')
  })
})
