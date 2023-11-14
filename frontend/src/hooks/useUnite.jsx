import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
import useStorage from './useStorage';


export default function useUnite() {
  const [unite, setUnit] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {createHeaders} = useStorage();

  const toast = useToast()
 

  const addNewUnite = (Unite) => {
    fetch('http://localhost:8089/Unite/CreateUnite', {
              method: 'POST',
              headers: createHeaders(),
      body: JSON.stringify(Unite),
    })
      .then(() => {
        toast({
          title: 'Unite ajoutee',
          description: "L'unite a ete ajoutee avec succes",
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

  const updateUnite = (data) => {
    fetch(`http://localhost:8089/Unite/UpdateUnite/${data.id}`,
     { method: 'PUT',
     headers: createHeaders(),
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: 'Unite modifiee',
          description: "L'unite a ete modifiee avec succes",
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
  
  const deleteUnite = (id) => {
    fetch(`http://localhost:8089/Unite/DeleteUnite/${id}`, {
      method: 'DELETE',
      headers: createHeaders(),
    })
      .then(() => {
        toast({
          title: 'Unite supprimee',
          description: "L'Unite a ete suprimee avec succes",
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
    unite,
    loading,
    error,
    updateUnite,
    deleteUnite,
    addNewUnite,
  };
}

