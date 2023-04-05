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
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-[#072033]">Our</span><span className="text-[#0F6F7B]"> Sponsors</span></h1>
      </div>

      <HomeTopCompanies imageArray={[
        { image: TheTimesOfIndia, link: 'https://www.google.com/' },
        { image: BajajCapital, link: 'https://www.google.com/' },
        { image: Ketto, link: 'https://www.google.com/' },
        { image: LensKart, link: 'https://www.google.com/' },
        { image: FeedingIndia, link: 'https://www.google.com/' },
      ]} />

      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-[#072033]">Our top</span><span className="text-[#0F6F7B]"> Companies</span></h1>
      </div>
      <HomeImageContinueScroll />

      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-[#072033]">Past</span><span className="text-[#0F6F7B]"> Statistics</span></h1>
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
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-[#072033]">Schedule or </span><span className="text-[#0F6F7B]">Timeline</span></h1>
      </div>
      <HomeTimeline
        timelineArray={[
          {
            date: '2023-08-01',
            heading: 'Registration ',
            subheading: 'Registration Opens!',
            body: 'To participate in the event, register your team on the website.'
          },
          {
            date: '2023-08-12',
            heading: 'Companies',
            subheading: 'Companies shortlisted!',
            body: 'The names of participating companies would be live on the website.'
          },
          {
            date: '2023-08-15',
            heading: 'Applications OUT',
            subheading: 'Start applying!',
            body: 'The registrants will be able to apply for the company of their interest when the fair goes online.'
          },
          {
            date: '2023-08-20',
            heading: 'Final Selection',
            subheading: 'Final Selection and offer letters!',
            body: 'Applicants will be informed about the further selection criteria.'
          },
        ]}
      />

    </div>
  );
}

export default Home;