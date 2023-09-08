import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function TopNavBar() {
  return (
    <div className="top-navbar">
      <div className="left-section">
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} color='white' size='xl' />
          <span>Username</span>
        </div>
      </div>
      <div className="right-section">
        <div className="notification">
          <FontAwesomeIcon icon={faBell} color='white' size='xl' />
        </div>
        <div className="logout">
          <span>Logout</span>
          <FontAwesomeIcon icon={faSignOutAlt} />  
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
