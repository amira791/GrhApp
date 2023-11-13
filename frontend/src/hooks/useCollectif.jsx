import { useState } from 'react';
import { useToast } from '@chakra-ui/react'


export default function useCollectif() {
  const [collectif, setCollectif] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toast = useToast()
 

  const addNewCollectif = (Collectif) => {
    fetch('http://localhost:8089/Collectif/CreateCollectif', {
              method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(Collectif),
    })
      .then(() => {
        toast({
          title: 'Collectif ajoutee',
          description: "Collectif a ete ajoutee avec succes",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        
      })
      .catch((error) => {
        setError(error);
        toast({
          title: 'Une erreur est survenue',
          description: error.message,
          status: 'error',
          duration: 5000,
        })
      });
  };

  const updateCollectif = (data) => {
    fetch(`http://localhost:8089/Collectif/UpdateCollectif/${data.id}`,
     { method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: 'Collectif modifiee',
          description: "Collectif a ete modifiee avec succes",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        
      })
      .catch((error) => {
        setError(error);
        toast({
          title: 'Une erreur est survenue',
          description: error.message,
          status: 'error',
          duration: 5000,
        })
      });
  };
  
  const deleteCollectif = (id) => {
    fetch(`http://localhost:8089/Collectif/DeleteCollectif/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        toast({
          title: 'Collectif supprimee',
          description: "Collectif a ete suprimee avec succes",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
       
      })
      .catch((error) => {
        setError(error);
        toast({
          title: 'Une erreur est survenue',
          description: error.message,
          status: 'error',
          duration: 5000,
        })
      });
  };



  return {
    collectif,
    loading,
    error,
    updateCollectif,
    deleteCollectif,
    addNewCollectif,
  };
}

