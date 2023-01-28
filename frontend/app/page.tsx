
import React from "react";
import CurrentStatistics from "./currentStatistics";
import Carousel from "./MainCarousel";
import TopCompanyCarousel from "./topCompanyCarousel";
const img: string[] = ['bj_capital.png', 'lenskart.png', 'feeding_india.png', 'TOI.png', 'white_hat.png', 'ketto.png','ketto.png','ketto.png', 'ketto.png','ketto.png','ketto.png','ketto.png',];
function Home() {
  return (
    <>
    <Carousel/>
    <TopCompanyCarousel images={img}/>
    <CurrentStatistics/>
    </>
  );
}
export default Home;