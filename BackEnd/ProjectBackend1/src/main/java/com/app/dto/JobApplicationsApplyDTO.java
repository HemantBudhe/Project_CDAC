package com.app.dto;

public class JobApplicationsApplyDTO {
	
	private String coverL;
	private Long jobId;
    private Long freelancerId;
    
    
    
    
	public JobApplicationsApplyDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public JobApplicationsApplyDTO(String coverL, Long jobId, Long freelancerId) {
		super();
		this.coverL = coverL;
		this.jobId = jobId;
		this.freelancerId = freelancerId;
	}
	public String getCoverL() {
		return coverL;
	}
	public void setCoverL(String coverL) {
		this.coverL = coverL;
	}
	public Long getJobId() {
		return jobId;
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
		return "JobApplicationsApplyDTO [coverL=" + coverL + ", jobId=" + jobId + ", freelancerId=" + freelancerId
				+ "]";
	}	
	
	
}
