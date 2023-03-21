import React, { useRef, useState } from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import BOD1 from '../../static/images/aboutpage/BOD_Dhruvi_Tyagi.png';
import BOD2 from '../../static/images/aboutpage/BOD_Hitesh_Ahuja.png';
import BOD3 from '../../static/images/aboutpage/BOD_Khushi_Jain.png';
import BOD4 from '../../static/images/aboutpage/BOD_Parth_Bhatia.png';
import BOD5 from '../../static/images/aboutpage/BOD_Shivansh_Sharma.png';
import BOD6 from '../../static/images/aboutpage/BOD_Uttam_Singh.png';
import { motion } from 'framer-motion';

export default function AboutBoardOfAdvisors() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageText, setImageText] = useState(null);
    const Modal = () => {
        return (
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="p-8 rounded-lg">
                    <button className="absolute top-10 right-10 text-white" onClick={() => setIsModalOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <img src={selectedImage} alt="Selected" className="mx-auto w-[512px] h-auto" />
                    <p className="text-center text-2xl mt-4 text-white">{selectedImage && `${imageText}`}</p>
                </div>
            </div>
        );
    };
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 6 },
        { width: 1200, itemsToShow: 6 },
    ]
    const carouselRef = useRef(null);
    let resetTimeout;
    return (
        <div className="flex flex-col mt-10">
            <div className='relative flex items-center md:mx-28 mx-12 mb-5'>
                <h1 className='md:text-4xl text-3xl text-off-black font-[500] z-10'>The Board of Directors</h1>
            </div>
            <div className='relative flex items-center md:mx-10 mx-4'></div>
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
                    itemPadding={[2, 0, 2, 0]}
                    enableAutoPlay
                    autoPlaySpeed={5000}
                    enableSwipe
                    ref={carouselRef}
                >
                    <motion.button
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setSelectedImage(BOD1);
                            setIsModalOpen(true);
                            setImageText("Dhruvi Tyagi");
                        }}
                    ><img src={BOD1} alt="BOD1" className="h-[150px] md:h-[180px] md:w-[180px] w-[150px] z-10 rounded-lg" /></motion.button>
                    <motion.button
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setSelectedImage(BOD2);
                            setIsModalOpen(true);
                            setImageText("Hitesh Ahuja");
                        }}
                    ><img src={BOD2} alt="BOD2" className="h-[150px] md:h-[180px] md:w-[180px] w-[150px] z-10 rounded-lg" /></motion.button>
                    <motion.button
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setSelectedImage(BOD3);
                            setIsModalOpen(true);
                            setImageText("Khushi Jain");
                        }}
                    ><img src={BOD3} alt="BOD3" className="h-[150px] md:h-[180px] md:w-[180px] w-[150px] z-10 rounded-lg" /></motion.button>
                    <motion.button
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setSelectedImage(BOD4);
                            setIsModalOpen(true);
                            setImageText("Parth Bhatia");
                        }}
                    ><img src={BOD4} alt="BOD4" className="h-[150px] md:h-[180px] md:w-[180px] w-[150px] z-10 rounded-lg" /></motion.button>
                    <motion.button
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setSelectedImage(BOD5);
                            setIsModalOpen(true);
                            setImageText("Shivansh Sharma");
                        }}
                    ><img src={BOD5} alt="BOD5" className="h-[150px] md:h-[180px] md:w-[180px] w-[150px] z-10 rounded-lg" /></motion.button>
                    <motion.button
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setSelectedImage(BOD6);
                            setIsModalOpen(true);
                            setImageText("Uttam Singh");


                        }}
                    ><img src={BOD6} alt="BOD6" className="h-[150px] md:h-[180px] md:w-[180px] w-[150px] z-10 rounded-lg" /></motion.button>
                </ReactElasticCarousel>
                {isModalOpen && <Modal />}


            </div>
        </div>
    );
}