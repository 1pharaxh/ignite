import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { UserAuth, getDb } from "../context/AuthContext";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import person from '../static/images/person.jpg'
import { useNavigate } from "react-router-dom";
import defaultt from '../static/images/default.png'

export default function AccountPage({ }) {
    const [numApplications, setNumApplications] = useState(0);
    const { logOut, user } = UserAuth();
    const [resume, setResume] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [degreeName, setDegreeName] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [year, setYear] = useState('');
    const [userFound, setUserFound] = useState(true);

    useEffect(() => {
        // get number of applications
        const collectionRef = collection(getDb, 'applications');
        // get user info 
        const collectonRef2 = collection(getDb, 'users');
        if (user.uid) {
            getDocs(query(collectionRef, where('uid', '==', user.uid))).then((querySnapshot) => {
                // console.log(user.uid)
                setNumApplications(querySnapshot.size);
            });
            const docRef = doc(collectonRef2, user.uid);
            const docSnap = getDoc(docRef).then((doc) => {
                if (doc.exists()) {
                    setResume(doc.data().resumeName);
                    setCollegeName(doc.data().university);
                    setDegreeName(doc.data().degree);
                    setYear(doc.data().year);
                    if (doc.data().picture) {
                        setImageLink(doc.data().picture);
                    } else {
                        user.photoURL ? setImageLink(user.photoURL) : setImageLink(defaultt);
                    }

                } else {
                    console.log("No such document!");
                    setUserFound(false);
                    user.photoURL ? setImageLink(user.photoURL) : setImageLink(defaultt);

                }
            });
        }
    }, [user]);


    // handle logout
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }
    const loading = false;
    function shortenFileName(fileName) {
        const cleaned = fileName.replace(/[^\w\s]/gi, ' ');
        const words = cleaned.split(' ');
        const first = words[0];
        const last = words[words.length - 1];
        const extension = last.substring(last.lastIndexOf('.') + 1);
        return `${first.substring(0, 5)}...${extension}`;
    }
    function truncateEmail(email) {
        if (!email) return 'None';
        const parts = email.split('@');
        const username = parts[0];
        const domain = parts[1];
        const truncatedUsername = username.slice(0, 3) + '***';
        return truncatedUsername + '@' + domain;
    }
    // This is to manually invoke a link
    const navigate = useNavigate();
    const handleEdit = useCallback(() => { navigate('/edit') }, [navigate]);
    return (
        <>
            <div className='flex flex-col absolute h-full w-full'>
                {/*TEAL COLOR*/}
                <div
                    style={{
                        backgroundImage: `url(${person})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className={`opacity-100 overflow-visible bg-teal-600 mx-0 h-80 w-full`}>
                    <div style={{
                        backgroundColor: 'rgba(13, 148, 136, 0.8)'
                    }} className='h-80 z-1'>
                        <div className='flex items-center justify-center w-full h-full'>
                            <h1 className='md:text-5xl font-bold text-4xl text-white md:font-medium text-center'>Your Account</h1>
                        </div>
                    </div>
                    {/* CARD */}
                    <div className='w-full justify-center items-center flex '>
                        <div className='shadow-md absolute top-52 bottom-0 flex flex-col gap-2 md:gap-4 m-10  bg-slate-200 h-max py-2 md:py-4 md:w-6/12 w-10/12 rounded-lg mx-8 my-6 px-10'>
                            <div className="flex flex-col items-center">
                                <img className="rounded-full h-28 w-28" src={imageLink} alt='Profile Picture' />
                                <h1 className='md:text-2xl text-xl font-bold text-start overflow-hidden whitespace-nowrap max-w-full'>{user.displayName}</h1>
                            </div>

                            {/* MAIN CONTENT */}
                            {userFound && <>
                                <div className="text-center text-lg ">
                                    <p className="text-gray-500">{year} Year Student </p><p className="text-blue-500">@{collegeName}</p>
                                </div>
                                <h1 className='text-lg font-semibold'>
                                    <ion-icon size='large' className='text-2xl' name="paper-plane-outline"></ion-icon>
                                    {' : ' + numApplications}
                                </h1>
                                <h1 className='text-lg font-semibold'>
                                    <ion-icon size='large' className='text-2xl' name="at-outline"></ion-icon>  : {truncateEmail(user.email)}
                                </h1>
                                <h1 className='text-lg font-semibold'>
                                    <ion-icon size='large' name="reader-outline"></ion-icon> : {
                                        resume ? shortenFileName(resume) : 'None'
                                    }</h1>

                                <h1 className='text-lg font-semibold'>
                                    <ion-icon size='large' name="school-outline" /> : {degreeName}
                                </h1>
                                <button onClick={handleEdit} className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Edit Account Info</button>

                                <button onClick={handleLogOut} className='bg-red-600 text-white font-bold py-2 px-4 rounded'>Log Out</button>
                            </>}
                            {!userFound && <>
                                <h1 className='text-xl text-red-500 font-bold text-start'>No user details found!</h1>
                                <button onClick={handleEdit} className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Edit Account Info</button>

                                <button onClick={handleLogOut} className='bg-red-600 text-white font-bold py-2 px-4 rounded'>Log Out</button>
                            </>}

                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}