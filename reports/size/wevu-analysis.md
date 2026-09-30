# wevu 体积分析

生成时间：2026-09-30T17:50:06.394Z

## 工具链环境

- 工具链：weapp-vite eb9995e / Node 24.18.0（`weapp-vite-eb9995e-node24`）
- 系统：macOS 27.0 (26A428)；架构：darwin/arm64
- Node：v24.18.0；pnpm：12.8.1
- Git commit：3ef40d10f83678e866e8bc639c0abae29a394a1d
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63
- 包版本：weapp-vite@7.4.0、wevu@7.4.0、@dcloudio/vite-plugin-uni@3.0.0-5020620260917001

## 结论

- 统计生产构建中被 runtime 文件规则选中的完整文件，单位 KB 按 1024 字节换算；具体文件、类型和字节数见下表。
- 不同框架的规则可能包含 JS、模板、样式、WXS 或 JSON。只按文件归类，不能分离同一 chunk 内的业务代码和框架模块，因此不代表精确的纯 runtime 成本。
- weapp-vite + wevu performance 选定文件体积为 183.7 KB，相对 weapp-vite + wevu 的差值为 17.0 KB。
- weapp-vite 原生 选定文件体积为 0.0 KB，相对 weapp-vite + wevu 的差值为 -166.7 KB。
- uni-app vite vue3 选定文件体积为 132.1 KB，相对 weapp-vite + wevu 的差值为 -34.5 KB。

## 总览

| 项目                          | 选定文件数 | 选定文件体积 |
| ----------------------------- | ---------: | -----------: |
| weapp-vite + wevu             |          1 |     166.7 KB |
| weapp-vite + wevu performance |          2 |     183.7 KB |
| weapp-vite 原生               |          0 |       0.0 KB |
| uni-app vite vue3             |          1 |     132.1 KB |
| uni-app x                     |          3 |     168.3 KB |
| mpx                           |          1 |     170.7 KB |
| taro vue3                     |          7 |     216.9 KB |

## 选定文件明细

### weapp-vite + wevu

| 选定文件                      |     体积 | 原始字节 | 类型 | 分组   |
| ----------------------------- | -------: | -------: | ---- | ------ |
| weapp-vendors/wevu-runtime.js | 166.7 KB |   170668 | js   | vendor |

### weapp-vite + wevu performance

| 选定文件                       |     体积 | 原始字节 | 类型 | 分组   |
| ------------------------------ | -------: | -------: | ---- | ------ |
| weapp-vendors/wevu-runtime.js  | 170.2 KB |   174326 | js   | vendor |
| weapp-vendors/wevu-runtime2.js |  13.4 KB |    13737 | js   | vendor |

### weapp-vite 原生

| 选定文件 | 体积 | 原始字节 | 类型 | 分组 |
| -------- | ---: | -------: | ---- | ---- |

### uni-app vite vue3

| 选定文件         |     体积 | 原始字节 | 类型 | 分组   |
| ---------------- | -------: | -------: | ---- | ------ |
| common/vendor.js | 132.1 KB |   135294 | js   | vendor |

### uni-app x

| 选定文件           |     体积 | 原始字节 | 类型  | 分组   |
| ------------------ | -------: | -------: | ----- | ------ |
| common/vendor.js   | 161.3 KB |   165142 | js    | vendor |
| common/uniView.wxs |   4.1 KB |     4237 | asset | vendor |
| uvue.wxss          |   2.9 KB |     2941 | style | asset  |

### mpx

| 选定文件  |     体积 | 原始字节 | 类型 | 分组  |
| --------- | -------: | -------: | ---- | ----- |
| bundle.js | 170.7 KB |   174783 | js   | asset |

### taro vue3

| 选定文件  |     体积 | 原始字节 | 类型     | 分组  |
| --------- | -------: | -------: | -------- | ----- |
| taro.js   | 161.2 KB |   165109 | js       | asset |
| base.wxml |  54.3 KB |    55590 | template | asset |
| utils.wxs |   1.0 KB |      997 | asset    | asset |
| comp.wxml |   0.1 KB |      140 | template | asset |
| common.js |   0.1 KB |      111 | js       | asset |
| comp.json |   0.1 KB |      108 | json     | asset |
| comp.js   |   0.1 KB |       98 | js       | asset |

## wevu 源包入口

wevu 版本：7.4.0；package.json 的 `sideEffects`：`["./dist/api/vitest/setup.mjs","./dist/dev/api/vitest/setup.mjs","./dist/router/auto-routes.mjs","./dist/dev/router/auto-routes.mjs"]`。

| 源包文件          | 压缩后体积 brotli |
| ----------------- | ----------------: |
| dist/vue-demi.mjs |            2.3 KB |
| dist/index.mjs    |            2.2 KB |
| dist/router.mjs   |            0.3 KB |
| dist/store.mjs    |            0.2 KB |

## 证据范围与后续验证

- 当前只有文件级体积和包元数据，没有模块图或引用链证据，无法据此判断 tree shaking 是否有效、具体能力是否冗余或哪个模块导致差值。
- sideEffects 是采集时的包声明，不直接证明最终产物的裁剪结果；源包入口的压缩体积也不等于消费应用的运行时体积。
- performance preset 的文件体积差异仅表示构建成本；运行时延迟、setData 次数/字节和内存收益需要同版本、同场景的独立运行时验证。
- 后续可用最小能力阶梯与模块级分析定位成本，分别验证原始包体和宿主行为；这些是研究方向，不是本报告已确认的原因。

## 复跑命令

```bash
pnpm bench:size:wevu
```
