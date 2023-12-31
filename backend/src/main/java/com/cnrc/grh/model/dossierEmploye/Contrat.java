package com.cnrc.grh.model.dossierEmploye;

import jakarta.persistence.*;
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
    @Column(name = "DUREE")
    private Float duree;
    @Column(name = "TYPE_CONTRAT")
    private String type;


    @ManyToOne
    @JoinColumn(name = "MAT", referencedColumnName = "MAT")
    private EmplTemp emplTemp;

}
