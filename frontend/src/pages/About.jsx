import React, { useEffect, useState } from 'react'
import person from '../static/images/person.jpg'
import logo1 from '../static/logos/about_page_logo.png'
import logo2 from '..//static/logos/about_page_logo2.png'

import campusPic from '../static/images/testimages/college_campus.jpg'
import principal from '../static/images/testimages/principal.jpg'
import '../static/css/about_parallax.css';
import AboutTealCards from '../components/AboutComponents/AboutTealCards'
import AboutPrincipalMessage from '../components/AboutComponents/AboutPrincipalMessage'
import AboutTopCards from '../components/AboutComponents/AboutTopCards'
import PageBanner from '../components/PageBanner'
import AboutBoardOfAdvisors from '../components/AboutComponents/AboutBoardOfAdvisors'
import AboutCoreCommittee from '../components/AboutComponents/AboutCoreCommittee'
import BOD1 from '../static/images/aboutpage/BOD_Dhruvi_Tyagi.png';
import BOD2 from '../static/images/aboutpage/BOD_Hitesh_Ahuja.png';
import BOD3 from '../static/images/aboutpage/BOD_Khushi_Jain.png';
import BOD4 from '../static/images/aboutpage/BOD_Parth_Bhatia.png';
import BOD5 from '../static/images/aboutpage/BOD_Shivansh_Sharma.png';
import BOD6 from '../static/images/aboutpage/BOD_Uttam_Singh.png';
const images = [{ 'img': BOD1, 'first': 'Dhruvi', 'last': 'Tyagi' }, { 'img': BOD2, 'first': 'Hitesh', 'last': 'Ahuja' }, { 'img': BOD3, 'first': 'Khushi', 'last': 'Jain' }, { 'img': BOD4, 'first': 'Parth', 'last': 'Bhatia' }, { 'img': BOD5, 'first': 'Shivansh', 'last': 'Sharma' }, { 'img': BOD6, 'first': 'Uttam', 'last': 'Singh' }];
import img1 from '../static/images/aboutpage/Aashman_Rawat.png';
import img2 from '../static/images/aboutpage/Achint_Kaur.png';
import img3 from '../static/images/aboutpage/Amandeep_Singh.png';
import img4 from '../static/images/aboutpage/Arnav_Arora.png';
import img5 from '../static/images/aboutpage/Arpit_Gupta.png';
import img6 from '../static/images/aboutpage/Dhruv_Sachdeva.png';
import img7 from '../static/images/aboutpage/Divneet_Kaur.png';
import img8 from '../static/images/aboutpage/Jasnoor_Kaur.png';
import img9 from '../static/images/aboutpage/Khushi_Grover.png';
import img10 from '../static/images/aboutpage/Parv_Arora.png';
import img11 from '../static/images/aboutpage/Prabhjot_Singh.png';
import img12 from '../static/images/aboutpage/Sachleen_Kaur.png';
import img13 from '../static/images/aboutpage/Sameeksha_Srivastava.png';
import img14 from '../static/images/aboutpage/Sanskaar_Kulshreshtha.png';
import img15 from '../static/images/aboutpage/Shourya_Raheja.png';

const images2 = [{
  'img': img1,
  'first': 'Aashman',
  'last': 'Rawat'
},
{
  'img': img2,
  'first': 'Achint',
  'last': 'Kaur'
},
{
  'img': img3,
  'first': 'Amandeep',
  'last': 'Singh'
},
{
  'img': img4,
  'first': 'Arnav',
  'last': 'Arora'
},
{
  'img': img5,
  'first': 'Arpit',
  'last': 'Gupta'
},
{
  'img': img6,
  'first': 'Dhruv',
  'last': 'Sachdeva'
},
{
  'img': img7,
  'first': 'Divneet',
  'last': 'Kaur'
},
{
  'img': img8,
  'first': 'Jasnoor',
  'last': 'Kaur'
},
{
  'img': img9,
  'first': 'Khushi',
  'last': 'Grover'
},
{
  'img': img10,
  'first': 'Parv',
  'last': 'Arora'
},
{
  'img': img11,
  'first': 'Prabhjot',
  'last': 'Singh'
},
{
  'img': img12,
  'first': 'Sachleen',
  'last': 'Kaur'
},
{
  'img': img13,
  'first': 'Sameeksha',
  'last': 'Singh'
},
{
  'img': img14,
  'first': 'Sanskaar',
  'last': 'Kulshrestha'
},
{
  'img': img15,
  'first': 'Shourya',
  'last': 'Raheja'
}];



// import { HashLoader } from 'react-spinners'

function About() {
  // scroll to top 
  window.scrollTo(0, 0);
  document.title = "About Us";
  // TEMPORARY LOADING SCREEN
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // set the timeout for 3 seconds, you can adjust it according to your needs
  // }, []);
  return (
    <div className="md:mt-20 mt-[65px] flex flex-col">
      {/* <HashLoader cssOverride={{
        display: "block",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "0",
        opacity: 1,
      }} size={150} color={"#0f766e"} loading={isLoading} />
      <div className={`${!isLoading ? `opacity-100` : `opacity-50`}`}> */}
      <div>
        <PageBanner
          image={person}
          bannerText={'About Us'}
        />
        {/* CONTENT */}
        <div className="flex flex-col">
          <AboutTopCards
            logo1={logo1}
            logo2={logo2} />

          <AboutPrincipalMessage
            campusPic={campusPic}
            principal={principal}
            message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies euismod gravida tellus, blandit condimentum. Pretium sit sit cras facilisis ullamcorper. Semper maecenas sit integer in. Mattis egestas enim metus eget tempor. Malesuada ultrices id pretium ullamcorper praesent neque amet. '}
            principal2={principal}
            message2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies euismod gravida tellus, blandit condimentum. Pretium sit sit cras facilisis ullamcorper. Semper maecenas sit integer in. Mattis egestas enim metus eget tempor. Malesuada ultrices id pretium ullamcorper praesent neque amet. '}


          />

          <div className='about_parallax'>
            <div className="about_parallax_overlay"></div>
            <div className='h-full w-full my-10 '>
              <AboutBoardOfAdvisors
                text="The Board of Directors"
                images={images}
              />
              <AboutCoreCommittee />


              <AboutBoardOfAdvisors
                text="Executive Members"
                images={images2}
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About