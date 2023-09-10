import { PhoneIcon } from '@chakra-ui/icons'; // Import PhoneIcon
import { Button, ButtonGroup, Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { useState } from 'react';
// components
import Stepper from './ui/Stepper04';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation, location } from 'react-router-dom';

function AjoutEmp04() {

  const location = useLocation(); // Use useLocation to access the location object
  const formDataFromPrevStep = location.state?.formData; // Access formData from the previous step (AjoutEmp03)
  const [jsonData, setJsonData] = useState('');
  const [formData, setFormData] = useState(formDataFromPrevStep || {});

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
    // Perform any final operations with formData before sending it to the server

    // Example: Sending formData to the server
    fetch('http://localhost:8089/Employe/CreateEmploye', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server as needed
        console.log('Employe created:', data);

        // You can navigate to a success page or perform other actions here
      })
      .catch((error) => {
        console.error('Error creating Employe:', error);
        // Handle errors as needed
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
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='Num de telephoner' marginRight={4}
                name="numTelephon"
                value={formData.numTelephonl}
                onChange={handleInputChange} />
                 </InputGroup>
              <Input
                placeholder="Groupe Sanguin"
                size="md"
                marginRight={4}
                name="groupeSanguin"
                value={formData.groupeSanguin}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Situation Mulitaire"
                size="md"
                name="situationMulitaire"
                value={formData.situationMulitaire}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
            <Input
                placeholder="Num Carte Natioanle"
                size="md"
                marginRight={4}
                maxW="30rem"
                name="numCN"
                value={formData.numCN}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Date de delivrance"
                size="md"
                type="date"
                marginRight={4}
                // name="DateDelivrance"
                // value={formData.DateDelivrance}
                // onChange={handleInputChange}
              />
              <Input
                placeholder="Lieu de delivrance"
                size="md"
                // name="LieuDelivrance"
                // value={formData.LieuDelivrance}
                // onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
            <Input
                placeholder="nomJeuneFille"
                size="md"
                marginRight={4}
                maxW="30rem"
                name="nomJeuneFille"
                value={formData.nomJeuneFille}
                onChange={handleInputChange}
              />
               <Input
                placeholder="Adr"
                size="md"
                marginRight={4}
                maxW="30rem"
                name="adr"
                value={formData.adr}
                onChange={handleInputChange}
              />
   
            </Flex>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ButtonGroup variant="outline" spacing="6" marginX={20}>
              <NavLink to="/main/employes" activeClassName="active">
                <Button>Cancel</Button>
                </NavLink>
                <NavLink to="/main/AjoutEmp03" activeClassName="active">
                <Button>Previous</Button>
                </NavLink>
                <NavLink to="/main/employes" activeClassName="active">
                <Button
                  colorScheme="teal"
                  onClick={handleNextClick}
                  variant="outline"
                  _hover={{ color: 'white', bg: 'teal' }}
                >
                 DONE
                </Button>
                </NavLink>
              </ButtonGroup>
            </div>
          </Stack>
        </div>
      </form>
   
    </div>
  );
}
export default AjoutEmp04;
