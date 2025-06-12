import React, { use } from 'react';
import JobApplicationRow from './jobApplicationRow';

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);
    console.log(applications);
    return (
        <div>
            <h3 className="text-4xl">Job Applied So far:{applications.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                       
                    </thead>
                    <tbody>
                       {
                        applications.map((application,index)=><JobApplicationRow
                        application={application}
                        key={application.id}
                        index={index}
                        ></JobApplicationRow>)
                       }
                        
                    </tbody>
                   
                    
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;
