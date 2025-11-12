# ReactorUMG

> 让 Unreal Engine 的 UMG/Slate UI 工作流拥抱 **React + TypeScript**，借助 Puerts/PuertsTS 实现热重载、实时预览与 AI 友好迭代。

![ReactorUMG 封面](./imgs/Cover.png){.md-image--border}

> ⚠️ Alpha 阶段：API 与目录可能调整 · 建议先阅读 [FAQ](guide/faq.md)。

## 快速导航

| 项目亮点 | 说明 |
| --- | --- |
| 支持平台 | Windows · Android · Linux |
| 技术栈 | UE5.x · Puerts/PuertsTS · Node.js ≥ 18 · React/TSX |
| 核心能力 | React 组件、可重用 UI、脚本逻辑、热重载、Spine/Rive 动画 |
| 首要流程 | 准备环境 → 安装插件 → 创建 Runtime/Editor UI |

## 立即上手

1. 安装 Node.js（推荐 Yarn），并在项目中初始化包管理器。  
2. 将 `ReactorUMG` 插件目录放到 `<YourUEProject>/Plugins/ReactorUMG`（可选放在 Engine 插件目录）。  
3. 运行 `Plugins/ReactorUMG/Tools/setup_win.bat` 初始化环境。  
4. 编辑器中通过 `Edit > Plugins` 启用插件，并重启。  
5. 创建 `ReactorUIWidget`（Runtime）或 `EditorUtilityWidget`（Editor），进入模板目录开始编写 `<AssetName>.tsx`。  
6. 运行时通过蓝图或 C++ 调用 `CreateWidget`，编辑器中直接预览。

## 核心价值概览

| 主题 | 内容 |
| --- | --- |
| Why ReactorUMG | 用 React 替代传统 UMG 的冗余流程，复用 Web 前端最佳实践与 AI 编写体验。 |
| Key Features | React 组件 + Hook、AI 友好文本、热重载与实时预览、Spine/Rive 动画、示例模板。 |
| UI 工作流 | 自动生成 `TypeScript/src/<Project>/<AssetPath>` 目录；`launch.tsx` 为引导，不要修改。 |
| 命名建议 | Runtime 用 `RW_*` 前缀，Editor 用 `ERW_*`，区分运行时的代码路径。 |
| FAQ 重点 | ReactorUMG 架构依然依赖 UE 渲染，关注组件拆分与性能优化，先阅读 FAQ 减少常见问询。 |

## 推荐操作

- [安装指南](install/windows.md) · 详细的 Windows 安装流程与常见问题。  
- [入门教程](guide/basic.md) · 从创建资产到绑定交互的完整路径。  
- [API 文档](api/reference.md) · React/TS 接口、全局类型、UE 模块绑定。  
- [Roadmap & 贡献](README.md#roadmap) · 当前计划（如 Tailwind 支持）、贡献流程与 `yarn build && yarn lint && yarn test` 验证命令。  
- [中文文档](README_zh.md) · 供中文读者阅读的 README 版本。
