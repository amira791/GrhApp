import { TriangleUpIcon , TriangleDownIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Badge } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


export default function DataTable() {
  const [employe,setEmploye] = useState([]);

  // // Use the useEffect hook to fetch data from the API when the component mounts
  // useEffect(() => {
  //   // Define the API endpoint URL
  //   const apiUrl = 'http://localhost:8089/Employe/EmployeAll';

  //   // Fetch data from the API using the fetch() function
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // Update the state variable with the fetched data
  //       setEmploye(result);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); // The empty array [] means this effect will run once when the component mounts


  
  const initialRows = [
        { id: 1, matricule: '12345', nomPrenom: 'John Doe', poste: 'Manager', direction: 'Sales', anciennite: '5 years', etat: 'Actif' },
        { id: 2, matricule: '67890', nomPrenom: 'Jane Smith', poste: 'Developer', direction: 'Engineering', anciennite: '2 years', etat: 'Départ' },
      
  ];

  // const [rows, setRows] = useState(initialRows);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Function to toggle sorting direction
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  // Function to handle column header click
  const handleColumnHeaderClick = (column) => {
    // Toggle sorting direction if the same column is clicked again
    if (sortBy === column) {
      toggleSortDirection();
    } else {
      // Set the new column to sort by and reset the direction to ascending
      setSortBy(column);
      setSortDirection('asc');
    }

    // Sort the rows based on the selected column and direction
    const sortedRows = employe.slice().sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setEmploye(sortedRows);
  };

  return (
    <TableContainer p="30px"  marginTop="200px" >
      <Table variant='simple' >
        <Thead>
          <Tr>
            <Th onClick={() => handleColumnHeaderClick('matricule')}>
              Matricule
              {sortBy === 'matricule' && (
                sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('nomPrenom')}>
              Nom & Prenom
              {sortBy === 'nomPrenom' && (
                sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('poste')}>
              Poste de travail
              {sortBy === 'poste' && (
                sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('direction')}>
             Direction
              {sortBy === 'direction' && (
                sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('anciennite')}>
              Anciennite
              {sortBy === 'anciennite' && (
                sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('etat')}>
              Etat
              {sortBy === 'etat' && (
                sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            
          </Tr>
        </Thead>
        <Tbody>
          {initialRows.map((e) => (
            <Tr key={e.id}>
              <Td>{e.id.matricule}</Td>
              <Td>{e.id.Nom}</Td>
              <Td>{e.id.CodePoste}</Td>
              <Td>{e.id.Categorie}</Td>
              <Td>{e.id.DateEntree}</Td>
              <Td>{e.id.etat}</Td>
              
              {/* <Td>{e.prenom}</Td> */}
              {/* <Td>{row.direction}</Td>
              <Td>{row.anciennite}</Td>  
              <Td> <Badge ml='1' fontSize='0.8em' colorScheme='green'>{row.etat}</Badge></Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}