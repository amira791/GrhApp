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
    private ContratService service;

    @Autowired
    private ContratService contratService;

    /************************************************************************************************************************/
    /****** gestion des motifs de contrats*****/
    @GetMapping("/motifs/all")
    public List<MotifContrat> getMotifContrats(){
        return contratService.getMotifContratList();
    }
    @GetMapping("/motifs/{id}")
    public MotifContrat getMotifContrat(@PathVariable String id){
        return contratService.getMotifContratById(id);
    }

    @PostMapping("motifs/new")
    public void createMotifContrat(@RequestBody MotifContrat motif){
        contratService.createMotifContrat(motif);
    }
    @PutMapping("motifs/update/{id}")
    public void updateMotifContrat(@PathVariable String id, @RequestBody MotifContrat motif){
        contratService.updateMotifContrat(id, motif);
    }

    @DeleteMapping("motifs/{id}")
    public void deleteMotifContrat(@PathVariable String id){
        contratService.deleteMotifContrat(id);
    }
    /************************************************************************************************************************/
    /***** gestion des types de contrats****/
    @GetMapping("/types/all")
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

    @PutMapping("types/update/{id}")
    public void updateTypeContrat(@PathVariable String id, @RequestBody TypeContrat type){
        contratService.updateTypeContrat(id, type);
    }

   @DeleteMapping("types/{id}")
   public void deleteTypeContrat(@PathVariable String id){
       contratService.deleteTypeContrat(id);
   }

   /*************************************************************************************************************************/
    /******* gestion des contrats ******/

    @GetMapping("/all")
    public List<Contrat> getAllContrats(){
        return contratService.getContratList();
    }

    @GetMapping("/{id}")
    public Contrat getContrat(@PathVariable String id){
        return contratService.getContratById(id);
    }

    @PostMapping("new")
    public void createContrat(@RequestBody Contrat contrat){contratService.createContrat(contrat);
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
