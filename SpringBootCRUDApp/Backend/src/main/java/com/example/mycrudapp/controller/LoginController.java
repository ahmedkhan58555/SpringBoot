package com.example.mycrudapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mycrudapp.model.Users;
import com.example.mycrudapp.service.jwt.UserDetailsImp;
import com.example.mycrudapp.utils.JwtUtil;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsImp userDetail;
    private final JwtUtil jwtUtil;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, UserDetailsImp userDetail,
            JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.userDetail = userDetail;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping
    public ResponseEntity<String> login(@RequestBody Users user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmailId(), user.getPassword()));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        UserDetails userDetails;
        try {
            userDetails = userDetail.loadUserByUsername(user.getEmailId());
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        String jwt = jwtUtil.generateToken(userDetails.getUsername());

        return ResponseEntity.ok(jwt);
    }

}

// @PostMapping
// public ResponseEntity<String> login(@RequestBody Users user) {
//     try {
//         System.out.println("Attempting to authenticate user: " + user.getEmailId());
//         authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(user.getEmailId(), user.getPassword()));
//         System.out.println("Authentication successful.");
//     } catch (AuthenticationException e) {
//         System.out.println("Authentication failed: " + e.getMessage());
//         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//     }

//     UserDetails userDetails;
//     try {
//         userDetails = userDetail.loadUserByUsername(user.getEmailId());
//     } catch (UsernameNotFoundException e) {
//         System.out.println("User not found: " + user.getEmailId());
//         return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//     }

//     String jwt = jwtUtil.generateToken(userDetails.getUsername());
//     return ResponseEntity.ok(jwt);
//     }
// }
