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
@Table(name = "COLLECTIF")
public class Collectif {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODE_COL")
    private String id;
    @Column(name = "LIB_COL")
    private String CollectifDesignation;
    @Column(name = "LIB_COL_AR")
    private String CollectifDesignationAr;


}
