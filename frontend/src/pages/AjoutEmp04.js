import React from 'react';
import Stepper from '../components/Stepper04';
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
  import { Button, ButtonGroup, InputGroup, InputLeftElement } from '@chakra-ui/react'; // Import InputGroup and InputLeftElement
  import { PhoneIcon } from '@chakra-ui/icons'; // Import PhoneIcon



function AjoutEmp04() {
  const [jsonData, setJsonData] = React.useState('');
  const [formData, setFormData] = React.useState({
    NumTel: '',
    GroupeSanguin: '',
    SituationMulitaire: '',
    NumNational: '',
    DateDelivrance: '',
    LieuDelivrance: '',
    // Add more state variables as needed
  });


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
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='Num de telephoner' marginRight={4}
                name="NumTel"
                value={formData.NumTel}
                onChange={handleInputChange} />
                 </InputGroup>
              <Input
                placeholder="Groupe Sanguin"
                size="md"
                marginRight={4}
                name="GroupeSanguin"
                value={formData.GroupeSanguin}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Situation Mulitaire"
                size="md"
                name="SituationMulitaire"
                value={formData.SituationMulitaire}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
            <Input
                placeholder="Num Carte Natioanle"
                size="md"
                marginRight={4}
                maxW="30rem"
                name="NumNational"
                value={formData.NumNational}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Date de delivrance"
                size="md"
                type="date"
                marginRight={4}
                name="DateDelivrance"
                value={formData.DateDelivrance}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Lieu de delivrance"
                size="md"
                name="LieuDelivrance"
                value={formData.LieuDelivrance}
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
export default AjoutEmp04;
