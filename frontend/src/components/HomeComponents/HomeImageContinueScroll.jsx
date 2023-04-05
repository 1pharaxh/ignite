import React from 'react';
import Marquee from "react-fast-marquee";
import image from '../../static/images/home_carousel_image.png';

const HomeImageContinueScroll = () => {
    return (
        <Marquee
            gradient={false}
        >
            <img src={image} alt="home_carousel_image" />
            <img src={image} alt="home_carousel_image" />
            <img src={image} alt="home_carousel_image" />
        </Marquee>
    );
};

export default HomeImageContinueScroll;
