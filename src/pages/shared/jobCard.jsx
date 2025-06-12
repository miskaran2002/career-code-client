import React from 'react';
import {  FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const jobCard = ({job}) => {
    const {_id, title, company,requirements, jobType,salaryRange, location, company_logo,description} = job;
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex gap-2'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className='text-4xl' >{company}</h3>
                    <p className=' flex items-center gap-2 text-sm text-gray-500'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary:{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                <p>Job Type:{jobType}</p>
                <p>{description}</p>
                <p>Requirements:{requirements.map((skill,index) => <span key={index} className='badge badge-outline'>{skill}</span>)}</p>
               
                
               
                <div className="card-actions ">
                    {
                        requirements.map((skill,index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                    
                    
                </div>
                <div>
                   <div className='card-actions justify-end'> 
                        <Link to={`/jobs/${_id}`}> <button className='btn btn-primary'>Show Details</button></Link>
                  
                  

                   </div>
                </div>
            </div>
        </div>
    );
};

export default jobCard;