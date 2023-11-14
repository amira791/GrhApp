
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import '../style/EmployesPage.css';
import '../style/TopNavBar.css';
import SearchBar from '../components/SearchBar';
import {
  Button,
  HStack,
  Flex,
  Stack

} from '@chakra-ui/react';
import {


  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import StructureTable from '../components/tables/StructureTable'
import { AddIcon, QuestionIcon, DownloadIcon } from '@chakra-ui/icons';
import StructureForm from '../components/forms/StructureForm';
import { NavLink } from 'react-router-dom';
import useStorage from '../hooks/useStorage';
export default function Structure() {

    const [searchActive, setSearchActive] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [structure, setStructure] = useState([]); 
    const [filteredStructure, setFilteredStructure] = useState([]); 
    const [searchStructure, setSearchStructure] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const {createHeaders} = useStorage();
  
    const blob = new Blob(['Blob content'], { type: 'text/plain' });
  
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const text = event.target.result;
      console.log(text);
    };

    const data = {
      id: '',
      structureDesignation: '',
      typeStructure: '',
      structureDesignationAr: ''
    }



    useEffect(() => {
        // Fetch employee data here
        const apiUrl = 'http://localhost:8089/Structure/StructureeAll';
        fetch(apiUrl, {
          method: 'GET',
          headers: createHeaders(), 
        })
          .then((response) => response.json())
          .then((result) => {
            setStructure(result);
          })
          .catch((error) => {
            console.error('Error fetching structure data:', error);
          });
      }, []);

      /********************** Rech Structure ******************************/
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchActive(query.trim() !== '');

    const filteredStructure = structure.filter((u) =>
      u.id.toLowerCase().includes(query.toLowerCase()) ||
      u.structureDesignation.toLowerCase().includes(query.toLowerCase()) ||
      u.structureDesignationAr.toLowerCase().includes(query.toLowerCase())
    );

    setSearchStructure(filteredStructure);
  };


  return (
    <Stack spacing={-200}>
      <Flex direction="row" justifyContent="space-between" marginTop={50}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '-270px' }}>
          <SearchBar placeholder="Search"  onChange={handleSearch} />
        </div>

        <HStack spacing={4} marginTop={50} marginRight={5}marginLeft={50}>
        <Button leftIcon={<DownloadIcon />} variant="outline" colorScheme="teal" >
  exporter la liste
</Button>
<Button leftIcon={<DownloadIcon />} variant="outline" colorScheme="teal">
  Importer la liste
</Button>

  <Button  leftIcon={<AddIcon />} colorScheme="teal" marginLeft={0}        
   onClick={() => {onOpen(); }}>
    Ajouter une Structure
  </Button>

        </HStack>
      </Flex>
      <div style={{ marginTop: '-150px' }}>
        <StructureTable structure={structure} filteredStructure={filteredStructure}  searchActive={searchActive} searchQuery={searchQuery}  searchStructure={searchStructure} />
      </div>

      <Modal
      size="xl"
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >    
     <ModalOverlay />
<ModalContent >
  <ModalCloseButton />
  <ModalBody pb={6}>
    { <StructureForm initialData={data} onClose={onClose} forModification={false} />}
  </ModalBody>
</ModalContent>
</Modal>


    </Stack>







);
          
}
