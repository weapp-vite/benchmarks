# 全量验证报告

生成时间：2026-09-30T17:50:06.620Z
总体状态：失败

| 检查                      | 状态 |   耗时 | 退出码 | 命令                                |
| ------------------------- | ---- | -----: | -----: | ----------------------------------- |
| 安装依赖                  | 通过 |   0.1s |      0 | `pnpm install --frozen-lockfile`    |
| 构建                      | 通过 |   0.4s |      0 | `pnpm run build`                    |
| 代码检查                  | 通过 |   4.2s |      0 | `pnpm run lint`                     |
| 类型检查                  | 通过 |   0.9s |      0 | `pnpm run typecheck`                |
| 类型 API 测试             | 通过 |   0.3s |      0 | `pnpm run tsd`                      |
| 单元与集成测试            | 通过 |   0.3s |      0 | `pnpm run test`                     |
| 依赖安全审计              | 失败 |  74.3s |      1 | `pnpm audit --audit-level=moderate` |
| HBuilderX uni-app x smoke | 通过 |   4.9s |      0 | `pnpm run test:hbuilderx:uni-app-x` |
| 编译基准                  | 通过 | 295.2s |      0 | `pnpm run bench:compile`            |
| 运行时 IDE E2E 基准       | 失败 | 199.5s |      1 | `pnpm run bench:runtime`            |
| HMR 基准                  | 通过 | 176.9s |      0 | `pnpm run bench:hmr`                |
| wevu 体积分析             | 通过 |  10.9s |      0 | `pnpm run bench:size:wevu`          |

## 失败摘要

### 依赖安全审计

```text
                                                                                                    │
│                     │ .>repoctl>@icebreakers/monorepo>@icebreakers/eslint-config>eslint-plugin-tailwindcss>eslint>minimatch>brace-expansion │
│                     │                                                                                                                       │
│                     │ ... Found 104 paths, run `pnpm why brace-expansion` for more information                                              │
├─────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-q2hr-2g5m-vwhr                                                                     │
└─────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ moderate            │ Axios: Prototype pollution gadget in fetch adapter can alter outbound requests                                                                               │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Package             │ axios                                                                                                                                                        │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.7.0 <1.20.0                                                                                                                                              │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.20.0                                                                                                                                                     │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Paths               │ apps__weapp-vite-wevu-performance>weapp-vite>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios                         │
│                     │                                                                                                                                                              │
│                     │ apps__weapp-vite-wevu-performance>weapp-vite>@weapp-vite/tailwindcss>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios │
│                     │                                                                                                                                                              │
│                     │ apps__mpx>@mpxjs/core>@mpxjs/api-proxy>axios                                                                                                                 │
│                     │                                                                                                                                                              │
│                     │ ... Found 20 paths, run `pnpm why axios` for more information                                                                                                │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-vh66-26gq-q6x8                                                                                                            │
└─────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ moderate            │ Axios: Prototype-Pollution Gadget in the Default Instance Allows Inherited Object.prototype.method to Override HTTP Method                                   │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Package             │ axios                                                                                                                                                        │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.0.0 <1.20.0                                                                                                                                              │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.20.0                                                                                                                                                     │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Paths               │ apps__weapp-vite-wevu-performance>weapp-vite>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios                         │
│                     │                                                                                                                                                              │
│                     │ apps__weapp-vite-wevu-performance>weapp-vite>@weapp-vite/tailwindcss>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios │
│                     │                                                                                                                                                              │
│                     │ apps__mpx>@mpxjs/core>@mpxjs/api-proxy>axios                                                                                                                 │
│                     │                                                                                                                                                              │
│                     │ ... Found 20 paths, run `pnpm why axios` for more information                                                                                                │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-9fr6-4gfg-395g                                                                                                            │
└─────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
101 vulnerabilities found
Severity: 10 low | 57 moderate | 31 high | 3 critical

```

### 运行时 IDE E2E 基准

```text
$ pnpm --filter @benchmarks/runner bench:runtime
$ tsx src/runtime.ts
Error: e2e/ide runtime benchmark failed with exit code signal
    at runIdeE2eCollector (/Users/icebreaker/Projects/github/benchmarks/packages/benchmark-runner/src/runtime.ts:41:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async runRuntimeBenchmark (/Users/icebreaker/Projects/github/benchmarks/packages/benchmark-runner/src/runtime.ts:93:3)
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL

  × "pnpm recursive run" failed in /Users/icebreaker/Projects/github/
  │ benchmarks/packages/benchmark-runner

[ELIFECYCLE] Command failed with exit code 1.

Additional local diagnostic: DevTools CLI islogin timed out while connecting to port 19355; no listener was present on that port. The runtime collector was stopped after three failed launch attempts and cleanup timeouts. No new runtime samples were collected.

```
