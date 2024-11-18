import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="w-full bg-bs-light">
        {/* Email Section */}
        <div className="flex justify-center items-center bg-bs-primary py-10 mt-20">
            <div className="flex w-11/12 md:w-3/4 max-w-[600px] justify-center items-center gap-4">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full max-w-[400px] h-12 p-4 text-base bg-white text-gray-700 rounded-md outline-none"
                />
             <button className="bg-bs-dark text-white py-2 px-6 md:px-8 md:py-3 w-auto sm:w-[200px] text-xs  md:w-[250px] rounded-md hover:bg-bs-secondary">
                     Sign Up
            </button>


            </div>
        </div>

        {/* Footer Links Section */}
        <div className="bg-bs-dark text-bs-light py-20">
            <div className="flex flex-col md:flex-row justify-center gap-16 px-4 md:px-20">
                {/* Quick Links */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-xl font-bold">Quick Links</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Home
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> About Us
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Our Services
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Latest Blog
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Contact Us
                        </li>
                    </ul>
                </div>

                {/* Popular Links */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-xl font-bold">Popular Links</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Home
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> About Us
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Our Services
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Latest Blog
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-bs-secondary transition-all duration-300">
                            <HiOutlineArrowLongRight className="text-bs-cyan text-lg" /> Contact Us
                        </li>
                    </ul>
                </div>

                {/* Get In Touch */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-xl font-bold">Get In Touch</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3">
                            <IoLocationOutline className="text-bs-cyan text-lg" /> 123 Street, New York, USA
                        </li>
                        <li className="flex items-center gap-3">
                            <IoMailOpenSharp className="text-bs-cyan text-lg" /> Medicare@gmail.com
                        </li>
                        <li className="flex items-center gap-3">
                            <FiPhoneCall className="text-bs-cyan text-lg" /> +0987654321
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-xl font-bold">Follow Us</h2>
                    <div className="flex gap-4">
                        <FaTwitter className="text-bs-primary text-2xl cursor-pointer hover:text-bs-secondary" />
                        <FaFacebookF className="text-bs-primary text-2xl cursor-pointer hover:text-bs-secondary" />
                        <FaLinkedinIn className="text-bs-primary text-2xl cursor-pointer hover:text-bs-secondary" />
                        <FaInstagram className="text-bs-primary text-2xl cursor-pointer hover:text-bs-secondary" />
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-[#010814] text-bs-light py-4 flex justify-between items-center px-4">
            <p className="text-sm flex items-center">
                <LiaCopyrightSolid className="text-lg mr-2" /> Medicare. All Rights Reserved
            </p>
            <p className="text-sm">Created by Shivashangari Sivakumar</p>
        </div>
    </footer>
  );
};

export default Footer;
