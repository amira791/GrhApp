import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import {useAuthContext} from '../hooks/useAuthContext'
import useStorage from './useStorage';
import { type } from '@testing-library/user-event/dist/type';

export default function useAuth() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const toast = useToast();
    const { deleteToken , setToken , setUsername , deleteUsername} =useStorage();
    const { dispatch } = useAuthContext();
   
    const authenticate = (data) =>{
          setLoading(true);
          setError(null);
          fetch("http://localhost:8089/api/auth/authenticate", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          })
          .then((response) => response.json())
            .then((result) => {
              setToken(result.token);
              setUsername(result.username);
              setLoading(false);
              dispatch({ type : 'LOGIN' , payload : { token: result.token, username: result.username } })
              toast({
                  title: 'User authentifie',
                  description: "Le User a ete authentifie avec succes",
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                })
            }) 
            .catch((error) => {
              setError(error);
              setLoading(false);
              toast({
                  title: 'Une erreur',
                  description: error.message,
                  status: 'error',
                  duration: 5000,
                })
            });
    }
    
    const logOut = () =>{
      deleteUsername();
      deleteToken();
      dispatch({type : 'LOGOUT' });
    }

    return {
      authenticate,
      logOut,
      error,
      loading
    }
}
