import React, { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners';
import desk from '../static/images/desk.jpg'
import { motion } from "framer-motion";



function Companies() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchString, setSearchString] = useState('');
    const [width, setWidth] = useState(window.innerWidth);
    const [usersearched, setUserSearched] = useState(false);
    // UseEffect for window resize
    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth);
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearch = () => {
        const search = document.getElementById('searchbox').value;
        setSearchString(search);
        setUserSearched(true);
        setLoading(true)
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://ignite-backend.onrender.com/search/" + search, requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(result)
                setCompanies(JSON.parse(result))
                setLoading(false)
            })
            .catch(error => console.log('error', error));
    }
    const clearSearch = () => {
        setSearchString("");
        document.getElementById('searchbox').value = '';
        setUserSearched(false);
    }

    const override = {
        display: "block",
        margin: "0 auto",
        padding: "0",
        opacity: 1,

        // borderColor: "teal",
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://ignite-backend.onrender.com/companies')
            const data = await response.json()
            setCompanies(data)
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, x: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, x: -100, scale: 0.5 }}
            transition={{ duration: 1 }}
            className='md:mt-20 mt-[65px] flex flex-col relative h-full w-full'>


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
                        <div className='flex flex-col w-full md:pr-10 pr-5'>
                            <div className='flex justify-between items-center w-12/12'>
                                {/* // search icon */}
                                <input id="searchbox" disabled={loading} className='p-2 text-sm outline-none w-full' type='text' placeholder='TITLE, KEYWORD OR PHRASE' />
                                <svg className={`${usersearched ? 'hidden' : 'visible'} cursor-pointer`} onClick={handleSearch} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#0F6F7B" />
                                </svg>
                                <svg onClick={clearSearch} className={`${usersearched ? 'visible' : 'hidden'} cursor-pointer`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#0F6F7B" />
                                </svg>

                            </div>
                            <div className='h-px w-12/12 bg-teal-600 my-0 mx-2'></div>
                        </div>

                        <button disabled={loading} className='md:h-[62px] md:w-[200px] flex font-bold justify-center items-center px-4 py-2 bg-teal-600 text-white hover:bg-teal-700 rounded-lg text-sm'>
                            <svg className='mr-2' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill="#FEFEFE" />
                            </svg>
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            <HashLoader cssOverride={override} size={150} color={"#0f766e"} loading={loading} />
            < div className={`${!usersearched ? `visible` : `hidden`}`}>
                <h1 className={`${!loading ? `opacity-100` : `opacity-0`} text-2xl md:text-4xl text-teal-700 font-medium content-center md:mt-16 md:mb-8 md:mx-16 mt-16 mb-6 mx-4 `}>
                    Our top recruiters!
                </h1>
                <div className={`${!loading ? `opacity-100` : `opacity-50`} grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 md:px-16 px-4 mb-10`}>
                    {companies.map(company => (
                        <motion.button
                            key={company._id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            < div
                                onClick={() => window.open(`/companies/${company._id}`, "_blank")}
                                className='bg-teal-700 h-44 md:w-9/12 w-full items-center  rounded-xl p-5 justify-center flex flex-col' >
                                <img className='rounded-md' src={company.image} width={200} ></img>
                                <h1 className=' hidden md:block text-xl text-white font-medium content-center'>{company.name}</h1>

                            </div>
                        </motion.button>
                    ))}
                </div>
            </div >

            < div className={`${!usersearched ? `hidden` : `visible`}`}>
                <h1 className={`${!loading ? `opacity-100` : `opacity-0`} flex flex-row text-2xl md:text-4xl text-teal-700 font-medium content-center md:mt-16 md:mb-8 md:mx-16 mt-16 mb-6 mx-4 `}>
                    <svg onClick={clearSearch} className='cursor-pointer md:mr-5 mr-2 ' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 14.5H7.66L18.84 3.32L16 0.5L0 16.5L16 32.5L18.82 29.68L7.66 18.5H32V14.5Z" fill="#0F6F7B" />
                    </svg>
                    Search results for "<span className='text-black'>{searchString}</span>"
                </h1>
                <div className={`${!loading ? `opacity-100` : `opacity-50`} items-start justify-start w-12/12 grid grid-row md:gap-4 gap-2 md:px-14 px-4 mb-10`}>
                    {companies.map(company => (
                        <motion.button
                            key={company._id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            < div
                                onClick={() => window.open(`/companies/${company._id}`, "_blank")}
                                className={`bg-teal-700 h-44 w-full rounded-xl p-4 flex flex-row gap-4 items-center justify-center`} >
                                <img className='flex-col rounded-md w-[200px] h-[120px]' src={company.image} width={200}></img>
                                <div className='flex flex-col gap-5 justify-between my-10'>
                                    <h1 className='md:block text-xl text-white font-medium text-start'>{company.name}</h1>
                                    <h1 className='md:block text-lg text-white font-normal text-start' style={
                                        {
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: "vertical"

                                        }
                                    } >{
                                            company.about.about_comp
                                        }</h1>
                                </div>

                            </div>
                        </motion.button>
                    ))}
                </div>
            </div >

            {/*ANIMATION DIV*/}
        </motion.div >
    )
}

export default Companies