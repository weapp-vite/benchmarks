import type { CapabilityMatrix } from './types'
import { assertCapabilityBudget, capabilityBudgets } from './budgets'
import { assertPresetConfigPair } from './equivalence'
import { applicationTiers } from './fixtures'
import { providerTiers } from './tiers'

function assertKeys(actual: string[], expected: string[], label: string) {
  if (new Set(actual).size !== actual.length || actual.length !== expected.length
    || expected.some(key => !actual.includes(key))) {
    throw new Error(`Incomplete or duplicate ${label} capability matrix`)
  }
}

export function assertCapabilityMatrix(matrix: Pick<CapabilityMatrix, 'provider' | 'applications'>) {
  assertKeys(matrix.provider.map(row => row.id), providerTiers.map(tier => tier.id), 'provider')
  assertKeys(matrix.applications.map(row => `${row.tier}:${row.preset}`), applicationTiers.flatMap(tier => [`${tier.id}:standard`, `${tier.id}:performance`]), 'application')
  for (const row of matrix.provider) {
    if (row.bytes <= 0 || row.bytes > capabilityBudgets.providerBytes || !row.modules.length) {
      throw new Error(`Invalid or over-budget provider: ${row.id}`)
    }
  }
  for (const tier of applicationTiers) {
    const standard = matrix.applications.find(row => row.tier === tier.id && row.preset === 'standard')!
    const performance = matrix.applications.find(row => row.tier === tier.id && row.preset === 'performance')!
    if (standard.sourceHash !== performance.sourceHash) {
      throw new Error(`Preset sources differ: ${tier.id}`)
    }
    assertPresetConfigPair(standard.config, performance.config)
    for (const row of [standard, performance]) {
      if (!row.manifest.files.length || row.size.totals.bytes !== row.packages.totalBytes) {
        throw new Error(`Incomplete application outputs: ${tier.id}`)
      }
      assertCapabilityBudget(row.packages)
    }
  }
}
