import * as UE from "ue";
import * as React from "react";

type State = {
    username: string;
    password: string;
    remember: boolean;
    status: "idle" | "success" | "error";
    message: string;
};

export class RU_Sample extends React.Component<{}, State> {
    state: State = {
        username: "",
        password: "",
        remember: true,
        status: "idle",
        message: "",
    };

    private handleUserNameChanged = (event) => {
        this.setState({ username: event.target.value, status: "idle", message: "" });
    };

    private handlePasswordChanged = (event) => {
        this.setState({ password: event.target.value, status: "idle", message: "" });
    };

    private handleToggleRemember = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ remember: event.target.checked });
    };

    private handleLogin = () => {
        const username = this.state.username.trim();
        const password = this.state.password;

        if (!username || !password) {
            this.setState({ status: "error", message: "请输入用户名和密码" });
            return;
        }

        // Mock login result; integrate with real auth or backend as needed
        const success = password.length >= 4;
        if (success) {
            this.setState({ status: "success", message: `欢迎回来，${username}!` });
        } else {
            this.setState({ status: "error", message: "密码长度至少4位" });
        }
    };

    render() {
        const { username, password, remember, status, message } = this.state;
        const isError = status === "error";
        const isSuccess = status === "success";

        return (
        <div>
            
            <div
                style={{
                    width: 420,
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    backgroundColor: "#10131a",
                    color: "#e6ecf5",
                    borderRadius: 8,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontSize: 22, fontWeight: 700 }}>游戏登录</span>
                    <span style={{ color: "#9aa6b8", fontSize: 13 }}>输入账号信息以进入游戏世界</span>
                </div>

                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 13, color: "#c7d0dd" }}>用户名</span>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUserNameChanged}
                        placeholder="输入用户名"
                        style={{
                            padding: "10px 12px",
                            borderRadius: 6,
                            border: "1px solid #2a3240",
                            background: "#161b25",
                            color: "#e6ecf5",
                        }}
                    />
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 13, color: "#c7d0dd" }}>密码</span>
                    <input
                        type="password"
                        value={password}
                        onChange={this.handlePasswordChanged}
                        placeholder="输入密码"
                        style={{
                            padding: "10px 12px",
                            borderRadius: 6,
                            border: "1px solid #2a3240",
                            background: "#161b25",
                            color: "#e6ecf5",
                        }}
                    />
                </label>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#c7d0dd" }}>
                        <input type="checkbox" checked={remember} onChange={this.handleToggleRemember} />
                        记住我
                    </label>
                    <span style={{ color: "#5fb2ff", fontSize: 13, textDecoration: "none" }}>
                        忘记密码?
                    </span>
                </div>

                <button
                    onClick={this.handleLogin}
                    style={{
                        padding: "12px 14px",
                        borderRadius: 6,
                        background: "linear-gradient(90deg, #4f8bff, #3fc7ff)",
                        color: "#0b0f16",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 6px 16px rgba(63,199,255,0.35)",
                    }}
                >
                    登录
                </button>

                {message && (
                    <div
                        style={{
                            padding: "10px 12px",
                            borderRadius: 6,
                            border: `1px solid ${isError ? "#ff6b6b" : "#4fd1c5"}`,
                            background: isError ? "#2a1518" : "#0f2a2a",
                            color: isError ? "#ffb3b3" : "#a4f4e4",
                            fontSize: 13,
                        }}
                    >
                        {message}
                    </div>
                )}

                <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#9aa6b8" }}>
                    <span>还没有账号？</span>
                    <span style={{ color: "#5fb2ff", textDecoration: "none" }}>
                        立即注册
                    </span>
                </div>
            </div>
        </div>
        );
    }
}
