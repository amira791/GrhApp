package com.cnrc.grh.repository;

import com.cnrc.grh.model.Absence;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AbsenceRepository extends JpaRepository<Absence, Absence.AbsenceId> {
}
