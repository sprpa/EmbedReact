import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    // layout: {
    //     padding: {
    //       top: 10,
    //       bottom: 10,
    //       left: 10,
    //       right: 10
    //     }
    //   }
  };

  return (
    <div style={{ height:'95%',width:'55%'}}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
