import React from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { User } = UseAuth();

    console.log(jobId, User);

    const handleApplyFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedIn, github, resume);
        const application = {
            jobId,
            linkedIn,
            github,
            resume,
            applicant: User.email,
            
        }
        axios.post('http://localhost:3000/applications',application)
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Application has been saved",
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
        <div >
            <h3 className='text-4xl'>
                Apply for this Job: <Link to={`/jobs/${jobId}`} className="text-blue-500 underline">details</Link>
            </h3>

            <form  onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300  flex flex-col justify-between rounded-box w-xs border p-4">
                    <label className="label">LinkedIn Link</label>
                    <input type="url" name="linkedIn" className="input" placeholder="Linkedin Profile Link" />

                    <label className="label">GitHub Link</label>
                    <input type="url" name="github" className="input" placeholder="GitHub Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="Resume Link" />

                    <input type="submit" className='btn mt-4' value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;
