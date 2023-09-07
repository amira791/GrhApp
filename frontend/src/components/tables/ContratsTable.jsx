import { TriangleUpIcon, TriangleDownIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box, Button, Checkbox, Select,
  FormControl, FormHelperText, FormLabel,
  Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, HStack
  , Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
  Table, Thead, Tbody, Tr, Th, Td, TableContainer, Badge, useDisclosure
} from '@chakra-ui/react';
import { Form } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';

export default function ContratsTable() {

    const [rows, setRows] = useState([]);
    useEffect(() => {

        fetch('http://localhost:8089/Contrats/all')
          .then((response) => response.json())
          .then((result) => {
            setRows(result);
            console.log(rows);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []); // The empty array [] means this effect will run once when the component mounts
    

  return (
   <>
    <TableContainer p="30px">
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th onClick={() => handleColumnHeaderClick('Numero contrat')}>
                Numero contrat
                {sortBy === 'Numero contrat' && (
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

              <Th onClick={() => handleColumnHeaderClick('Matricule')}>
                Matricule
                {sortBy === 'Matricule' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>

              <Th onClick={() => handleColumnHeaderClick('Type')}>
                Type 
                {sortBy === 'Type' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>

              <Th onClick={() => handleColumnHeaderClick('Motif')}>
                Motif 
                {sortBy === 'Motif' && (
                  sortDirection === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />
                )}
              </Th>
             
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((r, index) => (
                <Tr  key={index} onClick={() => handleRowClick(r)} style={{ cursor: 'pointer' }}>
                  <Td>{r.id}</Td>
                  <Td>{new Date(r.id.dateDebut).toLocaleDateString()}</Td>
                  <Td>{new Date(r.id.dateFin).toLocaleDateString()}</Td>
                  <Td>{r.matricule}</Td>
                  <Td>{r.type}</Td>
                  <Td>{r.motif}</Td>
                </Tr>
            ))}


          </Tbody>
        </Table>
      </TableContainer>
   </>
  )
}
