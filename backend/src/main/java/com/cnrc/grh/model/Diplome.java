package com.cnrc.grh.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import com.cnrc.grh.model.Employe;
public class Diplome {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String DiplomeDesignation;


    @ManyToOne
    private Employe employe; // Relation Many-to-One avec Employee

}
