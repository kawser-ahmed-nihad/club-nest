import React from "react";
import centerImg from "../../../assets/pexels2.jpg";
import img1 from "../../../assets/hannah.jpg";
import img2 from "../../../assets/pexels-fauxels.jpg";
import img3 from "../../../assets/pexels-fauxel.jpg";
import img4 from "../../../assets/hannah.jpg";

const Services = () => {
  return (
    <div className="py-20 bg-[#f7f7f7]">
      {/* Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl text-gray-500">
          <span className="text-[#fe3e01]">ClubNest</span> Services
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We help you discover clubs, manage events, and grow communities
          with powerful and easy-to-use tools.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center px-6">

        {/* Left Side */}
        <div className="space-y-10">
          <ServiceCard
            image={img1}
            title="Social Clubs"
            text="Connect with local communities and meet like-minded people."
          />
          <ServiceCard
            image={img2}
            title="Tech Meetups"
            text="Organize and manage tech-focused events seamlessly."
          />
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={centerImg}
            alt=""
            className="rounded-2xl shadow-xl -mt-16 object-cover h-[650px] w-full"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-10">
          <ServiceCard
            image={img3}
            title="Workshops"
            text="Create educational sessions and manage registrations easily."
          />
          <ServiceCard
            image={img4}
            title="Community Events"
            text="Host memorable events and grow your member base."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, text }) => {
  return (
    <div className="flex flex-col max-w-7xl px-6 mx-auto gap-6 items-start group">
      <img
        src={image}
        alt=""
        className="w-full h-56 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-700 ">
          {title}
        </h3>
        <p className="text-gray-500 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Services;