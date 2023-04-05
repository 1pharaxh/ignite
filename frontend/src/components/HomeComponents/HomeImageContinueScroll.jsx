import React from 'react';
import Marquee from "react-fast-marquee";
import image from '../../static/images/home_carousel_image.png';

const HomeImageContinueScroll = () => {
    return (
        <Marquee
            gradient={false}
            pauseOnHover={true}
        >
            <img src={image} className='h-[300px] md:h-[350px] object-cover' alt="home_carousel_image" />
            <img src={image} className='h-[300px] md:h-[350px] object-cover' alt="home_carousel_image" />
            <img src={image} className='h-[300px] md:h-[350px] object-cover' alt="home_carousel_image" />

        </Marquee>
    );
};

export default HomeImageContinueScroll;
