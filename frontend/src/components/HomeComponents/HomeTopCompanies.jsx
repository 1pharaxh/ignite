import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import '../../static/css/topcompanies.css'
import { motion } from 'framer-motion';

function HomeTopCompanies({ imageArray }) {
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <>
            <div className='relative flex items-center md:mx-5 mx-4'>
                <motion.button
                    whileHover={{ scale: 2.1 }}
                    whileTap={{ scale: 0.9 }}

                ><i className='md:mr-5 mr-1 fa fa-angle-left font-bold text-3xl mt-2 text-teal-600' onClick={slideLeft} /></motion.button>


                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {imageArray.map((el, index) => (
                        <motion.button key={index}
                            whileHover={{ scale: 0.9 }}
                        >
                            <div className='inline-block p-2 cursor-pointer rounded-lg bg-slate-100 mx-4 shadow-lg'>
                                <img src={el} alt='company' className='w-40 h-24 md:w-60 md:h-36 rounded-lg' />
                            </div>
                        </motion.button>
                    ))
                    }


                </div>
                <motion.button
                    whileHover={{ scale: 2.1 }}
                    whileTap={{ scale: 0.9 }}

                >
                    <i className='fa fa-angle-right font-bold text-3xl md:ml-5 ml-2 mt-2 text-teal-600' onClick={slideRight} />
                </motion.button>
            </div>
        </>
    );
}

export default HomeTopCompanies;