import { LockIcon, ChevronRightIcon } from '@chakra-ui/icons';
import  { 
FormControl,
FormLabel,
Input,
InputGroup,
InputRightElement,
Button,
HStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function AuthForm() {
  
    const navigate = useNavigate();

    const [username,setUsername] = useState();
    const [pwd,setPwd] = useState();
    const {error ,loading, authenticate} = useAuth();
    
    const handleClick = () => {
       authenticate(
        {
          username :username ,
          password : pwd
       });
       
      !error && navigate("/main")
    }

  return (
    <Form >
    <FormControl isRequired >
    <FormLabel>Username</FormLabel>
      <InputGroup>
        <InputRightElement pointerEvents='none'>
          <LockIcon color='gray.300' />
        </InputRightElement>
        <Input 
          value={username}
          onChange={(e) =>  setUsername(e.target.value) }
          type="text" 
          placeholder='Username' />
      </InputGroup>
    </FormControl >
    <FormControl isRequired mt={8} mb={10}>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <InputRightElement pointerEvents='none'>
          <LockIcon color='gray.300' />
        </InputRightElement>
        <Input 
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
         type="password" 
         placeholder='password' />
      </InputGroup>
    </FormControl>
    
    <HStack alignContent="center" justifyContent="center">
    <Button 
      disabled={loading}
      onClick={handleClick}
      marginTop="10px"
      rightIcon={<ChevronRightIcon />} 
      colorScheme='teal' 
      variant='solid'
      >Se connecter</Button>
      {error && <div>{error.message}</div> }
    </HStack>
   
  </Form>
  )
}
