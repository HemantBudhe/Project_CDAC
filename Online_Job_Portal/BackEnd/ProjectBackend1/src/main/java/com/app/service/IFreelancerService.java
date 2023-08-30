package com.app.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.app.dto.FreelancerDTO;
import com.app.dto.FreelancerListDTO;
import com.app.dto.FreelancerLoginDTO;
import com.app.dto.FreelancerUpDTO;
import com.app.entites.Freelancer;



@Service
public interface IFreelancerService {

	Freelancer findById(Long id);

	Long getCurrentId();

	Freelancer save(FreelancerDTO freelancerDto);

	Freelancer update(@Valid Long id, FreelancerUpDTO freelancerDto);

	Freelancer findByUserName(String userName);
	
	List<Freelancer> listFreelancers();

	Freelancer checkLogin(FreelancerLoginDTO freelancerDto);

	void deleteById(Long id);

}
