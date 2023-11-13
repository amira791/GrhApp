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
import useStructure from '../../hooks/useStructure';


export default function StructureForm({ initialData, forModification, onClose }) {
    
    console.log(initialData);
    const [id, setId] = useState(initialData.id)
    const [structureDesignation, setStructureDesignation] = useState(initialData.structureDesignation)
    const [typeStructure, setTypeStructure] = useState(initialData.typeStructure)
    const [structureDesignationAr, setStructureDesignationAr] = useState(initialData.structureDesignationAr)
    const { loading, addNewStructure, updateStructure, deleteStructure } = useStructure()
    

  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const structure = {
            id: id,
            structureDesignation: structureDesignation,
            typeStructure: typeStructure,
            structureDesignationAr: structureDesignationAr,
        };
        console.log(structure)
        addNewStructure(structure)
        onClose()
    }

    const handleUpdate = async (event) => {
        const data = {
            id: id,
            structureDesignation: structureDesignation,
            typeStructure: typeStructure,
            structureDesignationAr: structureDesignationAr,
        };

        event.preventDefault();
        console.log(data)
        updateStructure(data);
        onClose()
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log(id)
        deleteStructure(id)
        onClose()
    }



    return (
        <Form onSubmit={forModification ? handleUpdate : handleSubmit}>

            <FormControl isRequired >
                <FormLabel>Code Structure</FormLabel>
                <Input
                    name='id'
                    value={id}
                    onChange={(e) => {!forModification && setId(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir code Structure</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Structure Designation</FormLabel>
                <Input
                    name='structureDesignation'
                    value={structureDesignation}
                    onChange={(e) => { setStructureDesignation(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation Structure</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel> Type Structure </FormLabel>
                <Input
                    name='typeStructure'
                    value={typeStructure}
                    onChange={(e) => { setTypeStructure(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation Structure</FormHelperText>
            </FormControl>
            
            <FormControl isRequired >
                <FormLabel>Structure Designation En Arabe</FormLabel>
                <Input
                    name='structureDesignationAr'
                    value={structureDesignationAr}
                    onChange={(e) => { setStructureDesignationAr(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation structure en arabe</FormHelperText>
            </FormControl>
          

            <HStack mt="5px" gap="10px" justifyContent="flex-end">

                {forModification && <Button onClick={handleDelete} colorScheme='red' leftIcon={<CloseIcon />}>Supprimer</Button>}

                {!forModification && <Button onClick={onClose}>Cancel</Button>}
                <Button isLoading={loading} colorScheme="teal" type="submit">Enregistrer</Button>
            </HStack>


   </Form>

    )
}
