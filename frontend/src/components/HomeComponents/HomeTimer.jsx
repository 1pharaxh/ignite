import React, { useState, useEffect } from 'react';
export default function HomeTimer() {
  const countdownDate = new Date("April 21, 2023 00:00:00").getTime();

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
    <div className='bg-teal-200 md:p-10 p-5 w-full md:h-96 h-64 flex-col flex items-center justify-center gap-4 md:mt-10 mt-3'>
      <h1 className="font-bold md:text-5xl text-3xl text-center text-teal-800">
        LIVE-IN
      </h1>
      <div className='flex flex-row items-center justify-centermd:gap-4 gap-2'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-dark-teal md:text-9xl text-6xl ' >
            {days.toString().padStart(2, '0')}
          </h1>
          <h1 className='font-semibold text-dark-teal'>
            DAYS
          </h1>
        </div>

        <div className="h-full w-[2px] bg-dark-teal"></div>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-dark-teal md:text-9xl text-6xl '>
            {hours.toString().padStart(2, '0')}
          </h1>
          <h1 className='font-semibold text-dark-teal'>
            HOURS
          </h1>
        </div>
        <div className="h-full w-[2px] bg-dark-teal"></div>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-dark-teal md:text-9xl text-6xl '>
            {minutes.toString().padStart(2, '0')}
          </h1>
          <h1 className='font-semibold text-dark-teal'>
            MINUTES
          </h1>
        </div>
        <div className="h-full w-[2px] bg-dark-teal"></div>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-dark-teal md:text-9xl text-6xl '>
            {seconds.toString().padStart(2, '0')}
          </h1>
          <h1 className='font-semibold text-dark-teal'>
            SECONDS
          </h1>
        </div>
      </div>

      <h1 className='mt-5'>Check the schedule</h1>
      <div>
        <svg className='transform -rotate-90' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 14.5H7.66L18.84 3.32L16 0.5L0 16.5L16 32.5L18.82 29.68L7.66 18.5H32V14.5Z" fill="#0F6F7B" />
        </svg>
      </div>
    </div>

  )

}
