package com.cnrc.grh.model.dossierEmploye;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "TYPE_CONTRAT")
public class TypeContrat {
    @Id
    @Column(name = "CODE_TYPE_CONTRAT")
    private String id;
    @Column(name = "LIB_TYPE_CONTRAT")
    private String libelle;
    @Column(name = "LIB_TYPE_CONTRAT_AR")
    private String libelleAr;
    @Column(name = "NATURE")
    private String nature;
    // add a column for fichier
}
