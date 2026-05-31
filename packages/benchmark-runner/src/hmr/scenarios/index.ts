import type { HmrScenario } from '../types'
import { frameworkHmrScenarios } from './frameworks'
import { weappViteHmrScenarios } from './weapp-vite'

export const hmrScenarios: HmrScenario[] = [
  ...weappViteHmrScenarios,
  ...frameworkHmrScenarios,
]
