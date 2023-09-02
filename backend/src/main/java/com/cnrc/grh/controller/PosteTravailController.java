package com.cnrc.grh.controller;


import com.cnrc.grh.model.PosteTravail;
import com.cnrc.grh.service.PosteTravailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/PosteTravail")
public class PosteTravailController {
    private final PosteTravailService PosSer;

    @Autowired
    public PosteTravailController(PosteTravailService PosSer) {
        this.PosSer = PosSer;
    }

    @GetMapping("/P")
    public List<PosteTravail> getAllPoste() {
        System.out.println("tttttttttttttttttttt");
        return PosSer.getPosteList();
    }

    @GetMapping("/{id}")
    public Optional<PosteTravail> getPosteById(@PathVariable String id) {
        return PosSer.getPosteById(id);
    }

    @PostMapping("/CreatePoste")
    public void createStatus(@RequestBody PosteTravail Pos) {
        PosSer.CreatePoste(Pos);
    }

    @PutMapping("/UpdatePoste/{id}")
    public PosteTravail updatePoste(@PathVariable String id, @RequestBody PosteTravail updatedPoste) {
        return PosSer.updatePoste(id, updatedPoste);
    }

    @DeleteMapping("/DeletePoste/{id}")
    public void deletePoste(@PathVariable String id) {
        PosSer.deletePoste(id);
    }

}
