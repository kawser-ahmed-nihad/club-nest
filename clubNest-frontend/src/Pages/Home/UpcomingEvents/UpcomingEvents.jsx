import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import photo from '../../../assets/pexels-fauxels.jpg'
import photo2 from '../../../assets/pexels-fauxel.jpg'
import { GoArrowRight } from 'react-icons/go';
import { SlCalender, SlMap } from 'react-icons/sl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Autoplay, Navigation} from 'swiper/modules';
import { motion } from 'framer-motion';
const eventsData = [
    {
        id: 1,
        title: "APEC 2017",
        description: "Consectetur elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqul enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        location: "32-B, Envato St, Themeforest Ave, CA",
        date: "September 2, 2019 07 AM",
        image: photo
    },
    {
        id: 2,
        title: "Tech Summit 2024",
        description: "Join us for the biggest tech gathering of the year. Discover new innovations and network with industry leaders from around the globe in this exclusive event.",
        location: "Silicon Valley, San Francisco, USA",
        date: "October 15, 2024 10 AM",
        image: photo2
    },
    {
        id: 2,
        title: "Tech Summit 2024",
        description: "Join us for the biggest tech gathering of the year. Discover new innovations and network with industry leaders from around the globe in this exclusive event.",
        location: "Silicon Valley, San Francisco, USA",
        date: "October 15, 2024 10 AM",
        image: photo2
    }
];

const UpcomingEvents = () => {
    return (
        <div className=' '>
            <div className='max-w-7xl mx-auto py-28 px-6'>
                <div>
                    <h1 className=' mb-2 text-4xl text-gray-500'> <span className='text-[#fe3e01]'>ClubNest</span> Upcoming Events</h1>
                    <p>We make your events smart & impactful by personalised event management services.</p>
                </div>

                <div className='  mt-10 mb-10 flex space-x-8 '>


                    <Swiper
                        spaceBetween={30}
                        speed={2000}
                        centeredSlides={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper rounded-2xl overflow-hidden"
                    >
                        {eventsData.map((event) => (
                            <SwiperSlide key={event.id}>
                                {({ isActive }) => (
                                    <div className='flex flex-col md:flex-row items-center gap-12 py-10 px-4'>

                                        
                                        <motion.div
                                            className='flex-1'
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <img className='rounded-2xl w-full h-[400px] object-cover shadow-2xl' src={event.image} alt={event.title} />
                                        </motion.div>

                                        
                                        <div className='flex-1 relative'>
                                            
                                            <motion.div
                                                className='absolute top-4 bg-[#fe3e01] h-1 w-12 -left-16 hidden md:block'
                                                initial={{ width: 0 }}
                                                animate={isActive ? { width: 48 } : { width: 0 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            ></motion.div>

                                            <div className='space-y-6'>
                                               
                                                <motion.h1
                                                    className='font-bold text-4xl text-gray-800'
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.5, delay: 0.4 }}
                                                >
                                                    {event.title}
                                                </motion.h1>

                                               
                                                <motion.p
                                                    className='text-gray-500 text-lg leading-relaxed'
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.5, delay: 0.5 }}
                                                >
                                                    {event.description}
                                                </motion.p>

                                               
                                                <motion.div
                                                    className='space-y-4 pt-4'
                                                    initial={{ opacity: 0 }}
                                                    animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.7 }}
                                                >
                                                    <div className='group flex space-x-2 items-center cursor-pointer text-gray-700 hover:text-[#fe3e01] w-fit'>
                                                        <p className='font-bold'>More Details</p>
                                                        <GoArrowRight className='text-xl group-hover:translate-x-2 transition-transform' />
                                                    </div>

                                                    <div className='flex space-x-3 items-center text-gray-600'>
                                                        <SlMap className='text-[#fe3e01] text-xl' />
                                                        <p className='font-medium'>{event.location}</p>
                                                    </div>

                                                    <div className='flex space-x-3 items-center text-gray-600'>
                                                        <SlCalender className='text-[#fe3e01] text-xl' />
                                                        <p className='font-medium'>{event.date}</p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                   
                    <style>{`
                .swiper-pagination-bullet-active { background: #fe3e01 !important; }
                .mySwiper { padding-bottom: 60px !important; }
            `}</style>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;