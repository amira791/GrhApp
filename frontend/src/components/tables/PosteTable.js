import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function ({ unite, searchQuery, searchActive, searchUnite }) {
  //const [employe, setEmploye] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortEchelon, setSortEchelon] = useState('asc');
  const [selectedFiltre, setSelectedFiltre] = useState("");
  const [selectedValue, setSelectedValue] = useState("");


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

  
  return (
    <TableContainer p="30px" marginTop="200px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th onClick={() => handleColumnHeaderClick('codeUnite')}>
              Code Unite
              {sortBy === 'codeUnite' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('unite')}>
              Unite
              {sortBy === 'unite' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('UniteAr')}>
              Unite Ar
              {sortBy === 'UniteAr' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchQuery && searchActive ? (
            // This block executes when you are searching
            searchUnite.map((u) => (
              <Tr key={u.id}>
                <Td>{u.id}</Td>
                <Td>{u.uniteDesignation}</Td>
                <Td> {u.uniteDesignationAr}</Td>
              </Tr>
            ))
          ): (
            // This block executes when you are neither searching nor filtering
            unite.map((u) => (
                <Tr key={u.id}>
                <Td>{u.id}</Td>
                <Td>{u.uniteDesignation}</Td>
                <Td> {u.uniteDesignationAr}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
  
}
