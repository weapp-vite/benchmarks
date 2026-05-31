# wevu 体积分析

生成时间：2026-05-31T14:58:05.917Z

## 结论

- 当前差距主要来自 JS 固定运行时成本：weapp-vite + wevu 的 JS 为 188.5 KB，uni-app vite vue3 为 68.7 KB，差值 119.8 KB。
- wevu 的 vendor JS 为 181.9 KB，uni-app 的 vendor JS 为 64.6 KB，vendor 差值 117.3 KB，这是最主要的大头。
- 对比 weapp-vite 原生，wevu 增加的运行时税约 182.2 KB。业务页面 JS 本身只有 6.0 KB，不是主要问题。
- performance preset 的体积没有变小，当前比普通 wevu 多 1.4 KB。它优化的是运行时 setData 策略和诊断配置，不是体积优化模式。
- 这不是“完全没有 tree shaking”。wevu 包声明了 `sideEffects: false`，但主入口 re-export 的小程序 renderer、生命周期 glue、layout/router/store 桥接和响应式辅助之间引用链较粗，最终仍会把完整运行时基座放进 vendor。

## 总览

| 项目                          |   总体积 |    gzip |  brotli |       JS | vendor JS | 页面 JS | JS 占比 | 相对最小 |
| ----------------------------- | -------: | ------: | ------: | -------: | --------: | ------: | ------: | -------: |
| weapp-vite + wevu             | 190.9 KB | 47.5 KB | 40.4 KB | 188.5 KB |  181.9 KB |  6.0 KB |   98.8% |   21.94x |
| weapp-vite + wevu performance | 192.2 KB | 47.9 KB | 40.7 KB | 189.8 KB |  182.4 KB |  6.4 KB |   98.7% |   22.10x |
| weapp-vite 原生               |   8.7 KB |  3.3 KB |  2.8 KB |   6.3 KB |    0.0 KB |  6.3 KB |   72.7% |    1.00x |
| uni-app vite vue3             |  71.4 KB | 28.4 KB | 25.2 KB |  68.7 KB |   64.6 KB |  2.5 KB |   96.3% |    8.20x |

## 文件级大头

### weapp-vite + wevu

| 文件                      |      raw |    gzip |  brotli | 类型     | 分组   |
| ------------------------- | -------: | ------: | ------: | -------- | ------ |
| weapp-vendors/wevu-src.js | 127.8 KB | 31.5 KB | 26.6 KB | js       | vendor |
| weapp-vendors/wevu-ref.js |  54.1 KB | 12.4 KB | 10.7 KB | js       | vendor |
| pages/index/index.js      |   5.8 KB |  1.8 KB |  1.6 KB | js       | page   |
| pages/index/index.wxml    |   1.0 KB |  0.4 KB |  0.3 KB | template | page   |
| pages/index/index.wxss    |   0.6 KB |  0.4 KB |  0.3 KB | style    | page   |
| app.js                    |   0.6 KB |  0.3 KB |  0.2 KB | js       | app    |
| app.json                  |   0.3 KB |  0.2 KB |  0.2 KB | json     | app    |
| pages/detail/index.js     |   0.2 KB |  0.2 KB |  0.1 KB | js       | page   |

### weapp-vite + wevu performance

| 文件                      |      raw |    gzip |  brotli | 类型     | 分组   |
| ------------------------- | -------: | ------: | ------: | -------- | ------ |
| weapp-vendors/wevu-src.js | 128.4 KB | 31.6 KB | 26.7 KB | js       | vendor |
| weapp-vendors/wevu-ref.js |  54.0 KB | 12.3 KB | 10.7 KB | js       | vendor |
| pages/index/index.js      |   6.0 KB |  1.9 KB |  1.7 KB | js       | page   |
| app.js                    |   1.1 KB |  0.4 KB |  0.3 KB | js       | app    |
| pages/index/index.wxml    |   1.0 KB |  0.4 KB |  0.3 KB | template | page   |
| pages/index/index.wxss    |   0.6 KB |  0.4 KB |  0.3 KB | style    | page   |
| pages/detail/index.js     |   0.3 KB |  0.3 KB |  0.2 KB | js       | page   |
| app.json                  |   0.3 KB |  0.2 KB |  0.2 KB | json     | app    |

### weapp-vite 原生

| 文件                    |    raw |   gzip | brotli | 类型     | 分组  |
| ----------------------- | -----: | -----: | -----: | -------- | ----- |
| pages/index/index.js    | 6.2 KB | 1.8 KB | 1.6 KB | js       | page  |
| pages/index/index.wxml  | 1.0 KB | 0.3 KB | 0.3 KB | template | page  |
| pages/index/index.wxss  | 0.6 KB | 0.3 KB | 0.2 KB | style    | page  |
| app.json                | 0.3 KB | 0.2 KB | 0.2 KB | json     | app   |
| pages/detail/index.wxml | 0.1 KB | 0.1 KB | 0.1 KB | template | page  |
| pages/detail/index.wxss | 0.1 KB | 0.1 KB | 0.1 KB | style    | page  |
| app.wxss                | 0.1 KB | 0.1 KB | 0.1 KB | style    | app   |
| sitemap.json            | 0.1 KB | 0.1 KB | 0.1 KB | json     | asset |

### uni-app vite vue3

| 文件                   |     raw |    gzip |  brotli | 类型     | 分组   |
| ---------------------- | ------: | ------: | ------: | -------- | ------ |
| common/vendor.js       | 64.6 KB | 24.9 KB | 22.3 KB | js       | vendor |
| pages/index/index.js   |  2.4 KB |  0.9 KB |  0.8 KB | js       | page   |
| shared/benchmark.js    |  1.3 KB |  0.6 KB |  0.6 KB | js       | shared |
| pages/index/index.wxml |  0.8 KB |  0.3 KB |  0.2 KB | template | page   |
| project.config.json    |  0.6 KB |  0.3 KB |  0.2 KB | json     | asset  |
| pages/index/index.wxss |  0.5 KB |  0.3 KB |  0.2 KB | style    | page   |
| app.js                 |  0.3 KB |  0.2 KB |  0.2 KB | js       | app    |
| app.json               |  0.2 KB |  0.2 KB |  0.1 KB | json     | app    |

## wevu 源包入口

wevu 版本：6.16.30；package.json 的 `sideEffects`：`false`。

| 源包文件                 |      raw |    gzip |  brotli |
| ------------------------ | -------: | ------: | ------: |
| dist/src-DswUAmfF.mjs    | 107.6 KB | 31.7 KB | 27.2 KB |
| dist/router.mjs          |  21.7 KB |  6.8 KB |  6.1 KB |
| dist/router-C1IObdgc.mjs |  13.2 KB |  4.7 KB |  4.1 KB |
| dist/ref-CRwjgX_d.mjs    |  10.3 KB |  3.7 KB |  3.4 KB |
| dist/store-CNXa5BsN.mjs  |   5.1 KB |  1.9 KB |  1.7 KB |
| dist/vue-demi.mjs        |   4.5 KB |  1.9 KB |  1.7 KB |
| dist/index.mjs           |   4.4 KB |  1.9 KB |  1.6 KB |
| dist/store.mjs           |   0.1 KB |  0.1 KB |  0.1 KB |

## 判断

- `src/pages/index/index.vue` 只显式使用 `ref`、`computed`、`nextTick`、`onMounted`，但产物仍包含 `weapp-vendors/wevu-src.js` 和 `weapp-vendors/wevu-ref.js`。
- `wevu-src.js` 承载页面/组件注册、setup 执行、props/emit/model、layout、router/native router、selector、setData 等小程序运行时 glue；这些能力现在通过同一个运行时入口进入页面。
- `wevu-ref.js` 承载响应式系统和调度基础设施。源包中的 `ref-*.mjs` 约十几 KB，但构建后 vendor 更大，说明底层依赖和 helper 被内联到小程序产物。
- uni-app 的 `common/vendor.js` 也包含 Vue runtime 和小程序适配层，但它在当前场景下产物更紧凑，说明它的 mp-weixin runtime 入口和编译生成代码在这个用例上更容易被压缩或裁剪。

## 下一步优化建议

1. 拆分 wevu public entry：新增轻量入口，至少把 `ref/computed/nextTick/onMounted` 与 router/store/layout/selector 等能力分离。
2. 让 SFC 编译器按实际用到的能力导入内部 helper，页面注册只引入 page runtime，组件场景再引入 component runtime，layout/router/store 改为显式 opt-in。
3. 对 weapp-vite 的 chunk 策略补一个模块级 analyze 输出，持续统计 `wevu-src`、`wevu-ref`、页面业务代码、shared helper 的 raw/gzip/brotli。
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
