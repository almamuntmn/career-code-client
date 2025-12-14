import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id, title, company} = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl'>Job details for {title}</h2>
            <p>Company: {company}</p>
            <Link to={`/apply/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;