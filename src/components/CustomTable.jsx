import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



const CustomTable = ({ data, onDelete, onUpdateData }) => {
  const [editableIndex, setEditableIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});
  const [searchString, setSearchString] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = useState({ processName: '', productionNo: '',itemCode:''});
  // Inside CustomTable component
const handleDelete = (index) => {
  const newData = [...filteredData];
  newData.splice(index, 1);
  setFilteredData(newData);
};

const handleSave = (index) => {
  // Make a copy of the filtered data
  const newData = [...filteredData];
  // Update the corresponding item with the edited data
  newData[index] = { ...newData[index], ...editedData };
  // Reset the editable index and edited data
  setEditableIndex(-1);
  setEditedData({});
  // Update the filtered data state with the new data
  setFilteredData(newData);
  // Also, update the original data state in the parent component
  onUpdateData(newData);
};


const handleEdit = (index, field, value) => {
  setEditableIndex(index);
  setEditedData({ ...editedData, [field]: value });
};


  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-success';
      case 'In Progress':
        return 'text-warning';
      case 'Pending':
        return 'text-danger';
      default:
        return 'text-secondary';
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
  const handleShowModal = (processName, productionNo,itemCode) => {
    setModalData({ processName, productionNo,itemCode });
    setModalShow(true);
  };
  

  return (
    <div className="row">
      <div className="col">
        <div className="table-responsive">
        

          <div className='d-flex justify-content-between mb-4'>

            <div className="d-flex  " style={{width:"100%"}} >
              <div className="p-2">
                <h6 className="process m-0">List of Process Flow</h6>
              </div>
              <div className="form-group has-search  " style={{width:"60%"}} >
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control " placeholder="Search" onChange={handleSearchChange} />
              </div>
              <div>
                <button className="btn btn-primary ms-3" onClick={handleSubmit}>SUBMIT</button>
              </div>
              <button className="btn btn-primary mx-3"><i className="fa-solid fa-gear"></i></button>
            </div>
            <div className='d-flex gap-3 justify-content-end' style={{width:"30%"}}>
              <button className='btn btn-success d-flex align-items-center'><i className="fa-solid fa-plus me-1"></i> <span>Create Flow</span> </button>
              <button className='btn btn-secondary'>Inactivate</button>
            </div>
          </div>

          <table className="table table-bordered table-hover">
            <thead className="table-secondary">
              <tr>
                <th scope="col" className='text-center col-1'>Sno</th>
                <th scope="col" className='text-center col-2'>Process Name</th>
                <th scope="col" className='text-center col-2'>Item Code</th>
                <th scope="col" className='text-center col-2'>Production No</th>
                <th scope="col" className='text-center col-2'>Production Status</th>
                <th scope="col" className='text-center col-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>
                    {editableIndex === index ?
                      <input type="text" style={{ height: '100%', width: '100%' }} value={editedData.processName || item.processName } onChange={(e) => setEditedData({ ...editedData, processName: e.target.value })} />
                      : item.processName}
                  </td>
                  <td className='text-center'>
                    {editableIndex === index ?
                      <input type="text" style={{ height: '100%', width: '100%' }} value={editedData.itemCode || item.itemCode} onChange={(e) => setEditedData({ ...editedData, itemCode: e.target.value })} />
                      : item.itemCode}
                  </td>
                  <td className='text-center'>
                    {editableIndex === index ?
                      <input type="text" style={{ height: '100%', width: '100%' }} value={editedData.productionNo || item.productionNo} onChange={(e) => setEditedData({ ...editedData, productionNo: e.target.value })} />
                      : item.productionNo}
                  </td>
                  <td className={`${getStatusColor(item.productionStatus)} fw-bold text-center`}>
                    {editableIndex === index ?
                      <input type="text" style={{ height: '100%', width: '100%' }} value={editedData.productionStatus || item.productionStatus} onChange={(e) => setEditedData({ ...editedData, productionStatus: e.target.value })} />
                      : item.productionStatus}
                  </td>
                  <td >
                    <div className='d-flex justify-content-between'>

                      <button className="btn border-0 " onClick={() => handleShowModal(item.processName, item.productionNo,item.itemCode)}>
                        <i className="fa-regular fa-eye"></i>
                      </button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        processName={modalData.processName}
                        productionNo={modalData.productionNo}
                        itemCode={modalData.itemCode}
                      />

                      {editableIndex === index ? (
                        <button className="btn border-0" onClick={() => handleSave(index)}><i className="fa-regular fa-floppy-disk"></i></button>
                      ) : (
                        <button className="btn border-0" onClick={() => handleEdit(index, 'processName', item.processName)}><i className="fa-regular fa-pen-to-square"></i></button>
                      )}
                      <button className="btn border-0 "><i className="fa-solid fa-file-arrow-up"></i></button>
                      <button className="btn border-0" onClick={() => handleDelete(index)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
function MyVerticallyCenteredModal({ show, onHide, processName, productionNo,itemCode }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='border-0 bg-success'>
        <Modal.Title id="contained-modal-title-vcenter" className='text-white'>
          View Process
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center gap-5'>
          <p><strong>Process Name:</strong> {processName}</p>
        <p><strong>Production No:</strong> {productionNo}</p>
        <p><strong>Item Code </strong> {itemCode}</p>
        </div>
        
      </Modal.Body>
      <Modal.Footer className='border-0 w-100'>
        <div className='d-flex gap-5 justify-content-center'>
          <div className='d-flex gap-3 align-items-center'>
            <i className="fa-solid fa-arrow-right text-success "></i>
            <h6 className='m-0 text-success'>Completed Process 1</h6>
          </div>
          <div className='d-flex gap-3 align-items-center'>
            <i class="fa-solid fa-check"></i>
            <h6 className='m-0'>Ongoing Process</h6>
          </div>
          <div className='d-flex gap-3 align-items-center'>
            <i className="fa-solid fa-arrow-right text-danger "></i>
            <h6 className='m-0 text-danger '>Failed Process</h6>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default CustomTable;
