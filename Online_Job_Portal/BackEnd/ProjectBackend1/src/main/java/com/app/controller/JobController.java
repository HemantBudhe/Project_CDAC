package com.app.controller;

import java.util.ArrayList;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.JobDTO;
import com.app.entites.Job;
import com.app.exceptions.InvalidJobException;
import com.app.service.IJobService;


@RestController
@RequestMapping("/job")
@CrossOrigin(origins = "*")
public class JobController {

	@Autowired
	IJobService jobService;


	 @GetMapping("/byRecruiter/{recruiterId}")
	    public ResponseEntity<List<Job>> getJobsByRecruiterId(@PathVariable Long recruiterId) {
	        List<Job> jobs = jobService.getJobsByRecruiterId(recruiterId);
	        return new ResponseEntity<>(jobs, HttpStatus.OK);
	    }

	@GetMapping(value = "/close/{id}")
	public ResponseEntity<Object> close(@PathVariable Long id) {
		try {
			
			jobService.close(id);
		} catch (InvalidJobException exception) {
			throw new InvalidJobException("Job with given id not found");
		}
		return new ResponseEntity<>("closed successfully", HttpStatus.OK);

	}

	

	@GetMapping(value = "/findById/{id}")
	public ResponseEntity<Object> findById(@PathVariable Long id) {
		try {
			return new ResponseEntity<>(jobService.findById(id), HttpStatus.OK);
		} catch (InvalidJobException exception) {
			throw new InvalidJobException("Job with given id doesn't exist");
		}

	}

	

//	@GetMapping(value = "/findJobsBySkill/{name}")
//	@ResponseBody
//	public ResponseEntity<Object> findbyskill(@PathVariable String name) {
//		try {
//			return new ResponseEntity<>(jobService.findJobsBySkillName(name), HttpStatus.OK);
//		} catch (InvalidJobException exception) {
//			throw new InvalidJobException("no job with this skill found");
//		}
//
//	}

	

	@PostMapping("/postJob")
	public ResponseEntity<Object> job(@RequestBody JobDTO jobDto) {
		System.out.println(jobDto);
		jobService.postJob(jobDto);
		return new ResponseEntity<>("Job Posted Successfully", HttpStatus.OK);
	}

	@GetMapping("/findAll")
	public ResponseEntity<Object> findAll() {
		return new ResponseEntity<>(jobService.findAll(), HttpStatus.OK);
	}

//	@PutMapping("/awardJob/{jobId}/{freelancerId}")
//	public ResponseEntity<String> awardJob(@PathVariable Long jobId, @PathVariable Long freelancerId) {
//		jobService.awardJob(jobId, freelancerId);
//		String response = "Job Awarded Successfully";
//		return new ResponseEntity<>(response, HttpStatus.OK);
//	}
	
	@GetMapping("/getAllActive")
	public ResponseEntity<Object> getAllActiveJobs() {
		return new ResponseEntity<>(jobService.findByActive(true), HttpStatus.OK);
		
	}

}
