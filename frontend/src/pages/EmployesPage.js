// grid-template-columns: 320px auto; /* Adjust the width of SideBar as needed */
// DossierEmploye.js
import React from 'react';
import SideBar from '../components/SideBar';
import DataTable from '../components/DataTable';
import '../style/EmployesPage.css';
import '../style/TopNavBar.css'
import NavTab from '../components/NavTab';
import TopNavBar from '../components/TopNavBar';
import Absences from '../components/Absences';
import Contrats from '../components/Contrats';

function EmployePage() {
 
  const tabs = [
    { label: 'Absences', component: <Absences /> },
    { label: 'Contrats', component: <Contrats /> },
  ];
  return (
     <NavTab tabs={tabs}/> 
  )
}

export default EmployePage;
