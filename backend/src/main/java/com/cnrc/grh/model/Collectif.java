package com.cnrc.grh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import com.cnrc.grh.model.Employe; // Import the Employee model

@Entity
public class Collectif {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String collectifDesignation;

    // Other fields

    @OneToMany(mappedBy = "collectif") // One-to-Many relationship with Employee
    private List<Employe> employes;   // Optional: To access employees from the collective

    // Constructors, getters, setters
}
