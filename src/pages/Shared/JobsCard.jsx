import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {
    const {
        _id,
        title,
        location,
        requirements = [],
        salary,
        description,
        company,
        company_logo
    } = job || {};

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p>
                    Salary{" "}
                    {salary?.min ?? "N/A"} - {salary?.max ?? "N/A"}{" "}
                    {salary?.currency}
                </p>

                <p>{description}</p>
            </div>

            <div className="flex items-center gap-4 px-4">
                <figure>
                    <img
                        src={company_logo}
                        className="w-16"
                        alt={company}
                    />
                </figure>
                <div>
                    <h3 className="text-xl font-bold">{company}</h3>
                    <p className="flex items-center gap-2">
                        <LuMapPin /> {location}
                    </p>
                </div>
            </div>

            <div className="card-actions px-4 flex flex-wrap gap-2">
                {requirements.map((requirement, index) => (
                    <span key={index} className="badge badge-outline">
                        {requirement}
                    </span>
                ))}
            </div>

            <div className="card-actions justify-end px-4 pb-4">
                <Link to={`/jobs/${_id}`}>
                    <button className="btn btn-primary">Show Details</button>
                </Link>
            </div>
        </div>
    );
};

export default JobsCard;
