import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);
    return (
        <div>
            <h3>Total Applications: {applications.length}</h3>
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
                            applications.map(application => <JobApplicationRow key={application.id} application={application}></JobApplicationRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;