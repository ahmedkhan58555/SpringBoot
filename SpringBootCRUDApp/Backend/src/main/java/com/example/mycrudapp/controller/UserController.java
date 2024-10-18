package com.example.mycrudapp.controller;
//isko change krna file ko
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.mycrudapp.exception.ResourceNotFoundException;
import com.example.mycrudapp.model.Users;
import com.example.mycrudapp.repository.User_Repository;
import jakarta.transaction.Transactional;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private User_Repository userRepository;

    // get all users
    @GetMapping
    @Transactional
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    // create employee
    @PostMapping
    public Users creatUser(@RequestBody Users user) {
        return userRepository.save(user);
    }

    // get user by id
    @GetMapping("/{id}")
    public ResponseEntity<Users> getuUserById(@PathVariable Long id) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User doesnot exist with id:" + id));

        return ResponseEntity.ok(user);
    }

    // update user
    @PutMapping("/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable Long id, @RequestBody Users userDetails) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User doesnot exist with id:" + id));
        user.setEmailId(userDetails.getEmailId());
        user.setPassword(userDetails.getPassword());
        Users updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    // delete employee
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User doesnot exist with id:" + id));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
