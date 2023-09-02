package com.cnrc.grh.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "POSTE")


public class PosteTravail {
    @Id
    @Column(name = "CODE_POSTE")
    private String id;
    @Column(name = "LIB_POSTE")
    private String PosteDesignation;
    @Column(name = "NBRE_POSTE")
    private Float NbPoste;
    @Column(name = "LIB_POSTE_AR")
    private String PosteDesignationAr;
    @Column(name = "CODE_NIVEAU")
    private String CodeNiveau;

}
