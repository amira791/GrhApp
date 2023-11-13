package com.cnrc.grh.controller.dossierEmploye;

import com.cnrc.grh.model.dossierEmploye.Contrat;
import com.cnrc.grh.model.dossierEmploye.MotifContrat;
import com.cnrc.grh.model.dossierEmploye.TypeContrat;
import com.cnrc.grh.service.dossierEmploye.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/Contrats")
public class ContratController {

    @Autowired
    private ContratService contratService;


    /************************************************************************************************************************/
    /***** gestion des types de contrats****/
    @GetMapping("/types/all")
    public List<TypeContrat> getTypeContrats() {
        return contratService.getTypeContratList();
    }

    @GetMapping("/types/{id}")
    public TypeContrat getTypeContrat(@PathVariable String id) {
        return contratService.getTypeContratById(id);
    }

    @PostMapping("types/new")
    public void createTypeContrat(@RequestBody TypeContrat type) {
        contratService.createTypeContrat(type);
    }

    @PutMapping("types/update/{id}")
    public void updateTypeContrat(@PathVariable String id, @RequestBody TypeContrat type) {
        contratService.updateTypeContrat(id, type);
    }

    @DeleteMapping("types/{id}")
    public void deleteTypeContrat(@PathVariable String id) {
        contratService.deleteTypeContrat(id);
    }

    /*************************************************************************************************************************/
    /******* gestion des contrats ******/

    @GetMapping("all")
    public List<Contrat> getAllContrats() {
        return contratService.getContratList();
    }

    @GetMapping("{id}")
    public Contrat getContrat(@PathVariable String id) {
        return contratService.getContratById(id);
    }

    @PostMapping("new")
    public void createContrat(@RequestBody Contrat contrat) {
        contratService.createContrat(contrat);
    }

    @PutMapping("update/{id}")
    public void updateContrat(@PathVariable String id, @RequestBody Contrat contrat) {
        contratService.updateContrat(id, contrat);
    }

}
