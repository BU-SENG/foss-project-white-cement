import React from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Main Header Component
const Header = () => (
  <header className="flex justify-between items-center px-4 py-3.5 md:px-8 bg-gray-800 border-b border-gray-700 shadow-lg">
    
    {/* Logo */}
    <div className="flex items-center space-x-2 text-white">
      <BookOpen className="text-blue-400 w-6 h-6" />
      <span className="text-xl font-bold text-white">StudySync</span>
    </div>

    {/* No extra links, just leave whatever was meant to be here */}
    {/* Removed Login / Signup button only */}
  </header>
);

// Hero Content Component
const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/find-group'); // Redirect to FindGroup page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl leading-tight mb-6 text-white">
        Join study groups easily.
      </h1>
      
      <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 font-normal">
        Connect with fellow students, share knowledge, and achieve your academic goals together. Find your perfect study group today.
      </p>
      
      <button
        onClick={handleGetStarted}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Started
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#111827] font-sans">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
