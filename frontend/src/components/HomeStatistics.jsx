import React from "react";

export default function HomeStatistics({ Companies, applications, registrations, colleges, states, job_profiles, highest_stipend, average_stipend }) {
    return (
        <div>
            <div className=" flex-col gap-8 mx-20 hidden md:flex">
                <div className="FIRST flex flex-row basis-1/2 gap-8">
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/6 h-28 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl text-white font-semibold">{Companies}</h1>
                        <h1 className="text-2xl text-white font-semibold">Companies</h1>
                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/6 h-28 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl text-white font-semibold">{applications}</h1>
                        <h1 className="text-2xl text-white font-semibold">Applications</h1>
                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/6 h-28 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl text-white font-semibold">{registrations}</h1>
                        <h1 className="text-2xl text-white font-semibold">Registrations</h1>
                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/6 h-28 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl text-white font-semibold">{colleges}</h1>
                        <h1 className="text-2xl text-white font-semibold">Colleges</h1>
                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/6 h-28 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl text-white font-semibold">{states}</h1>
                        <h1 className="text-2xl text-white font-semibold">States</h1>
                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/6 h-28 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl text-white font-semibold">{job_profiles}</h1>
                        <h1 className="text-2xl text-white font-semibold">Job Profiles</h1>
                    </div>



                </div>
                <div className="SECOND flex flex-row basis-1/2 gap-8">
                    <div className="bg-white basis-1/6 h-28"></div>
                    <div className="bg-teal-700 rounded-lg shadow-lg flex flex-col gap-2 items-center justify-center basis-2/6 h-28">
                        <h1 className="text-3xl text-white font-semibold">{highest_stipend}</h1>
                        <h1 className="text-2xl text-white font-semibold">Highest Stipend</h1>
                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg flex flex-col gap-2 items-center justify-center basis-2/6 h-28">
                        <h1 className="text-3xl text-white font-semibold">{average_stipend}</h1>
                        <h1 className="text-2xl text-white font-semibold">Average Stipend</h1>
                    </div>                <div className="bg-white basis-1/6 h-28"></div>
                </div>
            </div>

            <div className="md:hidden flex flex-col gap-4 mx-12">

                <div className="flex flex-row gap-4 items-center justify-center">

                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/2 h-24 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-2xl text-white font-semibold">{Companies}</h1>
                        <h1 className="text-xl text-white font-semibold">Companies</h1>
                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/2 h-24 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-2xl text-white font-semibold">{applications}</h1>
                        <h1 className="text-xl text-white font-semibold">Applications</h1>
                    </div>

                </div>

                <div className="bg-teal-700 rounded-lg shadow-lg flex flex-col gap-2 items-center justify-center h-24">
                    <h1 className="text-2xl text-white font-semibold">{highest_stipend}</h1>
                    <h1 className="text-xl text-white font-semibold">Highest Stipend</h1>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center">

                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/2 h-24 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-2xl text-white font-semibold">{registrations}</h1>
                        <h1 className="text-xl text-white font-semibold">Registrations</h1>

                    </div>
                    <div className="bg-teal-700 rounded-lg shadow-lg basis-1/2 h-24 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-2xl text-white font-semibold">{colleges}</h1>
                        <h1 className="text-xl text-white font-semibold">Colleges</h1>

                    </div>

                </div>

                <div className="bg-teal-700 rounded-lg shadow-lg flex flex-col gap-2 items-center justify-center h-24">
                    <h1 className="text-2xl text-white font-semibold">{average_stipend}</h1>
                    <h1 className="text-xl text-white font-semibold">Average Stipend</h1>
                </div>
            </div>


        </div>
    )
}