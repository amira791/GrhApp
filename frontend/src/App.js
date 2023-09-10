 import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// <<<<<<< HEAD
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
// import ParametresPage from './pages/ParametresPage'
// import PrestationsPage from './pages/PrestationsPage'






// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" >
// //       <Route path="welecome" element={<WelcomePage />} />
// //       <Route path="main" element={<MainLayout />}>
// //         <Route path="stats" element={<Statistiques />} />
// //         <Route path="employes" element={<EmpolyesPage />} />
// //         <Route path="dossier" element={<DossierPage />}/>
// //         <Route path='mouvements' element={<MouvementsPage/>}/>
// //       </Route>
// //     </Route>
// //   )
// // )


// // function App() {
// //   return (
// //     <RouterProvider router={router} />
// //   );
// // }

// // export default App;



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" >
//       <Route path="welecome" element={<WelcomePage />} />
//       <Route path="main" element={<MainLayout />}>
//         <Route path="statistiques" element={<Statistiques />} />
//         <Route path="employes" element={<EmpolyesPage />} />
//         <Route path="dossier" element={<DossierPage />}/>
//         <Route path='mouvements' element={<MouvementsPage/>}/>
//         <Route path='parametres' element={<ParametresPage/>}/>
//         <Route path='prestations' element={<PrestationsPage/>}/>
//       </Route>
//     </Route>
//   )
// )

// =======
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






function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="main" element={<MainLayout />}>
          <Route path="statistiques" element={<StatistiquesPage />} />
          <Route path="employes" element={<EmpolyesPage />} />
            <Route path="AjoutEmp01" element={<AjoutEmp01 />} />
            <Route path="AjoutEmp02" element={<AjoutEmp02 />} />
            <Route path="AjoutEmp03" element={<AjoutEmp03 />} />
            <Route path="AjoutEmp04" element={<AjoutEmp04 />} />
            {/* Add more routes as needed */}
          <Route path="dossier" element={<DossierPage />} />
          <Route path="mouvements" element={<MouvementsPage />} />
          <Route path="parametres" element={<ParametresPage />} />
          <Route path="prestations" element={<PrestationsPage />} />
        </Route>
      </Route>
    )
  );
  return (

    < RouterProvider router={router} />

  );
}

export default App;

// import React from 'react';
// import SearchBar from './components/SearchBar';
// import SearchFilterBarEmp from './components/SearchFilterBarEmp';
// import EmployePage from './pages/EmployesPage';
// import './style/App.css';

// function App() {
//   return (
//     <div className="App">
//       <EmployePage/>    
//       </div>
//   );
// }

// export default App;