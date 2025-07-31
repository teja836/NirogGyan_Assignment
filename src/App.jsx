
import "./App.css";
import DoctorsCard from "./Components/DoctorsCard";


function App() {
  // Example doctor object for demonstration
  const doctor = {
    id: 1,
    name: 'Dr. Jane Doe',
    specialization: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    available: true,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <DoctorsCard doctor={doctor} />
    </div>
  );
}

export default App;
