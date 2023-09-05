import React from 'react';
import Stepper from '../components/Stepper02';
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
    NiveauEtude: '',
    Diplome: '',
    DateEntree: '',
    DateSortie: '',
    Collectif: '',
    Unite: '',
    Status: '',
    Categorie: '',
    PosteTravail: '',
    // Add more state variables as needed
  });
  const NieauEtude = [
    { value: "Bac", label: "Bac" },
    { value: "Bac + 2", label: "Bac + 2" },
    { value: "Bac + 3", label: "Bac + 3" },
    { value: "Bac + 4", label: "Bac + 4" },
  ];
  const Collectif = [
    { value: "Siege", label: "Siege" },
    { value: "Antenne Local", label: "Antenne Local" },
  ];
  const Unite = [
    { value: "Bac", label: "Bac" },
    { value: "Bac + 2", label: "Bac + 2" },
    { value: "Bac + 3", label: "Bac + 3" },
    { value: "Bac + 4", label: "Bac + 4" },
  ];
  const Structure = [
    { value: "Bac", label: "Bac" },
    { value: "Bac + 2", label: "Bac + 2" },
    { value: "Bac + 3", label: "Bac + 3" },
    { value: "Bac + 4", label: "Bac + 4" },
  ];
  const Status = [
    { value: "APR", label: "APR" },
    { value: "CDD", label: "CDD" },
    { value: "CDI", label: "CDI" },
    { value: "CDI/P", label: "CDI/P" },
    { value: "DEC", label: "DEC" },
  ];
  const Categorie = [
    { value: "Bac", label: "Bac" },
    { value: "Bac + 2", label: "Bac + 2" },
    { value: "Bac + 3", label: "Bac + 3" },
    { value: "Bac + 4", label: "Bac + 4" },
  ];
  const PosteTravail = [
    { value: "Bac", label: "Bac" },
    { value: "Bac + 2", label: "Bac + 2" },
    { value: "Bac + 3", label: "Bac + 3" },
    { value: "Bac + 4", label: "Bac + 4" },
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
            <Select
                placeholder="Niveau Etude.."
                size="md"
                marginRight={4}
                name="NieauEtude"
                value={formData.NieauEtude}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {NieauEtude.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Input
                placeholder="Diplome"
                size="md"
                maxW="31rem"
                name="NomJeuneFille"
                value={formData.NomJeuneFille}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
           
              <Input
                placeholder="Date Entree"
                size="md"
                type="date"
                maxW="31rem"
                marginRight={4}
                name="DateEntree"
                value={formData.DateEntree}
                onChange={handleInputChange}
              />
                 
              <Input
                placeholder="Date Sortie"
                size="md"
                maxW="31rem"
                type="date"
                marginRight={4}
                name="DateSortie"
                value={formData.DateSortie}
                onChange={handleInputChange}
              />

            </Flex>
            <Flex direction="row" marginX={20}>
            <Select
                placeholder="Collectif.."
                size="md"
                marginRight={4}
                name="Collectif"
                value={formData.Collectif}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {Collectif.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Unite.."
                size="md"
                marginRight={4}
                name="Unite"
                value={formData.Unite}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {Unite.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Structure.."
                size="md"
                marginRight={4}
                name="NieauEtude"
                value={formData.NieauEtude}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {NieauEtude.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex direction="row" marginX={20}>
            <Select
                placeholder="Status.."
                size="md"
                marginRight={4}
                name="Status"
                value={formData.Status}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {Status.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Categorie.."
                size="md"
                marginRight={4}
                name="Unite"
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
              <Select
                placeholder="Poste de travail.."
                size="md"
                marginRight={4}
                name="PosteTravail"
                value={formData.PosteTravail}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {PosteTravail.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
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
