import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import { useState } from "react";
import Header from "./components/Header";


function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
      </Router>

    </div>
  );
}

export default App;
