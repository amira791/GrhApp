package com.cnrc.grh.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test")
    public String testDatabaseConnection() {
        return "Database connection is successful!";
    }
}