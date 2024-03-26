import React, { useState } from 'react';
function LoginComponent ()  {


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 d-none d-lg-block" style={{ backgroundColor: '#214B8A', position: 'relative', height: '100vh' }}>
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
                  width:'43%'
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
          <img src={require('../assets/_201376792 (1).svg').default} alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', left: 0, top: '20%' }} />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 position-relative" style={{ backgroundColor: '#ffffff', height: '100vh' }}>


          <div className="d-flex justify-content-center align-items-center ">
            <div className="d-flex flex-column justify-content-center " style={{width:'50%'}}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">User Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput1" className="form-label">Password <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="formGroupExampleInput1"
                    placeholder="Enter your password"
                  />
                  <button
                    className="btn btn-outline-black border-0 bg-secondary-subtle"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Please Select Lines <span className="text-danger">*</span></label>
                <select id="formGroupExampleInput2" className="form-select">
                  <option selected>Choose...</option>
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

                <a href=""><small style={{color:'#214B8A',fontWeight:'bold'}}>Forgot Password</small></a>
              </div>
              <button className='btn btn-success w-100 my-3'>  Login</button>
            </div>
          </div>
          <div className=' end-0'> 
            <h6>hi</h6>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
