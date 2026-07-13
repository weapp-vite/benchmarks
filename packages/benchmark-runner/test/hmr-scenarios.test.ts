import { describe, expect, it } from 'vitest'
import { frameworkHmrScenarios } from '../src/hmr/scenarios/frameworks'

describe('framework HMR scenario contracts', () => {
  it('tracks Taro template output in page JS and excludes unsupported page config HMR', () => {
    const taroScenarios = frameworkHmrScenarios.filter(scenario => scenario.project === 'taro-vue3')
    const template = taroScenarios.find(scenario => scenario.id === 'taro-vue3-template')

    expect(template?.outputFiles).toEqual(['dist/pages/index/index.js'])
    expect(taroScenarios.map(scenario => scenario.id)).toEqual([
      'taro-vue3-script',
      'taro-vue3-template',
      'taro-vue3-style',
    ])
  })
})
