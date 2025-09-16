// src/components/KPICard.js
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const KPICard = ({ title, value, percentage, data, color }) => {
  // Recharts requires data to be in an array of objects format.
  // We transform the incoming data to fit this structure.
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <div
      className={`p-4 rounded-lg shadow-md text-white bg-${color}-500 relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 p-4">
        {/* You can add an icon here. For example, a trending up icon. */}
      </div>
      <div className="relative z-10">
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <p className="text-sm mt-1">{percentage}</p>
      </div>
      <div className="h-20 w-full absolute bottom-0 left-0 p-2">
        <ResponsiveContainer>
          <LineChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#fff" // Set the line color to white to stand out
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KPICard;