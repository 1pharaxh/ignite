import React from "react";
export default function PerkAndEligibleCard({ texts, titleTeal, titleBlack }) {
    return (
        <div className="bg-white rounded-lg p-10 w-full h-auto flex flex-col shadow-lg gap-4">
            <h1 className="text-3xl font-bold text-teal-600">{titleTeal} <span className="text-black">{titleBlack}</span> </h1>
            <div className="row row-col gap-2 pl-5">
                {texts.map((role) => {
                    return (
                        <div className="flex flex-row gap-4">
                            <h1 className="text-md font-semibold text-black">• </h1>
                            <h1 className="text-md font-semibold text-black">{role}</h1>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}