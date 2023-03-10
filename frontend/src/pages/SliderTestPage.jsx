import React, { useRef } from "react";
import Carousel from 'react-elastic-carousel';
import { motion } from "framer-motion";

import '../static/css/homepage_companies_carousel.css'

export default function SliderTestPage() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
    ]
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    const carouselRef = useRef(null);
    let resetTimeout;


    return (
        <div className="md:mt-20 mt-[65px] flex flex-col relative h-full w-full items-center">
            <h1 className='font-bold md:text-4xl text-3xl text-teal-600'>Job Profiles <span className='text-black'>and their description</span></h1>

            <Carousel
                showArrows={false}
                easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700}
                onNextEnd={({ index }) => {
                    if (
                        carouselRef?.current.state.activePage ===
                        carouselRef?.current.state.pages.length - 1
                    ) {
                        const itemsPerPage = Math.floor(
                            carouselRef?.current.props.children.length /
                            carouselRef?.current.getNumOfPages()
                        );

                        if (itemsPerPage === carouselRef?.current.state.activeIndex) {
                            clearTimeout(resetTimeout);
                            resetTimeout = setTimeout(() => {
                                carouselRef?.current?.goTo(0);
                            }, 2000); // same time
                        }
                    }
                }}
                breakPoints={breakPoints}
                className="mt-10"
                itemPadding={[10, 10]}
                enableAutoPlay
                autoPlaySpeed={3000}
                enableSwipe
                ref={carouselRef}
            >
                {items.map((item, index) => (

                    < div
                        key={index} className='inline-block p-2 cursor-pointer rounded-lg bg-slate-100 mx-4 shadow-lg' >
                        <img src={'https://drive.google.com/uc?export=view&id=16F76CQiHfzLoCrjKP-Ol-dWHr5wog8Zr'}
                            alt='company' className='w-40 h-24 md:w-60 md:h-36 rounded-lg' />
                    </div>
                ))
                }

            </Carousel >
        </div >
    );
}
