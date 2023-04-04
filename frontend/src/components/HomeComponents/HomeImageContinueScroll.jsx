import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import home_carousel_image from "../../static/images/home_carousel_image.png";

import '../../static/css/HomeImageContinueScroll.css'

function HomeImageContinueScroll() {
    return (
        <Swiper
            className="swiperr-container"
            spaceBetween={0}
            loop={true}
            freeMode={true}
            speed={3000}
            grabCursor={true}
            slidesPerView={2}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: false,
                enabled: false,
            }}
            navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <div className="swiperr-wrapper">
                <SwiperSlide className="swiperr-slide" style={{ backgroundImage: `url(${home_carousel_image}` }}></SwiperSlide>
                <SwiperSlide className="swiperr-slide" style={{ backgroundImage: `url(${home_carousel_image}` }}></SwiperSlide>
                <SwiperSlide className="swiperr-slide" style={{ backgroundImage: `url(${home_carousel_image}` }}></SwiperSlide>
                <SwiperSlide className="swiperr-slide" style={{ backgroundImage: `url(${home_carousel_image}` }}></SwiperSlide>
                <SwiperSlide className="swiperr-slide" style={{ backgroundImage: `url(${home_carousel_image}` }}></SwiperSlide>
                <SwiperSlide className="swiperr-slide" style={{ backgroundImage: `url(${home_carousel_image}` }}></SwiperSlide>
                <SwiperSlide className="swiperr-slide" style={{ backgroundImage: `url(${home_carousel_image}` }}></SwiperSlide>

            </div>
        </Swiper>

    );
}


export default HomeImageContinueScroll;