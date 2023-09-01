package com.cnrc.grh.service;

import com.cnrc.grh.model.Categorie;
import com.cnrc.grh.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CategorieService {
    private CategorieRepository categorieRepository;

    @Autowired

    public CategorieService(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    public List<Categorie> getCategorieList() {
        return categorieRepository.findAll();
    }

    public Optional<Categorie> getCategorieById(String id) {
        return categorieRepository.findById(id);
    }

    public Categorie CreateCategorie(Categorie Cat) {
        return categorieRepository.save(Cat);
    }

    public Categorie updateCategorie(String id, Categorie updatedCategorie) {
        Categorie existingCategorie = categorieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categorie not found"));

        existingCategorie.setCategorieDesignation(updatedCategorie.getCategorieDesignation());
        existingCategorie.setCategorieDesignationAr(updatedCategorie.getCategorieDesignationAr());

        return categorieRepository.save(existingCategorie);
    }

    public void deleteCategorie(String id) {
        categorieRepository.deleteById(id);
    }

}
