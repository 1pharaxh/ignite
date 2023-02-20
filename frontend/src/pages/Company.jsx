import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import desk from '../static/images/desk.jpg'
import CompanyCard from '../components/CompanyCard';
import JobCard from '../components/JobCard';
import { UserAuth, getDb } from "../context/AuthContext";
import { doc, getDocs, getDoc, addDoc, collection, query, where } from 'firebase/firestore';

import PerkAndEligibleCard from '../components/PerkAndEligibleCard';
import Dropdown from '../components/Dropdown';
import { motion } from 'framer-motion';
function Company() {
    const [data, setData] = useState({});
    const [about, setAbout] = useState({});
    const [currentUser, setCurrentUser] = useState('');
    const [profile, setProfile] = useState([]);
    const [selectedJob, setSelectedJob] = useState({});
    const [hasResume, setHasResume] = useState('');
    const [applied, setApplied] = useState(false);



    // USE THIS HOOK and HANDLER TO GET DATA BACK FROM CHILD
    const [key, setKey] = useState('');
    const handleNameChange = (newKey) => {
        setKey(newKey);
        setSelectedJob({ 'Company': data.name, 'JobId': about.profile[newKey].id, 'JobTitle': about.profile[newKey].name })
    };

    const { id } = useParams();
    const googleDriveImage = 'https://drive.google.com/uc?export=view&id='
    const { user } = UserAuth();


    useEffect(() => {
        async function fetchData() {
            if (user.uid) {
                const docRef = doc(getDb, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    // console.log('has resume', docSnap.data().resume);
                    setHasResume(docSnap.data().resume);
                } else {
                    setHasResume('');
                    console.log('no resume');
                }
                if (key && applied == false) {
                    const collectionRef = collection(getDb, 'applications');
                    const querySnapshot = await getDocs(query(collectionRef, where('uid', '==', user.uid), where('profile.JobId', '==', about.profile[key].id)));
                    if (querySnapshot.empty) {
                        console.log('Not Applied.');
                        setApplied(false);
                    } else {
                        console.log('has applied');
                        setApplied(true);
                    }
                }
            }


            var temp = []
            const response = await fetch('https://ignite-25g9.onrender.com/companies/' + id)
            const data = await response.json()
            setData(data)
            setAbout(data.about)
            Object.keys(data.about.profile).forEach((key) => {
                temp.push({ [key]: data.about.profile[key].name })
            })
            setProfile(temp)
            if (user) {
                setCurrentUser(user.email)
            }
        }
        fetchData()


    }, [user, key])

    const handleApply = () => {
        if (Object.keys(selectedJob).length != 0 && hasResume != '' && currentUser != undefined && applied == false) {
            addDoc(collection(getDb, "applications"), {
                name: user.displayName,
                uid: user.uid,
                profile: selectedJob,
                resume: hasResume,
            }).then(() => {
                console.log("Document successfully written!");
            });
        }
    }
    const handleDownload = (linkText) => {
        const link = document.createElement('a');
        link.href = linkText;
        link.download = 'file.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
            <div className='flex flex-col relative h-full w-full overflow-x-hidden'>
                {/*TEAL COLOR*/}
                <div
                    style={{
                        backgroundImage: `url(${desk})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className={`opacity-100 overflow-visible flex flex-col bg-teal-600  mx-0 h-80 w-full elevation-5`}>
                    <div style={{
                        backgroundColor: 'rgba(13, 148, 136, 0.8)'
                    }} className='h-80 z-1'>
                        <div className='flex flex-col items-center justify-center w-full h-full mt-[3%]'>
                            <h1 className='text-5xl text-white font-medium content-center'> {data.name} </h1>
                            <img className='rounded-md mt-7' src={googleDriveImage + data.image} width={200} height={150} ></img>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col my-16 mx-16 gap-10'>
                    <div className='flex flex-row justify-between'>
                        <div className='basis-6/12 w-30'>
                            <h1 className='text-black text-4xl font-bold' > About the<span className='text-teal-600'> Company</span> </h1>
                        </div>
                        <div className='flex flex-row basis-6/12 auto w-64'>
                            <div className='flex flex-col w-full mr-4'>
                                <button
                                    onClick={() => handleApply()}
                                    disabled={currentUser == undefined || applied == true || Object.keys(selectedJob).length == 0 || hasResume == ''}
                                    className={`
                            flex flex-col h-12 w-full items-center px-4 py-2 shadow-lg
                            ${currentUser == undefined || applied == true || Object.keys(selectedJob).length == 0 || hasResume == '' ?
                                            'bg-gray-300 text-gray-500' :
                                            'bg-teal-600 text-white hover:bg-teal-700'}
                          mr-10 font-semibold rounded-lg text-sm`}>
                                    <i className='fa fa-check text-white mx-2 '></i> Apply now!
                                </button>
                                <p className={`${currentUser == undefined ? 'visible' : 'hidden'} text-red-600 font-semibold`}>Please Login!</p>
                                <p className={`${Object.keys(selectedJob).length == 0 ? 'visible' : 'hidden'} text-red-600 font-semibold`}>Please select a Job!</p>
                                <p className={`${applied == true ? 'visible' : 'hidden'} text-red-600 font-semibold`}>Already applied!</p>
                                <p className={`${hasResume == '' ? 'visible' : 'hidden'} text-red-600 font-semibold`}>Missing resume!</p>


                            </div>
                            <button
                                onClick={() => handleDownload(about.profile[key].link)}
                                className='flex flex-col h-12 w-full items-center px-4 py-2 shadow-lg  bg-off-white text-teal-600 font-semibold hover:bg-gray-300 rounded-lg text-sm'>
                                <i className='fa fa-download text-teal-600 mx-2'></i> Download Job Description
                            </button>
                        </div>
                    </div>
                    <div className='flex'>
                        <h1 className='text-lg'>
                            {about.about_comp}
                        </h1>
                    </div>
                </div>
            </div >
            <div className='h-40 bg-teal-200 w-full'>
                <div className='flex flex-row justify-between mx-16 my-10'>
                    <div className='cursor-pointer' onClick={() => {
                        window.location.href = about.website
                    }}>
                        <CompanyCard title={'Website'} icon={'fa fa-globe'} body={about.website} ></CompanyCard>
                    </div>
                    <CompanyCard title={'Work Location'} icon={'fa fa-building'} body={about.work_location} ></CompanyCard>
                    {/* {NEED TO COMPLETE THE ONE BELOW} */}

                    <Dropdown onNameChange={handleNameChange} body={profile} />


                </div>
            </div>
            <div className='flex flex-col mx-16 my-16 gap-10'>
                <h1 className='font-bold text-4xl text-teal-600'>Job Profiles <span className='text-black'>and their description</span></h1>
                <div className='relative flex items-center'>
                    <motion.button
                        whileHover={{ scale: 2.1 }}
                        whileTap={{ scale: 0.9 }}

                    ><i className='mr-5 fa fa-angle-left font-bold text-3xl mt-2 text-teal-600' onClick={slideLeft} /></motion.button>


                    <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {about.job_profile_description != undefined ? about.job_profile_description.map((el, index) => (
                            <motion.button key={index}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className='inline-block p-5 cursor-pointer '>
                                    <JobCard
                                        key={index}
                                        title={el[0]}
                                        duration={el[1]}
                                        roles={el[2]}
                                        requirements={el[3]} />
                                </div>
                            </motion.button>
                        ))
                            : (<></>)}


                    </div>
                    <motion.button
                        whileHover={{ scale: 2.1 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <i className='fa fa-angle-right font-bold text-3xl ml-5 mt-2 text-teal-600' onClick={slideRight} />
                    </motion.button>
                </div>
                {key != '' ? (
                    <div className='flex flex-row justify-end gap-10 '>
                        <PerkAndEligibleCard titleTeal='Perks' titleBlack='about the internship' texts={about.profile[key].perks} />
                        <PerkAndEligibleCard titleTeal='Eligibility' titleBlack='criteria' texts={about.profile[key].eligibility} />
                    </div>
                ) : (<></>)}

            </div>

        </>

    )
}

export default Company