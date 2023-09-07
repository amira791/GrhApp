// grid-template-columns: 320px auto; /* Adjust the width of SideBar as needed */
// DossierEmploye.js
import React from 'react';
import '../style/EmployesPage.css';
import DataTable from '../components/tables/DataTable'
import AjouterEmp01 from '../components/AjoutEmp01'
import AjouterEmp02 from '../components/AjoutEmp02'
import AjouterEmp03 from '../components/AjoutEmp03'
import AjouterEmp04 from '../components/AjoutEmp04'


function EmployePage() {
 
  return (
    <>    
     <AjouterEmp01/>
    {/*  <AjouterEmp02/>
     <AjouterEmp03/>
     <AjouterEmp04/> */}
     {/* <DataTable /> */}
     </>
  )
}

export default EmployePage;
