package com.app.dto;

import javax.validation.constraints.NotEmpty;

public class AdminLoginDTO {
	
	@NotEmpty(message = "userName cant be empty")
	private String userName;
	@NotEmpty(message = "Password cant be empty")
	private String password;
	
	
	public AdminLoginDTO() {
		super();
		// TODO Auto-generated constructor stub
	}


	public AdminLoginDTO( String userName,String password) {
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
		return "AdminLoginDTO [userName=" + userName + ", password=" + password + "]";
	}
	
	

}
