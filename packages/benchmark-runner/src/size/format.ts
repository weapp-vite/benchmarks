export function formatKb(bytes: number) {
  return `${(bytes / 1024).toFixed(1)} KB`
}

export function formatPercent(part: number, total: number) {
  return total > 0 ? `${(part / total * 100).toFixed(1)}%` : '-'
}

export function formatGap(base: number, value: number) {
  return base > 0 ? `${(value / base).toFixed(2)}x` : '-'
}

export function rows(values: string[][]) {
  return values.map(value => `| ${value.join(' | ')} |`)
}
