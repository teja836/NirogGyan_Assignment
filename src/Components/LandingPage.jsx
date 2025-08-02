
import React, { useState } from "react";
import doctorImg from "../assets/image.jpeg";

// Example doctor data
const doctorsList = [
  {
    id: 1,
    name: "Dr. Asha Mehta",
    specialization: "Cardiologist",
    image: doctorImg,
    status: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Rohan Singh",
    specialization: "Dermatologist",
    image: doctorImg,
    status: "Fully Booked",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialization: "Pediatrician",
    image: doctorImg,
    status: "On Leave",
  },
  {
    id: 4,
    name: "Dr. Vivek Patel",
    specialization: "Orthopedic",
    image: doctorImg,
    status: "Available Today",
  },
  {
    id: 5,
    name: "Dr. Sneha Kapoor",
    specialization: "Gynecologist",
    image: doctorImg,
    status: "Available Today",
  },
  {
    id: 6,
    name: "Dr. Amit Desai",
    specialization: "ENT Specialist",
    image: doctorImg,
    status: "Fully Booked",
  },
  {
    id: 7,
    name: "Dr. Neha Verma",
    specialization: "Neurologist",
    image: doctorImg,
    status: "On Leave",
  },
  {
    id: 8,
    name: "Dr. Rajeev Nair",
    specialization: "General Physician",
    image: doctorImg,
    status: "Available Today",
  },
  {
    id: 9,
    name: "Dr. Kavita Joshi",
    specialization: "Psychiatrist",
    image: doctorImg,
    status: "Fully Booked",
  },
  {
    id: 10,
    name: "Dr. Manish Gupta",
    specialization: "Urologist",
    image: doctorImg,
    status: "Available Today",
  },
  {
    id: 11,
    name: "Dr. Anjali Rao",
    specialization: "Ophthalmologist",
    image: doctorImg,
    status: "On Leave",
  },
  {
    id: 12,
    name: "Dr. Suresh Iyer",
    specialization: "Pulmonologist",
    image: doctorImg,
    status: "Available Today",
  },
  {
    id: 13,
    name: "Dr. Meera Shah",
    specialization: "Endocrinologist",
    image: doctorImg,
    status: "Fully Booked",
  },
  {
    id: 14,
    name: "Dr. Pankaj Jain",
    specialization: "Gastroenterologist",
    image: doctorImg,
    status: "Available Today",
  },
  {
    id: 15,
    name: "Dr. Farhan Qureshi",
    specialization: "Nephrologist",
    image: doctorImg,
    status: "Available Today",
  },
  // 15 total doctors
];

const statusColors = {
  "Available Today": "text-green-600",
  "Fully Booked": "text-red-500",
  "On Leave": "text-yellow-500",
};

const LandingPage = ({ onDoctorClick }) => {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctorsList.filter((doc) => {
    const q = search.toLowerCase();
    return (
      doc.name.toLowerCase().includes(q) ||
      doc.specialization.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Health Care Appointment</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
        {filteredDoctors.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No doctors found.</div>
        ) : (
          filteredDoctors.map((doc) => (
            <button
              key={doc.id}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-row sm:flex-col items-center sm:items-center hover:shadow-xl transition-shadow duration-200 focus:outline-none"
              onClick={() => typeof onDoctorClick === 'function' && onDoctorClick(doc)}
              tabIndex={0}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover mb-0 sm:mb-3 border-4 border-blue-100"
              />
              <div className="flex-1 ml-4 sm:ml-0 flex flex-col items-start sm:items-center w-full">
                <div className="text-lg font-semibold mb-1">{doc.name}</div>
                <div className="text-blue-600 mb-1">{doc.specialization}</div>
                <div className={`text-sm font-medium ${statusColors[doc.status]} mb-2`}>{doc.status}</div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default LandingPage;
