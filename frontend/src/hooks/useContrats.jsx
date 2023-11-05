import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import useStorage from './useStorage';



export default function useContrats() {
  const [contrats, setContrats] = useState([]);
  const [contrat, setContrat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {createHeaders} = useStorage();
 

  const toast = useToast();

  const fetchContratById =(id) =>{
    setLoading(true);
    setError(null);
    fetch(`http://localhost:8089/Contrats/${id}`, {
      method: 'GET',
      headers: createHeaders(),
    })
    .then((response) => response.json())
      .then((result) => {
        setContrat(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
 
  const fetchAllContrats = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:8089/Contrats/all', {
      method: 'GET',
      headers: createHeaders(), 
    })
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
      headers: createHeaders(),
      body: JSON.stringify(Contrat),
    })
      .then(() => {
        toast({
          title: 'Contrat ajoutee',
          description: "Le Contrat a ete ajoutee avec succes",
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

  const updateContrat = (data) => {
    fetch(`http://localhost:8089/Contrats/update/${data.id}`,{ 
      method: 'PUT',
      headers:createHeaders(),
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: 'Contrat modifiee',
          description: "Le Contrat a ete modifiee avec succes",
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
      headers: createHeaders()
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
    contrat,
    loading,
    error,
    fetchContratById,
    fetchAllContrats,
    updateContrat,
    deleteContrat,
    addNewContrat,
  };
}

