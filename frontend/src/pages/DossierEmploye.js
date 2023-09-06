// grid-template-columns: 320px auto; /* Adjust the width of SideBar as needed */
// DossierEmploye.js
import React from 'react';
import SideBar from '../components/SideBar';
import DataTable from '../components/DataTable';
import '../style/DossierEmploye.css';
import '../style/TopNavBar.css'
import TopNavBar from '../components/TopNavBar';

function DossierEmploye() {
  return (
    <div>
      <TopNavBar/> 
    <div className="dossier-employe-container">
      <SideBar/> 
      <DataTable />
     </div>
    </div>
  );
}

export default DossierEmploye;
