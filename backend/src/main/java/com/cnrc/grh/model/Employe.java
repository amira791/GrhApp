package com.cnrc.grh.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "EMPLOYE")

public class Employe {
    @Id
    @Column(name = "MAT")
    private String id;
    @Column(name = "NOM")
    private String Nom;
    @Column(name = "PRE")
    private String Prenom;
    @Column(name = "NJFILLE")
    private String NomJeuneF;
    @Column(name = "ADR")
    private String Adr;
    @Column(name = "CODE_UNITE")
    private String CodeUnite;
    @Column(name = "CODE_POSTE")
    private String CodePoste;
    @Column(name = "CODE_STRUCTURE")
    private String CodeStructure;
    @Column(name = "CODE_CATEGORIE")
    private String CodeCategorie;
    @Column(name = "CODE_NATIONALITE")
    private String Nationalite;
    @Column(name = "CODE_COLLECTIF")
    private String CodeCollectif;
    @Column(name = "CODE_WILAYA")
    private String CodeWilaya;
    @Column(name = "CODE_AGENCE")
    private String CodeAgence;
    @Column(name = "CODE_STATUT")
    private String CodeStatus;
    @Column(name = "SEXE")
    private String Sexe;
    @Column(name = "SIT_FAM")
    private String SituationFamiliale;
    @Column(name = "NUM_SS")
    private String NSS;
    @Column(name = "DATE_ENT")
    private Date DateEntree;
    @Column(name = "DATE_SOR")
    private Date DateSortie;
    @Column(name = "DATE_NAI")
    private Date DateNaissance;
    @Column(name = "LIEU_NAI")
    private String LieuNaissance;
    @Column(name = "MODE_PAYE")
    private String ModePaiement;
    @Column(name = "NUM_COMPTE")
    private String NumCompte;
    @Column(name = "CAT")
    private String Categorie;
    @Column(name = "ECH")
    private String Echelon;
    @Column(name = "SAL_BAS")
    private Float SalBase;
    @Column(name = "NUM_TEL")
    private String NumTelephone;
    @Column(name = "GROUPE_SANGUIN")
    private String GroupeSanguin;
    @Column(name = "HANDICAPE")
    private String Handicape;
    @Column(name = "NIVEAU_ETUDE")
    private String NiveauEtude;


}
