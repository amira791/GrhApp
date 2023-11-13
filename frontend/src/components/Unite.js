
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
import UniteTable from '../components/tables/UniteTable'
import { AddIcon, QuestionIcon, DownloadIcon } from '@chakra-ui/icons';
import UniteForm from '../components/forms/UniteForm';
import { NavLink } from 'react-router-dom';
import useUnite from '../hooks/useUnite';

export default function Unite() {

    const [searchActive, setSearchActive] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [unite, setUnite] = useState([]); 
    const [searchUnite, setSearchUnite] = useState([]);
    const [filteredUnite, setFilteredUnite] = useState([]); 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const blob = new Blob(['Blob content'], { type: 'text/plain' });
    const initialRef = useRef(null)
    const finalRef = useRef(null)
  

    const data = {
      id: '',
      uniteDesignation: '',
      uniteDesignationAr: ''
    }
  
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const text = event.target.result;
      console.log(text);
    };


  /*********************** GET ALL UNITES ***********************/
    useEffect(() => {
        // Fetch employee data here
        const apiUrl = 'http://localhost:8089/Unite/UniteAll';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((result) => {
            setUnite(result);
          })
          .catch((error) => {
            console.error('Error fetching employee data:', error);
          });
      }, []);

  /********************** Rech Unite ******************************/
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchActive(query.trim() !== '');

    const filteredUnite = unite.filter((u) =>
      u.id.toLowerCase().includes(query.toLowerCase()) ||
      u.uniteDesignation.toLowerCase().includes(query.toLowerCase()) ||
      u.uniteDesignationAr.toLowerCase().includes(query.toLowerCase())
    );

    setSearchUnite(filteredUnite);
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
            Ajouter une unite
          </Button>

                </HStack>
              </Flex>
              <div style={{ marginTop: '-150px' }}>
                <UniteTable unite={unite} filteredUnite={filteredUnite}  searchActive={searchActive} searchQuery={searchQuery}  searchUnite={searchUnite} />
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
            { <UniteForm initialData={data} onClose={onClose} forModification={false} />}
          </ModalBody>
        </ModalContent>
      </Modal>


            </Stack>
     






     );
          
}
