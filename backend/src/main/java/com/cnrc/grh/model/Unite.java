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
@Table(name = "UNITE")
public class Unite {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODE_UNI")
    private String id;
    @Column(name = "LIB_UNI")
    private String uniteDesignation;
    @Column(name = "LIB_UNI_AR")
    private String uniteDesignationAr;
}
