# wevu 体积分析

生成时间：2026-09-30T23:14:04.430Z

## 工具链环境

- 工具链：weapp-vite 7.4.0 / Node 24.18.0（`weapp-vite-7.4.0-a6f9c5f6e3cc-node24`）
- 系统：macOS 27.0 (26A428)；架构：darwin/arm64
- Node：v24.18.0；pnpm：12.8.1
- Git commit：1923b5d2f69cd5842dfe74e7d9bd8fb44b6d81d2
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63
- 包版本：weapp-vite@7.4.0、wevu@7.4.0、@dcloudio/vite-plugin-uni@3.0.0-5020620260917001

## 结论

- 统计生产构建中被 runtime 文件规则选中的完整文件，单位 KB 按 1024 字节换算；具体文件、类型和字节数见下表。
- 不同框架的规则可能包含 JS、模板、样式、WXS 或 JSON。只按文件归类，不能分离同一 chunk 内的业务代码和框架模块，因此不代表精确的纯 runtime 成本。
- weapp-vite + wevu performance 选定文件体积为 191.7 KB，相对 weapp-vite + wevu 的差值为 17.5 KB。
- weapp-vite 原生 选定文件体积为 0.0 KB，相对 weapp-vite + wevu 的差值为 -174.2 KB。
- uni-app vite vue3 选定文件体积为 132.2 KB，相对 weapp-vite + wevu 的差值为 -42.0 KB。

## 总览

| 项目                          | 选定文件数 | 选定文件体积 |
| ----------------------------- | ---------: | -----------: |
| weapp-vite + wevu             |          1 |     174.2 KB |
| weapp-vite + wevu performance |          2 |     191.7 KB |
| weapp-vite 原生               |          0 |       0.0 KB |
| uni-app vite vue3             |          1 |     132.2 KB |
| uni-app x                     |          3 |     168.3 KB |
| mpx                           |          1 |     170.7 KB |
| taro vue3                     |          7 |     216.9 KB |

## 选定文件明细

### weapp-vite + wevu

| 选定文件                      |     体积 | 原始字节 | 类型 | 分组   |
| ----------------------------- | -------: | -------: | ---- | ------ |
| weapp-vendors/wevu-runtime.js | 174.2 KB |   178396 | js   | vendor |

### weapp-vite + wevu performance

| 选定文件                       |     体积 | 原始字节 | 类型 | 分组   |
| ------------------------------ | -------: | -------: | ---- | ------ |
| weapp-vendors/wevu-runtime.js  | 177.9 KB |   182146 | js   | vendor |
| weapp-vendors/wevu-runtime2.js |  13.9 KB |    14197 | js   | vendor |

### weapp-vite 原生

| 选定文件 | 体积 | 原始字节 | 类型 | 分组 |
| -------- | ---: | -------: | ---- | ---- |

### uni-app vite vue3

| 选定文件         |     体积 | 原始字节 | 类型 | 分组   |
| ---------------- | -------: | -------: | ---- | ------ |
| common/vendor.js | 132.2 KB |   135371 | js   | vendor |

### uni-app x

| 选定文件           |     体积 | 原始字节 | 类型  | 分组   |
| ------------------ | -------: | -------: | ----- | ------ |
| common/vendor.js   | 161.3 KB |   165171 | js    | vendor |
| common/uniView.wxs |   4.1 KB |     4237 | asset | vendor |
| uvue.wxss          |   2.9 KB |     2941 | style | asset  |

### mpx

| 选定文件  |     体积 | 原始字节 | 类型 | 分组  |
| --------- | -------: | -------: | ---- | ----- |
| bundle.js | 170.7 KB |   174798 | js   | asset |

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

## 生产产物一致性

每个项目在 runner 独立目录中执行两次无缓存生产构建；文件集合、SHA-256 及静态引用校验通过后才采集体积。原应用输出目录与用户资产不参与清理。

| 项目                        | 受管文件数 | 生产输出摘要                                                     |
| --------------------------- | ---------: | ---------------------------------------------------------------- |
| weapp-vite-wevu             |         13 | aa65385dfce805ffa03f81ba5316603d5c1dbc74963f171418da42924933aa50 |
| weapp-vite-wevu-performance |         14 | 167b7ca742d5ce4cf0841f1df158ff959961590883c37fa49ff07ffb3846006e |
| weapp-vite-native           |         12 | c3cd9f4d4c38081bfadd2b240354dcfe29ac689840b3f54d50ea2154a6b1b786 |
| uni-app-vite-vue3           |         15 | b3618b72c60d8b9122243130c64eb253db98d3e2b5143f409a6c739d491f9bb3 |
| uni-app-x                   |         17 | 02a235a7c3957d77a372cbdafa107e92b4e7620ce820f0eaa3f30fa874da5ff6 |
| mpx                         |         18 | 6c7724ab6e462e8044b8df27cb48e3e3a77120b52fbe155a5a9c788b15ed8c08 |
| taro-vue3                   |         20 | 96f0bd5dbe7b6f1c6d71dfd457d53641b08656af593cca1e8a36213a2df823d9 |

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
| 空白页面            | standard    |     174626 |        416 |     175042 |      42273 |        35424 |            0 bytes |
| 空白页面            | performance |     193794 |        818 |     194612 |      47988 |        40368 |            0 bytes |
| ref                 | standard    |     174880 |        416 |     175296 |      42353 |        35482 |          254 bytes |
| ref                 | performance |     194064 |        818 |     194882 |      48067 |        40484 |          270 bytes |
| ref + computed      | standard    |     175883 |        416 |     176299 |      42628 |        35665 |         1257 bytes |
| ref + computed      | performance |     195073 |        818 |     195891 |      48358 |        40650 |         1279 bytes |
| 组件 / 事件 / model | standard    |     185216 |        416 |     185632 |      46247 |        38823 |        10590 bytes |
| 组件 / 事件 / model | performance |     204717 |        818 |     205535 |      52111 |        43861 |        10923 bytes |

### performance 成本与收益

| 场景                | performance 总包增量 | 更新延迟 | setData 次数/字节 | 内存收益 |
| ------------------- | -------------------: | -------- | ----------------- | -------- |
| 空白页面            |          19570 bytes | 未测量   | 未测量            | 未测量   |
| ref                 |          19586 bytes | 未测量   | 未测量            | 未测量   |
| ref + computed      |          19592 bytes | 未测量   | 未测量            | 未测量   |
| 组件 / 事件 / model |          19903 bytes | 未测量   | 未测量            | 未测量   |

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

- Run ID：ed3908e7-8aa6-4d06-aa98-40f13f793f2b；步骤：size
- 采集区间：2026-09-30T23:12:52.908Z 至 2026-09-30T23:14:04.430Z
- 输入指纹：a6f9c5f6e3cc8d530ef240ed85fe650ef4862057fb40230bfe7d24d864e42a48
- lockfile SHA-256：8a5d8760666f2a66454271ee0768f65317f03f0c39b8cfdbedf7d898a549fec9
- runner：0.0.0；源码摘要：8465f9de41f2c3b17f21457f7b4e25bb54d5e53920795eae29ad4cac3456f227
- 工作区有修改：true；被测输入有修改：false
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
