import { execFile } from 'node:child_process'
import process from 'node:process'
import { promisify } from 'node:util'

const exec = promisify(execFile)

export async function ownedRss(pid: number | undefined): Promise<{ rssKiB?: number, resourceError?: string }> {
  if (!pid) {
    return { resourceError: 'Owned process has no PID' }
  }
  try {
    let rows: Array<{ pid: number, parent: number, rss: number }>
    if (process.platform === 'win32') {
      const { stdout } = await exec('powershell.exe', ['-NoProfile', '-Command', 'Get-CimInstance Win32_Process | Select-Object ProcessId,ParentProcessId,WorkingSetSize | ConvertTo-Json -Compress'], { timeout: 2000, maxBuffer: 2 ** 20 })
      const values = JSON.parse(stdout) as Array<{ ProcessId: number, ParentProcessId: number, WorkingSetSize: number }>
      rows = values.map(row => ({ pid: row.ProcessId, parent: row.ParentProcessId, rss: Number(row.WorkingSetSize) / 1024 }))
    }
    else {
      const { stdout } = await exec('ps', ['-axo', 'pid=,ppid=,rss='], { timeout: 2000, maxBuffer: 2 ** 20 })
      rows = stdout.trim().split('\n').map((line) => {
        const [id, parent, rss] = line.trim().split(/\s+/).map(Number)
        return { pid: id!, parent: parent!, rss: rss! }
      })
    }
    const owned = new Set([pid])
    let count = 0
    while (count !== owned.size) {
      count = owned.size
      for (const row of rows) {
        if (owned.has(row.parent)) {
          owned.add(row.pid)
        }
      }
    }
    const selected = rows.filter(row => owned.has(row.pid))
    return selected.length ? { rssKiB: selected.reduce((sum, row) => sum + row.rss, 0) } : { resourceError: 'Owned process exited before resource observation' }
  }
  catch (error) {
    return { resourceError: error instanceof Error ? error.message : String(error) }
  }
}
