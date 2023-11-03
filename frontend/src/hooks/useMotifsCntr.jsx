import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import useJwt from './useJwt';

export default function useMotifsCntr() {
  const [motifs, setmotifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();
  const {createHeaders} = useJwt();

  const fetchAllMotifs = () => {
    setLoading(true);
    setError(null);
    fetch('http://localhost:8089/Contrats/motifs/all', {
      method: 'GET',
      headers: createHeaders(), 
    })
      .then((response) => response.json())
      .then((result) => {
        setmotifs(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const addNewMotif = (motif) => {
    fetch('http://localhost:8089/Contrats/motifs/new', {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(motif),
    })
      .then(() => {
        toast({
          title: 'Motif ajoute',
          description: "Le motif a ete ajoute avec succes",
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


  const updateMotif = (id , motif) => {
    fetch(`http://localhost:8089/Contrats/motifs/update/${id}`, {
      method: 'PUT',
      headers: createHeaders(),
      body: JSON.stringify(motif),
    })
      .then(() => {
        toast({
          title: 'Motif modifie',
          description: "Le motif a ete modifie avec succes",
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
  
  const deleteMotif = (id) => {
    fetch(`http://localhost:8089/Contrats/motifs/delete/${id}`, {
      method: 'DELETE',
      headers: createHeaders()
    })
      .then(() => {
        toast({
          title: 'Motif supprime',
          description: "Le motif a ete suprime avec succes",
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
    motifs,
    loading,
    error,
    fetchAllMotifs,
    addNewMotif,
    updateMotif,
    deleteMotif
  };
}

