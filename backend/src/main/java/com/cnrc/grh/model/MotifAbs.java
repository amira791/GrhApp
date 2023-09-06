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
@Table(name="MOTIF_ABSENCE")
@NoArgsConstructor
@AllArgsConstructor
public class MotifAbs {
    @Id
    @Column(name="CODE_ABSENCE")
    private String id;
    @Column(name="LIB_ABSENCE")
    private String libelle;
}
