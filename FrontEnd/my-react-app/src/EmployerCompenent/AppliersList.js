import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EmployerService from '../services/EmployerService';
import EHomePage from './EHomePage';

function AppliersList() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const jobId = searchParams.get('jobId');

    const [jobAppliers, setJobAppliers] = useState([]);

    useEffect(() => {
        if (jobId) {
            EmployerService.getJobAppliers(jobId)
                .then((result) => {
                  console.log(result.data)
                    setJobAppliers(result.data);
                })
                .catch(() => {});
        }
    }, [jobId]);

    return (
        <div>
            <EHomePage></EHomePage>
            <h2>Appliers List</h2>
            <ul>
                {jobAppliers.map((applier) => (
                    <li key={applier.freelancer.id}>{applier.freelancer.firstName}</li>
                    // Render other applier details as needed
                ))}
            </ul>
        </div>
    );
}

export default AppliersList;
