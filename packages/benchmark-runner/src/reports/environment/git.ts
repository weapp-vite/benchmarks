import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

// Read the recorded gitlink, even when its checkout is absent/uninitialized.
// Running rev-parse inside an empty submodule walks up to the parent repository.
export async function readRecordedSubmodule(root: string, relative: string) {
  try {
    const { stdout } = await execFileAsync('git', ['ls-files', '--stage', '--', relative], { cwd: root })
    const records = stdout.trim().split('\n')
    if (records.length !== 1) {
      return undefined
    }
    return /^160000 ([a-f0-9]{40,64}) 0\t/.exec(records[0]!)?.[1]
  }
  catch {
    return undefined
  }
}
