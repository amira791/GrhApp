import { CloseIcon } from '@chakra-ui/icons';
import {
    Button, Checkbox,
    FormControl, FormHelperText, FormLabel,
    HStack,
    Input, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput, NumberInputField, NumberInputStepper,
    Select,
    Spacer
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import useContrats from '../../hooks/useContrats'
import useTypesCntr from '../../hooks/useTypesCntr'
import useMotifsCntr from '../../hooks/useMotifsCntr'


export default function ContratForm({ initialData, forModification, onClose }) {

    const [id, setId] = useState(initialData.id)
    const [matricule, setMatricule] = useState(initialData.matricule);
    const [dateDebut, setDateDebut] = useState(initialData.dateDebut);
    const [dateFin, setDateFin] = useState(initialData.dateFin);
    const [duree, setDuree] = useState(initialData.duree);
    console.log(initialData.type+"this is the inial value")
    const [type ,setType]= useState(initialData.type);
    const [motif,setMotif] = useState(initialData.motif)

    const{loading  , addNewContrat , updateContrat , deleteContrat} = useContrats() 
    const{types ,fetchAllTypes } = useTypesCntr()
    const{motifs ,fetchAllMotifs } = useMotifsCntr()


    useEffect(() => {
        fetchAllMotifs()
        fetchAllTypes()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const contrat = {     
            id: id,
            matricule: matricule,
            dateDebut: dateDebut ,
            dateFin: dateFin,
            duree: duree,
            type: type,
            motif : motif
        };
        console.log(contrat)
        addNewContrat(contrat)
        onClose()  
    }

    const handleUpdate = async (event) => {
        const data = { 
            id : id ,    
            dateDebut: dateDebut,
            dateFin: dateFin ,
            matricule: matricule,
            duree: duree,
            type: type,
            motif : motif
        };

        event.preventDefault();
        console.log(data)
        updateContrat(data);
        onClose() 
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log(id)
        deleteContrat(id)
        onClose() 
    }


    return (
        <Form onSubmit={forModification ? handleUpdate : handleSubmit}>

            <FormControl isRequired >
                <FormLabel>Matricule</FormLabel>
                <Input
                    value={matricule}
                     // matricule cannot be modified
                    onChange={(e) => {!forModification && setMatricule(e.target.value) }}
                    type="text" />
                <FormHelperText>Saisir le matricule de l'employe</FormHelperText>
            </FormControl>

             <FormControl isRequired >
                <FormLabel>Numero de contrat</FormLabel>
                 <Input
                    value={id}
                    // id cannot be modified cuz it is the key of contrat
                    onChange={(e) => {!forModification && setId(e.target.value) }}
                    type="text" />
                </FormControl>            

            <FormControl>
              <FormLabel>Type de contrat</FormLabel>
                <Select
                  
                    onChange={(e) => setType(e.target.value) }
                    placeholder='Selectionnez un type'>
                        <default >{initialData.type}</default>
                    {types?.map((t , index) => (
                        <option key={index} value={t.id}>{t.libelle}</option>
                    ))}
                </Select>


            </FormControl>

           
            <FormControl isRequired >
                <FormLabel>Date de debut</FormLabel>
                <Input
                    value={dateDebut.split('T')[0]} // split to remove the time from date
                    onChange={(e) => setDateDebut(e.target.value) }
                    type="date" />
            </FormControl>

            <FormControl isRequired >
                <FormLabel>Date de fin</FormLabel>
                <Input
                    value={dateFin.split('T')[0]}// split to remove the time from date
                    onChange={(e) =>  setDateFin(e.target.value)}
                    type="date" />
            </FormControl>

            <FormControl isRequired >
                <FormLabel>Duree (en mois) </FormLabel>
                <NumberInput
                    value={duree}
                    // to convert it into float duree is declared as float in DB
                    onChange={(valueString) => setDuree((parseFloat(valueString)))}
                    max={50} min={0}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Motif de contrat</FormLabel>
                <Select
                    onChange={(e) => {!forModification && setMotif(e.target.value) }}
                    placeholder='Selectionnez un motif'>
                    {motifs.map((m , index) => (
                        <option key={index} value={m.id}>{m.libelle}</option>
                    ))}
                </Select>
            </FormControl>

            <HStack mt="5px" gap="10px" alignContent="center" justifyContent="flex-end">
                {forModification && <Button onClick={onClose}>Imprimer</Button>}
                <Spacer/>
            
                {/* show Cancel button in case of addition of new absence */}
                <Button onClick={onClose} variant="outline" colorScheme='teal'>Cancel</Button>
                <Button isLoading={loading} colorScheme="teal" type="submit" >Enregistrer</Button>
            </HStack>
        </Form>
    )
}
