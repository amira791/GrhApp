package com.cnrc.grh.controller;

import com.cnrc.grh.model.Status;
import com.cnrc.grh.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/CreateStatus")
    public void createStatus(@RequestBody Status St) {
        System.out.println("oooooooooooooooooo");
        StSer.CreateStatus(St);
    }

    @PutMapping("/updateStatus/{id}")
    public Status updateStatus(@PathVariable String id, @RequestBody Status updatedStatus) {
        return StSer.updateStatus(id, updatedStatus);
    }

    @DeleteMapping("/deleteStatus/{id}")
    public void deleteStatus(@PathVariable String id) {
        StSer.deleteStatus(id);
    }

}


