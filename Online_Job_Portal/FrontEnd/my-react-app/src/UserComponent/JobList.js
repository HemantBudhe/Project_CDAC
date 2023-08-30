import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import HomePage from './HomePage';
import '../EmployerCompenent/EHome.css';

function JobList() {
    const [jarr, setJarr] = useState([]);
    const [selectedJobDescription, setSelectedJobDescription] = useState("");
    const userDetails = { id: localStorage.getItem('user'), coverL: "Job1" };

    useEffect(() => {
        UserService.getJobList()
            .then((result) => {
                console.log(result.data);
                setJarr(result.data);
            })
            .catch(() => {});
    }, []);

    const applyJob = (coverL, jobId, freelancerId) => {
        console.log(freelancerId, jobId);
        UserService.applyJob(coverL, jobId, freelancerId)
            .then((result) => {
                const updatedJobs = jarr.filter(job => job.id !== jobId);
                setJarr(updatedJobs);
            })
            .catch(() => {});
    };

    const showJobDescription = (description) => {
        setSelectedJobDescription(description);
    };

    return (
        <div>
            <div className="sticky-homepage">
                <HomePage />
            </div>
            <div className="container py-3 sticky-div">
                <div className="row">
                    <div className="col-lg-6 sticky-description">
                        {jarr.map((job) => (
                            <div className="container py-3 sticky-div" key={job.id}>
                                <div className="col-md-12">
                                    <div className="post">
                                        <div className="post__header d-flex justify-content-between align-items-center">
                                            <div className="post__info">
                                                <h5>
                                                    <a
                                                        type="button"
                                                        onClick={() => showJobDescription(
                                                            <div>
                                                        <h3>{job.jobTitle}</h3>
                                                        <h4>{job.postedBy.company}</h4>
                                                        <h3>___ </h3>
                                                        <h4>Description</h4>
                                                        <h5>{job.jobDescription}</h5>
                                                        <h4>___</h4>
                                                        <h4>Experience :</h4>
                                                        <h4> {job.experience}</h4>
                                                        <h4>___</h4>
                                                        <h4>Skills :</h4>
                                                        <h4> {job.skills}</h4>
                                                        <h4>___</h4>
                                                        <h4>Type :</h4>
                                                        <h4> {job.type}</h4>
                                                        <h4>___</h4>
                                                        <h4>Location :</h4>
                                                        <h4> {job.location}</h4>
                                                        <h5></h5>
                                                        </div>
                                                        )}
                                                        className="post__link-button"
                                                    >
                                                        {job.jobTitle}
                                                    </a>
                                                </h5>
                                                <h6>{job.postedBy.company}</h6>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => applyJob(userDetails.coverL = "job1", job.id, userDetails.id)}
                                                className="btn btn-primary"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                        <div className="post__body">
                                            <div className="px-4">
                                                <p className="post__details" style={{ color: "gray" }}>
                                                    <span className="experience">Experience : {job.experience}yr |</span>
                                                    <span className="location px-2"> Location : {job.location} |</span>
                                                    <span className="salary px-2"> Salary : </span>
                                                </p>
                                                <p className="skill__details" style={{ color: "gray" }}>
                                                    <h7>Skills : {job.skills} </h7>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6">
                        <div className="sticky-description">
                            <div className="col-md-12">
                                <div className="post">
                                    <div className="post__header d-flex justify-content-between align-items-center">
                                        <div className="post__info">
                                            {selectedJobDescription}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobList;
