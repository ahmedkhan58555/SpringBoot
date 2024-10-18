package com.example.mycrudapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin("http://localhost:4200")
@SpringBootApplication
public class MycrudappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MycrudappApplication.class, args);
	}

}
