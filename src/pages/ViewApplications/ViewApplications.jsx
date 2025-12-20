import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();

    const handleUpdateStatus = (event, application) => {
        console.log(event.target.value, application);

        axios.patch(`http://localhost:3000/applications/${application}`, {
            status: event.target.value
        })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (

        <div>
            <h1>{applications.length} Application id: {job_id}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{application.applicant}</td>
                                <td>{application.title}</td>
                                <td>
                                    <select onChange={event => handleUpdateStatus(event, application._id)} defaultValue={application.status} className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Under Review</option>
                                        <option>Call For Interview</option>
                                        <option>Pending</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplications;