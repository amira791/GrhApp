package com.cnrc.grh.controller;

import com.cnrc.grh.model.Status;
import com.cnrc.grh.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/status")
public class StatusController {
    private final StatusService StSer;

    @Autowired
    public StatusController(StatusService StSer) {
        this.StSer = StSer;
    }

    @GetMapping("/statusall")
    public List<Status> getAllStatus() {
        System.out.println("********************");
        return StSer.getStatusList();
    }

    @GetMapping("/{id}")
    public Optional<Status> getStatusById(@PathVariable String id) {
        return StSer.getStatusById(id);
    }
}


