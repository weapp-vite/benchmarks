import { describe, expect, it } from 'vitest'
import { collectVersions, isPrerelease, versionOf } from './stable'

describe('stable dependency helpers', () => {
  it('recognizes prerelease versions', () => {
    expect(isPrerelease('7.11.0')).toBe(false)
    expect(isPrerelease('7.11.1-beta.1')).toBe(true)
  })

  it('reads dependencies before devDependencies', () => {
    expect(versionOf({ dependencies: { vite: '5.2.8' }, devDependencies: { vite: '5.0.0' } }, 'vite')).toBe('5.2.8')
    expect(versionOf({ devDependencies: { vite: '5.2.8' } }, 'vite')).toBe('5.2.8')
    expect(versionOf({}, 'vite')).toBe('-')
  })

  it('collects a stable package group', () => {
    expect(collectVersions({ dependencies: { a: '1.0.0' }, devDependencies: { b: '2.0.0' } }, ['a', 'b'])).toEqual([
      { name: 'a', version: '1.0.0' },
      { name: 'b', version: '2.0.0' },
    ])
  })
})
