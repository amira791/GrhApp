package com.cnrc.grh.service;

import com.cnrc.grh.model.Contrat;
import com.cnrc.grh.model.TypeContrat;
import com.cnrc.grh.repository.ContratRepository;
import com.cnrc.grh.repository.TypeContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContratService {
    private final ContratRepository contratRepository;
    private final TypeContratRepository typeContratRepository;

    @Autowired
    public ContratService(ContratRepository contratRepository , TypeContratRepository typeContratRepository) {
        this.contratRepository = contratRepository;
        this.typeContratRepository = typeContratRepository;
    }

    // gestion des types de contrats
    public List<TypeContrat> getTypeContratList() {return typeContratRepository.findAll();}

    public TypeContrat getTypeContratById(String id) {return typeContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Type de contrat non trouvé"));}

    public void createTypeContrat(TypeContrat type) {
        typeContratRepository.save(type);
    }
    public void updateTypeContrat(String id, TypeContrat updatedTypeContrat) {
        TypeContrat typeContrat = typeContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Type de contrat non trouvé"));
        typeContrat.setLibelle(updatedTypeContrat.getLibelle());
        typeContratRepository.save(typeContrat);
    }
    public void deleteTypeContrat(String id) {typeContratRepository.deleteById(id);}

    // gestion des contrats
    public List<Contrat> getContratList() {return contratRepository.findAll();}

    public Contrat getContratById(String id) {return contratRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));}

    public void createContrat(Contrat contrat) {contratRepository.save(contrat);}
    public void updateContrat(String id , Contrat updatedContrat) {
        Contrat contrat = contratRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));

        contratRepository.save(contrat);
    }
    public void deleteContrat(String id) {contratRepository.deleteById(id);}


}
