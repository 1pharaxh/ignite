import React from "react";
import college from '../static/logos/logo_college.png';
import ignite from '../static/logos/logo_ignite.png';
function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        < div className="bg-teal-700 h-[330px]">
            <div className="md:mx-20 ">
                <div className="hidden md:flex flex-row justify-center pt-10 pb-2  gap-24">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-white text-2xl font-medium">Ignite -The Placement Cell</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-xl">Sri Guru Tegh Bahadur Khalsa College</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-lg">University of Delhi</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-lg font-medium"></h1>
                        </div>
                        <div>
                            <h1 className="text-white text-lg font-medium"></h1>
                        </div>
                        <div className="flex flex-row gap-2">
                            <i className='fab fa-linkedin-in text-white ml-0 text-lg cursor-pointer'></i>
                            <i className='fab fa-instagram text-white ml-2 text-lg cursor-pointer'></i>
                            <i className='fab fa-facebook text-white ml-2 text-lg cursor-pointer'></i>
                            <i className='fab fa-whatsapp text-white ml-2 text-lg cursor-pointer'></i>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-white text-lg font-medium">NEQUE ADIPISCING.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-white text-lg font-medium">NEQUE ADIPISCING.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-white text-lg font-medium">NEQUE ADIPISCING.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                        <div>
                            <h1 className="text-white text-md">Nascetur eget eget.</h1>
                        </div>
                    </div>
                    <div className="flex basis-1/5 justify-center items-center">
                        <div className="flex flex-row gap-4 rounded-full h-44 w-44 bg-teal-600 justify-center items-center">
                            <div className="flex justify-center items-center">
                                <img src={college} alt="logo" className="h-10" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={ignite} alt="logo" className="h-10" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="hidden md:block w-full border-2 border-white" />
                <div className="md:hidden bg-teal-900 w-full">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="mt-10">
                            <img src={college} alt="logo" className="h-25" />
                        </div>
                        <div className="mt-2 text-center">
                            <h1 className="text-white font-bold text-xl"> Internship Cell, Khalsa College</h1>
                            <h1 className="text-white font-semibold text-sm mt-2"> Need help? Reach out to us!</h1>
                        </div>

                        <div className="flex flex-row gap-2">
                            <i className='fab fa-linkedin-in text-white ml-0 text-lg cursor-pointer'></i>
                            <i className='fab fa-instagram text-white ml-2 text-lg cursor-pointer'></i>
                            <i className='fab fa-facebook text-white ml-2 text-lg cursor-pointer'></i>
                            <i className='fab fa-whatsapp text-white ml-2 text-lg cursor-pointer'></i>
                        </div>

                    </div>

                </div>
                <div className="my-2 mx-5">
                    <h1 className="text-white text-center text-md">Copyright © {year} Internship Cell, Khalsa College. All rights reserved.
                        {/* | <span className="hover:underline cursor-pointer">Privacy Policy</span>  */}
                    </h1>
                </div>
            </div>

            <div className="m-10"></div>
        </div>
    );
}

export default Footer;