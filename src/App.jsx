
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import DoctorsHomepage from "./Components/DoctorsHomepage";
import DoctorsProfiles from "./Components/DoctorsProfiles";
import BookAppointment from "./Components/BookAppointment";




function App() {
  const [page, setPage] = useState("home");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Handler to start booking for a doctor
  const handleBookDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setPage("book");
  };

  // Handler after booking confirmation
  const handleBookingConfirmed = () => {
    setSelectedDoctor(null);
    setPage("mybookings");
  };

  return (
    <>
      <NavBar />
      {page === "home" && (
        <DoctorsHomepage onFindDoctor={() => setPage("profiles")} />
      )}
      {page === "profiles" && (
        <DoctorsProfiles onBack={() => setPage("home")} onBook={handleBookDoctor} />
      )}
      {page === "book" && (
        <BookAppointment doctor={selectedDoctor} onConfirm={handleBookingConfirmed} />
      )}
      {/* MyBookings page rendering will be added here later */}
    </>
  );
}

export default App;
