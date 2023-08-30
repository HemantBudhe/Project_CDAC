package com.app.dto;

import javax.validation.constraints.NotNull;

public class JobDTO {
	@NotNull(message = "jobTitle cant be null")
	private String jobTitle;
	@NotNull(message = "jobDescription cant be null")
	private String jobDescription;
    @NotNull(message = "recruiterid can't be null")
    private long recruiterId;
    
    private boolean status;
    
    private String experinece;
    
    private String type;

	private String location;
	
	private String skills;
	
    
    public JobDTO() {
		super();
	}
    
	

	public JobDTO(@NotNull(message = "jobTitle cant be null") String jobTitle,
			@NotNull(message = "jobDescription cant be null") String jobDescription,
			@NotNull(message = "recruiterid can't be null") long recruiterId, boolean status, String experinece,
			String type, String location, String skills) {
		super();
		this.jobTitle = jobTitle;
		this.jobDescription = jobDescription;
		this.recruiterId = recruiterId;
		this.status = status;
		this.experinece = experinece;
		this.type = type;
		this.location = location;
		this.skills = skills;
	}





	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getJobDescription() {
		return jobDescription;
	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public long getRecruiterId() {
		return recruiterId;
	}

	public void setRecruiterId(long recruiterId) {
		this.recruiterId = recruiterId;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getLocation() {
		// TODO Auto-generated method stub
		return location;
	}
	
	public String getExperinece() {
		return experinece;
	}

	public void setExperinece(String experience) {
		this.experinece = experience;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	@Override
	public String toString() {
		return "JobDTO [jobTitle=" + jobTitle + ", jobDescription=" + jobDescription + ", recruiterId=" + recruiterId
				+ ", status=" + status + ", experience=" + experinece + ", type=" + type + ", location=" + location
				+ "]";
	}

	
	

	

}