import React, { useState } from 'react';
import {
  Input,
  Stack,
  Flex,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  ButtonGroup,
  FormControl
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

// components
import Stepper from './ui/Stepper01';

function AjoutEmp01() {
  const [jsonData, setJsonData] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    situationFamiliale: '',
    situationMulitaire: '',
    lieuNaissanceAr: '',
    refDecision: '',
    motifSortie: '',
    prenomAr: '',
    categorie: '',
    salBase: '',
    dateSortie: '',
    lieuNaissance: '',
    nomJeuneF: '',
    nomAr: '',
    numCompte: '',
    groupeSanguin: '',
    handicape: '',
    note: '',
    nss: '',
    modePaiement: '',
    echelon: '',
    numTelephone: '',
    numCN: '',
    nationalite: '',
    niveauEtude: '',
    sexe: '',
    etat: 'Actif',
    nom: '',
    prenom: '',
    categorie: '',
    codePoste: '',
    codeStatus: '',
    codeUnite: '',
    adr: '',
    codeAgence: '',
    codeStructure: '',
    dateEntree: '',
    dateNaissance: '',
    codeCollectif: '',
    adrAr: '',
    codeWilaya: '',
    nbEnfant: '',
    diplome: '',
    caisseCNAS: '',
    codeTypeStructure: '',
    codeRIB: '',
    codeIBAN: '',
    moiIEP: '',
    tauxIEP: '',
  });

  const SituationFamiliale = [
    { value: 'M', label: 'Marié' },
    { value: 'P', label: 'Pacsé' },
    { value: 'D', label: 'Divorcé' },
    { value: 'S', label: 'Séparé' },
    { value: 'C', label: 'Célibataire' },
    { value: 'V', label: 'Veuf' },
  ];

  const Sexe = [
    { value: 'F', label: 'Féminin' },
    { value: 'M', label: 'Masculin' },
  ];

  const Etat = [
    { value: 'Actif', label: 'Actif' },
    { value: 'FinFonction', label: 'FinFonction' },
    { value: 'MiseEnDispo', label: 'MiseEnDispo' },
    { value: 'Depart', label: 'Depart' },
  ];

  // Define a function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Convert the updated form data to JSON and set it in the state
    const dataInJsonFormat = JSON.stringify({ ...formData, [name]: value }, null, 2);
    setJsonData(dataInJsonFormat);
  };

  const handleNextClick = () => {
    const dataInJsonFormat = JSON.stringify(formData, null, 2);
    setJsonData(dataInJsonFormat);

    // Use navigate function to go to the next route
    navigate('/main/AjoutEmp02', { state: { formData } });
    console.log(formData);
  };

  return (
    <div>
      <Stepper /> {/* Include your existing Stepper component here */}
      <form>
        {/* Level 1 */}
        <div>
          <Stack spacing={20} marginTop="3rem">
            <Flex direction="row" marginX={20}>
            <FormControl isRequired >
              <Input isRequired
                placeholder="Matricule"
                size="md"
                marginRight={4}
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
              </FormControl>
              <Input required
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
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <Input
                placeholder="Date Naissance"
                size="md"
                type="date"
                marginRight={4}
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Lieu Naissance"
                size="md"
                marginRight={4}
                name="lieuNaissance"
                value={formData.lieuNaissance}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Nationalite"
                size="md"
                name="nationalite"
                value={formData.nationalite}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex direction="row" marginX={20}>
              <Select
                placeholder="Situation Familiale.."
                size="md"
                marginRight={4}
                name="situationFamiliale"
                value={formData.situationFamiliale}
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
                name="sexe"
                value={formData.sexe}
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
                  name="nbEnfant"
                  value={formData.nbEnfant}
                  onChange={handleInputChange}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            {/* <Flex direction="row" marginX={20}>
              <Select
                placeholder="Etat.."
                size="md"
                marginRight={4}
                name="etat"
                value={formData.etat}
                onChange={handleInputChange}
                maxW="31rem"
              >
                {Etat.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Flex> */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ButtonGroup variant="outline" spacing="6" marginX={20}>
                <NavLink to="/main/employes" activeClassName="active">
                  <Button>Cancel</Button>
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

export default AjoutEmp01;
