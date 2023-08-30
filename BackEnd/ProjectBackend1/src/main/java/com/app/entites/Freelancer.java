package com.app.entites;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Freelancer implements Serializable {

	private static final long serialVersionUID = -8358203589467846311L;
	@Id
	@Column(name = "freelancer_id", updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String userName;

	@Column(nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String lastName;
	@Column(nullable = false)
	private String password;

    private String graduation;
    
    private String gradMarks;
    
    private String marks10;
    
    private String marks12;
    
    private String contry;
    
    private String state;
    
    private String city;
    
    
	@OneToMany(targetEntity = JobApplication.class , fetch = FetchType.EAGER )
	private List<JobApplication> appliedJobs;

	public Freelancer() {
		super();
	}

	
	public Freelancer(String userName, String firstName, String lastName, String password, String graduation,
			String gradMarks, String marks10, String marks12, String contry, String state, String city,
			List<JobApplication> appliedJobs) {
		super();
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.graduation = graduation;
		this.gradMarks = gradMarks;
		this.marks10 = marks10;
		this.marks12 = marks12;
		this.contry = contry;
		this.state = state;
		this.city = city;
		this.appliedJobs = appliedJobs;
	}


	
	public String getGraduation() {
		return graduation;
	}


	public void setGraduation(String graduation) {
		this.graduation = graduation;
	}


	public String getGradMarks() {
		return gradMarks;
	}


	public void setGradMarks(String gradMarks) {
		this.gradMarks = gradMarks;
	}


	public String getMarks10() {
		return marks10;
	}


	public void setMarks10(String marks10) {
		this.marks10 = marks10;
	}


	public String getMarks12() {
		return marks12;
	}


	public void setMarks12(String marks12) {
		this.marks12 = marks12;
	}


	public String getContry() {
		return contry;
	}


	public void setContry(String contry) {
		this.contry = contry;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<JobApplication> getAppliedJobs() {
		return appliedJobs;
	}



	public String getFirstName() {
		return firstName;
	}

	public Long getId() {
		return id;
	}

	public String getLastName() {
		return lastName;
	}

	public String getPassword() {
		return password;
	}



	public void setAppliedJobs(List<JobApplication> appliedJobs) {
		this.appliedJobs = appliedJobs;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
