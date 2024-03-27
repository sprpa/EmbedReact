import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
function FlipLoginForm() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flip-container">
            <div className={`flipper ${isFlipped ? 'flip' : ''}`} id="flipper">
                <div className="front">
                <h1 className="title">Login</h1>
                    <div className="d-flex justify-content-center align-items-center login  ">
                        <div className="d-flex flex-column justify-content-center col-12 col-lg-7 pt-5" >
                            <h6 className='welcome'>Welcome to</h6>
                            <h6 className='name'>Embedded IT Solutions (India) Private Limited</h6>

                            <div className='' id='login-container'>
                                <p className='login-decs p-0 m-0'>Please enter login with your username and password</p>

                                <form className='pb-5'>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">User Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Please enter your user name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput1" className="form-label">Password <span className="text-danger">*</span></label>
                                        <div className="input-group h-100">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className="form-control"
                                                id="formGroupExampleInput1"
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                className="btn btn-outline-black border-0 py-2 bg-secondary-subtle h-100"
                                                type="button "
                                                onClick={togglePasswordVisibility}
                                            >
                                                <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Please Select Lines <span className="text-danger">*</span></label>
                                        <select id="formGroupExampleInput2" className="form-select">
                                            <option selected>Please Select Lines</option>
                                            <option>...</option>
                                        </select>
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" for="gridCheck1">
                                                <small>Remember Me</small>
                                            </label>
                                        </div>

                                        <Link to="/forgotpassword"><small style={{ color: '#214B8A', fontWeight: 'bold' }}>Forgot Password</small></Link>
                                    </div>
                                    <button type='submit' className='btn btn-success w-100 my-3'>  Login</button>
                                </form>
                            </div>

                        </div>
                    </div>

                    <a className="flipbutton pt-5" id="loginButton" href="#" onClick={handleFlip}>
                        Create my account →
                    </a>
                </div>

                <div className="back">
                    <h1 className="title">Register</h1>
                    <div className="d-flex justify-content-center align-items-center login  ">
                        <div className="d-flex flex-column justify-content-center col-12 col-lg-7 pt-5" >
                            <h6 className='welcome'>Welcome to</h6>
                            <h6 className='name'>Embedded IT Solutions (India) Private Limited</h6>

                            <div className='' id='signup-container'>
                                <p className='login-decs p-0 m-0'>Please Register With Us If You Are New Here.</p>
                                <form className='pb-5'>
                                    <div className="mb-2">
                                        <label for="username" className="form-label">Username <span>*</span></label>
                                        <input type="text" className="form-control" id="username" placeholder="Please Enter Your Username" />
                                    </div>
                                    <div className="mb-2">
                                        <label for="password" className="form-label">Password <span>*</span></label>
                                        <input type="text" className="form-control" id="password" placeholder="Please Enter Your Password" />
                                    </div>
                                    <div className="mb-2">
                                        <label for="emailinput" className="form-label">Email <span>*</span></label>
                                        <input type="text" className="form-control" id="emailinput" placeholder="Please Enter Your Email" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Please Select Lines <span className="text-danger">*</span></label>
                                        <select id="formGroupExampleInput2" className="form-select" placeholder="Select Options">
                                            <option>Production</option>
                                            <option>Operation</option>
                                            <option>Manage Operation</option>
                                            <option>Batch</option>
                                        </select>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" for="gridCheck1">
                                            Remember Me
                                        </label>
                                    </div>

                                    <button type='submit' className='btn btn-success w-100 mt-3'>Register</button>

                                </form>


                            </div>

                        </div>
                    </div>

                    <a className="flipbutton pt-5" id="registerButton" href="#" onClick={handleFlip}>
                        Login to my account →
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FlipLoginForm;
