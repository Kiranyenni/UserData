package com.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="usertable")
public class UserDataDto {
	@Id
	int id;
	String username;
	String email;

}
