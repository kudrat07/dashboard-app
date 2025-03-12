import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ProgressChart = () => {

  const categories = [
    { label: "Food and Drinks", value: 872400 },
    { label: "Shopping", value: 1378200 },
    { label: "Housing", value: 928500 },
    { label: "Transportation", value: 420700 },
    { label: "Vehicle", value: 520000 },
  ];

  // Find the max value to normalize data
  const maxValue = Math.max(...categories.map((item) => item.value));

  const data = {
    labels: categories.map((item) => item.label), 
    datasets: [
      {
        label: "Progress",
        data: categories.map((item) => (item.value / maxValue) * 100), 
        backgroundColor: "rgba(38, 166, 91, 0.7)", // Green color
        borderRadius: 50, 
        barThickness: 8,
      },
    ],
  };

  const options = {
    indexAxis: "y", 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, 
      tooltip: { enabled: true }, 
    },
    scales: {
      x: { display: false, min: 0, max: 100 }, 
      y: {
        ticks: { display: false }, 
      },
    },
  };

  return (
    <div style={{ width: "100%", padding: "10px" }}>
      {categories.map((item, index) => (
        <div key={index} style={{ marginBottom: "18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: index === 0 ? "bold" : "normal" }}>
            <span>{item.label}</span>
            <span>{item.value.toLocaleString()}</span>
          </div>
          <div style={{ height: "8px", background: "#EAECEF", borderRadius: "50px", position: "relative", marginTop: "5px" }}>
            <div
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                height: "100%",
                background:  "rgba(38, 166, 91, 0.7)",
                borderRadius: "50px",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressChart;
