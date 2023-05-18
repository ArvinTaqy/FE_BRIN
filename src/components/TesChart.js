import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const TesChart = () => {
  const data = {
    labels: ['08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00'],
    datasets: [
      {
        label: 'Perangkat EWS',
        data: [10, 12, 13, 13, 12, 13, 14, 11, 12, 12, 11, 13, 11, 13, 12,11 ],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        title:{
          display: true,
          text: 'waktu',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: true,
        title: {
          display:true,
          text: 'Parameter',
        },
      },
    },
  }

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TesChart;