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
@Table(name = "PRIME")
public class Prime {
    @Id
    @Column(name = "MAT")
    private String id;
    @Column(name = "MONTANT")
    private int ValPrime;

}
