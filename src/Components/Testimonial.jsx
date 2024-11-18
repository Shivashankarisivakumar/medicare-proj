import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import testimonial1 from "../Assets/testimonial1.jpg"
import testimonial2 from "../Assets/testimonial2.jpg"
import testimonial3 from "../Assets/testimonial3.jpg"
import testimonial4 from "../Assets/testimonial4.jpg"

// Sample testimonials array with 5 different reviews
const testimonials = [
    {
        src: testimonial1,
        text:  "Dr. Smith was incredible throughout my pregnancy. She provided me with exceptional care and made sure I was comfortable and informed at every stage. I couldn't have asked for a better experience during my first pregnancy!",
        name: "Marry Laura"
    },
    {
        src: testimonial2,
        text: "After suffering from chronic back pain for years, I finally found relief with Dr. Williams. His thorough diagnosis and treatment plan have significantly improved my quality of life. Highly recommend him!",
        name: "john"
    },
    {
        src: testimonial3,
        text: "Dr. Lee’s office is fantastic. The hygienists are gentle and thorough, and Dr. Lee always takes the time to discuss my dental health in detail. I trust him completely with my dental care.",
        name: "Saul goodman"
    },
    {
        src: testimonial4,
        text: "Dr. Taylor has been our pediatrician since my daughter was born. She is incredibly knowledgeable and always takes the time to answer all of our questions. My kids love her, and we trust her completely with their care.",
        name: "Sara wilson"
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className=" bg-testimonial py-5 my-8 flex justify-center flex-col items-center w-full ">
             <h1 className='text-bs-primary font-semibold text-4xl font-jost'>Client Reviews</h1>
            <div className="container mx-auto py-5">
                <div className="flex justify-center">
                    <div className="max-w-2xl rounded-lg p-5 bg-bs-light text-bs-dark text-center">
                        <img
                            src={testimonials[currentIndex].src}
                            alt="Client"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
                        <hr className="mx-auto w-1/4 border-white mb-4" />
                        <h4 className="text-bs-secondary text-xl font-semibold">{testimonials[currentIndex].name}</h4>
                        <div className="flex justify-center gap-8 mt-4">
                            <button onClick={prevSlide} className="text-2xl  text-bs-gray-dark mx-2">
                                <FaArrowLeft />
                            </button>
                            <button onClick={nextSlide} className="text-2xl text-bs-gray-dark mx-2">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
