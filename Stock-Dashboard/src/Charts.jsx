import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
import React from "react";
import { LineChartData } from "./fakedata";
import "./App.css"; 

export const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      filler: {
        display: true,
      }
    },
    scales: {
      x: {
        grid: {
          display: true, 
          color: "grey",  // Column color
          lineWidth: 0.5,  // Column thickness
        },
        ticks: {
          padding: 5, // Increases space between columns
        },
      },
      y: {
        grid: {
          display: true, 
          color: "grey",  // Row color
          lineWidth: 0.5,  // Row thickness
        },
        ticks: {
          padding: 10, // Adds more space between rows
        },
      },
    },
  };

  return(
      <div className="chart-container">
      <h2>Balance Trends</h2>
      <div className="chart-wrapper">
        <Line data={LineChartData} options={options} />
      </div>
    </div>
  )
};
 
