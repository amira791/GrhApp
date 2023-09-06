import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import '../App.css';
import '../style/SideBar.css';
import '../style/TopNavBar.css';
import { SideBarData } from './SideBarData';
import logoImage from '../assets/logo.png';



function SideBar() {
  return (
    <div>
      {/* <div className="top-navbar">
        <div className="left-section">
          <div className="user-info">
            <FontAwesomeIcon icon={faUser} />
            <span>Username</span>
          </div>
        </div>
        <div className="right-section">
          <div className="notification">
            <FontAwesomeIcon icon={faBell} />
            <span>Notifications</span>
          </div>
          <div className="logout">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </div>
        </div>
      </div> */}
    
      <div className="SideBar">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <ul className="SideBarList">
          {SideBarData.map((val, key) => (
            <li
              key={key}
              className={`row ${window.location.pathname === val.link ? "active" : ""}`}
              onClick={() => { window.location.pathname = val.link; }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
