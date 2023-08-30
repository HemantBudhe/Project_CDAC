package com.app.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.app.dto.RecruiterDTO;
import com.app.dto.RecruiterLoginDTO;
import com.app.entites.Recruiter;



/**************************************************************************************
 * @author       Aditya 
 * Description : This is the Service Interface for Recruiter module. 
 * Created Date: 21 April, 2021 
 * Version     : v1.0.0
 *************************************************************************************/
@Service
public interface IRecruiterService {

	Recruiter findById(Long id);

	Long getCurrentId();

	Recruiter save(RecruiterDTO recruiterdto);

	Recruiter update(Long id, RecruiterDTO recruiterDto);
	
	Recruiter findByUserName(String userName);
	
	List<Recruiter> findAll();

	Recruiter checkLogin(@Valid RecruiterLoginDTO recruiterDto);
	
	void deleteById(Long id);
}
