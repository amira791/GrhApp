package com.cnrc.grh.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @Autowired

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("register")
    public AuthenticationResponse register(
            @RequestBody RegisterRequest request
    ){
       return authenticationService.register(request);
    }
    @PostMapping("authenticate")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest request
    ){
        return authenticationService.authenticate(request);
    }
}
