package com.example.UserData;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({"com.controller","com.service"})
@EntityScan("com.dto")
@EnableJpaRepositories("com.repo")
public class UserDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserDataApplication.class, args);
	}

}
