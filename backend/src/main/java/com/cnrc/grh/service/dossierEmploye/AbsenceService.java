package com.cnrc.grh.service.dossierEmploye;

import com.cnrc.grh.Request.AbsenceRequest;
import com.cnrc.grh.Request.AlreadyExistsException;
import com.cnrc.grh.model.dossierEmploye.Absence;
import com.cnrc.grh.model.dossierEmploye.Motifabs;
import com.cnrc.grh.repository.dossierEmploye.AbsenceRepository;
import com.cnrc.grh.repository.dossierEmploye.MotifAbsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AbsenceService {
    private final AbsenceRepository absenceRepository;
    private final MotifAbsRepository motifAbsRepository;

    @Autowired
    public AbsenceService(AbsenceRepository absenceRepository , MotifAbsRepository motifAbsRepository) {

        this.absenceRepository = absenceRepository;
        this.motifAbsRepository = motifAbsRepository;
    }

    //gestion des motifs

    public Motifabs getMotifById(String id) { return motifAbsRepository.findById(id).orElseThrow();}
    public List<Motifabs> getMotifList() {return motifAbsRepository.findAll();}

    public void createMotif(Motifabs motif) {

        if(motifAbsRepository.existsById(motif.getId())){
            throw new AlreadyExistsException("Le contrat avec l'id :" + motif.getId() +"existe deja");
        }
        else motifAbsRepository.save(motif);}

    public void deleteMotif(String id) { motifAbsRepository.deleteById(id);}

    public void updateMotif(String id , Motifabs updatedMotif){
        Motifabs motif = getMotifById(id);
        motif.setLibelle(updatedMotif.getLibelle());
        motif.setLibelleAr(updatedMotif.getLibelleAr());
        motifAbsRepository.save(motif);
    }


    //gestion des absences


    public List<Absence> getAbsencesList() { return absenceRepository.findAll();}
    public Optional<Absence> getAbsenceById(Absence.AbsenceId id) {return absenceRepository.findById(id);}
    public void createAbsence(Absence absence){
        if(absenceRepository.existsById(absence.getId())){
            throw new AlreadyExistsException("Le contrat avec l'id :" + absence.getId() +"existe deja");
        }
        else absenceRepository.save(absence); }

    public void updateAbsence(Absence.AbsenceId id, AbsenceRequest updatedAbsence) {
        Absence absence = getAbsenceById(id).orElseThrow();
        absence.setNbAbsence(updatedAbsence.getNbrAbsence());
        absence.setAutorisee(updatedAbsence.getAutorisee());
        absenceRepository.save(absence);
    }
    public void deleteAbsence(Absence.AbsenceId id) { absenceRepository.deleteById(id); }

}


