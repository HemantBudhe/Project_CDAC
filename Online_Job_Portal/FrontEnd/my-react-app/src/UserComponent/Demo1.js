import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import NavbarComponent from '../HomeComponent/NavbarComponent'


export default function URegister() {

  let navigate=useNavigate();
  let [userDetails,setUserDetails] = useState({firstName:"",lastName:"",userName:"",password:""});
  let adduser=(event)=>{
        event.preventDefault();
    UserService.addUser(userDetails)
    .then((result) => {
      setUserDetails({firstName:"",lastName:"",userName:"",password:""});
      navigate("/login")
    })
    .catch();
  }

  return (
    <div>
            <NavbarComponent></NavbarComponent>
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
                <form className="mx-1 mx-md-4" onSubmit={adduser}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        value={userDetails.firstName}
                        onChange={(event)=>{setUserDetails({...userDetails,firstName:event.target.value})}}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        First Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        value={userDetails.lastName}
                        onChange={(event) =>{setUserDetails({...userDetails,lastName:event.target.value})}}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example1c">
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
                        value={userDetails.userName}
                        onChange={(event)=>{setUserDetails({...userDetails,userName:event.target.value})}}
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
                        id="form3Example4c"
                        className="form-control"
                        value={userDetails.password}
                        onChange={(event)=>{setUserDetails({...userDetails,password:event.target.value})}}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
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
                    <button type="submit" className="btn btn-primary btn-lg">
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
