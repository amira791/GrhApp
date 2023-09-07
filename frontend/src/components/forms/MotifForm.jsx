import { CloseIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl, FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
import { useRef ,useState } from 'react';
import { Form } from 'react-router-dom';
import useMotifs from '../../hooks/useMotifs';

export default function MotifForm({ initialData , forModification , onClose}) {
  const { addNewMotif ,deleteMotif , updateMotif}= useMotifs()
 
  const [formData, setFormData] = useState(initialData);
 

  const handleSubmit = async (event) => { 
    event.preventDefault();
    addNewMotif(formData)
  }

  const handleUpdate = async (event) => {

    event.preventDefault();
    updateMotif(formData.id,formData)
  }

  const handleDelete = async (event) => {

    event.preventDefault();
    deleteMotif(formData.id) 

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
        onChange={handleChange}
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
    <HStack gap="10px" justifyContent="flex-end">
         
          {forModification && <Button onClick={handleDelete} colorScheme='red' leftIcon={<CloseIcon/>}>Supprimer</Button>}
          {!forModification && <Button onClick={onClose}>Cancel</Button>}
          <Button colorScheme="teal" type="submit">Save</Button>
    </HStack>
  </Form>
  );
}

