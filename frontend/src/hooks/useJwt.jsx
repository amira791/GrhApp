import { useEffect } from "react";

export default function useJwt() {
 
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token);
  };
   
   
  const getToken = () => {
    return localStorage.getItem('jwtToken');
  };


const createHeaders = () => {
    const token = getToken();
    if (token) {
      return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
    }
    return {
      'Content-Type': 'application/json',
    };
  };

  const deleteToken = () => {
    localStorage.removeItem('jwtToken');
   
  };
  return {
    createHeaders,
    setToken,
    getToken,
    deleteToken
  };
  
}