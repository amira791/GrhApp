package com.cnrc.grh.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Date;

@Embeddable
public class MutationUnitePK implements Serializable {
    @Column(name = "MAT")
    private String id;

    @Column(name = "DATE_MUTATION")
    private Date dateMutation;

    @Column(name = "CODE_UNITE")
    private String codeUnite;

    public MutationUnitePK() {
        // Default constructor
    }

    public MutationUnitePK(String id, Date dateMutation, String codeUnite) {
        this.id = id;
        this.dateMutation = dateMutation;
        this.codeUnite = codeUnite;
    }

    // Getters and setters...
}
