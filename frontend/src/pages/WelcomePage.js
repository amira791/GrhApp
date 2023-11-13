import { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from '@chakra-ui/react';
import '../style/WelcomePage.css';
import AuthForm from '../components/forms/AuthForm';
import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

export default function WelcomePage() {
  const {isAuthenticated } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleClick = () => {
    onOpen();
  }
  return (
    <>

      <div className="welcome-container">
        <div className="logo">
          <img id='CNRC-logo' src={require('../assets/LogoCNRC.png')} alt="Logo" />
        </div>
        <div className="content">
          <h1><span>Bienvenue</span><br />dans<br/> l'application web GRH</h1>
        </div>
        <div className="buttons">
          <h1>Veuillez sélectionner votre <span>module</span></h1>
          <button onClick={handleClick}>Module Personnel</button>
          <button>Module Paiment</button>
          <button>Module Formation </button>
        </div>
      </div>
     { !isAuthenticated ? <Modal
        mt={20}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Se connecter</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <AuthForm />
          </ModalBody>
        </ModalContent>
      </Modal>
     : <Navigate to="/main" />}
    </>

  );
}

