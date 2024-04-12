import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Manage Operations/login.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard';
import SideMenu from './SideMenu';
function LoginComponent() {
  const [inactive, setInactive] = useState(false);


  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
const navigate =useNavigate();


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
  const [userloginInput,setuserloginInput]=useState('');
  const [passwordloginInput,setpasswordloginInput]=useState('');
  const handleSubmit = async (e) => {

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
      const response = await axios.post('https://eis-website-backend.onrender.com/register', data, {
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

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
        // Make a GET request to the authentication endpoint
        const response = await axios.get(`https://eis-website-backend.onrender.com/authenticate?username=${userloginInput}&password=${passwordloginInput}`);
        if (response.data.success === true) {
            // Display success message
            toast.success("Login Successful...");
            setIsLoggedIn(true);
            navigate("/dashboard");
        } else {
            // Display error message
            toast.error("Login Failed. Invalid username or password.");
        }
    } catch (error) {
        // Display error message
        toast.error(`Error submitting form: ${error.message}`);
    } finally {
        // Clear input fields
       
    }
}

  




  return (
<Fragment>
  {!isLoggedIn ? <div className="container-fluid">
      <div className="row">
        <div className=" d-none d-lg-block col-lg-6 " style={{ backgroundColor: '#214B8A', position: 'relative', height: '100vh' }}>
          <img src={require('../assets/image 1.svg').default} className="img-fluid" alt="" style={{ position: 'absolute', bottom: 0, right: 0 }} />

          <div className="m-4 ">
            <img src={require('../assets/spsoft 1.svg').default} alt="" />
          </div>

          <div className="d-flex justify-content-center" style={{ padding: '8.5rem 0 0 0' }}>
            <div className="position-relative" style={{ zIndex: 1 }}>
              <img src={require('../assets/Logo (1).svg').default} className="img-fluid" alt="" />
              <img src={require('../assets/Ellipse 6.svg').default} style={{ position: 'absolute', top: 0, left: '45%' }} alt="" />
              <img src={require('../assets/Ellipse 3.svg').default} style={{ position: 'absolute', top: '-30%', right: '20%' }} alt="" />
              <img src={require('../assets/Ellipse 5.svg').default} style={{ position: 'absolute', bottom: '40%', right: '3%' }} alt="" />
              <img src={require('../assets/Ellipse 4.svg').default} style={{ position: 'absolute', bottom: '-25%', right: '11%' }} alt="" />
            </div>
          </div>

          <div className="d-flex justify-content-center w-100">
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center pt-4" style={{ zIndex: 1 }}>
              <p className="w-75 text-center pt-5"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '21.78px',
                  fontWeight: 400,
                  lineHeight: '24.2px',
                  textAlign: 'center',
                  color: '#FFD52B',

                }}
              >Smart way and effective execution of the manufacturing operations</p>

              <p className=" text-center pt-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14.52px',
                  fontWeight: 300,
                  lineHeight: '19.36px',
                  textAlign: 'center',
                  color: 'rgba(230, 230, 230, 0.692)',
                  width: '52%'
                }}
              >Our MES system that connects, monitors and controls complex manufacturing and data flows on the factory floor.</p>
              <p className="text-center pt-2"
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


        <div className="col-sm-12 col-md-12 col-lg-6 position-relative"  style={{ backgroundColor: '#ffffff', height: '100vh' }}>
          <div className='d-flex flex-column '>
            <div className='container p-5 pt-4 '>
              <div className='d-flex justify-content-between'>
                <img className='img-fluid' src={require('../assets/EIS-Logo.svg').default} alt="" />
                <div className='d-flex flex-column justify-content-center'>
                    <i className='fa-solid fa-bars fs-3 ' ></i>
                </div>
              </div>

            </div>
              <div className='d-flex flex-column justify-content-center '>
                <div className=' container'>
                  <div className="flip-container">
                    <div className={`flipper ${isFlipped ? 'flip' : ''}`} id="flipper">
                      <div className="front ">

                        <div className="d-flex justify-content-center align-items-center login mt-5 ">
                          <div className="d-flex flex-column justify-content-center col-12 col-lg-8  " >
                            <h6 className='welcome'>Welcome to</h6>
                            <h6 className='name'>Embedded IT Solutions (India) Private Limited</h6>

                            <div className='' id='login-container'>
                              <p className='login-decs p-0 m-0'>Please enter login with your username and password</p>

                              <form className='' onSubmit={handleSubmitLogin}>
                                <ToastContainer /> {/* Render ToastContainer outside the form */}
                                <div className="mb-1">
                                  <label htmlFor="formGroupExampleInput" className="form-label">User Name <span className="text-danger">*</span></label>
                                  <input type="text" className="form-control mb-0" id="formGroupExampleInput" value={userloginInput} onChange={(e) => setuserloginInput(e.target.value)} placeholder="Please enter your user name" required />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="formGroupExampleInput1" className="form-label">Password <span className="text-danger">*</span></label>
                                  <div className="input-group h-100">
                                    <input
                                      type='password'
                                      className="form-control mb-0"
                                      id="formGroupExampleInput1" value={passwordloginInput} onChange={(e) => setpasswordloginInput(e.target.value)}
                                      placeholder="Enter your password" required
                                    />
                                  </div>
                                </div>
                                <div className='d-flex justify-content-between mt-2'>
                                  <div className="form-check">
                                    <input className="form-check-input mb-0" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label pt-2 ms-2" htmlFor="gridCheck1">
                                      <small className=''>Remember Me</small>
                                    </label>
                                  </div>
                                  <Link to="/"><small style={{ color: '#214B8A', fontWeight: 'bold' }} onClick={handleFlip}>Forgot Password</small></Link>
                                </div>
                                <button className='btn btn-success w-100 my-3'> Login</button>
                              </form>

                            </div>

                          </div>
                        </div>
                      </div>

                      <div className="back">
                        <div className="d-flex justify-content-center align-items-center login  ">
                          <div className="d-flex flex-column justify-content-center col-12 col-lg-8  " >
                            <h6 className='welcome pt-5'>Welcome to</h6>
                            <h6 className='name'>Embedded IT Solutions (India) Private Limited</h6>

                            <div className='' id='signup-container'>
                              <p className='login-decs p-0 m-0'>Please Register With Us If You Are New Here.</p>
                              <form className='' onSubmit={handleSubmit}>
                                <div className="mb-1">
                                  <label for="username" className="form-label">Username <span>*</span></label>
                                  <input type="text" name='register_username' className="form-control m-0" id="username" value={userInput} onChange={(e) => setuserInput(e.target.value)} placeholder="Please Enter Your Username" required />
                                </div>
                                <div className="mb-1">
                                  <label for="password" className="form-label">Password <span>*</span></label>
                                  <input type="text" name='register_password' className="form-control m-0" id="password" value={passwordInput} onChange={(e) => setpasswordInput(e.target.value)} placeholder="Please Enter Your Password" required />
                                </div>
                                <div className="mb-1">
                                  <label for="emailinput" className="form-label">Email <span>*</span></label>
                                  <input type="text" name='register_email' className="form-control m-0" id="emailinput" value={emailInput} onChange={(e) => setemailInput(e.target.value)} placeholder="Please Enter Your Email" required />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="formGroupExampleInput2" className="form-label">Please Select Lines <span className="text-danger">*</span></label>
                                  <select name="register_lines" className='form-control m-0' id="register_lines" value={linesInput} onChange={(e) => setlinesInput(e.target.value)} required>
                                    <option value="Production">Production</option>
                                    <option value="Operation">Operation</option>
                                    <option value="Manage Operation">Manage Operation</option>
                                    <option value="Batch">Batch</option>
                                  </select>
                                </div>
                                <div className="form-check my-2">
                                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                  <label className="form-check-label mt-2 ms-2" for="gridCheck1">
                                    Remember Me
                                  </label>
                                </div>

                                <button type='submit' className='btn btn-success w-100 '>Send <i class="fa-solid fa-paper-plane ms-1"></i> </button>

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
              </div>

            <div className='position-absolute bottom-0' style={{left:'0',right:'0'}}>
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
    </div> :<SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}/> }

</Fragment>
    
    
  );
}

export default LoginComponent;
