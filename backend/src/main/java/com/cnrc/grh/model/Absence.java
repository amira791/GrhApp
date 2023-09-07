package com.cnrc.grh.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;
@Data
@Entity
@Table(name = "ABSENCES_HISTO")
@NoArgsConstructor
@AllArgsConstructor
public class Absence implements Serializable {
    @Embeddable
    @Data
    public static class AbsenceId implements Serializable {

        @Column(name = "CODE_ABS")
        private String code;
        @Column(name = "DATE_DEBUT")
        private Date dateDebut;
        @Column(name = "DATE_FIN")
        private Date dateFin;
        @Column(name = "MAT")
        private String matricule;
//        @ManyToOne(fetch =FetchType.LAZY , optional = false)
//        @JoinColumn(name = "CODE_ABS", referencedColumnName = "CODE_ABSENCE" )
//        private Motifabs motifAbs;
    }

    @EmbeddedId
    private AbsenceId id;
    @Column(name = "NOMBRE")
    private Float nbAbsence;
    @Column(name = "AUTORISEE")
    private String autorisee ;

}




