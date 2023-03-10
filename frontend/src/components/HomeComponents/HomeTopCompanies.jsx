import React, { useRef } from "react";
import Carousel from 'react-elastic-carousel';
import '../../static/css/homepage_companies_carousel.css'

import { motion } from 'framer-motion';

function HomeTopCompanies({ imageArray }) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 6 },
    ]
    const carouselRef = useRef(null);
    let resetTimeout;

    return (
        <>
            <div className='relative flex items-center md:mx-5 mx-4'>
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
                                }, 5000); // same time
                            }
                        }
                    }}
                    breakPoints={breakPoints}
                    className="mt-10"
                    itemPadding={[10, 10]}
                    enableAutoPlay
                    autoPlaySpeed={5000}
                    enableSwipe
                    ref={carouselRef}

                >
                    {imageArray.map((el, index) => (

                        < div
                            onClick={() => window.open(el['link'], '_blank')}
                            key={index} className='inline-block p-2 cursor-pointer rounded-lg bg-slate-100 md:mx-4 mx-2 shadow-md' >
                            <img src={el['image']}
                                alt='company' className='w-64 h-36 md:w-60 md:h-36 rounded-lg' />
                        </div>
                    ))
                    }

                </Carousel >

            </div>
        </>
    );
}

export default HomeTopCompanies;