package com.cnrc.grh.controller;


import com.cnrc.grh.model.Structure;
import com.cnrc.grh.service.StructureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/Structure")
public class StructureController {
    private final StructureService StructSer;

    @Autowired
    public StructureController(StructureService StructSer) {
        this.StructSer = StructSer;
    }

    @GetMapping("/StructureeAll")
    public List<Structure> getAllCategorie() {
        System.out.println("********************");
        return StructSer.getStructureList();
    }

    @GetMapping("/{id}")
    public Optional<Structure> getStructureById(@PathVariable String id) {
        return StructSer.getStructureById(id);
    }

    @PostMapping("/CreateStructure")
    public void createStatus(@RequestBody Structure Struct) {
        System.out.println("oooooooooooooooooo");
        StructSer.CreateStructure(Struct);
    }

    @PutMapping("/UpdateStructure/{id}")
    public Structure updateStructure(@PathVariable String id, @RequestBody Structure updatedStructure) {
        return StructSer.updateStructure(id, updatedStructure);
    }

    @DeleteMapping("/DeleteStructure/{id}")
    public void deleteStructure(@PathVariable String id) {
        StructSer.deleteStructure(id);
    }
}
