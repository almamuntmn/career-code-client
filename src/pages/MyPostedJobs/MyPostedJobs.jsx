import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import { myPostedJobsPromise } from '../../api/JobsApi';
import MyPostedJobsList from './MyPostedJobsList';

const MyPostedJobs = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>This is MyPostedJobs</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <MyPostedJobsList myPostedJobsPromise={myPostedJobsPromise(user.email)}></MyPostedJobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;