import "./App.css"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import React from "react";
import { PieChartData } from "./fakedata";
import "./App.css"; 



export const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return(
      <div className="chart-container">
      <h2>Engagement and Revenue</h2>
      <div className="Pie-wrapper">
        <Pie data={PieChartData} options={options} />
      </div>
    </div>
  )
}