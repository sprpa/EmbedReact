import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import { useState } from "react";
import LoginComponent from "./components/Login";
import FlipLoginForm from "./components/Manage Operations/LoginTest";


function App() {

  return (
    <div className="App">

      {/* <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
      </Router> */}
      <Router>
        <LoginComponent />
        {/* <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        /> */}
      </Router>
         
    </div>
  );
}

export default App;
