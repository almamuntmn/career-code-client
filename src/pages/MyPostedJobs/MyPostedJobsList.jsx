import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostedJobsList = ({ myPostedJobsPromise }) => {
    const jobs = use(myPostedJobsPromise);
    return (
        <div>
            <h1>This is MyPostedJobs {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        {
                            jobs.map((job, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{job.title}</th>
                                <th>{job.deadline}</th>
                                <th><Link to={`/applications/${job._id}`}>View Application</Link></th>
                            </tr>)
                        }
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPostedJobsList;