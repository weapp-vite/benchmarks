# 基准输入与报告来源

从本次改动起，compile、runtime、HMR、size 和 verification JSON 均保存 `provenance`。已有历史文件保持原样，不回填无法证明的版本或 run ID。

## 输入记录

采样前读取实际安装的工作区直接依赖，并沿 weapp-vite/wevu/uni 编译器消费路径解析相关 compiler/runtime 版本。声明必需但未安装的依赖会直接报错。参考子模块 SHA 单独记录，不代表消费的 npm 版本。

输入指纹包括 lockfile、应用代码/配置、runner、E2E 文件和实际包版本，以及源工作区位置摘要、Node、平台、架构、pnpm user-agent 与 BENCH/WECHAT/Node/CI/TZ 环境设置的摘要。忽略构建目录、报告、缓存和受管 TypeScript 产物；Git 忽略的根目录/工作区 `.env*` 仍参与摘要。环境值与 `.env` 内容不会写入 provenance，只有文件相对路径和 SHA-256。

报告同时保存 HEAD、Git dirty、inputDirty、runner 源码摘要、测量参数和实际采集区间。因此未提交的锁文件、配置和场景修改可以区分。存在本地 `.env*` 时，inputDirty 保守标为 true。指纹不是对外部网络服务或任意读取仓库之外文件的插件的快照；额外外部输入需要先纳入受控配置，不能据此宣称完全可复现。

## 全量刷新与单项重跑

`pnpm report:refresh` 在执行验证前生成统一 run ID，各子命令检查父运行输入指纹并记录自己的参数与时间区间。每一步结束后重新采集输入；前后漂移会使报告保留失败状态。首次运行需要先安装依赖，保证能读取实际版本。

```sh
pnpm install --frozen-lockfile
pnpm report:refresh
# 输入、方法均与已验证基线一致时，重跑单项：
pnpm report:refresh --section runtime
```

单项重跑仅支持 compile/runtime/hmr/size。它真实执行该步骤并记录新 run ID，将原步骤、原采样时间、新命令结果和替换关系保存在 verification.revisions；执行证据另存 verification/reruns。失败命令不会被改为成功。输入或测量方法变化、历史基线缺 provenance、无法产出有效新报告时拒绝替换，并要求全量刷新。不要手工更改生成时间来通过时间窗口检查。

## Dashboard 验收

聚合同时验证 run ID、输入指纹、报告类型、摘要一致性、采集区间及对应 verification 步骤；独立重跑必须有匹配的 revision。没有对应 verification 的新单项报告可以单独阅读，但不会混入全量 dashboard。

历史无 provenance 报告仍可阅读，dashboard 标为 partial 并提示不能严格比较。历史趋势只采用相同输入和测量方法、同机器/工具链且样本矩阵一致的有效报告。size 的新工具链目录包含实际 weapp-vite 版本和输入指纹前缀；历史子模块命名目录不迁移、不修改。

所有新增 provenance 校验、输入漂移、跨轮次混入、历史兼容和重跑保留失败测试均执行 runner 的构建产物。
