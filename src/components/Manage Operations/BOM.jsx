import React,{useState} from 'react'

const data = [
    {PannelNo	: '2',ModelNo	:'RS9113-B1-301-EVB',RowNo	:'2',ColumnNo:'2',Position:'Top' },
    {PannelNo	: '3',ModelNo	:'RS9113-B1-301-EVB',RowNo	:'1',ColumnNo:'2',Position:'Top' },
    {PannelNo	: '4',ModelNo	:'RS9113-B1-301-EVB',RowNo	:'1',ColumnNo:'2',Position:'Bottom' },
    {PannelNo	: '6',ModelNo	:'RS9113-B1-301-EVB',RowNo	:'2',ColumnNo:'2',Position:'Top' },
    {PannelNo	: '1',ModelNo	:'RS9113-B1-301',RowNo	:'1',ColumnNo:'2',Position:'Bottom' },
    {PannelNo	: '5',ModelNo	:'RS9113-B1-301-EVB',RowNo	:'1',ColumnNo:'2',Position:'Top' },
    {PannelNo	: '8',ModelNo	:'RS9113-B1-301',RowNo	:'2',ColumnNo:'2',Position:'Bottom' },
    {PannelNo	: '9',ModelNo	:'RS9113-B1-301-EVB',RowNo	:'1',ColumnNo:'2',Position:'Top' },
    {PannelNo	: '10',ModelNo	:'RS9113-B1-301-EVB',RowNo	:'2',ColumnNo:'2',Position:'Bottom' },


]
function BOM() {

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
          <div className='container-fluid'>

              <div className="row p-0" style={{ width: "100%" }} >
                  <div className="p-2 col-1">
                      <h6 className="process m-0 ">List of BOM</h6>
                  </div>
                  <div className="form-group has-search  col-9 " >
                      <span className="fa fa-search form-control-feedback mt-1"></span>
                      <input type="text" className="form-control m-0 " style={{height:'100%'}} placeholder="Search" onChange={handleSearchChange} />
                  </div>
                  <div className='col-2 pe-0 '>
                    <div className='d-flex justify-content-end'>
                        <button className="btn btn-primary ms-3 border-0 px-4" style={{backgroundColor:'#0D3F71'}} onClick={handleSubmit}>SUBMIT</button>
                      <button className="btn btn-primary mx-3"><i className="fa-solid fa-gear"></i></button>
                    </div>
                      
                  </div>
                  
              </div>
              
          </div>

          <div className='container-fluid my-5'>
            <div className='row gap-5'>
                <div className='col-8'> 
                      <table className="table table-bordered table-hover">
                          <thead className="table-secondary batch-table">
                              <tr>
                                  <th scope="col" className='text-center col-1'>Sno</th>
                                  <th scope="col" className='text-center col-1'>Pannel No</th>
                                  <th scope="col" className='text-center col-2'>Model No</th>
                                  <th scope="col" className='text-center col-1'>Row No</th>
                                  <th scope="col" className='text-center col-1'>Column No</th>
                                  <th scope="col" className='text-center col-2'>Position</th>
                                  <th scope="col" className='text-center col-1'>Action</th>

                              </tr>
                          </thead>
                          <tbody>
                              {filteredData.map((item, index) => (
                                  <tr key={index}>
                                      <td className=''>
                                          <div className='h-100 text-start  my-1  '>{index + 1}
                                          </div></td>
                                      <td className=''>
                                          <div className='h-100 text-start my-1 '>{item.PannelNo}
                                          </div></td>
                                      <td className={`text-primary fw-bold text-start  my-1`}>{item.ModelNo}</td>
                                      <td className={`  text-start text-uppercase fw-small  my-1`}>{item.RowNo}</td>
                                      <td className={` text-start  my-1`}>{item.ColumnNo}</td>
                                      <td className='text-start  my-1'>{item.Position}</td>
                                      <td>
                                          <button className='btn border-0 text-center w-100'  ><i className="fa-regular fa-pen-to-square"></i> </button>
                                      </td>
                                  </tr>
                              ))}

                          </tbody>
                      </table>

                </div>
                <div className='col-3'>
                    <h6 style={{fontSize:'14px',fontWeight:'700'}}>Edit Bom</h6>
                      <div className="col-12 mb-3">
                          <label for="validationCustom7" className="form-label fw-bold">Model No</label>
                          <select className="form-select form-control h-75" id="validationCustom7" placeholder="Choose Process Current Operation" required>
                              {data.map((item, index) => (
                                  <option key={index}>{item.ModelNo}</option>
                              ))}
                          </select>
                      </div>
                      <div className="col-12 mb-3">
                          <label for="validationCustom7" className="form-label fw-bold">Row No</label>
                          <input type="text" className='form-control h-75' placeholder='Enter Row No' />
                      </div>
                      <div className="col-12 mb-3">
                          <label for="validationCustom7" className="form-label fw-bold">Column No</label>
                          <select className="form-select form-control h-75" id="validationCustom7" placeholder="Choose Process Current Operation" required>
                              
                              {data.map((item, index) => (
                                  <option key={index}>{item.ColumnNo}</option>
                              ))}
                          </select>
                      </div>
                      <div className="col-12 mb-3">
                          <label for="validationCustom7" className="form-label fw-bold">Panel No</label>
                          <select className="form-select form-control h-75" id="validationCustom7" placeholder="Choose Process Current Operation" required>
                              
                              {data.map((item, index) => (
                                  <option key={index}>{item.PannelNo}</option>
                              ))}
                          </select>
                      </div>
                      <div className="col-12 mb-3">
                          <label for="validationCustom7" className="form-label fw-bold">Position</label>
                          <select className="form-select form-control h-75" id="validationCustom7" placeholder="Choose Process Current Operation" required>
                              
                              {data.map((item, index) => (
                                  <option key={index}>{item.Position}</option>
                              ))}
                          </select>
                      </div>
                      <div className='d-flex gap-4'>
                        <button className='btn btn-success border-0 px-5'>Save</button>
                        <button className='btn btn-light border-0 px-5' style={{border:'1px solid grey'}}>Canel</button>
                      </div>

                    

                </div>

            </div>
          
        </div>

      </div>
  )
}

export default BOM
