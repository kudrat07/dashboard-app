import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const totalBars = 24;
const highlightedIndex = 18;

const barValues = Array.from({ length: totalBars }, () => Math.floor(Math.random() * 40) + 20);

const backgroundColors = barValues.map((_, index) =>
  index === highlightedIndex ? "rgba(33, 150, 243, 1)" : "rgba(144, 202, 249, 0.5)"
);

const borderColors = barValues.map((_, index) =>
  index === highlightedIndex ? "rgba(33, 150, 243, 1)" : "rgba(144, 202, 249, 1)"
);

const data = {
  labels: Array.from({ length: totalBars }, (_, i) => i + 1),
  datasets: [
    {
      label: "Values",
      data: barValues,
      backgroundColor: backgroundColors,
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    tooltip: {
      enabled: false, 
    },
  },
  scales: {
    x: {
      display: false, 
    },
    y: {
      display: false, 
      min: 0,
      max: 60, 
    },
  },
};

export default function BarChartComponent() {
  return (
    <div style={{ width: "100%", height: "32px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
