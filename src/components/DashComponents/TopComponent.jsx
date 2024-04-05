import React, { useState, useEffect } from 'react';
import '../DashComponents/dash.css';
import Comp3 from '../Compnent3'
import LineChart from '../DashComponents/LineChart';
import DoughnutChart from '../DashComponents/Doughnut';
import BarChart from './Bar';
const data = [
  {
    title: 'Completed',
    number: '7265',
    percent: '+11.02',
  },
  {
    title: 'In Progress',
    number: '3671',
    percent: '+11.02',
  },
  {
    title: 'Failure',
    number: '156',
    percent: '+11.02',
  },
  {
    title: 'Reflected',
    number: '151',
    percent: '-11.02',
  },
];

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function TopComponent() {
  console.log("Hello")
  const [counters, setCounters] = useState(Array(data.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      let updatedCounters = counters.map((counter, index) => {
        const item = data[index];
        const targetNumber = parseInt(item.number.replace(/,/g, '')); // Remove commas before parsing
        const increment = Math.ceil(targetNumber / 200); // Adjust speed here

        if (counter < targetNumber) {
          return counter + increment;
        } else {
          return targetNumber;
        }
      });

      setCounters(updatedCounters);
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(interval);
  }, [counters, data]);


  return (
    <div className='container-fluid '>

      <div className='row'>
        <div className='col-md-9'>
          <h6>Overview</h6>
          <div className='row'>
            {data.map((item, index) => (
              <div key={index} className='col-md-3 mb-3'>
                <div className='card px-3 py-4 border-0' style={{ backgroundColor: '#EAFFE3' }}>
                  <h2 className='head m-0'>{item.title}</h2>
                  <div className='d-flex justify-content-between pt-3'>
                    <p className='number m-0'>
                      {formatNumberWithCommas(counters[index])}
                    </p>
                    <p className='percent mt-1 m-0'>
                      {item.percent.startsWith('+') ? (
                        <span style={{ color: 'green' }}>&#8593;</span>
                      ) : (
                        <span style={{ color: 'red' }}>&#8595;</span>
                      )}
                      {item.percent}
                      <span className='ps-1'>%</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className='col-12 py-3'  >
              <LineChart />
            </div>

            <div className='col-12'>
              <div className="row" >
                <div className='col-md-6 ' >
                  <BarChart />
                </div>
                <div className='col-md-6' >
                  <DoughnutChart />
                </div>
              </div>
            </div>


          </div>


        </div>
        <div className='col-md-3 '>
          <Comp3 />
        </div>
      </div>
    </div>
  );
}

export default TopComponent;
