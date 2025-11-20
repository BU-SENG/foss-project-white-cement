// FindGroup.jsx
import React, { useState } from "react";
import { Settings, Bell, Search, BookOpen, Menu, X } from "lucide-react";

export default function FindGroup() {
  // Interests (multi-select)
  const chipOptions = [
    "Artificial Intelligence",
    "Mathematics",
    "Chemistry",
    "Open Source",
    "Computer Science",
    "Literature",
    "Physics",
  ];

  const [selectedChips, setSelectedChips] = useState([]);

  const toggleChip = (chip) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  // Study Style (single-select)
  const studyStyles = ["Quiet", "Collaborative", "Interactive"];
  const [selectedStyle, setSelectedStyle] = useState(null);

  // Availability (multi-select)
  const availabilityOptions = [
    "Weekday Mornings",
    "Weekday Evenings",
    "Weekend Afternoons",
    "Weekend Evenings",
    "Weekend Mornings",
  ];

  const [selectedAvailability, setSelectedAvailability] = useState([]);

  const toggleAvailability = (item) => {
    setSelectedAvailability((prev) =>
      prev.includes(item)
        ? prev.filter((x) => x !== item)
        : [...prev, item]
    );
  };

  // Skill Level (single-select)
  const skillLevels = ["Beginner", "Intermediate", "Advanced"];
  const [selectedLevel, setSelectedLevel] = useState(null);

  // ✅ mobile nav toggle state (added)
  const [mobileOpen, setMobileOpen] = useState(false);

  // Redirect
  const handleSubmit = () => {
    window.location.href = "/available-groups";
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="flex justify-between items-center px-4 py-3 md:px-8">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-blue-400 w-6 h-6" />
            <span className="text-xl font-bold text-white">StudySync</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <a
              href="/dashboard"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              Dashboard
            </a>

            <a
              href="/find-group"
              className="text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
            >
              Find Group
            </a>

            <a
              href="/available-groups"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              Available Groups
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="text-gray-400 hover:text-white transition duration-150 hidden sm:block"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              aria-label="Settings"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              <Settings className="w-5 h-5" />
            </button>

            <button
              aria-label="Notifications"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              <Bell className="w-5 h-5" />
            </button>

            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-base cursor-pointer">
              K
            </div>

            {/* ✅ Mobile menu button (added) */}
            <button
              className="md:hidden text-gray-200 hover:text-white"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ✅ Mobile nav dropdown (added) */}
        {mobileOpen && (
          <nav className="md:hidden px-4 pb-3 flex flex-col gap-2 text-sm">
            <a
              href="/dashboard"
              className="text-gray-300 hover:text-white py-2 px-2 rounded-md hover:bg-gray-700"
            >
              Dashboard
            </a>

            <a
              href="/find-group"
              className="text-blue-400 font-semibold py-2 px-2 rounded-md bg-gray-700"
            >
              Find Group
            </a>

            <a
              href="/available-groups"
              className="text-gray-300 hover:text-white py-2 px-2 rounded-md hover:bg-gray-700"
            >
              Available Groups
            </a>
          </nav>
        )}
      </header>

      {/* INLINE STYLES (unchanged) */}
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #0f172a;
        }
        .find-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          color: #fff;
        }
        .page-title {
          font-size: 2rem;
          font-weight: 700;
        }
        .subtitle {
          color: #94a3b8;
          margin-bottom: 2rem;
        }
        .card {
          background-color: #1e293b;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border: 1px solid #334155;
        }
        .section-title {
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .search-bar {
          width: 100%;
          padding: 0.8rem;
          border-radius: 10px;
          border: 1px solid #334155;
          background-color: #0f172a;
          color: white;
          outline: none;
        }
        .chip-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-top: 1rem;
        }
        .chip {
          padding: 0.45rem 0.9rem;
          border-radius: 20px;
          background-color: #0f172a;
          border: 1px solid #334155;
          color: #cbd5e1;
          cursor: pointer;
          transition: 0.2s;
          font-size: 0.85rem;
        }
        .chip.selected {
          background-color: #3b82f6;
          border-color: #3b82f6;
          color: #fff;
        }
        .select-row {
          display: flex;
          gap: 1rem;
        }
        .select-btn {
          flex: 1;
          padding: 1rem;
          background-color: #0f172a;
          border: 1px solid #334155;
          color: #cbd5e1;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s;
        }
        .select-btn.selected {
          background-color: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }
        .availability-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
        }
        .avail-btn {
          background-color: #0f172a;
          border: 1px solid #334155;
          padding: 0.8rem;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s;
          color: #cbd5e1;
        }
        .avail-btn.selected {
          background-color: #1d4ed8;
          border-color: #1d4ed8;
          color: white;
        }
        .submit-btn {
          width: 100%;
          margin-top: 1rem;
          background-color: #3b82f6;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: 0.2s;
        }
        .submit-btn:hover {
          background-color: #2563eb;
        }
      `}</style>

      {/* PAGE CONTENT */}
      <div className="find-container">
        <h1 className="page-title">Find Your Perfect Study Group</h1>
        <p className="subtitle">
          Select your preferences below to get matched with the best groups for you.
        </p>

        {/* INTERESTS */}
        <div className="card">
          <p className="section-title">Select Your Interests</p>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for interests like 'AI' or 'Math'"
          />

          <div className="chip-container">
            {chipOptions.map((chip) => (
              <div
                key={chip}
                className={`chip ${selectedChips.includes(chip) ? "selected" : ""}`}
                onClick={() => toggleChip(chip)}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        {/* STUDY STYLE (single-select) */}
        <div className="card">
          <p className="section-title">What's Your Study Style?</p>
          <div className="select-row">
            {studyStyles.map((style) => (
              <div
                key={style}
                className={`select-btn ${selectedStyle === style ? "selected" : ""}`}
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </div>
            ))}
          </div>
        </div>

        {/* AVAILABILITY (multi-select) */}
        <div className="card">
          <p className="section-title">Your Availability</p>
          <div className="availability-grid">
            {availabilityOptions.map((item) => (
              <div
                key={item}
                className={`avail-btn ${selectedAvailability.includes(item) ? "selected" : ""}`}
                onClick={() => toggleAvailability(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SKILL LEVEL (single select) */}
        <div className="card">
          <p className="section-title">Preferred Skill Level</p>
          <div className="select-row">
            {skillLevels.map((level) => (
              <div
                key={level}
                className={`select-btn ${selectedLevel === level ? "selected" : ""}`}
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button className="submit-btn" onClick={handleSubmit}>
          Find My Group
        </button>
      </div>
    </>
  );
}
// ✅ mobile nav toggle state and dropdown menu