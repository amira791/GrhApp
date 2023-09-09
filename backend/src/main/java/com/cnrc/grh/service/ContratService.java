package com.cnrc.grh.service;

import com.cnrc.grh.Request.AlreadyExistsException;
import com.cnrc.grh.model.Contrat;
import com.cnrc.grh.model.MotifContrat;
import com.cnrc.grh.model.TypeContrat;
import com.cnrc.grh.repository.ContratRepository;
import com.cnrc.grh.repository.MotifContratRepository;
import com.cnrc.grh.repository.TypeContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContratService {
    private final ContratRepository contratRepository;
    private final TypeContratRepository typeContratRepository;

    private final MotifContratRepository motifContratRepository;

    @Autowired
    public ContratService(ContratRepository contratRepository , TypeContratRepository typeContratRepository , MotifContratRepository motifContratRepository) {
        this.contratRepository = contratRepository;
        this.typeContratRepository = typeContratRepository;
        this.motifContratRepository = motifContratRepository;
    }

    // gestion des motifs de contrat
    // maybe we need later to create and modify them

    public List<MotifContrat> getMotifContratList() {return motifContratRepository.findAll();}

    public MotifContrat getMotifContratById(String id) {return motifContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Motif de contrat non trouvé"));}


    // gestion des types de contrats
    public List<TypeContrat> getTypeContratList() {return typeContratRepository.findAll();}

    public TypeContrat getTypeContratById(String id) {return typeContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Type de contrat non trouvé"));}

    public void createTypeContrat(TypeContrat type) {
        if(typeContratRepository.existsById(type.getId())) {
           throw new AlreadyExistsException("le type de contrat existe deja ");
        }
        else typeContratRepository.save(type);
    }
    public void updateTypeContrat(String id, TypeContrat updatedTypeContrat) {
        TypeContrat typeContrat = typeContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Type de contrat non trouvé"));
        typeContrat.setLibelle(updatedTypeContrat.getLibelle());
        typeContrat.setLibelleAr(updatedTypeContrat.getLibelleAr());
        typeContrat.setNature(updatedTypeContrat.getNature());
        typeContratRepository.save(typeContrat);
    }
    public void deleteTypeContrat(String id) {typeContratRepository.deleteById(id);}

    // gestion des contrats
    public List<Contrat> getContratList() {return contratRepository.findAll();}

    public Contrat getContratById(String id) {return contratRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));}

    public void createContrat(Contrat contrat) {
        if(contratRepository.existsById(contrat.getId())){
            throw new AlreadyExistsException("Le contrat avec l'id :" + contrat.getId() +"existe deja");
        }
        else contratRepository.save(contrat);}
    public void updateContrat(String id , Contrat updatedContrat) {
        Contrat contrat = contratRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));
        contrat.setDateDebut(updatedContrat.getDateDebut());
        contrat.setDateFin(updatedContrat.getDateFin());
        contrat.setDuree(updatedContrat.getDuree());
        contrat.setType(updatedContrat.getType());
        contrat.setMotif(updatedContrat.getMotif());
        contratRepository.save(contrat);
    }
    public void deleteContrat(String id) {contratRepository.deleteById(id);}


}
