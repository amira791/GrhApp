import React from 'react';
import './WelcomePage.css'; // Create this CSS file to style your WelcomePage component

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="logo">
        <img src={require('../assets/logo.png')} alt="Logo" />
      </div>
      <div className="content">
        <h1>Welcome to Our App</h1>
        <img src={require('../assets/welcomepfp.png')} alt="Welcome" className="photo" />
      </div>
      <div className="buttons">
        <button>Module Personnel</button>
        <button>Module Paiment</button>
        <button> Module Formation </button>
      </div>
    </div>
  );
};

export default WelcomePage;
