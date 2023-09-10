import { CloseIcon } from '@chakra-ui/icons';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
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
import useAbsences from '../../hooks/useAbsences';
import useMotifsAbs from '../../hooks/useMotifsAbs';

export default function AbsenceForm({ initialData, forModification, onClose }) {
    
    const { motifsAbs, fetchAllMotifsAbs } = useMotifsAbs()
    const { loading ,addNewAbsence, updateAbsence, deleteAbsence } = useAbsences()
    const [code, setCode] = useState(initialData.id.code)
    const [matricule, setMatricule] = useState(initialData.id.matricule);
    const [dateDebut, setDateDebut] = useState(initialData.id.dateDebut);
    const [dateFin, setDateFin] = useState(initialData.id.dateFin);
    const [nbAbsence, setNbAbsence] = useState(initialData.nbAbsence);
    const [autorisee, setAutorisee] = useState(initialData.autorisee);

    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const cancelRef = useRef()

    useEffect(() => {
        fetchAllMotifsAbs()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const absence = {     
            id: {
            code: code,
            matricule: matricule,
            dateDebut: dateDebut + "T00:00:00.000+00:00",
            dateFin: dateFin + "T00:00:00.000+00:00",
            },
            nbAbsence: nbAbsence,
            autorisee: autorisee
        };
        console.log(absence)
        addNewAbsence(absence) 
        onClose()  
    }

    const handleUpdate = async (event) => {
        const data = {     
            code: code,
            matricule: matricule,
            dateDebut: dateDebut + "T00:00:00.000+00:00",
            dateFin: dateFin + "T00:00:00.000+00:00",
            nbAbsence: nbAbsence,
            autorisee: autorisee
        };

        event.preventDefault();

        console.log(data)
        updateAbsence(data);
        onClose()
    }

    const handleDelete = async (event) => {

        event.preventDefault();
        const id = {
            code:code,
            matricule: matricule,
            dateDebut: dateDebut + "T00:00:00.000+00:00",
            dateFin: dateFin + "T00:00:00.000+00:00"
        };
        deleteAbsence(id)
        onClose() 
    }


    return (
        <Form onSubmit={forModification ? handleUpdate : handleSubmit}>
            <FormControl>
                <FormLabel>Motif d'absence</FormLabel>
                <Select
                    // Code motif cannot be modified cuz it is a part of absence's key
                    // so you need to verify first if it's not for modification you can save the changes
                    onChange={(e) => {!forModification && setCode(e.target.value) }}
                    placeholder='Selectionnez un motif'>
                    {motifsAbs.map((m , index) => (
                        <option key={index} value={m.id}>{m.libelle}</option>
                    ))}
                </Select>


            </FormControl>

            <FormControl isRequired >
                <FormLabel>Matricule</FormLabel>
                <Input
                    name='matricule'
                    value={matricule}
                     // matricule cannot be modified cuz it is a part of absence's key
                    // so you need to verify first if it's not for modification you can save the changes
                    onChange={(e) => {!forModification && setMatricule(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir le matricule de l'employe</FormHelperText>
            </FormControl>

            <FormControl isRequired >
                <FormLabel>Date de debut</FormLabel>
                <Input
                    value={dateDebut.split('T')[0]} // split to remove the time from date
                    // dateDebut cannot be modified cuz it is a part of absence's key
                    // so you need to verify first if it's not for modification you can save the changes
                    onChange={(e) => {!forModification && setDateDebut(e.target.value) }}
                    name='dateDebut'
                    type="date" />
            </FormControl>

            <FormControl isRequired >
                <FormLabel>Date de fin</FormLabel>
                <Input
                    value={dateFin.split('T')[0]}// split to remove the time from date
                    // dateFin cannot be modified cuz it is a part of absence's key
                    //so you need to verify first if it's not for modification you can save the changes
                    onChange={(e) => {!forModification && setDateFin(e.target.value)}}
                    name='dateFin'
                    type="date" />
            </FormControl>

            <FormControl isRequired >
                <FormLabel>Nombre d'absences </FormLabel>
                <NumberInput
                    value={nbAbsence}
                    // to convert it into float nbAbsence is declared as float in DB
                    onChange={(valueString) => setNbAbsence(parseFloat(valueString))}
                    name='nbAbsence'
                    max={50} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl mt="10px" me="5px" >
                <Checkbox
                    colorScheme="teal"
                    name='autorisee'
                    // autorisee is a String in DB so it needs to be converted  
                    isChecked={autorisee === 'T'}
                    onChange={(e) =>  setAutorisee(e.target.checked ? 'T' : 'F')}

                >Absence Autorisee</Checkbox>
            </FormControl>

            <HStack mt="5px" gap="10px" justifyContent="flex-end">
                {/*  show delete button only in case of modification */}
                {forModification && <Button onClick={handleDelete} colorScheme='red' leftIcon={<CloseIcon />}>Supprimer</Button>}
                {/* show Cancel button in case of addition of new absence */}
                {!forModification && <Button onClick={onClose}>Cancel</Button>}
                <Button isLoading={loading} colorScheme="teal" type="submit">Enregistrer</Button>
            </HStack>

        {/* <AlertDialog
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
        </AlertDialog> */}
   </Form>

    )
}
