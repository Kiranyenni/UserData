package com.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dto.UserDataDto;
@Service
public interface UserDataService {
	
	public List<UserDataDto> getUser();
	public void adduser(UserDataDto dto);
}
