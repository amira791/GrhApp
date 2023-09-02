package com.cnrc.grh.controller;

import com.cnrc.grh.model.Unite;
import com.cnrc.grh.service.UniteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/Unite")
public class UniteController {
    private final UniteService UnSer;

    @Autowired
    public UniteController(UniteService UnSer) {
        this.UnSer = UnSer;
    }

    @GetMapping("/UniteAll")
    public List<Unite> getAllUnite() {
        return UnSer.getUniteList();
    }

    @GetMapping("/{id}")
    public Optional<Unite> getUnitefById(@PathVariable String id) {
        return UnSer.getUniteById(id);
    }

    @PostMapping("/CreateUnite")
    public void createUnite(@RequestBody Unite Un) {
        UnSer.CreateUnite(Un);
    }

    @PutMapping("/UpdateUnite/{id}")
    public Unite updateUnite(@PathVariable String id, @RequestBody Unite updatedUnite) {
        return UnSer.updateUnite(id, updatedUnite);
    }

    @DeleteMapping("/DeleteUnite/{id}")
    public void deleteUnite(@PathVariable String id) {
        UnSer.deleteUnite(id);
    }
}
