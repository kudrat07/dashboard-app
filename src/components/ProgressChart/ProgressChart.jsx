import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { fetchBarData } from "../../apis/auth";
import toast from "react-hot-toast";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ProgressChart = ({barData}) => {

  const maxValue = barData.length > 0 
    ? Math.max(...barData.map((item) => (item.value || 0))) 
    : 1; 


  return (
    <div style={{ width: "100%", padding: "10px" }}>
      {barData.map((item, index) => (
        <div key={index} style={{ marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: index === 0 ? "bold" : "normal" }}>
            <span>{item.name}</span>
            <span>{item.value?.toLocaleString()}</span>
          </div>
          <div style={{ height: "8px", background: "#EAECEF", borderRadius: "50px", position: "relative", marginTop: "5px" }}>
            <div
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                height: "100%",
                background: "rgba(38, 166, 91, 0.7)",
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
