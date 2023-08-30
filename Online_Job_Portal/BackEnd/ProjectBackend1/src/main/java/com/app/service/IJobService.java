package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.JobDTO;
import com.app.entites.Job;



@Service
public interface IJobService {

	void close(Long id);

	Job findById(Long id);
	
	
	
	List<Job> findAll();
	
//	List<Object> findAllActiveJobs();
	
	Job postJob(JobDTO jobDto);

	List<Job> getJobsByRecruiterId(Long recruiterId);

	List<Job> findByActive(boolean bool);
	
//	void awardJob(Long jobId, Long freelancerId);
}
