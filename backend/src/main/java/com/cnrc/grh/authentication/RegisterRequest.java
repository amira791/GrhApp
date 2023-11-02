package com.cnrc.grh.authentication;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class RegisterRequest {

    private String username;

    private String password;

    private String fonction;

    private String type;

    private String actif;


}
