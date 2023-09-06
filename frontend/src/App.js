
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// //layouts
// import MainLayout from './layouts/MainLayout';


// //pages
// import WelcomePage from './pages/WelcomePage';
// import EmpolyesPage from './pages/EmployesPage';
// import DossierPage from './pages/DossierEmploye'
// import Statistiques from './pages/Statistiques';

// //styles
// import './style/App.css'
// import MouvementsPage from './pages/MouvementsPage';




// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" >
//       <Route path="welecome" element={<WelcomePage />} />
//       <Route path="main" element={<MainLayout />}>
//         <Route path="stats" element={<Statistiques />} />
//         <Route path="employes" element={<EmpolyesPage />} />
//         <Route path="dossier" element={<DossierPage />}/>
//         <Route path='mouvements' element={<MouvementsPage/>}/>
//       </Route>
//     </Route>
//   )
// )


// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;

import React from 'react';
import DossierEmploye from './pages/DossierEmploye';
import SearchFilterBarEmp from './components/SearchFilterBarEmp';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <SearchFilterBarEmp/>    
      </div>
  );
}

export default App;