import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';
import EmployerService from '../services/EmployerService';
import NavbarComponent from '../HomeComponent/NavbarComponent'


export default function ERegister() {

  let navigate = useNavigate();
  let [EmpDetails, setEmpDetails] = useState({ firstName: "", lastName: "", userName: "", password: "", company: "", location: "", designation: "" });
  let addEmp = (event) => {

    if (EmpDetails.password !== EmpDetails.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    event.preventDefault();
    EmployerService.addEmp(EmpDetails)
      .then((result) => {
        setEmpDetails({ firstName: "", lastName: "", userName: "", password: "", company: "", location: "", designation: "" });
        navigate("/login")
      })
      .catch();
  }

  return (
    <div>
      <NavbarComponent />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={addEmp}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              value={EmpDetails.firstName}
                              onChange={(event) => {
                                setEmpDetails({ ...EmpDetails, firstName: event.target.value });
                              }}
                              required
                              pattern="[A-Za-z ]+"
                              title="Please enter only letters and spaces."
                            />
                            <label className="form-label" htmlFor="firstName">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control"
                              value={EmpDetails.lastName}
                              onChange={(event) => {
                                setEmpDetails({ ...EmpDetails, lastName: event.target.value });
                              }}
                              required
                              pattern="[A-Za-z ]+"
                              title="Please enter only letters and spaces."
                            />
                            <label className="form-label" htmlFor="lastName">
                              Last Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={EmpDetails.userName}
                              onChange={(event) => { setEmpDetails({ ...EmpDetails, userName: event.target.value }) }}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              value={EmpDetails.password}
                              onChange={(event) => {
                                setEmpDetails({ ...EmpDetails, password: event.target.value });
                              }}
                              required
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="confirmPassword"
                              className="form-control"
                              value={EmpDetails.confirmPassword}
                              onChange={(event) => {
                                setEmpDetails({ ...EmpDetails, confirmPassword: event.target.value });
                              }}
                              required
                            />
                            <label className="form-label" htmlFor="confirmPassword">
                              Repeat your password
                            </label>
                            {EmpDetails.password !== EmpDetails.confirmPassword && (
                              <p className="text-danger">Passwords do not match.</p>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="x5"
                              className="form-control"
                              value={EmpDetails.company}
                              onChange={(event) => { setEmpDetails({ ...EmpDetails, company: event.target.value }) }}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">
                              Company Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="x6"
                              className="form-control"
                              value={EmpDetails.location}
                              onChange={(event) => { setEmpDetails({ ...EmpDetails, location: event.target.value }) }}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">
                              Comapny Address
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              value={EmpDetails.designation}
                              onChange={(event) => { setEmpDetails({ ...EmpDetails, designation: event.target.value }) }}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">
                              Designation
                            </label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className=""
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                            required
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg" >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}



