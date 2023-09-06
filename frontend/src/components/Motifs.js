import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Spacer, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function Motifs({motif , onClose}) {
    console.log(motif)
  return (
    <>
    <Box maxW="100vh">
    <HStack mb="5px" gap="10px">
        <Button onClick={onClose} colorScheme='red' leftIcon={<CloseIcon/>}>Supprimer</Button>
        <Spacer/>
        <Button variant="outline" colorScheme='teal' onClick={onClose}>modifier</Button>
        <Button onClick={onClose} colorScheme="teal" leftIcon={<AddIcon/>}>Ajouter</Button>
    </HStack>
        <TableContainer>
            <Table  variant="simple">
              <Thead bg="teal.100">
                <Tr border="1px solid teal">
                 <Td border="1px solid teal" >Code</Td>
                 <Td border="1px solid teal">Designation</Td>
                 <Td border="1px solid teal">Designation en arabe</Td>
                </Tr>
              </Thead>
              <Tbody>
              {motif.map((m,index)=>(
                 <Tr border="1px solid teal" key={index}>
                   <Td border="1px solid teal">{m.id}</Td>
                   <Td border="1px solid teal">{m.libelle}</Td>
                 </Tr>
                ))}
              </Tbody>
            </Table>
        </TableContainer>
    </Box>
    <HStack mt="5px" justifyContent="flex-end" gap="10px">
        <Button onClick={onClose}>Annuler</Button>
        <Button onClick={onClose} colorScheme="teal">Okey</Button>
    </HStack>
    </>
  )
}
