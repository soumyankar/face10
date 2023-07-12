/* AGE FREQUENCY AND CHART */
export const generateAgeChartData = (analysisData) => {
    const ageGroups = [
        { name: '0-14', min: 0, max: 14 },
        { name: '15-18', min: 15, max: 18 },
        { name: '19-25', min: 19, max: 25 },
        { name: '26-40', min: 26, max: 40 },
        { name: '41-60', min: 41, max: 60 },
        { name: '60+', min: 60, max: Infinity },
    ];
    
    const ageGroupCounts = {};
    
    // Initialize the counts for each age group to 0
    ageGroups.forEach(group => {
        ageGroupCounts[group.name] = 0;
    });
    
    analysisData.values.forEach(value => {
        ageGroups.forEach(group => {
            if (value >= group.min && value <= group.max) {
                ageGroupCounts[group.name]++;
            }
        });
    });
    
    const ageGroupLabels = Object.keys(ageGroupCounts);
    const ageGroupFrequencies = Object.values(ageGroupCounts);

    const chartData = {
        labels: ageGroupLabels,
        datasets: [
            {
                label: 'Data',
                data: ageGroupFrequencies,
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
export const generateAgeChartOptions = () => {
    // Customize chart options as needed
    return {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Count'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Age Groups'
                }
            }
        }
    }
};