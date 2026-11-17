# 2026-11 依赖升级评估

本轮升级覆盖根目录、benchmark 应用和 runner。`submodules/weapp-vite` 保持原提交 `eb9995e74fc4f760d265972b9148417cd40aab63`，不把源码子模块变更混入依赖升级。直接依赖按框架兼容约束选择，`pnpm-lock.yaml` 固定实际解析结果。

## 升级与兼容性约束

| 依赖组                          | 当前版本                        | 处理说明                                                                    |
| ------------------------------- | ------------------------------- | --------------------------------------------------------------------------- |
| pnpm                            | 12.21.0                         | 同步 `packageManager` 和锁文件，使用 frozen install 验证                    |
| weapp-vite / wevu               | 7.11.0                          | 三个 weapp-vite benchmark 使用同一版本；子模块保持原提交                    |
| Taro                            | 4.3.3                           | 所有 `@tarojs/*` 同步；`vite-runner` 继续使用 Vite 4 兼容线                 |
| uni-app / uni-app x 编译器      | 3.0.0-5030420261029002          | 所有 DCloud 包同步到同一正式批次                                            |
| uni-app-x runtime               | 0.7.132                         | 与当前 `uni-uts-v1` 配套，未跨到未经验证的 runtime 批次                     |
| uni-app Vue / Vite / types      | 3.4.21 / 5.2.8 / 3.4.31         | 按 UVM 生成的范围和 DCloud 编译器 peer 约束安装                             |
| Mpx                             | 2.11.2 / CLI 2.3.0              | 保留 Vue 2.7、Pinia 2、Router 3 和 Babel 7 基线                             |
| Mpx 构建工具                    | Webpack 5.111.1、PostCSS 8.5.33 | Webpack 固定 5.111.1；5.112.x 会触发 Mpx 对 `ModuleDependency` 的不兼容引用 |
| Vue / compiler / vue-tsc        | 3.5.45 / 3.5.45 / 3.3.14        | Vue SFC 和类型检查器同步升级                                                |
| TypeScript                      | 6.0.3                           | 保留仓库当前类型检查基线                                                    |
| repoctl / ESLint / Stylelint    | 5.10.3 / 10.15.0 / 17.16.0      | 同步 monorepo 工具链                                                        |
| Vitest / coverage-v8            | 5.0.5                           | 测试运行器和覆盖率插件精确对齐                                              |
| tsdown / Turbo / Prettier       | 0.23.7 / 2.11.11 / 3.10.1       | 与 Node `^22.18.0`、`^24.11.0` 或 `>=26.0.0` 约束一致                       |
| miniprogram typings / automator | 5.3.1 / 1.5.4                   | 应用和 runner 统一版本                                                      |
| runner 能力矩阵                 | esbuild 0.28.2                  | 显式声明，避免依赖偶然提升的间接版本                                        |

其他根工具同步到当前锁定版本，包括 `@commitlint/cli` 21.2.4、`@types/node` 26.6.6、`pkg-types` 2.4.0、`tailwindcss` 4.3.5、`tslib` 2.9.1 和 `rollup` 4.63.5。保留 `@achrinza/node-ipc` 到 `node-ipc-compat@1.0.0` 的替代规则。

为新安装布局补充了两个兼容性边界：

- `pnpm-workspace.yaml` 仅对 `@weapp-tailwindcss/postcss` 的 CSS parser/tokenizer 使用兼容版本 override，并统一 PostCSS 8.5.33。
- DCloud 批次的 `@dcloudio/uni-mp-vite` 通过 scoped `packageExtensions` 补 `estree-walker@2.0.2`；`.pnpmfile.cjs` 只把该批次 UTS Linux 包的 `gnu` 元数据修正为 pnpm 识别的 `glibc`。

## 验证结果

先构建，再运行 lint、类型检查、tsd 入口和测试；随后刷新完整 benchmark。最新验证 run 为 `d103c8bb-f658-4d02-ac3e-0451b9978eb7`，时间为 `2026-11-16T07:13:04.163Z`。

- `pnpm install --frozen-lockfile`、`pnpm build`、`pnpm lint`、`pnpm typecheck` 全部通过。
- `pnpm tsd` 正常退出，但当前工作区没有实际 tsd 任务；这不等于已有公共类型测试覆盖。
- 单元与集成测试通过：23 个文件、86 个测试。
- HBuilderX uni-app x smoke 通过；compile methods 为 180/180，编译基准为 7 个框架各 20 轮（140/140）。
- wevu 体积分析通过，生产构建清单和 SHA-256 一致性检查通过。
- `pnpm peers check` 只剩 `tsconfck@3.1.6` 声明 TypeScript `^5.0.0`、而仓库使用 TypeScript 6.0.3 的上游 peer 范围问题。没有通过忽略 peer 规则掩盖它。

完整刷新总体为失败，失败项都保留了原始报告：

- `pnpm audit --audit-level=moderate`：177 项 advisory（26 low / 90 moderate / 56 high / 5 critical）。
- 真实 IDE 更新一致性：classic 四个阶段通过；stateful-experimental 在 dev 启动时因 Vite 8.3.1/Rolldown 1.2.12 只接受 ESM，而 `weapp-vite 7.4.0` 仍生成 CJS dev output，返回 `INVALID_OPTION`。
- 运行时 IDE E2E：5 个项目各 20/20 有效样本；performance、uni-app vite vue3 和 taro vue3 受项目 deadline/连接超时影响没有有效样本，命令按失败返回。
- HMR：500 个场景样本中绝大多数匹配；`weapp-vite + wevu performance / Vue SFC style` 出现一次重试，首个失败标识为 `d103c8bb-f658-4d02-ac3e-0451b9978eb7-wevu-performance-vue-script-batch-13`。按 runner 约定，任何重试或不支持的 profile 都返回失败并移出正式排名。

这些运行时问题属于当前上游工具链和环境的已观测边界，不应被静态构建通过掩盖。详见 `reports/verification/latest.md`、`reports/runtime/consistency/latest.json`、`reports/runtime/latest.md` 和 `reports/hmr/latest.md`。

## 复跑命令

```bash
corepack pnpm@12.21.0 install --frozen-lockfile
pnpm build
pnpm lint
pnpm typecheck
pnpm tsd
pnpm test
pnpm report:refresh
```

## 稳定版升级命令

先查看候选版本，不修改文件：

```bash
pnpm deps:stable:check
```

按框架应用升级，或一次升级全部框架：

```bash
pnpm deps:stable:update:weapp-vite
pnpm deps:stable:update:taro
pnpm deps:stable:update:dcloud
pnpm deps:stable:update:mpx
pnpm deps:stable:update
```

升级完成后运行：

```bash
pnpm deps:stable:validate
```

`weapp-vite`、`wevu`、Taro 和 Mpx 使用 npm `latest` stable tag；DCloud 使用 UVM 的官方 release channel，并要求两个 uni-app 项目的编译器批次一致。命令会拒绝 prerelease、校验框架成组版本，且不会修改 `submodules/weapp-vite`。
