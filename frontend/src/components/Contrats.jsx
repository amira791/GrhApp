import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack, Skeleton,
  useToast
} from '@chakra-ui/react'
import { AddIcon, QuestionIcon } from '@chakra-ui/icons'
import { React, useRef, useState, useEffect } from 'react'
import ContratForm from './forms/ContratForm'
import ContratsTable from './tables/ContratsTable'
import MotifsAbsTable from './tables/MotifsTable'
import useMotifsCntr from '../hooks/useMotifsCntr'
import useContrats from '../hooks/useContrats'

export default function Contrats() {
  const [isMotif,setIsMotif]=useState(false) 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
 
  const {motifs ,fetchAllMotifs } = useMotifsCntr()
  const {contrats , error , loading , fetchAllContrats} = useContrats()
  const toast = useToast()

  const data ={
        id: '',
        matricule: '',
        dateDebut : '',
        dateFin: '',
        duree : 0 ,
        type:'',
        motif : ''
  }
  useEffect(() => {
    fetchAllContrats()
    fetchAllMotifs()
  }, [!isOpen]);

  return (
<>

  <HStack justifyContent="flex-end" gap="10px">
    <Button  
     leftIcon={<QuestionIcon/>}
     variant="outline" 
     colorScheme="teal" 
     onClick={() => {setIsMotif(true); onOpen();}}
    >Consulter motifs</Button>

    <Button 
     leftIcon={<AddIcon/>}
     colorScheme="teal" 
     onClick={() => {setIsMotif(false); onOpen();}}
    >Ajouter un contrat</Button>

  </HStack>

    {error &&   toast({  title: 'Une erreur est survenue',
                                 description: error.message,
                                 status: 'error',
                                 duration: 5000,})}
       {!error && 
          <Skeleton height="100vh" isLoaded={!loading}>
            <ContratsTable contarts={contrats} motifs={motifs}/>
          </Skeleton>
      }
            
    <Modal
        size="xl"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent >
        <ModalHeader>{ isMotif ? 'Consulter motif':'Saisir une absence'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {motifs &&!isMotif && <ContratForm initialData={data} onClose={onClose} forModification={false}/>}
          {motifs && isMotif && <MotifsAbsTable useFunction={useMotifsCntr} motifs={motifs}/>} 
        </ModalBody>
      </ModalContent>
    </Modal>
  

</>
)
}
