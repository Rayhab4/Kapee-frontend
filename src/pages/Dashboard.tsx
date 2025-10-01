import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

interface OrderItem {
  productId?: Product;
  quantity: number;
  priceAtPurchase: number;
}

interface Order {
  _id: string;
  userId?: { name?: string; email?: string };
  items: OrderItem[];
  totalPrice: number;
  status: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface CartItem {
  _id: string;
  userId?: User;
  productId?: Product;
  quantity: number;
}

const COLORS = {
  orders: "#34D399",
  carts: "#60A5FA",
  products: "#FBBF24",
};

type ActiveSection = "orders" | "carts" | "products" | null;

const Dashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [carts, setCarts] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);

  const token = localStorage.getItem("token");

  // 🚪 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    window.location.href = "/login"; // redirect to login page
  };

  // Fetch Helpers
  const fetchOrders = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/order", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setOrders(data.data || []);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  const fetchCarts = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        const validCarts = (data.data || []).filter(
          (item: CartItem) => item.productId
        );
        setCarts(validCarts);
      }
    } catch (err) {
      console.error("Failed to fetch carts:", err);
    }
  };

  const fetchProducts = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setProducts(data.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
      fetchCarts();
      fetchProducts();
    }
  }, [token]);

  const pieData = [
    { name: "Orders", value: orders.length, color: COLORS.orders },
    { name: "Carts", value: carts.length, color: COLORS.carts },
    { name: "Products", value: products.length, color: COLORS.products },
  ];

  return (
    <div className="p-8">
      {/* Header with Logout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-600">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Cards View */}
      {!activeSection && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div
              onClick={() => setActiveSection("orders")}
              className="p-4 rounded shadow bg-green-100 cursor-pointer hover:bg-green-200"
            >
              <h2 className="text-lg font-bold text-green-700">Orders</h2>
              <p className="text-2xl font-semibold">{orders.length}</p>
            </div>
            <div
              onClick={() => setActiveSection("carts")}
              className="p-4 rounded shadow bg-blue-100 cursor-pointer hover:bg-blue-200"
            >
              <h2 className="text-lg font-bold text-blue-700">Carts</h2>
              <p className="text-2xl font-semibold">{carts.length}</p>
            </div>
            <div
              onClick={() => setActiveSection("products")}
              className="p-4 rounded shadow bg-yellow-100 cursor-pointer hover:bg-yellow-200"
            >
              <h2 className="text-lg font-bold text-yellow-700">Products</h2>
              <p className="text-2xl font-semibold">{products.length}</p>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="w-full md:w-1/2 h-64 mb-8">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {/* Back Button */}
      {activeSection && (
        <button
          onClick={() => setActiveSection(null)}
          className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ← Back to Dashboard
        </button>
      )}

      {/* Orders Section */}
      {activeSection === "orders" && (
        <div className="overflow-x-auto mb-8">
          <h2 className="text-xl font-bold text-green-700 mb-2">Orders</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-green-100">
                <th className="px-4 py-2 border">Order ID</th>
                <th className="px-4 py-2 border">User</th>
                <th className="px-4 py-2 border">Total Price</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="px-4 py-2 border">{order._id}</td>
                  <td className="px-4 py-2 border">
                    {order.userId?.name || "Deleted User"}
                  </td>
                  <td className="px-4 py-2 border">${order.totalPrice}</td>
                  <td className="px-4 py-2 border">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Carts Section */}
      {activeSection === "carts" && (
        <div className="overflow-x-auto mb-8">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Carts</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 border">Cart ID</th>
                <th className="px-4 py-2 border">User</th>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart._id}>
                  <td className="px-4 py-2 border">{cart._id}</td>
                  <td className="px-4 py-2 border">{cart.userId?.name}</td>
                  <td className="px-4 py-2 border">
                    {cart.productId?.name || "Deleted Product"}
                  </td>
                  <td className="px-4 py-2 border">{cart.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Products Section */}
      {activeSection === "products" && (
        <div className="overflow-x-auto mb-8">
          <h2 className="text-xl font-bold text-yellow-700 mb-2">Products</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-4 py-2 border">Product ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="px-4 py-2 border">{product._id}</td>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">${product.price}</td>
                  <td className="px-4 py-2 border">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
