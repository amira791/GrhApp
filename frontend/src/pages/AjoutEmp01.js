import React from 'react';
import Stepper from '../components/Stepper01';
import { Input, Stack, Flex , Select} from '@chakra-ui/react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'


function AjoutEmp01 () {
  // Define state variables for your form fields
  const [formData, setFormData] = React.useState({
    nom: '',
    prenom: '',
    NomJeuneFille: '',
    DateNaissance: '',
    LieuNaissance: '',
    Nationalite: '',
    // Add more state variables as needed
  });
  const SituationFamiliale = [
    { value: "Marié", label: "Marié" },
    { value: "pacsé", label: "Pacsé" },
    { value: "Divorcé", label: "Divorcé" },
    { value: "Séparé", label: "Séparé" },
    { value: "Célibataire", label: "Célibataire" },
    { value: "Veuf", label: "Veuf"},
  ];
  const Sexe = [
    { value: "Féminin", label: "Féminin" },
    { value: "Masculin", label: "Masculin" },
   
  ];

  // Define a function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Stepper /> {/* Include your existing Stepper component here */}
      <form>
        {/* Level 1 */}
        <div>
        <Stack spacing={20} marginTop="3rem">
  <Flex direction="row" marginX={20}>
    <Input placeholder='Nom' size='md' marginRight={4} />
    <Input placeholder='Prenom' size='md' marginRight={4} />
    <Input placeholder='NomJeuneFille' size='md' />
  </Flex>
  <Flex direction="row" marginX={20}>
    <Input placeholder="Date Naissance" size="md" type="date" marginRight={4} />
    <Input placeholder='Lieu Naissance' size='md' marginRight={4} />
    <Input placeholder='Nationalite' size='md' />
  </Flex>
  <Flex direction="row" marginX={20}>
    <Select
      placeholder="Situation Familiale.."
      size="md" marginRight={4}
      name="SituationFamiliale"
      value={formData.SituationFamiliale}
      onChange={handleInputChange}
      maxW="31rem"

    >
      {SituationFamiliale.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
    <Select
      placeholder="Sexe.."
      size="md" marginRight={4}
      name="Sexe"
      value={formData.Sexe}
      onChange={handleInputChange}
      maxW="32rem"
     
    >
      {Sexe.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
    <NumberInput size="md">
      <NumberInputField placeholder="NbEnfants" />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Flex>
  <Flex direction="row" marginX={20}>
    <Input placeholder='NSS' size='md' marginRight={4}  maxW="33rem" />
    <Input placeholder='Caisse CNAS' size='md' marginRight={4}  maxW="60rem" />
    <Input placeholder='Adr' size='md' marginRight={4}  />
  </Flex>
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ButtonGroup variant='outline' spacing='6' marginX={20}>
        <Button>Cancel</Button>
        <Button colorScheme='blue'Next variant='outline' _hover={{ color: 'white', bg: 'blue' }}>Next</Button>
      </ButtonGroup>
    </div>
  
</Stack>

        </div>

    
      </form>
    </div>
  );
}
export default AjoutEmp01;
