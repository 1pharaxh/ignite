import React from 'react';

import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function HomeJoingCommunity() {
    // make a useEffect to check screen size and detect if it is mobile or not
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);
    const [ref1, inView1] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
        <div>
            <div className='flex flex-row md:gap-56 gap-4 justify-center bg-primary-lighter items-center py-10 cursor-pointer'
                onClick={() => window.open(' https://chat.whatsapp.com/Je7C9q0yAOXGp74Vq3tskJ', '_blank')}
            >
                <motion.div
                    ref={ref1}
                    initial={
                        inView1 ? { scale: 0.9, y: 100, opacity: 0 } : { scale: 0.9, y: 100, opacity: 0 }
                    }
                    animate={
                        inView1 ? { scale: 1, y: 0, opacity: 1 } : { scale: 0.9, y: 100, opacity: 0 }
                    }

                    transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}

                    className='md:w-[300px] md:h-[300px] h-[100px] w-[100px]'>
                    <img src='https://images.unsplash.com/photo-1633354931133-27ac1ee5d853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                        alt='whatsapp'
                        className='object-cover rounded-xl shadow-lg' />
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={
                        inView ? { scale: 0.9, x: 100, opacity: 0 } : { scale: 0.9, x: 100, opacity: 0 }
                    }
                    animate={
                        inView ? { scale: 1, x: 0, opacity: 1 } : { scale: 0.9, x: 100, opacity: 0 }
                    }


                    transition={{ duration: 1.5, delay: 0.5, type: 'spring', stiffness: 100 }}

                    className='flex flex-col items-start gap-0'>
                    <span
                        className='stroke-primary-color fill-transparent text-[40px] md:text-[100px] font-sans font-bold text-center text-primary-color leading-none'>Join Our
                    </span>
                    <span
                        style={{ WebkitTextStroke: `${isMobile ? '1px' : '2px'}`, WebkitTextFillColor: 'transparent' }}
                        className='text-[40px] md:text-[100px] font-sans font-bold text-center text-primary-color md:leading-none'>Whatsapp
                    </span>
                    <span
                        style={{ WebkitTextStroke: `${isMobile ? '1px' : '2px'}`, WebkitTextFillColor: 'transparent' }}
                        className='text-[40px] md:text-[100px] font-sans font-bold text-center text-primary-color leading-none'>Community!
                    </span>
                </motion.div>
            </div>

        </div>
    );
}

export default HomeJoingCommunity;