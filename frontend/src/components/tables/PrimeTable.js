import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function DataTable({ employe, filteredEmploye,  searchQuery, searchActive, posteData, onFilter,searchEmploye }) {
  //const [employe, setEmploye] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortEchelon, setSortEchelon] = useState('asc');
  const [selectedFiltre, setSelectedFiltre] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = () => {
    // Collect the selected filter values
    const selectedFilter = {
      filtre: selectedFiltre,
      value: selectedValue,
    };

    // Pass the selected filter values to the onFilter callback
    onFilter(selectedFilter);
  };


  

  const toggleSortEchelon = () => {
    setSortEchelon(sortEchelon === 'asc' ? 'desc' : 'asc');
  };

  const handleColumnHeaderClick = (column) => {
    if (sortBy === column) {
      toggleSortEchelon();
    } else {
      setSortBy(column);
      setSortEchelon('asc');
    }
  };

  const getEtatColor = (etat) => {
    switch (etat) {
      case "Actif":
        return "#AFFE94";
      case "FinFonction":
        return "#FF8383";
      case "MiseEnDispo":
        return "#FFFA8B";
      default:
        return "transparent"; // Default color (no background color change)
    }
  };

  // Function to get posteDesignation by codePoste
  const getPosteDesignation = (codePoste) => {
    return posteData[codePoste] || 'N/A';
  };
  // Function to calculate anciennete
  const calculateAnciennete = (dateEntree) => {
    const currentDate = new Date(); // Current date
    const dateEntreeYear = new Date(dateEntree).getFullYear(); // Year of DateEntree
    const anciennete = currentDate.getFullYear() - dateEntreeYear; // Calculate anciennete
    return anciennete;
  };
  
  return (
    <TableContainer p="30px" marginTop="200px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th onClick={() => handleColumnHeaderClick('matricule')}>
              Matricule
              {sortBy === 'matricule' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('nomPrenom')}>
              Nom & Prenom
              {sortBy === 'nomPrenom' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('codePoste')}>
              Poste de travail
              {sortBy === 'codePoste' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('echelon')}>
              Echelon
              {sortBy === 'echelon' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('dateEntree')}>
              Date d'Entrée
              {sortBy === 'dateEntree' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('etat')}>
              Etat
              {sortBy === 'etat' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchQuery && searchActive ? (
            // This block executes when you are searching
            searchEmploye.map((e) => (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.nom} {e.prenom}</Td>
                <Td>{getPosteDesignation(e.codePoste)}</Td>
                <Td>{e.echelon}</Td>
                <Td>{calculateAnciennete(e.dateEntree)} ans</Td>
                <Td style={{ backgroundColor: getEtatColor(e.etat) }}>{e.etat}</Td>
              </Tr>
            ))
          ) : filteredEmploye.length > 0 ? (
            // This block executes when you are filtering
            filteredEmploye.map((e) => (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.nom} {e.prenom}</Td>
                <Td>{getPosteDesignation(e.codePoste)}</Td>
                <Td>{e.echelon}</Td>
                <Td>{calculateAnciennete(e.dateEntree)} ans</Td>
                <Td style={{ backgroundColor: getEtatColor(e.etat) }}>{e.etat}</Td>
              </Tr>
            ))
          ) : (
            // This block executes when you are neither searching nor filtering
            employe.map((e) => (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.nom} {e.prenom}</Td>
                <Td>{getPosteDesignation(e.codePoste)}</Td>
                <Td>{e.echelon}</Td>
                <Td>{calculateAnciennete(e.dateEntree)} ans</Td>
                <Td style={{ backgroundColor: getEtatColor(e.etat) }}>{e.etat}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
  
}
