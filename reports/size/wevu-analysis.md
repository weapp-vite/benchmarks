# wevu 体积分析

生成时间：2026-11-16T07:12:57.460Z

## 工具链环境

- 工具链：weapp-vite 7.4.0 / Node 24.18.0（`weapp-vite-7.4.0-267013314fcb-node24`）
- 系统：macOS 27.2 (26B123)；架构：darwin/arm64
- Node：v24.18.0；pnpm：12.21.0
- Git commit：ca8e16f1e616d7b88074ff84d613b7b9ba9249c7
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63
- 包版本：weapp-vite@7.4.0、wevu@7.4.0、@dcloudio/vite-plugin-uni@3.0.0-5030420261029002

## 结论

- 统计生产构建中被 runtime 文件规则选中的完整文件，单位 KB 按 1024 字节换算；具体文件、类型和字节数见下表。
- 不同框架的规则可能包含 JS、模板、样式、WXS 或 JSON。只按文件归类，不能分离同一 chunk 内的业务代码和框架模块，因此不代表精确的纯 runtime 成本。
- weapp-vite + wevu performance 选定文件体积为 189.6 KB，相对 weapp-vite + wevu 的差值为 17.4 KB。
- weapp-vite 原生 选定文件体积为 0.0 KB，相对 weapp-vite + wevu 的差值为 -172.2 KB。
- uni-app vite vue3 选定文件体积为 132.4 KB，相对 weapp-vite + wevu 的差值为 -39.9 KB。

## 总览

| 项目                          | 选定文件数 | 选定文件体积 |
| ----------------------------- | ---------: | -----------: |
| weapp-vite + wevu             |          1 |     172.2 KB |
| weapp-vite + wevu performance |          2 |     189.6 KB |
| weapp-vite 原生               |          0 |       0.0 KB |
| uni-app vite vue3             |          1 |     132.4 KB |
| uni-app x                     |          3 |     168.7 KB |
| mpx                           |          1 |     170.1 KB |
| taro vue3                     |          7 |     220.4 KB |

## 选定文件明细

### weapp-vite + wevu

| 选定文件                      |     体积 | 原始字节 | 类型 | 分组   |
| ----------------------------- | -------: | -------: | ---- | ------ |
| weapp-vendors/wevu-runtime.js | 172.2 KB |   176380 | js   | vendor |

### weapp-vite + wevu performance

| 选定文件                       |     体积 | 原始字节 | 类型 | 分组   |
| ------------------------------ | -------: | -------: | ---- | ------ |
| weapp-vendors/wevu-runtime.js  | 175.9 KB |   180106 | js   | vendor |
| weapp-vendors/wevu-runtime2.js |  13.7 KB |    14077 | js   | vendor |

### weapp-vite 原生

| 选定文件 | 体积 | 原始字节 | 类型 | 分组 |
| -------- | ---: | -------: | ---- | ---- |

### uni-app vite vue3

| 选定文件         |     体积 | 原始字节 | 类型 | 分组   |
| ---------------- | -------: | -------: | ---- | ------ |
| common/vendor.js | 132.4 KB |   135541 | js   | vendor |

### uni-app x

| 选定文件           |     体积 | 原始字节 | 类型  | 分组   |
| ------------------ | -------: | -------: | ----- | ------ |
| common/vendor.js   | 161.6 KB |   165527 | js    | vendor |
| common/uniView.wxs |   4.1 KB |     4237 | asset | vendor |
| uvue.wxss          |   2.9 KB |     2980 | style | asset  |

### mpx

| 选定文件  |     体积 | 原始字节 | 类型 | 分组  |
| --------- | -------: | -------: | ---- | ----- |
| bundle.js | 170.1 KB |   174154 | js   | asset |

### taro vue3

| 选定文件  |     体积 | 原始字节 | 类型     | 分组  |
| --------- | -------: | -------: | -------- | ----- |
| taro.js   | 164.5 KB |   168439 | js       | asset |
| base.wxml |  54.5 KB |    55766 | template | asset |
| utils.wxs |   1.0 KB |      997 | asset    | asset |
| comp.wxml |   0.1 KB |      140 | template | asset |
| common.js |   0.1 KB |      111 | js       | asset |
| comp.json |   0.1 KB |      108 | json     | asset |
| comp.js   |   0.1 KB |       98 | js       | asset |

## 生产产物一致性

每个项目在 runner 独立目录中执行两次无缓存生产构建；文件集合、SHA-256 及静态引用校验通过后才采集体积。原应用输出目录与用户资产不参与清理。

| 项目                        | 受管文件数 | 生产输出摘要                                                     |
| --------------------------- | ---------: | ---------------------------------------------------------------- |
| weapp-vite-wevu             |         13 | 1c8f559911d2b25d9c2daef5823dfa540785d3d8b9e4b4db5ea7d9fcab035223 |
| weapp-vite-wevu-performance |         14 | 1b5ec81921199f69d71466a882b7bb0ec48f929c000ae7eb2a5f4dddc27dd378 |
| weapp-vite-native           |         12 | c3cd9f4d4c38081bfadd2b240354dcfe29ac689840b3f54d50ea2154a6b1b786 |
| uni-app-vite-vue3           |         15 | 6cf701c716aafc9776b4421fcba2bbda5755fca51a6dba515ae564021178ca32 |
| uni-app-x                   |         17 | b2950558bf3070d24ec33adb5c8debde131c837ac76958f445d1c63051836542 |
| mpx                         |         18 | cf583688c4de1bf30f365cc1d1a9e03fe5a5a8cb06bf6750ed0f777d40bfc191 |
| taro-vue3                   |         20 | 0d7843a4cf9e00b7853da486e1b26ed690429c037e59690217197a6cab178da6 |

## 能力成本矩阵

平台：weapp；[Provider 定义](https://github.com/weapp-vite/weapp-vite/blob/85edd490f3fcbffbebbd1697530da0ccb4cba5db/scripts/runtime-size-config.ts)。原始字节用于预算，压缩体积仅供参考。

### 独立 Provider 阶梯

| 阶梯                          | 原始 bytes | gzip bytes | brotli bytes | 有贡献模块数 |
| ----------------------------- | ---------: | ---------: | -----------: | -----------: |
| 响应式核心                    |       6557 |       2651 |         2441 |           11 |
| 最小应用                      |      75779 |      24481 |        22038 |           62 |
| 典型页面                      |     119057 |      36977 |        32515 |           88 |
| 复杂组件                      |     133622 |      41458 |        36409 |           98 |
| 公共入口最小应用              |     154475 |      47952 |        41876 |          104 |
| 公共入口典型页面              |     156351 |      48644 |        42467 |          108 |
| 扩展：ref / computed          |       7647 |       3104 |         2866 |           12 |
| 扩展：router / store / layout |      71374 |      23961 |        21436 |           79 |
| 完整 Provider 上限            |     253094 |      73461 |        62113 |          136 |

### 实际 SFC 应用（全部资产）

| 场景                | 预设        | 主包 bytes | 分包 bytes | 总包 bytes | gzip bytes | brotli bytes | 相对同预设空白成本 |
| ------------------- | ----------- | ---------: | ---------: | ---------: | ---------: | -----------: | -----------------: |
| 空白页面            | standard    |     172682 |        416 |     173098 |      42157 |        35358 |            0 bytes |
| 空白页面            | performance |     191706 |        818 |     192524 |      47857 |        40366 |            0 bytes |
| ref                 | standard    |     172936 |        416 |     173352 |      42236 |        35421 |          254 bytes |
| ref                 | performance |     191976 |        818 |     192794 |      47936 |        40378 |          270 bytes |
| ref + computed      | standard    |     173915 |        416 |     174331 |      42518 |        35670 |         1233 bytes |
| ref + computed      | performance |     192961 |        818 |     193779 |      48218 |        40569 |         1255 bytes |
| 组件 / 事件 / model | standard    |     183176 |        416 |     183592 |      46112 |        38770 |        10494 bytes |
| 组件 / 事件 / model | performance |     202533 |        818 |     203351 |      51946 |        43836 |        10827 bytes |

### performance 成本与收益

| 场景                | performance 总包增量 | 更新延迟 | setData 次数/字节 | 内存收益 |
| ------------------- | -------------------: | -------- | ----------------- | -------- |
| 空白页面            |          19426 bytes | 未测量   | 未测量            | 未测量   |
| ref                 |          19442 bytes | 未测量   | 未测量            | 未测量   |
| ref + computed      |          19448 bytes | 未测量   | 未测量            | 未测量   |
| 组件 / 事件 / model |          19759 bytes | 未测量   | 未测量            | 未测量   |

运行时状态：not-measured。No matching, independently verified IDE runtime sample is attached to these generated applications; only size costs are reported.

仓库原始字节预算：主包 512.0 KB、单个分包 512.0 KB、总包 1024.0 KB。

- Provider 的七个上游阶梯沿用 #1064/schema v4；computed 和 router/store/layout 是另列的消费端扩展。
- Provider 是具名导入的独立 esbuild 产物，不等于实际 SFC 小程序的固定运行时成本。模块归因来自 esbuild metafile，可能不包含输出包装开销。
- 实际应用矩阵计入全部 JS、模板、样式、WXS、JSON 和其他资产，不通过 chunk 文件名挑选；没有模块级分离证据时不称为纯 runtime 税。
- 普通与 performance 在同一暂存应用路径、相同安装依赖下构建；源码相同，仅 weapp.wevu.preset 不同。每格比较两次无缓存生产构建的完整清单。
- 主包与分包按生成的 app.json 划分，gzip/brotli 为逐文件统计；预算只使用原始字节，仓库预算不代表微信平台上传限制。
- JSON 保存每格源码清单、配置、产物 SHA-256 和完整文件分类；独立 Provider 保存具名导入源码及模块贡献。
- 压力应用另行核对源码、安装依赖、配置及本地环境输入；工作区路径和 package 名称单独列为身份差异。生成矩阵则在同一路径构建。

## wevu 源包入口

wevu 版本：7.4.0；package.json 的 `sideEffects`：`["./dist/api/vitest/setup.mjs","./dist/dev/api/vitest/setup.mjs","./dist/router/auto-routes.mjs","./dist/dev/router/auto-routes.mjs"]`。

| 源包文件          | 压缩后体积 brotli |
| ----------------- | ----------------: |
| dist/vue-demi.mjs |            2.3 KB |
| dist/index.mjs    |            2.2 KB |
| dist/router.mjs   |            0.3 KB |
| dist/store.mjs    |            0.2 KB |

## 证据范围与后续验证

- 跨框架压力应用仅有文件级体积和包元数据；独立 Provider 的模块贡献不能用于归因真实 SFC 压力应用的差值。
- sideEffects 是采集时的包声明，不直接证明最终产物的裁剪结果；源包入口的压缩体积也不等于消费应用的运行时体积。
- performance preset 的文件体积差异仅表示构建成本；运行时延迟、setData 次数/字节和内存收益需要同版本、同场景的独立运行时验证。
- 能力矩阵验证构建成本；宿主行为与性能收益仍需独立 IDE 证据，未测量项保持未测量。

## 复跑命令

```bash
pnpm bench:size:wevu
```

## 采样来源

- Run ID：d103c8bb-f658-4d02-ac3e-0451b9978eb7；步骤：size
- 采集区间：2026-11-16T07:01:13.914Z 至 2026-11-16T07:12:57.460Z
- 输入指纹：267013314fcb64e88c54df81193cade4e742fb34a1898be81826d2e632154448
- lockfile SHA-256：0fc38c72cb6a63f4109eecd8ba14aa7080a4e1914956949973093f0e5b461e2b
- runner：0.0.0；源码摘要：cfd49892467b8d6ed605a4d062164f2a040112ac5c107dee9e35be15d0abcfcc
- 工作区有修改：true；被测输入有修改：true
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
