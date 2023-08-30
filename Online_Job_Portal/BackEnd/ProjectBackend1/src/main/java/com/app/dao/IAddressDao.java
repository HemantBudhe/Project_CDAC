package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entites.Address;

public interface IAddressDao extends JpaRepository<Address, Long> {

}
