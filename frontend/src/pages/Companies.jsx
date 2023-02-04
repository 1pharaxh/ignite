import React, { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners';

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
        <div className='flex flex-col relative h-full w-full'>


            {/*TEAL COLOR*/}
            <div className={`${!loading ? `opacity-100` : `opacity-50`} overflow-visible flex flex-col  mx-0 bg-teal-600 h-80 w-full overflow-auto`}>
                <div className='flex items-center justify-center w-full h-full'>
                    <h1 className='text-5xl text-white font-medium content-center'> Find your favourite company!</h1>
                </div>
                {/* search BAR*/}
                <div className='w-full justify-center items-center flex'>
                    <div className='shadow-md absolute top-64 bottom-0 flex m-10 items-center bg-white h-20 w-11/12 rounded-lg mx-8 my-6 px-10'>
                        <input className='px-4 py-2 w-full text-sm outline-none' type='text' placeholder='Search...' />
                        <button className='flex items-center px-4 py-2 bg-teal-600 text-white hover:bg-teal-700 rounded-lg text-sm'>
                            Search <i className='fas fa-search text-white ml-2'></i>
                        </button>
                    </div>
                </div>

            </div>
            <HashLoader cssOverride={override} size={150} color={"#0f766e"} loading={loading} />
            <h1 className={`${!loading ? `opacity-100` : `opacity-50`} text-4xl text-teal-700 font-medium content-center my-16 mx-16`}> Our top recruiters!</h1>
            <div className={`${!loading ? `opacity-100` : `opacity-50`} grid grid-cols-4 gap-4 px-16`}>

                {companies.map(company => (
                    < div
                        key={company._id}
                        onClick={() => window.location.href = `/companies/${company._id}`}
                        className='bg-teal-700 h-44 w-9/12 items-center  rounded-xl p-5 justify-center flex flex-col' >
                        <img className='rounded-md' src={googleDriveImage + company.image} width={200} ></img>
                        <h1 className='text-xl text-white font-medium content-center'>{company.name}</h1>

                    </div>
                ))}


            </div>
        </div >
    )
}

export default Companies