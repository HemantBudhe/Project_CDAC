import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployerService from '../services/EmployerService';
import EHomePage from './EHomePage';


export default function PostJob() {

    let navigate = useNavigate()
    let [jobdetails, setjobdetails] = useState({ jobTitle: "", jobDescription: "", recruiterId: localStorage.getItem('user'), experience:"", location:"", skills:"", type:""});

    let addJob = async (event) => {

        event.preventDefault();

        try {
            const result = await EmployerService.postJob(jobdetails);
            console.log(result);
            setjobdetails({
                jobTitle: "",
                jobDescription: "",
                recruiterId: localStorage.getItem('user'),
                experience:"", location:"", skills:"", type:""
            });
            navigate("/ejob");
        } catch (error) {
            console.error("Error posting job:", error);
        }

    }
    return (
        <div>
            <div className="sticky-homepage" >
                <EHomePage></EHomePage>
            </div>
            Form

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-4">
                <div className="container py-3" style={{ backgroundColor: "white", borderRadius: "10px" }}>
                    <form onSubmit={addJob} method='post'>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0"></p>
                            <h3></h3>
                            <p />
                        </div>
                        {/* JobTitle input */}
                        <div className="form-outline mb-4">
                            <input
                                type='text'
                                id="JobTitle"
                                className="form-control form-control-lg"
                                placeholder="Job Title"
                                onChange={(event) => { setjobdetails({ ...jobdetails, jobTitle: event.target.value }) }}
                                required
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                Job Title
                            </label>
                        </div>
                        {/* JobDescription input */}
                        <div className="form-outline mb-3">
                            <textarea
                                id="form3Example4"
                                className="form-control form-control-lg"
                                placeholder="Job Description"
                                rows="3"
                                onChange={(event) => { setjobdetails({ ...jobdetails, jobDescription: event.target.value }) }}
                                required
                            />
                            <label className="form-label" htmlFor="form3Example4">
                                Job Description
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type='text'
                                id="Jobexperience"
                                className="form-control form-control-lg"
                                placeholder="Job experience"
                                onChange={(event) => { setjobdetails({ ...jobdetails, experience: event.target.value }) }}
                                required
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                Job location
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type='text'
                                id="Joblocation"
                                className="form-control form-control-lg"
                                placeholder="Job location"
                                onChange={(event) => { setjobdetails({ ...jobdetails, location: event.target.value }) }}
                                required
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                Job experience
                            </label>
                        </div>
                        
                        <div className="form-outline mb-4">
                            <input
                                type='text'
                                id="Jobskills"
                                className="form-control form-control-lg"
                                placeholder="Job skills"
                                onChange={(event) => { setjobdetails({ ...jobdetails, skills: event.target.value }) }}
                                required
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                Job skills
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type='text'
                                id="JobSalary"
                                className="form-control form-control-lg"
                                placeholder="Job Salary"
                                // onChange={(event) => { setjobdetails({ ...jobdetails, skills: event.target.value }) }}
                                
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                Job salary
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type='text'
                                id="Jobtype"
                                className="form-control form-control-lg"
                                placeholder="Job type"
                                onChange={(event) => { setjobdetails({ ...jobdetails, type: event.target.value }) }}
                                required
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                Job type
                            </label>
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
                                    Agree Term and condition
                                </label>
                            </div>

                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">

                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}

                            >
                                Post Job
                            </button>

                            <button
                                type="reset"
                                className="btn btn-primary btn-mg "
                                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                            >
                                Reset
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
