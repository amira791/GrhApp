package com.cnrc.grh.service;

import com.cnrc.grh.model.Utilisateur;
import com.cnrc.grh.repository.UtilisateruRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class UtilisateurService {
    private UtilisateruRepository utilisateruRepository;

    @Autowired
    public UtilisateurService(UtilisateruRepository utilisateruRepository) {
        this.utilisateruRepository = utilisateruRepository;
    }

    public List<Utilisateur> getUtilisateurs() {
        return this.utilisateruRepository.findAll();
    }

    public Utilisateur getUtilisateur(String id) {
        return this.utilisateruRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));
    }

    public void createUtilisateur(Utilisateur util ){
        utilisateruRepository.save(util);
    }
    public void updateUtilisateur(String id , Utilisateur updatedUtil){
        Utilisateur util = getUtilisateur(id);
        util.setPassword(updatedUtil.getPassword());
        util.setActif(updatedUtil.getActif());
        util.setType(updatedUtil.getType());
        util.setConfirme(updatedUtil.getConfirme());
        util.setFonction(updatedUtil.getFonction());
        utilisateruRepository.save(util);
    }
    public void deleteUtilisateur(String id) {
     utilisateruRepository.deleteById(id);
    }}
