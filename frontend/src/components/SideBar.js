import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import '../style/App.css';
import '../style/SideBar.css';
import '../style/TopNavBar.css';
import { SideBarData } from './SideBarData';
import logoImage from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Link as ChakraLink, Icon } from "@chakra-ui/react";

function SideBar() {
  return (
    <div>    
      <div className="SideBar">
        <div className="logo" >
          <img src={logoImage} alt="Logo" id="sidebar-logo"/>
        </div>
        <ul className="SideBarList">
          {SideBarData.map((val, key) => (
            <li
              key={key}
              className={`row ${window.location.pathname === val.link ? "active" : ""}`}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">
                <NavLink
                  to={val.link}
                  activeClassName="active" // Add this activeClassName
                >
                  {val.title}
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
