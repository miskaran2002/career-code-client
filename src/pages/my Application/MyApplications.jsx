import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';



const MyApplications = () => {
    const { User } = UseAuth();
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'Loading... my applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(User.email)}>

                </ApplicationList>
            </Suspense>
            
        </div>
    );
};

export default MyApplications;