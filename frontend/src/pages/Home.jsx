import React from "react";
import { motion } from "framer-motion";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import HomeTopCompanies from "../components/HomeComponents/HomeTopCompanies";
import HomeStatistics from "../components/HomeComponents/HomeStatistics";
import home_top from "../static/images/testimages/home_topbanner.png";
import HomeTimeline from "../components/HomeComponents/HomeTimeline";
import HomeReviewCard from "../components/HomeComponents/HomeReviewCard";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: 100, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      exit={{ opacity: 0, y: -100, x: -100, scale: 0.5 }}
      transition={{ duration: 1 }} className="md:mt-20 mt-[65px] flex flex-col md:gap-8 gap-4">
      <HomeBanner imageArray={[home_top, home_top, home_top, home_top]} />

      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:my-5 my-3 md:text-4xl font-bold"><span className="text-[#072033]">Current Top</span><span className="text-[#0F6F7B]"> Companies</span></h1>
      </div>

      <HomeTopCompanies imageArray={['https://drive.google.com/uc?export=view&id=1cib3mrG338kQbSrRKheh33Dh6tNEQVuR',
        'https://drive.google.com/uc?export=view&id=16F76CQiHfzLoCrjKP-Ol-dWHr5wog8Zr',
        'https://drive.google.com/uc?export=view&id=1FnCh8-GWvEW4R3xGd1qY43YEl589jdxl',
        'https://drive.google.com/uc?export=view&id=1zWTecZElhFF_HEArLgNHe-3Ww9hs4wa4',
        'https://drive.google.com/uc?export=view&id=1_K8brSr8Dgs7gThboSZz_Ku6jo941nme',
        'https://drive.google.com/uc?export=view&id=1cib3mrG338kQbSrRKheh33Dh6tNEQVuR',
        'https://drive.google.com/uc?export=view&id=16F76CQiHfzLoCrjKP-Ol-dWHr5wog8Zr',
        'https://drive.google.com/uc?export=view&id=1FnCh8-GWvEW4R3xGd1qY43YEl589jdxl',
        'https://drive.google.com/uc?export=view&id=1zWTecZElhFF_HEArLgNHe-3Ww9hs4wa4',
        'https://drive.google.com/uc?export=view&id=1_K8brSr8Dgs7gThboSZz_Ku6jo941nme',
      ]} />

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




      <HomeReviewCard
        reviews={{
          "students": [
            { id: 0, name: "John Doe", image: "https://picsum.photos/200/100", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 5 },
            { id: 1, name: "John Green", image: "https://picsum.photos/200/101", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 4 },
            { id: 2, name: "Kenny William", image: "https://picsum.photos/200/102", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 2 },
            { id: 3, name: "Pravesh", image: "https://picsum.photos/200/150", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 3 },
            { id: 4, name: "Cathy", image: "https://picsum.photos/200/155", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 5 },
            { id: 5, name: "Rema", image: "https://picsum.photos/200/201", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 4 },
            { id: 6, name: "Sameer", image: "https://picsum.photos/200/210", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 3 },
            { id: 7, name: "Farukh", image: "https://picsum.photos/200/120", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 2 },
            { id: 8, name: "Seema", image: "https://picsum.photos/200/170", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 5 },
          ],
          "employers": [
            { id: 0, name: "Chegg", image: "https://picsum.photos/200/100", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 5 },
            { id: 1, name: "Doubt net", image: "https://picsum.photos/200/101", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 4 },
            { id: 2, name: "Times of India", image: "https://picsum.photos/200/102", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 2 },
            { id: 3, name: "LensKart", image: "https://picsum.photos/200/150", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 3 },
            { id: 4, name: "Bajaj", image: "https://picsum.photos/200/155", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 5 },
            { id: 5, name: "Sony", image: "https://picsum.photos/200/201", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 4 },
            { id: 6, name: "Infosys", image: "https://picsum.photos/200/210", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 3 },
            { id: 7, name: "LG", image: "https://picsum.photos/200/120", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 2 },
            { id: 8, name: "HCL", image: "https://picsum.photos/200/170", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", stars: 5 },
          ]
        }}
      />

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

    </motion.div>
  );
}

export default Home;