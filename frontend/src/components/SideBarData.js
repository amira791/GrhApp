import React from 'react'
// import BadgeIcon from '@mui/icons-material/Badge'; /*DossierEmp*/
// import Diversity3Icon from '@mui/icons-material/Diversity3'; /*Employe*/
// import AssessmentIcon from '@mui/icons-material/Assessment'; /*Stat*/
// import CallSplitIcon from '@mui/icons-material/CallSplit'; /*Mouvm*/
// import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'; /* Avantage*/
// import AddToQueueIcon from '@mui/icons-material/AddToQueue'; /*Avantage2*/
// import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPeopleLine, faPersonWalkingLuggage, faChartLine, faSitemap, faHospitalUser, faFolderOpen} from "@fortawesome/free-solid-svg-icons";


export const SideBarData = [
    {
        title: "Employe",
        icon: <FontAwesomeIcon icon={faPeopleLine} />,
        link: "/Main"
    },
    {
        title: "Dossier Employe",
        icon: <FontAwesomeIcon icon={faFolderOpen} />,
        link: "/Main"
    },
    {
        title: "Mouvement",
        icon: <FontAwesomeIcon icon={faPersonWalkingLuggage} />,
        link: "/Main"
    },
    {
        title: "Prestatuions et primes",
        icon: <FontAwesomeIcon icon={faHospitalUser} />,
        link: "/Main"
    },
    {
        title: "Statistiques",
        icon: <FontAwesomeIcon icon={faChartLine} />,
        link: "/Main"
    },
    {
        title: "Parametres",
        icon: <FontAwesomeIcon icon={faSitemap} />,
        link: "/Main"
    }
    
]