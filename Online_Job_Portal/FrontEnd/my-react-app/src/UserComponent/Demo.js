import React, { Component } from 'react';
import UserService from '../services/UserService';
import HomePage from './HomePage';
import '../EmployerCompenent/EHome.css';

export default class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jarr: [],
            button: "Apply"
        }
    }

    componentDidMount() {
        // const storedUserName = localStorage.getItem('user');
        // const freelancerId = JSON.parse(storedUserName);
        UserService.getJobList()
            .then((result) => {
                console.log(result.data)
                this.setState({ ...this.state, jarr: result.data })
            })
            .catch(() => { })
    }

    userDetails = { id: localStorage.getItem('user'), coverL: "Job1" }


    applyJob = function (coverL, jobId, freelancerId) {
        console.log(freelancerId, jobId)
        UserService.applyJob(coverL, jobId, freelancerId)
            .then((result) => {
                const updatedJobs = this.state.jarr.filter(job => job.id !== jobId);
                this.setState({
                    ...this.state,
                    jarr: updatedJobs
                });

            })
            .catch(() => { })
    }

    render() {
        // const { firstName, lastName, appliedJobs } = this.state.uarr;
        return (
            <div>
                <div className="sticky-homepage">
                    <HomePage></HomePage>
                </div>
                <div className="container py-3 sticky-div" >
                    <div className="row">
                        <div className="col-lg-6 sticky-description">
                            {this.state.jarr.map((job) => (
                                <div className="container py-3 sticky-div">

                                    {/* Sidebar column (for small and medium screens) */}
                                    {/* <div class="col-md-3">
                                     Sidebar content here */}
                                    {/* </div> */}
                                    {/* Feed column (for small and medium screens) */}
                                    <div className="col-md-12" key={job.id}>
                                        {/* Feed content here */}
                                        <div className="post">
                                            <div className="post__header d-flex justify-content-between align-items-center">
                                                <div className="post__info">
                                                    <h5>
                                                        <a href="description" className="post__link">
                                                            {job.jobTitle}
                                                        </a>
                                                    </h5>
                                                    <h6>{job.jobDescription}</h6>
                                                </div>

                                                <button type="button" onClick={() => { this.applyJob(this.userDetails.coverL = "job1", job.id, this.userDetails.id) }} className="btn btn-primary">Apply</button>
                                            </div>
                                            <div className="post__body">
                                                <div className="px-4">
                                                    <p className="post__details" style={{ color: "gray" }}>
                                                        <span className="experience">Experience :_______yr</span>
                                                        <span className="location px-2">Location :______</span>
                                                        <span className="salary px-2">Salary : _______</span>
                                                    </p>
                                                    <p className="skill__details" style={{ color: "gray" }}>
                                                        <h7>Skills : </h7>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Widgets column (for small and medium screens) */}
                                    <div className="col-md-3">{/* Widgets content here */}</div>
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
                                                fahjlfhrfio
                                                sjfklsjafkl
                                                sjk;sjadfkjsafk
                                                afkosadkf;gs;lv
                                                sddkfdskfjsjlsaldfhlhaslhflsah jfsdkfljsad kjsdkjfsk  ksjfkjskfjksjf jsdkjfksjfj;
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
}
