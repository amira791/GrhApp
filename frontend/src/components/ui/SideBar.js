
import { NavLink } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import logoImage from '../../assets/logo.png';
import '../../style/App.css';
import '../../style/SideBar.css';
import '../../style/TopNavBar.css';



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
