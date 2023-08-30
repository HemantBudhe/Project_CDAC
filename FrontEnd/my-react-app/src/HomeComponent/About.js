import React from 'react';
import NavbarComponent from './NavbarComponent'


export default function About() {
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
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <h1>
                <b>About Us</b>
              </h1>
              <div>
                <div className="container">
                  <div className="rounded p-4 bg-light">
                    <div className="container">
                      <p>
                        Welcome to <span className="text-primary">Alink</span>, your
                        trusted platform for connecting job seekers and employers in a
                        seamless and efficient manner. Our mission is to bridge the
                        gap between talent and opportunity, empowering individuals to
                        find their dream jobs and businesses to discover exceptional
                        talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
