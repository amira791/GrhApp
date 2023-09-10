import { CloseIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  FormControl, FormLabel,
  HStack,
  Input,
  useDisclosure
} from '@chakra-ui/react';
import { useState , useRef} from 'react';
import { Form } from 'react-router-dom';
import useMotifsAbs from '../../hooks/useMotifsAbs';

export default function MotifForm({ useFunction ,initialData , forModification , Close}) {
  const { addNewMotif ,deleteMotif , updateMotif}= useFunction()
 
  const [formData, setFormData] = useState(initialData);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

 

  const handleSubmit = async (event) => { 
    event.preventDefault();
    console.log(formData)
    addNewMotif(formData)
    Close()
  }

  const handleUpdate = async (event) => {

    event.preventDefault();
    updateMotif(formData.id,formData)
    Close()
  }

  const handleDelete = async (event) => {

    event.preventDefault();
    deleteMotif(formData.id) 
    onClose()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <Form onSubmit={forModification ? handleUpdate : handleSubmit}>
    <FormControl isRequired>
      <FormLabel>Code de motif</FormLabel>
      <Input
        name="id"
        type="text"
        value={formData.id}
        onChange={(e) => {
          if (!forModification) {
            handleChange(e);
          }
        }}
      />
    </FormControl>

    <FormControl isRequired>
      <FormLabel>Designation du motif</FormLabel>
      <Input
        name="libelle"
        type="text"
        value={formData.libelle}
        onChange={handleChange}
      />
    </FormControl>

    <FormControl isRequired>
      <FormLabel>Designation en arabe</FormLabel>
      <Input
        name="libelleAr"
        type="text"
        value={formData.libelleAr}
        onChange={handleChange}
      />
    </FormControl>
    <HStack mt="5px" gap="10px" justifyContent="flex-end">
         
          {forModification && <Button onClick={onOpen} colorScheme='red' leftIcon={<CloseIcon/>}>Supprimer</Button>}
          {!forModification && <Button onClick={Close}>Cancel</Button>}
          <Button colorScheme="teal" type="submit">Save</Button>
    </HStack>


    <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Supprimer absence
                </AlertDialogHeader>

                <AlertDialogBody>
                Êtes-vous sûr ? Vous ne pouvez pas annuler cette action par la suite
                </AlertDialogBody>

                <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                    Annuler
                </Button>
                <Button colorScheme='red' onClick={handleDelete} ml={3}>
                    Supprimer
                </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
  </Form>
  );
}

