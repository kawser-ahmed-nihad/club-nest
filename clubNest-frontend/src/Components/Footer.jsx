import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaCaretRight, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-[#1a1a1a] text-white pt-20 pb-10 mt-20">
          

            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
                <svg
                    className="relative block w-full h-[100px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                   
                    <path
                        d="M0,120h1200V40c-200,0-400-40-600-40S200,40,0,40V120z"
                        fill="#1a1a1a"
                    ></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* ১. About Section */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-[#fe3e01] rounded-full flex items-center justify-center font-bold text-xl">C</div>
                        <h2 className="text-2xl font-bold tracking-wider">ClubNest</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-8 h-[2px] bg-[#fe3e01]"></span>
                        <h3 className="font-semibold text-lg">About Dvents</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The Events Specialists! Lorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore et dolore alg minim veniam quis nostrud lorem psum dolor sit amet sed incididunt.
                    </p>
                    <button className="border border-gray-600 px-6 py-2 text-sm hover:bg-[#fe3e01] hover:border-[#fe3e01] transition-all duration-300">
                        Read More
                    </button>

                    <div className="flex items-center space-x-3 pt-4">
                        <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#fe3e01] hover:text-white hover:border-[#fe3e01] transition-all duration-300">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="" target="_blank" rel="noreferrer"
                            className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#fe3e01] hover:text-white hover:border-[#fe3e01] transition-all duration-300">
                            <FaGithub size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#fe3e01] hover:text-white hover:border-[#fe3e01] transition-all duration-300">
                            <FaTwitter size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#fe3e01] hover:text-white hover:border-[#fe3e01] transition-all duration-300">
                            <FaGooglePlusG size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#fe3e01] hover:text-white hover:border-[#fe3e01] transition-all duration-300">
                            <FaLinkedinIn size={14} />
                        </a>
                    </div>
                </div>

              
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <span className="w-8 h-[2px] bg-[#fe3e01]"></span>
                        <h3 className="font-semibold text-lg">Keep In Touch</h3>
                    </div>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="text-[#fe3e01] mt-1" />
                            <span>38-2 Hilton Street, California, USA</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaPhoneAlt className="text-[#fe3e01]" />
                            <span>(+01) 123 456 7890</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaEnvelope className="text-[#fe3e01]" />
                            <span>info@dvents.org</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaClock className="text-[#fe3e01]" />
                            <span>Mon - Fri 9.00 am - 6.00 pm</span>
                        </li>
                    </ul>
                </div>

                
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <span className="w-8 h-[2px] bg-[#fe3e01]"></span>
                        <h3 className="font-semibold text-lg">Events Gallery</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="aspect-square bg-gray-800 overflow-hidden rounded-sm group">
                                <img
                                    src={`https://picsum.photos/100/100?random=${item}`}
                                    alt="Gallery"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <span className="w-8 h-[2px] bg-[#fe3e01]"></span>
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                        <ul className="space-y-3">
                            <li className="flex items-center hover:text-[#fe3e01] cursor-pointer"><FaCaretRight className="mr-1" /> Our Services</li>
                            <li className="flex items-center hover:text-[#fe3e01] cursor-pointer"><FaCaretRight className="mr-1" /> About Dvents</li>
                            <li className="flex items-center hover:text-[#fe3e01] cursor-pointer"><FaCaretRight className="mr-1" /> News Blog</li>
                            <li className="flex items-center hover:text-[#fe3e01] cursor-pointer"><FaCaretRight className="mr-1" /> Get In Touch</li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex items-center hover:text-[#fe3e01] cursor-pointer"><FaCaretRight className="mr-1" /> Our Team</li>
                            <li className="flex items-center hover:text-[#fe3e01] cursor-pointer"><FaCaretRight className="mr-1" /> Clients List</li>
                            <li className="flex items-center hover:text-[#fe3e01] cursor-pointer"><FaCaretRight className="mr-1" /> Brochure</li>
                        </ul>
                    </div>
                </div>
            </div>

         
            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
                <p>© 2026 ClubNest. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;