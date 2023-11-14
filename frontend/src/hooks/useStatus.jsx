import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
import useStorage from './useStorage';


export default function useStatus() {
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {createHeaders} = useStorage();

  const toast = useToast()
 

  const addNewStatus = (Status) => {
    fetch('http://localhost:8089/status/CreateStatus', {
              method: 'POST',
              headers: createHeaders(), 
      body: JSON.stringify(Status),
    })
      .then(() => {
        toast({
          title: 'Statut ajoutee',
          description: "Le statut a ete ajoutee avec succes",
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

  const updateStatus = (data) => {
    fetch(`http://localhost:8089/status/updateStatus/${data.id}`,
     { method: 'PUT',
     headers: createHeaders(), 
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: 'Statut modifiee',
          description: "Le statut a ete modifiee avec succes",
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
  
  const deleteStatus = (id) => {
    fetch(`http://localhost:8089/status/deleteStatus/${id}`, {
      method: 'DELETE',
      headers: createHeaders(), 
    })
      .then(() => {
        toast({
          title: 'Statut supprimee',
          description: "Le statut a ete suprimee avec succes",
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
    status,
    loading,
    error,
    updateStatus,
    deleteStatus,
    addNewStatus,
  };
}

