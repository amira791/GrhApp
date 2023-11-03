import { useEffect } from "react";

export default function useJwt() {
  // todo implement the login and sign up methods to receive the token then store it here
  // to store it return setToken(token) and call it in login method
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY5OTAwMjgxMywiZXhwIjoxNjk5NjA3NjEzfQ.KeXCo3vj48Ozosrlnd3F1AeaK9D2XBsov05-0HqoqNE" ;
  // const setToken = () => {
  //   localStorage.setItem('jwtToken', token);
  // };
   
  
//   useEffect(() => {
//     setToken();
// }, [])
 
  const getToken = () => {
    return localStorage.getItem('jwtToken');
  };


const createHeaders = () => {
    // const token = getToken();
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

//   const logout = () => {
//     localStorage.removeItem('jwtToken');
   
//   };
  return {
    createHeaders
  };
  
}