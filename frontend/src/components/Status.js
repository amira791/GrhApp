
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import '../style/EmployesPage.css';
import '../style/TopNavBar.css';
import SearchBar from '../components/SearchBar';
import useStorage from '../hooks/useStorage';

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
import StatusTable from '../components/tables/StatusTable'
import { AddIcon, QuestionIcon, DownloadIcon } from '@chakra-ui/icons';
import StatusForm from '../components/forms/StatutForm';
import { NavLink } from 'react-router-dom';
import useStatus from '../hooks/useStatus';

export default function Status() {

    const [searchActive, setSearchActive] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setStatus] = useState([]); 
    const [searchStatus, setSearchStatus] = useState([]);
    const [filteredStatus, setFilteredStatus] = useState([]); 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { loading, addNewStatus, updateStatus, deleteStatus } = useStatus()
    const blob = new Blob(['Blob content'], { type: 'text/plain' });
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const {createHeaders} = useStorage();
  

    const data = {
      id: '',
      statusDesignation: '',
      statusDesignationAr: ''
    }
  
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const text = event.target.result;
      console.log(text);
    };


  /*********************** GET ALL Status ***********************/
    useEffect(() => {
        // Fetch employee data here
        const apiUrl = 'http://localhost:8089/status/statusall';
        fetch(apiUrl, {
          method: 'GET',
          headers: createHeaders(), 
        })
          .then((response) => response.json())
          .then((result) => {
            setStatus(result);
          })
          .catch((error) => {
            console.error('Error fetching employee data:', error);
          });
      }, []);

  /********************** Rech Status ******************************/
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchActive(query.trim() !== '');

    const filteredStatus = status.filter((u) =>
      u.id.toLowerCase().includes(query.toLowerCase()) ||
      u.statusDesignation.toLowerCase().includes(query.toLowerCase()) ||
      u.statusDesignationAr.toLowerCase().includes(query.toLowerCase())
    );

    setSearchStatus(filteredStatus);
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
            Ajouter une Status
          </Button>

                </HStack>
              </Flex>
              <div style={{ marginTop: '-150px' }}>
                <StatusTable status={status} filteredStatus={filteredStatus}  searchActive={searchActive} searchQuery={searchQuery}  searchStatus={searchStatus} />
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
            { <StatusForm initialData={data} onClose={onClose} forModification={false} />}
          </ModalBody>
        </ModalContent>
      </Modal>


            </Stack>
     






     );
          
}
