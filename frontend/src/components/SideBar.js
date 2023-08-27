import react from "react";
import '../App.css';
import './SideBar.css';
import {SideBarData} from './SideBarData'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import logoImage from '../assets/logo.png';


function SideBar ()
{
  return ( 
   <div className="SideBar">
     <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
     <ul className="SideBarList">
       {SideBarData.map((val,key) => {
          return (
            <li
            key={key} className="row" id={window.location.pathname == val.link? "active": ""}
            onClick={() => {window.location.pathname = val.link;}}>
             {""}
             <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
       })}
       </ul>
      </div>
  );   

             
 
}

export default SideBar;
