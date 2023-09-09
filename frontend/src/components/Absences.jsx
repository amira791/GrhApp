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
  Skeleton,
  useToast
} from '@chakra-ui/react'
import { AddIcon, QuestionIcon } from '@chakra-ui/icons'
import { React, useRef, useState, useEffect } from 'react'
  
  
  // components
import AbsencesTable from './tables/AbsencesTable'
import useAbsences from '../hooks/useAbsences'
import useMotifsAbs from '../hooks/useMotifsAbs'
import MotifsTable from './tables/MotifsTable'
import AbsenceForm from './forms/AbsenceForm'
  
  export default function Absences() {
    const [isMotif,setIsMotif]=useState(false) 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const { absences, loading, error, fetchAllAbsences } = useAbsences();
    const { motifsAbs , fetchAllMotifsAbs } = useMotifsAbs()
    const toast = useToast()
    const data ={
      id:{
        code : '',
        matricule: '',
        dateDebut : '',
        dateFin: ''
      },
      nbAbsence : 0 ,
      autorisee : 'F'
    }
    useEffect(() => {
     fetchAllAbsences(); 
     fetchAllMotifsAbs();

    }, [!isOpen]);

    
  
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
    
          {error &&   toast({  title: 'Une erreur est survenue',
                                 description: error.message,
                                 status: 'error',
                                 duration: 5000,})}
          {!error && 
          <Skeleton height="100vh" isLoaded={!loading}>
            
            <AbsencesTable absences={absences}  motifs={motifsAbs}/>
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
                 {!isMotif && <AbsenceForm initialData={data} onClose={onClose} forModification={false}/>}
                 {motifsAbs && isMotif && <MotifsTable useFunction={useMotifsAbs}/>}
                </ModalBody>
              </ModalContent>
            </Modal>
  
             </>
     
  
    )
  }