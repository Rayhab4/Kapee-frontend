import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthResponse {
  message: string;
  token: string;
  role: string;
  user: User;
}

const LoginPage: React.FC = () => {
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
  const handleLogin = async (emailInput: string, passwordInput: string) => {
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

      const authData: AuthResponse = data;
      localStorage.setItem("token", authData.token);
      localStorage.setItem("role", authData.role);
      localStorage.setItem("user", JSON.stringify(authData.user));

      if (authData.role === "admin") navigate("/dashboard");
      else navigate("/");

      return true;
    } catch (err: any) {
      alert("Network error: " + err.message);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await handleLogin(email, password);
    setLoading(false);
  };

  // --- FORGOT PASSWORD ---
  const handleForgotPassword = async () => {
    if (!forgotEmail) return alert("Please enter your email");
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
    } catch (err: any) {
      alert("Network error: " + err.message);
    } finally {
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
      } else {
        alert(data.message || "Failed to reset password");
      }
    } catch (err: any) {
      alert("Network error: " + err.message);
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">

        {/* --- LOGIN FORM --- */}
        {!showForgot && !showReset && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-600 transition"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Login"}
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="text-blue-500 underline"
              >
                Forgot Password?
              </button>
            </div>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-yellow-500 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </>
        )}

        {/* --- FORGOT PASSWORD FORM --- */}
        {showForgot && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4"
            />
            <button
              onClick={handleForgotPassword}
              className="w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600 transition"
              disabled={forgotLoading}
            >
              {forgotLoading ? "Sending..." : "Send Reset Link"}
            </button>
            <button
              onClick={() => setShowForgot(false)}
              className="mt-4 w-full bg-gray-300 py-2 rounded hover:bg-gray-400 transition"
            >
              Back to Login
            </button>
          </>
        )}

        {/* --- RESET PASSWORD FORM --- */}
        {showReset && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
            <input
              type="text"
              placeholder="Reset Token"
              value={resetToken}
              onChange={(e) => setResetToken(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4"
            />
            <button
              onClick={handleResetPassword}
              className="w-full bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600 transition"
              disabled={resetLoading}
            >
              {resetLoading ? "Resetting..." : "Reset Password"}
            </button>
            <button
              onClick={() => setShowReset(false)}
              className="mt-4 w-full bg-gray-300 py-2 rounded hover:bg-gray-400 transition"
            >
              Back to Login
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default LoginPage;
