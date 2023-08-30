import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import EmployerService from '../services/EmployerService';
import AdminService from '../services/AdminService';
import NavbarComponent from './NavbarComponent'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Nav, Navbar } from 'react-bootstrap';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("JobSeeker");
  const Navigate = useNavigate();

  const handleRole = (event) => {
    setRole(event.target.value);
  }

  function loginInfo(e) {
    e.preventDefault();
    let userdetails = { userName: email, password: password };
    if (role === 'JobSeeker') {
      UserService.checkLogin(userdetails)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.id));
          Navigate('/job');
        }).catch((err) => {
          alert("Incorrect UserName or PassWord")
        });
    }
    else if (role === 'Employer') {
      EmployerService.checkLogin(userdetails)
        .then((res) => {
          console.log(res)
          localStorage.setItem("user", JSON.stringify(res.data.id));
          Navigate('/ejob');
        }).catch((err) => {
          alert("Employer Incorrect UserName or PassWord")
        });
    }
    else {
      AdminService.checkLogin(userdetails)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.id));
          Navigate('/joblist');
        }).catch((err) => {
          alert("Admin Incorrect UserName or PassWord")
        });
    }
  }



  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            {/* Form begin */}
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={loginInfo}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">

                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0"></p>
                  <h3>Welcome</h3>
                  <p />
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter email address"
                    required

                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    required
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                {/* Role */}
                <div className='form-outline mb-3 '>
                  <select className='form-control form-control-lg'
                    value={role}
                    onChange={handleRole}
                  >
                    <option value="JobSeeker">Job Seeker</option>
                    <option value="Employer">Employer</option>
                    <option value="Admin">Admin</option>
                  </select>
                  Role
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                      required
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="/register" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary ">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          {/* Copyright */}
          {/* Right */}
          {/* <div>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div> */}
          {/* Right */}
        </div>
      </section>

    </div>
  );
}
