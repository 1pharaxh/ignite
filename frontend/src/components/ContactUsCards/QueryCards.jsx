import React, { useRef } from "react";
import { motion } from 'framer-motion';
import Carousel from 'react-elastic-carousel';

function QueryCards({ dataArray }) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 6 },
    ]
    const carouselRef = useRef(null);
    let resetTimeout;
    return (
        <div className="flex flex-col">
            <div className='relative flex items-center md:mx-10 mx-4'>
                <Carousel
                    showArrows={true}
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
                    itemPadding={[5, 0, 5, 0]}
                    enableAutoPlay
                    autoPlaySpeed={5000}
                    enableSwipe
                    ref={carouselRef}

                >
                    {dataArray.map((el, index) => (
                        <motion.button key={index}
                            whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 0.9 }}

                        >
                            <div className='overflow-hidden w-[200px] h-[200px] gap-2
                            bg-off-white flex flex-col justify-center items-center p-2 md:p-4 mx-4 md:mx-8' style={{
                                    boxShadow: "0px 1px 2px rgba(7, 32, 51, 0.4), 0px 2px 6px 2px rgba(7, 32, 51, 0.2)",
                                    borderRadius: '12px',
                                }}>
                                <div className="flex flex-row px-2 gap-2">
                                    <img className="h-[60px] w-[60px] rounded-full" src={dataArray[index]['image']} alt="profile picture" />
                                    <h1
                                        style={{
                                            whiteSpace: 'normal',
                                            overflowWrap: 'break-word',
                                            textAlign: 'center'
                                        }}
                                        className="text-lg font-semibold" >{dataArray[index]['name']}</h1>
                                </div>
                                <h1>
                                    {dataArray[index]['number']}
                                </h1>
                            </div>

                        </motion.button>
                    ))
                    }
                </Carousel>




            </div>
        </div>
    );
}

export default QueryCards;