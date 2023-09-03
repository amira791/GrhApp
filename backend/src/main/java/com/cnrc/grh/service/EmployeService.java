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

    public Employe updateEmploye(String id, Employe updatedEmploye) {
        Employe existingEmploye = employeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employe not found"));

        existingEmploye.setNom(updatedEmploye.getNom());


        return employeRepository.save(existingEmploye);
    }

    public void deleteEmploye(String id) {
        employeRepository.deleteById(id);
    }
}
