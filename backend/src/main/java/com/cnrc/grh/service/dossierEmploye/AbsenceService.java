package com.cnrc.grh.service.dossierEmploye;

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
            throw new AlreadyExistsException("Le motif avec l'id :" + motif.getId() +"existe deja");
        }
        else motifAbsRepository.save(motif);}

    public void updateMotif(String id , Motifabs updatedMotif){

        if (motifAbsRepository.existsById(id)){
            Motifabs motif = getMotifById(id);
            motif.setLibelle(updatedMotif.getLibelle());
            motif.setLibelleAr(updatedMotif.getLibelleAr());
            motifAbsRepository.save(motif);
        }else{
            throw new RuntimeException("motif non trouvee");
        }

    }

    public void deleteMotif(String id) {
        if (motifAbsRepository.existsById(id)){
            motifAbsRepository.deleteById(id);
        }else{
            throw new RuntimeException("motif non trouvee");
        }
    }

    //gestion des absences


    public List<Absence> getAbsencesList() { return absenceRepository.findAll();}
    public Optional<Absence> getAbsenceById(Absence.AbsenceId id) {return absenceRepository.findById(id);}
    public void createAbsence(Absence absence){
        // todo calculate nb absence auto , and autorise or not
        if(absenceRepository.existsById(absence.getId())){
            throw new AlreadyExistsException("L'absence avec l'id :" + absence.getId() +"existe deja");
        }
        else absenceRepository.save(absence); }

    public void updateAbsence(Absence.AbsenceId id, Absence updatedAbsence) {
        if(absenceRepository.existsById(id)) {

            Absence absence = getAbsenceById(id).orElseThrow();
            absence.setNbAbsence(updatedAbsence.getNbAbsence());
            absence.setAutorisee(updatedAbsence.getAutorisee());
            absenceRepository.save(absence);
        }else throw new AlreadyExistsException("L'absence avec l'id :" + id + "n'existe pas");
    }
    public void deleteAbsence(Absence.AbsenceId id) {
        System.out.println(absenceRepository.existsById(id));
        if (absenceRepository.existsById(id)){
            absenceRepository.deleteById(id);
        }else{
            throw new RuntimeException("absence non trouvee");
        }
    }

}


