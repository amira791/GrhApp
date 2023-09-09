package com.cnrc.grh.repository.dossierEmploye;

import com.cnrc.grh.model.dossierEmploye.Contrat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContratRepository extends JpaRepository<Contrat,String> {
}
