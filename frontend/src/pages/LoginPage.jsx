import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';

import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import '../static/css/Login.css'

function LoginPage() {
    const { googleSignIn } = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const username = import.meta.env.VITE_USERNAME || "";
        const password = import.meta.env.VITE_PASSWORD || "";
        if (data['username'] === username && data['password'] === password) {
            console.log('login success');
        }
        else {
            console.log('login failed');
        }
    };
    useEffect(() => {
        setFocus("username");
    }, [setFocus]);
    return (
        <div className='scrollbar-hide'>
            <form id='formName' onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-center items-center absolute w-full h-screen z-10">
                <div className='flex flex-col rounded-lg p-4 w-64 md:w-96 bg-white mx-auto my-auto  gap-4'>
                    <div className='flex flex-col items-center pt-10 md:pt-20'>
                        <h1 className='font-semibold text-3xl md:text-4xl '>Login</h1>
                        <h1 className='font-semibold text-base text-slate-400'>Enter your credentials</h1>
                    </div>
                    < input
                        className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                        type="text"
                        placeholder="Username"
                        {...register("username",
                            {
                                required: 'required',
                                minLength:
                                {
                                    value: 5,
                                    message: 'must be 5 charcters'
                                }
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
                    < button className='p-2 flex flex-col items-center mb-4 rounded-md bg-purple-400 text-white font-semibold' type="submit" form="formName">
                        LOGIN
                    </button>
                    <div className='p-2 flex flex-col items-center mb-4' >
                        <GoogleButton className="rounded-md" onClick={handleGoogleSignIn} />

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