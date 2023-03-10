import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../utils/LoginContextProvider';
import { useForm } from 'react-hook-form';


function Home() {
  const { register, handleSubmit, setFocus, formState: { errors } } = useForm();
  const [jobProfileDescriptionArray, updateJobProfile] = useState([]);


  const { toggleLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const backendURI = import.meta.env.VITE_BACKEND_URI || "";

  const handleLogout = () => {
    toggleLogin();
    navigate('/login');
  };

  const onSubmit = (data) => {
    console.log('onSubmit called');
    if (jobProfileDescriptionArray.length === 0) {
      alert('Please add atleast one job profile');
      return;
    }
    console.log(
      data.company_name,
      data.image,
      data.about_company,
      data.company_website,
      data.work_location,
      jobProfileDescriptionArray
    );
  };
  return (
    <div className="m-10">

      {/* LOGOUT */}
      <div className='flex flex-row justify-end items-end'>
        <div className='rounded-lg bg-red-500 text-white font-bold p-2 m-2'>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className='flex flex-col gap-0'>
        <h1 className='text-4xl font-bold text-center'>Add <span className='text-teal-500'>Data</span></h1>
        <form id='formName' onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap justify-start items-start">
          <div className='flex flex-col items-start justify-items-start'>
            <h1 className='font-semibold text-slate-400 text-xl'>Please fill all the fields</h1>
          </div>
          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[90px]'>
              Name:
            </h1>
            < input
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              placeholder="Company name"
              {...register("company_name",
                {
                  required: 'required',
                })} />
            {errors.company_name && (
              <span className="text-red-500">{errors.company_name.message}</span>
            )}
          </div>

          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[12px]'>
              Company image:
            </h1>
            < input
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="file"
              {...register("image",
                {
                  required: 'Please select an image file',
                })} />
            {errors.image && (
              <span className="text-red-500">{errors.image.message}</span>
            )}
          </div>



          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[10px]'>
              About Company:
            </h1>
            < textarea
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              style={{ resize: "both" }}
              placeholder="About Company"
              {...register("about_company",
                {
                  required: 'Please select an image file',
                  maxLength: {
                    value: 100,
                    message: 'Max length is 100 characters'
                  }
                })} />
            {errors.about_company && (
              <span className="text-red-500">{errors.about_company.message}</span>
            )}
          </div>

          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[70px]'>
              Website:
            </h1>
            < input
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              placeholder="Company Website"
              {...register("company_website",
                {
                  required: 'required',
                })} />
            {errors.company_website && (
              <span className="text-red-500">{errors.company_website.message}</span>
            )}
          </div>

          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[20px]'>
              Work Location:
            </h1>
            < input
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              placeholder="Work Location"
              {...register("work_location",
                {
                  required: 'required',
                })} />
            {errors.work_location && (
              <span className="text-red-500">{errors.work_location.message}</span>
            )}
          </div>
          <h1 className='text-xl font-semibold text-slate-400 my-5'>
            This is the card on company page
          </h1>


          {/* JOB PROFILE DESCRIPTION */}
          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[22px]'>
              Job Name:
            </h1>
            < input
              id='job_name'
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              placeholder="Job Name"
              {...register("job_name",
              )} />
          </div>

          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[22px]'>
              Job Duration:
            </h1>
            < input
              id='job_duration'
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              placeholder="Job Duration"
              {...register("job_duration",
              )} />

          </div>

          <div className='flex flex-row gap-0 items-baseline'>
            <h1 className='font-bold text-base text-slate-800 mr-[22px]'>
              Roles and Requirements:
              <span className='text-red-500'>
                <br />
                Please use '/' to
                <br />
                separate bullet points
              </span>
            </h1>
            < textarea
              id='role_requirements'
              style={{ resize: "both" }}
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              placeholder="Bullet 1 / Bullet 2 / Bullet 3"
              {...register("roles_requirements",
                {
                  maxLength: {
                    value: 100,
                    message: 'Max length is 100 characters'
                  }
                })} />
            {errors.roles_requirements && (
              <span className="text-red-500">{errors.roles_requirements.message}</span>
            )}
          </div>

          <div className='flex flex-row gap-0 items-baseline '>
            <h1 className='font-bold text-base text-slate-800 mr-[22px]'>
              Requirements:
              <span className='text-red-500'>
                <br />
                Please use '/' to
                <br />
                separate bullet points
              </span>
            </h1>
            < textarea
              id='requirements'
              style={{ resize: "both" }}
              className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
              type="text"
              placeholder="Bullet 1 / Bullet 2 / Bullet 3"
              {...register("requirements",
                {
                  maxLength: {
                    value: 100,
                    message: 'Max length is 100 characters'
                  }
                })} />
            {errors.requirements && (
              <span className="text-red-500">{errors.requirements.message}</span>
            )}
          </div>


        </form>

        <div className='flex flex-col items-end justify-end mx-auto'>
          <button className='p-2 flex flex-col items-center mb-4 rounded-md bg-teal-400 text-white font-semibold' onClick={
            () => {
              const role_requirements = document.getElementById('role_requirements').value;
              const roles = role_requirements.split("/").map(str => str.trim());

              const requirements = document.getElementById('requirements').value;
              const requirementsArray = requirements.split("/").map(str => str.trim());
              let temp = [];

              // grap the values from the form
              temp.push([
                document.getElementById('job_name').value,
                document.getElementById('job_duration').value,
                roles,
                requirementsArray
              ]);
              if (temp[0][0] !== "" && temp[0][1] !== "" && temp[0][2] !== [""] && temp[0][3] !== [""]) {
                console.log(temp)
                updateJobProfile([...jobProfileDescriptionArray, ...temp]);
              }

            }
          }>
            ADD CARD {jobProfileDescriptionArray.length}
          </button>
        </div>
        < button className='p-2 flex flex-col items-center mb-4 rounded-md bg-teal-400 text-white font-semibold' type="submit" form="formName">
          ADD
        </button>
      </div>

    </div>
  );
}

export default Home;