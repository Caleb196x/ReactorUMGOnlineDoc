# ReactorUMG

> **Unreal Engine · React/TypeScript UI 工作流**：基于 Puerts/PuertsTS，在 UE 中使用 React 构建 Runtime 与 Editor UI，并提供热重载与实时预览，快速交付 AI 友好的 UMG 体验。

![](./images/Cover.png)

!!! warning "Alpha 阶段"
    API 与目录仍在调整，正式使用前请先阅读常见问题，确认兼容性与升级路径。

## 项目概览

| 关键词 | Unreal Engine · UMG/Slate · React/TypeScript · Puerts/PuertsTS · Hot Reload · Live Preview |
| --- | --- |
| 支持平台 | Windows · Android · Linux |
| 适用场景 | 快速搭建 Runtime UI、编辑器工具面板、设计系统/皮肤库 |
| 推荐实践 | 文本优先、组件化、热重载验证、使用 `RW_`/`ERW_` 前缀区分运行时与编辑器 |

ReactorUMG 帮助团队把前端工程化与 AI 生成的文本代码引入 UMG/Slate，复用 React 组件、Hook、TypeScript 类型体系与测试/ linting 流程，缩短 UI 迭代周期。

## 核心特性

- React 组件与 Hook：支持函数/类组件、TSX 语法。
- 可重用 UI：面向设计系统与皮肤的组件复用。
- 脚本逻辑：TypeScript 定义交互逻辑，复用前端生态。
- 热重载与实时预览：保存即刷，减少反复打包与资源导入。
- 动画支持：可加载 Spine、Rive 动画。
- 示例模板：从简单到高级的 UI 样例，助力快速起步。

## 基本要求

- Unreal Engine **5.x**
- **Node.js ≥18**，推荐 Yarn/PNPM/NPM 任一
- Windows 10/11 或 Linux

## 安装与启用速览

1. 安装 Node.js（推荐 Yarn 作为包管理器）。
2. 获取插件：下载最新 Release，或直接 clone 本仓库。
3. 放置路径：`<YourUEProject>/Plugins/ReactorUMG`（或 `<UE_5.x>/Engine/Plugins/Marketplace/ReactorUMG`）。
4. 初始化环境：运行 `Plugins/ReactorUMG/Tools/setup_win.bat`。
5. 在 UE 中启用插件：`Edit > Plugins` 搜索 **ReactorUMG** 启用并重启。

### 创建 UI

- **Runtime UI**：内容浏览器中创建 **ReactorUIWidget**（ReactorUMG > ReactorUMG）；系统生成 `<ProjectDir>/TypeScript/src/<ProjectName>/<AssetPath>` 模板，入口为 `<AssetName>.tsx`。
- **Editor UI**：创建 **EditorUtilityWidget**（ReactorUMG > EditorUtilityUMG）；模板位于 `<ProjectDir>/TypeScript/src/<ProjectName>/Editor/<AssetPath>`，可直接在编辑器内预览迭代。
- ⚠️ `launch.tsx` 为引导文件，请勿修改。

## 项目目录示例

```plain
MyProject/
├─ Content/                        # UE assets
│  └─ JavaScript/                  # JS output
├─ Plugins/
│  └─ ReactorUMG/                  # Plugin
│     ├─ Scripts/
│     │  ├─ Project/src/reactorUMG/# Project templates
│     │  └─ System/JavaScript/     # System scripts
│     └─ Source/                   # C++ source
├─ TypeScript/                     # Auto-generated React/TS workspace
│  ├─ src/
│  │  ├─ MyProject/                # Editor/Runtime UI
│  │  │  ├─ Editor/                # Editor UI
│  │  │  └─ RW_Test/               # Runtime UI scripts
│  │  │     ├─ index.tsx
│  │  │     ├─ launch.tsx          # UI bootstrap (do not modify)
│  │  │     └─ RW_Test.tsx         # Actual UI code
│  │  ├─ reactorUMG/               # Framework
│  │  └─ types/                    # Puerts/UE types
│  ├─ node_modules/
│  ├─ tsconfig.json
│  └─ package.json
└─ MyProject.uproject
```

## 下一步

- 查阅 **快速入门** 完成首次搭建。
- 在 **样例参考** 复用或创建组件模板。
- 在 **API** 页面逐步补充可复用的接口说明。
- 如遇常见问题，前往 **FAQ**。
