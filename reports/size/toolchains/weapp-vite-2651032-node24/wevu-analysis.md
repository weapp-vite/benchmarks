# wevu 体积分析

生成时间：2026-07-14T12:26:22.350Z

## 工具链环境

- 工具链：weapp-vite 2651032 / Node 24.18.0（`weapp-vite-2651032-node24`）
- 系统：macOS 26.5.1 (25F80)；架构：darwin/arm64
- Node：v24.18.0；pnpm：11.13.0
- Git commit：82b2553795a40325f25052ca187e93001a2c47f8
- weapp-vite submodule：26510329efcf36cbf934e566ebbc80f069151a22
- 包版本：weapp-vite@6.18.3、wevu@6.18.3、@dcloudio/vite-plugin-uni@3.0.0-5010520260709002

## 结论

- 本报告只统计生产构建后的 runtime allowlist 文件体积；页面业务代码、模板、样式、source map、license 和项目配置不计入。
- weapp-vite + wevu runtime 体积为 189.4 KB，uni-app vite vue3 为 125.5 KB，差值 63.9 KB。
- 对比 weapp-vite 原生，wevu 增加的运行时税约 189.4 KB。
- performance preset 的 runtime 体积为 189.4 KB，相对普通 wevu 差值 0.0 KB。
- 这不是“完全没有 tree shaking”。wevu 包声明了 `sideEffects: false`，但主入口 re-export 的小程序 renderer、生命周期 glue、layout/router/store 桥接和响应式辅助之间引用链较粗，最终仍会把完整运行时基座放进 vendor。

## 总览

| 项目                          | runtime 体积 |
| ----------------------------- | -----------: |
| weapp-vite + wevu             |     189.4 KB |
| weapp-vite + wevu performance |     189.4 KB |
| weapp-vite 原生               |       0.0 KB |
| uni-app vite vue3             |     125.5 KB |
| uni-app x                     |      91.8 KB |
| mpx                           |     169.4 KB |
| taro vue3                     |     214.0 KB |

## 文件级大头

### weapp-vite + wevu

| 运行时文件                        |     体积 | 类型 | 分组   |
| --------------------------------- | -------: | ---- | ------ |
| weapp-vendors/wevu-templateRef.js | 133.2 KB | js   | vendor |
| weapp-vendors/wevu-watch.js       |  56.3 KB | js   | vendor |

### weapp-vite + wevu performance

| 运行时文件                        |     体积 | 类型 | 分组   |
| --------------------------------- | -------: | ---- | ------ |
| weapp-vendors/wevu-templateRef.js | 133.2 KB | js   | vendor |
| weapp-vendors/wevu-watch.js       |  56.3 KB | js   | vendor |

### weapp-vite 原生

| 运行时文件 | 体积 | 类型 | 分组 |
| ---------- | ---: | ---- | ---- |

### uni-app vite vue3

| 运行时文件       |     体积 | 类型 | 分组   |
| ---------------- | -------: | ---- | ------ |
| common/vendor.js | 125.5 KB | js   | vendor |

### uni-app x

| 运行时文件         |    体积 | 类型  | 分组   |
| ------------------ | ------: | ----- | ------ |
| common/vendor.js   | 86.5 KB | js    | vendor |
| uvue.wxss          |  2.9 KB | style | asset  |
| common/uniView.wxs |  2.4 KB | asset | vendor |

### mpx

| 运行时文件 |     体积 | 类型 | 分组  |
| ---------- | -------: | ---- | ----- |
| bundle.js  | 169.4 KB | js   | asset |

### taro vue3

| 运行时文件 |     体积 | 类型     | 分组  |
| ---------- | -------: | -------- | ----- |
| taro.js    | 158.4 KB | js       | asset |
| base.wxml  |  54.2 KB | template | asset |
| utils.wxs  |   1.0 KB | asset    | asset |
| comp.wxml  |   0.1 KB | template | asset |
| common.js  |   0.1 KB | js       | asset |
| comp.json  |   0.1 KB | json     | asset |
| comp.js    |   0.1 KB | js       | asset |

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
