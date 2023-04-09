import React from "react";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import TheTimesOfIndia from "../static/images/testimages/The times of India.png";
import BajajCapital from "../static/images/testimages/Bajaj capital.png";
import Ketto from "../static/images/testimages/ketto.png";
import LensKart from "../static/images/testimages/Lenskart.png";
import FeedingIndia from "../static/images/testimages/feeding india by zomato.png";



import HomeTopCompanies from "../components/HomeComponents/HomeTopCompanies";
import HomeStatistics from "../components/HomeComponents/HomeStatistics";
import banner from "../static/images/banner_1.jpg";
import banner2 from "../static/images/banner_2.jpg";
import phoneBanner from "../static/images/Phone_banner_1.jpg";
import phoneBanner2 from "../static/images/Phone_banner_2.jpg";
import home_carousel_image from "../static/images/home_carousel_image.png";
import HomeTimeline from "../components/HomeComponents/HomeTimeline";
import HomeTimer from "../components/HomeComponents/HomeTimer";
import HomeImageContinueScroll from "../components/HomeComponents/HomeImageContinueScroll";
function Home() {
  // scroll to top 
  window.scrollTo(0, 0);
  document.title = "Anubhava";

  return (
    <div className="md:mt-20 mt-[65px] flex flex-col md:gap-8 gap-4">
      <HomeBanner imageArray={[banner, banner2]} phoneImages={[phoneBanner, phoneBanner2]} />

      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-dark-color">Our</span><span className="text-primary-color"> Sponsors</span></h1>
      </div>

      <HomeTopCompanies imageArray={[
        { image: TheTimesOfIndia, link: 'https://www.google.com/' },
        { image: BajajCapital, link: 'https://www.google.com/' },
        { image: Ketto, link: 'https://www.google.com/' },
        { image: LensKart, link: 'https://www.google.com/' },
        { image: FeedingIndia, link: 'https://www.google.com/' },
      ]} />

      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-dark-color">Our top</span><span className="text-primary-color"> Companies</span></h1>
      </div>
      <HomeImageContinueScroll />

      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-dark-color">Past</span><span className="text-primary-color"> Statistics</span></h1>
      </div>
      <HomeStatistics
        Companies={'1000+'}
        applications={'11,000+'}
        registrations={'3,700+'}
        colleges={'1000+'}
        states={'25+'}
        job_profiles={'50+'}
        highest_stipend={'₹ 1,00,000'}
        average_stipend={'₹ 50,000'}
      />
      <HomeTimer />

      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-dark-color">Schedule or </span><span className="text-primary-color">Timeline</span></h1>
      </div>
      <HomeTimeline
        timelineArray={[
          {
            date: '12 April 2023',
            heading: 'Registration',
            subheading: 'Registration Opens!',
            body: 'Visit our website to register for the fair. Once registered, you will receive more information about the fair and participating companies.'
          },
          {
            date: '18 April 2023',
            heading: 'Companies',
            subheading: 'Companies shortlisted!',
            body: 'Research each company and their unique internship profiles that cater to various interests and skill sets.'
          },
          {
            date: '21 April 2023',
            heading: 'Applications OUT',
            subheading: 'Start applying!',
            body: 'Registered students can now apply for internships in multiple companies for various profiles.'
          },
          {
            date: '23 April 2023',
            heading: 'Final Selection',
            subheading: 'Final Selection and offer letters!',
            body: 'The hiring criteria of every organization is different and will be disclosed to the students as the procedure follows.'
          }
        ]}
      />

    </div>
  );
}

export default Home;