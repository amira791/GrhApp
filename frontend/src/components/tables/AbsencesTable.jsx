import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Modal,
  ModalBody, ModalCloseButton,
  ModalContent, ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import useTableSort from '../../hooks/useTableSort';
import AbsenceForm from '../forms/AbsenceForm';

export default function AbsencesTable({absences , motifs }) {
  const initialSortColumn = 'Matricule';
  const initialSortDirection = 'asc'; 
  const { sortBy, sortDirection, handleColumnHeaderClick } = useTableSort(
    absences,
    initialSortColumn,
    initialSortDirection
  );

  const [data,setData] = useState(null)

  const handleRowClick = (row) => {
      setData(row)
      onOpen();
    };

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  
  return (
    <>
      <TableContainer p="30px" overflow="auto">
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th onClick={() => handleColumnHeaderClick('Matricule')}>
                Matricule
                {sortBy === 'Matricule' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
              <Th onClick={() => handleColumnHeaderClick('Date de debut')}>
                Date de debut
                {sortBy === 'Date de debut' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
              <Th onClick={() => handleColumnHeaderClick('Date de fin')}>
                Date de fin
                {sortBy === 'Date de fin' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
              <Th onClick={() => handleColumnHeaderClick('Nombre d absences')}>
                Nombre d absences
                {sortBy === 'Nombre d absences' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
              <Th onClick={() => handleColumnHeaderClick('Motif d absence')}>
                Motif d absence
                {sortBy === 'Motif d absence' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
              <Th onClick={() => handleColumnHeaderClick('Autorisee')}>
                Autorisee
                {sortBy === 'Autorisee' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
             
            </Tr>
          </Thead>
          <Tbody>
          {absences.map((r, index) => (
            <Tr  key={index} onClick={() => handleRowClick(r)} style={{ cursor: 'pointer' }}>
                  <Td>{r.id.matricule}</Td>
                  <Td>{new Date(r.id.dateDebut).toLocaleDateString()}</Td>
                  <Td>{new Date(r.id.dateFin).toLocaleDateString()}</Td>
                  <Td>{r.nbAbsence}</Td>
                  <Td>{motifs?.find((m) => m.id === r.id.code)?.libelle || "No matching libelle"}</Td>
                  <Td><Badge ml='1' fontSize='0.8em' colorScheme={r.autorisee === 'T' ? 'green' : 'red'}>
                    {r.autorisee === 'T' ? 'Oui' : 'Non'}
                  </Badge></Td>
                </Tr>
            ))}


          </Tbody>
        </Table>
      </TableContainer>

    
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modifier une absence</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box maxW="100vh">
                <AbsenceForm initialData={data} forModification={true} onClose={onClose}/>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      


    </>
  );
}
