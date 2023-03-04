import React from 'react'
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

function About() {
  return (
    <div className="md:mt-20 mt-[65px] flex flex-col">
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
            <AboutTealCards
              text="The Core Committee"
              dataArray={[
                {
                  heading: 'Cameron Williamson',
                  subheading: 'Software Engineer',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa posuere cras a non ipsum. Senectus.',
                  image: test
                },
                {
                  heading: 'Cameron Williamson',
                  subheading: 'Software Engineer',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa posuere cras a non ipsum. Senectus.',
                  image: test
                },
                {
                  heading: 'Cameron Williamson',
                  subheading: 'Software Engineer',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa posuere cras a non ipsum. Senectus.',
                  image: test
                },
                {
                  heading: 'Cameron Williamson',
                  subheading: 'Software Engineer',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa posuere cras a non ipsum. Senectus.',
                  image: test
                },
              ]}
            />

            <AboutWhiteCards
              text="Board of Advisory"
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

            <AboutWhiteCards
              text="Senior Coordinators"
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
            <AboutWhiteCards
              text="UI / UX Designer and Developer"
              imageArray={[
                {
                  firstname: 'Akarshan',
                  lastname: 'Mishra',
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
  )
}

export default About