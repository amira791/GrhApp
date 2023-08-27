import react from "react";
import '../App.css';
import './SideBar.css';
import {SideBarData} from './SideBarData'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


function SideBar ()
{
  return ( 
   <div className="SideBar">
     <ul>
       {SideBarData.map((val,key) => {
          return (
            <li
            key={key}
            onClick={() => {window.location.pathname = val.link;}}>
             {""}
             <div>{val.icon}</div> <div>{val.title}</div>
            </li>
          );
       })}
       </ul>
      </div>
  );   

             
 
}

export default SideBar;
