package com.app.serviceimpl;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IJobDao;
import com.app.dao.IRecruiterDao;
import com.app.dto.RecruiterDTO;
import com.app.dto.RecruiterLoginDTO;
import com.app.entites.Admin;
import com.app.entites.Recruiter;
import com.app.exceptions.InvalidRecruiterException;
import com.app.service.IJobService;
import com.app.service.IRecruiterService;


@Service
@Transactional
public class RecruiterServiceImpl implements IRecruiterService {

	@Autowired
	IRecruiterDao recruiterDao;
	
	@Autowired
	IJobDao jobDao;

	@Override
	public Recruiter findById(Long id) {
		if (recruiterDao.existsById(id)) {
			return recruiterDao.findById(id).get();
		} else
			throw new InvalidRecruiterException();
	}

	/*******************************************************************************************
	 * Method:      getCurrentSeriesId
	 * @param       none
	 * @return      Long
	 * Description: This method returns the current value of primary key from the sequence.
	 *******************************************************************************************/
	@Override
	public Long getCurrentId() {
		return recruiterDao.getCurrentSeriesId();
	}

	@Override
	public Recruiter save(RecruiterDTO recruiterDto) {
		
		BCryptPasswordEncoder bcrypt= new BCryptPasswordEncoder();
		
		System.out.println(recruiterDto);
		Recruiter recruiter = new Recruiter();
		recruiter.setFirstName(recruiterDto.getFirstName());
		recruiter.setLastName(recruiterDto.getLastName());
		recruiter.setUserName(recruiterDto.getUserName());
		String password = recruiterDto.getPassword();
		recruiter.setCompany(recruiterDto.getCompany());
		recruiter.setDesignation(recruiterDto.getDesignation());
		recruiter.setLocation(recruiterDto.getLocation());
		if (!(recruiterDto.getFirstName() == null || recruiterDto.getLastName() == null
				|| recruiterDto.getUserName() == null || password == null)) {
			
			String encryptpass=bcrypt.encode(password);
			recruiter.setPassword(encryptpass);
			return recruiterDao.save(recruiter);
		}else
			throw new InvalidRecruiterException();
	}
	
	@Override
	public Recruiter checkLogin(@Valid RecruiterLoginDTO recruiterDto) {
		
		BCryptPasswordEncoder bcrypt= new BCryptPasswordEncoder();
		
		String userName = recruiterDto.getUserName();
		String password = recruiterDto.getPassword();
		
		Recruiter recruiter= recruiterDao.findByUserName(userName);
		if(bcrypt.matches(password,recruiter.getPassword())) {
			
			return recruiter;
			
		}else
			throw new InvalidRecruiterException();
	}

	@Override
	public Recruiter update(Long id, RecruiterDTO recruiterDto) {
		if (recruiterDao.existsById(id)) {
			Recruiter recruiter = recruiterDao.findById(id).get();
			recruiter.setFirstName(recruiterDto.getFirstName());
			recruiter.setLastName(recruiterDto.getLastName());
			recruiter.setUserName(recruiterDto.getUserName());
			recruiter.setPassword(recruiterDto.getPassword());
			return recruiterDao.save(recruiter);
		} else
			throw new InvalidRecruiterException();
	}
	
	@Override
	public Recruiter findByUserName(String userName) {
		if (recruiterDao.existsByUserName(userName)) {
			return recruiterDao.findByUserName(userName);
		} else {
			throw new InvalidRecruiterException();
		}
	}

	@Override
	public List<Recruiter> findAll(){
		return recruiterDao.findAll();
	}

	@Override
	public void deleteById(Long id) {
		
		recruiterDao.deleteById(id);
	}
	
}
