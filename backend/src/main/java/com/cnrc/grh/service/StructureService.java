package com.cnrc.grh.service;

import com.cnrc.grh.model.Structure;
import com.cnrc.grh.repository.StructureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class StructureService {
    private StructureRepository structureRepository;

    @Autowired

    public StructureService(StructureRepository structureRepository) {
        this.structureRepository = structureRepository;
    }

    public List<Structure> getStructureList() {
        return structureRepository.findAll();
    }

    public Optional<Structure> getStructureById(String id) {
        return structureRepository.findById(id);
    }

    public Structure CreateStructure(Structure Struct) {
        return structureRepository.save(Struct);
    }

    public Structure updateStructure(String id, Structure updatedStructure) {
        Structure existingStructure = structureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Structure not found"));

        existingStructure.setStructureDesignation(updatedStructure.getStructureDesignation());
        existingStructure.setStructureDesignationAr(updatedStructure.getStructureDesignationAr());
        existingStructure.setTypeStructure(updatedStructure.getTypeStructure());
        existingStructure.setBloque(updatedStructure.getBloque());

        return structureRepository.save(existingStructure);
    }

    public void deleteStructure(String id) {
        structureRepository.deleteById(id);
    }

}
