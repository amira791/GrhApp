package com.cnrc.grh.service;


import com.cnrc.grh.model.Prime;
import com.cnrc.grh.repository.PrimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrimeService {
    private PrimeRepository primeRepository;

    @Autowired

    public PrimeService(PrimeRepository PrimeRepository) {
        this.primeRepository = primeRepository;
    }

    public List<Prime> getPrimeList() {
        return primeRepository.findAll();
    }

    public Optional<Prime> getPrimeById(String id) {
        return primeRepository.findById(id);
    }

    public Prime CreatePrime(Prime Pr) {
        return primeRepository.save(Pr);
    }

    public Prime updatePrime(String id, Prime updatedPrime) {
        Prime existingPrime = primeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prime not found"));

        existingPrime.setValPrime(updatedPrime.getValPrime());

        return primeRepository.save(existingPrime);
    }

    public void deletePrime(String id) {
        primeRepository.deleteById(id);
    }
}
