import React, { useEffect, useState } from 'react';

import JobCard from './shared/jobCard';

const HotJobs = ({ jobsPromise }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobsPromise.then(data => setJobs(data)).catch(console.error);
    }, [jobsPromise]);

    return (
        <div>
            <h2 className='text-4xl p-4 text-center font-bold text-gray-700 border'>Hot jobs of the day</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }

            </div>

        </div>
    );
};

export default HotJobs;
