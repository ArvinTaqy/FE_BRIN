import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BatteryChart = () => {
  const data = {
    labels: ['08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00'],
    datasets: [
      {
        label: 'Battery Power',
        data: [14, 13, 13.5, 14.5, 15.5, 15, 14, 14, 13.5, 14.4],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.5,
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

export default BatteryChart;