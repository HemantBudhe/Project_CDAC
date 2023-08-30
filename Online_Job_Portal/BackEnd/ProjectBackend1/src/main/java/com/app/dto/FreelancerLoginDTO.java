package com.app.dto;

import javax.validation.constraints.NotEmpty;

public class FreelancerLoginDTO {
	@NotEmpty(message = "username cannot be empty")
	private String userName;
	@NotEmpty(message = "password cannot be empty")
	private String password;
	
	public FreelancerLoginDTO() {
		super();
	}

	public FreelancerLoginDTO(@NotEmpty(message = "username cannot be empty") String userName,
			@NotEmpty(message = "password cannot be empty") String password) {
		super();
		this.userName = userName;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "FreelancerLoginDTO [userName=" + userName + ", password=" + password + "]";
	}
	
	
  
}
