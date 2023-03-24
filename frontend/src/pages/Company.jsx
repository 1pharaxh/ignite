import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import desk from '../static/images/desk.jpg'
import CompanyCard from '../components/CompanyCard';
import JobCard from '../components/JobCard';
import { UserAuth, getDb } from "../context/AuthContext";
import { doc, getDocs, getDoc, setDoc, collection, query, where, writeBatch } from 'firebase/firestore';
import '../static/css/job_profile_carousel.css'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import PerkAndEligibleCard from '../components/PerkAndEligibleCard';
import Dropdown from '../components/Dropdown';
import ReactElasticCarousel from 'react-elastic-carousel';
import { DotLoader } from 'react-spinners';
function Company() {
    // scroll to top 
    window.scrollTo(0, 0);
    const carouselRef = useRef(null);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]
    const MySwal = withReactContent(Swal)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState('');
    const [applyText, setApplyText] = useState('');
    const [selectedJob, setSelectedJob] = useState({});
    const [selectedJobs, setSelectedJobs] = useState([]);
    const [keys, setKeys] = useState([]);
    const [hasResume, setHasResume] = useState('');
    const [applied, setApplied] = useState(false);

    const navigate = useNavigate();
    const backToCompanies = useCallback(() => { navigate('/companies') }, [navigate]);


    // USE THIS HOOK and HANDLER TO GET DATA BACK FROM CHILD
    const [key, setKey] = useState('');
    const handleNameChange = (newKey) => {
        if (typeof newKey === 'string') {
            setKey(newKey);
            setSelectedJob({ 'Company': data.name, 'JobId': newKey, 'JobTitle': data.job_profile_description[newKey][0][0] })
        } else {
            setKey('Selected Multiple Jobs');
            const temp = []
            for (let i = 0; i < newKey.length; i++) {
                temp.push({ 'Company': data.name, 'JobId': newKey[i], 'JobTitle': data.job_profile_description[newKey[i]][0][0] })
            }
            setSelectedJobs(temp);
            setKeys(newKey);
        };
    };
    const { id } = useParams();
    const { user } = UserAuth();


    useEffect(() => {
        setApplyText('');
        document.getElementById('apply_button').disabled = false;

        async function fetchData() {
            const response = await fetch('https://ignite-backend.onrender.com/companies/' + id)
            const data = await response.json()
            if (data != null) {
                setLoading(false);
            }
            setData(data)
            if (user) {
                setCurrentUser(user.email)
            }
            if (user != null && user != undefined && user.uid) {
                // create a local storage for to cache applied jobs
                const appliedCache = JSON.parse(localStorage.getItem("applied-" + user.uid));
                if (appliedCache == null && user != null && user != undefined && user.uid) {
                    localStorage.setItem("applied-" + user.uid, JSON.stringify([]));
                }
                // check if user has resume in cache
                const userCache = JSON.parse(localStorage.getItem(user.uid));

                // if not, check firestore
                if (userCache == null) {
                    console.log('no cache, calling firestore')
                    const docRef = doc(getDb, 'users', user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        // console.log('has resume', docSnap.data().resume);
                        if (docSnap.data().resume != undefined) {
                            setHasResume(docSnap.data().resume);
                        }
                    } else {
                        setHasResume('');
                        console.log('no resume');
                    }
                } else {
                    if (userCache.resume != undefined) {
                        setHasResume(userCache.resume);
                    } else {
                        setHasResume('');
                        console.log('no resume in cache');

                    }
                }


                const applyCache = JSON.parse(localStorage.getItem("applied-" + user.uid));
                if (applyCache == null || applyCache == []) {
                    console.log('no cache, calling firestore');
                    if (key != '' && key != 'Selected Multiple Jobs') {
                        const docRef = doc(collection(getDb, 'applications'), `${user.uid}+${key}`);
                        const docSnap = await getDoc(docRef);
                        if (docSnap.empty) {
                            console.log('Not Applied.');
                            setApplied(false);
                        } else {
                            console.log('has applied');
                            setApplied(true);
                        }
                    } else if (key == 'Selected Multiple Jobs' && keys.length != 0 && selectedJobs.length != 0) {
                        const collectionRef = collection(getDb, 'applications');
                        for await (const key of keys) {
                            const docId = `${user.uid}+${key}`;
                            const docRef = doc(collectionRef, docId);
                            const docSnap = await getDoc(docRef);

                            if (docSnap.exists()) {
                                console.log('has applied');
                                setApplyText(prevApplyText => prevApplyText + docSnap.data().profile.JobTitle + ', ');
                                setApplied(true);
                            } else {
                                console.log('Not Applied.');
                                setApplied(false);
                            }
                        }
                    }
                } else {
                    if (key != '' && key != 'Selected Multiple Jobs') {
                        if (applyCache.includes(key)) {
                            console.log('has applied');
                            setApplied(true);
                        } else {
                            console.log('Not Applied.');
                            setApplied(false);
                        }
                    }
                    else if (key == 'Selected Multiple Jobs' && keys.length != 0 && selectedJobs.length != 0) {
                        for (const key of keys) {
                            if (applyCache.includes(key)) {
                                console.log('has applied');
                                setApplyText(prevApplyText => prevApplyText + data.job_profile_description[key][0][0] + ', ');
                                setApplied(true);


                            } else {
                                console.log('Not Applied.');
                                setApplied(false);
                            }
                        }
                    }
                }

            }



        }
        fetchData()


    }, [user, key, keys])

    const handleApply = () => {
        if (currentUser == undefined || applied == true || (Object.keys(selectedJob).length == 0 && keys.length == 0) || hasResume == '') {
            let errorString = '';
            if (currentUser == undefined) {
                errorString += "<h1> ● Please Login!";
            }
            if (Object.keys(selectedJob).length == 0 && key != 'Selected Multiple Jobs') {
                errorString += "<h1> ● Please select a Job!";
            }
            if (applied == true) {
                errorString += "<h1> ● Already applied!";
            }
            if (hasResume == '') {
                errorString += "<h1> ● Missing resume!";
            }
            if (applyText != '') {
                errorString += "<h1> ● Already applied for " + applyText;
            }
            MySwal.fire({
                icon: "error",
                title: 'Error!',
                html: "<div class='flex flex-col items-start gap-2 font-bold text-xl text-red-500'>"
                    + errorString
                    + "</div>",
                confirmButtonColor: '#0D9488',
                confirmButtonText: 'Cool'
            });
            return;
        }
        document.getElementById('apply_button').disabled = true;
        if (Object.keys(selectedJob).length != 0 && hasResume != '' && currentUser != undefined && applied == false) {
            let docId = `${user.uid}+${key}`;
            setDoc(doc(collection(getDb, "applications"), docId), {
                name: user.displayName,
                uid: user.uid,
                profile: selectedJob,
                resume: hasResume,
            }).then(() => {
                // Update the "applied" value in localStorage
                const appliedCache = JSON.parse(localStorage.getItem("applied-" + user.uid));
                appliedCache.push(selectedJob);

                console.log("Document successfully written to firestore and cache!");
                // Get the existing "applied" value from localStorage
                const userData = JSON.parse(localStorage.getItem(user.uid));
                const applied = userData ? userData.applied : 0;
                // Update the "applied" value in localStorage
                localStorage.setItem(user.uid, JSON.stringify({
                    ...(userData || {}),
                    applied: applied + 1,
                }));
                // go to companies page
                backToCompanies();
            });
        } else if (selectedJobs.length > 0 && hasResume != '' && currentUser != undefined && applied == false) {
            const batch = writeBatch(getDb);
            const appliedCache = JSON.parse(localStorage.getItem("applied-" + user.uid));
            let cachedApplied = [];
            selectedJobs.forEach(job => {
                const newDocRef = doc(collection(getDb, "applications"), `${user.uid}+${job['JobId']}`);
                batch.set(newDocRef, {
                    name: user.displayName,
                    uid: user.uid,
                    profile: job,
                    resume: hasResume,
                });
                cachedApplied.push(job['JobId']);
            });
            batch.commit().then(() => {
                // Update the "applied" value in localStorage
                localStorage.setItem("applied-" + user.uid, JSON.stringify([...appliedCache, ...cachedApplied]));

                console.log("All documents successfully written to firestore and cache!");
                // Get the existing "applied" value from localStorage
                const userData = JSON.parse(localStorage.getItem(user.uid));
                const applied = userData ? userData.applied : 0;
                // Update the "applied" value in localStorage
                localStorage.setItem(user.uid, JSON.stringify({
                    ...(userData || {}),
                    applied: applied + selectedJobs.length,
                }));
                // go to companies page
                backToCompanies();
            });
        }


    }
    const handleDownload = () => {
        let linkText = data.pdfDescription;
        const link = document.createElement('a');
        link.href = linkText;
        link.download = 'file.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    let resetTimeout;

    return (
        <div>
            <div className='relative overflow-x-hidden md:mt-20 mt-[65px] flex flex-col md:gap-8 gap-4'>
                {/*TEAL COLOR*/}
                <div
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(15, 111, 123, 0.7), rgba(15, 111, 123, 0.7)), url(${desk})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className={`${!loading ? 'opacity-100' : 'opacity-50'} overflow-clip bg-teal-600 mx-0 h-80 w-full`}>
                    <div className='h-80 z-1 overflow-clip'>
                        <div className='flex flex-col items-center justify-center w-full h-full mt-[3%]'>
                            <h1 className='text-5xl text-white font-medium content-center'> {data.name} </h1>
                            <img className='rounded-md mt-7' src={data.image}></img>
                        </div>
                    </div>

                    <DotLoader cssOverride={{
                        display: "block",
                        margin: "auto",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "0",
                        opacity: 1,
                    }} size={150} color={"#0f766e"} loading={loading} />
                </div>
                <div className={`flex flex-col md:my-16 md:mx-16 mx-4 my-8 gap-4 md:gap-10`}>
                    <div className='flex flex-col md:flex-row items-center md:gap-0 gap-2 md:justify-between'>
                        <div className='basis-6/12 w-30'>
                            <h1 className='text-black md:text-4xl text-center md:mb-0 mb-3 text-3xl font-bold' > About the<span className='text-teal-600'> Company</span> </h1>
                        </div>
                        <div className='flex flex-row w-full md:basis-6/12 auto md:w-64 justify-between'>
                            <div className='flex flex-col w-full mr-4'>
                                <button
                                    id='apply_button'
                                    onClick={() => handleApply()}
                                    className={`
                            flex flex-col h-12 w-full items-center px-4 py-2 shadow-lg bg-teal-600 text-white hover:bg-teal-700'}
                          mr-10 font-semibold rounded-lg text-sm`}>
                                    <i className='fa fa-check text-white mx-2 '></i> Apply now!
                                </button>


                            </div>
                            <button
                                onClick={handleDownload}
                                className='flex flex-col h-12 w-full items-center px-4 py-2 shadow-lg  bg-off-white text-teal-600 font-semibold hover:bg-gray-300 rounded-lg text-sm'>
                                <i className='fa fa-download text-teal-600 mx-2'></i> <span className='hidden md:block'> Download Job Description </span>
                                <span className='block md:hidden'>Description </span>
                            </button>
                        </div>
                    </div>

                    {/* ABOUT COMPANY TEXT */}
                    <div className='flex'>
                        <h1 className='text-lg'>
                            {data.about_comp}
                        </h1>
                    </div>
                </div>
            </div >
            <div className={`${!loading ? 'opacity-100' : 'opacity-50'} p-5 bg-teal-200 w-full`}>
                <div className='flex items-center md:flex-row flex-col md:gap-0 gap-4 justify-between md:mx-16 mx-4 my-10'>
                    <div className='cursor-pointer' onClick={() => {
                        window.location.href = about.website
                    }}>
                        <CompanyCard title={'Website'} icon={'fa fa-globe'} body={data.website} ></CompanyCard>
                    </div>
                    <CompanyCard title={'Work Location'} icon={'fa fa-building'} body={data.work_location} ></CompanyCard>
                    {/* {NEED TO COMPLETE THE ONE BELOW} */}
                    {data.job_profile_description ? (<Dropdown onNameChange={handleNameChange} body={data.job_profile_description} />) : (<></>)}


                </div>
            </div>
            <div className={`${!loading ? 'opacity-100' : 'opacity-50'} flex flex-col md:mx-16 md:my-16 mx-3 my-8 md:gap-10 gap-0 text-center`}>
                <h1 className='font-bold md:text-4xl text-3xl text-teal-600'>Job Profiles <span className='text-black'>and their description</span></h1>
                <ReactElasticCarousel
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
                    className="mt-10 "
                    itemPadding={[10, 10]}
                    enableAutoPlay
                    autoPlaySpeed={5000}
                    enableSwipe
                    ref={carouselRef}
                >
                    {data.job_profile_description ? Object.keys(data.job_profile_description).map((key) => {
                        const job = data.job_profile_description[key][0];
                        return (
                            <JobCard
                                key={key}
                                title={job[0]}
                                duration={job[1]}
                                roles={job[2]}
                                requirements={job[3]}
                            />
                        );
                    }) : <></>}
                </ReactElasticCarousel>

                {data.perks && data.eligibility ? (
                    <div className='flex md:flex-row flex-col justify-end md:gap-10 gap-5 mt-5'>
                        <PerkAndEligibleCard titleTeal='Perks' titleBlack='about the internship' texts={data.perks} />
                        <PerkAndEligibleCard titleTeal='Eligibility' titleBlack='criteria' texts={data.eligibility} />
                    </div>
                ) : (<></>)}

            </div>
        </div>

    )
}

export default Company
