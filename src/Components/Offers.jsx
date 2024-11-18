import React from 'react'
import '../App.css'
const Offers = () => {
  return (
    <div className="w-full h-[90vh] bg-bs-light flex justify-center items-center z-[-1] mt-[800px] md:mt-[100px] relative">
    <div className="Offer-overlay w-[90%] max-w-[600px] h-[80vh] md:h-[400px] rounded-lg shadow-lg flex justify-center items-center p-4 md:p-8 relative">
      
      {/* Background Layer with Glass Effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-lg z-[-1]"></div>
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1 className="text-bs-white font-jost text-3xl md:text-5xl font-bold leading-[2.5rem] md:leading-[3rem] text-center">
          Save 30% On Your First Checkup
        </h1>
        <p className="text-bs-white text-sm md:text-base leading-relaxed text-center md:text-left">
          Save 30% on your first checkup! Get professional and affordable care with a significant discount on your initial visit. Don’t miss this limited-time offer to ensure your health and well-being. Book now!
        </p>
        <div className="flex flex-col items-center md:flex-row justify-center gap-4 md:gap-7 w-full">
          <button className="w-[200px] h-[50px] bg-bs-dark text-bs-white rounded-lg hover:bg-bs-secondary">
            Appointment
          </button>
          <button className="w-[200px] h-[50px] bg-bs-white text-bs-dark rounded-lg hover:bg-bs-secondary">
            Read More
          </button>
        </div>
      </div>
      
    </div>
  </div>
  
  
  




  )
}

export default Offers