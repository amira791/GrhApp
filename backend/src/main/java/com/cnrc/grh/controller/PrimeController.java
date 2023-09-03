package com.cnrc.grh.controller;


import com.cnrc.grh.model.Prime;
import com.cnrc.grh.service.PrimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Prime")
public class PrimeController {
    private final PrimeService PrSer;

    @Autowired
    public PrimeController(PrimeService PrSer) {
        this.PrSer = PrSer;
    }

    @GetMapping("/PrimeAll")
    public List<Prime> getAllPrime() {
        System.out.println("********************");
        return PrSer.getPrimeList();
    }

    @GetMapping("/{id}")
    public Optional<Prime> getPrimeById(@PathVariable String id) {
        return PrSer.getPrimeById(id);
    }

    @PostMapping("/CreatePrime")
    public void createPrime(@RequestBody Prime Pr) {
        System.out.println("oooooooooooooooooo");
        PrSer.CreatePrime(Pr);
    }

    @PutMapping("/UpdatePrime/{id}")
    public Prime updatePrime(@PathVariable String id, @RequestBody Prime updatedPrime) {
        return PrSer.updatePrime(id, updatedPrime);
    }

    @DeleteMapping("/DeletePrime/{id}")
    public void deletePrime(@PathVariable String id) {
        PrSer.deletePrime(id);
    }
}
