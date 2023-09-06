package com.cnrc.grh.controller;

import com.cnrc.grh.model.Absence;
import com.cnrc.grh.model.MotifAbs;
import com.cnrc.grh.service.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/Absences")
public class AbsenceController {

    private final AbsenceService absSer;


    @Autowired
    public AbsenceController(AbsenceService absSer) {
        this.absSer = absSer;
    }

    // gestion des motifs
    @GetMapping("Motifs/all")
    public List<MotifAbs> getMotifs() {
        return absSer.getMotifList();
    }
    @GetMapping("Motifs/{id}")
    public MotifAbs getMotif(@PathVariable String id) {
        return absSer.getMotifById(id);
    }
    @PostMapping("Motifs/new")
    public void addMotif(@RequestBody MotifAbs motif) {
        absSer.createMotif(motif);
    }
    @PutMapping("Motifs/update/{id}")
    public void updateMotif(@PathVariable String id, @RequestBody MotifAbs updatedMotif) {
        absSer.updateMotif(id, updatedMotif);
    }
    @DeleteMapping("Motifs/delete/{id}")
    public void deleteMotif(@PathVariable String id) {
        absSer.deleteMotif(id);
    }

    // gestion des absences
    @GetMapping("/all")
    public List<Absence> getAbsences() {
        return absSer.getAbsencesList();
    }

    @GetMapping("/{id}")
    public Absence getAbsence(@PathVariable Absence.AbsenceId id) {
        return absSer.getAbsenceById(id).orElse(null);
    }

    @PostMapping("/new")
    public void addAbsence(@RequestBody Absence abs) {
        Absence.AbsenceId id = new Absence.AbsenceId();
        id.setCode(abs.getId().getCode());
        id.setMatricule(abs.getId().getMatricule());
        id.setDateDebut(abs.getId().getDateDebut());
        id.setDateFin(abs.getId().getDateFin());
        Absence absence = new Absence();
        absence.setId(id);
        absence.setNbAbsence(abs.getNbAbsence());
        absence.setAutorisee(abs.getAutorisee());
        absSer.createAbsence(absence);
    }
    @PutMapping("/update/{code}/{dateDebut}/{dateFin}/{matricule}")
    public void updateAbsence(@PathVariable String code,
                              @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX") Date dateDebut,
                              @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX") Date dateFin,
                              @PathVariable String matricule,
                              @RequestBody Absence updatedAbsence) {

        Absence.AbsenceId id = new Absence.AbsenceId();
        id.setCode(code);
        id.setDateDebut(dateDebut);
        id.setDateFin(dateFin);
        id.setMatricule(matricule);
        absSer.updateAbsence(id ,updatedAbsence);
    }
    @DeleteMapping("/delete/{code}/{dateDebut}/{dateFin}/{matricule}")
    public void deleteAbsence(@PathVariable String code,
                              @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX") Date dateDebut,
                              @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX") Date dateFin,
                              @PathVariable String matricule) {
        Absence.AbsenceId id = new Absence.AbsenceId();
        id.setCode(code);
        id.setDateDebut(dateDebut);
        id.setDateFin(dateFin);
        id.setMatricule(matricule);

        absSer.deleteAbsence(id);
    }

}
