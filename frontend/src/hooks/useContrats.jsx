import { useState } from 'react';
import { useToast } from '@chakra-ui/react'


export default function useContrats() {
  const [contrats, setContrats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toast = useToast()
 
  const fetchAllContrats = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:8089/Contrats/all')
      .then((response) => response.json())
      .then((result) => {
        setContrats(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const addNewContrat = (Contrat) => {
    fetch('http://localhost:8089/Contrats/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(Contrat),
    })
      .then(() => {
        toast({
          title: 'Contrat ajoutee',
          description: "L'Contrat a ete ajoutee avec succes",
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

  const updateContrat = (id ,data) => {
    fetch(`http://localhost:8089/Contrats/update/${id}`,
     { method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: 'Contrat modifiee',
          description: "L'Contrat a ete modifiee avec succes",
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
  
  const deleteContrat = (id) => {
    fetch(`http://localhost:8089/Contrats/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        toast({
          title: 'Contrat supprimee',
          description: "L'Contrat a ete suprimee avec succes",
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
    contrats,
    loading,
    error,
    fetchAllContrats,
    updateContrat,
    deleteContrat,
    addNewContrat,
  };
}

