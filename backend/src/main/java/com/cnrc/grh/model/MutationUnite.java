package com.cnrc.grh.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.Date;


@Entity
@Table(name = "MOUV_MUTATIONINTERUNITE")
public class MutationUnite {
    @EmbeddedId
    private MutationUnitePK id;

    @Column(name = "CODE_UNITE_ORIGINE")
    private String uniteOrigine;

    @Column(name = "MOTIF_MUTATION")
    private String motifMutation;

    @Column(name = "REF_DECISION")
    private String refDecision;

    @Column(name = "DATE_DECISION")
    private Date dateDecision;

    @Column(name = "OBSERVATION")
    private String observation;

    @Column(name = "DATE_FIN_MUTATION")
    private Date dateFinMutation;

    // Constructors, getters, setters...
}

