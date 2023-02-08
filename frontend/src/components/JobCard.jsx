import React from "react";
export default function JobCard({ title, duration, roles, requirements }) {
    return (
        <div className="bg-teal-600 rounded-lg p-10 w-full h-auto flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-white">{title}</h1>
            <h1 className="text-md font-semibold text-white">Duration: <span className="text-yellow-400">{duration}</span></h1>
            <h1 className="text-xl font-semibold text-yellow-400">Roles and Requirements</h1>
            <div className="row row-col gap-2 pl-5">
                {roles.map((role) => {
                    return (
                        <div className="flex flex-row gap-4">
                            <h1 className="text-md font-semibold text-white">• </h1>
                            <h1 className="text-md font-semibold text-white">{role}</h1>
                        </div>

                    )
                })}
            </div>
            <h1 className="text-xl font-semibold text-yellow-400">Requirements</h1>
            <div className="row row-col gap-2 pl-5">
                {requirements.map((requirement) => {
                    return (
                        <div className="flex flex-row gap-4">
                            <h1 className="text-md font-semibold text-white">• </h1>
                            <h1 className="text-md font-semibold text-white">{requirement}</h1>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}