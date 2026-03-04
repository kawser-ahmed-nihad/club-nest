import React, { useState } from "react";
import image from "../assets/graphic1.svg";
import { Outlet } from "react-router";

const AuthLayout = () => {
   

    return (
        <div className="flex  overflow-hidden">
            {/* LEFT SIDE */}
            <div className="hidden min-h-screen lg:flex justify-center items-center w-1/2  bg-gray-100">
                <img
                    src={image}
                    alt="team"
                    className="w-80 h-80 object-cover"
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-gray-50 px-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;
