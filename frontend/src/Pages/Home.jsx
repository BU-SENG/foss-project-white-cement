import React from 'react';
import { BookOpen } from 'lucide-react';

// Main Header Component
const Header = () => (
  <header className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-10">
    
    {/* Logo */}
    <div className="flex items-center space-x-2 text-white">
      <BookOpen className="w-6 h-6 text-blue-400" />
      <span className="text-xl font-semibold">StudyApp</span>
    </div>
    
    {/* Action Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out text-sm md:text-base">
      Login / Signup
    </button>
  </header>
);

// Hero Content Component
const Hero = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
    
    {/* Headline */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl leading-tight mb-6 text-white">
      Join study groups easily.
    </h1>
    
    {/* Subtitle/Description */}
    <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 font-normal">
      Connect with fellow students, share knowledge, and achieve your academic goals together. Find your perfect study group today.
    </p>
    
    {/* CTA Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      Get Started
    </button>
  </div>
);


// Main Application Component
const App = () => {
  return (
    // Dark background matching the UI image
    <div className="min-h-screen bg-[#111827] font-sans">
      <Header />
      <Hero />
    </div>
  );
};

export default App;