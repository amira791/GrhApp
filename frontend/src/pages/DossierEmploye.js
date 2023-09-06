// DossierEmploye.js
import React from 'react';
import TopNavBar from '../components/TopNavBar';
import SideBar from '../components/SideBar';
import DataTable from '../components/DataTable';
import '../style/DossierEmploye.css';

function DossierEmploye() {
  return (
    <div className="dossier-employe-container" >
        <SideBar />
      <div className="content-container">
     
        <DataTable />
      </div>
    </div>
  );
}

export default DossierEmploye;
