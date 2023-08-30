import React from 'react';
import AdminService from '../services/AdminService';
import { useState, useEffect } from 'react';
import ANavbar from './ANavbar';

export default function RecList() {

    const [jarr, setJarr] = useState([]);
    const userDetails = { id: localStorage.getItem('user') };

    useEffect(() => {
        loadJobList();
    }, []);

    const loadJobList = () => {
        AdminService.recList()
            .then((result) => {
                console.log(result.data);
                setJarr(result.data);
            })
            .catch(() => { });
    };

    const handleDeleteJob = (jobId) => {
        AdminService.deletRec(jobId)
            .then(() => {
                // After successful deletion, reload the job list
                loadJobList();
            })
            .catch(() => { });
    };

    return (
        <div>
            <div className="sticky-homepage mb-3">
                <ANavbar />
            </div>

            <div className='py-3'>
                <h3>Recruiter List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Recruiter</th>
                            <th scope="col">Designation</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {jarr.map((job) => (
                        <tr key={job.id}>
                            <td>{job.company}</td>
                            <td>{job.firstName} {job.lastName}</td>
                            <td>{job.designation}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteJob(job.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
