import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import college from '../static/logos/logo_college.png';
import ignite from '../static/logos/logo_ignite.png';
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    const navigate = useNavigate();
    const handleHome = useCallback(() => { navigate('/') }, [navigate]);
    const handleAbout = useCallback(() => { navigate('/about') }, [navigate]);
    const handleCompanies = useCallback(() => { navigate('/companies') }, [navigate]);
    const handleHowToApply = useCallback(() => { navigate('/how-to-apply') }, [navigate]);
    const handleResources = useCallback(() => { navigate('/resources') }, [navigate]);
    const handleContact = useCallback(() => { navigate('/contact-us') }, [navigate]);


    return (
        // h-[330px]
        < div className="bg-dark-teal h-fit absolute w-full ">
            <div className="md:mx-20 ">
                <div className="hidden md:flex flex-row justify-between pt-10 pb-2  gap-24">
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
                            <h1 className="text-white text-xl font-medium text-center">QUICK LINKS.</h1>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h1 className="text-white text-md hover:underline cursor-pointer" onClick={handleHome}>● Home</h1>
                                </div>
                                <div>
                                    <h1 className="text-white text-md hover:underline cursor-pointer" onClick={handleAbout} >● About</h1>
                                </div>
                                <div>
                                    <h1 className="text-white text-md hover:underline cursor-pointer" onClick={handleCompanies}>● Companies</h1>
                                </div>
                                <div>
                                    <h1 className="text-white text-md hover:underline cursor-pointer" onClick={handleHowToApply}>● How to Apply</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h1 className="text-white text-md hover:underline cursor-pointer" onClick={handleResources}>● Resouces</h1>
                                </div>
                                <div>
                                    <h1 className="text-white text-md hover:underline cursor-pointer" onClick={handleContact}>● Contact Us.</h1>
                                </div>
                            </div>
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
                <div className="pt-5 mx-5">
                    <h1 className="text-white text-center text-md">Copyright © {year} Internship Cell, Khalsa College. All rights reserved.
                        {/* | <span className="hover:underline cursor-pointer">Privacy Policy</span>  */}
                    </h1>
                    <h1 className="text-white text-center text-md">Website made by <span className="cursor-pointer hover:underline" onClick={
                        () => {
                            window.open("https://www.linkedin.com/in/akarshan-m-75577122a/", "_blank")
                        }
                    }>Akarshan Mishra</span></h1>
                </div>
            </div>
            <div className="m-2"></div>
        </div >
    );
}

export default Footer;