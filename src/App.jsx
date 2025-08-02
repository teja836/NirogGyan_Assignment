

import LandingPage from "./Components/LandingPage";
import DoctorProfilePage from "./Components/DoctorProfilePage";
import BookAppointment from "./Components/BookAppointment";


import React, { useState } from "react";


function App() {
  const [page, setPage] = useState("landing");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(null); // {name, datetime}

  // Handler for clicking a doctor card
  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setPage("profile");
  };

  // Handler for going back to landing page
  const handleBack = () => {
    setSelectedDoctor(null);
    setPage("landing");
  };

  // Handler for Book Appointment button
  const handleBook = (doctor) => {
    setSelectedDoctor(doctor);
    setPage("book");
  };

  // Handler for booking form submission
  const handleBookingConfirmed = (form) => {
    setBookingSuccess({ name: form.name, datetime: form.datetime });
    setPage("success");
    setTimeout(() => {
      setBookingSuccess(null);
      setPage("landing");
      setSelectedDoctor(null);
    }, 3000);
  };

  return (
    <>
      {page === "landing" && (
        <LandingPage onDoctorClick={handleDoctorClick} />
      )}
      {page === "profile" && selectedDoctor && (
        <DoctorProfilePage doctor={selectedDoctor} onBack={handleBack} onBook={handleBook} />
      )}
      {page === "book" && selectedDoctor && (
        <BookAppointment doctor={selectedDoctor} onBack={handleBack} onConfirm={handleBookingConfirmed} />
      )}
      {page === "success" && bookingSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="text-2xl font-bold text-green-600 mb-2">Booked Successfully!</div>
            <div className="text-gray-700 mb-1">Patient: <span className="font-semibold">{bookingSuccess.name}</span></div>
            <div className="text-gray-700">Time: <span className="font-semibold">{bookingSuccess.datetime}</span></div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

