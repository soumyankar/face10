import React, { useRef, useEffect } from 'react';
import Chart from 'chartjs/auto';

const BarChartComponent = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const context = chartRef.current.getContext('2d');
    const chart = new Chart(context, {
      type: 'bar',
      data,
      options,
    });

    return () => {
      chart.destroy();
    };
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default BarChartComponent;
