import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserAuth, getStorage, getDb } from "../context/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs, query, where } from "firebase/firestore";

export default function AccountPage({ }) {
    const [file, setFile] = useState("");
    const [numApplications, setNumApplications] = useState(0);
    const [per, setPerc] = useState(null);
    const { logOut, user } = UserAuth();
    useEffect(() => {
        const collectionRef = collection(getDb, 'applications');
        if (user.uid) {
            getDocs(query(collectionRef, where('uid', '==', user.uid))).then((querySnapshot) => {
                console.log(user.uid)
                setNumApplications(querySnapshot.size);
            });
        }
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            // PUT TIME STAMP IN FRONT OF FILE NAME
            const storageRef = ref(getStorage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setPerc(progress);

                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setDoc(doc(getDb, "users", user.uid), {
                            name: user.displayName,
                            resume: downloadURL,
                        }).then(() => {
                            console.log("Document successfully written!");
                        });
                    });
                }
            );
        };
        file && uploadFile();
    }, [file, user]);



    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }
    const handleAdd = async (e) => {
        // upload after download url is available

    }
    return (
        <div className="p-5">
            <h1>Account Page
                <br />
                <br />

                <p><span className="font-semibold">User Name :</span> {user.displayName}</p>
                <br />
                <p><span className="font-semibold">Number of Applications :</span> {numApplications}</p>
                <br />
                <p><span className="font-semibold">User Email :</span> {user.email}</p>
                <br />
                <img src={user.photoURL} alt="" />
                <br />
                <p className="font-semibold">Upload Progress {per}% </p>
                <br />
                <p><span className="font-semibold"> ID: </span>{user.uid}</p>
            </h1>
            <motion.button
                onClick={handleLogOut}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-teal-700 border-2 border-teal-700 px-4 py-4 rounded-md"
            >
                <h1>Logout</h1>
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAdd}
                className="bg-white text-teal-700 border-2 border-teal-700 px-4 py-4 rounded-md"
            >
                <div className="formInput">
                    <label htmlFor="file">
                        UPLOAD RESUME
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                    />
                </div>
            </motion.button>

        </div>
    );
}