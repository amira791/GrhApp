import { Button, Center, VStack } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginFirst() {
    const navigate =useNavigate();
    
  return (
    <VStack fontWeight={700} mt="20%" justifyContent="center" alignItems="center">
    <h1>LoginFirst</h1>
    <Button 
     colorScheme='teal' 
     variant='solid'
     onClick={()=> navigate("/")}>login</Button>
   </VStack>
  )
}
