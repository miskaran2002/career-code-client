import React from 'react';
import { Link, useLoaderData } from 'react-router';

const jobsDetails = () => {
    const {_id,title,company}= useLoaderData();
     
    return (
        <div className='p-4 border-2'>
            <h1 className='text-3xl font-bold'>Job Titles Of:{title}</h1>
            <h1>Company:{company}</h1>


            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
           

            
        </div>
    );
};

export default jobsDetails;