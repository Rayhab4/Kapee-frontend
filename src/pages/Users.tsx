import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  role?: string; // added role to support filtering
  status?: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
        const regularUsers: User[] = ((data.data || []) as User[]).filter(
          (user) => user.role !== "admin"
        );

        setUsers(regularUsers);
      } catch (err: any) {
        console.error("User fetch error:", err);
        setError(err.message || "Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  if (loading) return <p className="text-center mt-10">Loading users...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (users.length === 0) return <p className="text-center mt-10">No users found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="border p-2">{user._id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.status || "Active"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
