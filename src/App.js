import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import { useState } from "react";
import LoginComponent from "./components/Login";


function App() {
  const [inactive, setInactive] = useState(false);

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

      <LoginComponent />
      
     
    </div>
  );
}

export default App;
