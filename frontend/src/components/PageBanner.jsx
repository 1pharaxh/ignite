import React from "react";
export default function PageBanner({ image, bannerText }) {
    return (
        <div className='flex flex-col h-full w-full'>
            <div
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(15, 111, 123, 0.7), rgba(15, 111, 123, 0.7)), url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className={`opacity-100 overflow-visible bg-teal-600 mx-0 h-80 w-full`}>
                <div className='h-80 z-1'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <h1 className='md:text-5xl font-bold text-4xl text-white md:font-medium text-center'>{bannerText}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}