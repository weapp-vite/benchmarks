import { describe, expect, it } from 'vitest'
import { normalizeGeneratedText, sanitizeTerminalOutput } from '../src/fs'

describe('terminal output sanitization', () => {
  it('removes invisible formatting characters from captured logs', () => {
    expect(sanitizeTerminalOutput('\u200Bready\u200C\u200D\u2060\uFEFF')).toBe('ready')
  })
})

describe('generated text normalization', () => {
  it('removes trailing whitespace and keeps one final newline', () => {
    expect(normalizeGeneratedText('first  \nsecond\t\n\n')).toBe('first\nsecond\n')
  })
})
