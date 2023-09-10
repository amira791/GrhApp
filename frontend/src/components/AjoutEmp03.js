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
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

// components 
import Stepper from './ui/Stepper03';


function AjoutEmp03() {

  const [jsonData, setJsonData] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const formDataFromPrevStep = location.state?.formData;

  const [formData, setFormData] = useState(formDataFromPrevStep);

  const Categorie = [
    { value: "01", label: "Ingenieur" },
    { value: "02", label: "SousTraitance" },
    { value: "03", label: "Consultant" },
    { value: "04", label: "Analyste" },
  ];

  const calculerSalaireBase = () => {
    // Modify this calculation logic based on your requirements
    const echelon = parseFloat(formData.echelon);
    const iep = parseFloat(formData.tauxIEP);
    const salaireBaseCalcule = echelon + iep + 10000;
    setFormData({
      ...formData,
      salBas: salaireBaseCalcule.toString(),
    });
  };
  useEffect(() => {
    calculerSalaireBase();
  }, [formData.Categorie, formData.echelon, formData.tauxIEP]);

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
    // console.log('formData before navigation:', formData);
    // console.log('Path:', '/main/AjoutEmp03');
    // console.log('location.state before navigation:', location.state);
  

      const dataInJsonFormat = JSON.stringify(formData, null, 2);
      setJsonData(dataInJsonFormat);
    
      // Use navigate function to go to the next route
      console.log('formData before navigation:', formData); // Check the formData
      navigate('/main/AjoutEmp04', { state: { formData } });

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
                name="modePaiement"
                value={formData.modePaiement}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Mode de reglement"
                size="md"
                marginRight={4}
                // name="ModeReglement"
                // value={formData.ModeReglement}
                // onChange={handleInputChange}
              />
              <Select
                placeholder="Categorie.."
                size="md"
                marginRight={4}
                name="categorie"
                value={formData.categorie}
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
                name="CodeAgence"
                marginRight={4}
                value={formData.CodeAgence}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Code RIB/IBAN"
                size="md"
                marginRight={4}
                name="codeRIB"
                value={formData.codeRIB}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Numero de compte"
                size="md"
                name="numCompte"
                value={formData.numCompte}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <Input
                placeholder="Echllon"
                size="md"
                name="echelon"
                marginRight={4}
                value={formData.ech}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Taux IEP"
                size="md"
                marginRight={4}
                name="tauxIEP"
                value={formData.tauxIEP}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Salaire de base"
                size="md"
                name="salBas"
                label= "Salaire de base"
                value={formData.salBas}
                readOnly
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <NumberInput size="md" marginRight={4}>
                <NumberInputField
                  placeholder="Nb annees dans le secteur"
                  w="500px"
                  // name="AnneeSecteur"
                  // value={formData.AnneeSecteur}
                  // onChange={handleInputChange}
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
                  // value={formData.AnneeHSecteur}
                  // onChange={handleInputChange}
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
                name="moiIEP"
                value={formData.moiIEP}
                onChange={handleInputChange}
              />
            </Flex>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ButtonGroup variant="outline" spacing="6" marginX={20}>
              <NavLink to="/main/employes" activeClassName="active">
                <Button>Cancel</Button>
              </NavLink>
              <NavLink to="/main/AjoutEmp02" activeClassName="active">
              <Button>Previous</Button>
              </NavLink>
              <Button
                  colorScheme="teal"
                  onClick={handleNextClick}
                  variant="outline"
                  _hover={{ color: 'white', bg: 'teal' }}
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
