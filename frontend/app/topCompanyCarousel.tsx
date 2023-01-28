"use client"
import React, { useState } from "react";
import "./../styles/TopCompanyCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {bounceIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const BounceIn = styled.div`animation: 1s ${keyframes`${bounceIn}`}`;

interface Props {
images: string[];
}

const TopCompanyCarousel = (props: Props) => {
const [currentIndex, setCurrentIndex] = useState(0);
const maxIndex = Math.ceil(props.images.length / 6) - 1;

const handlePrevClick = () => {
if (currentIndex === 0) {
setCurrentIndex(maxIndex);
} else {
setCurrentIndex(currentIndex - 1);
}
};

const handleNextClick = () => {
if (currentIndex === maxIndex) {
setCurrentIndex(0);
} else {
setCurrentIndex(currentIndex + 1);
}
};

return (
    <div className="bg-white py-4 px-8 flex flex-col justify-center items-center">
    <span className="my-10">
    <span className="text-black font-bold text-4xl">Current Top<span className="text-teal-700 font-bold text-4xl"> Companies</span></span>
    </span>
    <div className="relative">

        <div className="relative overflow-x-scroll ">
            <div className="flex">
            {props.images
                .slice(currentIndex * 6, currentIndex * 6 + 6)
                .map((image, index) => (
                    <div key={index} className={`bg-white rounded-2xl shadow-lg m-4 ${index === 0 ? "ml-32":""} ${index === 5 ? "mr-32":""}`}>
                        <BounceIn><img src={image} alt="Company" className="w-96 h-30" /></BounceIn>
                    </div>
                ))}
            </div>
        </div>
        <button
            className="absolute left-0 top-10 m-4 text-teal-500 hover:text-teal-700 ml-8"
            onClick={handlePrevClick}
        >
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        <button
            className="absolute right-0 top-10 m-4 text-teal-500 hover:text-teal-700 mr-8"
            onClick={handleNextClick}
        >
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>    
    </div>
    </div>
 
);
};

export default TopCompanyCarousel;