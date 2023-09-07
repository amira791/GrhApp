import { faChartLine, faFolderOpen, faHospitalUser, faPeopleLine, faPersonWalkingLuggage, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SideBarData = [
    {
        title: "Employe",
        icon: <FontAwesomeIcon icon={faPeopleLine} />,
        link: "employes"
    },
    {
        title: "Dossier Employe",
        icon: <FontAwesomeIcon icon={faFolderOpen} />,
        link: "dossier"
    },
    {
        title: "Mouvement",
        icon: <FontAwesomeIcon icon={faPersonWalkingLuggage} />,
        link: "mouvements"
    },
    {
        title: "Prestatuions et avantages",
        icon: <FontAwesomeIcon icon={faHospitalUser} />,
        link: "prestations"
    },
    {
        title: "Statistiques",
        icon: <FontAwesomeIcon icon={faChartLine} />,
        link: "statistiques"
    },
    {
        title: "Parametres",
        icon: <FontAwesomeIcon icon={faSitemap} />,
        link: "parametres"
    }
    
]