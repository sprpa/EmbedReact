import React, { useEffect, useState } from "react";
import { Link, Routes } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
// Your component code where you use the MenuItem component
import Accordion from 'react-bootstrap/Accordion';
import '../index.css'
import activeLogo from "../assets/logo/EIS_Main.png";
import inactiveLogo from "../assets/logo/Subtract.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Example from "./OffCanvas";
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../components/sidebar.css';
import CustomTable from "./CustomTable";
import Config from "./Condfig";
import Dashboard from "./Dashboard";
import Batch from "./Manage Operations/Batch";
import Dropdown from 'react-bootstrap/Dropdown';
import { Menu } from 'antd';
import Side from "./Side";
import dashicon from '../assets/menuicons/dashboard.svg'
const { SubMenu } = Menu;

// const accordionItems = [
//   {
//     header: 'Production',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },      {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
//   {
//     header: 'Operation',
//     icon: 'fa-solid fa-tv',
//     subItems: [
//       {
//         title: 'Operation 1',
//       },
//       {
//         title: 'Operation 2',
//       },
//       {
//         title: 'Operation 3',
//       },
//     ],
//   },
//   {
//     header: 'Quality',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Operation 1',
//       },
//       {
//         title: 'Operation 2',
//       },
//       {
//         title: 'Operation 3',
//       },
//     ],
//   },
//   {
//     header: 'Testing',
//     icon: 'fa-solid fa-microscope',
//     subItems: [
//       {
//         title: 'Operation 1',
//       },
//       {
//         title: 'Operation 2',
//       },
//       {
//         title: 'Operation 3',
//       },
//     ],
//   },
//   {
//     header: 'Inventory',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Operation 1',
//       },
//       {
//         title: 'Operation 2',
//       },
//       {
//         title: 'Operation 3',
//       },
//     ],
//   },
//   {
//     header: 'Packing',
//     icon: 'fa-solid fa-boxes-packing',
//     subItems: [
//       {
//         title: 'Operation 1',
//       },
//       {
//         title: 'Operation 2',
//       },
//       {
//         title: 'Operation 3',
//       },
//     ],
//   },
 
// ];

// const accordionConfig=[
//   {
//     header: 'Manage Operations',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Batch',
       
//       },
//       {
//         title: 'Process Flow',
        
//       },
//     ],
//   },
//   {
//     header: 'User Management',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
//   {
//     header: 'API Configuration',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
//   {
//     header: 'Masters',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
//   {
//     header: 'ORG Settings',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
// ]

// const reports =[
//   {
//     header: 'Production Reports',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
//   {
//     header: 'Traceability Reports',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
//   {
//     header: 'Management Reports',
//     icon: 'fa-solid fa-dashboard',
//     subItems: [
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//       {
//         title: 'Production',
//       },
//     ],
//   },
  
// ];


const SideMenu = () => {
  const [show, setShow] = useState(false);
  const [inactive, setInactive] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate =useNavigate();

 
const [tableData, setTableData] = useState([
  { processName: 'Test505', itemCode: 'A123', productionNo: '123', productionStatus: 'In Progress' },
  { processName: 'Test501', itemCode: 'B456', productionNo: '456', productionStatus: 'Completed' },
  { processName: 'Test506', itemCode: 'C789', productionNo: '789', productionStatus: 'Pending' },
  { processName: '830-00507', itemCode: 'C790', productionNo: '789', productionStatus: 'Completed' },
  { processName: 'BRD7805', itemCode: 'C791', productionNo: '789', productionStatus: 'Pending' },
  { processName: 'BRD7806', itemCode: 'C792', productionNo: '789', productionStatus: 'Completed' },
  { processName: 'WMS_EVK_Board', itemCode: 'C793', productionNo: '789', productionStatus: 'In Progress' }
]);

const updateTableData = (newData) => {
  setTableData(newData);
};

const handleDelete = (index) => {
  const newData = [...tableData];
  newData.splice(index, 1);
  setTableData(newData);
};

const Logout=()=>{
  navigate("/");
  window.location.reload();
}

  const logoSrc = inactive ? inactiveLogo : activeLogo;
console.log("side menu")
  return (
    <div className={`d-flex side-menu-wrapper ${inactive ? "inactive" : ""} h-100` }>
      <div className={`side-menu ${inactive ? "inactive" : ""} d-none d-lg-block `}>
        <div className="top-section">
          <div style={{ padding: "0px" }} className="d-flex justify-content-center">
            <div className="logo w-100">
              {inactive ? (
                <div className="  d-flex justify-content-center">                
                  <img className="shortlogo w-100" src={inactiveLogo} alt="webscript" />
                </div>
              ) : (
                <img className="w-100 " src={activeLogo} alt="webscript" />
              )}
            </div>
          
          </div>
          <div className="main-menu  py-2">

            <div className="">
              <h6 className="dash-head m-0">Dashboards</h6>
              <Link to="/dashboard" className="d-flex gap-2 p-1 " style={{ textDecoration: 'none' }}>
                <img src={dashicon}></img>
                <h6 className="dashboard m-0 w-75 text-black fw-medium">Dashboard</h6>
              </Link>
            </div>
            {/* <div>
              <h6 className="menu-head m-0">Menu</h6>
              <Config  items={menuData}/>
            </div>

            <div>
              <h6 className="menu-head m-0 mt-2">Configuration</h6>
             <Config  items={configData}/>
            </div>
            <div>
              <h6 className="menu-head m-0 mt-2">Reports</h6>
              <Menu className='bg-trasparent border-0' mode="inline" triggerSubMenuAction="click">
                {menuData.map((item, index) => (
                  <Menu.Item key={index} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                    <Link to={item.menu_header.toLowerCase().replace(/\s/g, '')}>{item.menu_header}</Link>
                  </Menu.Item>
                ))}
              </Menu>

            </div> */}
            <div>
              <Side />
            </div>

          </div>
        </div>
      </div>
      <div className="w-100 h-100">
        <div className="container-fluid p-0">
          <nav
            className="navbar navbar-expand-lg navbar-light sticky-top"
            style={{ backgroundColor: "green", height: "55px" }}
          >
            <div className="toggle ps-3 d-none d-lg-block">
              <div
                onClick={() => setInactive(!inactive)}
                className="toggle-menu-btn"
              >
                {inactive ? (
                  <i className="bi bi-chevron-right "></i>
                ) : (
                  <i className="bi bi-chevron-left"></i>
                )}
              </div>
            </div>
            <div className="container-fluid m-0 ">
              <div className="toggle d-lg-none me-auto" onClick={handleShow}>
                <a className="btn border-0 bg-transparent navbar-brand" href="#offcanvas">
                  <i className="fa-solid fa-bars text-white "></i>
                </a>
              </div>
              <ul className="navbar-nav   navList d-none d-lg-flex">
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-gear me-2 text-success"></i>
                    <span className="text-success fw-bold">Production Line 2</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item py-1 text-white fw-semibold">
                  <a href="#" className="active text-white text-decoration-none m-0 p-0">
                    Manage Operations
                  </a>
                </li>
                <li className="nav-item py-1 text-white fw-semibold">
                  <a href="#" className="text-white text-decoration-none">
                    Serial No Update
                  </a>
                </li>
              </ul>
              <div className="d-flex justify-content-between">
                <ul className="navbar-nav d-none d-lg-flex">
                  <li className="nav-item dropdown me-2 d-none">
                    <button
                      className="btn btn-light bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text-black-50 fw-normal me-3">- Default all companies -</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item text-white fs-3 mx-2 d-none">
                    <ion-icon name="sunny-outline"></ion-icon>
                  </li>
                  <li className="nav-item text-white fs-4 mx-2 mt-1 d-none">
                    <ion-icon name="notifications-outline"></ion-icon>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item ms-4">
                    <div className="d-flex gap-2">
                      <div>
                        <h6 className="m-0 text-center fw-bold">Kalyana P</h6>
                        <p className="m-0 display-6  " style={{ fontSize: "10px" }}>
                          login as admin
                        </p>
                      </div>
                     
                      <Dropdown>
                        <Dropdown.Toggle className="p-0 m-0 bg-transparent border-0" variant="success" id="dropdown-basic">
                          <i className="fa-solid fa-user-circle fs-1"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="mt-3">
                          <Dropdown.Item  onClick={Logout}>Logout</Dropdown.Item>

                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title><img className="w-100" src={activeLogo} alt="webscript" /></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Example />
              </Offcanvas.Body>
            </Offcanvas>
          </nav>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={`container-fluid p-0 py-3`}>
                <Routes>
                  <Route path="/dashboard" element={<div className="border-1 border-secondary">
                    <Dashboard />
                    </div>} />
                    
                    <Route path="/manageoperations/batch"  element={<Batch />} />
                  <Route path="/manageoperations/processflow"  element={<CustomTable data={tableData} onDelete={handleDelete} onUpdateData={updateTableData} />} />
                </Routes>
              </div>


              
            </div>

          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default SideMenu;
