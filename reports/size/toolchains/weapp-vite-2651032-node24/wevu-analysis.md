# wevu 体积分析

生成时间：2026-07-14T07:34:33.607Z

## 工具链环境

- 工具链：weapp-vite 2651032 / Node 24.18.0（`weapp-vite-2651032-node24`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- Node：v24.18.0；pnpm：11.13.0
- Git commit：026fe258b63b15a9b9d51c4635348ffeebc3dc41
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22
- 包版本：weapp-vite@6.18.3、wevu@6.18.3、@dcloudio/vite-plugin-uni@3.0.0-5010520260709002

## 结论

- 当前差距主要来自 JS 固定运行时成本：weapp-vite + wevu 的 JS 为 196.5 KB，uni-app vite vue3 为 129.7 KB，差值 66.8 KB。
- wevu 的 vendor JS 为 189.4 KB，uni-app 的 vendor JS 为 125.5 KB，vendor 差值 63.9 KB，这是最主要的大头。
- 对比 weapp-vite 原生，wevu 增加的运行时税约 190.2 KB。业务页面 JS 本身只有 6.4 KB，不是主要问题。
- performance preset 的体积没有变小，当前比普通 wevu 多 1.0 KB。它优化的是运行时 setData 策略和诊断配置，不是体积优化模式。
- 这不是“完全没有 tree shaking”。wevu 包声明了 `sideEffects: false`，但主入口 re-export 的小程序 renderer、生命周期 glue、layout/router/store 桥接和响应式辅助之间引用链较粗，最终仍会把完整运行时基座放进 vendor。

## 总览

| 项目                          |   总体积 |    gzip |  brotli |       JS | vendor JS | 页面 JS | JS 占比 | 相对最小 |
| ----------------------------- | -------: | ------: | ------: | -------: | --------: | ------: | ------: | -------: |
| weapp-vite + wevu             | 198.9 KB | 50.1 KB | 42.4 KB | 196.5 KB |  189.4 KB |  6.4 KB |   98.8% |   22.93x |
| weapp-vite + wevu performance | 199.8 KB | 50.5 KB | 42.7 KB | 197.4 KB |  189.4 KB |  6.9 KB |   98.8% |   23.04x |
| weapp-vite 原生               |   8.7 KB |  3.3 KB |  2.8 KB |   6.3 KB |    0.0 KB |  6.3 KB |   72.9% |    1.00x |
| uni-app vite vue3             | 132.3 KB | 47.2 KB | 41.3 KB | 129.7 KB |  125.5 KB |  2.5 KB |   98.0% |   15.25x |

## 文件级大头

### weapp-vite + wevu

| 文件                              |      raw |    gzip |  brotli | 类型     | 分组   |
| --------------------------------- | -------: | ------: | ------: | -------- | ------ |
| weapp-vendors/wevu-templateRef.js | 133.2 KB | 32.9 KB | 27.8 KB | js       | vendor |
| weapp-vendors/wevu-watch.js       |  56.3 KB | 13.5 KB | 11.4 KB | js       | vendor |
| pages/index/index.js              |   6.1 KB |  1.8 KB |  1.6 KB | js       | page   |
| pages/index/index.wxml            |   1.0 KB |  0.4 KB |  0.3 KB | template | page   |
| pages/index/index.wxss            |   0.6 KB |  0.4 KB |  0.3 KB | style    | page   |
| app.js                            |   0.6 KB |  0.3 KB |  0.3 KB | js       | app    |
| pages/detail/index.js             |   0.3 KB |  0.2 KB |  0.2 KB | js       | page   |
| app.json                          |   0.3 KB |  0.2 KB |  0.2 KB | json     | app    |

### weapp-vite + wevu performance

| 文件                              |      raw |    gzip |  brotli | 类型     | 分组   |
| --------------------------------- | -------: | ------: | ------: | -------- | ------ |
| weapp-vendors/wevu-templateRef.js | 133.2 KB | 32.9 KB | 27.8 KB | js       | vendor |
| weapp-vendors/wevu-watch.js       |  56.3 KB | 13.5 KB | 11.4 KB | js       | vendor |
| pages/index/index.js              |   6.4 KB |  2.0 KB |  1.8 KB | js       | page   |
| app.js                            |   1.1 KB |  0.4 KB |  0.3 KB | js       | app    |
| pages/index/index.wxml            |   1.0 KB |  0.4 KB |  0.3 KB | template | page   |
| pages/index/index.wxss            |   0.6 KB |  0.4 KB |  0.3 KB | style    | page   |
| pages/detail/index.js             |   0.5 KB |  0.3 KB |  0.3 KB | js       | page   |
| app.json                          |   0.3 KB |  0.2 KB |  0.2 KB | json     | app    |

### weapp-vite 原生

| 文件                    |    raw |   gzip | brotli | 类型     | 分组  |
| ----------------------- | -----: | -----: | -----: | -------- | ----- |
| pages/index/index.js    | 6.2 KB | 1.8 KB | 1.6 KB | js       | page  |
| pages/index/index.wxml  | 1.0 KB | 0.3 KB | 0.3 KB | template | page  |
| pages/index/index.wxss  | 0.6 KB | 0.3 KB | 0.2 KB | style    | page  |
| app.json                | 0.3 KB | 0.2 KB | 0.2 KB | json     | app   |
| pages/detail/index.wxml | 0.1 KB | 0.1 KB | 0.1 KB | template | page  |
| pages/detail/index.wxss | 0.1 KB | 0.1 KB | 0.1 KB | style    | page  |
| sitemap.json            | 0.1 KB | 0.1 KB | 0.1 KB | json     | asset |
| app.wxss                | 0.1 KB | 0.1 KB | 0.1 KB | style    | app   |

### uni-app vite vue3

| 文件                   |      raw |    gzip |  brotli | 类型     | 分组   |
| ---------------------- | -------: | ------: | ------: | -------- | ------ |
| common/vendor.js       | 125.5 KB | 43.7 KB | 38.5 KB | js       | vendor |
| pages/index/index.js   |   2.4 KB |  0.9 KB |  0.8 KB | js       | page   |
| shared/benchmark.js    |   1.3 KB |  0.6 KB |  0.6 KB | js       | shared |
| pages/index/index.wxml |   0.8 KB |  0.3 KB |  0.2 KB | template | page   |
| project.config.json    |   0.6 KB |  0.3 KB |  0.2 KB | json     | asset  |
| pages/index/index.wxss |   0.5 KB |  0.3 KB |  0.2 KB | style    | page   |
| app.js                 |   0.3 KB |  0.2 KB |  0.2 KB | js       | app    |
| app.json               |   0.2 KB |  0.2 KB |  0.1 KB | json     | app    |

## wevu 源包入口

wevu 版本：6.18.3；package.json 的 `sideEffects`：`false`。

| 源包文件                 | 压缩后体积 brotli |
| ------------------------ | ----------------: |
| dist/router.mjs          |            6.2 KB |
| dist/router-DLOOLAqv.mjs |            3.2 KB |
| dist/ref-D37CknuD.mjs    |            2.9 KB |
| dist/store-eHrHBQiv.mjs  |            1.6 KB |
| dist/vue-demi.mjs        |            1.8 KB |
| dist/index.mjs           |            1.7 KB |
| dist/store.mjs           |            0.1 KB |

## 判断

- `src/pages/index/index.vue` 只显式使用 `ref`、`computed`、`nextTick`、`onMounted`，但产物仍包含 `weapp-vendors/wevu-src.js` 和 `weapp-vendors/wevu-ref.js`。
- `wevu-src.js` 承载页面/组件注册、setup 执行、props/emit/model、layout、router/native router、selector、setData 等小程序运行时 glue；这些能力现在通过同一个运行时入口进入页面。
- `wevu-ref.js` 承载响应式系统和调度基础设施。源包中的 `ref-*.mjs` 约十几 KB，但构建后 vendor 更大，说明底层依赖和 helper 被内联到小程序产物。
- uni-app 的 `common/vendor.js` 也包含 Vue runtime 和小程序适配层，但它在当前场景下产物更紧凑，说明它的 mp-weixin runtime 入口和编译生成代码在这个用例上更容易被压缩或裁剪。

## 下一步优化建议

1. 拆分 wevu public entry：新增轻量入口，至少把 `ref/computed/nextTick/onMounted` 与 router/store/layout/selector 等能力分离。
2. 让 SFC 编译器按实际用到的能力导入内部 helper，页面注册只引入 page runtime，组件场景再引入 component runtime，layout/router/store 改为显式 opt-in。
3. 对 weapp-vite 的 chunk 策略补一个模块级 analyze 输出，持续统计 `wevu-src`、`wevu-ref`、页面业务代码、shared helper 的压缩后体积。
4. 给 benchmarks 加一个“最小 wevu 页面”场景，和当前复杂列表场景分开，避免业务压力用例掩盖固定 runtime 税。
5. 优化后以本报告作为回归口径：优先看 vendor JS 是否下降，而不是只看总包体积。

## 复跑命令

```bash
pnpm --filter @benchmarks/weapp-vite-wevu build
pnpm --filter @benchmarks/weapp-vite-wevu-performance build
pnpm --filter @benchmarks/weapp-vite-native build
pnpm --filter @benchmarks/uni-app-vite-vue3 build:mp-weixin
pnpm bench:size:wevu
```
