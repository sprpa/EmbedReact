import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement,Tooltip } from 'chart.js';

ChartJS.register([LineElement, CategoryScale, LinearScale, PointElement,Tooltip]);

const LineChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thuresday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 40, 25, 100, 76, 110, 100],
        borderColor: 'black',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 1,
        tension: 0.5
      },
      {
        label: 'Expenses',
        data: [35, 49, 70, 91, 36, 45, 50],
        borderColor: 'grey',
        backgroundColor: 'transparent',
        borderWidth: 1,
        fill: false,
        tension: 0.5,
        borderDash: [5, 5], // Set the border dash style (5px on, 5px off)
      }
    ],
  };

  // Options for the chart
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true, // Ensure ticks are displayed on the x-axis
        },
        axis: {
          display: false, // Hide the x-axis line
        },
      },
      y: {
        grid: {
          display: false, // Disable gridlines for the y-axis
        },
        ticks: {
          display: true, // Ensure ticks are displayed on the y-axis
        },
        axis: {
          display: false, // Hide the y-axis line
        },
      },
    },
    maintainAspectRatio: false, // Allow the chart to be responsive
  };
  

  return(<div className='card border-0 p-3' style={{ height: '200px', width: '100%',backgroundColor:' #F7FBF7' }}>

  <Line style={{}} data={data} options={options} />
</div>);
};

export default LineChart;
