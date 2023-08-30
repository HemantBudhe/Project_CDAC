package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDTO;
import com.app.dto.AdminLoginDTO;
import com.app.entites.Admin;
import com.app.entites.Freelancer;
import com.app.entites.Job;
import com.app.entites.Recruiter;
import com.app.exceptions.InvalidAdminException;
import com.app.exceptions.InvalidFreelancerException;
import com.app.exceptions.InvalidJobException;
import com.app.exceptions.InvalidRecruiterException;
import com.app.exceptions.JobPortalValidationException;
import com.app.service.IAdminService;
import com.app.service.IFreelancerService;
import com.app.service.IJobService;
import com.app.service.IRecruiterService;



@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

	@Autowired
	IAdminService adminService;
	
	@Autowired
	IRecruiterService recruiterService;
	
	@Autowired
	IFreelancerService freelancerService;
	
	@Autowired
	IJobService jobService;

	@PostMapping("/login")
	public ResponseEntity<Object> checkLogin(@Valid @RequestBody AdminLoginDTO adminDto, BindingResult bindingResult) {
		System.out.println(adminDto.toString());
		if (bindingResult.hasErrors()) {
			System.out.println("Some errors exist!");
			List<FieldError> fieldErrors = bindingResult.getFieldErrors();

			List<String> errMessages = new ArrayList<>();
			for (FieldError fe : fieldErrors) {
				errMessages.add(fe.getDefaultMessage());
			}
			throw new JobPortalValidationException(errMessages);
		}
		try {
			Admin admin=adminService.checkLogin(adminDto);
			if(admin.getUserName() == adminDto.getPassword() && admin.getPassword() == adminDto.getPassword()) {
			return new ResponseEntity<>(admin, HttpStatus.ACCEPTED);
			}
			else {
				return new ResponseEntity<>(admin, HttpStatus.ACCEPTED);	
			}
		} catch (InvalidAdminException exception) {
			throw new InvalidAdminException("Could not save new Admin");
		}

	}
	
	
	@PostMapping("/save")
	public ResponseEntity<Object> adminSave(@Valid @RequestBody AdminDTO adminDto, BindingResult bindingResult) {
		System.out.println(adminDto.toString());
		if (bindingResult.hasErrors()) {
			System.out.println("Some errors exist!");
			List<FieldError> fieldErrors = bindingResult.getFieldErrors();

			List<String> errMessages = new ArrayList<>();
			for (FieldError fe : fieldErrors) {
				errMessages.add(fe.getDefaultMessage());
			}
			throw new JobPortalValidationException(errMessages);
		}
		try {
			adminService.save(adminDto);
			return new ResponseEntity<>("Admin Successfully", HttpStatus.ACCEPTED);
		} catch (InvalidAdminException exception) {
			throw new InvalidAdminException("Could not save new Admin");
		}

	}

	
	@PutMapping("/update/{id}")
	public ResponseEntity<Object> adminUpdate(@PathVariable Long id, @RequestBody AdminDTO adminDto) {

		try {
			adminService.update(id, adminDto);
			return new ResponseEntity<>("Admin Successfully", HttpStatus.ACCEPTED);

		} catch (InvalidAdminException exception) {
			throw new InvalidAdminException("Admin with given id not found");
		}
	}

	

	@GetMapping(value = "/find/id/{id}")
	public Admin findById(@PathVariable Long id) {
		try {
			return adminService.findById(id);
		} catch (InvalidAdminException exception) {
			throw new InvalidAdminException("Id not found");
		}
	}

	
	@GetMapping(value = "/find/name/{userName}")
	public Admin findByUserName(@PathVariable String userName) {
		try {
			return adminService.findByUserName(userName);
		} catch (InvalidAdminException exception) {
			throw new InvalidAdminException("Admin with userName not found");
		}
	}
	
	@GetMapping(value="/find/recruiter")
	public List<Recruiter> findallRecruiter(){
		try {
		return recruiterService.findAll();
		}
		catch(InvalidRecruiterException exception) {
			throw new InvalidRecruiterException("error");
		} 
	}
	
	@GetMapping(value="/find/freelancer")
	public List<Freelancer> findallFreelancer(){
		try {
		return freelancerService.listFreelancers();
		}
		catch(InvalidFreelancerException exception) {
			throw new InvalidFreelancerException("error");
		} 
	}
	
	@GetMapping(value="/find/jobs")
	public List<Job> findallJobs(){
		try {
		return jobService.findAll();
		}
		catch(InvalidJobException exception) {
			throw new InvalidJobException("error");
		} 
	}
	
	@GetMapping(value = "/job/close/{id}")
	public ResponseEntity<Object> closeJob(@PathVariable Long id) {
		try {
			
			jobService.close(id);
		} catch (InvalidJobException exception) {
			throw new InvalidJobException("Job with given id not found");
		}
		return new ResponseEntity<>("closed successfully", HttpStatus.OK);

	}
	
	@GetMapping(value = "/recruiter/close/{id}")
	public ResponseEntity<Object> close(@PathVariable Long id) {
		try {
			
			recruiterService.deleteById(id);
		} catch (InvalidJobException exception) {
			throw new InvalidJobException("Recruiter with given id not found");
		}
		return new ResponseEntity<>("closed successfully", HttpStatus.OK);

	}
	
	@GetMapping(value = "/freelancer/close/{id}")
	public ResponseEntity<Object> fclose(@PathVariable Long id) {
		try {
			
			freelancerService.deleteById(id);
		} catch (InvalidJobException exception) {
			throw new InvalidJobException("Freelancer with given id not found");
		}
		return new ResponseEntity<>("closed successfully", HttpStatus.OK);

	}
	
	
	
}