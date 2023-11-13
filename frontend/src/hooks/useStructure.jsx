import { useState } from 'react';
import { useToast } from '@chakra-ui/react'


export default function useStructure() {
  const [structure, setStructure] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toast = useToast()
 

  const addNewStructure = (Structure) => {
    fetch('http://localhost:8089/Structure/CreateStructure', {
              method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(Structure),
    })
      .then(() => {
        toast({
          title: 'Structure ajoutee',
          description: "Structure a ete ajoutee avec succes",
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

  const updateStructure = (data) => {
    fetch(`http://localhost:8089/Structure/UpdateStructure/${data.id}`,
     { method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: 'Structure modifiee',
          description: "Structure a ete modifiee avec succes",
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
  
  const deleteStructure = (id) => {
    fetch(`http://localhost:8089/Structure/DeleteStructure/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        toast({
          title: 'Structure supprimee',
          description: "Structure a ete suprimee avec succes",
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
    structure,
    loading,
    error,
    updateStructure,
    deleteStructure,
    addNewStructure,
  };
}

