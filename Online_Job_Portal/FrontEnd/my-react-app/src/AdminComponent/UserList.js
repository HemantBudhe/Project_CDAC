import React from 'react';
import AdminService from '../services/AdminService';
import { useState, useEffect } from 'react';
import ANavbar from './ANavbar';

export default function UserList() {

    const [jarr, setJarr] = useState([]);
    const userDetails = { id: localStorage.getItem('user') };

    useEffect(() => {
        loadJobList();
    }, []);

    const loadJobList = () => {
        AdminService.userList()
            .then((result) => {
                console.log(result.data);
                setJarr(result.data);
            })
            .catch(() => { });
    };

    const handleDeleteJob = (jobId) => {
        AdminService.deleteUser(jobId)
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
                <h3>User List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {jarr.map((job) => (
                        <tr key={job.id}>
                            <td>{job.firstName} {job.lastName}</td>
                            <td>{job.userName}</td>
                            <td>{job.city}</td>
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
