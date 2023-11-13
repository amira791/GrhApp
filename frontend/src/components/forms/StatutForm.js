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
import useStatus from '../../hooks/useStatus';


export default function StatusForm({ initialData, forModification, onClose }) {
    
    console.log(initialData);
    const [id, setId] = useState(initialData.id)
    const [statusDesignation, setStatusDesignation] = useState(initialData.statusDesignation)
    const [statusDesignationAr, setStatusDesignationAr] = useState(initialData.statusDesignationAr)
    const { loading, addNewStatus, updateStatus, deleteStatus } = useStatus()
    

  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const status = {
            id: id,
            statusDesignation: statusDesignation,
            statusDesignationAr: statusDesignationAr,
        };
        console.log(status)
        addNewStatus(status)
        onClose()
    }

    const handleUpdate = async (event) => {
        const data = {
            id: id,
            statusDesignation: statusDesignation,
            statusDesignationAr: statusDesignationAr,
        };

        event.preventDefault();
        console.log(data)
        updateStatus(data);
        onClose()
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log(id)
        deleteStatus(id)
        onClose()
    }



    return (
        <Form onSubmit={forModification ? handleUpdate : handleSubmit}>

            <FormControl isRequired >
                <FormLabel>Code Status</FormLabel>
                <Input
                    name='id'
                    value={id}
                    onChange={(e) => {!forModification && setId(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir code Status</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Status Designation</FormLabel>
                <Input
                    name='statusDesignation'
                    value={statusDesignation}
                    onChange={(e) => { setStatusDesignation(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation Status</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Status Designation En Arabe</FormLabel>
                <Input
                    name='statusDesignationAr'
                    value={statusDesignationAr}
                    onChange={(e) => { setStatusDesignationAr(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation status en arabe</FormHelperText>
            </FormControl>
          

            <HStack mt="5px" gap="10px" justifyContent="flex-end">

                {forModification && <Button onClick={handleDelete} colorScheme='red' leftIcon={<CloseIcon />}>Supprimer</Button>}

                {!forModification && <Button onClick={onClose}>Cancel</Button>}
                <Button isLoading={loading} colorScheme="teal" type="submit">Enregistrer</Button>
            </HStack>


   </Form>

    )
}
