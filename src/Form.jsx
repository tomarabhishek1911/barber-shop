import React from "react";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400">
        {/* Left info panel */}
        <div className="space-y-10 bg-[#222222] p-8 rounded-lg shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-[#1b1b1b]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9a5 5 0 1110 0c0 2.5-2.5 6.5-5 9-2.5-2.5-5-6.5-5-9z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white hover:text-yellow-500 cursor-default">
                Address
              </h3>
              <p className="text-sm mt-1">
                518 Acme St unit 101, Denton, TX 76205, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-[#1b1b1b]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.1z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white hover:text-yellow-500 cursor-default">
                Phone
              </h3>
              <p className="text-sm mt-1">+1 940-808-1569</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-[#1b1b1b]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white hover:text-yellow-500 cursor-default">
                Business Hours
              </h3>
              <p className="text-sm mt-1">
                Mon-Fri: 9:00 AM - 7:00 PM <br />
                Sat: 9:00 AM - 5:00 PM <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <form className="md:col-span-2 bg-[#222222] p-8 rounded-lg shadow-lg flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-white underline decoration-yellow-500 underline-offset-4">
            Contact Us
          </h2>
          <p className="text-gray-400 mb-4">
            Ready for a fresh look? Book your appointment today or contact us for any questions.
          </p>

          <label className="flex flex-col text-gray-400 hover:text-yellow-500 transition-colors">
            Your Name
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 p-3 rounded-md bg-[#1b1b1b] border border-gray-600 focus:border-yellow-500 outline-none transition-colors hover:border-yellow-500"
            />
          </label>

          <label className="flex flex-col text-gray-400 hover:text-yellow-500 transition-colors">
            Phone Number
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="mt-1 p-3 rounded-md bg-[#1b1b1b] border border-gray-600 focus:border-yellow-500 outline-none transition-colors hover:border-yellow-500"
            />
          </label>

          <label className="flex flex-col text-gray-400 hover:text-yellow-500 transition-colors">
            Service Interested In
            <select
              className="mt-1 p-3 rounded-md bg-[#1b1b1b] border border-gray-600 focus:border-yellow-500 outline-none transition-colors hover:border-yellow-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Haircut</option>
              <option>Coloring</option>
              <option>Styling</option>
              <option>Other</option>
            </select>
          </label>

          <label className="flex flex-col text-gray-400 hover:text-yellow-500 transition-colors">
            Preferred Date
            <input
              type="date"
              className="mt-1 p-3 rounded-md bg-[#1b1b1b] border border-gray-600 focus:border-yellow-500 outline-none transition-colors hover:border-yellow-500"
            />
          </label>

          <label className="flex flex-col text-gray-400 hover:text-yellow-500 transition-colors">
            Message
            <textarea
              placeholder="Tell us about your style preferences or any questions you have"
              rows={5}
              className="mt-1 p-3 rounded-md bg-[#1b1b1b] border border-gray-600 focus:border-yellow-500 outline-none transition-colors hover:border-yellow-500 resize-none"
            />
          </label>

          <button
            type="submit"
            className="self-start bg-yellow-500 text-[#1b1b1b] font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
