package com.app.dto;

import java.util.List;

import javax.validation.constraints.NotEmpty;

import com.app.entites.Address;
import com.app.entites.Education;


public class FreelancerDTO {
	@NotEmpty(message = "userName cannot be empty")
	private String userName;
	@NotEmpty(message = "firstName cannot be empty")
	private String firstName;
	@NotEmpty(message = "lastName cannot be empty")
	private String lastName;
	@NotEmpty(message = "password cannot be empty")
	private String password;
	
//	private Address address;
//	
//	private Education education;
//	
	

	public FreelancerDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public FreelancerDTO(@NotEmpty(message = "userName cannot be empty") String userName,
			@NotEmpty(message = "firstName cannot be empty") String firstName,
			@NotEmpty(message = "lastName cannot be empty") String lastName,
			@NotEmpty(message = "password cannot be empty") String password)
		 {
		super();
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "FreelancerDTO [userName=" + userName + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", password=" + password + "]";
	}

	
	

	

}
