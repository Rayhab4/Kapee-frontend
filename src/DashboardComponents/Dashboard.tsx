import React from "react";
import Card from "./Card";
import KPICard from "./KPICard";

function Dashboard() {
  const cardsData = [
    { title: "", subtitle: "", size: "large" },
    { title: "Day", subtitle: "", size: "normal" },
    { title: "Week", subtitle: "", size: "normal" },
    { title: "Month", subtitle: "", size: "normal" },
    { title: "Annual", subtitle: "", size: "normal" },
    { title: "<", subtitle: "", size: "small" },
    { title: "30April2019", subtitle: "", size: "large" },
    { title: ">", subtitle: "", size: "small" },
  ];

  // Example KPI data
  const newOrdersData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const revenueData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [120, 200, 150, 170, 300, 250, 400],
  };

  const customersData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [5, 10, 8, 12, 7, 9, 15],
  };

  return (
    <div className="p-6">
      {/* First row: cardsData */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            size={card.size}
          />
        ))}
      </div>

      {/* Second row: KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          title="New Orders"
          value="35,673"
          percentage="↑ 2.00% (30 days)"
          data={newOrdersData}
          color="cyan"
        />
        <KPICard
          title="Revenue"
          value="$12,480"
          percentage="↑ 5.40% (30 days)"
          data={revenueData}
          color="green"
        />
        <KPICard
          title="New Customers"
          value="1,250"
          percentage="↓ 1.20% (30 days)"
          data={customersData}
          color="red"
        />
      </div>
    </div>
  );
}

export default Dashboard;
