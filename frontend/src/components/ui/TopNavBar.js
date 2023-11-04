import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


function TopNavBar() {
  const {logOut} = useAuth();
  const navigate = useNavigate();

  const handleLogOut = ()=>{
    logOut();
    navigate("/");
  }
  return (
    <div className="top-navbar">
      <div className="left-section">
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} color='white'  />
          <span>Username</span>
        </div>
      </div>
      <div className="right-section">
        <div className="notification">
          <FontAwesomeIcon icon={faBell} color='white'  />
          <span>Notification</span>
        </div>
        <div className="logout" onClick={handleLogOut}>
          <span>Logout</span>
          <FontAwesomeIcon icon={faSignOutAlt} />  
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
