import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

export default function useTypesCntr() {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast()

  const fetchAllTypes = () => {
    setLoading(true);
    setError(null);
    fetch('http://localhost:8089/Contrats/types/all')
      .then((response) => response.json())
      .then((result) => {
        setTypes(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const addNewType = (type) => {
    fetch('http://localhost:8089/Contrats/types/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(type),
    })
      .then(() => {
        toast({
          title: 'Type ajoute',
          description: "Le Type a ete ajoute avec succes",
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


  const updateType = (id , type) => {
    fetch(`http://localhost:8089/Contrats/types/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(type),
    })
      .then(() => {
        toast({
          title: 'Type modifie',
          description: "Le Type a ete modifie avec succes",
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
  
  const deleteType = (id) => {
    fetch(`http://localhost:8089/Contrats/types/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        toast({
          title: 'Type supprime',
          description: "Le Type a ete suprime avec succes",
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


 
  return {
    types,
    loading,
    error,
    fetchAllTypes,
    addNewType,
    updateType,
    deleteType
  };
}

