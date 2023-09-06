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


export default function AbsencesTable({ motif }) {

  const [code, setCode] = useState('');
  const [matricule, setMatricule] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [nbAbsence, setNbAbsence] = useState(0);
  const [autorisee, setAutorisee] = useState(false);
  


  const handleUpdate = async (event) => {

    event.preventDefault();

    const absence = {
      id: {
        code: code,
        matricule: matricule,
        dateDebut: dateDebut,
        dateFin: dateFin,
      },
      nbAbsence: nbAbsence,
      autorisee: autorisee ? 'T' : 'F'
    };

    console.log(absence);

    fetch('http://localhost:8089/Absences/update', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(absence),
    })
      .then(() => { console.log('new absence added') })

  }

  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowClick = (row) => {
    setSelectedRow(row);
    onOpen();
  };
  useEffect(() => {
    if (selectedRow) {
      setCode(selectedRow.code);
      setMatricule(selectedRow.matricule);
      setDateDebut(selectedRow.dateDebut);
      setDateFin(selectedRow.dateFin);
      setNbAbsence(selectedRow.nbAbsence);
      setAutorisee(selectedRow.autorisee);
    }
  }, [selectedRow]);


  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [rows, setRows] = useState([]);

  useEffect(() => {

    fetch('http://localhost:8089/Absences/all')
      .then((response) => response.json())
      .then((result) => {
        setRows(result);
        console.log(rows);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array [] means this effect will run once when the component mounts

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
    const sortedRows = rows.slice().sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setRows(sortedRows);
  };

  return (
    <>
      <TableContainer p="30px">
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th onClick={() => handleColumnHeaderClick('Matricule')}>
                Matricule
                {sortBy === 'matricule' && (
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
              {/* <Th>Actions</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((r, index) => (
                <Tr  key={index} onClick={() => handleRowClick(r)} style={{ cursor: 'pointer' }}>
                  <Td>{r.id.matricule}</Td>
                  <Td>{new Date(r.id.dateDebut).toLocaleDateString()}</Td>
                  <Td>{new Date(r.id.dateDebut).toLocaleDateString()}</Td>
                  <Td>{r.nbAbsence}</Td>
                  <Td>{motif.filter((m) => m.id === r.id.code)[0].libelle}</Td>
                  <Td><Badge ml='1' fontSize='0.8em' colorScheme={r.autorisee === 'T' ? 'green' : 'red'}>
                    {r.autorisee === 'T' ? 'Oui' : 'Non'}
                  </Badge></Td>
                </Tr>
            ))}


          </Tbody>
        </Table>
      </TableContainer>
      {selectedRow &&
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
                <Form onSubmit={handleUpdate}>
                  <FormControl>
                    <FormLabel>Motif d'absence</FormLabel>
                    <Select
                      defaultValue={selectedRow.code}
                      value={code}
                      onSelect={(e) => setCode(e.target.key)}
                      placeholder='Selectionnez un motif'>
                      {motif.map((m) => (
                        <option de key={m.id}>{m.libele}</option>
                      ))

                      }
                    </Select>
                  </FormControl>

                  <FormControl isRequired >
                    <FormLabel>Matricule</FormLabel>
                    <Input
                      defaultValue={selectedRow.matricule}
                      value={matricule}
                      onChange={(e) => setMatricule(e.target.value)}
                      name='matricule'
                      type="text" />
                    <FormHelperText>Saisir le matricule de l'employe</FormHelperText>
                  </FormControl>
                  <FormControl isRequired >
                    <FormLabel>Date de debut</FormLabel>
                    <Input
                      defaultValue={selectedRow.dateDebut}
                      value={dateDebut}
                      onChange={(e) => setDateDebut(e.target.value)}
                      name='dateDebut'
                      type="date" />
                  </FormControl>
                  <FormControl isRequired >
                    <FormLabel>Date de fin</FormLabel>
                    <Input
                      defaultValue={selectedRow.dateFin}
                      value={dateFin}
                      onChange={(e) => setDateFin(e.target.value)}
                      name='dateFin'
                      type="date" />
                  </FormControl>
                  <FormControl isRequired >
                    <FormLabel>Nombre d'absences </FormLabel>
                    <NumberInput
                      defaultValue={selectedRow.nbAbsence}
                      value={nbAbsence}
                      onChange={(valueString) => setNbAbsence(parseInt(valueString))}
                      name='nbAbsence'
                      max={50} min={0}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                  <FormControl mt="10px" me="5px" >
                    <Checkbox 
                      defaultChecked={autorisee}
                      colorScheme="teal"
                      name='autorisee'
                      isChecked={autorisee}
                      onChange={(e) => setAutorisee(e.target.checked)}
                    >Absence Autorisee</Checkbox>
                  </FormControl>
                  <HStack gap="10px" justifyContent="flex-end">
                    <Button onClick={onClose}>Cancel</Button>
                    <Button colorScheme="teal" type="submit">Submit</Button>
                  </HStack>
                </Form>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      }


    </>
  );
}
