import ServicesImg from '../assets/serg.jpg'
import childImg from '../assets/child.jpg'
import dentImg from '../assets/dent.png'
import { MdOutlineHorizontalRule } from "react-icons/md";
const Services = () => {
  return (
<main className="w-full h-screen max-w-[1200px] relative z-[-1] top-[200px] flex flex-col md:flex-row gap-14 px-6 md:px-12">

    <div className="relative">
        <img src={ServicesImg} className="w-full md:w-[500px] h-[400px] object-cover"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
    </div>
    <div className="flex flex-col gap-3 relative">
        <h2 className="text-2xl font-medium flex items-center text-bs-primary">
            Our Services <MdOutlineHorizontalRule id="line"/>
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-9 text-bs-dark">
            We Offer The Best Quality Services
        </h1>

        <div className="flex flex-col md:flex-row gap-10 relative top-3">
       
            <figure className="relative flex justify-center items-center text-black max-w-full md:max-w-[400px] w-full h-[300px] overflow-hidden" data-aos="zoom-in-right">
                <div className=" w-full h-full">
                    <img src={childImg} className="w-full h-full object-cover transition-transform duration-200 transform hover:scale-110"/>
                </div>
                <figcaption className="absolute bottom-0 w-full bg-opacity-90 bg-bs-light text-center py-4 font-jost font-semibold text-lg">
                    <p>Pediatrician</p>
                </figcaption>
            </figure>

            <figure className=" relative flex justify-center items-center text-black max-w-full md:max-w-[400px] w-full h-[300px] overflow-hidden" data-aos="zoom-in-left">
                <div className=" w-full h-full">
                    <img src={dentImg} className="w-full h-full object-cover transition-transform duration-200 transform hover:scale-110"/>
                </div>
                <figcaption className="absolute bottom-0 w-full bg-opacity-90 bg-bs-light text-center py-4 font-jost font-semibold text-lg">
                    <p>Dentist</p>
                </figcaption>
            </figure>
        </div>
    </div>
</main>


  )
}

export default Services