import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const TesChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Perangkat EWS',
        data: [10, 20, 30, 25, 35, 15],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TesChart;