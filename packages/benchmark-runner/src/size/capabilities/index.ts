import type { InputSnapshot } from '../../reports/provenance/types'
import type { CapabilityMatrix } from './types'
import { stageWorkspace } from '../../artifacts/workspace'
import { collectApplications } from './application'
import { capabilityBudgets } from './budgets'
import { verifyStressInputs } from './equivalence'
import { collectProviderLadder } from './provider'
import { upstreamDefinition } from './tiers'
import { assertCapabilityMatrix } from './validate'

export async function collectCapabilityMatrix(root: string, inputs: InputSnapshot): Promise<CapabilityMatrix> {
  const stressInputs = await verifyStressInputs(root, inputs)
  const workspace = await stageWorkspace(root, inputs, 'capabilities')
  try {
    const provider = await collectProviderLadder(workspace.root)
    if (provider.some(row => row.bytes > capabilityBudgets.providerBytes)) {
      throw new Error('Provider capability budget exceeded')
    }
    const applications = await collectApplications(workspace.root)
    assertCapabilityMatrix({ provider, applications })
    return {
      schemaVersion: 1,
      platform: 'weapp',
      upstreamDefinition,
      provider,
      applications,
      stressInputs,
      budgets: capabilityBudgets,
      runtime: { status: 'not-measured', reason: 'No matching, independently verified IDE runtime sample is attached to these generated applications; only size costs are reported.' },
      notes: [
        'Provider 的七个上游阶梯沿用 #1064/schema v4；computed 和 router/store/layout 是另列的消费端扩展。',
        'Provider 是具名导入的独立 esbuild 产物，不等于实际 SFC 小程序的固定运行时成本。模块归因来自 esbuild metafile，可能不包含输出包装开销。',
        '实际应用矩阵计入全部 JS、模板、样式、WXS、JSON 和其他资产，不通过 chunk 文件名挑选；没有模块级分离证据时不称为纯 runtime 税。',
        '普通与 performance 在同一暂存应用路径、相同安装依赖下构建；源码相同，仅 weapp.wevu.preset 不同。每格比较两次无缓存生产构建的完整清单。',
        '主包与分包按生成的 app.json 划分，gzip/brotli 为逐文件统计；预算只使用原始字节，仓库预算不代表微信平台上传限制。',
      ],
    }
  }
  finally {
    await workspace.dispose()
  }
}
