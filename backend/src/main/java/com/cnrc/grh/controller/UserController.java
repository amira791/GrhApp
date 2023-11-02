package com.cnrc.grh.controller;

import com.cnrc.grh.model.User;
import com.cnrc.grh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    // todo remove the controller cuz it is used by admim , maybe the admin will user the JWT auth cntroller that i will create later
    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("all")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("new")
    public void addUser(@RequestBody User user){userService.createUser(user);}

    @PostMapping("update/{id}")
    public void updateUser(@RequestBody User updtUser , @PathVariable String id){userService.updateUser(id,updtUser);}


}
