package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.JobApplicationDTO;
import com.app.dto.JobApplicationsApplyDTO;
import com.app.entites.JobApplication;



/**************************************************************************************
 * @author       Siddhesh
 * Description : This is the Service Interface for JobApplication module. 
 * Created Date: 26 April, 2021 
 * Version     : v1.0.0
 *************************************************************************************/

@Service
public interface IJobApplicationService {

	JobApplication applyToJob(JobApplicationDTO jobApplicationDto);

	List<JobApplication> findAll();

	void remove(Long id);
	
	JobApplication updateJobApplication(Long id,JobApplicationDTO jobApplicationDto);
	
	List<JobApplication> findAllByJobId(Long jobId);
	

	List<JobApplication> findByFreelancerId(Long freelancerId);
}