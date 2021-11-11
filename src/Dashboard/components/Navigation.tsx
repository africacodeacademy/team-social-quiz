import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import "../../App";

function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(sidebar);
  return (
    <>
      <div className="Navigation">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu" : "nav-menu active"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              {SideBarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                     <span className="iconSideBar"> {item.icon} </span>

                      <span className="categorySideBar">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navigation;
