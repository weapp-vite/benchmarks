import type { Deadline } from './deadline'
import { spawn } from 'node:child_process'

export async function macDesktopLocked(deadline: Deadline) {
  const child = spawn('/usr/sbin/ioreg', ['-n', 'Root', '-d', '1', '-a'], { stdio: ['ignore', 'pipe', 'ignore'] })
  let locked = false
  let boundary = ''
  // IORegistry can exceed 200 KB. Scan its stream without retaining personal session fields.
  child.stdout.setEncoding('utf8').on('data', (chunk: string) => {
    const text = boundary + chunk
    locked ||= /<key>CGSSessionScreenIsLocked<\/key>\s*<true\s*\/>/.test(text)
    boundary = text.slice(-256)
  })
  try {
    await deadline.run('desktop lock query', () => new Promise<void>((resolve, reject) => {
      child.once('error', reject)
      child.once('close', code => code === 0 ? resolve() : reject(new Error(`Desktop state query exited ${code}`)))
    }), 3000)
    return locked
  }
  finally {
    if (child.exitCode === null) {
      child.kill('SIGKILL')
    }
  }
}
