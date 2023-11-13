import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useTableSort from '../../hooks/useTableSort';
import StructureForm from '../forms/StructureForm';
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

export default function ({ structure, searchQuery, filtredStructure, searchActive, searchStructure }) {
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
            <Th onClick={() => handleColumnHeaderClick('codeStructure')}>
              Code Structure
              {sortBy === 'codeStructure' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('structure')}>
            Structure Designation
              {sortBy === 'structure' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('type')}>
             Type Structure 
              {sortBy === 'type' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('StructureeAr')}>
            Structure Designation Ar
              {sortBy === 'StructureAr' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchQuery && searchActive ? (
            // This block executes when you are searching
            searchStructure.map((s) => (
              <Tr key={s.id}>
                <Td>{s.id}</Td>
                <Td>{s.structureDesignation}</Td>
                <Td>{s.typeStructure}</Td>
                <Td>{s.structureDesignationAr}</Td>
              </Tr>
            ))
          ): (
            // This block executes when you are neither searching nor filtering
            structure.map((s) => (
                <Tr key={s.id} onClick={() => handleRowClick(s)} style={{ cursor: 'pointer' }}>
                <Td>{s.id}</Td>
                <Td>{s.structureDesignation}</Td>
                <Td>{s.typeStructure}</Td>
                <Td>{s.structureDesignationAr}</Td>
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
            <ModalHeader>Modifier structure</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box maxW="100vh">
                <StructureForm initialData={data} forModification={true} onClose={onClose}/>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      


   
    </TableContainer>
    
  );
  
}
