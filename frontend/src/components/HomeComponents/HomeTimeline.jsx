import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { useEffect, useState } from 'react';
import star from '../../static/logos/star2.svg'
import date from '../../static/logos/date.svg'
import '../../static/css/parallax.css';

export default function HomeTimeline({ timelineArray }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 700);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <div className={isMobile ? '' : 'parallax'} >
            <div className={isMobile ? '' : 'parallax-overlay'}>
                <VerticalTimeline
                    lineColor={"#0f766e"}
                >
                    {timelineArray && timelineArray.map((item, index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                date={item['date']}
                                contentStyle={{ background: 'rgb(255, 255, 255)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
                                icon={<img className='md:h-12 md:ml-[6px] md:mt-[6px] h-8 ml-[4px] mt-[4px]' src={date} alt="date" />}
                                contentArrowStyle={{ borderRight: '7px solid  #0f766e' }}
                                iconStyle={{ background: '#0ea5e9', color: '#0f766e' }}
                            >
                                <div className='flex flex-row justify-center items-center gap-4'>
                                    <div className='flex flex-col'>
                                        <div
                                            style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
                                            className='rounded-lg flex items-center justify-center bg-teal-700 p-4 h-16 w-16 text-white font-bold text-3xl'>
                                            {index < 9 ? `0${index + 1}` : index + 1}
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h3 className="text-teal-600 text-lg font-bold">{item['heading']}</h3>
                                        <h4 className="">{item['subheading']}</h4>
                                        <p className='text-base'>
                                            {item['body']}
                                        </p>
                                    </div>
                                </div>

                            </VerticalTimelineElement>
                        )
                    })}

                    <VerticalTimelineElement
                        iconStyle={{ background: '#2dd4bf', color: '#fff' }}
                        icon={<img className='md:h-12 md:ml-[6px] md:mt-[6px]' src={star} alt="star" />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    )
}
