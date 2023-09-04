import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../styling/TopNavBar.css';


function TopNavBar() {
  return (
    <div className="top-navbar">
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
    </div>
  );
}

export default TopNavBar;
