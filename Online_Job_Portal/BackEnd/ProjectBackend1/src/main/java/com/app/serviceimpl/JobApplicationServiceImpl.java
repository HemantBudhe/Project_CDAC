package com.app.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IFreelancerDao;
import com.app.dao.IJobApplicationDao;
import com.app.dao.IJobDao;
import com.app.dto.JobApplicationDTO;
import com.app.entites.JobApplication;
import com.app.exceptions.InvalidJobApplicationException;
import com.app.service.IJobApplicationService;



/**************************************************************************************
 * @author       Siddhesh
 * Description : This is the Service Implementation for JobApplication module. 
 * Created Date: 26 April, 2021 
 * Version     : v1.0.0
 *************************************************************************************/

@Service
@Transactional
public class JobApplicationServiceImpl implements IJobApplicationService {

	@Autowired
	IJobApplicationDao jobApplicationDao;

	@Autowired
	IJobDao jobDao;

	@Autowired
	IFreelancerDao freelancerDao;

	@Override
	public JobApplication applyToJob(JobApplicationDTO jobApplicationDto) {
		JobApplication jobApplication = new JobApplication();
		if(! jobApplicationDao.existsByFreelancerIdAndJobId(jobApplicationDto.getFreelancerId(), jobApplicationDto.getJobId())) {
		if ((jobApplicationDto.getFreelancerId() != null) || !jobApplicationDto.getCoverLetter().isEmpty()
				|| jobApplicationDto.getJobId() != null) {
			
			jobApplication.setCoverLetter(jobApplicationDto.getCoverLetter());
			jobApplication.setFreelancer(freelancerDao.findById(jobApplicationDto.getFreelancerId()).get());
			jobApplication.setJob(jobDao.findById(jobApplicationDto.getJobId()).get());
			return jobApplicationDao.save(jobApplication);
			
		} else {
			throw new InvalidJobApplicationException();
		}
		}
		else {
			throw new InvalidJobApplicationException();
		}
	}

	@Override
	public List<JobApplication> findAll() {
			return jobApplicationDao.findAll();
		}

	@Override
	public void remove(Long id) {
		if (jobApplicationDao.existsById(id)) {

			jobApplicationDao.deleteById(id);
		} else {
			throw new InvalidJobApplicationException();
		}

	}

	@Override
	public JobApplication updateJobApplication(Long id, JobApplicationDTO jobApplicationDto) {
		if (jobApplicationDao.existsById(id)) {

			JobApplication jobApplication = jobApplicationDao.findById(id).get();
			jobApplication.setCoverLetter(jobApplicationDto.getCoverLetter());

			jobApplication.setJob(jobDao.findById(jobApplicationDto.getJobId()).get());
			jobApplicationDao.save(jobApplication);

			return jobApplication;
		} else {
			throw new InvalidJobApplicationException();
		}

	}

	@Override
	public List<JobApplication> findAllByJobId(Long jobId) {
		return jobApplicationDao.findAllByJobId(jobId);
	}

	@Override
	public List<JobApplication> findByFreelancerId(Long freelancerId) {
		return jobApplicationDao.findByFreelancerId(freelancerId);
	}

}