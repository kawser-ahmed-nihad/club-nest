import React from 'react';

import logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
const Navbar = () => {

    const { loading, user ,logOut } = useAuth()

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!",
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
                Swal.fire("Logged out!", "", "success");
            }
        });
    };


    return (
        <div className='bg-white shadow'>
            <nav className=' flex items-center justify-between py-4 px-6 border-b  border-gray-100 max-w-7xl mx-auto'>
                <div className=' flex items-center space-x-2'>
                    <svg width="43" height="33" viewBox="0 0 53 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5 27.0752C37.5 20.4478 32.1274 15.0752 25.5 15.0752H15.5V27.0752H25.5V42.0752H37.5V27.0752Z" fill="#FF4D00"></path>
                        <path d="M0.5 28.0752C0.500001 35.8072 6.76801 42.0752 14.5 42.0752L22.5 42.0752L22.5 30.0752H14.5C13.3954 30.0752 12.5 29.1798 12.5 28.0752V27.0752L0.5 27.0752L0.5 28.0752Z" fill="#FF4D00"></path>
                        <path d="M25.5 0.0751953C40.4117 0.0751953 52.5 12.1635 52.5 27.0752V42.0752H40.5V27.0752C40.5 18.7909 33.7843 12.0752 25.5 12.0752H14.5C13.3954 12.0752 12.5 12.9706 12.5 14.0752V15.0752H0.500001V14.0752C0.500002 6.34321 6.76802 0.0751953 14.5 0.0751953H25.5Z" fill="#FF4D00"></path>
                    </svg>
                    <h1 className=' font-bold text-2xl'>ClubNest</h1>
                </div>

                <ul className=' md:flex space-x-5 hidden'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#fe3e01] font-semibold"
                                    : "text-gray-600"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/clubs"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#fe3e01] font-semibold"
                                    : "text-gray-600"
                            }
                        >
                            Clubs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-club"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#fe3e01] font-semibold"
                                    : "text-gray-600"
                            }
                        >
                            Add Club
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#fe3e01] font-semibold"
                                    : "text-gray-600"
                            }
                        >
                            Events
                        </NavLink>
                    </li>
                </ul>

                <div className=' hidden md:flex items-center space-x-3'>

                    <div className=' flex items-center space-x-3'>

                        {

                            loading ?

                                <>
                                    <div className="flex justify-center items-center ">
                                        <div className="w-10 h-10 border-4 border-[#fe3e01] border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                </>

                                : user ? <>

                                    <div>
                                        <img className='w-10 h-10 rounded-full object-cover' src={user.photoURL} alt="" />
                                    </div>

                                    <button
                                    onClick={handleLogOut}
                                        type="submit"
                                        className=" bg-[#fe3e01]  text-white p-3 rounded-md font-semibold transition duration-300"
                                    >
                                        Log Out
                                    </button>

                                </> : <>
                                    <Link
                                        to="/auth/register"
                                        type="submit"
                                        className=" bg-[#fe3e01]  text-white p-3 rounded-md font-semibold transition duration-300"
                                    >
                                        Register
                                    </Link>
                                    <Link
                                        to="/auth/login"
                                        type="submit"
                                        className=" bg-[#fe3e01]  text-white p-3 rounded-md font-semibold transition duration-300"
                                    >
                                        Login
                                    </Link>
                                </>


                        }

                    </div>


                </div>
            </nav>
        </div>
    );
};

export default Navbar;