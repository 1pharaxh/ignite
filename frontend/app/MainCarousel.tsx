'use client'
import './../styles/carousel.css';
import Carousel from 'nuka-carousel/lib/carousel';
import React, { useState } from 'react';


const customControlsConfig = {
    pagingDotsStyle: {
        fill: "white",
    },
    pagingDotsClassName: "my-paging-dots-class",
    nextButtonStyle: {
      backgroundColor: 'white',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '30px',
      color: 'teal',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    prevButtonStyle: {
      backgroundColor: 'white',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '30px',
      color: 'teal',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    nextButtonText: '>',
    prevButtonText: '<'
  };
function MainCarousel() {
    return (
        <Carousel slidesToShow={1} defaultControlsConfig={customControlsConfig} >
            <img className='w-full' src="main_carousel.png" />
            <img className='w-full' src="main_carousel.png" />
            <img className='w-full' src="main_carousel.png" />
        </Carousel>
    )
}

export default MainCarousel;
