import React from 'react'
import { IoMdTime } from "react-icons/io";
import { RiMailOpenFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className='hidden md:flex justify-between h-[40px] w-full bg-bs-light  px-6 '>

    <div className='flex items-center gap-1 text-bs-gray text-[14px]'>
      <IoMdTime className='text-bs-primary text-[23px]' />
      <p className='font-light pt-1'>Opening Hours: Mon-Sat: 6.00 am - 10.00pm, Sunday Closed</p>
    </div>
  

    <div className='flex items-center gap-4 text-bs-gray'>

      <div className='flex items-center gap-1'>
        <RiMailOpenFill className='text-bs-primary text-[23px]' />
        <p className='font-light text-[14px]'>Medicare@gmail.com</p>
      </div>
  
      <div className='flex justify-center items-center gap-1'>
        <FaPhoneAlt className='text-bs-primary text-[20px]' />
        <p className='font-light text-[14px]'>+0198765432</p>
      </div>
    </div>
  </header>
  
  
  )
}

export default Header