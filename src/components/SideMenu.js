import React, { useEffect, useState } from "react";
import { Link, Routes } from 'react-router-dom';
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

const accordionItems = [
  {
    header: 'Production',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
  {
    header: 'Operation',
    icon: 'fa-solid fa-tv',
    subItems: [
      {
        title: 'Operation 1',
      },
      {
        title: 'Operation 2',
      },
      {
        title: 'Operation 3',
      },
    ],
  },
  {
    header: 'Quality',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Operation 1',
      },
      {
        title: 'Operation 2',
      },
      {
        title: 'Operation 3',
      },
    ],
  },
  {
    header: 'Testing',
    icon: 'fa-solid fa-microscope',
    subItems: [
      {
        title: 'Operation 1',
      },
      {
        title: 'Operation 2',
      },
      {
        title: 'Operation 3',
      },
    ],
  },
  {
    header: 'Inventory',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Operation 1',
      },
      {
        title: 'Operation 2',
      },
      {
        title: 'Operation 3',
      },
    ],
  },
  {
    header: 'Packing',
    icon: 'fa-solid fa-boxes-packing',
    subItems: [
      {
        title: 'Operation 1',
      },
      {
        title: 'Operation 2',
      },
      {
        title: 'Operation 3',
      },
    ],
  },
  // Add more items here...
];

const accordionConfig=[
  {
    header: 'Manage Operations',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Batch',
       
      },
      {
        title: 'Process Flow',
        
      },
    ],
  },
  {
    header: 'User Management',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
  {
    header: 'API Configuration',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
  {
    header: 'Masters',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
  {
    header: 'ORG Settings',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
]

const reports =[
  {
    header: 'Production Reports',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
  {
    header: 'Traceability Reports',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
  {
    header: 'Management Reports',
    icon: 'fa-solid fa-dashboard',
    subItems: [
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
      {
        title: 'Production',
      },
    ],
  },
  
];


const SideMenu = (props) => {
  const [show, setShow] = useState(false);
  const [inactive, setInactive] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
const [tableData, setTableData] = useState([
  { processName: 'Test505', itemCode: 'A123', productionNo: '123', productionStatus: 'In Progress' },
  { processName: 'Test501', itemCode: 'B456', productionNo: '456', productionStatus: 'Completed' },
  { processName: 'Test506', itemCode: 'C789', productionNo: '789', productionStatus: 'Pending' },
  { processName: '830-00507', itemCode: 'C790', productionNo: '789', productionStatus: 'Completed' },
  { processName: 'BRD7805', itemCode: 'C791', productionNo: '789', productionStatus: 'Pending' },
  { processName: 'BRD7806', itemCode: 'C792', productionNo: '789', productionStatus: 'Completed' },
  { processName: 'WMS_EVK_Board', itemCode: 'C793', productionNo: '789', productionStatus: 'In Progress' },
  { processName: 'EVK_S1917_QMS_SVP', itemCode: 'C794', productionNo: '789', productionStatus: 'In Progress' },
  { processName: 'Test1001', itemCode: 'C795', productionNo: '790', productionStatus: 'In Progress' },
  { processName: '830-00507', itemCode: 'C794', productionNo: '789', productionStatus: 'In Progress' },
  { processName: 'RS9116-DB00-A7-DC', itemCode: 'C794', productionNo: '789', productionStatus: 'In Progress' },

]);

const updateTableData = (newData) => {
  setTableData(newData);
};

const handleDelete = (index) => {
  const newData = [...tableData];
  newData.splice(index, 1);
  setTableData(newData);
};

  const logoSrc = inactive ? inactiveLogo : activeLogo;

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`d-flex side-menu-wrapper ${inactive ? "inactive" : ""}`}>
      <div className={`side-menu ${inactive ? "inactive" : ""} d-none d-lg-block shadow`}>
        <div className="top-section">
          <div className="logo w-100">
            {inactive ? (
              <img src={inactiveLogo} alt="webscript" />
            ) : (
              <img className="w-100" src={activeLogo} alt="webscript" />
            )}
          </div>
          <div className="divider"></div>
          <div className="main-menu">

            <div className="my-2">
              <h6 className="dash-head">Dashboards</h6>
              <Link to="/dashboard" className="d-flex gap-2 p-1" style={{ textDecoration: 'none' }}>
                <ion-icon name="speedometer-outline"></ion-icon>
                <h6 className="dashboard m-0">Dashboard</h6>
              </Link>
            </div>
            <div>
              <h6 className="menu-head m-0">Menu</h6>
              <Config  items={accordionItems}/>
            </div>

            <div>
              <h6 className="menu-head m-0 mt-2">Configuration</h6>
             <Config  items={accordionConfig}/>
            </div>
            <div>
              <h6 className="menu-head m-0 mt-2">Reports</h6>
              {/* <Accordion className='d-flex flex-column '>

                {reports.map((item, index) => (
                  <Accordion.Item key={index} className='border-0 bg-transprent' eventKey={index.toString()}>
                    <Accordion.Header className="p-0">
                      <div className="d-flex gap-3 p-0">
                        <i className={`${item.icon} mt-1`} />
                        <h6 className="menu-list m-0 mt-1">{item.header}</h6>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className='p-0'>
                      {item.body}

                      {item.subItems && (
                        <div className='mt-1 ms-3 leftBorder ps-3'>
                          {item.subItems.map((subItem, subIndex) => (
                            <div className='mb-1 border-0' key={subIndex}>
                              <div className="sub-head">
                                <h6 className="p-0 m-0">{subItem.title}</h6>
                              </div>

                            </div>
                          ))}
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion> */}
              <Config  items={reports}/>
            </div>

          </div>
        </div>
      </div>
      <div className="w-100">
        <div className="container-fluid p-0">
          <nav
            className="navbar navbar-expand-lg navbar-light sticky-top"
            style={{ backgroundColor: "green", height: "70px" }}
          >
            <div className="toggle ps-3 d-none d-lg-block">
              <div
                onClick={() => setInactive(!inactive)}
                className="toggle-menu-btn"
              >
                {inactive ? (
                  <i className="bi bi-chevron-right"></i>
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
                  <a href="#" className="active text-white text-decoration-none">
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
                  <li className="nav-item dropdown me-2">
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
                  <li className="nav-item text-white fs-3 mx-2">
                    <ion-icon name="sunny-outline"></ion-icon>
                  </li>
                  <li className="nav-item text-white fs-4 mx-2 mt-1">
                    <ion-icon name="notifications-outline"></ion-icon>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item ms-4">
                    <div className="d-flex gap-2">
                      <div>
                        <h6 className="m-0 text-center fw-bold">Kalyana P</h6>
                        <p className="m-0 display-6" style={{ fontSize: "0.8rem" }}>
                          login as admin
                        </p>
                      </div>
                      <i className="fa-solid fa-user-circle fs-1"></i>
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
