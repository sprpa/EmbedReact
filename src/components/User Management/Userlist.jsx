import React,{useState} from 'react';
import './user.css'

function Userlist() {
    const [activeButton, setActiveButton] = useState('Users');

    const handleClick = (buttonName) => {
      setActiveButton(buttonName);
    };
  return (
      <div className='container-fluid'>
          <div className='d-flex justify-content-between my-3'>
          <div>
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
    </div>
              <div>
                  <button className='btn addnew' style={{ backgroundColor: '#00923F', border: '1px solid #D9D9D9', width: '137px' }}>Add New</button>

              </div>
          </div>

          <hr />


      </div>
  )
}

export default Userlist
