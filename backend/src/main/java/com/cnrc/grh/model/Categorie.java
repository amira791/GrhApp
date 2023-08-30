package com.cnrc.grh.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import com.cnrc.grh.model.Employe;

import java.util.List;

public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String CategorieDesignation;

    // Other fields

    @OneToMany(mappedBy = "categorie") // One-to-Many relationship with Employee
    private List<Employe> employes;
}
