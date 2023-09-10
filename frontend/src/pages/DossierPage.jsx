import Absences from '../components/Absences';
import NavTab from '../components/ui/NavTab';

export default function DossierPage() {
  const tabs = [
    { label: 'Absences', component: <Absences /> },
    // { label: 'Contrats', component: <Contrats /> },
  ];
  return (
     <NavTab tabs={tabs}/> 
  )
}
