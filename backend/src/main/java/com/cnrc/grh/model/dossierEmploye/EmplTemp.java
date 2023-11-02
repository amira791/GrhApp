package com.cnrc.grh.model.dossierEmploye;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "EMPLOYE_TEMP")
public class EmplTemp {
 
    @Id
    @Column(name = "MAT")
    private String matricule;

    @Column(name = "NOM")
    private String nom;

    @Column(name = "PRE")
    private String prenom;

}
