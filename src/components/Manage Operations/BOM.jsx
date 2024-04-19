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
          <div className='d-flex justify-content-between'>

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
      
    </div>
  )
}

export default BOM
