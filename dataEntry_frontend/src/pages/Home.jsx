import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../utils/LoginContextProvider';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import card1 from '../static/assets/card1.png';
import card2 from '../static/assets/card2.png';
import card3 from '../static/assets/card3.png';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Home() {
  const MySwal = withReactContent(Swal)

  const { register, handleSubmit, setFocus, formState: { errors } } = useForm();
  const [uploading, setUploading] = useState(false);
  const [jobProfileDescriptionArray, updateJobProfile] = useState([]);
  const [jobPerksEligibilty, updatePerksEligibilty] = useState({});

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
      MySwal.fire({
        title: 'Error!',
        text: 'Please add atleast one job profile',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return;
    }
    if (Object.keys(jobPerksEligibilty).length === 0) {
      MySwal.fire({
        title: 'Error!',
        text: 'Please add atleast one job perk',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return;
    }
    if (Object.keys(jobPerksEligibilty).length !== jobProfileDescriptionArray.length) {
      MySwal.fire({
        title: 'Error!',
        text: 'Please add same number of Job perks and eligibilty as Job Profile',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return;
    } else {
      upload(data.image[0]).then(
        (downloadURL) => {
          console.log({
            "name": data.company_name,
            "image": downloadURL,
            "about": {
              "about_comp": data.about_company,
              "website": data.company_website,
              "work_location": data.work_location,
              "job_profile_description": jobProfileDescriptionArray,
              "profile": jobPerksEligibilty
            }
          });
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({
            "name": data.company_name,
            "image": downloadURL,
            "about": {
              "about_comp": data.about_company,
              "website": data.company_website,
              "work_location": data.work_location,
              "job_profile_description": jobProfileDescriptionArray,
              "profile": jobPerksEligibilty
            }
          })
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch(backendURI, requestOptions)
            .then(response => response.text())
            .then(result => {
              console.log(result)
              MySwal.fire({
                title: 'Success!',
                text: 'Data added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            })
            .catch(error => {
              console.log('error', error)
              MySwal.fire({
                title: 'Error!',
                text: 'Failed to add data',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            }
            );
        })
    }
  };
  const upload = async (file) => {
    // disable the button OF ID final
    setUploading(true);
    if (!file) {
      return;
    }
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("File upload is " + progress + "% done");
    });

    await uploadTask;
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    setUploading(false);
    return downloadURL;
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
        <h1 className='text-7xl font-bold text-center'>Add <span className='text-teal-500'>Data</span></h1>
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
                    value: 1000,
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

          <div className='flex flex-row justify-center items-center gap-[250px] mb-10'>

            <div className='flex flex-col'>
              <h1 className='text-xl font-semibold text-slate-400 my-5'>
                This is the card on company page
              </h1>


              {/* JOB PROFILE DESCRIPTION */}
              <div className='flex flex-row gap-0 items-baseline'>
                <h1 className='font-bold text-base text-slate-800 mr-[115px]'>
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
                <h1 className='font-bold text-base text-slate-800 mr-[92px]'>
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
                <h1 className='font-bold text-base text-slate-800 mr-[10px]'>
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
                        value: 1000,
                        message: 'Max length is 100 characters'
                      }
                    })} />
                {errors.roles_requirements && (
                  <span className="text-red-500">{errors.roles_requirements.message}</span>
                )}
              </div>

              <div className='flex flex-row gap-0 items-baseline '>
                <h1 className='font-bold text-base text-slate-800 mr-[30px]'>
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
                        value: 1000,
                        message: 'Max length is 100 characters'
                      }
                    })} />
                {errors.requirements && (
                  <span className="text-red-500">{errors.requirements.message}</span>
                )}
              </div>
            </div>
            <img className='flex flex-col h-[400px] w-[310px]' alt='alt' src={card1} />

          </div>
          <div className='flex flex-col items-end justify-end mx-auto'>
            <div className='p-2 cursor-pointer flex flex-col items-center mb-4 rounded-md bg-teal-400 text-white font-semibold' onClick={
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
                if (temp[0][0] != "" && temp[0][1] != "" && temp[0][2] != [""] && temp[0][3] != [""]) {
                  updateJobProfile([...jobProfileDescriptionArray, ...temp]);
                }

              }
            }>
              ADD CARD {jobProfileDescriptionArray.length}
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////// */}
          <div className='flex flex-row justify-center items-center gap-[210px] mb-10'>
            <div className='flex flex-col'>
              <h1 className='text-xl font-semibold text-slate-400 my-5'>
                This is the Perks and Eligibility card
              </h1>


              {/* JOB PROFILE Perks and eligibilty */}
              <div className='flex flex-row gap-0 items-baseline'>
                <h1 className='font-bold text-base text-slate-800 mr-[108px]'>
                  Job Name:
                </h1>
                < input
                  id='job_name_2'
                  className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                  type="text"
                  placeholder="Job Name"
                  {...register("job_name_2",
                  )} />
              </div>
              <div className='flex flex-row gap-0 items-baseline'>
                <h1 className='font-bold text-base text-slate-800 mr-[100px]'>
                  Link to pdf:
                </h1>
                < input
                  id='link_to_pdf'
                  className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                  type="text"
                  placeholder="Link to job pdf"
                  {...register("link_to_pdf",
                    {
                      maxLength: {
                        value: 1000,
                        message: 'Max length is 100 characters'
                      }
                    })} />
                {errors.link_to_pdf && (
                  <span className="text-red-500">{errors.link_to_pdf.message}</span>
                )}
              </div>
              <div className='flex flex-row gap-0 items-baseline'>
                <h1 className='font-bold text-base text-slate-800 mr-[22px]'>
                  Perks about the job:
                  <span className='text-red-500'>
                    <br />
                    Please use '/' to
                    <br />
                    separate bullet points
                  </span>
                </h1>
                < textarea
                  id='perks'
                  style={{ resize: "both" }}
                  className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                  type="text"
                  placeholder="Bullet 1 / Bullet 2 / Bullet 3"
                  {...register("perks",
                    {
                      maxLength: {
                        value: 1000,
                        message: 'Max length is 100 characters'
                      }
                    })} />
                {errors.perks && (
                  <span className="text-red-500">{errors.perks.message}</span>
                )}
              </div>

              <div className='flex flex-row gap-0 items-baseline '>
                <h1 className='font-bold text-base text-slate-800 mr-[22px]'>
                  Eligibility Criteria:
                  <span className='text-red-500'>
                    <br />
                    Please use '/' to
                    <br />
                    separate bullet points
                  </span>
                </h1>
                < textarea
                  id='eligibility_criteria'
                  style={{ resize: "both" }}
                  className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                  type="text"
                  placeholder="Bullet 1 / Bullet 2 / Bullet 3"
                  {...register("eligibility_criteria",
                    {
                      maxLength: {
                        value: 1000,
                        message: 'Max length is 100 characters'
                      }
                    })} />
                {errors.eligibility_criteria && (
                  <span className="text-red-500">{errors.eligibility_criteria.message}</span>
                )}
              </div>
            </div>
            <div>
              <img className='flex flex-col h-[170px] w-[400px]' alt='alt' src={card2} />
              <img className='flex flex-col h-[170px] w-[400px]' alt='alt' src={card3} />

            </div>


          </div>

          <div className='flex flex-col items-end justify-end mx-auto'>
            <div className='cursor-pointer p-2 flex flex-col items-center mb-4 rounded-md bg-teal-400 text-white font-semibold' onClick={
              () => {
                const perks_arr = document.getElementById('perks').value;
                const perks = perks_arr.split("/").map(str => str.trim());

                const eligibility_arr = document.getElementById('eligibility_criteria').value;
                const eligibility = eligibility_arr.split("/").map(str => str.trim());
                let temp = {};

                // create a unique ID
                const id = uuidv4();
                // grap the values from the form
                temp = {
                  "name": document.getElementById('job_name_2').value,
                  "link": document.getElementById('link_to_pdf').value,
                  "eligibility": eligibility,
                  "perks": perks
                };
                if (temp['name'] != "" && temp['link'] != "" && temp['eligibility'] != "" && temp['perks'] != "") {
                  updatePerksEligibilty({ ...jobPerksEligibilty, [id]: temp });
                }

              }
            }>
              ADD CARD {Object.keys(jobPerksEligibilty).length}
            </div>
          </div>

        </form>

        < button disabled={uploading} className={`${uploading ? 'bg-slate-400' : 'bg-teal-400'} p-2 flex flex-col items-center mb-4 rounded-md  text-white font-semibold`} type="submit" id="final" form="formName">
          SUBMIT
        </button>
      </div>

    </div>
  );
}

export default Home;