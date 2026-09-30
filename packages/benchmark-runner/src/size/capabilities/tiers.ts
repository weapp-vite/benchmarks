// Consumer projection of weapp-vite #1064 / schema v4, pinned to 85edd490f3fcbffbebbd1697530da0ccb4cba5db.
export const upstreamDefinition = 'https://github.com/weapp-vite/weapp-vite/blob/85edd490f3fcbffbebbd1697530da0ccb4cba5db/scripts/runtime-size-config.ts'

interface Tier {
  id: string
  label: string
  imports: Record<string, string[] | '*'>
}

const reactivity = ['ref', 'reactive', 'computed', 'watch', 'nextTick']
const page = ['createApp', 'setWevuDefaults', 'createWevuComponent', 'onLoad', 'onReady', 'onMounted']
const template = ['normalizeClass', 'normalizeStyle']

export const providerTiers: Tier[] = [
  { id: 'reactivity-core', label: '响应式核心', imports: { 'wevu/internal-reactivity': ['ref'] } },
  { id: 'minimal-app', label: '最小应用', imports: { 'wevu/internal-runtime': ['createApp', 'setWevuDefaults'], 'wevu/internal-reactivity': ['ref'] } },
  { id: 'typical-page', label: '典型页面', imports: { 'wevu/internal-runtime': page, 'wevu/internal-reactivity': reactivity, 'wevu/internal-template': template } },
  { id: 'complex-component', label: '复杂组件', imports: { 'wevu/internal-runtime': [...page, 'provide', 'inject', 'useSlots', 'useTemplateRef', 'useBindModel', 'setPageLayout'], 'wevu/internal-reactivity': reactivity, 'wevu/internal-template': template } },
  { id: 'public-app', label: '公共入口最小应用', imports: { wevu: ['createApp', 'setWevuDefaults', 'ref'] } },
  { id: 'public-page', label: '公共入口典型页面', imports: { wevu: [...page, ...reactivity, ...template] } },
  { id: 'computed-extension', label: '扩展：ref / computed', imports: { 'wevu/internal-reactivity': ['ref', 'computed'] } },
  { id: 'router-store-layout-extension', label: '扩展：router / store / layout', imports: { 'wevu/router': ['createRouter', 'useRouter'], 'wevu/store': ['defineStore'], 'wevu/internal-runtime': ['setPageLayout'] } },
  { id: 'full-provider', label: '完整 Provider 上限', imports: { 'wevu/internal-runtime': '*', 'wevu/internal-reactivity': '*', 'wevu/internal-template': '*' } },
]

export function providerSource(tier: Tier) {
  const exports: string[] = []
  const imports = Object.entries(tier.imports).map(([entry, names], index) => {
    if (names === '*') {
      exports.push(`provider${index}`)
      return `import * as provider${index} from ${JSON.stringify(entry)}`
    }
    const aliases = names.map(name => `${name} as p${index}_${name}`)
    exports.push(...names.map(name => `p${index}_${name}`))
    return `import { ${aliases.join(', ')} } from ${JSON.stringify(entry)}`
  })
  return `${imports.join('\n')}\nexport { ${exports.join(', ')} }\n`
}
