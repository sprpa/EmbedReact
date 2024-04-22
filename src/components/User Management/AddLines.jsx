import React,{useState} from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from 'react-router-dom';


function AddLines() {
    const navigate =useNavigate();
   
    const handleRedirect = () => {
      navigate("/UserManagement/UserManagementAdd");
    }

  return (
      <div>
          <div className='container-fluid'>

              <div className=" d-flex justify-content-between ">
                  <button className='btn btn-seccondary btn-outline '>
                      <h5 className='m-0'>Create Lines</h5>
                  </button>
                  <button className='btn btn-seccondary shadow p-0 px-3' style={{ border: '0.2px solid  #aaa' }} onClick={() => handleRedirect()} >
                      <KeyboardBackspaceIcon /> Back
                  </button>
              </div>

              <hr />

              <div className='row'>

                  <div className="col-3 mb-3">
                      <label for="empid" className="form-label m-1 fw-bold">Employee Id</label>
                      <input type="text" id='empid' className='form-control h-50' placeholder='Enter Item Code' />
                  </div>

                  <div className="col-3 mb-3">
                      <label for="username" className="form-label m-1 fw-bold">Username</label>
                      <input type="text" id='username' className='form-control h-50' placeholder='Enter Username' />
                  </div>

                  <div className="col-3 mb-3">
                      <label for="emailid" className="form-label m-1 fw-bold">Email ID</label>
                      <input type="text" id='emailid' className='form-control h-50' placeholder='Enter Email Id' />
                  </div>

                  <div className="col-3 mb-3">
                      <label for="roles" className="form-label m-1 fw-bold">Role</label>
                      <select className="form-select  form-control h-50" id="roles" placeholder="Roles" required>
                          <option selected disabled value="">Select Production Code.</option>
                          <option>...</option>
                      </select>
                  </div>

                  <div className="col-3 mb-3">
                      <label for="password" className="form-label m-1 fw-bold">Password</label>
                      <input type="text" id='password' className='form-control h-50' placeholder='*************' />
                  </div>

                  <div className="col-3 mb-3">
                      <label for="cnfrmpassword" className="form-label m-1 fw-bold">Confirm Password</label>
                      <input type="text" id='cnfrmpassword' className='form-control h-50' placeholder='*************' />
                  </div>

                  <div className="col-3 mb-3">
                      <label for="lines" className="form-label m-1 fw-bold">Line</label>
                      <select className="form-select  form-control h-50" id="lines" placeholder="Select SMT Lines" required>
                          <option value="">Select SMT Lines.</option>
                          <option>...</option>
                      </select>
                  </div>

                  <div className="col-3 mb-3">
                      <label for="stations" className="form-label m-1 fw-bold">Stations</label>
                      <select className="form-select  form-control h-50" id="stations" placeholder="Select Stations" required>
                          <option value="">Select Stations</option>
                          <option>...</option>
                      </select>
                  </div>

                  <div className="col-3 mb-3">
                      <label for="phnnumber" className="form-label m-1 fw-bold">Mobile Number</label>
                      <input type="text" id='phnnumber' className='form-control h-50' placeholder='+91 00000 00000' />
                  </div>

                  <div className="col-3 mb-3">
                      <label for="emgcontact" className="form-label m-1 fw-bold">Emergency Contact</label>
                      <input type="text" id='emgcontact' className='form-control h-50' placeholder='+91 00000 00000' />
                  </div>

                  <div className="col-3 mb-3">
                      <label for="status" className="form-label m-1 fw-bold">Status</label>
                      <select className="form-select  form-control h-50" id="status" placeholder="Select Status" required>
                          <option value="">Select Status</option>
                          <option>...</option>
                      </select>
                  </div>

                  <div className="col-3 mb-3">
                      <label for="department" className="form-label m-1 fw-bold">Select Department</label>
                      <select className="form-select  form-control h-50" id="department" placeholder="Select Process Status" required>
                          <option value="">Select Process Status</option>
                          <option>...</option>
                      </select>
                  </div>

              </div>
              <hr />
          </div>

          <center>
              <div className='d-flex justify-content-center gap-4'>
                  <button className='btn btn-success rounded-3 my-3 px-5 py-1 '>Save</button>
                  <button className='btn btn-white border-secondary shadow rounded-3 my-3 px-5 py-1'>Reset</button>
              </div>
          </center>

      </div>
  )
}

export default AddLines
