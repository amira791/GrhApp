package com.cnrc.grh.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "utilisateur")
public class Utilisateur {
    @Id
    @Column(name = "NOM_UTIL")
    private String id;
    @Column(name = "PASSWORD_UTIL")
    private String password;
    @Column(name = "CONFIRM_UTIL")
    private String confirme;
    @Column(name = "FONCTION_UTIL")
    private String fonction;
    @Column(name = "TYPE_UTIL")
    private String type;
    @Column(name = "ACTIF_UTIL")
    private String actif;

}
