import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
import EmployerService from '../services/EmployerService';
import AppliersList from './AppliersList';
import { Link, useNavigate } from 'react-router-dom';
import EHomePage from './EHomePage';
import './Applier.css';


function EJobList() {
    const navigate = useNavigate();

    const [jarr, setJarr] = useState([]);
    const [selectedJobAppliers, setSelectedJobAppliers] = useState([]);
    const [showApplierList, setShowApplierList] = useState(false);
    const [selectedApplier, setSelectedApplier] = useState(null); // State for selected applier details

    const showApplierDetails = (applier) => {
        setSelectedApplier(applier);
    };

    const closeApplierDetails = () => {
        setSelectedApplier(null);
    };

    useEffect(() => {
        const storedUserName = localStorage.getItem('user');
        const userName = JSON.parse(storedUserName);

        EmployerService.getJobList(userName)
            .then((result) => {

                setJarr(result.data);
            })
            .catch(() => { });
    }, []);


    const applier = function (jobId) {
        EmployerService.getJobAppliers(jobId)
            .then((result) => {
                console.log(result.data)
                setSelectedJobAppliers(result.data);
                setShowApplierList(true);
            })
            .catch(() => { });
    };


    const deleteJob = function (jobId) {
        console.log(jobId);
        EmployerService.deleteJob(jobId)
            .then((result) => {
                console.log(result.data);
                setJarr(prevJarr => prevJarr.filter(job => job.id !== jobId)); // Remove the deleted job from the array
            });
    };


    return (
        <div>
            <div className="sticky-homepage">
                <EHomePage></EHomePage>
            </div>

            <div className="container py-3 sticky-div" >

                <div className="row" >

                    <div className="col-lg-6 sticky-description">

                        {jarr.map((job) => (

                            <div className="col-md-12" key={job.id}>
                                <div className="post">
                                    <div className="post__header d-flex justify-content-between align-items-center">
                                        <div className="post__info">
                                            <h5>
                                                <a href="description" className="post__link">
                                                    {job.jobTitle}
                                                </a>
                                            </h5>
                                            <h6>{job.postedBy.company}</h6>
                                        </div>

                                        <div className="d-flex">
                                            <button
                                                type="button"
                                                onClick={() => applier(job.id)}
                                                className="btn btn-primary me-2"
                                            >
                                                Applier
                                            </button>


                                            <button
                                                type="button"
                                                onClick={() => deleteJob(job.id)}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="post__body">
                                        <div className="px-4">
                                            <p className="post__details" style={{ color: "gray" }}>
                                                <span className="experience">Experience : {job.experience}yr</span>
                                                <span className="location px-2">Location : {job.location}</span>
                                                <span className="salary px-2">Salary : </span>
                                            </p>
                                            <p className="skill__details" style={{ color: "gray" }}>
                                                <h7>Skills : {job.skills} </h7>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="col-lg-6">
                        {/* Description */}
                        <div className="sticky-description">
                            <div className="col-md-12">
                                <div className="post">
                                    <div className="post__header d-flex justify-content-between align-items-center">
                                        <div className="post__info">
                                        </div>
                                    </div>
                                    {showApplierList && (
                                        <div className="post__body">
                                            <table class="table table-borderless ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Education</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedJobAppliers.map((applier) => (
                                                        <tr key={applier.freelancer.id}>
                                                            <td>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => showApplierDetails(applier)}
                                                                    className="btn btn-link btn-applier-name"
                                                                >
                                                                    {applier.freelancer.firstName} {applier.freelancer.lastName}
                                                                </button>
                                                            </td>
                                                            <td>{applier.freelancer.userName}</td>
                                                            <td>{applier.graduation}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {selectedApplier && (

                <div className="applier-details-overlay">
                    <div className="card col-lg-6 ">
                        <div className='px-5 py-3'>
                            <button className="btn-close" onClick={closeApplierDetails}>
                                &times;
                            </button>
                            <h3>{selectedApplier.freelancer.firstName} {selectedApplier.freelancer.lastName}</h3>
                            <h5>Email: {selectedApplier.freelancer.userName}</h5>
                            <h3>___</h3>
                            <h4>Education : </h4>
                            <div className='px-3'>
                                <h4 ><u>Graduation :</u></h4>
                                <h5>{selectedApplier.freelancer.graduation}</h5>
                                <h5 >{selectedApplier.freelancer.gradMarks}</h5>
                            </div>
                            <div className='px-3'>
                                <h4 ><u>12th :</u></h4>
                                <h5>{selectedApplier.freelancer.marks12}</h5>
                            </div>
                            <div className='px-3'>
                                <h4 ><u>10th :</u></h4>
                                <h5>{selectedApplier.freelancer.marks10}</h5>
                            </div>
                            <h3>___</h3>
                            <h4>Location :</h4>
                            <div className='px-3'>
                                <h4 ><u>City :</u></h4>
                                <h5>{selectedApplier.freelancer.city}</h5>
                            </div>
                            

                            {/* Add more applier details */}
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default EJobList;
