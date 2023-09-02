package com.cnrc.grh.service;

import com.cnrc.grh.model.Unite;
import com.cnrc.grh.repository.UniteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UniteService {
    private UniteRepository uniteRepository;

    @Autowired

    public UniteService(UniteRepository uniteRepository) {
        this.uniteRepository = uniteRepository;
    }

    public List<Unite> getUniteList() {
        return uniteRepository.findAll();
    }

    public Optional<Unite> getUniteById(String id) {
        return uniteRepository.findById(id);
    }

    public Unite CreateUnite(Unite Un) {
        return uniteRepository.save(Un);
    }

    public Unite updateUnite(String id, Unite updatedUnite) {
        Unite existingUnite = uniteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Unite not found"));

        existingUnite.setUniteDesignation(updatedUnite.getUniteDesignation());
        existingUnite.setUniteDesignationAr(updatedUnite.getUniteDesignationAr());

        return uniteRepository.save(existingUnite);
    }

    public void deleteUnite(String id) {
        uniteRepository.deleteById(id);
    }

}
