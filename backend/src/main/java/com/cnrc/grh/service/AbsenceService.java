package com.cnrc.grh.service;

import com.cnrc.grh.model.Absence;
import com.cnrc.grh.model.MotifAbs;
import com.cnrc.grh.repository.AbsenceRepository;
import com.cnrc.grh.repository.MotifAbsRepository;
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

    public MotifAbs getMotifById(String id) { return motifAbsRepository.findById(id).orElse(null);}
    public List<MotifAbs> getMotifList() {return motifAbsRepository.findAll();}

    public void createMotif(MotifAbs motif) { motifAbsRepository.save(motif);}

    public void deleteMotif(String id) { motifAbsRepository.deleteById(id);}

    public void updateMotif(String id , MotifAbs updatedMotif){
        MotifAbs motif = motifAbsRepository.findById(id).orElse(null);
        motif.setLibelle(updatedMotif.getLibelle());
        motifAbsRepository.save(motif);
    }


    //gestion des absences

    public List<Absence> getAbsencesList() { return absenceRepository.findAll();}
    public Optional<Absence> getAbsenceById(Absence.AbsenceId id) {return absenceRepository.findById(id);}
    public void createAbsence(Absence absence){ absenceRepository.save(absence); }

    public void updateAbsence(Absence.AbsenceId id, Absence updatedAbsence) {
        deleteAbsence(id);
        Absence absence = new Absence();
        absence.setId(updatedAbsence.getId());
        absence.setNbAbsence(updatedAbsence.getNbAbsence());
        absence.setAutorisee(updatedAbsence.getAutorisee());
        absenceRepository.save(absence);
    }
    public void deleteAbsence(Absence.AbsenceId id) { absenceRepository.deleteById(id); }

    }


