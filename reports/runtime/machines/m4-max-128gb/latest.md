# 运行时基准报告

生成时间：2026-09-30T23:03:41.812Z
采样次数：20

## 运行环境

- 机器：Apple M4 Max 128GB（`m4-max-128gb`）
- 系统：macOS 27.0 (26A428)；架构：darwin/arm64
- CPU：Apple M4 Max；核心数：16；内存：128GB
- Node：v24.18.0；pnpm：12.8.1
- 微信开发者工具 CLI：cli
- Git commit：1923b5d2f69cd5842dfe74e7d9bd8fb44b6d81d2
- weapp-vite submodule：eb9995e74fc4f760d265972b9148417cd40aab63

## 计时边界

新外部读数从 reLaunch 请求计时，到真实 IDE 文本、列表和计算颜色的七项断言全部满足。它包含导航、协议往返及 100ms 轮询，不是纯宿主提交或屏幕绘制耗时。
原八场景的内部 durationMs 保留在原始明细，按实际完成边界标注。框架 nextTick、原生 setData callback、Mpx setData callback 不混合排名。没有新观察证据的旧样本不进入排名。

## 总耗时排名

|                                         排名 | 项目 | reLaunch → 已确认视图均值 | 有效样本 |
| -------------------------------------------: | ---- | ------------------------: | -------: |
| 没有通过新边界验收的完整样本，无法给出排名。 |

## 未完成采集

- weapp-vite + wevu：有效样本 0/20。
- weapp-vite + wevu performance：有效样本 0/20。
- weapp-vite 原生：有效样本 0/20。
- uni-app vite vue3：有效样本 0/20。
- uni-app x：有效样本 0/20。
- mpx：有效样本 0/20。
- taro vue3：有效样本 0/20。
- @vue-mini/core：有效样本 0/20。
- weapp-vite + wevu 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite + wevu performance 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- weapp-vite 原生 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app vite vue3 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- uni-app x 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- mpx 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- taro vue3 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 1 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 2 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 3 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 4 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 5 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 6 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 7 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 8 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 9 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 10 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 11 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 12 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 13 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 14 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 15 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 16 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 17 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 18 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 19 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification
- @vue-mini/core 第 20 轮：preflight；desktop-locked: macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification

## 运行环境诊断

- 检查时间：2026-09-30T23:03:41.614Z；状态：desktop-locked
- 官方来源：https://devtools.wxqcloud.qq.com.cn/WechatWebDev/nightly/versions/config.json
- 稳定版：2.02.2608080；所选安装版本：2.02.2608080
- 所选 CLI：/Users/icebreaker/.codex/worktrees/issue-1015-css-hmr/weapp-vite/.tmp/wechat-stable-expanded/Payload/Applications/wechatwebdevtools.app/Contents/MacOS/cli；服务端口：未确认
- 原因：macOS desktop is locked; unlock manually before real IDE screenshot/readiness verification

## 原始明细

| 项目                          | 轮次 | 通过 | 内部计时边界 | 指标观察 | 视图观察 | 实际宿主信息 |
| ----------------------------- | ---: | ---- | ------------ | -------: | -------: | ------------ |
| weapp-vite + wevu             |    1 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    2 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    3 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    4 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    5 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    6 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    7 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    8 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |    9 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   10 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   11 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   12 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   13 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   14 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   15 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   16 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   17 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   18 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   19 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu             |   20 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    1 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    2 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    3 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    4 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    5 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    6 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    7 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    8 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |    9 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   10 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   11 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   12 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   13 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   14 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   15 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   16 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   17 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   18 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   19 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite + wevu performance |   20 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    1 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    2 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    3 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    4 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    5 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    6 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    7 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    8 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |    9 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   10 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   11 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   12 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   13 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   14 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   15 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   16 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   17 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   18 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   19 | 否   | 历史未标注   |        - |        - | {}           |
| weapp-vite 原生               |   20 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    1 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    2 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    3 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    4 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    5 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    6 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    7 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    8 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |    9 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   10 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   11 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   12 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   13 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   14 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   15 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   16 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   17 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   18 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   19 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app vite vue3             |   20 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    1 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    2 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    3 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    4 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    5 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    6 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    7 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    8 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |    9 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   10 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   11 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   12 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   13 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   14 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   15 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   16 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   17 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   18 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   19 | 否   | 历史未标注   |        - |        - | {}           |
| uni-app x                     |   20 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    1 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    2 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    3 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    4 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    5 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    6 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    7 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    8 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |    9 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   10 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   11 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   12 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   13 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   14 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   15 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   16 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   17 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   18 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   19 | 否   | 历史未标注   |        - |        - | {}           |
| mpx                           |   20 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    1 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    2 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    3 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    4 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    5 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    6 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    7 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    8 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |    9 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   10 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   11 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   12 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   13 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   14 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   15 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   16 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   17 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   18 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   19 | 否   | 历史未标注   |        - |        - | {}           |
| taro vue3                     |   20 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    1 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    2 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    3 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    4 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    5 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    6 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    7 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    8 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |    9 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   10 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   11 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   12 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   13 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   14 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   15 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   16 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   17 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   18 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   19 | 否   | 历史未标注   |        - |        - | {}           |
| @vue-mini/core                |   20 | 否   | 历史未标注   |        - |        - | {}           |

### 内部场景计时（仅作各自边界诊断）

| 项目                          | 轮次 | 初始渲染 | 追加批次 | 批量更新 | 全量排序 | 过滤高分活跃项 | 分组聚合渲染 | 窗口切片 | 整表替换 |
| ----------------------------- | ---: | -------: | -------: | -------: | -------: | -------------: | -----------: | -------: | -------: |
| weapp-vite + wevu             |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu             |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite + wevu performance |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| weapp-vite 原生               |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app vite vue3             |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| uni-app x                     |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| mpx                           |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| taro vue3                     |   20 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    1 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    2 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    3 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    4 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    5 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    6 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    7 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    8 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |    9 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   10 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   11 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   12 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   13 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   14 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   15 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   16 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   17 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   18 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   19 |        - |        - |        - |        - |              - |            - |        - |        - |
| @vue-mini/core                |   20 |        - |        - |        - |        - |              - |            - |        - |        - |

## 场景含义

- 初始渲染：连续 3 次重建并渲染 480 条列表，放大首屏列表创建成本
- 追加批次：连续 4 次追加 120 条数据，放大增量插入和列表扩容成本
- 批量更新：连续 6 次批量更新不同步长的列表项，放大局部批量变更成本
- 全量排序：连续 5 次排序并正反切换，放大全量顺序变化成本
- 过滤高分活跃项：连续 6 次在过滤结果和完整列表间切换，放大列表缩减和恢复成本
- 分组聚合渲染：连续 6 次按 group 聚合并渲染统计行，放大派生数据和结构切换成本
- 窗口切片：连续 10 次切换 140 条窗口数据，放大虚拟窗口类场景成本
- 整表替换：连续 3 次用 640 条新数据整表替换，放大大批量替换成本

## 证据边界

- 统一外部边界为请求 reLaunch 至真实 IDE 确认最终视图；包括导航、RPC、100ms 轮询和七项视图检查的观察成本，不称为纯 host commit 或 paint 耗时。
- 原八场景的页面内部耗时原样保存，但 nextTick、原生 setData 回调与 Mpx setData 回调边界不同，不再混合排名。
- 独立校验确定性数据的八项 count/checksum；控制台载荷必须匹配本轮唯一 token，不能使用上一轮日志或旧 samples 文件。
- 预检与每个项目分别设总 deadline；每个项目共享一次 automator，通过 reLaunch 切换轮次；失败不补采为成功。
- 仅关闭本任务隔离项目并断开自己持有的连接，不调用全局 quit/kill，不清理用户缓存或其他会话。
- 视图查询确认的是 IDE 自动化可观察结果，不证明显示器已经完成光栅化，也不等价真机。setData 字节/次数和内存收益未采集。

## 采样来源

- Run ID：ed3908e7-8aa6-4d06-aa98-40f13f793f2b；步骤：runtime
- 采集区间：2026-09-30T23:03:41.613Z 至 2026-09-30T23:03:41.812Z
- 输入指纹：a6f9c5f6e3cc8d530ef240ed85fe650ef4862057fb40230bfe7d24d864e42a48
- lockfile SHA-256：8a5d8760666f2a66454271ee0768f65317f03f0c39b8cfdbedf7d898a549fec9
- runner：0.0.0；源码摘要：8465f9de41f2c3b17f21457f7b4e25bb54d5e53920795eae29ad4cac3456f227
- 工作区有修改：true；被测输入有修改：false
- 采样前后输入一致：true
- 实际包版本、配置/场景文件摘要及测量设置详见同名 JSON 的 provenance 字段；参考子模块 SHA 不代表实际 npm 版本。
