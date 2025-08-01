import React, { useState } from "react";

// Sample doctor data (15+ types)
const DOCTORS = [
  {
    id: 1,
    name: "Dr. Asha Verma",
    specialty: "Cardiologist",
    experience: 12,
    location: "Delhi",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    about: "Expert in heart diseases, hypertension, and preventive cardiology.",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialty: "Dermatologist",
    experience: 9,
    location: "Mumbai",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    about: "Specialist in skin, hair, and nail disorders. Laser and cosmetic treatments.",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialty: "Pediatrician",
    experience: 7,
    location: "Bangalore",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    about: "Child specialist for newborns to teens. Vaccination and growth expert.",
  },
  {
    id: 4,
    name: "Dr. Anil Mehta",
    specialty: "Orthopedic Surgeon",
    experience: 15,
    location: "Chennai",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    about: "Bone, joint, and sports injury specialist. Knee/hip replacement expert.",
  },
  {
    id: 5,
    name: "Dr. Sunita Rao",
    specialty: "Gynecologist",
    experience: 10,
    location: "Hyderabad",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    about: "Women's health, pregnancy, infertility, and menstrual disorders.",
  },
  {
    id: 6,
    name: "Dr. Vikram Singh",
    specialty: "Neurologist",
    experience: 13,
    location: "Pune",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    about: "Brain, spine, and nerve disorders. Stroke and epilepsy expert.",
  },
  {
    id: 7,
    name: "Dr. Meera Joshi",
    specialty: "ENT Specialist",
    experience: 8,
    location: "Kolkata",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    about: "Ear, nose, throat, allergy, and sinus specialist.",
  },
  {
    id: 8,
    name: "Dr. Suresh Patil",
    specialty: "Urologist",
    experience: 11,
    location: "Ahmedabad",
    photo: "https://randomuser.me/api/portraits/men/70.jpg",
    about: "Kidney, bladder, and prostate disorders. Stone and infertility expert.",
  },
  {
    id: 9,
    name: "Dr. Kavita Nair",
    specialty: "Psychiatrist",
    experience: 14,
    location: "Jaipur",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    about: "Mental health, stress, anxiety, and depression specialist.",
  },
  {
    id: 10,
    name: "Dr. Manoj Gupta",
    specialty: "General Physician",
    experience: 6,
    location: "Lucknow",
    photo: "https://randomuser.me/api/portraits/men/80.jpg",
    about: "Fever, infections, diabetes, hypertension, and general health.",
  },
  {
    id: 11,
    name: "Dr. Ritu Malhotra",
    specialty: "Dentist",
    experience: 8,
    location: "Bhopal",
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
    about: "Tooth, gum, braces, and smile makeover specialist.",
  },
  {
    id: 12,
    name: "Dr. Arvind Sinha",
    specialty: "Ophthalmologist",
    experience: 10,
    location: "Patna",
    photo: "https://randomuser.me/api/portraits/men/82.jpg",
    about: "Eye, vision, cataract, and LASIK surgery expert.",
  },
  {
    id: 13,
    name: "Dr. Neha Jain",
    specialty: "Endocrinologist",
    experience: 9,
    location: "Indore",
    photo: "https://randomuser.me/api/portraits/women/83.jpg",
    about: "Thyroid, diabetes, obesity, and hormone disorders.",
  },
  {
    id: 14,
    name: "Dr. Pankaj Mishra",
    specialty: "Pulmonologist",
    experience: 7,
    location: "Nagpur",
    photo: "https://randomuser.me/api/portraits/men/84.jpg",
    about: "Lung, asthma, allergy, and sleep disorder specialist.",
  },
  {
    id: 15,
    name: "Dr. Shalini Kapoor",
    specialty: "Oncologist",
    experience: 12,
    location: "Chandigarh",
    photo: "https://randomuser.me/api/portraits/women/85.jpg",
    about: "Cancer diagnosis, chemotherapy, and cancer care expert.",
  },
  {
    id: 16,
    name: "Dr. Ajay Deshmukh",
    specialty: "Gastroenterologist",
    experience: 11,
    location: "Surat",
    photo: "https://randomuser.me/api/portraits/men/86.jpg",
    about: "Stomach, liver, intestine, and digestive disorder specialist.",
  },
  {
    id: 17,
    name: "Dr. Sneha Reddy",
    specialty: "Rheumatologist",
    experience: 10,
    location: "Vijayawada",
    photo: "https://randomuser.me/api/portraits/women/87.jpg",
    about: "Arthritis, joint pain, and autoimmune disease specialist.",
  },
  {
    id: 18,
    name: "Dr. Karan Patel",
    specialty: "Nephrologist",
    experience: 12,
    location: "Rajkot",
    photo: "https://randomuser.me/api/portraits/men/88.jpg",
    about: "Kidney diseases, dialysis, and transplant expert.",
  },
  {
    id: 19,
    name: "Dr. Farah Siddiqui",
    specialty: "Immunologist",
    experience: 8,
    location: "Aligarh",
    photo: "https://randomuser.me/api/portraits/women/89.jpg",
    about: "Allergy, immune system, and vaccination specialist.",
  },
  {
    id: 20,
    name: "Dr. Rakesh Sharma",
    specialty: "Plastic Surgeon",
    experience: 14,
    location: "Kanpur",
    photo: "https://randomuser.me/api/portraits/men/90.jpg",
    about: "Cosmetic, reconstructive, and burn surgery expert.",
  },
  {
    id: 21,
    name: "Dr. Ananya Ghosh",
    specialty: "Hematologist",
    experience: 9,
    location: "Howrah",
    photo: "https://randomuser.me/api/portraits/women/91.jpg",
    about: "Blood disorders, anemia, and clotting disease specialist.",
  },
  {
    id: 22,
    name: "Dr. Prakash Nair",
    specialty: "Infectious Disease Specialist",
    experience: 15,
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/men/92.jpg",
    about: "Expert in viral, bacterial, and tropical diseases, travel medicine.",
  },
  {
    id: 23,
    name: "Dr. Roshni Bansal",
    specialty: "Geneticist",
    experience: 7,
    location: "Gurgaon",
    photo: "https://randomuser.me/api/portraits/women/93.jpg",
    about: "Genetic counseling, rare diseases, and hereditary disorder specialist.",
  },
  {
    id: 24,
    name: "Dr. Deepak Chatterjee",
    specialty: "Pain Management Specialist",
    experience: 11,
    location: "Kolkata",
    photo: "https://randomuser.me/api/portraits/men/94.jpg",
    about: "Chronic pain, palliative care, and advanced pain therapies expert.",
  },
];

const DoctorsProfiles = ({ onBack, onBook }) => {
  const [search, setSearch] = useState("");
  // ...existing code...

  // Filter doctors by specialty or name
  const filteredDoctors = DOCTORS.filter((doc) =>
    doc.specialty.toLowerCase().includes(search.toLowerCase()) ||
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle Book Appointment click: call onBook prop if provided
  const handleBookClick = (doctor) => {
    if (typeof onBook === 'function') {
      onBook(doctor);
    }
  };

  // ...existing code...

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-2 sm:px-6" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center mb-8 gap-4 w-full">
          {/* Back button left, search bar centered on large screens */}
          <div className="w-full flex items-center sm:justify-center sm:gap-4">
            <div className="flex-shrink-0">
              <button
                className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition flex items-center justify-center mr-2 sm:mr-0 sm:mb-0 mb-2"
                style={{ minWidth: 0 }}
                onClick={onBack}
                aria-label="Back"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex-grow flex justify-center">
              <input
                type="text"
                placeholder="Search by specialty or doctor name..."
                className="w-full sm:w-80 px-4 py-2 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDoctors.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg">No doctors found for your search.</div>
          ) : (
            filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <img src={doc.photo} alt={doc.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100" />
                <h3 className="text-lg font-bold text-blue-700 mb-1">{doc.name}</h3>
                <div className="text-blue-500 font-semibold mb-1">{doc.specialty}</div>
                <div className="text-gray-600 text-sm mb-1">{doc.location} &bull; {doc.experience} yrs exp.</div>
                <div className="text-gray-700 text-sm mb-2">{doc.about}</div>
                <button
                  className="mt-auto px-3 py-1.5 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition text-sm"
                  onClick={() => handleBookClick(doc)}
                >
                  Book Appointment
                </button>
              </div>
            ))
          )}
        </div>
        {/* ...existing code... */}
        {/* Testimonials Section */}
        <div className="mt-12 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6 text-center">What Our Patients Say</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center max-w-xs w-full">
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Amit Sharma" className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-blue-100" />
              <div className="font-semibold text-blue-700">Amit Sharma</div>
              <div className="flex items-center mb-1 mt-1">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.3 6.1,11.2 4.8,17.1 9.9,14.1 15,17.1 13.7,11.2 18.2,7.3 12.2,6.6 "/></svg>
                ))}
              </div>
              <div className="text-gray-700 text-sm text-center">“Booking an appointment was so easy and the doctor was very helpful. Highly recommend!”</div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center max-w-xs w-full">
              <img src="https://randomuser.me/api/portraits/women/34.jpg" alt="Priya Saini" className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-blue-100" />
              <div className="font-semibold text-blue-700">Priya Saini</div>
              <div className="flex items-center mb-1 mt-1">
                {[...Array(4)].map((_,i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.3 6.1,11.2 4.8,17.1 9.9,14.1 15,17.1 13.7,11.2 18.2,7.3 12.2,6.6 "/></svg>
                ))}
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.3 6.1,11.2 4.8,17.1 9.9,14.1 15,17.1 13.7,11.2 18.2,7.3 12.2,6.6 "/></svg>
              </div>
              <div className="text-gray-700 text-sm text-center">“I found the right specialist for my child in minutes. Great service and support!”</div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center max-w-xs w-full">
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="Suresh Kumar" className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-blue-100" />
              <div className="font-semibold text-blue-700">Suresh Kumar</div>
              <div className="flex items-center mb-1 mt-1">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.3 6.1,11.2 4.8,17.1 9.9,14.1 15,17.1 13.7,11.2 18.2,7.3 12.2,6.6 "/></svg>
                ))}
              </div>
              <div className="text-gray-700 text-sm text-center">“DoctorsDesk is trustworthy and fast. I got an appointment the same day!”</div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 text-center">Can’t find your doctor? Let us help you.</div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition text-base sm:text-lg">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsProfiles;
