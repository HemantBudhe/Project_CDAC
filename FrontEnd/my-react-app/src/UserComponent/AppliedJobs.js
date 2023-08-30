import React, { Component } from 'react';
import UserService from '../services/UserService';
import HomePage from './HomePage';


export default class AppliedJobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ajarr: []
        }
    }
    
    componentDidMount(){
        
        const storedUserName = localStorage.getItem('user');
        const userName = JSON.parse(storedUserName);
        UserService.getAppliedJob(userName)
        .then((result) => {
            console.log(result.data)
            this.setState({ ...this.state, ajarr: result.data})
        })
        .catch(() => { })
    }

    render() {
        // const { firstName, lastName, appliedJobs } = this.state.uarr;
        return (
            <div>
                <div className="sticky-homepage" >
                 <HomePage></HomePage>
                 </div>

               {this.state.ajarr.map((job) => (
                    <div className="container py-3 sticky-div">
                    <div className="row">
                        {/* Sidebar column (for small and medium screens) */}
                        {/* <div class="col-md-3">
                          <!-- Sidebar content here */}
                        {/* </div> */}
                        {/* Feed column (for small and medium screens) */}
                        <div className="col-md-9">
                            {/* Feed content here */}
                            <div className="post">
                                <div className="post__header">
                                    <div className="post__info">
                                        <h5>
                                            <a href="description" className="post__link">
                                                {job.job.jobTitle}
                                            </a>
                                        </h5>
                                        <h6>{job.job.postedBy.company}</h6>
                                    </div>
                                </div>
                                <div className="post__body">
                                    <div className="px-4">
                                        <p className="post__details" style={{ color: "gray" }}>
                                            <span className="experience">Experience : {job.job.experience}yr</span>
                                            <span className="location px-2">Location : {job.job.location}</span>
                                            <span className="salary px-2">Salary : </span>
                                        </p>
                                        <p className="skill__details" style={{ color: "gray" }}>
                                            <h7>Skills : {job.job.skills} </h7>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Widgets column (for small and medium screens) */}
                        <div className="col-md-3">{/* Widgets content here */}</div>
                    </div>
                </div>
            
            ) )}
            </div>
        );
    }
}
