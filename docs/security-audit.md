# 依赖审计处置边界（2026-11-16）

本轮 `pnpm audit --audit-level=moderate` 返回失败：177 项 advisory（low 26 / moderate 90 / high 56 / critical 5）。这是依赖图命中的公告数，不等于 177 个独立包，也不等于每条公告都能从 benchmark 应用路径触发。审计步骤保留失败状态，其他验证继续执行。

## 已完成的兼容范围内更新

锁文件已在 pnpm 12.21.0 下重建，并刷新了当前声明允许的传递依赖。应用声明和锁文件已包含本轮升级的 Taro 4.3.3、DCloud 3.0.0-5030420261029002、Mpx 2.11.2、Vue 3.5.45、PostCSS 8.5.33、ESLint 10.15.0、Stylelint 17.16.0、Vitest 5.0.5、Turbo 2.11.11 和 tsdown 0.23.7。

本轮没有运行 `pnpm audit --fix`，也没有用全局 override 强行跨越框架的精确版本约束。构建、lint、类型检查、测试、compile 和 size 验证均使用同一 frozen lockfile 完成。

## 需要上游发布或定向验证的路径

当前审计输出中已确认的阻塞集中在以下路径：

- Taro components 引入的 `swiper` 11.x：critical 修复线要求 12.x，必须由 Taro 发布兼容版本后升级并验证模板和运行时，不能全局覆盖到 Swiper 12。
- Taro CLI 的 `download-git-repo → download → decompress` 链：包含压缩包路径逃逸和符号链接链公告；应由上游替换下载/解压实现，并验证压缩包目录边界。
- `repoctl`/`oxfmt` 依赖链中的 `tinypool`：修复需要上游工具链发布可兼容版本，不能只改锁文件掩盖精确依赖约束。
- `@mpxjs/api-proxy`、DCloud 编译器、Taro Vue 插件和 `vue-i18n-bridge` 的若干精确依赖：审计修复线越过当前上游声明，需逐项验证定向替代或等待新发布批次。
- Mpx 的 Vue 2 与旧 webpack dev-server 生态：部分公告修复线涉及 Vue 3 或 dev-server 主版本迁移，暂不跨基线升级。

运行时还观察到独立的工具链边界：`weapp-vite 7.4.0` 的 stateful-experimental dev output 与 Vite 8.3.1/Rolldown 1.2.12 的 ESM-only devMode 校验不兼容。这不是通过 audit override 可以可靠修复的安全问题，应等待上游兼容发布并重新跑 IDE 一致性矩阵。

## 处置原则

1. 可在现有 semver 声明内安全更新的传递依赖，单独更新解析并验证 frozen install、构建和完整矩阵。
2. 超出上游精确声明的修复，先升级对应框架/工具发布批次，再验证运行时和模板行为。
3. 不把 `audit --fix` 生成的跨主版本替换直接合入 benchmark 基线；每个替代都要有路径级兼容证据。
4. 审计失败、peer 警告、IDE 阻塞和 HMR 重试分别记录，保持 `passed`、`blocked`、`failed` 和 `unknown` 的含义不混用。

最新审计证据保存在 `reports/verification/latest.md` 的“依赖安全审计”段落；完整锁文件指纹和运行时间见同文件的 provenance。
