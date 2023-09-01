package com.cnrc.grh.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "CATEGORI")

public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODE_CAT")
    private String id;
    @Column(name = "LIB_CAT")
    private String CategorieDesignation;
    @Column(name = "LIB_CAT_AR")
    private String CategorieDesignationAr;
}
