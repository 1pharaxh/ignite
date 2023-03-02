import React from 'react'
import person from '../static/images/person.jpg'
import logo1 from '../static/logos/about_page_logo.png'
import logo2 from '..//static/logos/about_page_logo2.png'
import campusPic from '../static/images/testimages/college_campus.jpg'
import principal from '../static/images/testimages/principal.jpg'

function About() {
  return (
    <div className="md:mt-20 mt-[65px] flex flex-col md:gap-8 gap-4">
      <div className='flex flex-col h-full w-full'>
        {/*TEAL COLOR*/}
        <div
          style={{
            backgroundImage: `url(${person})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} className={`opacity-100 overflow-visible bg-teal-600 mx-0 h-80 w-full`}>
          <div style={{
            backgroundColor: 'rgba(13, 148, 136, 0.8)'
          }} className='h-80 z-1'>
            <div className='flex items-center justify-center w-full h-full'>
              <h1 className='md:text-5xl font-bold text-4xl text-white md:font-medium text-center'>About Us</h1>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col md:gap-8 gap-4 ">
        <div className="flex flex-col m-5 md:m-10 md:flex-row md:gap-8 gap-4 items-center justify-center">
          <div className="flex flex-col md:w-1/12">
            <img src={logo1} alt="" className="md:relative z-10" />
          </div>
          <div className="flex flex-col md:w-6/12 md:gap-8 gap-4 p-8 rounded-xl" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }} >
            <h1 className='text-4xl font-semibold'>About <span className='text-dark-teal'>Ignite - The Placement Cell,</span> <br /><span className='text-3xl'>Sri Guru Tegh Bahadur Khalsa College</span></h1>
            <h1>Ignite is a full fledged training and placement cell which periodically liaises and interacts with the corporate world in order to explore the possibility of training and job placement for the students. Apart from bringing a varied list of recruiters to the campus, it organizes talks,study abroad seminars, internship opportunities and workshops for the collective student body.</h1>
          </div>
        </div>

        <div className="flex m-5 md:m-10 flex-col md:flex-row md:gap-8 gap-4 items-center justify-center">

          <div className="flex flex-col md:w-1/12 ">
            <img src={logo2} alt="" className="md:relative z-10" />
          </div>

          <div className="md:order-first flex flex-col md:w-6/12 md:gap-8 gap-4 p-8 rounded-xl" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }} >
            <h1 className='text-4xl font-semibold'>About <span className='text-dark-teal'>Anubhava - The Online Internship Fair</span></h1>
            <h1>Ignite is a full fledged training and placement cell which periodically liaises and interacts with the corporate world in order to explore the possibility of training and job placement for the students. Apart from bringing a varied list of recruiters to the campus, it organizes talks,study abroad seminars, internship opportunities and workshops for the collective student body.</h1>
          </div>

        </div>
        {/* {Message from Principle} */}
        <div class="relative">
          <img src={campusPic} alt="campus_pic" class="w-full md:h-96 h-44 object-cover object-center" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="flex items-center absolute inset-0">
            <div class="mx-auto flex items-center px-20">
              <img src={principal} alt="principle" class="w-48 h-56 object-cover object-center rounded-l-xl" />
              <div class="ml-4 px-4 py-5 flex flex-col gap-10 text-white bg-off-black opacity-70 rounded-r-xl md:h-56 h-44">
                <h1 className='text-4xl' >Message from <span className='text-base-yellow'>Principle</span></h1>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies euismod gravida tellus, blandit condimentum. Pretium sit sit cras facilisis ullamcorper. Semper maecenas sit integer in. Mattis egestas enim metus eget tempor. Malesuada ultrices id pretium ullamcorper praesent neque amet. Sagittis ac lectus rhoncus nibh vulputate nibh enim, nunc at. Tristique feugiat nisl porttitor scelerisque viverra. Praesent magna lectus ut gravida eu donec. </h1>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
