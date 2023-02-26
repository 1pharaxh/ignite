import React, { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, storage, db } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Handle Google Sign In
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider); FOR MOBILE
    signInWithPopup(auth, provider);
  };

  // Handle Log Out
  const logOut = () => {
    signOut(auth);
  }

  // Handle Sign Up
  const signUp = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log("Email verification sent");
        }
        )
        .catch((error) => {
          console.error("Error sending email verification", error);
        }
        );
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Sign In
  const signIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      return "signed in"
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => { unscribe() };
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export const getStorage = storage;
export const getDb = db;
