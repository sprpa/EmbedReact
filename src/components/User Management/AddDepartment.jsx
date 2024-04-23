import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';


function AddDepartment() {
    const navigate =useNavigate();
   
    const handleRedirect = () => {
      navigate("/UserManagement/UserManagementAdd");
    }

  return (
    <div>
      <div className='container-fluid'>

        <div className=" d-flex justify-content-between ">
          <button className='btn btn-seccondary btn-outline '>
            <h5 className='m-0'>Create Department</h5>
          </button>
          <button className='btn btn-seccondary shadow p-0 px-3' style={{ border: '0.2px solid  #aaa' }} onClick={() => handleRedirect()} >
            <KeyboardBackspaceIcon /> Back
          </button>
        </div>

        <hr />

        <div className='row'>

          <div className="col-6 mb-3">
            <label for="depname" className="form-label m-1 fw-bold">Department Name </label>
            <input type="text" id='depname' className='form-control h-50' placeholder='Enter Deparetment Name' />
          </div>

          <div className="col-6 mb-3">
            <label for="depdesc" className="form-label m-1 fw-bold">Description</label>
            <input type="text" id='depdesc' className='form-control h-50' placeholder='Enter Description' />
          </div>

        </div>
        <hr />
      </div>

      <center>
        <div className='d-flex justify-content-end gap-4'>
          <button type='submit' className='btn btn-success rounded-3 my-3 px-5 py-1 '>Save</button>
          <button className='btn btn-white border-secondary shadow rounded-3 my-3 px-5 py-1'>Reset</button>
        </div>
      </center>

</div>
  )
}

export default AddDepartment
