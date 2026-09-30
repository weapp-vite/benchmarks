# 全量验证报告

生成时间：2026-09-30T23:14:07.232Z
总体状态：失败

| 检查                      | 状态 |   耗时 | 退出码 | 命令                                |
| ------------------------- | ---- | -----: | -----: | ----------------------------------- |
| 安装依赖                  | 通过 |   0.2s |      0 | `pnpm install --frozen-lockfile`    |
| 构建                      | 通过 |   0.2s |      0 | `pnpm run build`                    |
| 代码检查                  | 通过 |   3.0s |      0 | `pnpm run lint`                     |
| 类型检查                  | 通过 |   0.6s |      0 | `pnpm run typecheck`                |
| 类型 API 测试             | 通过 |   0.2s |      0 | `pnpm run tsd`                      |
| 单元与集成测试            | 通过 | 166.1s |      0 | `pnpm run test`                     |
| 依赖安全审计              | 失败 |   4.1s |      1 | `pnpm audit --audit-level=moderate` |
| HBuilderX uni-app x smoke | 通过 |   4.5s |      0 | `pnpm run test:hbuilderx:uni-app-x` |
| 扩展编译采样与规模矩阵    | 通过 | 409.5s |      0 | `pnpm run bench:compile:methods`    |
| 编译基准                  | 通过 | 287.5s |      0 | `pnpm run bench:compile`            |
| 真实 IDE 更新一致性       | 失败 |   1.3s |      1 | `pnpm run e2e:ide:consistency`      |
| 运行时 IDE E2E 基准       | 失败 |   0.7s |      1 | `pnpm run bench:runtime`            |
| HMR 基准                  | 失败 | 550.3s |      1 | `pnpm run bench:hmr`                |
| wevu 体积分析             | 通过 |  74.9s |      0 | `pnpm run bench:size:wevu`          |

## 失败摘要

### 依赖安全审计

```text
                                                 │
│                     │                                                                                                                                                              │
│                     │ ... Found 20 paths, run `pnpm why axios` for more information                                                                                                │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-j8rh-479h-cp32                                                                                                            │
└─────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ moderate            │ Axios: Fetch Adapter Header Injection via Inherited FormData getHeaders                                                                                      │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Package             │ axios                                                                                                                                                        │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.12.0 <1.20.0                                                                                                                                             │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.20.0                                                                                                                                                     │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Paths               │ apps__weapp-vite-wevu-performance>weapp-vite>@weapp-vite/tailwindcss>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios │
│                     │                                                                                                                                                              │
│                     │ apps__weapp-vite-wevu-performance>weapp-vite>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios                         │
│                     │                                                                                                                                                              │
│                     │ apps__mpx>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios                                                                                                    │
│                     │                                                                                                                                                              │
│                     │ ... Found 20 paths, run `pnpm why axios` for more information                                                                                                │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-4hqw-qxg8-jxx2                                                                                                            │
└─────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ moderate            │ Axios: CIDR-form NO_PROXY entries are ignored, causing proxy exclusion bypass for internal IP ranges                                                         │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Package             │ axios                                                                                                                                                        │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.15.0 <1.20.0                                                                                                                                             │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.20.0                                                                                                                                                     │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Paths               │ apps__weapp-vite-wevu-performance>weapp-vite>@weapp-vite/tailwindcss>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios │
│                     │                                                                                                                                                              │
│                     │ apps__weapp-vite-wevu-performance>weapp-vite>weapp-tailwindcss>@mpxjs/webpack-plugin>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios                         │
│                     │                                                                                                                                                              │
│                     │ apps__mpx>@mpxjs/utils>@mpxjs/core>@mpxjs/api-proxy>axios                                                                                                    │
│                     │                                                                                                                                                              │
│                     │ ... Found 20 paths, run `pnpm why axios` for more information                                                                                                │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-44g4-m2mj-wpvx                                                                                                            │
└─────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
106 vulnerabilities found
Severity: 10 low | 60 moderate | 33 high | 3 critical

```

### 真实 IDE 更新一致性

```text
$ tsx e2e/ide/runtime-consistency.ts
[ELIFECYCLE] Command failed with exit code 1.

```

### 运行时 IDE E2E 基准

```text
$ pnpm --filter @benchmarks/runner bench:runtime
$ tsx src/runtime.ts
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL

  × "pnpm recursive run" failed in /Users/icebreaker/.codex/worktrees/size-
  │ capability-matrix/benchmarks/packages/benchmark-runner

[ELIFECYCLE] Command failed with exit code 1.

```

### HMR 基准

```text
$ pnpm --filter @benchmarks/runner bench:hmr
$ tsx src/hmr.ts
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL

  × "pnpm recursive run" failed in /Users/icebreaker/.codex/worktrees/size-
  │ capability-matrix/benchmarks/packages/benchmark-runner

[ELIFECYCLE] Command failed with exit code 1.

```

## 采样来源

- Run ID：ed3908e7-8aa6-4d06-aa98-40f13f793f2b；步骤：verification
- 采集区间：2026-09-30T22:49:04.047Z 至 2026-09-30T23:14:07.232Z
- 输入指纹：a6f9c5f6e3cc8d530ef240ed85fe650ef4862057fb40230bfe7d24d864e42a48
- lockfile SHA-256：8a5d8760666f2a66454271ee0768f65317f03f0c39b8cfdbedf7d898a549fec9
- runner：0.0.0；源码摘要：8465f9de41f2c3b17f21457f7b4e25bb54d5e53920795eae29ad4cac3456f227
- 工作区有修改：false；被测输入有修改：false
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
