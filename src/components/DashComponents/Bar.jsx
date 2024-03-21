import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, Tooltip, Legend } from 'chart.js';
import '../DashComponents/dash.css';
Chart.register(BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Production', 'X-Ray', 'Testing', 'Network', 'Others'],
    datasets: [
      {
        label: 'Stage wise',
        data: [140, 50, 100, 40, 120],
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
        borderWidth: 2,
      borderRadius: 10,
      borderSkipped: false,

      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        
        stacked: true, // Stack bars on the x-axis
            grid: {
                display: false
            },
      },
      
      y: {
        stacked: true, // Stack bars on the y-axis
        grid: {
            display: false
        },
      },
    },
  };

  return (
    <div className='card border-0 p-3' style={{ position: 'relative', width: '100%',backgroundColor:'#F7F9FB' }}>
        <h6 className=''>Stage Wise Details</h6>
      <Bar className='mt-3' data={data} options={options} />
    </div>
  );
};

export default BarChart;
