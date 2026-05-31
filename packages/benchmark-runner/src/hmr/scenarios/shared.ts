export const weappViteReadyPattern = /小程序初次构建完成[\s\S]*开发服务已就绪|开发服务已就绪/

export function appendBefore(source: string, needle: string, insertion: string) {
  const index = source.lastIndexOf(needle)
  if (index < 0) {
    throw new Error(`未找到 HMR marker 插入位置：${needle}`)
  }
  return `${source.slice(0, index)}${insertion}${source.slice(index)}`
}

export function updateSingleQuotedValue(source: string, key: string, value: string) {
  const pattern = new RegExp(`(${key}:\\s*)'[^']*'`)
  if (!pattern.test(source)) {
    throw new Error(`未找到 ${key} 配置`)
  }
  return source.replace(pattern, `$1'${value}'`)
}

export function appendScriptMarker(source: string, marker: string) {
  return appendBefore(source, '</script>', `\nconst __hmrScriptMarker = '${marker}'\n`)
}

export function appendStyleMarker(source: string, marker: string) {
  return appendBefore(source, '</style>', `\n.hmr-style-marker-${marker} { color: #123456; }\n`)
}

export function insertTemplateMarker(source: string, marker: string) {
  return source.replace(
    '<view class="metrics">',
    `<view style="display: none;">${marker}</view>\n    <view class="metrics">`,
  )
}

export function updateJsonTitle(source: string, value: string) {
  const json = JSON.parse(source) as Record<string, unknown>
  json['navigationBarTitleText'] = value
  return `${JSON.stringify(json, null, 2)}\n`
}
