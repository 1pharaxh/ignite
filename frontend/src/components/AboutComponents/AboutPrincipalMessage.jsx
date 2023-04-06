import React from "react";

export default function AboutPrincipalMessage({ campusPic, principal, message, principal2, message2 }) {
    return (
        <>
            {/* {Message from Principle} */}
            <div className="relative ">
                <img src={campusPic} alt="campus_pic" className="w-full md:h-[500px] h-[680px] object-cover object-center " />

                <div className="absolute inset-0 bg-black opacity-50 "></div>
                <div className="flex flex-col absolute inset-0 py-4 gap-4" >
                    <div className="flex items-center  ">
                        <div className="parent mx-auto flex items-center md:px-20 px-3">
                            <img src={principal} alt="principle" className="md:h-56 h-[310px] flex-grow md:w-32 w-20 object-cover object-center rounded-l-xl" />
                            <div className=" flex-grow ml-4 md:px-4 md:py-5 py-2 px-2 flex flex-col md:gap-8 gap-5 text-white bg-off-black opacity-70 rounded-r-xl md:h-56 h-[310px]">
                                <h1 className='md:text-4xl text-2xl' >Message from <span className='text-base-yellow'>Principle</span></h1>
                                <h1>{message}</h1>
                                <div className='w-full flex flex-row justify-end'>
                                    <i className="fa fa-quote-right text-base-yellow text-xl" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className=" flex items-center md:px-20 px-3">
                            <img src={principal2} alt="principle2" className="md:h-56 h-[310px] flex-grow md:w-32 w-20 object-cover object-center rounded-l-xl" />
                            <div className=" flex-grow ml-4 md:px-4 md:py-5 py-2 px-2 flex flex-col md:gap-8 gap-5 text-white bg-off-black opacity-70 rounded-r-xl md:h-56 h-[310px]">
                                <h1 className='md:text-4xl text-2xl' >Message from <span className='text-base-yellow'>Principal 2</span></h1>
                                <h1>{message2}</h1>
                                <div className='w-full flex flex-row justify-end'>
                                    <i className="fa fa-quote-right text-base-yellow text-xl" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

