# 全量验证报告

生成时间：2026-11-16T07:13:04.163Z
总体状态：失败

| 检查                      | 状态 |    耗时 | 退出码 | 命令                                |
| ------------------------- | ---- | ------: | -----: | ----------------------------------- |
| 安装依赖                  | 通过 |    1.9s |      0 | `pnpm install --frozen-lockfile`    |
| 构建                      | 通过 |    1.5s |      0 | `pnpm run build`                    |
| 代码检查                  | 通过 |   21.8s |      0 | `pnpm run lint`                     |
| 类型检查                  | 通过 |    3.6s |      0 | `pnpm run typecheck`                |
| 类型 API 测试             | 通过 |    1.2s |      0 | `pnpm run tsd`                      |
| 单元与集成测试            | 通过 |  718.2s |      0 | `pnpm run test`                     |
| 依赖安全审计              | 失败 |  255.1s |      1 | `pnpm audit --audit-level=moderate` |
| HBuilderX uni-app x smoke | 通过 |    8.5s |      0 | `pnpm run test:hbuilderx:uni-app-x` |
| 扩展编译采样与规模矩阵    | 通过 | 2602.2s |      0 | `pnpm run bench:compile:methods`    |
| 编译基准                  | 通过 | 1376.9s |      0 | `pnpm run bench:compile`            |
| 真实 IDE 更新一致性       | 失败 |  176.7s |      1 | `pnpm run e2e:ide:consistency`      |
| 运行时 IDE E2E 基准       | 失败 | 1117.6s |      1 | `pnpm run bench:runtime`            |
| HMR 基准                  | 失败 | 1484.7s |      1 | `pnpm run bench:hmr`                |
| wevu 体积分析             | 通过 |  712.0s |      0 | `pnpm run bench:size:wevu`          |

## 失败摘要

### 依赖安全审计

```text
─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ moderate            │ Hono: RegExpRouter skips wildcard middleware for some route sets and for paths with an encoded line terminator │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Package             │ hono                                                                                                           │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=4.1.4 <=4.13.15                                                                                              │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Patched versions    │ >=4.13.16                                                                                                      │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Paths               │ apps__weapp-vite-wevu>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>@hono/node-server>hono             │
│                     │                                                                                                                │
│                     │ apps__weapp-vite-wevu>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>hono                               │
│                     │                                                                                                                │
│                     │ apps__weapp-vite-wevu-performance>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>@hono/node-server>hono │
│                     │                                                                                                                │
│                     │ ... Found 6 paths, run `pnpm why hono` for more information                                                    │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-h7mg-cq63-vhpq                                                              │
└─────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ moderate            │ Hono: `csrf()` does not check requests sent by hyperlink auditing (`text/ping`)                                │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Package             │ hono                                                                                                           │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <4.13.16                                                                                                       │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Patched versions    │ >=4.13.16                                                                                                      │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Paths               │ apps__weapp-vite-wevu>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>@hono/node-server>hono             │
│                     │                                                                                                                │
│                     │ apps__weapp-vite-wevu>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>hono                               │
│                     │                                                                                                                │
│                     │ apps__weapp-vite-wevu-performance>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>@hono/node-server>hono │
│                     │                                                                                                                │
│                     │ ... Found 6 paths, run `pnpm why hono` for more information                                                    │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-46wx-v44x-9hh2                                                              │
└─────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ moderate            │ Hono: `validator('form')` skips validation for `multipart/form-data` requests with extra parameters            │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Package             │ hono                                                                                                           │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=4.5.1 <=4.13.15                                                                                              │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Patched versions    │ >=4.13.16                                                                                                      │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Paths               │ apps__weapp-vite-wevu>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>@hono/node-server>hono             │
│                     │                                                                                                                │
│                     │ apps__weapp-vite-wevu>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>hono                               │
│                     │                                                                                                                │
│                     │ apps__weapp-vite-wevu-performance>weapp-vite>@weapp-vite/mcp>@modelcontextprotocol/node>@hono/node-server>hono │
│                     │                                                                                                                │
│                     │ ... Found 6 paths, run `pnpm why hono` for more information                                                    │
├─────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-4h7h-rv7c-7m2v                                                              │
└─────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
177 vulnerabilities found
Severity: 26 low | 90 moderate | 56 high | 5 critical

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

  × "pnpm recursive run" failed in /Users/icebreaker/Projects/github/
  │ benchmarks/packages/benchmark-runner

[ELIFECYCLE] Command failed with exit code 1.

```

### HMR 基准

```text
$ pnpm --filter @benchmarks/runner bench:hmr
$ tsx src/hmr.ts
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL

  × "pnpm recursive run" failed in /Users/icebreaker/Projects/github/
  │ benchmarks/packages/benchmark-runner

[ELIFECYCLE] Command failed with exit code 1.

```

## 采样来源

- Run ID：d103c8bb-f658-4d02-ac3e-0451b9978eb7；步骤：verification
- 采集区间：2026-11-16T04:51:36.350Z 至 2026-11-16T07:13:04.163Z
- 输入指纹：267013314fcb64e88c54df81193cade4e742fb34a1898be81826d2e632154448
- lockfile SHA-256：0fc38c72cb6a63f4109eecd8ba14aa7080a4e1914956949973093f0e5b461e2b
- runner：0.0.0；源码摘要：cfd49892467b8d6ed605a4d062164f2a040112ac5c107dee9e35be15d0abcfcc
- 工作区有修改：true；被测输入有修改：true
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
