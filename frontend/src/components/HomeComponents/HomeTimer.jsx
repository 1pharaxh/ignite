import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import '../../static/css/font.css';
const ClockContainer = styled.div`
  font-family: "Digital-7 Mono", sans-serif;
  font-size: 10rem;
  color: rgb(17 94 89);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 929px) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const Text = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: rgb(17 94 89);
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 929px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.80rem;
  }
`;
export default function HomeTimer() {
    const countdownDate = new Date("April 15, 2023 00:00:00").getTime();

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-teal-200 md:p-10 p-5 w-full md:h-80 h-64 flex-col flex items-center justify-center md:mt-10 mt-3'>
            <h1 className="font-bold md:text-4xl text-3xl text-center text-teal-800">
                Coming live in
            </h1>
            <ClockContainer>
                <Text>Days:</Text> {days.toString().padStart(2, '0')}<br />
                <Text>Hours:</Text> {hours.toString().padStart(2, '0')}<br />
                <Text>Minutes:</Text> {minutes.toString().padStart(2, '0')}<br />
                <Text>Seconds:</Text> {seconds.toString().padStart(2, '0')}
            </ClockContainer>
        </div>

    )

}
