import React,{useState} from 'react'

const data = [
    {productionNo: '202425000108',fg_code:'830-00507',orderName:'202425000108-3',assignedDate:'21-02-2024',batchQuantity:'100', actualStatus: 'In Progress' },
    {productionNo: '202425000109',fg_code:'830-00507',orderName:'202425000108-3',assignedDate:'21-02-2024',batchQuantity:'120', actualStatus: 'In Progress' },
    {productionNo: '202425000110',fg_code:'830-00507',orderName:'202425000108-3',assignedDate:'21-02-2024',batchQuantity:'80', actualStatus: 'In Progress' },
    {productionNo: '202425000111',fg_code:'830-00507',orderName:'202425000108-3',assignedDate:'21-02-2024',batchQuantity:'100', actualStatus: 'In Progress' },

  
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
  return (
      <div>
          <div className='d-flex justify-content-between'>

              <div className="d-flex" style={{ width: "100%" }} >
                  <div className="p-2">
                      <h6 className="process m-0 ">List of Production</h6>
                  </div>
                  <div className="form-group has-search  " style={{ width: "60%" }} >
                      <span className="fa fa-search form-control-feedback mt-1"></span>
                      <input type="text" className="form-control m-0 " style={{height:'100%'}} placeholder="Search" onChange={handleSearchChange} />
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

          <div className='my-5'>
          <table className="table table-bordered table-hover">
            <thead className="table-secondary batch-table">
              <tr>
                <th scope="col" className='text-center '>Sno</th>
                <th scope="col" className='text-center col-2'>Production No</th>
                <th scope="col" className='text-center col-1'>FG Code</th>
                <th scope="col" className='text-center col-2'>Order Name</th>
                <th scope="col" className='text-center col-2'>Asigned Date</th>
                <th scope="col" className='text-center col-2'>Batch Quantity</th>
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
                  <td className='text-center  my-1'>{item.fg_code}</td>
                  <td className={`  text-center text-uppercase fw-small  my-1`}>{item.orderName}</td>
                  <td className={` text-center  my-1`}>{item.assignedDate}</td>
                  <td className='text-center  my-1'>{item.batchQuantity}</td>
                  <td className={`${getStatusColor(item.actualStatus)} fw-bold text-center  my-1`}>{item.actualStatus}</td>
                  <td>
                    <button className='btn border-0 text-center w-100'  ><i className="fa-regular fa-pen-to-square"></i> </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </div>
  )
}

export default ProductionLoading
