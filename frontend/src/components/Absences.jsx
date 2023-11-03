import {

  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Skeleton,
  useToast
} from '@chakra-ui/react'
import { AddIcon, QuestionIcon , DownloadIcon } from '@chakra-ui/icons'
import { React, useRef, useState, useEffect } from 'react'


// components
import AbsencesTable from './tables/AbsencesTable'
import useAbsences from '../hooks/useAbsences'
import useMotifsAbs from '../hooks/useMotifsAbs'
import MotifsTable from './tables/MotifsTable'
import AbsenceForm from './forms/AbsenceForm'
import { writeFileSync } from 'xlsx';
import * as XLSX from 'xlsx';

export default function Absences() {
  const [isMotif, setIsMotif] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const { absences, loading, error, fetchAllAbsences } = useAbsences();
  const { motifsAbs, fetchAllMotifsAbs } = useMotifsAbs()
  const toast = useToast()
  const data = {
    id: {
      code: '',
      matricule: '',
      dateDebut: '',
      dateFin: ''
    },
    nbAbsence: 0,
    autorisee: 'F'
  }
  useEffect(() => {
    fetchAllAbsences();
    fetchAllMotifsAbs();
  }, [!isOpen]);

  
  const exportToExcel = () => {
    
    const dataToExport = absences.map((abs) => ({
      CodeAbsence: abs.id.code,
      matricule : abs.id.matricule || "matricule",
      DateDebut: abs.id.dateDebut,
      DateFin: abs.id.dateFin,
      NombreAbsences : abs.nbAbsence,
    }));
  
    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    // Create a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AbsencesData');
    // Create a buffer and write the workbook to it
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    // Create a Blob from the buffer
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    // Create a download link for the Blob
    const url = window.URL.createObjectURL(blob);
  
    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'absences_data.xlsx';
    a.click();
  
    // Release the Blob URL
    window.URL.revokeObjectURL(url);
  };


  return (

    <>
  
      <HStack justifyContent="flex-end" gap="10px">
      <Button
        leftIcon={<DownloadIcon />}
        variant="outline"
        colorScheme="teal"
        onClick={exportToExcel}
      >Exporter la liste</Button>
        <Button
          leftIcon={<QuestionIcon />}
          variant="outline"
          colorScheme="teal"
          onClick={() => { setIsMotif(true); onOpen(); }}
        >Consulter motifs</Button>

        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          onClick={() => { setIsMotif(false); onOpen(); }}
        >Ajouter une absence</Button>

      </HStack>

      {error ? <Alert status='error' variant='left-accent'>
        <AlertIcon />{error.message}
      </Alert>
        :
        <Skeleton height="100vh" isLoaded={!loading}>

          <AbsencesTable absences={absences} motifs={motifsAbs} />
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
          <ModalHeader>{isMotif ? 'Consulter motif' : 'Saisir une absence'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {!isMotif && <AbsenceForm initialData={data} onClose={onClose} forModification={false} />}
            {motifsAbs && isMotif && <MotifsTable useFunction={useMotifsAbs} motifs={motifsAbs} />}
          </ModalBody>
        </ModalContent>
      </Modal>

    </>


  )
}