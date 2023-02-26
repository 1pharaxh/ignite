import React, { useEffect, useCallback } from "react";
import { useForm } from 'react-hook-form';
import { getAuth } from 'firebase/auth';

import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import '../static/css/Login.css'
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const { googleSignIn, signIn } = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    const { register, handleSubmit, setFocus, setError, formState: { errors } } = useForm();
    const auth = getAuth();
    const navigate = useNavigate();
    const handleSignup = useCallback(() => { navigate('/signup') }, [navigate]);
    const onSubmit = async (data) => {
        const email = data['username'];
        const password = data['password'];
        const signin = await signIn(email, password);
        if (signin !== "signed in") {
            const errorMessage = 'Invalid username or password';
            setError("password", { message: errorMessage });
        }
    };
    useEffect(() => {
        setFocus("username");
    }, [setFocus]);
    return (
        <div className='scrollbar-hide'>
            <form id='formName' onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-center items-center absolute w-full h-screen z-10">
                <div className='flex flex-col rounded-lg p-4 w-96 md:w-96 bg-white mx-auto my-auto  gap-4'>
                    <div className='flex flex-col items-center pt-10 md:pt-20'>
                        <h1 className='font-semibold text-3xl md:text-4xl '>Login</h1>
                        <h1 className='font-semibold text-base mt-2 text-center text-slate-400'>Hey, Enter your details to sign in to your account</h1>
                    </div>
                    < input
                        className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                        type="text"
                        placeholder="Enter Email"
                        {...register("username",
                            {
                                required: 'required',
                                minLength:
                                {
                                    value: 5,
                                    message: 'must be 5 charcters'
                                },
                            })} />
                    {errors.username && (
                        <span className="text-red-500">{errors.username.message}</span>
                    )}
                    < input
                        className='p-2 flex flex-col items-start rounded-md bg-slate-200'
                        type="password"
                        placeholder="Password"
                        {...register("password",
                            {
                                required: 'required',
                                minLength: {
                                    value: 8,
                                    message: 'must be 8 charcters'
                                }
                            })} />
                    {errors.password && (
                        <span className="text-red-500">{errors.password.message}</span>
                    )}
                    <div className='cursor-pointer flex flex-row items-start'>
                        <h1 className="text-sm font-semibold text-grey-600">
                            Forgot Password?
                        </h1>
                    </div>
                    < button className='p-2 flex flex-col items-center rounded-md bg-purple-400 text-white font-semibold' type="submit" form="formName">
                        Sign in
                    </button>

                    <div className="w-full h-5 border-b-[1px] border-b-gray-500 border-solid text-center">
                        <span className="text-lg bg-white px-5 text-gray-500">
                            or
                        </span>
                    </div>

                    <div className='p-2 flex flex-col items-center mb-4' >
                        <GoogleButton type="light" className="rounded-full" onClick={handleGoogleSignIn} />
                        <h1 className=" mt-5 text-gray-600"><span>Don't have an account? </span><span onClick={handleSignup} className="font-bold cursor-pointer">Sign up now</span> </h1>
                    </div>
                    <div className='flex flex-col items-start'>

                    </div>


                </div>
            </form>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    )
}

export default LoginPage;