import Mutations from '../components/Mutations';
import NavTab from '../components/NavTab';

export default function MouvementsPage() {
    const tabs = [
        { label: 'Mutation inter structure', component: <Mutations /> },
        { label: 'Mutation inter unite', component: <Mutations /> },
      ];
      return (
        <div>
         <NavTab tabs={tabs}/> 
          </div>
      )
}
