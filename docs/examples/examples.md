# ReactorUMG 文档大纲与排布建议

> **ReactorUMG** 让 Unreal Engine 的 UMG/Slate UI 拥抱 **React + TypeScript** 开发方式，支持热重载、实时预览与 AI 协作迭代。

---

## ✨ 快速概览

| 关注点 | 说明 |
| --- | --- |
| 当前阶段 | ⚠️ Alpha（API 与目录结构仍可能调整） |
| 核心能力 | React 组件化、可重用 UI、脚本逻辑、热重载、动画（Spine/Rive） |
| 技术栈 | UE5.x · Puerts/PuertsTS · Node.js ≥ 18 · React/TSX |
| 首要动作 | 阅读 FAQ → 准备 Node/包管理器 → 安装插件 → 创建 Runtime/Editor UI |
| 适用场景 | 快速搭建游戏 UI、各类编辑器工具、AI 驱动的原型设计 |

---

## 🧭 推荐目录结构

1. **项目概览**
   - ReactorUMG 的定位、适用团队、关键词集合。
   - Alpha 阶段声明 & FAQ 提醒。
2. **亮点与价值**
   - “Why ReactorUMG” 与传统 UMG 痛点对照。
   - Key Features（React 组件、热重载、AI 友好、动画等）。
3. **环境需求**
   - UE 版本、Node.js ≥ 18、包管理器、推荐 IDE、支持平台。
4. **安装与快速开始**
   - 4.1 安装 Node.js/包管理器  
   - 4.2 获取插件（Release / Clone）  
   - 4.3 放置目录（Project / Engine）  
   - 4.4 初始化环境（`Tools/setup_win.bat`）  
   - 4.5 启用插件（UE `Edit > Plugins`）  
   - 4.6 创建 UI（Runtime / Editor 两条路径）
5. **UI 工作流**
   - Runtime UI：资产创建 → 模板目录 → 入口文件 → 游戏中使用方式。
   - Editor UI：资产创建 → `Editor` 目录差异 → 编辑器内预览。
   - 命名规则建议（`RW_` / `ERW_`）。
6. **项目结构示例**
   - 保留 README 中的 ASCII 树，突出自动生成目录与不可修改文件。
7. **FAQ 与性能建议**
   - 与 UMG/Slate 的关系、性能调优、常见陷阱。
8. **Roadmap 与贡献指南**
   - 计划特性（如 Tailwind 支持）、贡献流程、质量检查命令。
9. **链接与资源**
   - Docs、示例项目、Release、Issues、Discussions（上线后补全）。

---

## 📚 章节内容草案

### 1. 项目概览
- 搭配封面图或 Hero 区，配一句话电梯稿。
- 提供语言切换（如链接 `README_zh.md`）与 FAQ 提前阅读提示。

### 2. Why ReactorUMG & Key Features
- 采用“痛点 → 方案 → 价值”三段式，解释文本化开发、React 工作流、AI 友好。
- 将 README 的功能要点整理成可复用的网格/卡片。

### 3. Requirements
- 表格列出 UE 5.x、Node.js ≥ 18、包管理器（Yarn/PNPM/NPM）、推荐 IDE（VSCode/Cursor）。
- 单独强调支持平台：Windows、Android、Linux。

### 4. Install & Quick Start
- 使用步骤或时间线组件呈现六个动作：安装 Node → 获取插件 → 放置目录 → 初始化 → 启用 → 创建 UI。
- 在步骤中嵌入关键路径（`<Project>/Plugins/ReactorUMG`）与命令（`setup_win.bat`）。

### 5. UI 工作流
- **Runtime UI**：资产创建（ReactorUIWidget）→ 模板生成路径 `<Project>/TypeScript/src/<Project>/<AssetPath>` → 入口文件 `<AssetName>.tsx` → 与游戏交互（`CreateWidget`）。
- **Editor UI**：资产创建（EditorUtilityWidget）→ 模板路径含 `Editor` → 编辑器内直接预览。
- 提供命名建议与“不要修改 `launch.tsx`”的警示。

### 6. 项目结构
```plain
MyProject/
├─ Content/
├─ Plugins/
│  └─ ReactorUMG/
│     ├─ Scripts/
│     └─ Source/
├─ TypeScript/
│  ├─ src/
│  │  ├─ MyProject/
│  │  │  ├─ Editor/
│  │  │  └─ RW_Test/
│  │  │     ├─ index.tsx
│  │  │     ├─ launch.tsx
│  │  │     └─ RW_Test.tsx
│  ├─ tsconfig.json
│  └─ package.json
└─ MyProject.uproject
```
- 通过 `!!! note` 强调：`launch.tsx` 为自动生成的引导文件，请勿修改。
- 说明 `JavaScript` 输出、`TypeScript` 工作区与框架目录（`reactorUMG/`）。

### 7. FAQ
- 收录 README 中的 QA，并扩展：  
  - 与 UMG/Slate 的关系。  
  - 性能建议（拆分组件、提升状态、禁用调试开销）。  
  - 常见问题（脚本未加载、热重载失败等）。

### 8. Roadmap & Contributing
- 使用任务列表展示路线图：`- [ ] Tailwind CSS 支持` 等。  
- 贡献流程保持 4 步：分支 → 运行示例 → 执行 `yarn build && yarn lint && yarn test` → 提交 PR。

### 9. Links & Resources
- 以表格或按钮列出：Docs 首页、示例项目、Releases、Issues、Discussions。  
- 资源尚未开放时标注 `TBD`，并扼要说明计划填充内容。

---

## 🪄 排版与组件建议
- 首屏：使用 MkDocs Material 的 `hero` + CTA 按钮（FAQ / 快速开始）。
- 信息卡：用两列卡片展示“当前阶段 / 核心能力 / 支持平台”。
- 流程：安装步骤采用 `steps`、`timeline` 或编排图，方便新用户跟随。
- FAQ：利用 `???+ question` 折叠，保持页面简洁。
- 代码：路径/命令统一放在 `code` block 或 `kbd` 样式，快速复制。

---

## 🔗 下一步
- 将上述大纲映射到 `mkdocs.yml` 导航，确保章节顺序一致。
- 在 `guide/`、`install/`、`api/` 等目录下填充对应内容，保持与 README 一致。
- 定期同步 README 的 Roadmap/FAQ/Links，保持单一事实来源。
