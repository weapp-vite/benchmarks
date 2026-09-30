import { randomUUID } from 'node:crypto'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import process from 'node:process'
import path from 'pathe'

export async function reserveSuite() {
  const dir = path.join(tmpdir(), 'benchmarks-ide-suite')
  const token = randomUUID()
  await mkdir(dir).catch(() => {
    throw new Error('Another IDE suite owns the global runner lock; refusing concurrent IDE automation')
  })
  await writeFile(path.join(dir, 'owner.json'), JSON.stringify({ pid: process.pid, token }))
  let released = false
  return async () => {
    if (released) {
      return
    }
    const owner = JSON.parse(await readFile(path.join(dir, 'owner.json'), 'utf8')) as { token: string }
    if (owner.token !== token) {
      throw new Error('IDE suite ownership changed; refusing cleanup')
    }
    released = true
    await rm(dir, { recursive: true })
  }
}

export async function unusedPort() {
  const server = createServer()
  return await new Promise<number>((resolve, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      const address = server.address()
      if (!address || typeof address === 'string') {
        server.close()
        reject(new Error('Cannot allocate an automation port'))
        return
      }
      server.close(error => error ? reject(error) : resolve(address.port))
    })
  })
}

export function onceDispose(action: () => Promise<void>) {
  let pending: Promise<void> | undefined
  return () => pending ??= action()
}
