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
@Table(name = "CATEGORIE")

public class Categorie {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODE_CAT")
    private String id;
    @Column(name = "LIB_CAT")
    private String CategorieDesignation;
    @Column(name = "LIB_CAT_AR")
    private String CategorieDesignationAr;
}
