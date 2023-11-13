import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
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
import StatusForm from '../forms/StatutForm';

export default function ({ status, searchQuery, searchActive, searchStatus }) {
  //const [employe, setEmploye] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortEchelon, setSortEchelon] = useState('asc');
  const [selectedFiltre, setSelectedFiltre] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
   
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [data,setData] = useState(null)
  const handleRowClick = (row) => {
      setData(row)
      onOpen();
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

  
  return (
    <TableContainer p="30px" marginTop="200px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th onClick={() => handleColumnHeaderClick('codeStatus')}>
              Code Status
              {sortBy === 'codeStatus' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('StatusDesignation')}>
              Status Designatin
              {sortBy === 'StatusDesignation' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
            <Th onClick={() => handleColumnHeaderClick('StatusDesignationAr')}>
            Status Designatin Ar
              {sortBy === 'StatusDesignationAr' && (
                sortEchelon === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
              )}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchQuery && searchActive ? (
            // This block executes when you are searching
            searchStatus.map((s) => (
              <Tr key={s.id}>
                <Td>{s.id}</Td>
                <Td>{s.statusDesignation}</Td>
                <Td> {s.statusDesignationAr}</Td>
              </Tr>
            ))
          ): (
            // This block executes when you are neither searching nor filtering
            status.map((s) => (
                <Tr key={s.id} onClick={() => handleRowClick(s)} style={{ cursor: 'pointer' }}>
                <Td>{s.id}</Td>
                <Td>{s.statusDesignation}</Td>
                <Td> {s.statusDesignationAr}</Td>
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
            <ModalHeader>Modifier Statut</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box maxW="100vh">
                <StatusForm initialData={data} forModification={true} onClose={onClose}/>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>

    </TableContainer>
  );
  
}
