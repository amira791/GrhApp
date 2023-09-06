import React from 'react';
import Stepper from '../components/Stepper01';
import { Input, Stack, Flex, Select } from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

function AjoutEmp01() {
  const [jsonData, setJsonData] = React.useState('');
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
    { value: "Veuf", label: "Veuf" },
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

    // Convert the updated form data to JSON and set it in the state
    const dataInJsonFormat = JSON.stringify(
      { ...formData, [name]: value },
      null,
      2
    );
    setJsonData(dataInJsonFormat);
  };

 
    const handleNextClick = () => {
        const dataInJsonFormat = JSON.stringify(formData, null, 2);
        setJsonData(dataInJsonFormat);
        // If you want to download it as a .json file
        const blob = new Blob([dataInJsonFormat], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'formData.json';
        link.click();
      };


  return (
    <div>
      <Stepper /> {/* Include your existing Stepper component here */}
      <form>
        {/* Level 1 */}
        <div>
          <Stack spacing={20} marginTop="3rem">
            <Flex direction="row" marginX={20}>
              <Input
                placeholder="Nom"
                size="md"
                marginRight={4}
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Prenom"
                size="md"
                marginRight={4}
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
              />
              <Input
                placeholder="NomJeuneFille"
                size="md"
                name="NomJeuneFille"
                value={formData.NomJeuneFille}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <Input
                placeholder="Date Naissance"
                size="md"
                type="date"
                marginRight={4}
                name="DateNaissance"
                value={formData.DateNaissance}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Lieu Naissance"
                size="md"
                marginRight={4}
                name="LieuNaissance"
                value={formData.LieuNaissance}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Nationalite"
                size="md"
                name="Nationalite"
                value={formData.Nationalite}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <Select
                placeholder="Situation Familiale.."
                size="md"
                marginRight={4}
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
                size="md"
                marginRight={4}
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
                <NumberInputField
                  placeholder="NbEnfants"
                  name="NbEnfants"
                  value={formData.NbEnfants}
                  onChange={handleInputChange}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Flex direction="row" marginX={20}>
              <Input
                placeholder="NSS"
                size="md"
                marginRight={4}
                maxW="33rem"
                name="NSS"
                value={formData.NSS}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Caisse CNAS"
                size="md"
                marginRight={4}
                maxW="60rem"
                name="CaisseCNAS"
                value={formData.CaisseCNAS}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Adr"
                size="md"
                marginRight={4}
                name="Adr"
                value={formData.Adr}
                onChange={handleInputChange}
              />
            </Flex>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ButtonGroup variant="outline" spacing="6" marginX={20}>
                <Button>Cancel</Button>
                <Button
                  colorScheme="blue"
                  onClick={handleNextClick}
                  variant="outline"
                  _hover={{ color: 'white', bg: 'blue' }}
                >
                  Next
                </Button>
              </ButtonGroup>
            </div>
          </Stack>
        </div>
      </form>
   
    </div>
  );
}
export default AjoutEmp01;
