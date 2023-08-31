package com.cnrc.grh.service;

import com.cnrc.grh.model.Status;
import com.cnrc.grh.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StatusService {
    private StatusRepository statusRepository;

    @Autowired

    public StatusService(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

    public List<Status> getStatusList() {
        return statusRepository.findAll();
    }

    public Optional<Status> getStatusById(String id) {
        return statusRepository.findById(id);
    }

    public Status CreateStatus(Status St) {
        return statusRepository.save(St);
    }

    public Status updateStatus(String id, Status updatedStatus) {
        Status existingStatus = statusRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Status not found"));

        existingStatus.setStatusDesignation(updatedStatus.getStatusDesignation());
        existingStatus.setStatusDesignationAr(updatedStatus.getStatusDesignationAr());

        return statusRepository.save(existingStatus);
    }

    public void deleteStatus(String id) {
        statusRepository.deleteById(id);
    }

}
