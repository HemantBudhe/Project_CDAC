package com.app.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IFreelancerDao;
import com.app.dao.IJobDao;
import com.app.dao.IRecruiterDao;
import com.app.dto.JobDTO;
import com.app.entites.Job;
import com.app.entites.Recruiter;
import com.app.exceptions.InvalidJobException;
import com.app.service.IJobService;





@Service
@Transactional
public class JobServiceImpl implements IJobService {

	@Autowired
	IJobDao jobdao;

	

	@Autowired
	IFreelancerDao freelancerDao;

	@Autowired
	IRecruiterDao recruiterDao;
	
	@Override
	public List<Job> getJobsByRecruiterId(Long recruiterId) {
        return jobdao.findByPostedBy_IdAndActive(recruiterId, true);
    }

	public void close(Long id) {
		if (jobdao.existsById(id)) {
			Job job = jobdao.findById(id).get();
			job.setActive(false);
			jobdao.save(job);
		}
//			jobdao.deleteById(id);
			
			
//		} else {
//			throw new InvalidJobException();
//		}
	}

	@Override
	public Job findById(Long id) {

		if (jobdao.existsById(id)) {
			return jobdao.findById(id).get();
		} else
			throw new InvalidJobException();

	}

	@Override
	public Job postJob(JobDTO jobdto) {
	    Job job = new Job();
	    long recruiterId = jobdto.getRecruiterId();

	    Optional<Recruiter> optionalRecruiter = recruiterDao.findById(recruiterId);
	    optionalRecruiter.ifPresent(recruiter -> {
	        job.setPostedBy(recruiter);
	        job.setActive(true);
	        job.setJobTitle(jobdto.getJobTitle());
	        job.setJobDescription(jobdto.getJobDescription());
	        job.setLocation(jobdto.getLocation());
	        job.setSkills(jobdto.getSkills());
	        job.setExperience(jobdto.getExperinece());
	        job.setType(jobdto.getType());
	    });

	    if (optionalRecruiter.isPresent()) {
	        return jobdao.save(job);
	    } else {
	        throw new InvalidJobException("Recruiter not found");
	    }
	}



//	@Override
//	public List<Job> findAll() {
//		return jobdao.findAll();
//	}

//	@Override
//	public void awardJob(Long jobId, Long freelancerId) {
//		Job job = jobdao.findById(jobId).get();
//		Freelancer freelancer = freelancerDao.findById(freelancerId).get();
//		job.setAwardedTo(freelancer);
//		jobdao.saveAndFlush(job);
//		
//	}

	@Override
	public List<Job> findAll() {
		return jobdao.findByActive(true);
	}

	@Override
	public List<Job> findByActive(boolean status) {
		// TODO Auto-generated method stub
		return jobdao.findByActive(true);
	}

}