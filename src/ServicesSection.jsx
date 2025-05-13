import React from "react";
import { Scissors, Brush, Sparkles } from "lucide-react";

const services = [
  {
    title: "Haircuts",
    icon: <Scissors className="text-cyan-400 w-8 h-8" />,
    description:
      "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    features: ["Classic Cuts", "Modern Styles"],
  },
  {
    title: "Beard Services",
    icon: <Brush className="text-cyan-400 w-8 h-8" />,
    description:
      "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    features: ["Beard Trims", "Hot Towel Shaves"],
  },
  {
    title: "Premium Services",
    icon: <Sparkles className="text-cyan-400 w-8 h-8" />,
    description:
      "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    features: ["Hair Coloring", "Scalp Treatments"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-3 relative group">
          <span className="relative inline-block">Our Barber Services</span>
          <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full rounded-full w-0"></div>
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-xl p-6 border border-transparent hover:border-yellow-500 transition duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#222] rounded-md mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
