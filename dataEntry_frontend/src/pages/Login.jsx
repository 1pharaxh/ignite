import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import '../static/css/Login.css'
import { LoginContext } from '../utils/LoginContextProvider';
function Login() {
  const { register, handleSubmit, setFocus, setError, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { isLoggedIn, toggleLogin } = useContext(LoginContext);

  const onSubmit = (data) => {
    const username = import.meta.env.VITE_USERNAME || "";
    const password = import.meta.env.VITE_PASSWORD || "";

    if (data['username'] === username && data['password'] === password) {
      console.log('login success');
      if (!isLoggedIn) {
        toggleLogin();
      }
    }
    else {
      console.log('login failed');
      // Cause an error on the password field
      setError("password", { type: "manual", message: "Incorrect username or password" });
    }
  };
  React.useEffect(() => {
    setFocus("username");
    if (isLoggedIn) {
      navigate('/');
    }
  }, [setFocus, isLoggedIn]);
  return (
    <div className='scrollbar-hide'>
      <form id='formName' onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-center items-center absolute w-full h-full z-10">
        <div className='flex flex-col rounded-lg p-4 w-64 md:w-96 bg-white mx-auto  gap-4'>
          <div className='flex flex-col items-center pt-20'>
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

export default Login




