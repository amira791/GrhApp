package com.cnrc.grh.controller;


import com.cnrc.grh.model.Categorie;
import com.cnrc.grh.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Categorie")
public class CategorieController {
    private final CategorieService CatSer;

    @Autowired
    public CategorieController(CategorieService CatSer) {
        this.CatSer = CatSer;
    }

    @GetMapping("/CategorieAll")
    public List<Categorie> getAllCategorie() {
        System.out.println("********************");
        return CatSer.getCategorieList();
    }

    @GetMapping("/{id}")
    public Optional<Categorie> getCategorieById(@PathVariable String id) {
        return CatSer.getCategorieById(id);
    }

    @PostMapping("/CreateCategorie")
    public void createStatus(@RequestBody Categorie Cat) {
        System.out.println("oooooooooooooooooo");
        CatSer.CreateCategorie(Cat);
    }

    @PutMapping("/UpdateCategorie/{id}")
    public Categorie updateCategorie(@PathVariable String id, @RequestBody Categorie updatedCategorie) {
        return CatSer.updateCategorie(id, updatedCategorie);
    }

    @DeleteMapping("/DeleteCategorie/{id}")
    public void deleteCategorie(@PathVariable String id) {
        CatSer.deleteCategorie(id);
    }

}
