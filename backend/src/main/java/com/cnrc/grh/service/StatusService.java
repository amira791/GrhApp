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


}
