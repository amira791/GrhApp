import React from 'react';
import '../style/WelcomePage.css'; 
import { Grid, GridItem, VStack  , Text , Image, ButtonGroup, Button} from '@chakra-ui/react';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="logo">
        <img src={require('../assets/LogoCNRC.png')} alt="Logo" />
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
