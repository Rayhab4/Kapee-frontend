import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        const fetchUsers = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/auth/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await res.json();
                // Filter out admin users
                const regularUsers = (data.data || []).filter((user) => user.role !== "admin");
                setUsers(regularUsers);
            }
            catch (err) {
                console.error("User fetch error:", err);
                setError(err.message || "Failed to load users.");
            }
            finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [navigate]);
    if (loading)
        return _jsx("p", { className: "text-center mt-10", children: "Loading users..." });
    if (error)
        return _jsx("p", { className: "text-center mt-10 text-red-600", children: error });
    if (users.length === 0)
        return _jsx("p", { className: "text-center mt-10", children: "No users found." });
    return (_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Users" }), _jsxs("table", { className: "w-full border-collapse border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100", children: [_jsx("th", { className: "border p-2", children: "ID" }), _jsx("th", { className: "border p-2", children: "Name" }), _jsx("th", { className: "border p-2", children: "Email" }), _jsx("th", { className: "border p-2", children: "Status" })] }) }), _jsx("tbody", { children: users.map((user) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "border p-2", children: user._id }), _jsx("td", { className: "border p-2", children: user.name }), _jsx("td", { className: "border p-2", children: user.email }), _jsx("td", { className: "border p-2", children: user.status || "Active" })] }, user._id))) })] })] }));
};
export default Users;
