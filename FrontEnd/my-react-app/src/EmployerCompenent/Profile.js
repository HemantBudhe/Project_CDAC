import React, { Component } from 'react';
import UserService from '../services/UserService';
import EmployerService from '../services/EmployerService';
import EHomePage from './EHomePage';
import '../EmployerCompenent/EHome.css'


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            earr: ""
        }
    }

    componentDidMount() {

        const storedUserName = localStorage.getItem('user');
        const userName = JSON.parse(storedUserName);
        EmployerService.getEmployer(userName)
            .then((result) => {
                console.log(result.data)
                this.setState({ ...this.state, earr: result.data })
            })
            .catch(() => { })
    }

    render() {
        const { firstName, lastName, designation ,location } = this.state.earr;
        return (
            <div>
                 <div className="sticky-homepage" >
                <EHomePage></EHomePage>
                </div>
                              New Compnent
                <>
                    <section style={{ backgroundColor: "#eee" }}>
                        <div className="container py-5 ">
                            <div className="row">
                                <div className="col-lg-3 ">
                                    <div className="card mb-4">
                                        <div className="card-body text-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                                alt="avatar"
                                                className="rounded-circle img-fluid"
                                                style={{ width: 150 }}
                                            />
                                            <h5 className="my-3">{firstName} {lastName}</h5>
                                            <p className="text-muted mb-1">{designation}</p>
                                            <p className="text-muted mb-4">{location}</p>
                                            {/* <div className="d-flex justify-content-center mb-2">
                                                <button type="button" className="btn btn-primary">
                                                    Follow
                                                </button>
                                                &nbsp;&nbsp;
                                                <button type="button" className="btn btn-outline-primary ms-1">
                                                    Message
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="card mb-4 mb-lg-0">
                                        <div className="card-body p-0">
                                            <ul className="list-group list-group-flush rounded-3">
                                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i className="fas fa-globe fa-lg text-warning" />
                                                    <p className="mb-0">https://mdbootstrap.com</p>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i
                                                        className="fab fa-github fa-lg"
                                                        style={{ color: "#333333" }}
                                                    />
                                                    <p className="mb-0">mdbootstrap</p>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i
                                                        className="fab fa-twitter fa-lg"
                                                        style={{ color: "#55acee" }}
                                                    />
                                                    <p className="mb-0">@mdbootstrap</p>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i
                                                        className="fab fa-instagram fa-lg"
                                                        style={{ color: "#ac2bac" }}
                                                    />
                                                    <p className="mb-0">mdbootstrap</p>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i
                                                        className="fab fa-facebook-f fa-lg"
                                                        style={{ color: "#3b5998" }}
                                                    />
                                                    <p className="mb-0">mdbootstrap</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="card mb-4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col text-left">
                                                    <h5 className="my-3">Experience</h5>
                                                </div>
                                                <div className="col text-right">
                                                    <button className="btn btn-outline-primary">Add</button>
                                                </div>
                                            </div>
                                            <div>{/* add education */}</div>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col text-left">
                                                    <h5 className="my-3">Education</h5>
                                                </div>
                                                <div className="col text-right">
                                                    <button className="btn btn-outline-primary">Add</button>
                                                </div>
                                            </div>
                                            <div>{/* add education */}</div>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col text-left">
                                                    <h5 className="my-3">Certifications</h5>
                                                </div>
                                                <div className="col text-right">
                                                    <button className="btn btn-outline-primary">Add</button>
                                                </div>
                                            </div>
                                            <div>{/* add education */}</div>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col text-left my-3">
                                                    <h5>Resume</h5>
                                                </div>
                                                {/* <div class="col text-right"><button class="btn btn-outline-primary">Add Education</button></div> */}
                                            </div>
                                            <div>{/* add education */}</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card mb-4 mb-md-0">
                                                <div className="card-body">
                                                    <p className="mb-4">
                                                        <span className="text-primary font-italic me-1">
                                                            assigment
                                                        </span>{" "}
                                                        Project Status
                                                    </p>
                                                    <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                                        Web Design
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "80%" }}
                                                            aria-valuenow={80}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        Website Markup
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "72%" }}
                                                            aria-valuenow={72}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        One Page
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "89%" }}
                                                            aria-valuenow={89}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        Mobile Template
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "55%" }}
                                                            aria-valuenow={55}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        Backend API
                                                    </p>
                                                    <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "66%" }}
                                                            aria-valuenow={66}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card mb-4 mb-md-0">
                                                <div className="card-body">
                                                    <p className="mb-4">
                                                        <span className="text-primary font-italic me-1">
                                                            assigment
                                                        </span>{" "}
                                                        Project Status
                                                    </p>
                                                    <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                                        Web Design
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "80%" }}
                                                            aria-valuenow={80}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        Website Markup
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "72%" }}
                                                            aria-valuenow={72}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        One Page
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "89%" }}
                                                            aria-valuenow={89}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        Mobile Template
                                                    </p>
                                                    <div className="progress rounded" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "55%" }}
                                                            aria-valuenow={55}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                        Backend API
                                                    </p>
                                                    <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "66%" }}
                                                            aria-valuenow={66}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>


            </div>
        );
    }
}
