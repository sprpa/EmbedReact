import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import '../index.css'
import activeLogo from "../assets/logo/EIS_Main.png";
import inactiveLogo from "../assets/logo/Subtract.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Example from "./OffCanvas";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comp3 from "./Compnent3";
export const menuItems = [
  {
    name: "Content",
    exact: true,
    to: "/content",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  {
    name: "Content",
    exact: true,
    to: "/content",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  {
    name: "Content 2",
    exact: true,
    to: "/content-2",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  {
    name: "Content",
    exact: true,
    to: "/content",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  {
    name: "Content",
    exact: true,
    to: "/content",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  {
    name: "Content",
    exact: true,
    to: "/content",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  {
    name: "Content",
    exact: true,
    to: "/content",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  {
    name: "Content",
    exact: true,
    to: "/content",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },

];


const SideMenu = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inactive, setInactive] = useState(false);
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
      <div className={`side-menu ${inactive ? "inactive" : ""} d-none d-lg-block`}>
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
            <ul>
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  name={menuItem.name}
                  exact={menuItem.exact}
                  to={menuItem.to}
                  subMenus={menuItem.subMenus || []}
                  iconClassName={menuItem.iconClassName}
                  onClick={(e) => {
                    if (inactive) {
                      setInactive(false);
                    }
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-100">
        <div className="container-fluid p-0">
          <nav
            className="navbar navbar-expand-lg navbar-light sticky-top"
            style={{ backgroundColor: "green" }}
          >
            <div className="toggle ps-5 d-none d-lg-block">
              <div
                onClick={() => setInactive(!inactive)}
                className="toggle-menu-btn"
              >
                {inactive ? (
                  <i class="bi bi-chevron-right"></i>
                ) : (
                  <i class="bi bi-chevron-left"></i>
                )}
              </div>
            </div>
            <div className="container-fluid m-0 ms-2">
              <div className="toggle d-lg-none me-auto"onClick={handleShow}>
              <a class="btn border-0 bg-transparent navbar-brand" href="#offcanvas"><i class=" fa-solid fa-bars "></i></a>
              </div>
              <ul className="navbar-nav mx-5 me-auto navList d-none d-lg-flex">
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-light bg-white  dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-gear me-2 text-success"></i>
                    <span className="text-success fw-bold">
                      Production Line 2
                    </span>
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
                  <a
                    href="#"
                    className="active text-white text-decoration-none"
                  >
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
                      className="btn btn-light bg-white  dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text-black-50 fw-normal me-3">
                        - Default all companies -
                      </span>
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
                        <p
                          className="m-0 display-6"
                          style={{ fontSize: "0.8rem" }}
                        >
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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Example />  
        </Offcanvas.Body>
      </Offcanvas>
          </nav>

        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <div className={`container py-3 ${inactive ? "inactive" : ""}`}>
                <Routes>
                  {menuItems.map((menu, index) => (
                    <Route
                      key={menu.name}
                      path={menu.to}
                      element={<h1>{menu.name}</h1>}
                    />
                  ))}
                  {menuItems.map((menu, index) =>
                    menu.subMenus && menu.subMenus.length > 0
                      ? menu.subMenus.map((subMenu, i) => (
                          <Route
                            key={subMenu.name}
                            path={subMenu.to}
                            element={<h1>{subMenu.name}</h1>}
                          />
                        ))
                      : null
                  )}
                </Routes>
              </div>
            </div>
            <div className="col-3 d-none d-lg-block">
              <Comp3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
