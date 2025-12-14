import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const user = useAuth();
    console.log(user);
    console.log(jobId);

    const handleApplyJob = (event) => {
        event.preventDefault();
        const form = event.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume)


        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
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
            <h1 className='text-4xl text-center my-5'>Job Apply for : <Link to={`/jobs/${jobId}`}>Details</Link></h1>
            <form onSubmit={handleApplyJob}>
                <fieldset className="w-xs mx-auto fieldset bg-base-200 border-base-300 rounded-box border p-4 mb-10">

                    <label className="label">LinkedIn Link</label>
                    <input type="url" className="input" name='linkedIn' placeholder="linkedIn profile link" />

                    <label className="label">Github Link</label>
                    <input type="url" className="input" name='github' placeholder="github profile link" />

                    <label className="label">Resume Link</label>
                    <input type="url" className="input" name='resume' placeholder="Resume link" />

                    <input className='btn' type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;