package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDTO;
import com.app.entites.Address;
import com.app.exceptions.InvalidAdminException;
import com.app.exceptions.JobPortalValidationException;
import com.app.service.IAddressService;

@RestController
@RequestMapping("/address")
@CrossOrigin(origins = "*")
public class AddressController {
	
	@Autowired
	IAddressService addrService;

	@PostMapping("/save")
	public ResponseEntity<Object> adminSave(@Valid @RequestBody Address address, BindingResult bindingResult) {
		System.out.println(address.toString());
		if (bindingResult.hasErrors()) {
			System.out.println("Some errors exist!");
			List<FieldError> fieldErrors = bindingResult.getFieldErrors();

			List<String> errMessages = new ArrayList<>();
			for (FieldError fe : fieldErrors) {
				errMessages.add(fe.getDefaultMessage());
			}
			throw new JobPortalValidationException(errMessages);
		}
		try {
			addrService.save(address);
			return new ResponseEntity<>("Admin Successfully", HttpStatus.ACCEPTED);
		} catch (InvalidAdminException exception) {
			throw new InvalidAdminException("Could not save new Admin");
		}

	}
}
