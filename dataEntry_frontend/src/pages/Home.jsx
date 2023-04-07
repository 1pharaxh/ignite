import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../utils/LoginContextProvider';
import { useForm } from 'react-hook-form';
import card1 from '../static/assets/card1.png';
import card2 from '../static/assets/card2.png';
import card3 from '../static/assets/card3.png';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { HashLoader } from 'react-spinners';


function Home() {
  const MySwal = withReactContent(Swal)
  const { register, handleSubmit, setFocus, formState: { errors } } = useForm();
  const [uploading, setUploading] = useState(false);
  const [jobProfileDescription, updateJobProfileDescription] = useState({});
  const [postingsarray, updatePostingsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toggleLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const backendURI = import.meta.env.VITE_BACKEND_URI || "";
  const deleteURI = import.meta.env.VITE_DELETE_URI || "";

  const fetchDb = () => {
    console.log("fetching db")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://ignite-backend.onrender.com/companies", requestOptions)
      .then(response => response.text())
      .then((result) => {
        updatePostingsArray(JSON.parse(result))
        setLoading(false);
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    fetchDb();
  }, []);
  const handleLogout = () => {
    toggleLogin();
    navigate('/login');
  };
  const override = {
    display: "block",
    margin: "0 auto",
    padding: "0",
    opacity: 1,

    // borderColor: "teal",
  };
  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(deleteURI + id, {
          method: 'DELETE',
          redirect: 'follow'
        })
          .then(response => response.text())
          .then((result) => {
            console.log(result)
            fetchDb();
          })
          .catch(error => console.log('error', error));
      }
    })
  };
  const onSubmit = (data) => {
    if (Object.keys(jobProfileDescription).length === 0) {
      MySwal.fire({
        title: 'Error!',
        text: 'Please add atleast one job profile',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return;
    }
    else {
      const perks_arr = document.getElementById('perks').value;
      const perks = perks_arr.split("/").map(str => str.trim());
      const eligibility_arr = document.getElementById('eligibility_criteria').value;
      const eligibility = eligibility_arr.split("/").map(str => str.trim());
      uploadPdf(data.pdf[0], data.company_name).then(
        (downloadURLPDF) => {
          uploadImage(data.image[0], data.company_name).then(
            (
              (downloadURLIMG) => {
                console.log({
                  "name": data.company_name,
                  "image": downloadURLIMG,
                  "pdfDescription": downloadURLPDF,
                  "about_comp": data.about_company,
                  "website": data.company_website,
                  "work_location": data.work_location,
                  "paid_unpaid": data.paid_unpaid,
                  "tags": data.tags,
                  "job_profile_description": jobProfileDescription,
                  "perks": perks,
                  "eligibility": eligibility
                });
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({
                  "name": data.company_name,
                  "image": downloadURLIMG,
                  "pdfDescription": downloadURLPDF,
                  "about_comp": data.about_company,
                  "website": data.company_website,
                  "work_location": data.work_location,
                  "paid_unpaid": data.paid_unpaid,
                  "tags": data.tags,
                  "job_profile_description": jobProfileDescription,
                  "perks": perks,
                  "eligibility": eligibility
                })
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
                };
                fetch(backendURI, requestOptions)
                  .catch(error => {
                    console.log('error', error)
                    MySwal.fire({
                      title: 'Error!',
                      text: 'Failed to add data',
                      icon: 'error',
                      confirmButtonText: 'Ok'
                    })
                  })
                  .then(response => response.text())
                  .then(result => {
                    console.log(result)
                    MySwal.fire({
                      title: 'Success!',
                      text: 'Data added successfully',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                    })
                    fetchDb();

                    // clear the form
                    try {
                      document.getElementById("form").reset();

                      // clear the job profile description
                      updateJobProfileDescription({});
                      // clear the perks
                      document.getElementById("perks").value = "";
                      // clear the eligibility criteria
                      document.getElementById("eligibility_criteria").value = "";
                      // clear the image
                      document.getElementById("image").value = "";
                      // clear the pdf
                      document.getElementById("pdf").value = "";
                      // clear the about company
                      document.getElementById("about_company").value = "";
                      // clear the company website
                      document.getElementById("company_website").value = "";
                      // clear the work location
                      document.getElementById("work_location").value = "";
                      // clear the paid unpaid
                      document.getElementById("paid_unpaid").value = "";
                      // clear the company name
                      document.getElementById("company_name").value = "";
                      document.getElementById('job_name').value = "";
                      document.getElementById('job_duration').value = "";
                      document.getElementById('role_requirements').value = "";
                      document.getElementById('requirements').value = "";
                    } catch (error) { console.log(error) }
                  })
              }
            )
          )
        }
      )
      // clear the form
      document.getElementById("form").reset();
      // clear the job profile description
      updateJobProfileDescription({});
      // clear the perks
      document.getElementById("perks").value = "";
      // clear the eligibility criteria
      document.getElementById("eligibility_criteria").value = "";
    }
  };
  const uploadPdf = async (pdfFile, name) => {
    const pdf_path = `companyData/${name}`;
    const pdfDownloadUrl = await upload(pdfFile, pdf_path);
    return pdfDownloadUrl;
  };

  const uploadImage = async (imageFile, name) => {
    const image_path = `companyData/${name}`;
    const imageDownloadUrl = await upload(imageFile, image_path);
    return imageDownloadUrl;
  };
  const upload = async (file, path) => {
    // disable the button OF ID final
    setUploading(true);
    if (!file) {
      return;
    }
    const name = `${path}/${new Date().getTime()}-${file.name}`;
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
    <div className="m-10 text-center">
      <HashLoader className='static mx-auto my-auto' cssOverride={override} size={150} color={"#0f766e"} loading={loading} />
      {/* LOGOUT */}
      <div className={`${loading ? 'hidden' : 'visible'} `} >
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
              <h1 className='font-bold text-base text-slate-800 mr-[25px]'>
                Company PDF:
              </h1>
              < input
                className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                type="file"
                {...register("pdf",
                  {
                    required: 'Please select a PDF file',
                  })} />
              {errors.pdf && (
                <span className="text-red-500">{errors.pdf.message}</span>
              )}
            </div>



            <div className='flex flex-row gap-0 items-baseline'>
              <h1 className='font-bold text-base text-slate-800 mr-[10px]'>
                About Company:
              </h1>
              < textarea
                id='about_company'
                className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                type="text"
                style={{ resize: "both" }}
                placeholder="About Company"
                {...register("about_company",
                  {
                    required: 'Please select an image file',
                    maxLength: {
                      value: 500,
                      message: 'Max length is 600 characters'
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

            <div className='flex flex-row gap-0 items-baseline'>
              <h1 className='font-bold text-base text-slate-800 mr-[20px]'>
                Paid / Unpaid:
              </h1>
              < input
                className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                type="text"
                placeholder="Work Location"
                {...register("paid_unpaid",
                  {
                    required: 'required',
                  })} />
              {errors.paid_unpaid && (
                <span className="text-red-500">{errors.paid_unpaid.message}</span>
              )}
            </div>

            <div className='flex flex-row gap-0 items-baseline'>
              <h1 className=' text-start font-bold text-base text-slate-800 mr-[5px]'>
                Filter Tags:
                <span className='text-red-500 text-start'>
                  <br />
                  Please put space
                  <br />

                  between tags
                </span>
              </h1>

              < input
                id="tags"
                className='p-2 mt-3 flex flex-col items-start rounded-md bg-slate-200'
                type="text"
                placeholder="tag1 tag2 tag3"
                {...register("tags",
                  {
                    required: 'required',
                  })} />
              {errors.tags && (
                <span className="text-red-500">{errors.tags.message}</span>
              )}
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////// */}
            <div className='flex flex-row justify-center items-center gap-[210px] mb-10'>
              <div className='flex flex-col'>
                <h1 className='text-xl font-semibold text-slate-400 my-5 text-start'>
                  Perks and Eligibility card
                </h1>


                {/* JOB PROFILE Perks and eligibilty */}

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
                        required: 'required',
                        maxLength: {
                          value: 500,
                          message: 'Max length is 600 characters'
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
                        required: 'required',
                        maxLength: {
                          value: 500,
                          message: 'Max length is 600 characters'
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

            <div className='flex flex-row justify-center items-center gap-[250px] mb-10'>

              <div className='flex flex-col'>
                <h1 className='text-xl font-semibold text-slate-400 my-5 text-start'>
                  Card on company page (Need at least 1)
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
                          value: 500,
                          message: 'Max length is 600 characters'
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
                          value: 500,
                          message: 'Max length is 600 characters'
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

                  // create a unique ID
                  const id = Date.now().toString();

                  // if the values are not empty, update the state
                  if (temp[0][0] != "" && temp[0][1] != "" && temp[0][2] != [""] && temp[0][3] != [""]) {
                    updateJobProfileDescription({ ...jobProfileDescription, [id]: temp });
                  }
                  // Clear the form 
                  document.getElementById('job_name').value = "";
                  document.getElementById('job_duration').value = "";
                  document.getElementById('role_requirements').value = "";
                  document.getElementById('requirements').value = "";
                }
              }>
                ADD CARD {jobProfileDescription && Object.keys(jobProfileDescription).length}
              </div>
            </div>



          </form>

          < button disabled={uploading} className={`${uploading ? 'bg-slate-400' : 'bg-teal-400'} p-2 flex flex-col items-center mb-4 rounded-md  text-white font-semibold`} type="submit" id="final" form="formName">
            SUBMIT
          </button>
        </div>
        <div className='mt-[100px] mb-10'>
          <h1 className='text-7xl font-bold text-center'>Delete <span className='text-teal-500'>Postings</span></h1>
          <h1 className='text-xl text-slate-400 mt-5 font-bold text-center'>Please <span className='text-teal-500'>tap on a card</span> to <span className='text-red-500'>delete</span> a posting</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
          {Object.keys(postingsarray).map((key) => (
            <div key={key} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
              <div className='flex flex-col items-center justify-center bg-slate-200 rounded-md p-4 cursor-pointer hover:bg-teal-400'
                onClick={() => handleDelete(postingsarray[key]['_id'])}
              >
                <img className=' rounded-md flex flex-col h-[100px] w-[200px]' alt='alt' src={postingsarray[key]['image']} />
                <h1 className='text-xl font-semibold'>{postingsarray[key]['name']}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;