export const LineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Enterprise Balance Data",
      data: [9030, 7000, 8500, 18000, 15000, 12100],
      borderColor: "rgb(0, 148, 148)",
      backgroundColor: "green",
      tension: 0.5,
      fill: false,
      borderWidth: 4, // Increase line thickness
      pointRadius: 4, // Increase point size
    },
    {
      label: "Akachukwu Balance Data",
      data: [1930, 4000, 8500, 9908, 14000, 14100],
      borderColor: "#0a3d91",
      backgroundColor: "blue",
      tension: 0.5,
      fill: false,
      borderWidth: 4, // Increase line thickness
      pointRadius: 4, // Increase point size
    },
  ],
};


export const PieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "Youtube", "Threads", "Tiktok", "LinkedIn"],
  datasets: [
    {
      Label: "Engagements and Revenue",
      data:[5000, 8000, 9800, 12000, 4000, 15000, 4100],
      backgroundColor: [
        "#1877F2",
        "#E4405F",
        "#000000",
        "#FF0000",
        "brown",
        "#69C9D0",
        "#0077B5",
      ],
      hoverOffset: 15,
    }
  ]
}