// LocationSection.jsx

import { FaPhoneAlt, FaMapMarkerAlt, FaDirections } from "react-icons/fa";

const LocationSection = () => {
  return (
    <section className="bg-[#111] text-white py-12 px-4 md:px-16" id="location">
      <div className="text-center mb-10">
        <p className="text-yellow-400 uppercase">Visit Our Shop</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Location</h2>
        <p className="text-gray-400">Conveniently located in Denton, TX:</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Map Placeholder */}
        <div className="bg-[#1a1a1a] h-72 md:h-96 rounded-xl flex items-center justify-center">
          <FaMapMarkerAlt className="text-gray-600 text-5xl" />
        </div>

        {/* Contact Info */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 border-b border-yellow-500 inline-block pb-1">
            Contact Information
          </h3>

          {/* Address */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaMapMarkerAlt className="text-black text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-white">Address</h4>
              <p className="text-gray-400">
                518 Acme St unit 101, Denton, TX 76205, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaPhoneAlt className="text-black text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-white">Phone</h4>
              <p className="text-gray-400">+1 940-808-1569</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.google.com/maps?q=518+Acme+St+unit+101,+Denton,+TX+76205"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold text-center"
            >
              <FaDirections className="inline mr-2" />
              Get Directions
            </a>
            <a
              href="tel:+19408081569"
              className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg font-semibold text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
