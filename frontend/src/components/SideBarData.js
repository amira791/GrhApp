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
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


export const SideBarData = [
    {
        title: "Employe",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        link: "/Main"
    },
    {
        title: "Dossier Employe",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        link: "/Main"
    },
    {
        title: "Mouvement",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        link: "/Main"
    },
    {
        title: "Prestatuions et primes",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        link: "/Main"
    },
    {
        title: "Statistiques",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        link: "/Main"
    },
    {
        title: "Prametres",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        link: "/Main"
    }
    
]