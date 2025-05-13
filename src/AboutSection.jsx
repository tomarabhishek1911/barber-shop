import React from "react";
import aboutImage from "./assets/about.jpg"; // Replace with your actual image path
import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-24 after:bg-yellow-500 after:rounded-full">
          About Fama Barbershop
        </h2>

        {/* Intro paragraph */}
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-400 text-lg">
          Established in 2018, Fama Barber Shop and Beauty Salon has been
          providing premium grooming services to the men of Denton, TX. Our
          mission is to deliver exceptional haircuts and grooming services in a
          welcoming, classic barbershop environment.
        </p>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image with badge */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Fama Barbershop exterior"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-lg text-sm">
              5+ years
            </div>
          </div>

          {/* Right-side paragraph & quote */}
          <div>
            <div className="border-l-2 border-yellow-500 pl-4 text-gray-400 mb-6 text-base sm:text-lg">
              Established in 2018, Fama Barber Shop has been providing premium
              grooming services to the men of Denton, TX. Our mission is to
              deliver exceptional haircuts and grooming services in a welcoming,
              classic barbershop environment.
            </div>

            <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-sm">
              <p className="text-yellow-500 text-2xl mb-2 leading-none">“</p>
              <p className="text-gray-400 text-base sm:text-lg">
                We take pride in our attention to detail and personalized
                service, ensuring each client leaves looking and feeling their
                best. Our skilled barbers combine traditional techniques with
                modern trends to create custom styles that suit each
                individual's personality and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
