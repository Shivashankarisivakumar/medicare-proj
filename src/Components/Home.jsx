import React, { useEffect, useState } from 'react';

// Array of background images
const backgrounds = [
  '../../Assets/bg-img2.jpg',
  '../../Assets/doctor-bg.jpeg',
  '../../Assets/bg-4.jpg',
  '../../Assets/bg-5.jpg',
  '../../Assets/bg-3.jpg',
];

const Banner = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // Change background image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="Banner relative w-full h-[70vh] z-[-1] overflow-hidden bg-cover bg-center md:h-[90vh]"
      style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,55,99,0.85)] to-[rgba(0,0,0,0.7)]"></div>

      {/* Main Content */}
      <div className="relative text-center top-28 text-white flex flex-col items-center px-4 md:px-0 gap-5">
        <h3 className="text-sm md:text-xl font-medium uppercase">Your Health, Our Priority</h3>
        <h1 className="text-3xl font-semibold md:text-5xl lg:text-6xl font-jost leading-tight md:w-3/5">
          Innovative Solutions for Better Health...
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-5 gap-3 md:gap-8">
          <button className="bg-bs-primary text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-medium hover:bg-secondary transition duration-500 ease-in-out">
            Appointment
          </button>
          <button className="bg-bs-secondary text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-medium hover:bg-primary transition duration-500 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
