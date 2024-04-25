import React,{useState,useEffect} from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

function AddRole() {
    const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/UserManagement/UserManagementAdd");
  };

  const [data, setData] = useState([]);



// useEffect to fetch menu data
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("https://eis-website-backend.onrender.com/super_menu");
      if (response.status !== 200) {
        throw new Error('Failed to fetch menu data');

      }
      // Split the fetched data into different categories
      setData(response.data.main_menu);
      
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  };

  fetchData();
}, []);

// Function to handle selecting all checkboxes for a specific category
  
  console.log("wgrfywefgugf")
  return (
      <div>
          <div className='container-fluid'>

              <div className=" d-flex justify-content-between ">
                  <button className='btn btn-seccondary btn-outline '>
                      <h5 className='m-0'>Create Role</h5>
                  </button>
                  <button className='btn btn-seccondary shadow p-0 px-3' style={{ border: '0.2px solid  #aaa' }} onClick={() => handleRedirect()} >
                      <KeyboardBackspaceIcon /> Back
                  </button>
              </div>

              <hr />



             
             <div className='row'>

                <div className='col-4'>
                     <div className="col-12 mb-3">
                      <label for="role" className="form-label m-1 fw-bold">Role</label>
                      <input type="text" id='empid' className='form-control h-50' placeholder='Enter Role' />
                  </div>

                  <div className="col-12 mb-3">
                      <label for="roledecs" className="form-label m-1 fw-bold">Description</label>
                      <input type="text" id='username' className='form-control h-50' placeholder='Enter Description ' />
                  </div>
                </div>
        
                <div className="col-8">
                    <div className='d-flex justify-content-between'>
                        <h6>User Access Permission Setting </h6>
                          <div className="form-check">
                              <input
                                  type="checkbox"
                                  id="selectAllCheckbox"
                                  className="form-check-input p-2"
                                  
                              />
                              <label htmlFor="selectAllCheckbox" className="form-check-label">Select All</label>
                          </div>
                    </div>
                   
                      <Accordion className='border-0'>
                          <Accordion.Item eventKey="4">
                              <Accordion.Header className='border-0'>General</Accordion.Header>
                              <Accordion.Body>
                                  <div className='row'>
                                      <div className='col-3'>
                                          <h6>Dashboard</h6>
                                          <div className="form-check form-check-inline ">
                                              <label className="form-check-label order-1" for="dashboard">Dashboard </label>
                                              <input className="form-check-input p-2 order-2 " type="checkbox" id="dashboard" value="dashboard" />
                                          </div>
                                      </div>
                                      <div className='col-3'>
                                          <h6>Department</h6>
                                          <div className="form-check form-check-inline ">
                                              <label className="form-check-label order-1" for="lists">Lists </label>
                                              <input className="form-check-input p-2 order-2 " type="checkbox" id="lists" value="lists" />
                                          </div>

                                      </div>
                                      <div className='col-3'>
                                          <h6>Lines</h6>
                                          <div className='d-flex flex-column '>
                                              <div className="form-check form-check-inline  mb-0">
                                                  <label className="form-check-label order-1" for="line2">Line 1</label>
                                                  <input className="form-check-input p-2 order-2 " type="checkbox" id="line2" value="line2" />
                                              </div>
                                              <div className="form-check form-check-inline mb-0 ">
                                                  <label className="form-check-label order-1" for="line3">Line 2</label>
                                                  <input className="form-check-input p-2 order-2 " type="checkbox" id="line3" value="line3" />
                                              </div>

                                          </div>


                                      </div>
                                      <div className='col-3'>
                                          <h6>Roles</h6>
                                          <div className="form-check form-check-inline ">
                                              <label className="form-check-label order-1" for="lists">Lists </label>
                                              <input className="form-check-input p-2 order-2 " type="checkbox" id="lists" value="lists" />
                                          </div>

                                      </div>

                                  </div>

                              </Accordion.Body>
                          </Accordion.Item>
                          {data.map((category, categoryIndex) => (
                              <Accordion.Item key={categoryIndex} eventKey={categoryIndex.toString()}>
                                  <Accordion.Header>{category.category}</Accordion.Header>
                                  <Accordion.Body>
                                      <div className='container-fluid'>
                                          <div className="row">
                                              <div className="container" style={{ maxHeight: "300px", overflowY: "scroll" }}>
                                                  {category.menu_items.map((menu, menuIndex) => (
                                                      <div key={menuIndex}>
                                                          <h6>{menu.Menu_Header}</h6>
                                                          <div className="row">
                                                              {menu.Sub_menus.map((subMenu, subMenuIndex) => (
                                                                  <div key={subMenuIndex} className="col-3">
                                                                      <div className="form-check">
                                                                          <input
                                                                              type="checkbox"
                                                                              id={subMenu.Sub_Header}
                                                                              className="form-check-input p-2"
                                                                              checked={subMenu.isChecked}
                                                                             
                                                                          />
                                                                          <label htmlFor={subMenu.Sub_Header} className="form-check-label">{subMenu.Sub_Header}</label>
                                                                      </div>
                                                                  </div>
                                                              ))}
                                                          </div>
                                                      </div>
                                                  ))}
                                              </div>
                                          </div>
                                      </div>
                                  </Accordion.Body>
                              </Accordion.Item>
                          ))}
                      </Accordion>


                </div>
                
           </div>

          </div>

          <center>
              <div className='d-flex justify-content-center gap-4 mt-5'>
                  <button className='btn btn-success rounded-3 my-3 px-5 py-1 '>Save</button>
                  <button className='btn btn-white border-secondary shadow rounded-3 my-3 px-5 py-1'>Reset</button>
              </div>
          </center>

      </div>
  )
}

export default AddRole;
