export const scales = {
  small: { pages: 4, components: 4, shared: 4 },
  medium: { pages: 24, components: 12, shared: 12 },
  large: { pages: 80, components: 32, shared: 32 },
} as const
export type Scale = keyof typeof scales
export type Framework = 'native' | 'wevu'
export type CacheMode = 'reset-tool-state' | 'primed-tool-state'
export interface SamplingSettings {
  seed: number
  batches: number
  iterations: number
  scales: Scale[]
  frameworks: Framework[]
}
export interface ScheduledSample {
  ordinal: number
  batch: number
  iteration: number
  framework: Framework
  scale: Scale
  cache: CacheMode
}

export function samplingSchedule(settings: SamplingSettings): ScheduledSample[] {
  if (!Number.isInteger(settings.seed) || settings.seed < 1 || settings.seed > 0xFFFFFFFF
    || !Number.isInteger(settings.batches) || settings.batches < 1 || settings.batches > 20
    || !Number.isInteger(settings.iterations) || settings.iterations < 1 || settings.iterations > 100) {
    throw new Error('Invalid seed, batches or iterations')
  }
  if (!settings.scales.length || new Set(settings.scales).size !== settings.scales.length || settings.scales.some(scale => !Object.hasOwn(scales, scale))
    || !settings.frameworks.length || new Set(settings.frameworks).size !== settings.frameworks.length || settings.frameworks.some(framework => !['native', 'wevu'].includes(framework))) {
    throw new Error('Invalid scale/framework selection')
  }
  let state = settings.seed >>> 0
  const random = () => {
    state ^= state << 13
    state ^= state >>> 17
    state ^= state << 5
    return (state >>> 0) / 0x100000000
  }
  const schedule: ScheduledSample[] = []
  for (let batch = 1; batch <= settings.batches; batch++) {
    for (let iteration = 1; iteration <= settings.iterations; iteration++) {
      const round = settings.frameworks.flatMap(framework => settings.scales.flatMap(scale => (['reset-tool-state', 'primed-tool-state'] as const).map(cache => ({ framework, scale, cache, batch, iteration }))))
      for (let index = round.length - 1; index > 0; index--) {
        const other = Math.floor(random() * (index + 1))
        ;[round[index], round[other]] = [round[other]!, round[index]!]
      }
      for (const item of round) {
        schedule.push({ ...item, ordinal: schedule.length + 1 })
      }
    }
  }
  return schedule
}
