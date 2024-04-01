import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
function Batch() {
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [productionNumbers, setProductionNumbers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalTitle, setModalTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [index, setIndex] = useState('2202223000001');
  const handleCloseModal = () => setShowModal(false);


  const testData = [];


  const handleOpenModal = (data, title) => {
    setModalData(data);
    setModalTitle(title);
    setShowModal(true);
  };


  
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
  
  fetchData(index);
  }, [index]); // Fetch data when component mounts

  
  const fetchData = async (selectedIndex) => {
    console.log("fetchData");
    try {
      const response = await axios.get('http://localhost:8000/batch');
      setData(response.data);
      setFilteredData(response.data);
      // Extracting production numbers from the response
      const productionNumbers = response.data.map(item => item.productionNo);
      const response1 = await axios.get(`http://localhost:8000/table?Production%20No=${selectedIndex}`);
      console.log("selectedIndex",selectedIndex);
      console.log(response1.data);
      testData.push(response1.data[0]);
      setModalData(testData[0]);
      setModalTitle('Production 1 Details');
      // Assuming your production numbers are unique
      setProductionNumbers(productionNumbers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };
  const handleSubmit = () => {
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        val.toString().toLowerCase().includes(searchString.toLowerCase())
      )
    );
    setFilteredData(filtered);   
  };
  const handleSelectChange = (event) => {
    event.preventDefault();

    const selectedIndex = event.target.value;
    console.log("selectedIndex",event.target.value);

    setIndex(selectedIndex);
    testData.pop(0);

  };

  const MyVerticallyCenteredModal= ({ show, handleClose, title, data }) => {
    const halfDataLength = Math.ceil(Object.keys(data).length / 2);
    const firstHalfData = Object.entries(data).slice(1, halfDataLength);
    const secondHalfData = Object.entries(data).slice(halfDataLength);
    
    return (
      <Modal
    
      show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered
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
                    <select className='w-100 form-control' value={index} onChange={handleSelectChange}>
        {productionNumbers.map((number, index) => (
          <option key={index} value={number}>{number}</option>
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
                {/* <div className='row'>
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
                </div> */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <table className='table'>
                    <tbody className='border'>
                      {firstHalfData.map(([label, value], index) => (
                        <tr key={index}>
                          <td className='border'>{label}</td>
                          <td className='border'>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <table className='table'>
                    <tbody className='border'>
                      {secondHalfData.map(([label, value], index) => (
                        <tr key={index}>
                          <td className='border'>{label}</td>
                          <td className='border'>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <div className='d-flex gap-4'>
            <button className='btn btn-success border-0 px-5 py-2'>Submit</button>
            <button className='btn btn-light border-0 px-5 py-2' onClick={handleClose}>Close</button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  console.log("hello")
  return (
    
    <div>
      <div className='container-fluid'>
        <div className="d-flex justify-content-between  " style={{ width: "100%" }} >
          <div className="p-2">
            <h6 className="process m-0">List of Batch</h6>
          </div>
          <div className="form-group has-search  " style={{ width: "60%" }} >
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control " placeholder="Search"  onChange={handleSearchChange} />
          </div>
          <div>
            <button className="btn btn-primary ms-3" onClick={handleSubmit}>SUBMIT</button>
            <button className="btn btn-primary mx-3"><i className="fa-solid fa-gear"></i></button>
            <button className='btn bg-success border-0 text-white' onClick={() => handleOpenModal(modalData, modalTitle)} disabled={isLoading || !Object.keys(modalData).length}> <i className="fa-solid fa-plus me-3"></i> Create Batch</button>
          </div>
        </div>

        <div className='my-5'>
          <table className="table table-bordered table-hover">
            <thead className="table-secondary batch-table">
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
                    <button className='btn border-0 text-center w-100'  ><i className="fa-regular fa-pen-to-square"></i> </button>

                    <MyVerticallyCenteredModal show={showModal} handleClose={handleCloseModal} title={modalTitle} data={modalData} />
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
