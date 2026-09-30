import type { AnalysisOutput } from '../src/size/types'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { generateReport } from '../src/size/report'

function recordedOutput(): AnalysisOutput {
  return JSON.parse(readFileSync(new URL('../../../reports/size/wevu-analysis.json', import.meta.url), 'utf8'))
}

describe('size report evidence', () => {
  it.each([false, true, ['./dist/setup.mjs'], undefined])('renders recorded sideEffects %j without making a pruning claim', (sideEffects) => {
    const output = recordedOutput()
    output.wevuPackage = { version: '9.0.0-test', sideEffects, entryFiles: [] }
    const report = generateReport(output)

    expect(report).toContain('wevu 版本：9.0.0-test')
    expect(report).toContain(`\`sideEffects\`：\`${JSON.stringify(sideEffects) ?? '未记录'}\``)
    expect(report).toContain('独立 Provider 的模块贡献不能用于归因真实 SFC 压力应用')
    expect(report).not.toContain('完整运行时基座')
    expect(report).not.toContain('wevu-src.js')
    expect(report).not.toContain('wevu-ref.js')
  })

  it('lists every selected file and its recorded bytes, including non-JS assets', () => {
    const output = recordedOutput()
    const report = generateReport(output)
    for (const project of output.projects) {
      expect(report).toContain(`| ${project.label} | ${project.totals.runtimeFiles} | ${(project.totals.runtimeBytes / 1024).toFixed(1)} KB |`)
      for (const file of project.files.filter(file => file.runtime)) {
        expect(report).toContain(`| ${file.path} | ${(file.bytes / 1024).toFixed(1)} KB | ${file.bytes} | ${file.type} | ${file.bucket} |`)
      }
    }
    expect(report).toContain('可能包含 JS、模板、样式、WXS 或 JSON')
    expect(report).toContain('不能分离同一 chunk 内的业务代码和框架模块')
  })

  it('uses renamed chunks and partial project sets without inferring missing evidence', () => {
    const output = recordedOutput()
    const project = output.projects[0]!
    const file = project.files.find(file => file.runtime)!
    file.path = 'future-layout/vendor-new-name.js'
    output.projects = [project]
    output.wevuPackage = null
    const report = generateReport(output)

    expect(report).toContain(file.path)
    expect(report).not.toContain('weapp-vendors/wevu-runtime.js')
    expect(report).not.toContain('uni-app vite vue3 选定文件体积')
    expect(report).toContain('未能读取')
    expect(report).toContain('需要同版本、同场景的独立运行时验证')
  })
})
