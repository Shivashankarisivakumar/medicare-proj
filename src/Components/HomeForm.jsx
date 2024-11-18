import React from 'react'

const HomeForm = () => {
  return (
  
    <div className="flex flex-col z-[-1] md:flex-row mx-auto md:justify-center relative bottom-20">
  
             {/* Opening Hours Section */}
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 h-[300px] w-full md:w-[330px] bg-bs-primary text-bs-white p-4 md:p-6">
      <h3 className="font-semibold text-xl md:text-3xl">Opening Hours</h3>
      
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex justify-between gap-4 text-base md:text-lg">
          <p>Mon-Fri</p>     
          <p>8:00am - 9:00pm</p>
        </div>
        
        <div className="flex justify-between gap-4 text-base md:text-lg">
          <p>Saturday</p>     
          <p>8:00am - 7:00pm</p>
        </div>
  
        <div className="flex justify-between gap-4 text-base md:text-lg">
          <p>Sunday</p>     
          <p>8:00am - 5:00pm</p>
        </div>
      </div>
  
      <button className="bg-bs-white text-bs-gray-dark text-sm md:text-base font-medium py-2 px-6 md:px-8 rounded">
        Appointment
      </button>
    </div>
    
    {/* Search Doctor Section */}
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 h-[300px] w-full md:w-[330px] bg-bs-dark text-bs-white p-4 md:p-6">
      <h3 className="font-semibold text-xl md:text-3xl">Search Doctor</h3>
      <input type="date" className="outline-0 text-bs-gray text-sm p-2 w-full md:w-[250px]" />
      
      <select name="" className="outline-0 text-bs-gray-dark text-sm p-2 w-full md:w-[250px]">
        <option value="">Select a Service</option>
        <option value="">Baby Care</option>
        <option value="">General Specialist</option>
        <option value="">Orthologist</option>
        <option value="">Dentist</option>
      </select>
  
      <button className="bg-bs-white text-bs-gray-dark text-sm md:text-base font-medium py-2 px-6 md:px-8 rounded">
        Search Doctor
      </button>
    </div>
    
    {/* Make Appointment Section */}
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 h-[300px] w-full md:w-[330px] bg-bs-secondary text-bs-white p-4 md:p-6">
      <h3 className="font-semibold text-xl md:text-2xl">Make Appointment</h3>
      <p className="text-base md:text-lg leading-relaxed text-center">
        Personalized care starts with your appointment. Dedicated to providing you timely medical attention.
      </p>
      <h1 className="text-2xl md:text-3xl font-bold">+012 345 6789</h1>
    </div>
  
  </div>
  

  )
}

export default HomeForm