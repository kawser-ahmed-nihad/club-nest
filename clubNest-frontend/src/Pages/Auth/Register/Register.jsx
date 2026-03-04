import React from 'react';
import logo from '../../../assets/logo.svg'
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUser } = useAuth()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then((res) => {
                updateUser({
                    displayName: data.name,
                    photoURL: data.image,
                })
                    .then(() => {
                        toast.success("Registration Successful!");
                        reset();
                        navigate("/auth/login");
                    })

            })
            .catch((error) => {
                toast.error(error.message);
            });
    }



    return (
        <div className='w-full max-w-md pt-8'>
            <ToastContainer />
            <div className="flex justify-end gap-2 items-center mb-8">
                <svg width="43" height="33" viewBox="0 0 53 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5 27.0752C37.5 20.4478 32.1274 15.0752 25.5 15.0752H15.5V27.0752H25.5V42.0752H37.5V27.0752Z" fill="#FF4D00"></path>
                    <path d="M0.5 28.0752C0.500001 35.8072 6.76801 42.0752 14.5 42.0752L22.5 42.0752L22.5 30.0752H14.5C13.3954 30.0752 12.5 29.1798 12.5 28.0752V27.0752L0.5 27.0752L0.5 28.0752Z" fill="#FF4D00"></path>
                    <path d="M25.5 0.0751953C40.4117 0.0751953 52.5 12.1635 52.5 27.0752V42.0752H40.5V27.0752C40.5 18.7909 33.7843 12.0752 25.5 12.0752H14.5C13.3954 12.0752 12.5 12.9706 12.5 14.0752V15.0752H0.500001V14.0752C0.500002 6.34321 6.76802 0.0751953 14.5 0.0751953H25.5Z" fill="#FF4D00"></path>
                </svg>
                <h2 className="text-black font-bold text-xl">ClubNest</h2>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold leading-snug mb-3">
                All Your Clubs. One Smart Platform <br /> Register platform.
            </h1>

            <p className="text-gray-500 mb-3">
                Create clubs, manage events, accept memberships, and connect with members seamlessly using ClubNest.
            </p>

            {/* Tabs */}
            <div className="flex gap-6 mb-5">
                <button

                    className="pb-2 border-b-2 transition border-[#fe3e01] text-black font-semibold  "
                >
                    Register
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <input
                    type="text"
                    placeholder="Image link"
                    {...register("image")}
                    className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    {...register("name", {
                        required: "Name is required"
                    })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}


                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                    })}

                    placeholder="E-mail Address"
                    className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}

                <input
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                    })}


                    placeholder="Password"
                    className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                />
                {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}

                <button
                    type="submit"
                    className="w-full bg-[#fe3e01]  text-white py-3 rounded-md font-semibold transition duration-300"
                >
                    Register
                </button>

                <p className="">Already have an account? <Link to="/auth/login" className="text-blue-500 underline">Log In</Link></p>
            </form>
            <div className="mt-6 text-center text-gray-500 text-sm">
                Or continue with
            </div>

            <div className="pb-20">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;