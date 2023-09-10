import React from 'react'
import Absences from '../components/Absences';
import NavTab from '../components/ui/NavTab';
import Prime from '../components/Prime';
import Promotion from '../components/Promotion';
import Remboursement from '../components/Remboursement';
import AllocationFamiliale from '../components/AllocationFamiliale';

export default function PrestationsPage() {
  const tabs = [
    { label: 'Promotion', component: <Promotion /> },
     { label: 'Prime', component: <Prime /> },
     { label: 'Allocation Familiale', component: <Remboursement /> },
     { label: 'Remboursement medicaux', component: <AllocationFamiliale /> },
    // { label: 'Contrats', component: <Contrats /> },
  ];
  return (
     <NavTab tabs={tabs}/> 
  )
}
