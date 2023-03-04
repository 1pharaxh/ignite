import React, { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners';
import desk from '../static/images/desk.jpg'
import { motion } from "framer-motion";



function Companies() {
    const googleDriveImage = 'https://drive.google.com/uc?export=view&id='
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    const override = {
        display: "block",
        margin: "0 auto",
        padding: "0",
        opacity: 1,

        // borderColor: "teal",
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://ignite-25g9.onrender.com/companies')
            const data = await response.json()
            setCompanies(data)
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <div className='md:mt-20 mt-[65px] flex flex-col relative h-full w-full'>


            {/*TEAL COLOR*/}

            <div
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(15, 111, 123, 0.7), rgba(15, 111, 123, 0.7)) , url(${desk})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className={`${!loading ? `opacity-100` : `opacity-50`} overflow-visible flex flex-col bg-teal-600  mx-0 h-80 w-full`}>
                <div className='h-80 z-1'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <h1 className='md:text-5xl font-bold text-4xl text-white md:font-medium text-center'> Find your favourite company!</h1>
                    </div>
                </div>

                {/* search BAR*/}
                <div className='w-full justify-center items-center flex '>
                    <div className='shadow-md absolute top-64 bottom-0 flex m-10 items-center bg-white h-20 w-11/12 rounded-lg mx-8 my-6 px-10'>
                        <input disabled={loading} className='px-4 py-2 w-full text-sm outline-none' type='text' placeholder='Search...' />
                        <button disabled={loading} className='flex items-center px-4 py-2 bg-teal-600 text-white hover:bg-teal-700 rounded-lg text-sm'>
                            Search <i className='fas fa-search text-white ml-2'></i>
                        </button>
                    </div>
                </div>

            </div>
            <HashLoader cssOverride={override} size={150} color={"#0f766e"} loading={loading} />
            <h1 className={`${!loading ? `opacity-100` : `opacity-50`} text-2xl md:text-4xl text-teal-700 font-medium content-center md:mt-16 md:mb-8 md:mx-16 mt-16 mb-6 mx-4 `}>
                Our top recruiters!
            </h1>
            <div className={`${!loading ? `opacity-100` : `opacity-50`} grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 md:px-16 px-4`}>

                {companies.map(company => (
                    <motion.button
                        key={company._id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        < div

                            onClick={() => window.location.href = `/companies/${company._id}`}
                            className='bg-teal-700 h-44 md:w-9/12 w-full items-center  rounded-xl p-5 justify-center flex flex-col' >
                            <img className='rounded-md' src={googleDriveImage + company.image} width={200} ></img>
                            <h1 className=' hidden md:block text-xl text-white font-medium content-center'>{company.name}</h1>

                        </div>
                    </motion.button>
                ))}


            </div>
        </div >
    )
}

export default Companies