import React from "react";

export default function Adver() {
  return (
    <section className="relative min-h-[350px] flex items-center justify-center bg-yellow-500 overflow-hidden">
      {/* Top Left Circle */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-40 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      {/* Bottom Right Circle */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Ready for a Fresh Cut?
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
          Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-yellow-400 font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-100 transition-colors">
            Book an Appointment
          </button>
          <button className="bg-[#1b1b1b] text-yellow-400 font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-500 hover:text-[#1b1b1b] transition-colors">
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
