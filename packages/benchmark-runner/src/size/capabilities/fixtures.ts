export type CapabilityPreset = 'standard' | 'performance'

const application = `<script setup lang="ts">
defineAppJson({
  pages: ['pages/index/index'],
  subPackages: [{ root: 'feature', pages: ['detail/index'] }],
})
</script>
`
const detail = '<template><view>subpackage fixture</view></template>\n'

function page(script: string, template: string) {
  return `<script setup lang="ts">\n${script}\n</script>\n\n<template>\n  ${template}\n</template>\n`
}

const refScript = 'import { ref } from \'wevu\'\n\nconst count = ref(1)'
export const applicationTiers = [
  { id: 'blank', label: '空白页面', files: { 'pages/index/index.vue': '<template><view>capability fixture</view></template>\n' } },
  { id: 'ref', label: 'ref', files: { 'pages/index/index.vue': page(refScript, '<view>{{ count }}</view>') } },
  { id: 'computed', label: 'ref + computed', files: { 'pages/index/index.vue': page('import { computed, ref } from \'wevu\'\n\nconst count = ref(1)\nconst doubled = computed(() => count.value * 2)', '<view>{{ doubled }}</view>') } },
  {
    id: 'component-event-model',
    label: '组件 / 事件 / model',
    files: {
      'pages/index/index.vue': page(`${refScript}\n\ndefinePageJson({\n  usingComponents: { counter: '/components/counter/index' },\n})`, '<view><counter v-model="count" /><text>{{ count }}</text></view>'),
      'components/counter/index.vue': page('defineComponentJson({ component: true })\n\nconst count = defineModel<number>({ default: 0 })', '<button @tap="count++">{{ count }}</button>'),
    },
  },
] satisfies Array<{ id: string, label: string, files: Record<string, string> }>

export function applicationSources(tier: typeof applicationTiers[number]): Record<string, string> {
  return { 'app.vue': application, 'feature/detail/index.vue': detail, ...tier.files }
}

export function applicationConfig(preset: CapabilityPreset) {
  return {
    weapp: {
      srcRoot: 'src',
      autoRoutes: false,
      wevu: preset === 'performance' ? { preset: 'performance' as const } : {},
    },
  }
}

export function configSource(preset: CapabilityPreset) {
  return `import { defineConfig } from 'weapp-vite/config'\n\nexport default defineConfig(${JSON.stringify(applicationConfig(preset), null, 2)})\n`
}
