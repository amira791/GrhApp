// Employee.java (Model)
package com.cnrc.grh.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MAT")
    private Long id;

    private String nom;
    private String prenom;
    private String NomJeuneFille;
    private String NbEnfant;

    private String LieuNaissance;
    private LocalDate DateNaissance;
    private String Sexe;
    private String SituationFamiliale;
    private long NumTelephone;
    private long NSS;
    private String Adresse;
    private long CaisseCNAS;AGENCE_DAS

    private String NiveauEtude;
    private LocalDate DateEntree;
}
//    @ManyToOne
//    private Collectif Collec; // Many-to-One relationship with Collectif
//
//    @ManyToOne
//    private Status Sta; // Many-to-One relationship with Status
//
//
//    @OneToMany(mappedBy = "employe") // Relation One-to-Many avec Diplome
//    private List<Diplome> Dip;
//
//    private LocalDate DateSortie;
//
//    @OneToMany(mappedBy = "employe") // Relation One-to-Many avec Diplome
//    private List<Unite> unite;