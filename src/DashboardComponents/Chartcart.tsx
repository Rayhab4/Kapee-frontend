import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Aug", value: 100 },
  { name: "Sep", value: 150 },
  { name: "Oct", value: 120 },
  { name: "Nov", value: 130 },
  { name: "Dec", value: 180 },
  { name: "Jan", value: 250 },
];

const ChartCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
      <h3 className="text-lg font-semibold mb-4">Summary</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#f87171" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
