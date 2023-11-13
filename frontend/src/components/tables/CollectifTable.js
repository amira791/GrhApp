import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useTableSort from '../../hooks/useTableSort';
import CollectifForm from '../forms/CollectifForm';
import {
  Badge,
  Box,
  Modal,
  ModalBody, ModalCloseButton,
  ModalContent, ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { useRef} from 'react';

export default function ({ collectif, searchQuery, filtredCollectif, searchActive, searchCollectif }) {
  //const [employe, setEmploye] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortEchelon, setSortEchelon] = useState('asc');
  const [selectedFiltre, setSelectedFiltre] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const [data,setData] = useState(null)
  const handleRowClick = (row) => {
      setData(row)
      onOpen();
    };

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)



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
            <Th onClick={() => handleColumnHeaderClick('codeCollectif')}>
              Code Collectif
              {sortBy === 'codeCollectif' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('collectif')}>
              Collectif Designation
              {sortBy === 'collectif' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('CollectifAr')}>
            Collectif Designation Ar
              {sortBy === 'CollectifAr' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchQuery && searchActive ? (
            // This block executes when you are searching
            searchCollectif.map((c) => (
              <Tr key={c.id}>
                <Td>{c.id}</Td>
                <Td>{c.collectifDesignation}</Td>
                <Td> {c.collectifDesignationAr}</Td>
              </Tr>
            ))
          ): (
            // This block executes when you are neither searching nor filtering
            collectif.map((c) => (
                <Tr key={c.id} onClick={() => handleRowClick(c)} style={{ cursor: 'pointer' }}>
                <Td>{c.id}</Td>
                <Td>{c.collectifDesignation}</Td>
                <Td> {c.collectifDesignationAr}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modifier collectif</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box maxW="100vh">
                <CollectifForm initialData={data} forModification={true} onClose={onClose}/>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      


   
    </TableContainer>
    
  );
  
}
