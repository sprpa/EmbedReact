import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Batch() {
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [productionNumbers, setProductionNumbers] = useState([]);
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-success';
      case 'In Progress':
        return 'text-primary';
      case 'Pending':
        return 'text-danger';
      default:
        return 'text-secondary';
    }
  };
  useEffect(() => {
    fetchData();
    fetchTable();
  }, []); // Fetch data when component mounts

  const fetchTable = async () =>{
    try {
      const response = await axios.get('http://localhost:8000/table/production1');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/batch');
      setData(response.data);
      setFilteredData(response.data);
      // Extracting production numbers from the response
      const productionNumbers = response.data.map(item => item.productionNo);
      // Assuming your production numbers are unique
      setProductionNumbers(productionNumbers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='rounded-0 border-0' style={{backgroundColor:'#00923F'}} >
          <Modal.Title id="contained-modal-title-vcenter" className='text-white viewProcess'>
            Create Batch
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-4'>  
              <form>
                <div className='d-flex flex-column gap-3'>
                  <div>
                    <h6>Production No</h6>
                    <select className='w-100 form-control'>
                      {productionNumbers.map(number => (
                        <option key={number} value={number}>{number}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <h6>Batch Name</h6>
                    <input type="text" className='form-control' placeholder='Enter Batch Name' />
                  </div>
                  <div>
                    <h6>LOT Number Board Quantity</h6>
                    <input type="text" className='form-control' placeholder='Enter Board Quantity' />
                  </div>
                  <div>
                    <h6>Panel Quantity</h6>
                    <input type="text" className='form-control' placeholder='Enter Panel Quantity' />
                  </div>

                </div>
              </form>
              </div>
              <div className='col-8'>
                <h6>Product Details</h6>
                <div className='row'>
                  <div className='col-6'>
                    <table className='table '>
                      <tbody className='border-1'>
                        <tr className='border-1'>
                          <td className='border-1'>Production No</td>
                          <td className='border-1'>2202223000001</td>
                        </tr>
                        <tr className='border-1'>
                          <td className='border-1'>Dock No</td>
                          <td className='border-1'>DOC25614</td>
                        </tr>
                        <tr className='border-1'>
                          <td className='border-1'>Product No</td>
                          <td className='border-1'>11165487</td>
                        </tr>
                        <tr className='border-1'>
                          <td className='border-1'>Customer Name</td>
                          <td className='border-1'>Silicon Labs</td>
                        </tr>
                        <tr>
                          <td className='border-1'>Product Order Date</td>
                          <td className='border-1'>00/00/0000</td>
                        </tr>
                        <tr>
                          <td className='border-1'>Product Order Status</td>
                          <td className='border-1'>Batch Name</td>
                        </tr>
                        <tr>
                          <td className='border-1'>Department</td>
                          <td className='border-1'>XXXXX</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                  <div className='col-6'>
                    <table className='table table-hover'>
                      <tbody className='border-1'>
                        <tr className='border-1'>
                          <td className='border-1'>Location</td>
                          <td className='border-1'>Singapore</td>
                        </tr>
                        <tr className='border-1'>
                          <td className='border-1'>Product Item / Category</td>
                          <td className='border-1'>XXXXXXXX</td>
                        </tr>
                        <tr className='border-1'>
                          <td className='border-1'>Product Description</td>
                          <td className='border-1'>xxxxxxxxxxx</td>
                        </tr>
                        <tr className='border-1'>
                          <td className='border-1'>Start Date</td>
                          <td className='border-1'>00/00/0000</td>
                        </tr>
                        <tr>
                          <td className='border-1'>User</td>
                          <td className='border-1'>xxxxxxxxxxx</td>
                        </tr>
                        <tr>
                          <td className='border-1'>Planned Quantity</td>
                          <td className='border-1'>30,000</td>
                        </tr>
                        <tr>
                          <td className='border-1'>Remaining Quantity</td>
                          <td className='border-1'>20,000</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <div className='d-flex gap-4'>
            <button className='btn btn-success border-0 px-5 py-2'>Submit</button>
            <button className='btn btn-light border-0 px-5 py-2' onClick={props.onHide}>Close</button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }


  return (
    
    <div>
      <div className='container-fluid'>
        <div className="d-flex justify-content-between  " style={{ width: "100%" }} >
          <div className="p-2">
            <h6 className="process m-0">List of Batch</h6>
          </div>
          <div className="form-group has-search  " style={{ width: "60%" }} >
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control " placeholder="Search" />
          </div>
          <div>
            <button className="btn btn-primary ms-3">SUBMIT</button>
            <button className="btn btn-primary mx-3"><i className="fa-solid fa-gear"></i></button>
            <button className='btn bg-success border-0 text-white' onClick={() => setModalShow(true)}> <i class="fa-solid fa-plus me-3"></i> Create Batch</button>
          </div>
        </div>

        <div className='my-5'>
          <table className="table table-bordered table-hover">
            <thead className="table-secondary">
              <tr>
                <th scope="col" className='text-center '>Sno</th>
                <th scope="col" className='text-center col-2'>Production No</th>
                <th scope="col" className='text-center col-2'>Batch No</th>
                <th scope="col" className='text-center col-2'>Batch Status</th>
                <th scope="col" className='text-center col-1'>Batch Quantity</th>
                <th scope="col" className='text-center col-1'>AQL Quantity</th>
                <th scope="col" className='text-center col-2'>AQL Completed Quantity</th>
                <th scope="col" className='text-center col-1'>Actual Status</th>
                <th scope="col" className='text-center col-1'>Action</th>

              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className=''>
                    <div className='h-100 text-center  my-1  '>{index + 1}
                    </div></td>
                  <td className=''>
                    <div className='h-100 text-center my-1 '>{item.productionNo}
                    </div></td>
                  <td className='text-center  my-1'>{item.batchNo}</td>
                  <td className={`${getStatusColor(item.batchStatus)} fw-bold text-center text-uppercase fw-small  my-1`}>{item.batchStatus}</td>
                  <td className={`fw-bold text-center  my-1`}>{item.batchQuantity}</td>
                  <td className='text-center  my-1'>{item.aqlQuantity}</td>
                  <td className='text-center  my-1'>{item.aqlCompletedQuantity}</td>
                  <td className={`${getStatusColor(item.actualStatus)} fw-bold text-center  my-1`}>{item.actualStatus}</td>
                  <td>
                    <button className='btn border-0 text-center w-100'  ><i class="fa-regular fa-pen-to-square"></i> </button>
                    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}


export default Batch
