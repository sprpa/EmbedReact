import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['United States','Canada','Mexico','Others'],
    datasets: [
      {
        label: 'On Going Projects',
        data: [38.6,22.5,30.8,8.01],
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
    spacing:5,
    borderWidth:50,
    borderRadius:10,
    hoverBorderWidth:0,
   
  };

  return (
    <div className='card border-0 p-3' style={{backgroundColor:'#F7F9FB',height: '100%', width: '100%'}}>
         <h6 className=''>On Going Project Country Wise</h6>
        <div >
      <Doughnut className='mt-2 w-50 h-100' data={data} options={options} plugins={[ChartDataLabels]}   />
    </div>
    </div>
    
  );
};

export default DoughnutChart;
