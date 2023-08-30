package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.app.entites.Freelancer;
import com.app.entites.JobApplication;


@Repository
public interface IFreelancerDao extends JpaRepository<Freelancer, Long> {

	/*******************************************************************************************
	 * Method:      getCurrentSeriesId
	 * @param       none
	 * @return      Long
	 * Description: This method returns the current value of primary key from the sequence.
	 *******************************************************************************************/
	@Query(value = "select freelancer_seq.currval from dual", nativeQuery = true)
	Long getCurrentSeriesId();

	public Freelancer findByUserName(String userName);
	
	public Freelancer findByUserNameAndPassword(String userName, String password); 

	public boolean existsByUserName(String userName);
	
	public boolean existsByPassword(String password);
	
	 
	
	public List<JobApplication> findByAppliedJobs(Long freelancer_id);
}
