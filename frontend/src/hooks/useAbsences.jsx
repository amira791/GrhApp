import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import useJwt from './useJwt';


export default function useAbsences() {
  const [absences, setAbsences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {createHeaders} = useJwt();

  const toast = useToast()
 
  const fetchAllAbsences = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:8089/Absences/all', {
      method: 'GET',
      headers: createHeaders(), 
    })
      .then((response) => response.json())
      .then((result) => {
        setAbsences(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        
      });
  };

  const addNewAbsence = (absence) => {
    fetch('http://localhost:8089/Absences/new', {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(absence),
    })
      .then(() => {
        toast({
          title: 'Absence ajoutee',
          description: "L'absence a ete ajoutee avec succes",
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

  const updateAbsence = (data) => {
    const updatedData = {
      nbAbsence : data.nbAbsence,
      autorisee : data.autorisee
    }
    fetch(`http://localhost:8089/Absences/update/${data.code}/${data.dateDebut}/${data.dateFin}/${data.matricule}`,{ 
      method: 'PUT',
      headers: createHeaders(),
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        toast({
          title: 'Absence modifiee',
          description: "L'absence a ete modifiee avec succes",
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
  
  const deleteAbsence = (id) => {
    console.log(id)
    fetch(`http://localhost:8089/Absences/delete/${id.code}/${id.dateDebut}/${id.dateFin}/${id.matricule}`, {
      method: 'DELETE',
      headers: createHeaders()
    })
      .then(() => {
        toast({
          title: 'Absence supprimee',
          description: "L'absence a ete suprimee avec succes",
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
    absences,
    loading,
    error,
    fetchAllAbsences,
    updateAbsence,
    deleteAbsence,
    addNewAbsence,
  };
}

