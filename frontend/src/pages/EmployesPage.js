import React from 'react';
import SideBar from '../components/SideBar';
import DataTable from '../components/DataTable';
import '../style/EmployesPage.css';
import '../style/TopNavBar.css';
import NavTab from '../components/NavTab';
import TopNavBar from '../components/TopNavBar';
import SearchFilterBarEmp from '../components/SearchFilterBarEmp';
import SearchBar from '../components/SearchBar';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { TriangleUpIcon, TriangleDownIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Select,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

import { AddIcon, QuestionIcon } from '@chakra-ui/icons';


export default function EmployePage() {
  // ... other code ...

  return (
    <div>
      <Flex direction="row" marginX={20} justifyContent="space-between">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchFilterBarEmp  />
          <SearchBar />
        </div>
        <HStack spacing={4} marginTop={79}>
          <Button leftIcon={<QuestionIcon />} variant="outline" colorScheme="teal">
            exporter la liste
          </Button>
          <Button leftIcon={<AddIcon />} colorScheme="teal">
            Ajouter un employe
          </Button>
        </HStack>
      </Flex>
      <DataTable />
    </div>
  );
}
