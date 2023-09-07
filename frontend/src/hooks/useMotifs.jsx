import { useState } from 'react';

export default function useMotifs() {
  const [motifs, setMotifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllMotifs = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:8089/Absences/Motifs/all')
      .then((response) => response.json())
      .then((result) => {
        setMotifs(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };


  const updateMotif = (id , motif) => {
    fetch(`http://localhost:8089/Absences/Motifs/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(motif),
    })
      .then(() => {
        console.log('Motif modified');
      })
      .catch((error) => {
        setError(error);
      });
  };
  
  const deleteMotif = (id) => {
    fetch(`http://localhost:8089/Absences/Motifs/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Motif deleted');
      })
      .catch((error) => {
        setError(error);
      });
  };


  const addNewMotif = (motif) => {
    fetch('http://localhost:8089/Absences/Motifs/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(motif),
    })
      .then(() => {
        console.log('New motif added');
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    motifs,
    loading,
    error,
    fetchAllMotifs,
    updateMotif,
    deleteMotif,
    addNewMotif,
  };
}

