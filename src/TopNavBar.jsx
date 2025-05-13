import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TopNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          Fama Barber Shop
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-white hover:text-yellow-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default TopNavBar;
