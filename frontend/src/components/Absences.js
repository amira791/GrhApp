import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    HStack,
  } from '@chakra-ui/react'
  import {useRef , useState , useEffect} from 'react'
  
  import NewAbsence from './NewAbsence'
  import Motifs from './Motifs'
  import { AddIcon, QuestionIcon } from '@chakra-ui/icons'
  import AbsencesTable from './AbsencesTable'
  
  export default function Absences() {
    const [isMotif,setIsMotif]=useState(false)
    const [motif,setMotif]= useState(null);
    useEffect(() => {
  
      fetch('http://localhost:8089/Absences/Motifs/all')
        .then((response) => response.json())
        .then((result) => {
          setMotif(result);
          console.log(motif);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
   
      const { isOpen, onOpen, onClose } = useDisclosure()
      const initialRef = useRef(null)
      const finalRef = useRef(null)
    
  
    return(
    
          <>
          <HStack justifyContent="flex-end" gap="10px">
            <Button  leftIcon={<QuestionIcon/>}variant="outline" colorScheme="teal" 
            onClick={() => {setIsMotif(true); onOpen();}}>Consulter motifs</Button>
            <Button leftIcon={<AddIcon/>}colorScheme="teal" 
            onClick={() => {setIsMotif(false); onOpen();}}>Ajouter une absence</Button>
          </HStack>
            {motif && <AbsencesTable motif={motif}/>}
            
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
                 {motif && !isMotif && <NewAbsence onClose={onClose} motif={motif}/>}
                 {motif && isMotif &&<Motifs onClose={onClose} motif={motif}/>}
                </ModalBody>
              </ModalContent>
            </Modal>
  
             </>
     
  
    )
  }
  
  