import { open, readFile } from 'node:fs/promises'
import path from 'pathe'

// Electron Info.plist reports Electron's version. Read the packaged IDE version instead.
export async function installedIdeVersion(cli: string) {
  for (const file of [path.resolve(cli, '../../Resources/app.asar'), path.resolve(cli, '../resources/app.asar')]) {
    const handle = await open(file, 'r').catch(() => undefined)
    if (!handle) {
      continue
    }
    try {
      const header = new Uint8Array(16)
      await handle.read(header, 0, 16, 0)
      const view = new DataView(header.buffer)
      const headerSize = view.getUint32(4, true)
      const jsonSize = view.getUint32(12, true)
      if (jsonSize <= 0 || jsonSize > 32 * 1024 * 1024 || headerSize < jsonSize) {
        throw new Error('Invalid ASAR header')
      }
      const json = new Uint8Array(jsonSize)
      await handle.read(json, 0, jsonSize, 16)
      const entry = JSON.parse(new TextDecoder().decode(json)).files['package.json'] as { offset: string, size: number }
      if (!entry || entry.size <= 0 || entry.size > 1024 * 1024 || !/^\d+$/.test(entry.offset)) {
        throw new Error('Invalid ASAR package metadata')
      }
      const content = new Uint8Array(entry.size)
      await handle.read(content, 0, entry.size, 8 + headerSize + Number(entry.offset))
      return (JSON.parse(new TextDecoder().decode(content)) as { version: string }).version
    }
    finally {
      await handle.close()
    }
  }
  for (const file of [path.resolve(cli, '../../Resources/package.nw/package.json'), path.resolve(cli, '../package.nw/package.json')]) {
    try {
      return (JSON.parse(await readFile(file, 'utf8')) as { version: string }).version
    }
    catch {}
  }
  throw new Error('Cannot verify installed IDE version')
}
