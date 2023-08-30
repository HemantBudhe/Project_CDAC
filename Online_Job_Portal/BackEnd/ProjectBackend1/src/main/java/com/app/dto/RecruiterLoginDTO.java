package com.app.dto;

import javax.validation.constraints.NotNull;

public class RecruiterLoginDTO {
	
	@NotNull(message ="userName can't be null")
	private String userName;
	
	@NotNull(message ="password can't be null")
	private String password;

	public RecruiterLoginDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RecruiterLoginDTO(@NotNull(message = "userName can't be null") String userName,
			@NotNull(message = "password can't be null") String password) {
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
		return "RecruiterLoginDto [userName=" + userName + ", password=" + password + "]";
	}
	
}
