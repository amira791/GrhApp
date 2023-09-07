package com.cnrc.grh.controller;

import com.cnrc.grh.model.Contrat;
import com.cnrc.grh.model.TypeContrat;
import com.cnrc.grh.service.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Contrats")
public class ContratController {
    private ContratService service;
    @Autowired
    private ContratService contratService;

    // gestion des types de contrats
    @GetMapping("/types")
    public List<TypeContrat> getTypeContrats(){
        return contratService.getTypeContratList();
    }
    @GetMapping("/types/{id}")
    public TypeContrat getTypeContrat(@PathVariable String id){
        return contratService.getTypeContratById(id);
    }

    @PostMapping("types/new")
    public void createTypeContrat(@RequestBody TypeContrat type){
        contratService.createTypeContrat(type);
    }


    // gestion des contrats

    @GetMapping("/all")
    public List<Contrat> getAllContrats(){
        return contratService.getContratList();
    }

    @GetMapping("/{id}")
    public Contrat getContrat(@PathVariable String id){
        return contratService.getContratById(id);
    }

    @PostMapping("new")
    public void createContrat(@RequestBody Contrat contrat){
        contratService.createContrat(contrat);
    }

    @PutMapping("update/{id}")
    public void updateContrat(@PathVariable String id, @RequestBody Contrat contrat){
        contratService.updateContrat(id, contrat);
    }

    @DeleteMapping("delete/{id}")
    public void deleteContrat(@PathVariable String id){
        contratService.deleteContrat(id);
    }
}
