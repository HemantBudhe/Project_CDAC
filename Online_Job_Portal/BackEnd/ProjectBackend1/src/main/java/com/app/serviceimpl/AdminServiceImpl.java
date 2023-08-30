package com.app.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAdminDao;
import com.app.dto.AdminDTO;
import com.app.dto.AdminLoginDTO;
import com.app.entites.Admin;
import com.app.exceptions.InvalidAdminException;
import com.app.service.IAdminService;



@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	IAdminDao adminDao;

	@Override
	public Admin findById(Long id) {
		if (adminDao.existsById(id)) {
			return adminDao.findById(id).get();
		} else {
			throw new InvalidAdminException();
		}
	}
	
	@Override
	public Admin checkLogin(AdminLoginDTO adminDto) {
		BCryptPasswordEncoder bcrypt= new BCryptPasswordEncoder();
		
		String userName= adminDto.getUserName();
		String password= adminDto.getPassword();
		
		Admin admin= adminDao.findByUserName(userName);
		 if(bcrypt.matches(password,admin.getPassword())){
			 return admin;
		}
		else
			throw new InvalidAdminException();
	}

	
	@Override
	public Admin save(AdminDTO adminDto) {
		BCryptPasswordEncoder bcrypt= new BCryptPasswordEncoder();
		Admin admin = new Admin();
		String userName = adminDto.getUserName();
		String firstName = adminDto.getFirstName();
		String lastName = adminDto.getLastName();
		String password = adminDto.getPassword();
		if (!(firstName == null || lastName == null || password == null || userName == null)) {
			admin.setUserName(userName);
			admin.setFirstName(firstName);
			admin.setLastName(lastName);
			
			String encryptpass=bcrypt.encode(password);
			admin.setPassword(encryptpass);
			return adminDao.save(admin);
		} else
			throw new InvalidAdminException();

	}

	@Override
	public Admin update(Long id, AdminDTO adminDto) {
		if (adminDao.existsById(id)) {
			Admin admin = adminDao.findById(id).get();
			admin.setUserName(adminDto.getUserName());
			admin.setPassword(adminDto.getPassword());
			admin.setFirstName(adminDto.getFirstName());
			admin.setLastName(adminDto.getLastName());
			return adminDao.save(admin);
		} else {
			throw new InvalidAdminException();
		}
	}

	@Override
	public Admin findByUserName(String userName) {
		if (adminDao.existsByUserName(userName)) {
			return adminDao.findByUserName(userName);
		} else {
			throw new InvalidAdminException();
		}
	}

	

}
