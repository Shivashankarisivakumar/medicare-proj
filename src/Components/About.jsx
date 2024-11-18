import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AboutImg from '../assets/about.jpg'
const About = () => {
  return (
    <div className="flex flex-col-reverse z-[-1] md:flex-row w-full h-auto md:h-screen justify-evenly p-4 md:p-0">
  
    {/* About Text Section */}
    <div className="flex flex-col w-full md:w-[600px] gap-6 p-4 md:p-5">
      <h2 className="text-lg md:text-2xl font-semibold text-bs-primary flex gap-1">
        ABOUT US <span><IoRemoveOutline className="text-2xl md:text-4xl text-bs-primary" /></span>
      </h2>
      <h1 className="font-jost font-bold text-2xl md:text-4xl text-bs-dark leading-[2rem] md:leading-[3rem]">
        The World's Best Clinic That You Can Trust
      </h1>
      <p className="text-sm md:text-base text-bs-gray leading-7 md:leading-[2rem]">
        Welcome to Medicare, where compassionate care meets medical excellence. Our experienced team is dedicated to providing high-quality healthcare services, ensuring your well-being is our priority. Join us for personalized care and innovative treatments that put your health first.
      </p>
  
      <div className="flex flex-col md:flex-row font-jost text-sm md:text-base font-medium text-bs-gray-dark gap-6 md:gap-10">
        {/* Left Column of Check Items */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-bs-primary" />
            <span>Award Winning</span>
          </div>
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-bs-primary" />
            <span>24/7 Opened</span>
          </div>
        </div>
        
        {/* Right Column of Check Items */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-bs-primary" />
            <span>Professional Staff</span>
          </div>
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-bs-primary" />
            <span>Fair Prices</span>
          </div>
        </div>
      </div>
  
      <button className="bg-bs-primary w-full md:w-[230px] py-3 rounded-md text-base text-bs-white hover:bg-bs-secondary">
        Make Appointment
      </button>
    </div>
  
    {/* Image Section */}
    <div className="w-full md:w-[430px] h-[300px] md:h-[520px] flex justify-center">
      <img src={AboutImg} className="w-full h-full object-cover" alt="About Us Image" />
    </div>
  </div>
  
  )
}

export default About