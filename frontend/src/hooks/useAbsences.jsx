import { useState } from 'react';
import { useToast } from '@chakra-ui/react'


export default function useAbsences() {
  const [absences, setAbsences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toast = useToast()
 
  const fetchAllAbsences = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:8089/Absences/all')
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
      headers: { 'Content-type': 'application/json' },
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
      });
  };

  const updateAbsence = (data) => {
    const updatedData = {
      nbAbsence : data.nbAbsence,
      autorisee : data.autorisee
    }
    fetch(`http://localhost:8089/Absences/update/${data.code}/${data.dateDebut}/${data.dateFin}/${data.matricule}`,
     { method: 'PUT',
      headers: { 'Content-type': 'application/json' },
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
      });
  };
  
  const deleteAbsence = (id) => {
    fetch(`http://localhost:8089/Absences/delete/${id.code}/${id.dateDebut}/${id.dateDebut}/${id.matricule}`, {
      method: 'DELETE',
    })
      .then(() => {
        toast({
          title: 'Absence supprimee',
          description: "L'absence a ete suprimee avec succes",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
       
      })
      .catch((error) => {
        setError(error);
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

