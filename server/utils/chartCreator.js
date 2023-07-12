const createChartData = (labels = [], datasets) => {
    const chartData = {
        labels: labels,
        datasets: datasets,
    };
    
    return chartData;
};

module.exports = { createChartData };