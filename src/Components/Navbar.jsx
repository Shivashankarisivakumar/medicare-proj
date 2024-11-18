
import React, { useState } from "react";
import { FaClinicMedical } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-bs-gray-dark shadow-lg sticky top-0 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 px-6">
          {/* Logo or Brand */}
          <div className="logo text-2xl  font-bold flex justify-center items-center  text-bs-primary">
            <h1 className=""><FaClinicMedical className='md:text-4xl'/> </h1>
            <h2 className="hidden md:block relative top-1 font-jost text-3xl">MediCare</h2>
          </div>

          {/* Desktop Menu */}
        <div className="flex gap-5 items-center">
           <div className="hidden md:flex space-x-8 text-[15px] font-medium">
                <a href="#home" className="hover:text-bs-secondary">Home</a>
                <a href="#About" className="hover:text-bs-secondary">About</a>
                <a href="#services" className="hover:text-bs-secondary">Services</a>
                <a href="#contact" className="hover:text-bs-secondary">Contact</a>
            </div>

            <div className="hidden md:flex">
                <button  className="w-40 h-10 bg-bs-primary text-white rounded hover:bg-bs-secondary ">Appointment</button>
            </div> 
        </div>
            

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center bg-bs-light">
          <a href="#home" className="block px-4 py-2 hover:text-bs-secondary">Home</a>
          <a href="#about" className="block px-4 py-2 hover:text-bs-secondary">About</a>
          <a href="#services" className="block px-4 py-2 hover:text-bs-secondary">Services</a>
          <a href="#contact" className="block px-4 py-2 hover:text-bs-secondary">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
