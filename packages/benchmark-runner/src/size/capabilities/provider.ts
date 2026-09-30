import type { ProviderMeasurement } from './types'
import { Buffer } from 'node:buffer'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { build } from 'esbuild'
import path from 'pathe'
import { hash } from '../../reports/provenance/hash'
import { providerSource, providerTiers } from './tiers'

export function compressedBytes(content: Uint8Array) {
  return { bytes: content.byteLength, gzipBytes: gzipSync(content).byteLength, brotliBytes: brotliCompressSync(content).byteLength }
}

export async function collectProviderLadder(root: string): Promise<ProviderMeasurement[]> {
  const results: ProviderMeasurement[] = []
  const consumer = path.join(root, 'apps/weapp-vite-wevu')
  for (const tier of providerTiers) {
    const source = providerSource(tier)
    const result = await build({
      absWorkingDir: consumer,
      bundle: true,
      metafile: true,
      format: 'esm',
      minify: true,
      legalComments: 'none',
      logLevel: 'silent',
      platform: 'browser',
      target: 'es2018',
      treeShaking: true,
      write: false,
      sourcemap: false,
      define: {
        'import.meta.env.DEV': 'false',
        'import.meta.env.PROD': 'true',
        'import.meta.env.IS_MINIPROGRAM': 'true',
        'import.meta.env.IS_WEB': 'false',
        'import.meta.env.MODE': '"production"',
        'import.meta.env.PLATFORM': '"weapp"',
        'import.meta.env.MP_PLATFORM': '"weapp"',
        'process.env.NODE_ENV': '"production"',
      },
      stdin: { contents: source, loader: 'js', resolveDir: consumer, sourcefile: `${tier.id}.mjs` },
    })
    if (result.outputFiles?.length !== 1 || !result.metafile) {
      throw new Error(`Missing provider output/metafile: ${tier.id}`)
    }
    const output = result.outputFiles[0]!.contents
    const modules = Object.values(result.metafile.outputs).flatMap(output => Object.entries(output.inputs)
      .filter(([, value]) => value.bytesInOutput > 0)
      .map(([file, value]) => ({
        path: file.replaceAll('\\', '/').replace(/^.*\/node_modules\//, 'node_modules/'),
        bytesInOutput: value.bytesInOutput,
      })))
    results.push({ id: tier.id, label: tier.label, source, sha256: hash(Buffer.from(output)), ...compressedBytes(output), modules })
  }
  if (results.length !== providerTiers.length || results.some(row => !row.bytes || !row.modules.length)) {
    throw new Error('Incomplete provider capability ladder')
  }
  return results
}
