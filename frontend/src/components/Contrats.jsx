// import { AddIcon, DownloadIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   HStack,
//   Text
// } from '@chakra-ui/react'
// import { useState , useEffect } from 'react';
// // import { useLoaderData } from 'react-router-dom'

// export default function Contrats() {
//   const [contrats ,setContrats]= useState(null)

//   useEffect(() => {

//     fetch('http://localhost:8089/Contrats/all')
//     .then((response) => response.json())
//     .then((result) => {
//       setContrats(result);
//       console.log(contrats);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
//   }, []);

//   return (
//     <>
//     <HStack justifyContent="flex-end" gap="10px">
//       <Button leftIcon={<DownloadIcon />} variant="outline" colorScheme="teal">Exporter la liste</Button>
//       <Button leftIcon={<AddIcon />} colorScheme="teal">Ajouter un contrat</Button>
//     </HStack>
//     {contrats.map((c) =>(
//       <Box>
//       <Text>{c.id}</Text>
//       <Text>{c.type}</Text>
//       </Box>
//     ))}
//     </>
//   )
// }

// // export const contratsLoader = async () =>{
// //     const res = await fetch('http://localhost:8089/Contrats/all')
// //     return res.json() 
// // }