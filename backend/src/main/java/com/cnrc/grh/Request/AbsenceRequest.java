package com.cnrc.grh.Request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AbsenceRequest {
    public Float nbrAbsence;
    public String autorisee;
}
