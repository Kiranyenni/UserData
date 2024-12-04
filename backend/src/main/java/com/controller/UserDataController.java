package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.UserDataDto;
import com.service.UserDataService;

@RestController
@CrossOrigin("*")
public class UserDataController {
	
	@Autowired
	UserDataService userdataservice;
	
	@GetMapping("/getuser")
	public List<UserDataDto> getUser() {
		return userdataservice.getUser();
		
	}

}
