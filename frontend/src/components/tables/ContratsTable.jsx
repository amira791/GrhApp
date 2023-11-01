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
import { useRef, useState ,useEffect } from 'react'
import useTableSort from '../../hooks/useTableSort';
import AbsenceForm from '../forms/AbsenceForm';
import ContratForm from '../forms/ContratForm';
import useTypesCntr from '../../hooks/useTypesCntr';

export default function ContratsTable({contrats}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const initialSortColumn = 'Matricule';
  const initialSortDirection = 'asc'; 
  const { sortBy, sortDirection, handleColumnHeaderClick } = useTableSort(
    contrats,
    initialSortColumn,
    initialSortDirection
  );

  const [data,setData] = useState(null)
  const {types , fetchAllTypes} = useTypesCntr()

  const handleRowClick = (row) => {
      setData(row)
      onOpen();
    };

    useEffect(() => {
        fetchAllTypes()
      }, []);

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
              <Th onClick={() => handleColumnHeaderClick('Numero')}>
                Numero
                {sortBy === 'Numero' && (
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
              <Th onClick={() => handleColumnHeaderClick('Duree')}>
                Duree
                {sortBy === 'Duree' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
              <Th onClick={() => handleColumnHeaderClick('Type')}>
                Type
                {sortBy === 'Type' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
              {/* <Th onClick={() => handleColumnHeaderClick('Motif')}>
                Motif 
                {sortBy === 'Motif' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th> */}
              
             
            </Tr>
          </Thead>
          <Tbody>
          {contrats.map((c, index) => (
            <Tr  key={index} onClick={() => handleRowClick(c)} style={{ cursor: 'pointer' }}>
                  <Td>{c.emplTemp?.matricule || "matricule"}</Td>
                  <Td>{c.id}</Td>
                  <Td>{new Date(c.dateDebut).toLocaleDateString()}</Td>
                  <Td>{new Date(c.dateFin).toLocaleDateString()}</Td>
                  <Td>{c.duree} mois</Td>
                  <Td>{c.type }</Td>
                  {/* <Td>{motifs.find((m) => m.id === c.motif)?.libelle || "No matching libelle"}</Td> */}
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
            <ModalHeader>Modifier un contrat</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box maxW="100vh">
                <ContratForm initialData={data} forModification={true} onClose={onClose}/>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      


    </>
  );
}
