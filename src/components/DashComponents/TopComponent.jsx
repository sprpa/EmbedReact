import React from 'react';
import '../DashComponents/dash.css';
import Comp3  from '../Compnent3'
import { LineChart } from '@mui/x-charts/LineChart';
const data = [
  {
    title: 'Completed',
    number: '7,265',
    percent: '+11.02',
  },
  {
    title: 'In Progress',
    number: '3,671',
    percent: '-11.02',
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

function TopComponent() {
  return (
    <div className='container-fluid p-0'>
        
      <div className='row'>
        <div className='col-9'>
        <h6>Overview</h6>
          <div className='row'>
            {data.map((item, index) => (
              <div key={index} className='col-3'>
                <div className='card px-3 py-4 border-0' style={{ backgroundColor: '#EAFFE3' }}>
                  <h2 className='head m-0'>{item.title}</h2>
                  <div className='d-flex justify-content-between pt-3'>
                    <p className='number m-0'>{item.number}</p>
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



          </div>
        </div>
        <div className='col-3'>
          <Comp3 />
        </div>
      </div>
    </div>
  );
}

export default TopComponent;