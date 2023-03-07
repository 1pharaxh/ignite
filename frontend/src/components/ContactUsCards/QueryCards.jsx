import React from "react";
import { motion } from 'framer-motion';

function QueryCards({ dataArray }) {
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <div className="flex flex-col">
            <div className='relative flex items-center md:mx-10 mx-4'>

                <motion.button
                    whileHover={{ scale: 2.1 }}
                    whileTap={{ scale: 0.9 }}

                ><i className='md:mr-5 mr-1 fa fa-angle-left font-bold text-3xl mt-2 text-teal-600' onClick={slideLeft} /></motion.button>


                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {dataArray.map((el, index) => (
                        <motion.button key={index}
                            whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 0.9 }}

                        >
                            <div className='overflow-hidden w-[200px] h-[200px] gap-3
                            bg-off-white flex flex-col justify-center items-center p-2 md:p-4 mx-4 md:mx-8' style={{
                                    boxShadow: "0px 1px 2px rgba(7, 32, 51, 0.4), 0px 2px 6px 2px rgba(7, 32, 51, 0.2)",
                                    borderRadius: '12px',
                                }}>
                                <div className="flex flex-row px-2 gap-2">
                                    <img className="h-[64px] w-[64px] rounded-full" src={dataArray[index]['image']} alt="profile picture" />
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

export default QueryCards;