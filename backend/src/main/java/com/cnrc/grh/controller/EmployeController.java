package com.cnrc.grh.controller;


import com.cnrc.grh.model.Employe;
import com.cnrc.grh.service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Employe")
public class EmployeController {
    private final EmployeService EmpSer;

    @Autowired
    public EmployeController(EmployeService EmpSer) {
        this.EmpSer = EmpSer;
    }

    @GetMapping("/EmployeAll")
    public List<Employe> getAllEmploye() {
        System.out.println("********************");
        return EmpSer.getEmployeList();
    }

    @GetMapping("/{id}")
    public Optional<Employe> getEmployeById(@PathVariable String id) {
        return EmpSer.getEmployeById(id);
    }

    @PostMapping("/CreateEmploye")
    public void createEmploye(@RequestBody Employe Emp) {
        System.out.println("oooooooooooooooooo");
        EmpSer.CreateEmployeie(Emp);
    }

    @PutMapping("/UpdateEmploye/{id}")
    public Employe updateEmploye(@PathVariable String id, @RequestBody Employe updatedEmploye) {
        return EmpSer.updateEmploye(id, updatedEmploye);
    }

    @DeleteMapping("/DeleteEmploye/{id}")
    public void deleteEmploye(@PathVariable String id) {
        EmpSer.deleteEmploye(id);
    }

}
