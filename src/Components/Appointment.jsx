import React from 'react'
import '../App.css'
const Appointment = () => {
  return (
    <section className="Appointment w-full h-[150vh]  md:h-[80vh] relative top-[50px] z-[-1] ">
    <div className="overlay w-full h-full justify-evenly absolute flex flex-col md:flex-row items-center px-6 md:px-14">
        
        <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-5 mb-6 md:mb-0">
            <h1 className='text-2xl md:text-5xl leading-8 md:leading-[3.45rem] text-bs-white font-jost font-bold'>
                We Are A Certified and Award Winning Clinic You Can Trust
            </h1>
            <p className='text-bs-white text-sm md:text-base font-light leading-6 md:leading-[1.75rem]'>
                We are a certified and award-winning clinic, trusted by our patients and peers. Our commitment to excellence in healthcare has earned us numerous accolades and certifications. With a team of highly qualified professionals, we ensure the highest standards of medical care. You can rely on us for comprehensive and compassionate healthcare services. Your well-being is our priority.
            </p>
        </div>

        
        <div className="Appoin-form w-full md:w-[500px] h-auto md:h-[80vh] flex flex-col items-center justify-center gap-6 md:gap-10 p-4 md:p-0 bg-opacity-90 md:bg-transparent bg-gradient-to-br from-blue-500 to-blue-300 rounded-md md:rounded-none">
            <h1 className='text-bs-white font-jost text-2xl md:text-4xl font-bold p-2'>Make Appointment</h1>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <select className='text-base text-bs-gray w-full md:w-[200px] h-[45px] p-2 rounded outline-0'>
                    <option>Select A Service</option>
                    <option>Baby Care</option>
                    <option>General Care</option>
                    <option>Health Checkup</option>
                    <option>Dentist</option>
                    <option>Orthologist</option>
                    <option>Cardiologist</option>
                </select>

                <select className='text-base text-bs-gray w-full md:w-[200px] h-[45px] p-2 rounded outline-0'>
                    <option>Select A Doctor</option>
                    <option>Dr. William</option>
                    <option>Dr. Elizabeth</option>
                    <option>Dr. John</option>
                    <option>Dr. Henry</option>
                    <option>Dr. Charles</option>
                    <option>Dr. James</option>
                </select>
            </div>

            <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'>
                <input type="text" placeholder='Your Name' className='text-base h-[45px] p-2 text-bs-gray w-full md:w-[200px] rounded outline-0'/>
                <input type="email" placeholder='Your Email' className='text-base h-[45px] p-2 text-bs-gray w-full md:w-[200px] rounded outline-0'/>
            </div>

            <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'>
                <input type="date" className='text-base h-[45px] p-2 text-bs-gray w-full md:w-[200px] rounded outline-0'/>
                <input type="time" className='text-base h-[45px] p-2 text-bs-gray w-full md:w-[200px] rounded outline-0'/>
            </div>

            <button className='w-full md:w-[300px] h-12 bg-bs-dark text-bs-white'>
                Make Appointment
            </button>
        </div>
    </div>
</section>


  )
}

export default Appointment