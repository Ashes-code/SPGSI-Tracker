import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CoinBarChart = () => {
  const [chartData, setChartData] = useState(null);
  const selectedCoins = ["bitcoin", "ethereum", "dogecoin", "ripple", "cardano"]; // Choose your coins

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          selectedCoins.map((coin) =>
            axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart`, {
              params: {
                vs_currency: "usd", // Get data in USD
                days: 7, // Fetch last 7 days of price changes
                interval: "daily",
              },
            })
          )
        );

        const formattedData = responses.map((response, index) => {
          const prices = response.data.prices;
          const percentageChanges = [];

          for (let i = 1; i < prices.length; i++) {
            const prevPrice = prices[i - 1][1]; // Previous day's price
            const currentPrice = prices[i][1]; // Current day's price
            const change = ((currentPrice - prevPrice) / prevPrice) * 100; // % change
            percentageChanges.push(change.toFixed(2)); // Store change
          }

          return {
            label: selectedCoins[index],
            data: percentageChanges,
            backgroundColor: ["#f39c12", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6"][index], // Colors
            borderColor: "#fff",
            borderWidth: 1,
          };
        });

        setChartData({
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"], // X-axis labels
          datasets: formattedData,
        });
      } catch (error) {
        console.error("Error fetching CoinGecko data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <h3>7-Day Price Rise & Fall</h3>
      {chartData ? <Bar data={chartData} options={{ responsive: true }} /> : <p>Loading data...</p>}
    </div>
  );
};

export default CoinBarChart;
