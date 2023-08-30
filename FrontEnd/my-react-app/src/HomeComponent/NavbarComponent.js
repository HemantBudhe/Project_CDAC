import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Image from './Image';



export default function NavbarComponent() {
  const alinkStyle = {
    fontSize: '30px',
    marginLeft: '10px',
    marginRight: 'auto',
    fontWeight: 'bold',
  };

  const navLinkStyle = {
    fontSize: '20px',
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand style={alinkStyle} className="text-white">
          Alink.
        </Navbar.Brand>
        <Nav className="ml-auto">
          <NavDropdown title="Register" id="basic-nav-dropdown" className="text-white" style={navLinkStyle}>
            <NavDropdown.Item href="/uregister" >JobSeeker</NavDropdown.Item>
            <NavDropdown.Item href="/eregister">Employer</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link className="text-white" href="/login" style={navLinkStyle}>
            Login
          </Nav.Link>
          
          <Nav.Link className="text-white" href="/about" style={navLinkStyle}>
            About us
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
