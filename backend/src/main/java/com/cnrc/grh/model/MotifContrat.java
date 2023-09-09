package com.cnrc.grh.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "MOTIF_FIN_CONTRAT")
public class MotifContrat {
    @Id
    @Column(name = "CODE_MOTIF_FIN_CONTRAT")
    private String id;
    @Column(name = "LIB_MOTIF_FIN_CONTRAT")
    private String libelle;
    @Column(name = "LIB_MOTIF_FIN_CONTRAT_AR")
    private String libelleAr;
}
