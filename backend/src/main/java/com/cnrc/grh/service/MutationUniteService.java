package com.cnrc.grh.service;

import com.cnrc.grh.model.MutationUnite;
import com.cnrc.grh.model.MutationUnitePK;
import com.cnrc.grh.repository.MutationUniteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MutationUniteService {

    private final MutationUniteRepository mutationUniteRepository;

    @Autowired
    public MutationUniteService(MutationUniteRepository mutationUniteRepository) {
        this.mutationUniteRepository = mutationUniteRepository;
    }

    // Create
    public MutationUnite createMutationUnite(MutationUnite mutationUnite) {
        return mutationUniteRepository.save(mutationUnite);
    }

    // Read (Retrieve) by ID
    public Optional<MutationUnite> getMutationUniteById(MutationUnitePK id) {
        return mutationUniteRepository.findById(id);
    }

    // Read (Retrieve) All
    public List<MutationUnite> getAllMutationUnites() {
        return mutationUniteRepository.findAll();
    }


    // Update
    public MutationUnite updateMutationUnite(MutationUnite mutationUnite) {
        return mutationUniteRepository.save(mutationUnite);
    }

    // Delete by ID
    public void deleteMutationUniteById(MutationUnitePK id) {
        mutationUniteRepository.deleteById(id);
    }
}
