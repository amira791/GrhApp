import { AddIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalHeader,
    ModalOverlay,
    useDisclosure,
    Box, Button, HStack, Table,
    TableContainer,
    Tbody,
    Td,
    Thead,
    Tr
} from '@chakra-ui/react';
import React, { useRef,useEffect, useState } from 'react';
import useMotifs from '../../hooks/useMotifs';
import MotifForm from '../forms/MotifForm';

export default function MotifsTable() {
    const [forModification,setForModification]= useState(false);
    const {motifs ,fetchAllMotifs} = useMotifs()
    const {isOpen,onClose ,onOpen } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [data,setData] = useState('')

    useEffect(()=>{
        fetchAllMotifs()
    },[])

    
  const handleRowClick = (row) => {
    console.log("im clicked row")
     setForModification(true)
     setData(row)
     onOpen()
  };
 const handleClick= () => {
    console.log("im clicked button")
    onOpen()
    setForModification(false) 
}

    return (
<>
        <Box maxW="100vh">
        <Button 
         mb="5px" colorScheme="teal" leftIcon={<AddIcon/>}
         onClick={handleClick}
        >Ajouter un motif</Button>
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
            onClose={onClose}
            />
   
        </Box>
      </ModalBody>
    </ModalContent>
    </Modal>
  
</>
    )
}


