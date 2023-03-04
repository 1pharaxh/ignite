import React from "react";
import { motion } from 'framer-motion';
import test from '../../static/images/testimages/About_ProfilePicture.png';

function AboutWhiteCards({ imageArray, text }) {
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <div className="flex flex-col mt-10">
            <div className='relative flex items-center md:mx-28 mx-12 mb-5'>
                <h1 className='md:text-4xl text-3xl text-off-black font-[500] z-10'>{text}</h1>
            </div>
            <div className='relative flex items-center md:mx-10 mx-4'>

                <motion.button
                    whileHover={{ scale: 2.1 }}
                    whileTap={{ scale: 0.9 }}

                ><i className='md:mr-5 mr-1 fa fa-angle-left font-bold text-3xl mt-2 text-teal-600' onClick={slideLeft} /></motion.button>


                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
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


                </div>
                <motion.button
                    whileHover={{ scale: 2.1 }}
                    whileTap={{ scale: 0.9 }}

                >
                    <i className='fa fa-angle-right font-bold text-3xl md:ml-5 ml-2 mt-2 text-teal-600' onClick={slideRight} />
                </motion.button>
            </div>
        </div>
    );
}

export default AboutWhiteCards;