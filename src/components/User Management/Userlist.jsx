import React,{useState} from 'react';
import './user.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Userlist() {
    const [activeButton, setActiveButton] = useState('Users');
    const [modalAddShow, setModalAddShow] = React.useState(false);
    const navigate =useNavigate();
    const handleClick = (buttonName) => {
      setActiveButton(buttonName);
    };
    const handleRedirect = () => {
      navigate("/UserManagement/UserManagementAdd/AddUser");
    }
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
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3  "
    >
      <Tab eventKey="Users" title="Users" > 
      <div className='container-fluid'>
        Tab content for Users
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
