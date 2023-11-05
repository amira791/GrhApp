
import { NavLink } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import logoImage from '../../assets/logo.png';
import { faChartLine, faFolderOpen, faHospitalUser, faPeopleLine, faPersonWalkingLuggage, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import '../../style/App.css';
import '../../style/SideBar.css';




function SideBar() {
  return (
      
      <div className="SideBar">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
      </div>
        <ul className="SideBarList" >
          {SideBarData.map((val, key) => (
            <li
              key={key}
              className={`row ${window.location.pathname === val.link ? "active" : ""}`}
            >
             
              <NavLink  
                to={val.link}
                word-wrap="break-word" 
                overflow-wrap="break-word"
                flex= "100%"
                display="list-item"
                place-items="center"
                padding-left="1px"  
              > {val.icon} {val.title} </NavLink>
         
            </li>
          ))}
        </ul>
      </div>
    
  );
}

export default SideBar;
