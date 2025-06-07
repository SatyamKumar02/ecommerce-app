import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 2400 },
  { name: "Feb", sales: 2210 },
  { name: "Mar", sales: 2290 },
  { name: "Apr", sales: 2000 },
  { name: "May", sales: 2181 },
  { name: "Jun", sales: 2500 },
];

const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sales Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
