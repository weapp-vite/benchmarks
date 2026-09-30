import { readFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import path from 'pathe'
import { outputManifest } from '../../artifacts/manifest'
import { hash } from '../../reports/provenance/hash'

// Compilers may publish their target JS before replacing sidecars. Observe a quiet
// snapshot after external timing ends, and verify bytes against that same manifest.
export async function settledOutput(root: string, signal: AbortSignal, timeoutMs = 5000) {
  const deadline = Date.now() + timeoutMs
  let lastError: unknown
  while (Date.now() < deadline) {
    signal.throwIfAborted()
    try {
      const manifest = await outputManifest(root)
      await setTimeout(100, undefined, { signal })
      const bytes = new Map<string, number>()
      for (const file of manifest.files) {
        const content = await readFile(path.join(root, file.path))
        if (hash(content) !== file.sha256) {
          throw new Error('Output bytes changed during diagnostic observation')
        }
        bytes.set(file.path, content.byteLength)
      }
      if (manifest.fingerprint === (await outputManifest(root)).fingerprint) {
        return { manifest, bytes }
      }
    }
    catch (error) {
      lastError = error
    }
    await setTimeout(20, undefined, { signal })
  }
  throw new Error('Output did not settle for a consistent diagnostic snapshot', { cause: lastError })
}
