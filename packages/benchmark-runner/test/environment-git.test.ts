import { execFile } from 'node:child_process'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { promisify } from 'node:util'
import path from 'pathe'
import { expect, it } from 'vitest'
import { readRecordedSubmodule } from '../src/reports/environment/git'

const execFileAsync = promisify(execFile)

// This real Git fixture starts eight subprocesses. Windows process startup can
// exceed Vitest's 5s unit-test default; retain a bounded integration-test budget.
it('reads the recorded gitlink without falling back to the parent HEAD', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'bench-gitlink-'))
  const reference = 'eb9995e74fc4f760d265972b9148417cd40aab63'
  const git = (...args: string[]) => execFileAsync('git', args, { cwd: root, timeout: 5_000 })
  try {
    await git('init')
    await mkdir(path.join(root, 'submodules/weapp-vite'), { recursive: true })
    await git('update-index', '--add', '--cacheinfo', `160000,${reference},submodules/weapp-vite`)
    await git('-c', 'user.name=Benchmark Test', '-c', 'user.email=benchmark@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-m', 'fixture')
    const parent = (await git('rev-parse', 'HEAD')).stdout.trim()
    expect(parent).not.toBe(reference)
    expect(await readRecordedSubmodule(root, 'submodules/weapp-vite')).toBe(reference)
    expect(await readRecordedSubmodule(root, 'missing')).toBeUndefined()
    await writeFile(path.join(root, 'ordinary.txt'), 'file')
    await git('add', 'ordinary.txt')
    expect(await readRecordedSubmodule(root, 'ordinary.txt')).toBeUndefined()
  }
  finally {
    await rm(root, { recursive: true, force: true })
  }
}, 30_000)
