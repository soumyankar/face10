export const generateChartData = (analysisData) => {
  // Generate your chart data based on the analysis data
  // Example:
  const chartData = {
    labels: analysisData.labels,
    datasets: [
      {
        label: 'Data',
        data: analysisData.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  // Return the generated chart data
  return chartData;
};

// Define the chart options
export const generateChartOptions = () => {
  // Customize chart options as needed
  return {
    scales: {
      x: {
        display: false, // Disable x-axis label
      },
    },
  };
};