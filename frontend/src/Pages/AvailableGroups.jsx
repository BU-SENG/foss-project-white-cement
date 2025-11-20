// AvailableGroups.jsx
import React, { useState } from "react";
import { Settings, Bell, Search, BookOpen, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Mock Data
const bestMatchData = {
  match: 98,
  title: "Advanced Algorithms Study Group",
  description:
    "A highly collaborative group focused on weekly problem sets and rigorous exam preparation. We meet twice a week online and value active participation.",
  members: {
    count: 4,
    list: ["J", "S", "A", "M"],
  },
};

const recommendedGroups = [
  {
    match: 92,
    title: "Data Structures Practice",
    description:
      "Weekly review of core data structures. Focus on collaborative problem-solving.",
    members: { list: ["S", "D"], extra: 2 },
  },
  {
    match: 88,
    title: "Calculus II Peer Tutors",
    description:
      "A friendly group for tackling tough Calculus concepts and homework together.",
    members: { list: ["C", "T", "P"], extra: 0 },
  },
  {
    match: 85,
    title: "Organic Chemistry Crew",
    description:
      "Let's conquer O-Chem! We meet weekly for flashcards and reaction mechanism practice.",
    members: { list: ["O", "C", "R"], extra: 0 },
  },
];

// Member Avatars
const MemberAvatars = ({ members, isLarge = false }) => {
  const sizeClass = isLarge ? "w-8 h-8 text-sm" : "w-6 h-6 text-xs";
  const overlapClass = isLarge ? "-ml-2" : "-ml-1";

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {members.list.map((initial, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${sizeClass} font-bold rounded-full bg-gray-700 ring-2 ring-gray-900 ${
              index > 0 ? overlapClass : ""
            }`}
          >
            {initial}
          </div>
        ))}
        {members.extra > 0 && (
          <div
            className={`flex items-center justify-center ${sizeClass} font-bold rounded-full bg-blue-600 ring-2 ring-gray-900 ${overlapClass}`}
          >
            +{members.extra}
          </div>
        )}
      </div>
      {isLarge && (
        <span className="text-gray-400 ml-4">Members ({members.count})</span>
      )}
    </div>
  );
};

// UPDATED Header with Active Link Logic + Mobile Menu
const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
      : "text-gray-400 hover:text-white transition duration-150";

  const mobileLinkClass = (path) =>
    location.pathname === path
      ? "text-blue-400 font-semibold py-2 px-2 rounded-md bg-gray-700"
      : "text-gray-300 hover:text-white py-2 px-2 rounded-md hover:bg-gray-700";

  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex items-center space-x-2">
          <BookOpen className="text-blue-400 w-6 h-6" />
          <span className="text-xl font-bold text-white">StudySync</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm">
          <Link to="/dashboard" className={isActive("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/find-group" className={isActive("/find-group")}>
            Find Group
          </Link>
          <Link to="/available-groups" className={isActive("/available-groups")}>
            Available Groups
          </Link>
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

          {/* Mobile menu button */}
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

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav className="md:hidden px-4 pb-3 flex flex-col gap-2 text-sm">
          <Link to="/dashboard" className={mobileLinkClass("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/find-group" className={mobileLinkClass("/find-group")}>
            Find Group
          </Link>
          <Link
            to="/available-groups"
            className={mobileLinkClass("/available-groups")}
          >
            Available Groups
          </Link>
        </nav>
      )}
    </header>
  );
};

// Best Match Card
const BestMatchCard = ({ data }) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl flex flex-col lg:flex-row justify-between items-start lg:items-center">
    <div className="flex-1 min-w-0 mb-4 lg:mb-0">
      <div className="flex items-center mb-2 space-x-3">
        <span className="bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
          Best Match
        </span>
        <span className="text-green-400 text-sm font-semibold">
          {data.match}% Match
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
      <p className="text-gray-400 text-base mb-4 lg:mb-6 max-w-2xl">
        {data.description}
      </p>

      <MemberAvatars members={data.members} isLarge={true} />
    </div>

    <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
      Join Group
    </button>
  </div>
);

// Recommended Group Card
const RecommendedGroupCard = ({ data }) => (
  <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex flex-col h-full hover:shadow-2xl transition duration-200">
    <span className="text-blue-400 text-sm font-semibold mb-2">
      {data.match}% Match
    </span>
    <h4 className="text-xl font-semibold text-white mb-2">{data.title}</h4>
    <p className="text-gray-400 text-sm grow mb-4">{data.description}</p>

    <div className="mt-auto pt-3 border-t border-gray-700">
      <span className="text-gray-400 text-xs font-medium uppercase block mb-2">
        Members
      </span>
      <MemberAvatars members={data.members} isLarge={false} />
    </div>

    <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
      Join Group
    </button>
  </div>
);

// MAIN PAGE
const AvailableGroups = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-white">
          Your Study Group Matches
        </h1>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            Your Best Group Match
          </h2>
          <BestMatchCard data={bestMatchData} />
        </section>

        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-300 mb-4 md:mb-0">
              Other Recommended Groups
            </h2>

            <div className="flex space-x-3 text-sm">
              {["Sort by: Best Match", "Course: All", "Members: Any"].map(
                (placeholder, index) => (
                  <select
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "0.8em 0.8em",
                    }}
                  >
                    <option>{placeholder}</option>
                  </select>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedGroups.map((group, index) => (
              <RecommendedGroupCard key={index} data={group} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AvailableGroups;
// 100% responsive design for all components and sections
// Clean and modern UI/UX with intuitive navigation
// Reusable components for member avatars and group cards