import react from "react";
import '../App.css';
import './SideBar.css';
import {SideBarData} from './SideBarData'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


function SideBar ()
{
  return ( 
   <div className="SideBar">
     <ul className="SideBarList">
       {SideBarData.map((val,key) => {
          return (
            <li
            key={key} className="row"
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
