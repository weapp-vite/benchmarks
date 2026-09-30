import type { HmrDiagnostics } from './types'

function cell(value: unknown) {
  return String(value ?? '-').replaceAll('|', '\\|').replaceAll('\n', ' ')
}

export function diagnosticLines(report: HmrDiagnostics | undefined) {
  if (!report?.enabled) {
    return ['', '## 旁路诊断', '', '未执行；没有内部阶段或资源趋势证据。', '']
  }
  return [
    '',
    '## 旁路诊断',
    '',
    '诊断使用独立 watch 会话和上游 profile；耗时不进入上方跨框架排名。产物正确性不等于真实页面视图正确性。',
    `Run：${report.runId}；首个失败编辑：${report.firstFailure ?? '无'}；重放来源：${report.replayOf ?? '无'}。`,
    ...report.failures.map(error => `- 会话失败：${cell(error)}`),
    '',
    '| 编辑 ID | 阶段 | 成功 | 外部耗时 ms | profile | 变化文件数 | 变化字节 | 删除数 | RSS KiB | 诊断开销 ms | 原因 |',
    '| --- | --- | --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |',
    ...report.edits.map(edit => `| ${[
      edit.id,
      edit.phase,
      edit.ok,
      edit.externalMs?.toFixed(1),
      edit.profile.status,
      edit.changedFiles?.length,
      edit.changedBytes,
      edit.removedFiles?.length,
      edit.rssKiB,
      edit.observationMs.toFixed(1),
      [edit.error, edit.profile.reason, edit.resourceError].filter(Boolean).join('; '),
    ].map(cell).join(' | ')} |`),
    '',
    `有界 watch：请求 ${report.longWatch.requestedMs}ms，实际 ${report.longWatch.elapsedMs.toFixed(1)}ms，完成 ${report.longWatch.completedEdits} 次标记更新；RSS 起始/结束/峰值 ${report.longWatch.rssStartKiB ?? '-'}/${report.longWatch.rssEndKiB ?? '-'}/${report.longWatch.rssPeakKiB ?? '-'} KiB。`,
    'RSS 是被测进程树的观测值，短时趋势不足以判定内存泄漏；缺失值不填零。原始 profile 字段及逐文件变化保存在 JSON 中。',
    ...report.notes.map(note => `- ${note}`),
    '',
  ]
}
