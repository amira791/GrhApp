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
  const [data,setData] = useState({
    id: {
      code: '',
      matricule: '',
      dateDebut: '',
      dateFin: ''
    },
    nbAbsence: 0,
    autorisee: 'F'
  })
 

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
              <Th>Matricule</Th>
              <Th>Date de debut</Th>
              <Th>Date de fin</Th>
              <Th>Nombre d absences</Th>
              <Th>Motif d absence</Th>
              <Th>Autorisee</Th>
            </Tr>
          </Thead>
          <Tbody>
          {absences.map((r, index) => (
            <Tr  key={index} onClick={() => handleRowClick(r)} style={{ cursor: 'pointer' }}>
                  <Td>{r.id.matricule}</Td>
                  <Td>{ new Date(r.id.dateDebut).toLocaleDateString()}</Td>
                  <Td>{ new Date(r.id.dateFin).toLocaleDateString()}</Td>
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
