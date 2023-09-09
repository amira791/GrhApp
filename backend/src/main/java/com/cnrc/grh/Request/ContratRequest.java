package com.cnrc.grh.Request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContratRequest {
    private Date dateDebut;
    private Date dateFin;
    private Float duree;
    private String type;
    private String motif;
}
