package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entites.Education;

public interface IEducationDao extends JpaRepository<Education, Long>{

}
