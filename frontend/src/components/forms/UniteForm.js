import { CloseIcon } from '@chakra-ui/icons';
import {
    Button, Checkbox,
    FormControl, FormHelperText, FormLabel,
    HStack,
    Input, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput, NumberInputField, NumberInputStepper,
    Select,
    useDisclosure
} from '@chakra-ui/react';

import { useEffect, useState , useRef } from 'react';
import { Form } from 'react-router-dom';
import useUnite from '../../hooks/useUnite';


export default function UniteForm({ initialData, forModification, onClose }) {
    
    console.log(initialData);
    const [id, setId] = useState(initialData.id)
    const [uniteDesignation, setUniteDesignation] = useState(initialData.uniteDesignation)
    const [uniteDesignationAr, setUniteDesignationAr] = useState(initialData.uniteDesignationAr)
    const { loading, addNewUnite, updateUnite, deleteUnite } = useUnite()
    

  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const unite = {
            id: id,
            uniteDesignation: uniteDesignation,
            uniteDesignationAr: uniteDesignationAr,
        };
        console.log(unite)
        addNewUnite(unite)
        onClose()
    }

    const handleUpdate = async (event) => {
        const data = {
            id: id,
            uniteDesignation: uniteDesignation,
            uniteDesignationAr: uniteDesignationAr,
        };

        event.preventDefault();
        console.log(data)
        updateUnite(data);
        onClose()
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log(id)
        deleteUnite(id)
        onClose()
    }



    return (
        <Form onSubmit={forModification ? handleUpdate : handleSubmit}>

            <FormControl isRequired >
                <FormLabel>Code Unite</FormLabel>
                <Input
                    name='id'
                    value={id}
                    onChange={(e) => {!forModification && setId(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir code unite</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Unite Designation</FormLabel>
                <Input
                    name='uniteDesignation'
                    value={uniteDesignation}
                    onChange={(e) => { setUniteDesignation(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation Unite</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Unite Designation En Arabe</FormLabel>
                <Input
                    name='uniteDesignationAr'
                    value={uniteDesignationAr}
                    onChange={(e) => { setUniteDesignationAr(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation unite en arabe</FormHelperText>
            </FormControl>
          

            <HStack mt="5px" gap="10px" justifyContent="flex-end">

                {forModification && <Button onClick={handleDelete} colorScheme='red' leftIcon={<CloseIcon />}>Supprimer</Button>}

                {!forModification && <Button onClick={onClose}>Cancel</Button>}
                <Button isLoading={loading} colorScheme="teal" type="submit">Enregistrer</Button>
            </HStack>


   </Form>

    )
}
