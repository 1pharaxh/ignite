import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { UserAuth, getStorage, getDb } from "../context/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, getDoc, collection, setDoc } from "firebase/firestore";
import person from '../static/images/person.jpg'
import { useNavigate } from "react-router-dom";
import defaultt from '../static/images/default.png'

export default function AccountPage({ }) {
    const [file, setFile] = useState("");
    const [picture, setPicture] = useState("");
    const [per, setPerc] = useState(null);
    const { user } = UserAuth();
    const [imageLink, setImageLink] = useState('');


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
    const goBack = useCallback(() => { navigate('/account') }, [navigate]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const degreeName = document.getElementById('degreeName').value;
        const collegeName = document.getElementById('collegeName').value;
        const year = document.getElementById('year').value;
        if (!degreeName || !collegeName || !year || !file) {
            alert('Please fill out all fields');
            return;
        }
        const name1 = new Date().getTime() + file.name;
        const storageRef1 = ref(getStorage, name1);
        const uploadTask1 = uploadBytesResumable(storageRef1, file);

        const name2 = new Date().getTime() + picture.name;
        const storageRef2 = ref(getStorage, name2);
        const uploadTask2 = uploadBytesResumable(storageRef2, picture);

        // Update progress for each file separately
        uploadTask1.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("File 1 upload is " + progress + "% done");
            setPerc(progress);
        });

        uploadTask2.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("File 2 upload is " + progress + "% done");
            setPerc(progress);
        });

        // Wait for both uploads to complete before updating the database
        await Promise.all([uploadTask1, uploadTask2]);

        const downloadURL1 = await getDownloadURL(uploadTask1.snapshot.ref);
        const downloadURL2 = await getDownloadURL(uploadTask2.snapshot.ref);

        setDoc(doc(getDb, "users", user.uid), {
            name: user.displayName,
            resume: downloadURL1,
            resumeName: name1,
            picture: downloadURL2,
            // pictureName: name2,
            degree: degreeName,
            university: collegeName,
            year: year,
        }).then(() => {
            console.log("Document successfully written!");
        });
    };

    useEffect(() => {
        const collectonRef2 = collection(getDb, 'users');

        if (user.uid) {
            const docRef = doc(collectonRef2, user.uid);
            const docSnap = getDoc(docRef).then((doc) => {
                if (doc.exists() && doc.data().picture) {
                    setImageLink(doc.data().picture);
                } else {
                    console.log("No such document!");
                    user.photoURL ? setImageLink(user.photoURL) : setImageLink(defaultt);

                }
            });
        }
    }, [user])



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
                            <h1 className='md:text-5xl font-bold text-4xl text-white md:font-medium text-center'>Edit Your Account</h1>
                        </div>
                    </div>
                    {/* CARD */}
                    <div className='w-full justify-center items-center flex'>
                        <div className='shadow-md absolute top-52 bottom-0 flex flex-col gap-2 md:gap-4 m-10  bg-slate-200 h-max py-2 md:py-4 md:w-6/12 w-10/12 rounded-lg mx-8 my-6 px-10'>
                            <div className="flex flex-col items-center">
                                <img className="rounded-full h-28 w-28" src={imageLink} alt='Profile Picture' />
                                <h1 className='text-2xl font-bold text-start'>{user.displayName}</h1>
                                <div className='text-lg font-semibold mb-2 md:mb-4'>
                                    <ion-icon size='large' className='text-2xl' name="cloud-upload-outline" />
                                    <label htmlFor="picture" className="ml-2 bg-transparent cursor-pointer focus:border-teal-600">
                                        Change Profile Picture
                                        <input id="picture" type="file" onChange={(e) => setPicture(e.target.files[0])} className='hidden' />
                                    </label>
                                </div>
                            </div>

                            <h1 className='text-lg font-semibold'>
                                <ion-icon size='large' className='text-2xl' name="location-outline"></ion-icon>
                                <input id="collegeName" type="text" placeholder='Enter your college name' className='ml-2 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-teal-600' />
                            </h1>

                            <h1 className='text-lg font-semibold'>
                                <ion-icon size='large' className='text-2xl' name="calendar-outline"></ion-icon>
                                <input id="year" type="number" placeholder='Enter your year' className='ml-2 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-teal-600' />
                            </h1>
                            <div className='text-lg font-semibold'>
                                <ion-icon size='large' name="school-outline" />
                                <input id="degreeName" type="text" placeholder='Enter your degree name' className='ml-2 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-teal-600' />
                            </div>
                            <h1 className='text-lg font-semibold'>
                                <ion-icon size='large' className='text-2xl' name="at-outline"></ion-icon>  : {truncateEmail(user.email)}
                            </h1>

                            <h1 className='text-lg font-semibold'>
                                <ion-icon size="large" name="shield-checkmark-outline" />{user.emailVerified ? ' : Yes' : ' : Please verify your email'}
                            </h1>

                            <div className="my-2">
                                <h1 className='text-xl font-bold'>
                                    <ion-icon size="large" name="cloud-upload-outline" /> : Upload Resume
                                </h1>
                                <input
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                {per && <h1 className='text-xl font-bold'>{per}%</h1>}
                            </div>
                            <button onClick={goBack} className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>My Account</button>
                            <button onClick={handleSubmit} className='bg-green-600 text-white font-bold py-2 px-4 rounded'>Submit</button>
                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}