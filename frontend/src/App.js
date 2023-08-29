import React from 'react';
import TopNavBar from './components/TopNavBar';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <div className="content-container">
        <Sidebar />
        
      </div>
    </div>
  );
}

export default App;