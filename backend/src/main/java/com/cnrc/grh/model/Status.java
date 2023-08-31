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
@Table(name = "STATUT")
public class Status {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODE_STATUT")
    private String id;
    @Column(name = "LIB_STATUT")
    private String StatusDesignation;
    @Column(name = "LIB_STATUT_AR")
    private String StatusDesignationAr;

//    public Status(String StatusDesignation, String StatusDesignationAr) {
//        this.StatusDesignation = StatusDesignation;
//        this.StatusDesignationAr = StatusDesignationAr;
//    }
}
