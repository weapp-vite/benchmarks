import type { CapabilityMatrix } from './types'
import { formatKb } from '../format'

export function capabilityReport(matrix: CapabilityMatrix | undefined) {
  if (!matrix) {
    return ['## 能力成本矩阵', '', '当前报告未采集能力矩阵，不能据此推断各能力的边际成本。', '']
  }
  return [
    '## 能力成本矩阵',
    '',
    `平台：${matrix.platform}；[Provider 定义](${matrix.upstreamDefinition})。原始字节用于预算，压缩体积仅供参考。`,
    '',
    '### 独立 Provider 阶梯',
    '',
    '| 阶梯 | 原始 bytes | gzip bytes | brotli bytes | 有贡献模块数 |',
    '| --- | ---: | ---: | ---: | ---: |',
    ...matrix.provider.map(row => `| ${row.label} | ${row.bytes} | ${row.gzipBytes} | ${row.brotliBytes} | ${row.modules.length} |`),
    '',
    '### 实际 SFC 应用（全部资产）',
    '',
    '| 场景 | 预设 | 主包 bytes | 分包 bytes | 总包 bytes | gzip bytes | brotli bytes | 相对同预设空白成本 |',
    '| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...matrix.applications.map((row) => {
      const baseline = matrix.applications.find(item => item.tier === 'blank' && item.preset === row.preset)!
      return `| ${row.label} | ${row.preset} | ${row.packages.mainBytes} | ${row.packages.subpackages.reduce((sum, item) => sum + item.bytes, 0)} | ${row.packages.totalBytes} | ${row.size.totals.gzipBytes} | ${row.size.totals.brotliBytes} | ${row.packages.totalBytes - baseline.packages.totalBytes} bytes |`
    }),
    '',
    '### performance 成本与收益',
    '',
    '| 场景 | performance 总包增量 | 更新延迟 | setData 次数/字节 | 内存收益 |',
    '| --- | ---: | --- | --- | --- |',
    ...matrix.applications.filter(row => row.preset === 'standard').map((row) => {
      const performance = matrix.applications.find(item => item.tier === row.tier && item.preset === 'performance')!
      return `| ${row.label} | ${performance.packages.totalBytes - row.packages.totalBytes} bytes | 未测量 | 未测量 | 未测量 |`
    }),
    '',
    `运行时状态：${matrix.runtime.status}。${matrix.runtime.reason}`,
    '',
    `仓库原始字节预算：主包 ${formatKb(matrix.budgets.mainBytes)}、单个分包 ${formatKb(matrix.budgets.subpackageBytes)}、总包 ${formatKb(matrix.budgets.totalBytes)}。`,
    '',
    ...matrix.notes.map(note => `- ${note}`),
    '- JSON 保存每格源码清单、配置、产物 SHA-256 和完整文件分类；独立 Provider 保存具名导入源码及模块贡献。',
    '- 压力应用另行核对源码、安装依赖、配置及本地环境输入；工作区路径和 package 名称单独列为身份差异。生成矩阵则在同一路径构建。',
    '',
  ]
}
