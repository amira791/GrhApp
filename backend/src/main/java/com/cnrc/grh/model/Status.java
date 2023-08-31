package com.cnrc.grh.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "STATUT")
@NoArgsConstructor

public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODE_STATUT")
    private String id;
    @Column(name = "LIB_STATUT")
    private String StatusDesignation;
    @Column(name = "LIB_STATUT_AR")
    private String StatusDesignationAr;

    public Status(String StatusDesignation, String StatusDesignationAr) {
        this.StatusDesignation = StatusDesignation;
        this.StatusDesignationAr = StatusDesignationAr;
    }
}
