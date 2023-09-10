import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Spinner,
} from '@chakra-ui/react'
import { AddIcon, QuestionIcon } from '@chakra-ui/icons'
import { React, useRef, useState, useEffect } from 'react'
  
  
  // components
import AbsencesTable from './tables/AbsencesTable'
import useAbsences from '../hooks/useAbsences'
import useMotifs from '../hooks/useMotifs'
import MotifsTable from './tables/MotifsTable'
import AbsenceForm from './forms/AbsenceForm'
  
  export default function Absences() {
    const { absences, loading, error, fetchAllAbsences } = useAbsences();
    const { motifs , fetchAllMotifs } = useMotifs()
    const data ={
      id:{
        motifAbs : {
          id: '',
          libelle : ''
        },
        matricule: '',
        dateDebut : '',
        dateFin: ''
      },
      nbAbsence : 0 ,
      autorisee : 'F'
    }
    
    useEffect(() => {
     fetchAllAbsences(); 
     fetchAllMotifs();
    }, []);

      
      const [isMotif,setIsMotif]=useState(false) 
      const { isOpen, onOpen, onClose } = useDisclosure()
      const initialRef = useRef(null)
      const finalRef = useRef(null)
    
  
    return(
    
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
            >Ajouter une absence</Button>

          </HStack>

            {loading && <Spinner thickness='4px'speed='0.65s' emptyColor='gray.200' color='teal.500' size='xl'/>}
            {error && <Text>Une erreur est survenue {error.message}</Text>}
            { absences &&   <AbsencesTable absences={absences}  motifs={motifs}/>}
            
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
                 {motifs && !isMotif && <AbsenceForm initialData={data} onClose={onClose} forModification={false}/>}
                 {motifs && isMotif && <MotifsTable/>}
                </ModalBody>
              </ModalContent>
            </Modal>
  
             </>
     
  
    )
  }