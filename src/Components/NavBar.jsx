
import React, { useState } from "react";

// Helper to scroll to section by id
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Brand Name */}
      <div className="flex items-center flex-shrink-0">
        <span className="text-xl sm:text-2xl font-bold text-blue-600">DoctorDesk</span>
      </div>


      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden flex items-center ml-2">
        <button
          className="focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu Headings */}
      <div className="hidden sm:flex items-center gap-4 ml-auto">
        <button className="px-3 py-2 rounded text-blue-700 font-semibold hover:bg-blue-50 transition" onClick={() => scrollToSection('home')}>Home</button>
        <button className="px-3 py-2 rounded text-purple-700 font-semibold hover:bg-purple-50 transition" onClick={() => scrollToSection('about')}>About Us</button>
        <button className="px-3 py-2 rounded text-yellow-700 font-semibold hover:bg-yellow-50 transition" onClick={() => scrollToSection('contact')}>Contact</button>
        <button className="px-3 py-2 rounded text-red-700 font-semibold hover:bg-red-50 transition">Login</button>
        {/* Profile Icon Dropdown (optional, can be removed if not needed) */}
        <div className="relative group flex-shrink-0">
          <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center focus:outline-none">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10">
            <ul className="py-1">
              <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button></li>
              <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown/Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30 flex justify-end sm:hidden">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-2 animate-slide-in">
            <button
              className="self-end mb-4 text-2xl text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <button className="text-left px-4 py-2 rounded text-black font-semibold hover:text-blue-600 hover:bg-blue-50 transition" onClick={() => { scrollToSection('home'); setMenuOpen(false); }}>Home</button>
            <button className="text-left px-4 py-2 rounded text-black font-semibold hover:text-purple-700 hover:bg-purple-50 transition" onClick={() => { scrollToSection('about'); setMenuOpen(false); }}>About Us</button>
            <button className="text-left px-4 py-2 rounded text-black font-semibold hover:text-yellow-700 hover:bg-yellow-50 transition" onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}>Contact</button>
            <button className="text-left px-4 py-2 rounded text-black font-semibold hover:text-red-700 hover:bg-red-50 transition">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
