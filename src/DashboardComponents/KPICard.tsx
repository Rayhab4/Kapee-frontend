import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const KPICard = ({ title, value, percentage, data, color }) => {
  // Recharts expects an array of objects like [{name: 'Jan', value: 10}, ...]
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-400">{percentage}</p>
      <div className="mt-2" style={{ width: "100%", height: 100 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KPICard;
