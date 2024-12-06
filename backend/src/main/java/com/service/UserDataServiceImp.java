package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.UserDataDto;
import com.repo.UserDataRepo;

@Service
public class UserDataServiceImp implements UserDataService{
	
	@Autowired
	UserDataRepo repo;
	public List<UserDataDto> getUser() {
		return repo.findAll();
		
	}
	
	public void adduser(UserDataDto dto) {
		repo.save(dto);
		
	}
}
