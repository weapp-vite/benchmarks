export const steps = [
  ['install', '安装依赖', ['install', '--frozen-lockfile']],
  ['build', '构建', ['run', 'build']],
  ['lint', '代码检查', ['run', 'lint']],
  ['typecheck', '类型检查', ['run', 'typecheck']],
  ['tsd', '类型 API 测试', ['run', 'tsd']],
  ['test', '单元与集成测试', ['run', 'test']],
  ['audit', '依赖安全审计', ['audit', '--audit-level=moderate']],
  ['hbuilderx', 'HBuilderX uni-app x smoke', ['run', 'test:hbuilderx:uni-app-x']],
  ['compile', '编译基准', ['run', 'bench:compile']],
  ['runtime', '运行时 IDE E2E 基准', ['run', 'bench:runtime']],
  ['hmr', 'HMR 基准', ['run', 'bench:hmr']],
  ['size', 'wevu 体积分析', ['run', 'bench:size:wevu']],
] as const
