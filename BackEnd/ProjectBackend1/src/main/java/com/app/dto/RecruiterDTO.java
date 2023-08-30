package com.app.dto;

import javax.validation.constraints.NotEmpty;


public class RecruiterDTO {

	@NotEmpty(message = "userName cannot be empty")
	private String userName;
	@NotEmpty(message = "first name cannot be empty")
	private String firstName;
	@NotEmpty(message = "last name cannot be empty")
	private String lastName;
	@NotEmpty(message = "password cannot be blank")
	private String password;
	
	private String company;
	
	private String location;

	private String designation;

	public RecruiterDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RecruiterDTO(@NotEmpty(message = "userName cannot be empty") String userName,
			@NotEmpty(message = "first name cannot be empty") String firstName,
			@NotEmpty(message = "last name cannot be empty") String lastName,
			@NotEmpty(message = "password cannot be blank") String password, String company, String location,
			String designation) {
		super();
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.company = company;
		this.location = location;
		this.designation = designation;
	}



	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getPassword() {
		return password;
	}

	public String getUserName() {
		return userName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	@Override
	public String toString() {
		return "RecruiterDTO [userName=" + userName + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", password=" + password + ", company=" + company + ", location=" + location + ", designation="
				+ designation + "]";
	}
	
}
