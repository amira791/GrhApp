
import React from 'react';
import { useState, useEffect } from 'react';
import '../style/EmployesPage.css';
import '../style/TopNavBar.css';
import SearchBar from '../components/SearchBar';
import {
  Button,
  HStack,
  Flex,
  Stack
} from '@chakra-ui/react';
import UniteTable from '../components/tables/UniteTable'
import { AddIcon, QuestionIcon, DownloadIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

export default function Unite() {

    const [searchActive, setSearchActive] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [unite, setUnite] = useState([]); 
    const [searchUnite, setSearchUnite] = useState([]);
  
    const blob = new Blob(['Blob content'], { type: 'text/plain' });
  
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const text = event.target.result;
      console.log(text);
    };



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

  


        

          return (
            <Stack spacing={-200}>
              <Flex direction="row" justifyContent="space-between" marginTop={50}>
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '-270px' }}>
                  <SearchBar placeholder="Search" onChange={handleSearch} />
                </div> */}
        
                <HStack spacing={4} marginTop={50} marginRight={5}marginLeft={50}>
                {/* <Button leftIcon={<DownloadIcon />} variant="outline" colorScheme="teal" onClick={exportToExcel}>
          exporter la liste
        </Button> */}
        <NavLink to="/main/AjoutEmp01" activeClassName="active">
          <Button  leftIcon={<AddIcon />} colorScheme="teal" marginLeft={0}>
            Ajouter une unite
          </Button>
        </NavLink>
                </HStack>
              </Flex>
              <div style={{ marginTop: '-150px' }}>
                <UniteTable unite={unite}  searchActive={searchActive} searchQuery={searchQuery}  searchUnite={searchUnite} />
              </div>
            </Stack>
          );
          
}
