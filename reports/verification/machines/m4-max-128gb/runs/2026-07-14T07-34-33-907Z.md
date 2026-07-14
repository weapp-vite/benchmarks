# 全量验证报告

生成时间：2026-07-14T07:34:33.907Z
总体状态：失败

| 检查                      | 状态 |    耗时 | 退出码 | 命令                                |
| ------------------------- | ---- | ------: | -----: | ----------------------------------- |
| 安装依赖                  | 通过 |    0.2s |      0 | `pnpm install --frozen-lockfile`    |
| 构建                      | 通过 |    0.5s |      0 | `pnpm run build`                    |
| 代码检查                  | 通过 |    3.0s |      0 | `pnpm run lint`                     |
| 类型检查                  | 通过 |    1.5s |      0 | `pnpm run typecheck`                |
| 类型 API 测试             | 通过 |    0.4s |      0 | `pnpm run tsd`                      |
| 单元与集成测试            | 通过 |    0.4s |      0 | `pnpm run test`                     |
| 依赖安全审计              | 失败 |   10.6s |      1 | `pnpm audit --audit-level=moderate` |
| HBuilderX uni-app x smoke | 通过 |    3.4s |      0 | `pnpm run test:hbuilderx:uni-app-x` |
| 编译基准                  | 通过 |  299.5s |      0 | `pnpm run bench:compile`            |
| 运行时 IDE E2E 基准       | 失败 |  629.7s |      1 | `pnpm run bench:runtime`            |
| HMR 基准                  | 通过 | 2185.6s |      0 | `pnpm run bench:hmr`                |
| wevu 体积分析             | 通过 |    4.3s |      0 | `pnpm run bench:size:wevu`          |

## 失败摘要

### 依赖安全审计

```text
──────┬────────────────────────────────────────────────────────┐
│ moderate            │ webpack-dev-server vulnerable to HMR WebSocket         │
│                     │ interception via permissive user proxies               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ webpack-dev-server                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <5.2.5                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=5.2.5                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__mpx>@mpxjs/mpx-cli-service>@vue/cli-             │
│                     │ service>webpack-dev-server                             │
│                     │                                                        │
│                     │ apps__mpx>@mpxjs/vue-cli-plugin-mpx>webpack-dev-server │
│                     │                                                        │
│                     │ apps__mpx>@vue/cli-service>webpack-dev-server          │
│                     │                                                        │
│                     │ ... Found 5 paths, run `pnpm why webpack-dev-server`   │
│                     │ for more information                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-mx8g-39q3-5c79      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ http-proxy-middleware `router` host+path substring     │
│                     │ matching allows Host-header-driven backend routing     │
│                     │ bypass                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ http-proxy-middleware                                  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=0.16.0 <2.0.10                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=2.0.10                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__mpx>@mpxjs/mpx-cli-service>@vue/cli-             │
│                     │ service>webpack-dev-server>http-proxy-middleware       │
│                     │                                                        │
│                     │ apps__mpx>@mpxjs/vue-cli-plugin-mpx>webpack-dev-       │
│                     │ server>http-proxy-middleware                           │
│                     │                                                        │
│                     │ apps__mpx>@vue/cli-service>webpack-dev-server>http-    │
│                     │ proxy-middleware                                       │
│                     │                                                        │
│                     │ ... Found 5 paths, run `pnpm why                       │
│                     │ http-proxy-middleware` for more information            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-64mm-vxmg-q3vj      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ JS-YAML: Quadratic-complexity DoS in merge key         │
│                     │ handling via repeated aliases                          │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ js-yaml                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <3.15.0                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=3.15.0                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>@changesets/cli>@changesets/apply-release-           │
│                     │ plan>@changesets/config>@changesets/get-dependents-    │
│                     │ graph>@manypkg/get-packages>read-yaml-file>js-yaml     │
│                     │                                                        │
│                     │ .>@changesets/cli>@changesets/apply-release-           │
│                     │ plan>@changesets/config>@changesets/should-skip-       │
│                     │ package>@manypkg/get-packages>read-yaml-file>js-yaml   │
│                     │                                                        │
│                     │ .>@changesets/cli>@changesets/apply-release-           │
│                     │ plan>@changesets/config>@manypkg/get-packages>read-    │
│                     │ yaml-file>js-yaml                                      │
│                     │                                                        │
│                     │ ... Found 27 paths, run `pnpm why js-yaml` for more    │
│                     │ information                                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-h67p-54hq-rp68      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ JS-YAML: Quadratic-complexity DoS in merge key         │
│                     │ handling via repeated aliases                          │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ js-yaml                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=4.0.0 <=4.1.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=4.1.2                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>@changesets/cli>@changesets/get-release-             │
│                     │ plan>@changesets/read>@changesets/parse>js-yaml        │
│                     │                                                        │
│                     │ .>@changesets/cli>@changesets/read>@changesets/        │
│                     │ parse>js-yaml                                          │
│                     │                                                        │
│                     │ apps__taro-vue3>@tarojs/cli>@tarojs/plugin-            │
│                     │ doctor>eslint>@eslint/eslintrc>js-yaml                 │
│                     │                                                        │
│                     │ ... Found 5 paths, run `pnpm why js-yaml` for more     │
│                     │ information                                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-h67p-54hq-rp68      │
└─────────────────────┴────────────────────────────────────────────────────────┘
63 vulnerabilities found
Severity: 8 low | 35 moderate | 18 high | 2 critical

```

### 运行时 IDE E2E 基准

```text
$ pnpm --filter @benchmarks/runner bench:runtime
$ tsx src/runtime.ts
- initialize

✔ IDE server has started, listening on http://127.0.0.1:44321
- preparing
- Fetching AppID () permissions
✔ Using AppID: wxb3d842a4a7e3440d
✔ build-npm

```
