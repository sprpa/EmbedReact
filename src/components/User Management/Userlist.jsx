import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './user.css'

import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Switch } from 'antd';

function Userlist() {



   // State variable to store active tab button name
  const [activeTab, setActiveTab] = useState("Users");

  // Handler for tab selection
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };
    const [data, setData] = useState([]);
    const [roleData, setRoleData] = useState([]);
    const navigate =useNavigate();
    
    const handleRedirect = () => {
      if (activeTab === "Users") {
      navigate("/UserManagement/UserManagementAdd/AddUser");
      }
      else if (activeTab === "Roles") {
        navigate("/UserManagement/UserManagementAdd/AddRole");
      }
      else if (activeTab === "Lines") {
        navigate("/UserManagement/UserManagementAdd/AddLines");
      }
      else{
        navigate("/UserManagement/UserManagementAdd/AddDepartment");
      }

    }

    const getStatusColor = (status) => {
      switch (status) {
        case 'Admin':
          return 'text-primary';
        default:
          return 'text-green';
      }
    };
   
    useEffect(() => {
  
      fetchData();
      fetchDataRole();
      }, []);
      const fetchData = async () => {
        console.log("fetchData"); 
        try {
          const response = await axios.get('http://localhost:8000/userlist');
          setData(response.data);
          console.log(response.data)
      
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const fetchDataRole = async () => {
        console.log("fetchData"); 
        try {
          const response = await axios.get('http://localhost:8000/userRole');
          setRoleData(response.data);
          console.log(response.data)
      
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      

      

  return (
      <div className='container-fluid position-relative'>
          <div className=' my-3' >
          {/* <div>
      <button
        className={`btn userlist-button btn-success text-black  ${activeButton === 'Users' ? 'active text-white' : ''}`}
        onClick={() => handleClick('Users')}
      >
        Users
      </button>
      <button
        className={`btn userlist-button btn-success text-black ${activeButton === 'Lines' ? 'active text-white' : ''}`}
        onClick={() => handleClick('Lines')}
      >
        Lines
      </button>
      <button
        className={`btn userlist-button btn-success text-black ${activeButton === 'Roles' ? 'active text-white' : ''}`}
        onClick={() => handleClick('Roles')}
      >
        Roles
      </button>
      <button
        className={`btn userlist-button btn-success text-black ${activeButton === 'Department' ? 'active text-white' : ''}`}
        onClick={() => handleClick('Department')}
      >
        Department
      </button>
    </div> */}
    <div className='w-100'>
    <Tabs
      activeKey={activeTab}
      onSelect={handleTabSelect}
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Users" title="Users">
            <div className='container-fluid'>
                <table className="table table-bordered">
                    <thead className="table-secondary batch-table">
                        <tr>
                            <th scope="col" className='text-center '>Sno</th>
                            <th scope="col" className='text-center col-1'>EMP ID</th>
                            <th scope="col" className='text-center col-2'>User Name</th>
                            <th scope="col" className='text-center col-2'>User Email</th>
                            <th scope="col" className='text-center col-2'>Role</th>
                            <th scope="col" className='text-center col-2'>Department</th>
                            <th scope="col" className='text-center col-1'>Show Stations</th>
                            <th scope="col" className='text-center col-1'>Stations</th>
                            <th scope="col" className='text-center col-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className=''>
                                    <div className='h-100 text-center  my-1  '>{item.S_No}
                                    </div></td>
                                <td className=''>
                                    <div className='h-100 text-center my-1 '>{item.EMP_ID}
                                    </div></td>
                                <td className='text-center  my-1'>{item.User_Name}</td>
                                <td className={` fw-bold text-center text-primary fw-small  my-1`}>{item.User_Email}</td>
                                <td className={`${getStatusColor(item.Role)} fw-bold text-center  my-1`}>{item.Role}</td>
                                <td className='text-center  my-1'>{item.Department}</td>
                                <td className='text-center my-1'>
                                    <Switch defaultChecked={item.Show_Stations === 'true'} />
                                </td>
                                <td className={`fw-bold text-center my-1 ${item.Show_Stations === 'false' ? 'disabled' : ''}`}>
                                    {item.Staions}
                                </td>
                                <td>
                                    <div className='d-flex justify-content-center gap-3 '>
                                        <button className='btn border-0 text-center p-0 '>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button className='btn border-0 text-center p-0 '>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>

                                    </div>
                                    
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
      </Tab>
      <Tab eventKey="Roles" title="Roles">
      <div className='container-fluid'>
                <table className="table table-bordered">
                    <thead className="table-secondary batch-table">
                        <tr>
                            <th scope="col" className='text-center col-1 '>Sno</th>
                            <th scope="col" className='text-center col-5'>Name</th>
                            <th scope="col" className='text-center col-5'>Description</th>
                            <th scope="col" className='text-center col-1'>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {roleData.map((item, index) => (
                            <tr key={index}>
                                <td className=''>
                                    <div className='h-100 text-center  my-1  '>{item.id}
                                    </div></td>
                                <td className=''>
                                    <div className='h-100 text-start my-1 text-primary fw-bold '>{item.names}
                                    </div></td>
                                <td className='text-start  my-1'>{item.Description}</td>
                                
                                <td>
                                    <div className='d-flex justify-content-center gap-3 '>
                                        <button className='btn border-0 text-center p-0 '>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button className='btn border-0 text-center p-0 '>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>

                                    </div>
                                    
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
      </Tab>
      <Tab eventKey="Lines" title="Lines">
        <div className='container-fluid'>
          Tab content for Lines
        </div>
      </Tab>
      <Tab eventKey="Department" title="Department">
        <div className='container-fluid'>
          Tab content for Department
        </div>
      </Tab>
    </Tabs>
    </div>
    
       
          </div>

          <div className='position-absolute' style={{top:'0',right:'0'}}>
          <button className='btn addnew' style={{ backgroundColor: '#00923F', border: '1px solid #D9D9D9', width: '137px' }} onClick={() => handleRedirect()} >+ Add New</button>
        </div>  
       


      </div>
  )
}




export default Userlist
