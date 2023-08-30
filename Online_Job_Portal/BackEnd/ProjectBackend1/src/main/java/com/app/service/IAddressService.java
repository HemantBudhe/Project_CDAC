package com.app.service;

import org.springframework.stereotype.Service;

import com.app.entites.Address;

@Service
public interface IAddressService {
	
	Address save(Address addr);
}
