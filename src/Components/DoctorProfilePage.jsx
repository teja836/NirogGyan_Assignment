import React from "react";
import doctorImg from "../assets/image.jpeg";

const DoctorProfilePage = ({ doctor, onBook, onBack }) => {
  if (!doctor) return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <div className="text-center text-gray-500">No doctor selected.</div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={onBack}>Back</button>
    </div>
  );

  // Example schedule (in real app, this would come from doctor data)
  const schedule = [
    { day: "Monday", time: "10:00 AM - 2:00 PM" },
    { day: "Tuesday", time: "2:00 PM - 6:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 2:00 PM" },
    { day: "Thursday", time: "On Leave" },
    { day: "Friday", time: "10:00 AM - 2:00 PM" },
    { day: "Saturday", time: "10:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Not Available" },
  ];

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <button className="mb-6 text-blue-600 hover:underline" onClick={onBack}>&larr; Back to Doctors</button>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <img
          src={doctor.image || doctorImg}
          alt={doctor.name}
          className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100"
        />
        <div className="text-2xl font-bold mb-1">{doctor.name}</div>
        <div className="text-blue-600 mb-2">{doctor.specialization}</div>
        <div className="text-sm font-medium mb-1">{doctor.status}</div>
        <div className="w-full flex flex-col items-center mb-4">
          <div className="text-gray-700 text-sm mb-1"><span className="font-semibold">Experience:</span> 12+ years</div>
          <div className="text-gray-700 text-sm mb-1"><span className="font-semibold">Education:</span> MBBS, MD (AIIMS Delhi)</div>
          <div className="text-gray-700 text-sm mb-1"><span className="font-semibold">Languages:</span> English, Hindi</div>
          <div className="text-gray-700 text-sm"><span className="font-semibold">Bio:</span> Passionate about patient care and evidence-based medicine. Recognized for excellent communication and diagnostic skills.</div>
        </div>
        <div className="w-full mb-4 flex flex-col items-center">
          <h2 className="text-base font-semibold mb-2 text-gray-700">Availability Schedule</h2>
          <div className="w-full max-w-xs bg-blue-50 rounded-lg shadow-sm p-2">
            <table className="w-full text-xs text-left">
              <thead>
                <tr>
                  <th className="py-1 px-2 text-gray-600">Day</th>
                  <th className="py-1 px-2 text-gray-600">Time</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((slot, idx) => (
                  <tr key={idx}>
                    <td className="py-1 px-2 text-gray-800 font-medium">{slot.day}</td>
                    <td className="py-1 px-2 text-gray-700">{slot.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition shadow"
          onClick={() => onBook && onBook(doctor)}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
