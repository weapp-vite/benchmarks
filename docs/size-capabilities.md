# 能力阶梯与预设成本矩阵

`pnpm bench:size:wevu` 除压力应用的历史文件分类外，必须采集完整能力矩阵。任何能力构建失败、矩阵缺格、输入不等价、产物不一致或预算超限都会让命令失败，不能用旧矩阵补位。`pnpm report:refresh` 沿用这一入口，失败仍由验证报告记录。

## 两类证据

独立 Provider 沿用上游 [schema v4 的七个能力定义](https://github.com/weapp-vite/weapp-vite/blob/85edd490f3fcbffbebbd1697530da0ccb4cba5db/scripts/runtime-size-config.ts)，另外单列 computed 与 router/store/layout 扩展。只测 weapp 平台，通过当前安装的 wevu 发布入口、明确具名导入和 production 静态定义构建；源码、esbuild 模块贡献、原始字节与 gzip/brotli 保存在 JSON。复用能力定义不意味着复用上游机器数值或七端验收，参考子模块不移动。

实际 SFC 应用包含空白、ref、computed、组件/事件/model 四格，每格分别构建 standard/performance。它们在同一个暂存应用路径使用相同源文件、安装依赖与环境，唯一语义配置差异是 `weapp.wevu.preset`。生成源代码先经过 ESLint、Stylelint，再执行两次无 Turbo 缓存的生产构建；核对完整路径/SHA-256 和静态引用，普通预设还执行生成的 Vue 类型检查。两个预设共用源文件，不以预设名称替换模板文本。

每格保存所有 JS、WXML、WXSS、WXS、JSON 和其他资产。主包/分包由产物 app.json 的 subPackages 划分，不用 vendor chunk 文件名选取。压缩数据是逐文件压缩后的总和，不能替代平台上传大小；原始主包 512 KiB、单个分包 512 KiB、总包 1 MiB、Provider 512 KiB 是仓库验收预算，不代表微信官方限制。

压力应用同时检查源码清单、package scripts/依赖声明、实际安装版本、项目配置、tsconfig 和本地 env/private config 的摘要。两套工作区的路径与 package 名称作为身份差异保留，不能把这个检查解释为运行时环境完全一致。根 lint 配置及 Git 忽略的环境/私有项目配置也进入输入指纹，只记录摘要，不输出私有内容。

## 收益边界

Provider 模块贡献仅解释独立入口构建，不是实际 SFC 小程序的纯 runtime 税。SFC 空白成本包含编译器生成代码和宿主包装；相对空白的差值允许为负，不能假设每增加一个 API 必然线性增大。

当前生成矩阵没有独立 IDE runtime 证据，运行时延迟、setData 次数/字节及内存收益固定标记为 `not-measured`。不从压力页旧样本拼接收益，也不把 `nextTick`、磁盘产物或 headless 结果当作宿主已提交。后续接入必须匹配输入指纹、应用场景、配置和运行时验收边界。

## 验证

```sh
pnpm validate
pnpm install --frozen-lockfile
pnpm bench:size:wevu
```

现有单元测试检查动态配置拒绝、分包和预算边界、改名 chunk 与资产完整性；真实集成测试从构建后的 runner 入口执行全部九个 Provider 与八格应用，检查缺格/重复/不等价证据必须失败。历史报告没有矩阵时明确显示未采集。

Runner 的集成测试直接读取所有 app 输入并启动真实构建/watch，禁用 Turbo 的测试结果缓存，避免只修改 app 后复用旧的 runner 通过结果。标准与 performance 示例必须在 ESLint/Stylelint 格式化后仍保持逐字一致。
