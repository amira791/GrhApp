package com.cnrc.grh.service;


import com.cnrc.grh.model.Employe;
import com.cnrc.grh.repository.EmployeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeService {
    private EmployeRepository employeRepository;

    @Autowired

    public EmployeService(EmployeRepository employeRepository) {
        this.employeRepository = employeRepository;
    }

    public List<Employe> getEmployeList() {
        return employeRepository.findAll();
    }

    public Optional<Employe> getEmployeById(String id) {
        return employeRepository.findById(id);
    }

    public Employe CreateEmployeie(Employe Emp) {
        return employeRepository.save(Emp);
    }

    public Employe updateEmploye


            (String id, Employe updatedEmploye) {
        Employe existingEmploye = employeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employe not found"));

        existingEmploye.setNom(updatedEmploye.getNom());
        existingEmploye.setPrenom(updatedEmploye.getPrenom());
        existingEmploye.setAdr(updatedEmploye.getAdr());
        existingEmploye.setAdrAr(updatedEmploye.getAdrAr());
        existingEmploye.setCodeAgence(updatedEmploye.getCodeAgence());
        existingEmploye.setCodeCollectif(updatedEmploye.getCodeCollectif());
        existingEmploye.setCodeCategorie(updatedEmploye.getCodeCategorie());
        existingEmploye.setCodePoste(updatedEmploye.getCodePoste());
        existingEmploye.setCodeStatus(updatedEmploye.getCodeStatus());
        existingEmploye.setCodeStructure(updatedEmploye.getCodeStructure());
        existingEmploye.setCodeUnite(updatedEmploye.getCodeUnite());
        existingEmploye.setCodeWilaya(updatedEmploye.getCodeWilaya());
        existingEmploye.setDateEntree(updatedEmploye.getDateEntree());
        existingEmploye.setDateNaissance(updatedEmploye.getDateNaissance());


        return employeRepository.save(existingEmploye);
    }

    public void deleteEmploye(String id) {
        employeRepository.deleteById(id);
    }
}
