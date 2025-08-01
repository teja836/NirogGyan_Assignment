

import React, { useEffect, useState } from "react";
import doctorImage from "../assets/image.jpeg";


const DoctorsHomepage = ({ onFindDoctor }) => {
  // Typing animation for heading
  const fullText = "Book Your Appointment with Top Doctors";
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    // Calculate speed so the full heading types in < 1s
    const typeSpeed = Math.max(10, 900 / fullText.length); // ~900ms for full text
    const deleteSpeed = Math.max(5, 400 / fullText.length); // ~400ms for delete
    if (!isDeleting && typingIndex < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, typeSpeed);
    } else if (typingIndex === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 400);
    } else if (isDeleting && typingIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typingIndex - 1));
        setTypingIndex(typingIndex - 1);
      }, deleteSpeed);
    } else if (isDeleting && typingIndex === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [typedText, typingIndex, isDeleting, fullText]);

  return (
    <>
      <div id="home" className="px-6 py-12 min-h-[60vh] bg-blue-600 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
        {/* Left: Heading and Paragraph */}
        <div className="flex-1 max-w-xl text-left px-2 md:px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 min-h-[3.5rem]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-white text-lg sm:text-xl">
            Welcome to DoctorDesk! Your health is our priority. Find the best specialists, check their availability, and book your appointment in just a few clicks. Experience hassle-free healthcare and get the care you deserve—anytime, anywhere.
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-blue-50 transition text-lg"
            onClick={onFindDoctor}
          >
            Find a Doctor
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={doctorImage}
            alt="Doctor Desk Home"
            className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      {/* About Us Section */}
      <div id="about" className="w-full bg-white py-14 px-2 sm:px-6 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-8">About Us</h2>
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center px-2 md:px-4">
          {/* Card 1: Most Trusted Doctors */}
          <div className="flex-1 bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center min-w-[250px] max-w-xs">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              {/* Shield Check Icon */}
              <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Most Trusted Doctors</h3>
            <p className="text-gray-700">Connect with highly qualified and experienced doctors, handpicked for their expertise and patient trust.</p>
          </div>
          {/* Card 2: 24/7 Service */}
          <div className="flex-1 bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center min-w-[250px] max-w-xs">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              {/* 24/7 Clock Icon */}
              <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                <text x="7" y="20" fontSize="4" fill="currentColor">24/7</text>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">24/7 Service</h3>
            <p className="text-gray-700">Access healthcare support and consultations anytime, anywhere—day or night, we’re here for you.</p>
          </div>
          {/* Card 3: Long Term Goal */}
          <div className="flex-1 bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center min-w-[250px] max-w-xs">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              {/* Target/Goal Icon */}
              <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Long Term Goal</h3>
            <p className="text-gray-700">We aim to become India’s most reliable online healthcare consultation platform.</p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div id="contact" className="w-full bg-blue-600 py-14 px-2 sm:px-6 flex flex-col items-center mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Contact</h2>
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-start px-2 md:px-4">
          {/* Contact Details */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-2">Contact Details</h3>
            <ul className="text-white text-base space-y-2">
              <li><span className="font-semibold">Phone:</span> +91 98765 43210</li>
              <li><span className="font-semibold">Email:</span> support@doctorsdesk.in</li>
              <li><span className="font-semibold">Helpline:</span> 1800-123-4567 (24/7)</li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-2">Connect with us</h3>
            <div className="flex gap-4 mt-2">
              {/* Instagram */}
              <a href="https://instagram.com/doctorsdesk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/doctorsdesk" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-300 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 8h-2a2 2 0 0 0-2 2v2h4l-.5 3h-3.5v7"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M16.5 15.5c-1.1.7-2.4 1.1-3.8 1.1-3.3 0-6-2.7-6-6 0-1.4.4-2.7 1.1-3.8l-1.1-3.3 3.3 1.1c1.1-.7 2.4-1.1 3.8-1.1 3.3 0 6 2.7 6 6 0 1.4-.4 2.7-1.1 3.8z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/doctorsdesk" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-gray-300 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M7 17L17 7M7 7l10 10"/>
                </svg>
              </a>
            </div>
          </div>
          {/* About DoctorsDesk */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">About DoctorsDesk</h3>
            <p className="text-white text-base">DoctorsDesk is dedicated to making healthcare accessible, reliable, and convenient for everyone. Our platform connects patients with top doctors, offers 24/7 support, and ensures a seamless consultation experience from the comfort of your home.</p>
          </div>
        </div>
        {/* Terms, Privacy, Rights */}
        <div className="w-full max-w-4xl border-t border-blue-200 mt-10 pt-6 px-2 md:px-4 flex flex-col md:flex-row gap-4 justify-between items-center text-white text-xs opacity-80">
          <div>
            <span className="font-semibold">Terms & Privacy:</span> By using DoctorsDesk, you agree to our <a href="#" className="underline hover:text-blue-300">Terms of Service</a> and <a href="#" className="underline hover:text-blue-300">Privacy Policy</a>.
          </div>
          <div>
            &copy; {new Date().getFullYear()} DoctorsDesk. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsHomepage;


