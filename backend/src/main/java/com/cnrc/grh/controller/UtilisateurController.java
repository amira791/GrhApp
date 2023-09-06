package com.cnrc.grh.controller;

import com.cnrc.grh.model.Utilisateur;
import com.cnrc.grh.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/utilisateurs")
public class UtilisateurController {
    private UtilisateurService utilisateurService ;
    @Autowired
    public UtilisateurController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    @GetMapping("/all")
    public List<Utilisateur> getAllUtilisateur(){
        return utilisateurService.getUtilisateurs();
    }


}
