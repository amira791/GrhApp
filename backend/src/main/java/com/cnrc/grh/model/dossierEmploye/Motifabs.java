package com.cnrc.grh.model.dossierEmploye;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="MOTIF_ABSENCE")
@NoArgsConstructor
@AllArgsConstructor
public class Motifabs {
    @Id
    @Column(name="CODE_ABSENCE")
    private String id;
    @Column(name="LIB_ABSENCE")
    private String libelle;
    @Column(name = "LIB_ABSENCE_AR")
    private String libelleAr;

}

