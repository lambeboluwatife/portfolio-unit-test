import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import SideNav from "./components/SideNav";

const App = () => {
  const location = useLocation();

  const [sideNav, setShowSideNav] = useState<boolean>(false);

  const toggleSideNav = () => {
    setShowSideNav(!sideNav);
  };

  let menuStyle = "";
  if (location.pathname === "/about") {
    menuStyle = "aboutStyle";
  }
  if (location.pathname === "/skills") {
    menuStyle = "skillStyle";
  }
  if (location.pathname === "/portfolio" || location.pathname === "/contact") {
    menuStyle = "portfolioStyle";
  }
  return (
    <div className="app">
      <div className="column left">
        <Nav />
      </div>
      <div className="column right">
        {sideNav && <SideNav toggleSideNav={toggleSideNav} />}

        <FontAwesomeIcon
          className={`fa-2x menu ${menuStyle}`}
          icon={sideNav ? faRemove : faBars}
          onClick={toggleSideNav}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
