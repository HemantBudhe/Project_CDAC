package com.app.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAddressDao;
import com.app.entites.Address;
import com.app.service.IAddressService;

@Service
@Transactional
public class AddressServiceImpl implements IAddressService {
	
	@Autowired
	public IAddressDao addrDao;

	@Override
	public Address save(Address addr) {
		
		return addrDao.save(addr);
	}

}
