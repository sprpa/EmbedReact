import React,{useState} from 'react'

const data = [
    { processName: 'Test505', itemCode: 'A123', productionNo: '123', productionStatus: 'In Progress' },
    { processName: 'Test501', itemCode: 'B456', productionNo: '456', productionStatus: 'Completed' },
    { processName: 'Test506', itemCode: 'C789', productionNo: '789', productionStatus: 'Pending' },
    { processName: '830-00507', itemCode: 'C790', productionNo: '789', productionStatus: 'Completed' },
    { processName: 'BRD7805', itemCode: 'C791', productionNo: '789', productionStatus: 'Pending' },
    { processName: 'BRD7806', itemCode: 'C792', productionNo: '789', productionStatus: 'Completed' },
    { processName: 'WMS_EVK_Board', itemCode: 'C793', productionNo: '789', productionStatus: 'In Progress' }
]
function ProductionLoading() {

    const [editableIndex, setEditableIndex] = useState("");
  const [editedData, setEditedData] = useState({});
  const [searchString, setSearchString] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = useState({ processName: '', productionNo: '',itemCode:''});
  const [deletingIndex, setDeletingIndex] = useState(-1);
  const [deleteConfirmationShow, setDeleteConfirmationShow] = useState({});
  const [show, setShow] = useState(false);
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  return (
      <div>
          <div className='d-flex justify-content-between mb-4'>

              <div className="d-flex" style={{ width: "100%" }} >
                  <div className="p-2">
                      <h6 className="process m-0 ">List of Process Flow</h6>
                  </div>
                  <div className="form-group has-search  " style={{ width: "60%" }} >
                      <span className="fa fa-search form-control-feedback mt-1"></span>
                      <input type="text" className="form-control m-0 " style={{height:'90%'}} placeholder="Search" onChange={handleSearchChange} />
                  </div>
                  <div>
                      <button className="btn btn-primary ms-3" onClick={handleSubmit}>SUBMIT</button>
                      <button className="btn btn-primary mx-3"><i className="fa-solid fa-gear"></i></button>
                  </div>
                  
              </div>
              <div className='d-flex gap-3 justify-content-end' style={{ width: "30%" }}>
                  <button className='btn btn-success d-flex align-items-center'><i className="fa-solid fa-plus me-1"></i> <span>Create Flow</span> </button>
                  
                  <button className='btn btn-secondary'>Inactivate</button>
              </div>
          </div>
      </div>
  )
}

export default ProductionLoading
