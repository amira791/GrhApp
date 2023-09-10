import { 
  Input, Stack, Flex, Select,
  Button, ButtonGroup
 } from '@chakra-ui/react'; 
 import { useState } from 'react';
// components 
import Stepper from './ui/Stepper02';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function AjoutEmp02() {
  const [jsonData, setJsonData] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const formDataFromPrevStep = location.state?.formData;

  const [formData, setFormData] = useState(formDataFromPrevStep);
  
  const NieauEtude = [
    { value: "01", label: "Bac" },
    { value: "02", label: "Bac + 2" },
    { value: "03", label: "Bac + 3" },
    { value: "04", label: "Bac + 4" },
  ];
  const Collectif = [
    { value: "01", label: "Siege" },
    { value: "02", label: "Antenne Local" },
  ];
  const Unite = [
    { value: "", label: "Unite.." },
    { value: "01", label: "ADRAR" },
    { value: "02", label: "CHLEF" },
    { value: "03", label: "LAGHOUAT" },
    { value: "04", label: "OUM E -BOUAGHI" },
    { value: "05", label: "BATNA" },
    { value: "06", label: "BISKRA" },
    { value: "07", label: "BECHAR" },
    { value: "08", label: "BLIDA" },
    { value: "09", label: "BOUIRA" },
    { value: "10", label: "TAMANRASSET" },
    { value: "11", label: "TEBESSA" },
    { value: "12", label: "TLEMCEN" },
    { value: "13", label: "TIARET" }, 
    ];
  const Structure = [
    { value: "", label: "Structure.." },
    { value: "01", label: "S.D.DE LA PUBLICATION" },
    { value: "02", label: "BUREAU BOAL LANGUE NATION" },
    { value: "03", label: "BUREAU BOAL LANGUE FRANCE" },
    { value: "04", label: "BUREAU DIFFUSION" },
    { value: "05", label: "BUREAU TRADUCTION" },
  ];
  const Status = [
    { value: "APR", label: "APR" },
    { value: "CDD", label: "CDD" },
    { value: "CDI", label: "CDI" },
    { value: "CDI/P", label: "CDI/P" },
    { value: "DEC", label: "DEC" },
  ];
  const TypeStructure = [
    { value: "01", label: "Direction" },
    { value: "02", label: "Gestion" },
    { value: "03", label: "Deroulment" },
    { value: "04", label: "Versement" },
  ];
  const PosteTravail = [
    { value: "", label: "PosteTravail.." },
    { value: "01", label: " Ingenieur" },
    { value: "02", label: "Agent Securite" },
    { value: "03", label: "DGRH" },
    { value: "04", label: "Agent Protection" },
    { value: "05", label: "Financier" },
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
    // console.log('formData before navigation:', formData);
    // console.log('Path:', '/main/AjoutEmp03');
    // console.log('location.state before navigation:', location.state);
  

      const dataInJsonFormat = JSON.stringify(formData, null, 2);
      setJsonData(dataInJsonFormat);
    
      // Use navigate function to go to the next route
      console.log('formData before navigation:', formData); // Check the formData
      navigate('/main/AjoutEmp03', { state: { formData } });

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
                name="nieauEtude"
                value={formData.nieauEtude}
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
                name="diplome"
                value={formData.diplome}
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
                name="dateEntree"
                value={formData.dateEntree}
                onChange={handleInputChange}
              />
                 
              <Input
                placeholder="Date Sortie"
                size="md"
                maxW="31rem"
                type="date"
                marginRight={4}
                name="dateSortie"
                value={formData.dateSortie}
                onChange={handleInputChange}
              />

            </Flex>
            <Flex direction="row" marginX={20}>
            <Select
                placeholder="Collectif.."
                size="md"
                marginRight={4}
                name="codeCollectif"
                value={formData.codeCollectif}
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
                name="codeUnite"
                value={formData.codeUnite}
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
                name="codeStructure"
                value={formData.codeStructure}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {Structure.map((option) => (
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
                name="codeStatus"
                value={formData.codeStatus}
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
                placeholder="Type Structure.."
                size="md"
                marginRight={4}
                name="codeTypeStructure"
                value={formData.codeTypeStructure}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {TypeStructure.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Poste de travail.."
                size="md"
                marginRight={4}
                name="codePoste"
                value={formData.codePoste}
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
              <NavLink to="/main/employes" activeClassName="active">
                <Button>Cancel</Button>
               </NavLink>
                <NavLink to="/main/AjoutEmp01" activeClassName="active">
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
export default AjoutEmp02;
