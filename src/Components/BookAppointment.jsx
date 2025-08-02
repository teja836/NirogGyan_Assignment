import React, { useState } from "react";

const BookAppointment = ({ doctor, onBack, onConfirm }) => {
  const [form, setForm] = useState({ name: "", email: "", datetime: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof onConfirm === 'function') {
      onConfirm(form);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Appointment Confirmed!</h2>
        <div className="mb-2">
          <div className="text-lg font-semibold text-blue-700">{doctor?.name}</div>
          <div className="text-sm text-gray-700 mb-2">{doctor?.specialization}</div>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Patient:</span> {form.name}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Date & Time:</span> {form.datetime}
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={onBack}>Back</button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <button className="mb-6 text-blue-600 hover:underline" onClick={onBack}>&larr; Back</button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Book Appointment{doctor?.name ? ` with ${doctor.name}` : ""}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="datetime-local"
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            required
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
