import React, { useRef } from "react";
import { motion } from 'framer-motion';
import test from '../../static/images/testimages/About_ProfilePicture.png';
import ReactElasticCarousel from "react-elastic-carousel";

function AboutWhiteCards({ imageArray, text }) {
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
    ]
    const carouselRef = useRef(null);
    let resetTimeout;
    return (
        <div className="flex flex-col mt-10">
            <div className='relative flex items-center md:mx-28 mx-12 mb-5'>
                <h1 className='md:text-4xl text-3xl text-off-black font-[500] z-10'>{text}</h1>
            </div>
            <div className='relative flex items-center md:mx-10 mx-4'>
                <ReactElasticCarousel
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
                    className="mt-0"
                    itemPadding={[10, 0, 10, 0]}
                    enableAutoPlay
                    autoPlaySpeed={5000}
                    enableSwipe
                    ref={carouselRef}
                >
                    {imageArray.map((el, index) => (
                        <motion.button key={index}
                            whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 0.9 }}

                        >
                            <div className='overflow-hidden md:w-[200px] md:h-[276px] 
                            bg-off-white flex flex-col justify-center items-center p-8 gap-4 mx-4 md:mx-8' style={{
                                    backdropFilter: 'blur(45px)',
                                    borderRadius: '12px',
                                }}>
                                <img src={imageArray[index]['image']} className='md:w-[144px] md:h-[144px] w-[100px] h-[100px] rounded-xl' />
                                <div>
                                    <h1 className='md:text-xl text-lg text-dark-teal font-bold'>{imageArray[index]['firstname']}</h1>
                                    <h1 className='md:text-xl text-lg text-dark-teal font-bold'>{imageArray[index]['lastname']}</h1>
                                </div>


                            </div>
                        </motion.button>
                    ))
                    }
                </ReactElasticCarousel>





            </div>
        </div>
    );
}

export default AboutWhiteCards;