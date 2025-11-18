import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Dashboard() {
  const members = [
    { name: "Okoye Kennedy", role: "Admin" },
    { name: "Omoware Ogheneyoma Russell" },
    { name: "Olaitan Temitayo" },
    { name: "Olajide Joseph Olabisi" },
    { name: "Oloyede Kikelomo Azeezat" },
    { name: "Olusegun Samuel Feyisetan" },
    { name: "Omenka Chimaanda Petra-angelica" },
    { name: "Okon Christopher Ulo" },
    { name: "Oni Eniola Joseph" },
    { name: "Onikate-amosu Olamikun Abdul-lateef" }
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body, html { margin: 0; padding: 0; height: 100%; }
        .header {
          display: flex; 
          align-items: center; 
          padding: 1rem 2rem; 
          background-color: #1e293b; 
          color: #fff; 
          font-family: 'Poppins', sans-serif;
          border-bottom: 1px solid #334155; /* subtle bottom border line */
        }
        .header span { margin-left: 0.5rem; font-size: 1.5rem; font-weight: 700; }
        .dashboard { display: flex; height: calc(100vh - 64px); background-color: #0f172a; color: #fff; font-family: 'Poppins', sans-serif; overflow: hidden; }
        .sidebar { width: 220px; background-color: #1e293b; display: flex; flex-direction: column; justify-content: space-between; padding: 1rem; }
        .user-info { display: flex; align-items: center; gap: 0.5rem; }
        .name { font-weight: 600; }
        .email { font-size: 0.6rem; color: #94a3b8; }
        .nav-links a, .bottom-links a { display: block; padding: 0.5rem 0; color: #cbd5e1; text-decoration: none; transition: 0.2s; }
        .nav-links a:hover, .bottom-links a:hover { color: white; }
        .nav-links a.active { background-color: #3b82f6; padding: 0.5rem; border-radius: 6px; color: #fff; }
        .main { flex: 1; padding: 2rem; overflow-y: auto; height: 100%; }
        .breadcrumb { color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem; }
        .group-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .group-header h2 { font-size: 1.5rem; font-weight: 700; margin: 0; }
        .group-header p { font-size: 0.9rem; color: #94a3b8; margin: 0.25rem 0 0 0; }
        .leave-button { background-color: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; transition: 0.2s; }
        .leave-button:hover { background-color: #dc2626; }
        .members-section h3 { margin-bottom: 1rem; }
        .member-list { list-style: none; padding: 0; margin: 0; }
        .member-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; padding: 0.4rem 0.5rem; border-radius: 6px; transition: 0.2s; }
        .member-list li:hover { background-color: #1e293b; }
        .member-name { flex: 1; }
        .tag { font-size: 0.95rem; padding: 0.4rem 0.7rem; border-radius: 9999px; font-weight: 500; }
        .tag.admin { background-color: #fbbf24; color: #1f2937; }
      `}</style>

      {/* Top Header */}
      <header className="flex justify-between items-center px-4 py-3 md:px-8 bg-gray-800 border-b border-gray-700 shadow-lg">
              <div className="flex items-center space-x-2">
                <BookOpen className="text-blue-400 w-6 h-6" />
                <span className="text-xl font-bold text-white">StudySync</span>
              </div>
      </header>

      <div className="dashboard">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="user-info">
            <div>
              <p className="name">Okoye Kennedy</p>
              <p className="email">kennedy21@student.babcock.edu.ng</p>
            </div>
          </div>

          <nav className="nav-links">
            <Link to="/" className="">🏠 Home</Link>
            <Link to="/dashboard" className="active">👥 My Groups</Link>
            <Link to="/find-group">🔍 Find a Group</Link>
            <Link to="/available-groups">👤 Available Groups</Link>
          </nav>

          <div className="bottom-links">
            <Link to="/settings">⚙ Settings</Link>
            <Link to="/login">🚪 Log Out</Link>
          </div>
        </aside>

        {/* Main area */}
        <main className="main">
          <div className="breadcrumb">
            My Groups / <span>Free Open Source Software Study Group</span>
          </div>

          <div className="group-header">
            <div>
              <h2>Free Open Source Software Study Group</h2>
              <p>Next Meeting: Wednesdays at 4:00 PM PST</p>
            </div>

            {/* Leave Group button redirects to Available Groups */}
            <Link to="/available-groups">
              <button className="leave-button">Leave Group</button>
            </Link>
          </div>

          <div className="members-section">
            <h3>Members ({members.length})</h3>

            <ul className="member-list">
              {members.map((member, index) => (
                <li key={index}>
                  <span className="member-name">{member.name}</span>
                  {member.role === "Admin" && (
                    <span className="tag admin">Admin</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
