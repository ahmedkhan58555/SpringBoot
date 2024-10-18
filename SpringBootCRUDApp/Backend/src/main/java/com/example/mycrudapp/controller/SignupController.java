package com.example.mycrudapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mycrudapp.model.Users;
import com.example.mycrudapp.service.AuthService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/signup")
public class SignupController {

    private final AuthService authService;

    @Autowired
    public SignupController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping()
    public ResponseEntity<Map<String, String>> signup(@RequestBody Users users) {
        boolean isUserCreated = authService.createCustomer(users);
        Map<String, String> response = new HashMap<>();
        
        if (isUserCreated) {
            response.put("message", "User Created Successfully");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } else {
            response.put("message", "Failed to create User");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }
}