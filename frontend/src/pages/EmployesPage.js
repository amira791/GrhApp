import React, { useState, useEffect } from 'react';
import '../style/EmployesPage.css';
import '../style/TopNavBar.css';
import SearchFilterBarEmp from '../components/SearchFilterBarEmp';
import SearchBar from '../components/SearchBar';
import {
  Button,
  HStack,
  Flex,
  Stack
} from '@chakra-ui/react';
import EmployeTable from '../components/tables/EmployeTable'
import { AddIcon, QuestionIcon, DownloadIcon } from '@chakra-ui/icons';
import { writeFileSync } from 'xlsx';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export default function EmployePage() {
  const [searchActive, setSearchActive] = useState(false); // State for search query presence
  const [searchQuery, setSearchQuery] = useState('');
  const [employe, setEmploye] = useState([]); // State for employee data
  const [filteredEmploye, setFilteredEmploye] = useState([]); // State for filtered employees
  const [posteData, setPosteData] = useState({});
  const [searchEmploye, setSearchEmploye] = useState([]);

  const blob = new Blob(['Blob content'], { type: 'text/plain' });

  const reader = new FileReader();
  
  reader.onload = function(event) {
    const text = event.target.result;
    console.log(text);
  };
  
  reader.readAsText(blob);

  useEffect(() => {
    // Fetch employee data here
    const apiUrl = 'http://localhost:8089/Employe/EmployeAll';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setEmploye(result);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });

    const posteApiUrl = 'http://localhost:8089/PosteTravail/P';
    fetch(posteApiUrl)
      .then((response) => response.json())
      .then((result) => {
        // Convert the array of postes into a dictionary for easy access
        const posteData = {};
        result.forEach((posteInfo) => {
          posteData[posteInfo.id] = posteInfo.posteDesignation;
        });
        setPosteData(posteData);
      })
      .catch((error) => {
        console.error('Error fetching poste data:', error);
      });
  }, []);

// Callback function to handle search
const handleSearch = (query) => {
  setSearchQuery(query);
  setSearchActive(query.trim() !== '');

  // Filter employees based on the search query (you need to implement the filtering logic)
  const filteredEmployees = employe.filter((employee) =>
    employee.nom.toLowerCase().includes(query.toLowerCase()) ||
    employee.prenom.toLowerCase().includes(query.toLowerCase()) ||
    employee.etat.toLowerCase().includes(query.toLowerCase()) ||
    employee.id.toLowerCase().includes(query.toLowerCase())
  );

  // Set the searchEmploye state with the filtered employees
  setSearchEmploye(filteredEmployees);
};


  

  
  const handleFilter = (selectedFilter) => {
    // Filter employees based on the selected filter
    const filteredEmployees = employe.filter((employee) => {
      if (selectedFilter.filtre === 'Collectif') {
        return employee.codeCollectif === selectedFilter.value;
      } else if (selectedFilter.filtre === 'Unite') {
        return employee.codeUnite === selectedFilter.value;
      } else if (selectedFilter.filtre === 'Status') {
        return employee.codeStatus === selectedFilter.value;
      } else if (selectedFilter.filtre === 'PosteTravail') {
        return employee.codePoste === selectedFilter.value;
      } else if (selectedFilter.filtre === 'Structure') {
        return employee.codeStructure === selectedFilter.value;
      }
      // Add similar conditions for other filters
      return true; // If no filter is applied, return all employees
    });
  
    // Update the state with the filtered employees
    setFilteredEmploye(filteredEmployees);
    console.log(filteredEmployees);
    
  };
    // Function to calculate anciennete
  const calculateAnciennete = (dateEntree) => {
    const currentDate = new Date(); // Current date
    const dateEntreeYear = new Date(dateEntree).getFullYear(); // Year of DateEntree
    const anciennete = currentDate.getFullYear() - dateEntreeYear; // Calculate anciennete
    return anciennete;
  };
    // Function to get posteDesignation by codePoste
    const getPosteDesignation = (codePoste) => {
      return posteData[codePoste] || 'N/A';
    };
 
    const exportToExcel = () => {
      console.log("aaaaaaaaaaaaaaa")
      // Transform the employee data to include only the desired fields
      const dataToExport = employe.map((employee) => ({
        Matricule: employee.id,
        'Nom Prenom': `${employee.nom} ${employee.prenom}`,
        'Poste Travail': getPosteDesignation(employee.codePoste),
        Anciennete: calculateAnciennete(employee.dateEntree),
        Echelon: employee.echelon,
        Etat: employee.etat,
      }));
    
      // Create a worksheet
      const ws = XLSX.utils.json_to_sheet(dataToExport);
      console.log("bbbbbbbbbbbbb")
      // Create a workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'EmployeeData');
      console.log("cccccccccccccccc")
      // Create a buffer and write the workbook to it
      const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
      console.log("ddddddddddddd")
      // Create a Blob from the buffer
      const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      console.log("eeeeeeeeeeeee")
      // Create a download link for the Blob
      const url = window.URL.createObjectURL(blob);
    
      // Create an anchor element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'employee_data.xlsx';
      a.click();
      console.log("fffffffffffff")
    
      // Release the Blob URL
      window.URL.revokeObjectURL(url);
    };
    
  

  return (
    <Stack spacing={-200}>
      <Flex direction="row" justifyContent="space-between" marginTop={50}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '-270px' }}>
          <SearchBar placeholder="Search" onChange={handleSearch} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '-650px', marginTop: '-25px' }}>
          <SearchFilterBarEmp onFilter={handleFilter} />
        </div>

        <HStack spacing={4} marginTop={50} marginRight={5}marginLeft={50}>
        <Button leftIcon={<DownloadIcon />} variant="outline" colorScheme="teal" onClick={exportToExcel}>
  exporter la liste
</Button>
<NavLink to="/main/AjoutEmp01" activeClassName="active">
  <Button  leftIcon={<AddIcon />} colorScheme="teal" marginLeft={0}>
    Ajouter un employe
  </Button>
</NavLink>
        </HStack>
      </Flex>
      <div style={{ marginTop: '-150px' }}>
        <EmployeTable employe={employe} filteredEmploye={filteredEmploye} searchActive={searchActive} searchQuery={searchQuery} posteData={posteData} searchEmploye={searchEmploye} />
      </div>
    </Stack>
  );
}
