import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//layouts
import MainLayout from './components/layouts/MainLayout';

//styles
import './style/App.css';


//pages
import DossierPage from './pages/DossierPage'
import EmpolyesPage from './pages/EmployesPage';
import MouvementsPage from './pages/MouvementsPage';
import ParametresPage from './pages/ParametresPage';
import PrestationsPage from './pages/PrestationsPage';
import StatistiquesPage from './pages/StatistiquesPage';
import WelcomePage from './pages/WelcomePage';
import Absences from './components/Absences';
import Contrats from './components/Contrats';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route path="welecome" element={<WelcomePage />} />
      <Route path="main" element={<MainLayout />}>
        <Route path="statistiques" element={<StatistiquesPage />} />
        <Route path="employes" element={<EmpolyesPage />} />
        <Route path="dossier" element={<DossierPage/>}/>

        <Route path='mouvements' element={<MouvementsPage/>}/>
        <Route path='parametres' element={<ParametresPage/>}/>
        <Route path='prestations' element={<PrestationsPage/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;