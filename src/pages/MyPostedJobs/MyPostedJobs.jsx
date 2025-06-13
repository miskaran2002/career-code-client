import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const {User}= UseAuth();
    return (
        <div>
            <h2>My Posted Jobs:</h2>
            <Suspense>
                <JobLists 
                    jobsCreatedByPromise={jobsCreatedByPromise(User.email)}
                    
                    ></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
