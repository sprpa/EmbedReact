import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './user.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Switch } from 'antd';

function Userlist() {



    const [activeButton, setActiveButton] = useState('Users');
    const [modalAddShow, setModalAddShow] = React.useState(false);
    const [data, setData] = useState([]);
    const navigate =useNavigate();
    const handleClick = (buttonName) => {
      setActiveButton(buttonName);
    };
    const handleRedirect = () => {
      navigate("/UserManagement/UserManagementAdd/AddUser");
    }

    const getStatusColor = (status) => {
      switch (status) {
        case 'Admin':
          return 'text-primary';
        case 'Pending':
          return 'text-danger';
        default:
          return 'text-success';
      }
    };
    

    useEffect(() => {
  
      fetchData();
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
      const handleToggleStations = (index) => {
        setData((prevItems) => {
          const updatedItems = [...prevItems];
          updatedItems[index].Show_Stations = !updatedItems[index].Show_Stations; // Toggle between true and false
          return updatedItems;
        });
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
      defaultActiveKey="Users"
      transition={false}
      id="noanim-tab-example"
      className="mb-3  "
    >
      <Tab eventKey="Users" title="Users" > 
      <hr />
      <div className='container-fluid'>
        <table className="table table-bordered">
          <thead className="table-secondary batch-table">
            <tr>
              <th scope="col" className='text-center '>Sno</th>
              <th scope="col" className='text-center col-2'>EMP ID</th>
              <th scope="col" className='text-center col-1'>User Name</th>
              <th scope="col" className='text-center col-2'>User Email</th>
              <th scope="col" className='text-center col-2'>Role</th>
              <th scope="col" className='text-center col-1'>Department</th>
              <th scope="col" className='text-center col-2'>Show Stations</th>
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
            <Switch
              checked={item.Show_Stations === 'true'}
              onChange={() => handleToggleStations(index)}
            />
          </td>
          <td className={`fw-bold text-center my-1 ${item.Show_Stations === 'false' ? 'disabled' : ''}`}>
            {item.Staions}
          </td>
          <td>
            <button className='btn border-0 text-center w-100'>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
        
      </Tab>
      <Tab eventKey="Roles" title="Roles">
      <div className='container-fluid'>
        Tab content for Roles
        </div>
        
      </Tab>
      <Tab eventKey="Lines" title="Lines" >
        <div className='container-fluid'>
        Tab content for Lines
        </div>
        
      </Tab>
      <Tab eventKey="Department" title="Department" >
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
