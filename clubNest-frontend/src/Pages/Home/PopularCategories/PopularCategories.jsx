import React from 'react';
import { SlPieChart, SlPuzzle } from 'react-icons/sl';

const PopularCategories = () => {
    return (
        <div className=' max-w-7xl mx-auto px-6'>
            <div className=' py-24'>
                <h1 className='text-4xl text-gray-500 text-center mb-5'>Welcome to <span className='text-[#fe3e01] '>ClubNest</span></h1>
                <p className='text-gray-600 text-center '>From photography clubs to tech communities and hiking groups — discover, join, <br />and manage local clubs effortlessly. We provide a complete platform to grow and engage your community.</p>
            </div>

            <div className='pb-28 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch'>

               
                <div className='px-6 py-8 space-y-4 flex flex-col h-full  rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
                    <div className='flex items-center space-x-6'>
                        <SlPuzzle size={40} className='text-[#fe3e01]' />
                        <h1 className='text-2xl font-semibold text-gray-700'>Great Services</h1>
                    </div>

                  
                    <div className='flex-grow text-gray-500 leading-relaxed'>
                        We provide powerful tools to discover and manage local clubs.
                        Organize events, track memberships, and handle registrations effortlessly.
                        Everything you need to grow a thriving community in one place.
                    </div>

                    <div className='pt-4'>
                        <button className="rounded-md px-6 py-2 overflow-hidden relative group cursor-pointer border font-medium border-[#fe3e01] w-fit">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#fe3e01]  top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-gray-600 transition duration-300 group-hover:text-white">
                                Read More
                            </span>
                        </button>
                    </div>
                </div>

               
                <div className='px-6 py-8 space-y-4 flex flex-col h-full  rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
                    <div className='flex items-center space-x-6'>
                        <SlPuzzle size={40} className='text-[#fe3e01]' />
                        <h1 className='text-2xl font-semibold text-gray-700'>Great People</h1>
                    </div>

                    <div className='flex-grow text-gray-500 leading-relaxed'>
                        Connect with passionate people from local clubs and communities.
                        Meet like-minded members who share your interests and goals.
                        Build meaningful relationships through shared experiences.
                    </div>

                    <div className='pt-4'>
                        <button className="rounded-md px-6 py-2 overflow-hidden relative group cursor-pointer border font-medium border-[#fe3e01] w-fit">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#fe3e01] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-gray-600 transition duration-300 group-hover:text-white">
                                Read More
                            </span>
                        </button>
                    </div>
                </div>

                
                <div className='px-6 py-8 space-y-4 flex flex-col h-full  rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
                    <div className='flex items-center space-x-6'>
                        <SlPieChart size={40} className='text-[#fe3e01]' />
                        <h1 className='text-2xl font-semibold text-gray-700'>Great Ideas</h1>
                    </div>

                    <div className='flex-grow text-gray-500 leading-relaxed'>
                        Turn creative ideas into real community experiences.
                        Plan innovative events and engaging activities with ease.
                        Bring your vision to life with the right people and tools.
                    </div>

                    <div className='pt-4'>
                        <button className="rounded-md px-6 py-2 overflow-hidden relative group cursor-pointer border font-medium border-[#fe3e01] w-fit">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#fe3e01] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-gray-600 transition duration-300 group-hover:text-white">
                                Read More
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularCategories;