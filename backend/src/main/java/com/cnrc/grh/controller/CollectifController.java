package com.cnrc.grh.controller;

import com.cnrc.grh.model.Collectif;
import com.cnrc.grh.service.CollectifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/Collectif")
public class CollectifController {
    private final CollectifService ColSer;

    @Autowired
    public CollectifController(CollectifService ColSer) {
        this.ColSer = ColSer;
    }

    @GetMapping("/CollectifAll")
    public List<Collectif> getAllCollectif() {
        System.out.println("********************");
        return ColSer.getCollectifList();
    }

    @GetMapping("/{id}")
    public Optional<Collectif> getCollectifById(@PathVariable String id) {
        return ColSer.getCollectifById(id);
    }

    @PostMapping("/CreateCollectif")
    public void createCollectif(@RequestBody Collectif Col) {
        System.out.println("oooooooooooooooooo");
        ColSer.CreateCollectif(Col);
    }

    @PutMapping("/UpdateCollectif/{id}")
    public Collectif updateCollectif(@PathVariable String id, @RequestBody Collectif updatedCollectif) {
        return ColSer.updateCollectif(id, updatedCollectif);
    }

    @DeleteMapping("/DeleteCollectif/{id}")
    public void deleteCollectif(@PathVariable String id) {
        ColSer.deleteCollectif(id);
    }
}
