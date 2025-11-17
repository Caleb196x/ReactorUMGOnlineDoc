# API

> 常用 API 模板：用于记录 ReactorUMG 插件、React 组件、TS 工具方法与 UE 交互。按模块补充接口签名、参数、示例及注意事项。

## 导航示例

- **Runtime UI**：组件入口、状态管理、事件绑定、数据流。
- **Editor UI**：编辑器面板、命令/工具注册、资源操作。
- **框架/工具**：日志、配置、实用函数、类型定义。

## 通用字段模板

| 名称 | 类型 | 说明 | 备注 |
| --- | --- | --- | --- |
| `propName` | `string` | 属性/参数含义 | 默认值、可选性 |
| `onEvent` | `(payload) => void` | 回调含义 | 触发时机、节流需求 |
| `options` | `Partial<Config>` | 可选配置 | 性能或兼容性提示 |

## 组件/函数示例模板

### 组件：`<WidgetName />`

- **用途**：一句话描述组件作用与使用场景。
- **依赖**：关联的 ue/puerts/reactorUMG 模块。

```tsx
interface WidgetProps {
  title: string;
  onConfirm?: (value: string) => void;
}

export function WidgetName({ title, onConfirm }: WidgetProps) {
  return (
    <panel>
      <text>{title}</text>
      <button onClick={() => onConfirm?.("ok")}>Confirm</button>
    </panel>
  );
}
```

**使用示例**

```tsx
import WidgetName from "./WidgetName";

export default function Screen() {
  return <WidgetName title="Demo" onConfirm={console.log} />;
}
```

### 函数：`useSomething()`

- **签名**：`const state = useSomething(initial?: Config): State`
- **说明**：函数/Hook 作用与返回值组成。
- **注意**：性能、依赖项或生命周期注意点。

```ts
type Config = { mount?: boolean; logging?: boolean };
type State = { ready: boolean; dispose: () => void };
```

## 常见注意事项

- 标注**支持的 UE 版本**与插件最低版本，以便升级检查。
- 若有异步操作，明确线程/生命周期限制，避免编辑器挂起。
- 提供最小可运行片段，尽量使用 TS 类型说明行为。
