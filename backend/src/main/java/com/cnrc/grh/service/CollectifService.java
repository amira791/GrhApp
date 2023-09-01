package com.cnrc.grh.service;

import com.cnrc.grh.model.Collectif;
import com.cnrc.grh.repository.CollectifRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CollectifService {
    private CollectifRepository collectifRepository;

    @Autowired

    public CollectifService(CollectifRepository collectifRepository) {
        this.collectifRepository = collectifRepository;
    }

    public List<Collectif> getCollectifList() {
        return collectifRepository.findAll();
    }

    public Optional<Collectif> getCollectifById(String id) {
        return collectifRepository.findById(id);
    }

    public Collectif CreateCollectif(Collectif Col) {
        return collectifRepository.save(Col);
    }

    public Collectif updateCollectif(String id, Collectif updatedCollectif) {
        Collectif existingCollectif = collectifRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categorie not found"));

        existingCollectif.setCollectifDesignation(updatedCollectif.getCollectifDesignation());
        existingCollectif.setCollectifDesignationAr(updatedCollectif.getCollectifDesignationAr());

        return collectifRepository.save(existingCollectif);
    }

    public void deleteCollectif(String id) {
        collectifRepository.deleteById(id);
    }

}
