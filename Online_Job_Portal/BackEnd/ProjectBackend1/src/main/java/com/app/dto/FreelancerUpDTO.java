package com.app.dto;

import javax.validation.constraints.NotEmpty;

public class FreelancerUpDTO {
	@NotEmpty(message = "firstName cannot be empty")
	private String firstName;
	@NotEmpty(message = "lastName cannot be empty")
	private String lastName;
	
    private String graduation;
    
    private String gradMarks;
    
    private String marks10;
    
    private String marks12;
    
    private String contry;
    
    private String state;
    
    private String city;

	public FreelancerUpDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FreelancerUpDTO(
			@NotEmpty(message = "firstName cannot be empty") String firstName,
			@NotEmpty(message = "lastName cannot be empty") String lastName,
			 String graduation, String gradMarks,
			String marks10, String marks12, String contry, String state, String city) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.graduation = graduation;
		this.gradMarks = gradMarks;
		this.marks10 = marks10;
		this.marks12 = marks12;
		this.contry = contry;
		this.state = state;
		this.city = city;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	@Override
	public String toString() {
		return "FreelancerUpDTO [firstName=" + firstName + ", lastName=" + lastName
				 + ", graduation=" + graduation + ", gradMarks=" + gradMarks + ", marks10="
				+ marks10 + ", marks12=" + marks12 + ", contry=" + contry + ", state=" + state + ", city=" + city + "]";
	}
}
