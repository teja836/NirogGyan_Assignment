
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorsCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctors/${doctor.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
      onClick={handleClick}
    >
      <img
        src={doctor.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
        alt={doctor.name}
        className="w-24 h-24 rounded-full object-cover mb-3"
      />
      <h2 className="text-lg font-semibold">{doctor.name}</h2>
      <p className="text-gray-500">{doctor.specialization}</p>
      <span
        className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${
          doctor.available
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {doctor.available ? "Available" : "Unavailable"}
      </span>
    </div>
  );
};

export default DoctorsCard;
