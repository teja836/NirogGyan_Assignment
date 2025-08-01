import React, { useState } from "react";

const BookAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !date || !time) return;
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">Appointment Confirmed!</h3>
          <div className="text-gray-700 text-center mb-2">Thank you, {name}! Your appointment is booked for {date} at {time}.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Book Appointment</h3>
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Patient Name"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="date"
            required
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <input
            type="time"
            required
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700 transition">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
