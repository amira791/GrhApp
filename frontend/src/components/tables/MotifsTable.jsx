import { AddIcon } from '@chakra-ui/icons';
import {
    Box, Button,
    HStack,
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalHeader,
    ModalOverlay,
    Spacer,
    Table,
    TableContainer,
    Tbody,
    Td,
    Thead,
    Tr,
    useDisclosure
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import useMotifsAbs from '../../hooks/useMotifsAbs';
import MotifForm from '../forms/MotifForm';

export default function MotifsTable({useFunction ,motifs}) {
    const [forModification,setForModification]= useState(false);
    // const { motifs,fetchAllMotifsAbs} = useMotifsAbs()
    const {isOpen,onClose ,onOpen } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [data,setData] = useState('')

    // useEffect(()=>{
    //    fetchAllMotifsAbs()
    // },[])

    
  const handleRowClick = (row) => {
  
     setForModification(true)
     setData(row)
     onOpen()
  };

 const handleClick= () => {
   
    onOpen()
    setForModification(false) 
}

    return (
<>
        <Box maxW="100vh">
        <HStack>
        <Spacer/>    
        <Button 
         mb="5px" colorScheme="teal" leftIcon={<AddIcon/>}
         onClick={handleClick}
        >Ajouter un motif</Button>
        </HStack>
        <TableContainer>
            <Table variant="simple">
                <Thead bg="teal.100">
                    <Tr border="1px solid teal">
                        <Td border="1px solid teal" >Code</Td>
                        <Td border="1px solid teal">Designation</Td>
                        <Td border="1px solid teal">Designation en arabe</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {motifs.map((m, index) => (
                        <Tr border="1px solid teal" style={{ cursor: 'pointer' }}
                            key={index} onClick={() => { handleRowClick(m); }} >
                            <Td border="1px solid teal">{m.id}</Td>
                            <Td border="1px solid teal">{m.libelle}</Td>
                            <Td border="1px solid teal" >{m.libelleAr}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
    {/* <HStack mt="5px" justifyContent="flex-end" gap="10px">
        <Button onClick={onClose}>Annuler</Button>
        <Button onClick={onClose} colorScheme="teal">Terminer</Button>
    </HStack> */}
    
<Modal
    initialFocusRef={initialRef}
    finalFocusRef={finalRef}
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{ forModification ? 'Modifier le motif':'Ajouter un motif'}</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <Box maxW="100vh">
          <MotifForm 
            forModification={forModification}
            initialData={data}
            Close={onClose}
            useFunction={useFunction}
            />
   
        </Box>
      </ModalBody>
    </ModalContent>
</Modal>
  
</>
    )
}


