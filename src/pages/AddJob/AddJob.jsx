import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {

    const { user } = useAuth();
    console.log(user.email);

    const handAddJobs = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        //      salary
        const { min, max, currency, ...newJob } = data;
        newJob.salary = { min, max, currency };

        //      requirements
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());

        newJob.status = 'active';
        console.log(newJob);

        // save to database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <h2>Add A Job</h2>
            <form onSubmit={handAddJobs}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Information</legend>

                    <label className="label">Job Title</label>
                    <input type="text" className="input" name='title' placeholder="job title" />

                    <label className="label">Company</label>
                    <input type="text" className="input" name='company' placeholder="company name" />

                    <label className="label">Location</label>
                    <input type="text" className="input" name='location' placeholder="Company location" />

                    <label className="label">Company logo</label>
                    <input type="text" className="input" name='company_logo' placeholder="Company logo url" />
                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="On-Site" value="On-Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                    </div>

                </fieldset>

                {/* Job Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name='category' className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </fieldset>

                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Deadline</legend>
                    <input type="date" name='deadline' className="input" />
                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div>
                                <label className="label">Minimum salary</label>
                                <input type="text" className="input" name='min' placeholder="Minimum salary" />
                            </div>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input type="text" className="input" name='max' placeholder="Maximum salary" />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select name='currency' className="select">
                                    <option disabled={true}>Currency</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>BDT</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                </fieldset>
                {/* Job description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" name='description' placeholder="Job Description"></textarea>
                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="Job Requirements (separated by comma)"></textarea>
                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job Responsibilities (separated by comma)"></textarea>
                </fieldset>
                {/* HR Information */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">HR Information</legend>

                    <label className="label">HR Name</label>
                    <input type="text" className="input" name='hr_name' placeholder="Hr name" />

                    <label className="label">HR Email</label>
                    <input type="email" className="input" name='hr_email' defaultValue={user.email} placeholder="HR email" />
                </fieldset>

                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddJob;