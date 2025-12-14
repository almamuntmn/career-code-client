import React, { use } from 'react';
import JobsCard from '../Shared/JobsCard';

const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

const HotJobs = () => {
    const jobs = use(jobsPromise);
    console.log(jobs);

        return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Hot Jobs</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
                jobs.map(job => <JobsCard key={job.id} job={job}></JobsCard>)
            }
           </div>

        </div>
    );
};

export default HotJobs;