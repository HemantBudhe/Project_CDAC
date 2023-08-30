package com.app.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class JobApplicationDTO {
	@NotNull(message = "Job ID cannot be blank")
	private Long jobId;
	
	private String coverLetter;
	@NotNull(message="Freelancer Id cannot be Blank")
	private Long freelancerId;
	
	public JobApplicationDTO() {
		super();
	}

	public JobApplicationDTO(Long jobId, String coverLetter, Long freelancerId) {
		super();
		this.jobId = jobId;
		this.coverLetter = coverLetter;
		this.freelancerId = freelancerId;
	}

	public String getCoverLetter() {
		return coverLetter;
	}

	public Long getJobId() {
		return jobId;
	}

	public void setCoverLetter(String coverLetter) {
		this.coverLetter = coverLetter;
	}

	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}

	public Long getFreelancerId() {
		return freelancerId;
	}

	public void setFreelancerId(Long freelancerId) {
		this.freelancerId = freelancerId;
	}

	@Override
	public String toString() {
		return "JobApplicationDTO [jobId=" + jobId + ", coverLetter=" + coverLetter + ", freelancerId=" + freelancerId
				+ "]";
	}
	

}
