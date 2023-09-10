package com.cnrc.grh.repository.dossierEmploye;

import com.cnrc.grh.model.dossierEmploye.Absence;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AbsenceRepository extends JpaRepository<Absence, Absence.AbsenceId> {
}
