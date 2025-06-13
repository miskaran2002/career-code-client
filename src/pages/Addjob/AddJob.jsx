import { object } from 'motion/react-client';
import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { User } = UseAuth();
    const handleAddAJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data= Object.fromEntries(formData.entries());
        // process salary rang data 
        const {min,max,currency,...newJob} = data;
         newJob.salaryRange = {min,max,currency};
        //  process requirements
        const requirementsString=newJob.requirements;
        const requirementsDirty= requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim());
         newJob.requirements = requirementsClean;

         // process responsibilities
          newJob.responsibilities = newJob.responsibilities.split(',').map(req => req.trim());
          newJob.status= "active";
         console.log(newJob);

        //  Save job tto the database
        axios.post('http://localhost:3000/jobs',newJob)
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "This new job has been saved and published.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(err => {
            console.log(err);
        })

        
    }
    return (
        <div>
            <h2>Please Add a Job</h2>
            <form onSubmit={handleAddAJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label"> Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="company name" />

                    <label className="label">Location</label>
                    <input type="text"
                        name='location'
                        className="input" placeholder="location" />
                    
                    <label className="label">Company Logo </label>
                    <input type="text" name='company_logo' className="input" placeholder="company logo url" />

                </fieldset>

                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />

                        <input className="btn" type="radio" value="On-Site" name="jobType" aria-label="On-Site" />

                        <input className="btn"
                         type="radio"value="Remote" name="jobType" aria-label="Remote" />

                        <input className="btn" type="radio" value="Hybrid" name="jobType" aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/* Job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select name='category' defaultValue="Job Category" className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>


                </fieldset>
                {/*Application deadline  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>     

                    <input type="date" name="deadline" className="input input-bordered w-full" />


                </fieldset>

               
                
                {/* Salary Range */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range </legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='min' className="input" placeholder="minimum salary" />

                        </div>
                        
                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='max' className="input" placeholder="maximum salary" />

                        </div>
                       

                        <div>
                            <label className="label">Currency</label>
                            <select name='currency' defaultValue="Select a currency" className="select">
                                <option disabled={true}>select a currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                    
                </fieldset>
                {/* Job Description */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Description</legend>     

                    <textarea name='description' className="textarea" placeholder="Description"></textarea>


                </fieldset>

                {/* job requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea name='requirements' className="textarea" placeholder="Requirements (separate by comma)"></textarea>


                </fieldset>

                {/* job responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend"> job responsibilities</legend>
                    <textarea name='responsibilities' className="textarea" placeholder="Responsibilities"></textarea>


                </fieldset>

                {/* Hr related info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Hr Related Info</legend>

                    <label className="label"> Hr Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="hr name" />

                    <label className="label">Hr Email</label>
                    <input type="email" name='hr_email' className="input" defaultValue={User.email} placeholder="Hr email" />



                    

                </fieldset>

                <input type="submit" className='btn' value="Add Job" />

                
               
              
                
               
                    

            

            </form>
        </div>
    );
};

export default AddJob;