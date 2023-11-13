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
import useCollectif from '../../hooks/useCollectif';


export default function CollectifForm({ initialData, forModification, onClose }) {
    
    console.log(initialData);
    const [id, setId] = useState(initialData.id)
    const [collectifDesignation, setCollectifDesignation] = useState(initialData.collectifDesignation)
    const [collectifDesignationAr, setCollectifDesignationAr] = useState(initialData.collectifDesignationAr)
    const { loading, addNewCollectif, updateCollectif, deleteCollectif } = useCollectif()
    

  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const collectif = {
            id: id,
            collectifDesignation: collectifDesignation,
            collectifDesignationAr: collectifDesignationAr,
        };
       
        addNewCollectif(collectif)
        onClose()
    }

    const handleUpdate = async (event) => {
        const data = {
            id: id,
            collectifDesignation: collectifDesignation,
            collectifDesignationAr: collectifDesignationAr,
        };

        event.preventDefault();
        console.log(data)
        updateCollectif(data);
        onClose()
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log(id)
        deleteCollectif(id)
        onClose()
    }



    return (
        <Form onSubmit={forModification ? handleUpdate : handleSubmit}>

            <FormControl isRequired >
                <FormLabel>Code Collectif</FormLabel>
                <Input
                    name='id'
                    value={id}
                    onChange={(e) => {!forModification && setId(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir code Collectif</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Collectif Designation</FormLabel>
                <Input
                    name='collectifDesignation'
                    value={collectifDesignation}
                    onChange={(e) => { setCollectifDesignation(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation Collectif</FormHelperText>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Collectif Designation En Arabe</FormLabel>
                <Input
                    name='collectifDesignationAr'
                    value={collectifDesignationAr}
                    onChange={(e) => { setCollectifDesignationAr(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir designation Collectife en arabe</FormHelperText>
            </FormControl>
          

            <HStack mt="5px" gap="10px" justifyContent="flex-end">

                {forModification && <Button onClick={handleDelete} colorScheme='red' leftIcon={<CloseIcon />}>Supprimer</Button>}

                {!forModification && <Button onClick={onClose}>Cancel</Button>}
                <Button isLoading={loading} colorScheme="teal" type="submit">Enregistrer</Button>
            </HStack>


   </Form>

    )
}
