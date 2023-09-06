package com.cnrc.grh.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "CONTRAT_DE_TRAVAIL")
public class Contrat {
    @Id
    @Column(name = "NUM_CONTRAT")
    private String id;
    @Column(name = "DATE_DEBUT")
    private Date dateDebut;
    @Column(name = "DATE_FIN")
    private Date dateFin;

}
