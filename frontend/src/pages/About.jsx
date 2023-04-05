import React, { useEffect, useState } from 'react'
import person from '../static/images/person.jpg'
import logo1 from '../static/logos/about_page_logo.png'
import logo2 from '..//static/logos/about_page_logo2.png'

import campusPic from '../static/images/testimages/college_campus.jpg'
import principal from '../static/images/testimages/principal.jpg'
import '../static/css/about_parallax.css';
import AboutTealCards from '../components/AboutComponents/AboutTealCards'
import AboutWhiteCards from '../components/AboutComponents/AboutWhiteCards'
import test from '../static/images/testimages/About_ProfilePicture.png';
import AboutPrincipalMessage from '../components/AboutComponents/AboutPrincipalMessage'
import AboutTopCards from '../components/AboutComponents/AboutTopCards'
import PageBanner from '../components/PageBanner'
import AboutBoardOfAdvisors from '../components/AboutComponents/AboutBoardOfAdvisors'
import AboutCoreCommittee from '../components/AboutComponents/AboutCoreCommittee'
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
          />

          <div className='about_parallax'>
            <div className="about_parallax_overlay"></div>
            <div className='h-full w-full my-10 '>
              <AboutBoardOfAdvisors />
              <AboutCoreCommittee />



              <AboutWhiteCards
                text="Executive Members"
                imageArray={[
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                  {
                    firstname: 'Camerson',
                    lastname: 'Williamson',
                    image: test,
                  },
                ]}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About