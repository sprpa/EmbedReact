import React from 'react';
import '../index.css'

function Header() {
    return (
        <div className="container-fluid p-0 w-100">
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'green',}}>
                <div className="container-fluid p-0 ">
                    <a className="navbar-brand" href="#">
                        <img src="images/Subtract.png" alt="" className="img-fluid" width="60" />
                    </a>
                    <div className="mx-auto">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mx-5 me-auto navList">
                            <li className="nav-item dropdown">
                                <button className="btn btn-light bg-white  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-gear me-2 text-success"></i><span className="text-success fw-bold">Production Line 2</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item py-1 text-white fw-semibold"><a href="#" className="active text-white text-decoration-none">Manage Operations</a></li>
                            <li className="nav-item py-1 text-white fw-semibold"><a href="#" className="text-white text-decoration-none">Serial No Update</a></li>
                        </ul>

                        <div className="d-flex justify-content-between">
                            <ul className="navbar-nav -auto ">
                                <li className="nav-item dropdown  me-2">
                                    <button className="btn btn-light bg-white  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="text-black-50 fw-normal me-3">- Default all companies -</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item text-white fs-3 mx-2"><ion-icon name="sunny-outline"></ion-icon></li>
                                <li className="nav-item text-white fs-4 mx-2 mt-1"><ion-icon name="notifications-outline"></ion-icon></li>
                            </ul>

                            <ul className="navbar-nav ">
                                <li className="nav-item ms-4">
                                    <div className="d-flex gap-2">
                                        <div className="">
                                            <h6 className="m-0 text-center fw-bold">Kalyana P</h6>
                                            <p className="m-0 display-6" style={{ fontSize: '0.8rem' }}>login as admin</p>
                                        </div>
                                        <i className="fa-solid fa-user-circle fs-1 me-3"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
