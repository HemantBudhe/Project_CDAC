package com.app.serviceimpl;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IFreelancerDao;
import com.app.dto.FreelancerDTO;
import com.app.dto.FreelancerListDTO;
import com.app.dto.FreelancerLoginDTO;
import com.app.dto.FreelancerUpDTO;
import com.app.entites.Freelancer;
import com.app.exceptions.InvalidFreelancerException;
import com.app.service.IFreelancerService;


@Service
@Transactional
public class FreelancerServiceImpl implements IFreelancerService {

	@Autowired
	IFreelancerDao freelancerDao;
	
	

	@Override
	public Freelancer findById(Long id) {
		if (freelancerDao.existsById(id)) {
			return freelancerDao.findById(id).get();
		} else
			throw new InvalidFreelancerException();
	}

	/*******************************************************************************************
	 * Method:      getCurrentSeriesId
	 * @param       none
	 * @return      Long
	 * Description: This method returns the current value of primary key from the sequence.
	 *******************************************************************************************/
	@Override
	public Long getCurrentId() {
		return freelancerDao.getCurrentSeriesId();
	}

	@Override
	public Freelancer save(FreelancerDTO freelancerDto) {
		
		freelancerDto.toString();

		
		BCryptPasswordEncoder bcrypt= new BCryptPasswordEncoder();
		
		Freelancer freelancer = new Freelancer();
		freelancer.setFirstName(freelancerDto.getFirstName());
		freelancer.setLastName(freelancerDto.getLastName());
		freelancer.setUserName(freelancerDto.getUserName());
		String password =freelancerDto.getPassword() ;
//		freelancer.setAddress(freelancerDto.getAddress());
//		freelancer.setEducation(freelancerDto.getEducation());
		if (!(freelancerDto.getFirstName() == null || freelancerDto.getLastName() == null
				|| freelancerDto.getPassword() == null || password == null)) {
			
			String encryptpass=bcrypt.encode(password);
		    freelancer.setPassword(encryptpass);
			
			return freelancerDao.save(freelancer);
		}else
			throw new InvalidFreelancerException();
	}
	
	@Override
	public Freelancer checkLogin(FreelancerLoginDTO freelancerDto) {
		BCryptPasswordEncoder bcrypt= new BCryptPasswordEncoder();

		String userName = freelancerDto.getUserName();
		String password = freelancerDto.getPassword();
		
		Freelancer freelancer= freelancerDao.findByUserName(userName);
		if(bcrypt.matches(password,freelancer.getPassword())) {
			return freelancer;
		}
		else
			throw new InvalidFreelancerException();
	}

	@Override
	public Freelancer update(Long id, FreelancerUpDTO freelancerDto) {
		if (freelancerDao.existsById(id)) {
			Freelancer freelancer = freelancerDao.findById(id).get();
			freelancer.setFirstName(freelancerDto.getFirstName());
			freelancer.setLastName(freelancerDto.getLastName());
			freelancer.setGraduation(freelancerDto.getGraduation());
			freelancer.setGradMarks(freelancerDto.getGradMarks());
			freelancer.setMarks10(freelancerDto.getMarks10());
			freelancer.setMarks12(freelancerDto.getMarks12());
			freelancer.setContry(freelancerDto.getContry());
			freelancer.setState(freelancerDto.getState());
			freelancer.setCity(freelancerDto.getCity());
			return freelancerDao.save(freelancer);
		} else {
			throw new InvalidFreelancerException();
		}

	}
    
	@Transactional
	@Override
	public Freelancer findByUserName(String userName) {
		if (freelancerDao.existsByUserName(userName)) {
			return freelancerDao.findByUserName(userName);
		} else {
			throw new InvalidFreelancerException();
		}
	}

	@Override
	public List<Freelancer> listFreelancers() {
		return freelancerDao.findAll();
	}

	@Override
	public void deleteById(Long id) {
		
		freelancerDao.deleteById(id);
		
	}

	

	
	

}
