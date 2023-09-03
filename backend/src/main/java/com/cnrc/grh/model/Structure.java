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
@Table(name = "STRUCTURE")
public class Structure {
    @Id
    @Column(name = "CODE_STR")
    private String id;
    @Column(name = "LIB_STR")
    private String StructureDesignation;
    @Column(name = "TYPE_STR")
    private String TypeStructure;
    @Column(name = "BLOQUE")
    private String Bloque;
    @Column(name = "LIB_STR_AR")
    private String StructureDesignationAr;

}
