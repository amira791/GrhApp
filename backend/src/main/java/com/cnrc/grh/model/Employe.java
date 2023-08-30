// Employee.java (Model)
package com.cnrc.grh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Employe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String NomJeuneFille;
    private String NbEnfant;

    private String LieuNaissance;
    private LocalDate dateOfBirth;
    private long NumTelephone;


