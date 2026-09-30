import type { FileSize } from '../src/size/types'
import { describe, expect, it } from 'vitest'
import { assertCapabilityBudget, partitionPackages } from '../src/size/capabilities/budgets'
import { assertPresetConfigPair, parsePresetConfig } from '../src/size/capabilities/equivalence'
import { configSource } from '../src/size/capabilities/fixtures'
import { capabilityReport } from '../src/size/capabilities/report'

function file(path: string, bytes: number): FileSize {
  return { path, bytes, gzipBytes: 1, brotliBytes: 1, type: 'asset', bucket: 'asset', runtime: false }
}

describe('capability evidence boundaries', () => {
  it('counts renamed chunks and every asset while preserving package boundaries', () => {
    const files = [file('renamed-vendor.js', 100), file('page.wxml', 20), file('app.wxss', 30), file('feature/index.wxs', 40), file('feature/index.json', 50), file('feature/icon.png', 60)]
    const packages = partitionPackages(files, ['feature'])
    expect(packages).toMatchObject({ mainBytes: 150, totalBytes: 300, subpackages: [{ bytes: 150 }] })
    expect(partitionPackages(files.map(item => ({ ...item, path: item.path.replace('renamed-vendor', 'unrecognizable') })), ['feature']).totalBytes).toBe(300)
    expect(() => assertCapabilityBudget(packages, { mainBytes: 149, subpackageBytes: 500, totalBytes: 500, providerBytes: 500 })).toThrow('budget')
    expect(() => assertCapabilityBudget(packages, { mainBytes: 500, subpackageBytes: 149, totalBytes: 500, providerBytes: 500 })).toThrow('budget')
    expect(() => assertCapabilityBudget(packages, { mainBytes: 500, subpackageBytes: 500, totalBytes: 299, providerBytes: 500 })).toThrow('budget')
    expect(() => partitionPackages(files, ['feature', 'feature/overlap'])).toThrow('overlapping')
  })

  it('certifies only literal defineConfig pairs that differ by preset', () => {
    const standard = parsePresetConfig(configSource('standard'))
    const performance = parsePresetConfig(configSource('performance'))
    expect(() => assertPresetConfigPair(standard, performance)).not.toThrow()
    expect(() => assertPresetConfigPair(standard, parsePresetConfig(configSource('performance').replace('src', 'other')))).toThrow('beyond')
    for (const source of [
      configSource('standard').replace('weapp-vite/config', 'unknown-plugin'),
      configSource('standard').replace('export default defineConfig', 'export default fakeConfig'),
      `${configSource('standard')}\nprocess.env.MUTATED = 'yes'`,
      configSource('standard').replace('"srcRoot": "src"', '"srcRoot": process.env.ROOT'),
      configSource('standard').replace('"srcRoot": "src"', '"srcRoot": "src", "srcRoot": "other"'),
    ]) {
      expect(() => parsePresetConfig(source)).toThrow()
    }
  })

  it('keeps legacy reports without a matrix explicitly unavailable', () => {
    expect(capabilityReport(undefined).join('\n')).toContain('未采集能力矩阵')
  })
})
