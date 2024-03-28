import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Manage Operations/login.css'
import axios from 'axios';
function LoginComponent() {


  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [userInput, setuserInput] = useState('');
  const [passwordInput, setpasswordInput] = useState('');
  const [emailInput, setemailInput] = useState('');
  const [linesInput, setlinesInput] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Construct form data
      const data = {
        username: userInput,
        password: passwordInput,
        email: emailInput,
        lines: linesInput
    };

  console.log(data)
      // Make POST request to Flask backend
      const response = await axios.post('http://127.0.0.1:5000/register', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response.data); // Log the response from Flask
      setuserInput('');
      setpasswordInput('');
      setemailInput('');
      setlinesInput('');
     
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };




  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" d-none d-lg-block col-lg-6 " style={{ backgroundColor: '#214B8A', position: 'relative', height: '100vh' }}>
          <img src={require('../assets/image 1.svg').default} className="img-fluid" alt="" style={{ position: 'absolute', bottom: 0, right: 0 }} />

          <div className="m-5">
            <img src={require('../assets/spsoft 1.svg').default} alt="" />
          </div>

          <div className="d-flex justify-content-center" style={{ padding: '3rem 0' }}>
            <div className="position-relative" style={{ zIndex: 1 }}>
              <img src={require('../assets/Logo (1).svg').default} className="img-fluid" alt="" />
              <img src={require('../assets/Ellipse 6.svg').default} style={{ position: 'absolute', top: 0, left: '45%' }} alt="" />
              <img src={require('../assets/Ellipse 3.svg').default} style={{ position: 'absolute', top: '-30%', right: '20%' }} alt="" />
              <img src={require('../assets/Ellipse 5.svg').default} style={{ position: 'absolute', bottom: '40%', right: '3%' }} alt="" />
              <img src={require('../assets/Ellipse 4.svg').default} style={{ position: 'absolute', bottom: '-25%', right: '11%' }} alt="" />
            </div>
          </div>

          <div className="d-flex justify-content-center w-100">
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center" style={{ zIndex: 1 }}>
              <p className="w-50 text-center"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '21.78px',
                  fontWeight: 400,
                  lineHeight: '24.2px',
                  textAlign: 'center',
                  color: '#FFD52B',

                }}
              >Smart way and effective execution of the manufacturing operations</p>

              <p className=" text-center"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14.52px',
                  fontWeight: 300,
                  lineHeight: '19.36px',
                  textAlign: 'center',
                  color: 'rgba(230, 230, 230, 0.692)',
                  width: '43%'
                }}
              >Our MES system that connects, monitors and controls complex manufacturing and data flows on the factory floor.</p>
              <p className="text-center"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14.52px',
                  fontWeight: 300,
                  lineHeight: '19.36px',
                  textAlign: 'center',
                  color: 'rgba(230, 230, 230, 0.692)'
                }}
              >Version 1.0</p>
            </div>
          </div>

          <img src={require('../assets/_201376792.svg').default} alt="" className="img-fluid" style={{ position: 'absolute', top: 0, left: '30%' }} />
          <img src={require('../assets/_201376792 (1).svg').default} alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', height: '70%', left: 0, top: '20%' }} />
        </div>


        <div className="col-sm-12 col-md-12 col-lg-6" style={{ backgroundColor: '#ffffff', height: '100vh' }}>
          <div className='d-flex flex-column h-100'>
            <div className='container pt-3 '>
              <div className='d-flex justify-content-between'>
                <img className='img-fluid' src={require('../assets/EIS-Logo.svg').default} alt="" />
                <i className='fa-solid fa-bars fs-3 mt-3' ></i>
              </div>

            </div>

            <div className=' container'>
              <div className="flip-container">
                <div className={`flipper ${isFlipped ? 'flip' : ''}`} id="flipper">
                  <div className="front">
                    <h1 className="title">Login</h1>
                    <div className="d-flex justify-content-center align-items-center login  ">
                      <div className="d-flex flex-column justify-content-center col-12 col-lg-7 " >
                        <h6 className='welcome'>Welcome to</h6>
                        <h6 className='name'>Embedded IT Solutions (India) Private Limited</h6>

                        <div className='' id='login-container'>
                          <p className='login-decs p-0 m-0'>Please enter login with your username and password</p>

                          <form className='' >
                            <div className="mb-3">
                              <label htmlFor="formGroupExampleInput" className="form-label">User Name <span className="text-danger">*</span></label>
                              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Please enter your user name" required />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="formGroupExampleInput1" className="form-label">Password <span className="text-danger">*</span></label>
                              <div className="input-group h-100">
                                <input
                                  type={showPassword ? 'text' : 'password'}
                                  className="form-control"
                                  id="formGroupExampleInput1"
                                  placeholder="Enter your password" required
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

                            <div className="mb-2">
                              <label htmlFor="formGroupExampleInput2" className="form-label">Please Select Lines <span className="text-danger">*</span></label>
                              <select id="formGroupExampleInput2" className="form-select" placeholder="Select Options" required>
                                <option>Production</option>
                                <option>Operation</option>
                                <option>Manage Operation</option>
                                <option>Batch</option>
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
                            <button type='submit' className='btn btn-success w-100 my-3'> Login</button>
                          </form>
                          <center>
                            <button className="flipbutton btn btn-success border-0 text-center w-50" id="loginButton" href="#" onClick={handleFlip}>
                              Register..
                            </button>
                          </center>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="back">
                    <h1 className="title">Register</h1>
                    <div className="d-flex justify-content-center align-items-center login  ">
                      <div className="d-flex flex-column justify-content-center col-12 col-lg-7 " >
                        <h6 className='welcome'>Welcome to</h6>
                        <h6 className='name'>Embedded IT Solutions (India) Private Limited</h6>

                        <div className='' id='signup-container'>
                          <p className='login-decs p-0 m-0'>Please Register With Us If You Are New Here.</p>
                          <form className='' onSubmit={handleSubmit}>
                            <div className="mb-2">
                              <label for="username" className="form-label">Username <span>*</span></label>
                              <input type="text" name='register_username' className="form-control" id="username"  value={userInput} onChange={(e) => setuserInput(e.target.value)}  placeholder="Please Enter Your Username"  required />
                            </div>
                            <div className="mb-2">
                              <label for="password" className="form-label">Password <span>*</span></label>
                              <input type="text" name='register_password' className="form-control" id="password" value={passwordInput} onChange={(e) => setpasswordInput(e.target.value)}  placeholder="Please Enter Your Password"  required />
                            </div>
                            <div className="mb-2">
                              <label for="emailinput" className="form-label">Email <span>*</span></label>
                              <input type="text" name='register_email' className="form-control" id="emailinput" value={emailInput} onChange={(e) => setemailInput(e.target.value)} placeholder="Please Enter Your Email"  required />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="formGroupExampleInput2" className="form-label">Please Select Lines <span className="text-danger">*</span></label>
                              <select name="register_lines" className='form-control' id="register_lines" value={linesInput} onChange={(e) => setlinesInput(e.target.value)}  required>
                                <option value="Production">Production</option>
                                <option value="Operation">Operation</option>
                                <option value="Manage Operation">Manage Operation</option>
                                <option value="Batch">Batch</option>
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
                          <center>
                            <button className="flipbutton btn btn-success border-0 text-center w-50  mt-4" id="registerButton" href="#" onClick={handleFlip}>
                              Login
                            </button>
                          </center>

                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>



            <div className='d-flex flex-column justify-content-end h-100'>
              <div className="m-0 border-top">
                <div className="container" >
                  <div className="d-flex justify-content-between py-2 px-2">
                    <h6 className="m-0" style={{
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '20px',
                      textAlign: 'left',
                      color: '#1C1C1C66'
                    }}>
                      <span style={{ fontWeight: '400' }}>Powered by</span> SP Software (P) Limited.
                    </h6>
                    <h6 className="m-0" style={{
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '20px',
                      textAlign: 'center',
                      color: '#1C1C1C66'
                    }}>
                      Corporate Policy
                    </h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
