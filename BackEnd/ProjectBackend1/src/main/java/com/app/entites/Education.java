package com.app.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
public class Education {
	
	@Id
	@Column(name = "edu_id", updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String graduation;
	
	private int gradMarks;
	
	private int marks12;
	
	private int marks10;

	public Education() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Education(String graduation, int gradMarks, int marks12, int marks10) {
		super();
		this.graduation = graduation;
		this.gradMarks = gradMarks;
		this.marks12 = marks12;
		this.marks10 = marks10;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGraduation() {
		return graduation;
	}

	public void setGraduation(String graduation) {
		this.graduation = graduation;
	}

	public int getGradMarks() {
		return gradMarks;
	}

	public void setGradMarks(int gradMarks) {
		this.gradMarks = gradMarks;
	}

	public int getMarks12() {
		return marks12;
	}

	public void setMarks12(int marks12) {
		this.marks12 = marks12;
	}

	public int getMarks10() {
		return marks10;
	}

	public void setMarks10(int marks10) {
		this.marks10 = marks10;
	}

	@Override
	public String toString() {
		return "Education [graduation=" + graduation + ", gradMarks=" + gradMarks + ", marks12=" + marks12
				+ ", marks10=" + marks10 + "]";
	}
	

}
