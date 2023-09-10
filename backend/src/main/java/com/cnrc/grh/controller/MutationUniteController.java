package com.cnrc.grh.controller;

import com.cnrc.grh.model.MutationUnite;
import com.cnrc.grh.model.MutationUnitePK;
import com.cnrc.grh.service.MutationUniteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mutations")
public class MutationUniteController {

    private final MutationUniteService mutationUniteService;

    @Autowired
    public MutationUniteController(MutationUniteService mutationUniteService) {
        this.mutationUniteService = mutationUniteService;
    }

    // Create
    @PostMapping("/create")
    public ResponseEntity<MutationUnite> createMutationUnite(@RequestBody MutationUnite mutationUnite) {
        MutationUnite createdMutationUnite = mutationUniteService.createMutationUnite(mutationUnite);
        return new ResponseEntity<>(createdMutationUnite, HttpStatus.CREATED);
    }

    // Read (Retrieve) by ID
    @GetMapping("/get/{id}/{dateMutation}/{codeUnite}")
    public ResponseEntity<Optional<MutationUnite>> getMutationUniteById(
            @PathVariable String id,
            @PathVariable Date dateMutation,
            @PathVariable String codeUnite) {
        MutationUnitePK primaryKey = new MutationUnitePK(id, dateMutation, codeUnite);
        Optional<MutationUnite> mutationUnite = mutationUniteService.getMutationUniteById(primaryKey);

        if (mutationUnite.isPresent()) {
            return new ResponseEntity<>(mutationUnite, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Read (Retrieve) All
    @GetMapping("/getAll")
    public ResponseEntity<List<MutationUnite>> getAllMutationUnites() {
        List<MutationUnite> mutationUnites = mutationUniteService.getAllMutationUnites();
        return new ResponseEntity<>(mutationUnites, HttpStatus.OK);
    }

    // Update
    @PutMapping("/update")
    public ResponseEntity<MutationUnite> updateMutationUnite(@RequestBody MutationUnite mutationUnite) {
        MutationUnite updatedMutationUnite = mutationUniteService.updateMutationUnite(mutationUnite);
        return new ResponseEntity<>(updatedMutationUnite, HttpStatus.OK);
    }

    // Delete by ID
    @DeleteMapping("/delete/{id}/{dateMutation}/{codeUnite}")
    public ResponseEntity<Void> deleteMutationUniteById(
            @PathVariable String id,
            @PathVariable Date dateMutation,
            @PathVariable String codeUnite) {
        MutationUnitePK primaryKey = new MutationUnitePK(id, dateMutation, codeUnite);
        mutationUniteService.deleteMutationUniteById(primaryKey);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
