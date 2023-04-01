import React from "react";
export default function JobCard({ title, duration, roles, requirements }) {
    return (
        <div className="bg-teal-600 rounded-lg md:p-10 px-2 py-4 w-[440px] md:w-[550px] h-[760px] flex flex-col md:gap-4 gap-3 items-start justify-center">
            <h1 className="md:text-3xl text-2xl font-semibold text-white">{title}</h1>
            <h1 className="text-base font-semibold text-white">Duration: <span className="text-yellow-400">{duration}</span></h1>
            <h1 className="md:text-xl text-lg font-semibold text-yellow-400">Roles and Responsibilites</h1>
            <div className="row row-col gap-2 md:pl-5 pl-2">
                {roles.map((role, index) => {
                    return (
                        <div className="flex flex-row md:gap-4 gap-2 text-start" key={index}>
                            <h1 className="md:text-base text-sm font-semibold text-white">• </h1>
                            <h1 className="md:text-base text-sm font-semibold text-white">{role}</h1>
                        </div>

                    )
                })}
            </div>
            <h1 className="md:text-xl text-lg font-semibold text-yellow-400">Skills Required</h1>
            <div className="row row-col gap-2 md:pl-5 pl-2">
                {requirements.map((requirement, index) => {
                    return (
                        <div className="flex flex-row md:gap-4 gap-2 text-start" key={index}>
                            <h1 className="md:text-base text-sm font-semibold text-white">• </h1>
                            <h1 className="md:text-base text-sm font-semibold text-white">{requirement}</h1>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}