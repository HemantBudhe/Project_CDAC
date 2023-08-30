package com.app.service;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.app.dto.AdminDTO;
import com.app.dto.AdminLoginDTO;
import com.app.entites.Admin;



@Service
public interface IAdminService {
	Admin findById(Long id);

	Admin save(AdminDTO adminDto);

	Admin update(Long id, AdminDTO adminDto);
	
	Admin findByUserName(String userName);

	Admin checkLogin(AdminLoginDTO adminDto);

}
