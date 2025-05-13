import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#232323] text-gray-400 pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Social */}
        <div>
          <div className="flex items-center mb-2">
            {/* Logo placeholder */}
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-8 h-8 mr-2 rounded"
            />
            <span className="text-white text-lg font-semibold">Company</span>
          </div>
          <div className="text-white text-sm mb-4">Logo</div>
          <div className="mb-4">Classic cuts with modern style</div>
          <div className="flex space-x-3 mt-3">
            {/* Instagram */}
            <a
              href="#"
              className="bg-yellow-600/30 hover:bg-yellow-500/60 text-yellow-500 rounded-full p-2 transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="bg-yellow-600/30 hover:bg-yellow-500/60 text-yellow-500 rounded-full p-2 transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 2.1V4.8c0 .6-.4 1-1 1h-2.1c-.6 0-1 .4-1 1v2.1h3.1c.6 0 1 .4 1 1v2.1c0 .6-.4 1-1 1h-3.1v7.1c0 .6-.4 1-1 1h-2.1c-.6 0-1-.4-1-1v-7.1H6.1c-.6 0-1-.4-1-1V9.9c0-.6.4-1 1-1h2.1V6.1c0-2.2 1.8-4 4-4h2.1c.6 0 1 .4 1 1z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="flex items-start mb-2">
            <svg
              className="w-5 h-5 text-yellow-500 mr-2 mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            <span>
              518 Acme St unit 101, Denton, TX 76205, United States
            </span>
          </div>
          <div className="ml-7">
            <a
              href="tel:+19408081569"
              className="hover:text-yellow-500 transition-colors"
            >
              +19408081569
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="mb-3">
            Subscribe to our newsletter to receive updates and news.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-md px-3 py-2 bg-transparent border border-gray-400 text-white focus:border-yellow-500 outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-[#232323] font-semibold rounded-md py-2 hover:bg-yellow-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-6"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-3">
        <div>
          © 2023 PMC Barbershop.{" "}
          <span className="text-gray-500">All rights reserved.</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Services
          </a>
        </div>
      </div>
    </footer>
  );
}
