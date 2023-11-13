import React from 'react'
import NavTab from '../components/ui/NavTab';
import Unite from '../components/Unite';
import Structure from '../components/Structure';
import Poste from '../components/Poste';
import Status from '../components/Status';
import Collectif from '../components/Collectif';

export default function ParametresPage() {
  const tabs = [
    
     { label: 'Unite', component: <Unite /> },
     { label: 'Structure', component: <Structure /> },
     { label: 'Collectif', component: <Collectif /> },
     { label: 'Statut', component: <Status /> },
  ];
  return (
     <NavTab tabs={tabs}/> 
  )
}
