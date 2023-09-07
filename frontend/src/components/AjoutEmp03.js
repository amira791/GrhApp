import  { useState, useEffect } from 'react';

import {
  Button, ButtonGroup,
  Input, Stack, Flex, Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';


// components 
import Stepper from './ui/Stepper03';


function AjoutEmp03() {
  const [jsonData, setJsonData] = useState('');
  const [formData, setFormData] = useState({
    ModePaiement: '',
    ModeReglement: '',
    Categorie: '',
    AgenceVirement: '',
    CodeRibIban: '',
    NumCompte: '',
    Ech: '',
    IEP: '',
    SalaireBase: '',
    AnneeSecteur: '',
    AnneeHSecteur: '',
    MajIep: '',
    // Add more state variables as needed
  });

  const Categorie = [
    { value: "Marié", label: "Marié" },
    { value: "pacsé", label: "Pacsé" },
    { value: "Divorcé", label: "Divorcé" },
  ];

  const calculerSalaireBase = () => {
    const echelon = parseFloat(formData.Ech);
    const iep = parseFloat(formData.IEP);
    // Modify this calculation logic based on your requirements
    const salaireBaseCalcule = echelon + iep + 10000;
    setFormData({
      ...formData,
      SalaireBase: salaireBaseCalcule.toString(),
    });
  };

  useEffect(() => {
    calculerSalaireBase();
  }, [formData.Categorie, formData.Ech, formData.IEP]);

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
                placeholder="Mode de paiement"
                size="md"
                marginRight={4}
                name="ModePaiement"
                value={formData.ModePaiement}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Mode de reglement"
                size="md"
                marginRight={4}
                name="ModeReglement"
                value={formData.ModeReglement}
                onChange={handleInputChange}
              />
              <Select
                placeholder="Categorie.."
                size="md"
                marginRight={4}
                name="Categorie"
                value={formData.Categorie}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {Categorie.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex direction="row" marginX={20}>
              <Input
                placeholder="Agence de virement"
                size="md"
                name="AgenceVirement"
                marginRight={4}
                value={formData.AgenceVirement}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Code RIB/IBAN"
                size="md"
                marginRight={4}
                name="CodeRibIban"
                value={formData.CodeRibIban}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Numero de compte"
                size="md"
                name="NumCompte"
                value={formData.NumCompte}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <Input
                placeholder="Echllon"
                size="md"
                name="Ech"
                marginRight={4}
                value={formData.Ech}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Taux IEP"
                size="md"
                marginRight={4}
                name="IEP"
                value={formData.IEP}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Salaire de base"
                size="md"
                name="SalaireBase"
                label= "Salaire de base"
                value={formData.SalaireBase}
                readOnly
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <NumberInput size="md" marginRight={4}>
                <NumberInputField
                  placeholder="Nb annees dans le secteur"
                  w="500px"
                  name="AnneeSecteur"
                  value={formData.AnneeSecteur}
                  onChange={handleInputChange}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput size="md" marginRight={4}>
                <NumberInputField
                  placeholder="Nb annees hors le secteur"
                  name="AnneeHSecteur"
                  w="500px"
                  value={formData.AnneeHSecteur}
                  onChange={handleInputChange}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Input
                placeholder="Mois de MAJ IEP"
                size="md"
                maxW="33rem"
                name="MajIep"
                value={formData.MajIep}
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
export default AjoutEmp03;
