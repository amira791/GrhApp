 import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements , Navigate} from 'react-router-dom';
import {useAuthContext} from './hooks/useAuthContext'
 //layouts
 import MainLayout from './components/layouts/MainLayout';

// //styles
 import './style/App.css';



//pages
import DossierPage from './pages/DossierPage'
import EmpolyesPage from './pages/EmployesPage';
import MouvementsPage from './pages/MouvementsPage';
import ParametresPage from './pages/ParametresPage';
import PrestationsPage from './pages/PrestationsPage';
import StatistiquesPage from './pages/StatistiquesPage';
import WelcomePage from './pages/WelcomePage';
import AjoutEmp01 from './components/AjoutEmp01';
import AjoutEmp02 from './components/AjoutEmp02';
import AjoutEmp03 from './components/AjoutEmp03';
import AjoutEmp04 from './components/AjoutEmp04';
import LoginFirst from './pages/LoginFirst';






function App() {
  const { isAuthenticated } = useAuthContext();
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={!isAuthenticated ? <WelcomePage/> : <Navigate to="/main" /> } />

        <Route path="main" element={isAuthenticated ? <MainLayout /> : <Navigate to="/"/>}>
          
          <Route path="employes" element={<EmpolyesPage />} />
            <Route path="AjoutEmp01" element={<AjoutEmp01 />} />
            <Route path="AjoutEmp02" element={<AjoutEmp02 />} />
            <Route path="AjoutEmp03" element={<AjoutEmp03 />} />
            <Route path="AjoutEmp04" element={<AjoutEmp04 />} />
           
          <Route path="dossier" element={<DossierPage />} />
          <Route path="mouvements" element={<MouvementsPage />} />
          <Route path="parametres" element={<ParametresPage />} />
          <Route path="prestations" element={<PrestationsPage />} />
          <Route path="statistiques" element={<StatistiquesPage />} />
        </Route>
       
       <Route path="*" element={<LoginFirst/>} />
      </Route>
    )
  );
  return (

    < RouterProvider router={router} />

  );
}

export default App;
