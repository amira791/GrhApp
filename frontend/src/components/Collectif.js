
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
import CollectifTable from '../components/tables/CollectifTable'
import CollectifeForm from '../components/forms/CollectifForm'
import { AddIcon, QuestionIcon, DownloadIcon } from '@chakra-ui/icons';
import CollectifForm from '../components/forms/CollectifForm';
import { NavLink } from 'react-router-dom';
import useCollectif from '../hooks/useCollectif';
import useStorage from '../hooks/useStorage';

export default function Collectif() {

    const [searchActive, setSearchActive] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [collectif, setCollectif] = useState([]); 
    const [searchCollectif, setSearchCollectif] = useState([]);
    const [filteredCollectif, setFilteredCollectif] = useState([]); 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const blob = new Blob(['Blob content'], { type: 'text/plain' });
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const {createHeaders} = useStorage();
  

    const data = {
      id: '',
      collectifDesignation: '',
      collectifDesignationAr: ''
    }
  
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const text = event.target.result;
      console.log(text);
    };


  /*********************** GET ALL CollectifS ***********************/
    useEffect(() => {
        // Fetch employee data here
        const apiUrl = 'http://localhost:8089/Collectif/CollectifAll';
        fetch(apiUrl, {
          method: 'GET',
          headers: createHeaders(), 
        })
          .then((response) => response.json())
          .then((result) => {
            setCollectif(result);
          })
          .catch((error) => {
            console.error('Error fetching employee data:', error);
          });
      }, []);

  /********************** Rech Collectif ******************************/
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchActive(query.trim() !== '');

    const filteredCollectif = collectif.filter((u) =>
      u.id.toLowerCase().includes(query.toLowerCase()) ||
      u.collectifDesignation.toLowerCase().includes(query.toLowerCase()) ||
      u.collectifDesignationAr.toLowerCase().includes(query.toLowerCase())
    );

    setSearchCollectif(filteredCollectif);
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
            Ajouter une Collectif
          </Button>

                </HStack>
              </Flex>
              <div style={{ marginTop: '-150px' }}>
                <CollectifTable collectif={collectif} filteredCollectif={filteredCollectif}  searchActive={searchActive} searchQuery={searchQuery}  searchCollectif={searchCollectif} />
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
            { <CollectifeForm initialData={data} onClose={onClose} forModification={false} />}
          </ModalBody>
        </ModalContent>
      </Modal>


            </Stack>
     






     );
          
}
