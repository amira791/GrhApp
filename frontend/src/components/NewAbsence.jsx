import {
  Box, Button, Checkbox,
  FormControl, FormHelperText, FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput, NumberInputField, NumberInputStepper,
  Select
} from '@chakra-ui/react';
import { useState } from 'react';
import { Form } from 'react-router-dom';
  
  
  export default function NewAbsence({ onClose, motif }) {
  
  
    const [code, setCode] = useState('');
    const [matricule, setMatricule] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [nbAbsence, setNbAbsence] = useState(0);
    const [autorisee, setAutorisee] = useState(false);
  
    const handleSubmit = async (event) => {
  
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
  
      fetch('http://localhost:8089/Absences/new', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(absence),
      })
        .then(() => { console.log('new absence added') })
  
    }
  
    return (
      <Box  maxW="100vh">
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Motif d'absence</FormLabel>
            <Select
              onChange={(e) => {
                setCode(e.target.value);}} 
              placeholder='Selectionnez un motif'>
              {motif.map((m) => (
                <option key={m.index} value={m.id}>{m.libelle}</option>
              ))}
            </Select>
          </FormControl>
  
          <FormControl isRequired >
            <FormLabel>Matricule</FormLabel>
            <Input
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
              name='matricule'
              type="text" />
            <FormHelperText>Saisir le matricule de l'employe</FormHelperText>
          </FormControl>
          <FormControl isRequired >
            <FormLabel>Date de debut</FormLabel>
            <Input
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
              name='dateDebut'
              type="date" />
          </FormControl>
          <FormControl isRequired >
            <FormLabel>Date de fin</FormLabel>
            <Input
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}
              name='dateFin'
              type="date" />
          </FormControl>
          <FormControl isRequired >
            <FormLabel>Nombre d'absences </FormLabel>
            <NumberInput
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
            <Checkbox colorScheme="teal"
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
    )
  }
  
  
  