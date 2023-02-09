import React, { useState } from 'react';
export default function Dropdown({ body, onNameChange }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [profile, setProfile] = useState("Please Select a profile");
    function handler(text) {
        setProfile(text);
        setShowDropdown(!showDropdown)
        onNameChange(text);

    }

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline"
            >
                <div className="flex flex-col w-80 h-20 bg-white rounded-lg shadow-lg p-4">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col items-center">
                            <i className={`fa fa-suitcase font-bold text-3xl mt-2 text-teal-600`}></i>

                        </div>
                        <div className="flex flex-col items-start justify-around">
                            <h1 className="text-teal-600 text-lg font-bold"> Profile(s) included</h1>
                            <h1 className="text-black font-normal text-md"> {profile} </h1>
                        </div>
                    </div>
                </div>
            </button>
            {showDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div className="bg-white rounded-md shadow-xs">
                        <div className="py-1">
                            {body.map((el, index) => (

                                < a
                                    key={index}
                                    href="#"
                                    onClick={() => handler(el)}

                                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                    {el}
                                </a>
                            ))}

                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};

