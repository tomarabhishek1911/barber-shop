import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-yellow-400 font-semibold text-lg relative group cursor-pointer">
            Premium Barber Services in Denton
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Classic Cuts, Modern Style
          </h1>
          <h2 className="text-yellow-500 font-bold text-2xl underline underline-offset-4 decoration-yellow-500">
            Fama Barber Shop and Beauty Salon
          </h2>
          <p className="text-gray-300">
            At Fama Barber Shop, we combine traditional barbering techniques with modern styling
            to give you the perfect look. Our experienced barbers deliver precision cuts, beard
            grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
          </p>

          {/* Location and Status */}
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <MapPin className="text-yellow-400" size={18} />
            <span>500 N Bell Ave #109, Denton, TX</span>
            <span className="text-green-400 ml-2">Open ⋅ Closes 7 pm</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Our Services
            </button>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-400 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Book Now
            </button>
            </div>
        </div>

        {/* Right Image Content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/images/barbershop-team.jpg" // Replace with your image path
            alt="Fama Barber Shop Team"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
      {/* Scroll Down Arrow */}
<div className="flex justify-center mt-10">
  <a href="#about" className="animate-bounce text-yellow-400 hover:text-[#FFD700] transition-colors duration-300">
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
</div>

    </section>
  );
};

export default HeroSection;
