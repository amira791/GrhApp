import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

export default function useMotifsAbs() {
  const [motifsAbs, setMotifsAbs] = useState([]);
  const [loadingM, setLoading] = useState(false);
  const [errorM, setError] = useState(null);
  const toast = useToast()

  const fetchAllMotifsAbs = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:8089/Absences/Motifs/all')
      .then((response) => response.json())
      .then((result) => {
        setMotifsAbs(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  
  const addNewMotif = (motif) => {
    fetch('http://localhost:8089/Absences/Motif/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
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
    fetch(`http://localhost:8089/Absences/Motifs/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
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
    fetch(`http://localhost:8089/Absences/Motifs/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        toast({
          title: 'Motif supprime',
          description: "Le motif a ete suprime avec succes",
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
    motifsAbs,
    loadingM,
    errorM,
    fetchAllMotifsAbs,
    updateMotif,
    deleteMotif,
    addNewMotif,
  };
}

