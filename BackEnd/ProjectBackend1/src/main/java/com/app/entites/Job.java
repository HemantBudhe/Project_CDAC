package com.app.entites;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Job implements Serializable {

	private static final long serialVersionUID = -7946011744287965252L;

	@Id
	@Column(name = "job_id", updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	// @SequenceGenerator(name = "job_seq", sequenceName = "job_seq", allocationSize
	// = 1)
	private Long id;

	private String jobTitle;

	@Column(length = 5000)
	private String jobDescription;
	
	private String experience;
	
	private String skills;
	
	private String location;
	
	
	private String type;

	//	@OneToOne(targetEntity = Skill.class, cascade = { CascadeType.MERGE, CascadeType.REFRESH })
//	@OnDelete(action = OnDeleteAction.CASCADE)
//	private Skill skill;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL) // Change this iff you DON'T want to lift dept
																	// details along with emp
	@JoinColumn(name = "recruiter_id", nullable = false) // not null constraint added on FK column
	private Recruiter postedBy;

//	@ManyToOne(targetEntity = Recruiter.class, cascade = { CascadeType.MERGE, CascadeType.REFRESH })
//	@OnDelete(action = OnDeleteAction.CASCADE)
//	@JoinColumn(name = "recruiter_id")
//	private Recruiter postedBy;

	private LocalDate postedDate = LocalDate.now(ZoneId.of("GMT+05:30"));

//	@OneToOne(targetEntity = Freelancer.class, cascade = { CascadeType.MERGE, CascadeType.REFRESH })
//	@OnDelete(action = OnDeleteAction.CASCADE)
//	private Freelancer awardedTo;

//	@OneToMany(mappedBy = "job",
//			cascade = CascadeType.ALL, orphanRemoval = true/* ,fetch = FetchType.EAGER */)
//	private List<JobApplication> jobApplications;

	private Boolean active;

	public Job() {
		super();
	}



	public Job(String jobTitle, String jobDescription, String experience, String skills, String location, String type,
			Recruiter postedBy, LocalDate postedDate, Boolean active) {
		super();
		this.jobTitle = jobTitle;
		this.jobDescription = jobDescription;
		this.experience = experience;
		this.skills = skills;
		this.location = location;
		this.type = type;
		this.postedBy = postedBy;
		this.postedDate = postedDate;
		this.active = active;
	}



	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Boolean getActive() {
		return active;
	}

//	public Freelancer getAwardedTo() {
//		return awardedTo;
//	}

	public Long getId() {
		return id;
	}

//	public List<JobApplication> getJobApplications() {
//		return jobApplications;
//	}

	public String getJobDescription() {
		return jobDescription;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public Recruiter getPostedBy() {
		return postedBy;
	}

	public LocalDate getPostedDate() {
		return postedDate;
	}
	
	public String getExperience() {
		return experience;
	}



	public void setExperience(String experience) {
		this.experience = experience;
	}



	public String getSkills() {
		return skills;
	}



	public void setSkills(String skills) {
		this.skills = skills;
	}

//	public Skill getSkill() {
//		return skill;
//	}

	public void setActive(Boolean active) {
		this.active = active;
	}

//	public void setAwardedTo(Freelancer awardedTo) {
//		this.awardedTo = awardedTo;
//	}

	public void setId(Long id) {
		this.id = id;
	}

//	public void setJobApplications(List<JobApplication> jobApplications) {
//		this.jobApplications = jobApplications;
//	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public void setPostedBy(Recruiter recruiter) {
		this.postedBy = recruiter;
	}

	public void setPostedDate(LocalDate postedDate) {
		this.postedDate = postedDate;
	}

//	public void setSkill(Skill skill) {
//		this.skill = skill;
//	}

}
