import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [forgotEmail, setForgotEmail] = useState("");
    const [resetToken, setResetToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showForgot, setShowForgot] = useState(false);
    const [showReset, setShowReset] = useState(false);
    const [forgotLoading, setForgotLoading] = useState(false);
    const [resetLoading, setResetLoading] = useState(false);
    const navigate = useNavigate();
    // --- LOGIN ---
    const handleLogin = async (emailInput, passwordInput) => {
        const normalizedEmail = emailInput.toLowerCase();
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: normalizedEmail, password: passwordInput }),
            });
            const data = await res.json().catch(() => ({ message: "Unknown error" }));
            if (!res.ok) {
                if (data.message === "Invalid email or password") {
                    alert("No account found with this email. Please Register...");
                    navigate("/signup", { state: { email: normalizedEmail } });
                    return false;
                }
                alert(data.message || "Login failed");
                return false;
            }
            const authData = data;
            localStorage.setItem("token", authData.token);
            localStorage.setItem("role", authData.role);
            localStorage.setItem("user", JSON.stringify(authData.user));
            if (authData.role === "admin")
                navigate("/dashboard");
            else
                navigate("/");
            return true;
        }
        catch (err) {
            alert("Network error: " + err.message);
            return false;
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await handleLogin(email, password);
        setLoading(false);
    };
    // --- FORGOT PASSWORD ---
    const handleForgotPassword = async () => {
        if (!forgotEmail)
            return alert("Please enter your email");
        setForgotLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: forgotEmail.toLowerCase() }),
            });
            const data = await res.json();
            // Always show generic message to avoid leaking user info
            alert(" check your email for OTP.");
            setShowForgot(false);
            setShowReset(true); // Move to reset form
        }
        catch (err) {
            alert("Network error: " + err.message);
        }
        finally {
            setForgotLoading(false);
        }
    };
    // --- RESET PASSWORD ---
    const handleResetPassword = async () => {
        if (!resetToken || !newPassword || !forgotEmail)
            return alert("Please fill all fields");
        setResetLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: forgotEmail.toLowerCase(),
                    otp: resetToken,
                    newPassword,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                alert(data.message || "Password reset successfully");
                setShowReset(false);
                setResetToken("");
                setNewPassword("");
                setForgotEmail("");
            }
            else {
                alert(data.message || "Failed to reset password");
            }
        }
        catch (err) {
            alert("Network error: " + err.message);
        }
        finally {
            setResetLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "bg-white p-8 rounded shadow-md w-full max-w-md", children: [!showForgot && !showReset && (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Login" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full border px-4 py-2 rounded", required: true }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full border px-4 py-2 rounded", required: true }), _jsx("button", { type: "submit", className: "w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-600 transition", disabled: loading, children: loading ? "Please wait..." : "Login" })] }), _jsx("div", { className: "mt-4 text-center", children: _jsx("button", { type: "button", onClick: () => setShowForgot(true), className: "text-blue-500 underline", children: "Forgot Password?" }) }), _jsxs("p", { className: "mt-4 text-center text-gray-600", children: ["Don't have an account?", " ", _jsx("button", { type: "button", onClick: () => navigate("/signup"), className: "text-yellow-500 font-semibold", children: "Sign Up" })] })] })), showForgot && (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Forgot Password" }), _jsx("input", { type: "email", placeholder: "Enter your email", value: forgotEmail, onChange: (e) => setForgotEmail(e.target.value), className: "w-full border px-4 py-2 rounded mb-4" }), _jsx("button", { onClick: handleForgotPassword, className: "w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600 transition", disabled: forgotLoading, children: forgotLoading ? "Sending..." : "Send Reset Link" }), _jsx("button", { onClick: () => setShowForgot(false), className: "mt-4 w-full bg-gray-300 py-2 rounded hover:bg-gray-400 transition", children: "Back to Login" })] })), showReset && (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Reset Password" }), _jsx("input", { type: "text", placeholder: "Reset Token", value: resetToken, onChange: (e) => setResetToken(e.target.value), className: "w-full border px-4 py-2 rounded mb-4" }), _jsx("input", { type: "password", placeholder: "New Password", value: newPassword, onChange: (e) => setNewPassword(e.target.value), className: "w-full border px-4 py-2 rounded mb-4" }), _jsx("button", { onClick: handleResetPassword, className: "w-full bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600 transition", disabled: resetLoading, children: resetLoading ? "Resetting..." : "Reset Password" }), _jsx("button", { onClick: () => setShowReset(false), className: "mt-4 w-full bg-gray-300 py-2 rounded hover:bg-gray-400 transition", children: "Back to Login" })] }))] }) }));
};
export default LoginPage;
